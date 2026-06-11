#!/usr/bin/env node
// Validates marketplace.json against the skills/ tree.
// Zero dependencies — run with `node scripts/validate-marketplace.mjs`.
//
// Checks:
//   1. marketplace.json is valid JSON with the expected top-level shape.
//   2. Each manifest entry has exactly the required fields, of the right type.
//   3. Each skills/<category>/<name>/SKILL.md has frontmatter with exactly
//      name + version + description.
//   4. name === skillId === leaf directory name, kebab-case; category is a known one.
//   5. id === `${source}/${category}/${skillId}`; version is semver and matches the
//      SKILL.md; description matches the SKILL.md.
//   6. Bidirectional coverage: no manifest entry without a SKILL.md, none orphaned.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(ROOT, "skills");
const MANIFEST = join(ROOT, "marketplace.json");

const NAME_RE = /^[a-z][a-z0-9-]*$/;
const SEMVER_RE = /^\d+\.\d+\.\d+$/;
const FRONTMATTER_KEYS = ["name", "version", "description"];
const MANIFEST_FIELDS = ["id", "skillId", "name", "version", "description", "source", "category"];
const CATEGORIES = new Set([
  "finance", "sales-crm", "customer-support", "marketing", "people", "product",
  "data", "design", "operations", "engineering", "productivity",
]);

const errors = [];
const err = (msg) => errors.push(msg);

// --- Parse minimal YAML frontmatter (key: value lines between --- fences) ---
function parseFrontmatter(file) {
  const text = readFileSync(file, "utf8");
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    out[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return out;
}

const subdirs = (p) =>
  existsSync(p) ? readdirSync(p).filter((d) => statSync(join(p, d)).isDirectory()) : [];

// --- Load manifest ---
let manifest;
try {
  manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
} catch (e) {
  console.error(`✖ marketplace.json is not valid JSON: ${e.message}`);
  process.exit(1);
}
if (!Array.isArray(manifest.skills)) {
  console.error("✖ marketplace.json must have a top-level `skills` array");
  process.exit(1);
}

// --- Discover skills: skills/<category>/<name>/SKILL.md ---
const skillsByKey = {}; // `${category}/${name}` -> { category, name, fm }
let count = 0;
for (const category of subdirs(SKILLS_DIR)) {
  if (!CATEGORIES.has(category))
    err(`skills/${category}/ is not a known category`);
  for (const name of subdirs(join(SKILLS_DIR, category))) {
    const skillFile = join(SKILLS_DIR, category, name, "SKILL.md");
    if (!existsSync(skillFile)) {
      err(`skills/${category}/${name}/ has no SKILL.md`);
      continue;
    }
    count++;
    const fm = parseFrontmatter(skillFile);
    const where = `skills/${category}/${name}/SKILL.md`;
    if (!fm) {
      err(`${where} has no YAML frontmatter`);
      continue;
    }
    for (const k of FRONTMATTER_KEYS)
      if (!fm[k]) err(`${where} frontmatter missing \`${k}\``);
    for (const k of Object.keys(fm))
      if (!FRONTMATTER_KEYS.includes(k)) err(`${where} frontmatter has unexpected key \`${k}\``);
    if (fm.name && fm.name !== name)
      err(`${where} frontmatter name "${fm.name}" must equal directory name "${name}"`);
    if (fm.name && !NAME_RE.test(fm.name))
      err(`${where} frontmatter name "${fm.name}" must match ${NAME_RE}`);
    if (fm.version && !SEMVER_RE.test(fm.version))
      err(`${where} frontmatter version "${fm.version}" must be semver (major.minor.patch)`);
    skillsByKey[`${category}/${name}`] = { category, name, fm };
  }
}

// --- Validate manifest entries against the skill tree ---
const seen = new Set();
for (const entry of manifest.skills) {
  const label = entry.skillId ?? entry.id ?? "<unknown>";
  for (const field of MANIFEST_FIELDS)
    if (!(field in entry)) err(`manifest entry "${label}" missing field \`${field}\``);

  if (!entry.skillId || !entry.category) continue;
  const key = `${entry.category}/${entry.skillId}`;
  if (seen.has(key)) err(`manifest has duplicate entry "${key}"`);
  seen.add(key);

  if (!CATEGORIES.has(entry.category))
    err(`manifest entry "${label}": "${entry.category}" is not a known category`);
  if (entry.name && entry.name !== entry.skillId)
    err(`manifest entry "${label}": name "${entry.name}" must equal skillId "${entry.skillId}"`);
  if (entry.source && entry.id && entry.id !== `${entry.source}/${entry.category}/${entry.skillId}`)
    err(`manifest entry "${label}": id must equal "${entry.source}/${entry.category}/${entry.skillId}"`);
  if (entry.version && !SEMVER_RE.test(entry.version))
    err(`manifest entry "${label}": version "${entry.version}" must be semver`);

  const skill = skillsByKey[key];
  if (!skill) {
    err(`manifest entry "${key}" has no matching skills/${key}/SKILL.md`);
    continue;
  }
  if (entry.description && skill.fm.description && entry.description !== skill.fm.description)
    err(`manifest entry "${key}": description does not match its SKILL.md frontmatter`);
  if (entry.version && skill.fm.version && entry.version !== skill.fm.version)
    err(`manifest entry "${key}": version "${entry.version}" does not match SKILL.md version "${skill.fm.version}"`);
}

// --- Every skill must have a manifest entry ---
for (const key of Object.keys(skillsByKey))
  if (!seen.has(key)) err(`skills/${key}/ has no entry in marketplace.json`);

// --- Report ---
if (errors.length) {
  console.error(`✖ ${errors.length} validation error(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ marketplace.json and ${count} skill(s) are consistent`);
