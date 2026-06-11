# AGENTS.md

Operational guide for AI agents (and humans) working in this repository. Read this before
adding or editing a skill.

## What this repo is

The official skills marketplace for [TulipFarm](https://github.com/TulipFarm/tulipfarm), a
self-hosted AI assistant for small and medium businesses. Instances browse `marketplace.json`
via `GET /api/v1/skills/marketplace` and install a skill through the SkillAudit →
operator-confirm flow. Every skill is **generalized to any SMB** — never tied to a specific
company, industry, or product.

## Layout

```
skills/<category>/<name>/SKILL.md        one skill per directory
skills/<category>/<name>/references/*    optional templates the SKILL.md points to
marketplace.json                         catalog manifest (one entry per skill)
README.md                                human-facing overview
```

Categories: `finance` · `sales-crm` · `customer-support` · `marketing` · `people` ·
`product` · `data` · `design` · `operations` · `engineering` · `productivity`.

## SKILL.md format

YAML frontmatter with exactly three keys, then a markdown body:

- `name` — kebab-case, MUST equal the leaf directory name (`^[a-z][a-z0-9-]*$`).
- `version` — semver (`major.minor.patch`), starts at `1.0.0`.
- `description` — one declarative sentence: what it does and what it produces.

Body structure — match the existing skills exactly:

```
# Title Case Name
<1–2 sentence framing line>
## When to use            (2–3 sentences on the triggers)
## How to <verb>          (numbered list, **bold lead-ins**, tight sub-bullets)
## Output format | ## Quality bar | <domain section>   (exactly one closing section)
```

Voice: senior practitioner — opinionated, concrete, anti-fluff, no praise padding. ~40–60 lines.

## Hard rules

- **Vendor-neutral.** Never name a product, brand, or vendor (chat tools, CRMs, accounting
  software, AI assistants, etc.). Refer generically: "your CRM", "your accounting software",
  "your help desk", "your team chat".
- **Original content only.** Write from domain expertise; do not copy or paraphrase
  third-party skills.
- **Advisory natural-language only.** No instructions that read or handle secrets and
  credentials, exfiltrate data, or take destructive/irreversible actions. SkillAudit reviews
  every install, but the bar is set here.
- **Advice caveat.** For legal, tax, or financial topics, include a one-line "guidance, not
  professional advice" note.
- **references/** — add one only when a concrete reusable template earns it, and point to it
  from the body. Most skills need none.

## Adding or changing a skill

1. Create or edit `skills/<category>/<name>/SKILL.md` with frontmatter `name` + `version` +
   `description` and a body in the format above.
2. **Bump `version`** whenever the instructions change: patch = wording, minor = added
   guidance, major = a behavior change.
3. Update `marketplace.json`. Each entry has exactly: `id` (`tulipfarm/skills/<category>/<name>`),
   `skillId` and `name` (both equal the frontmatter `name`), `version` (mirrors the frontmatter),
   `description`, `source` (`tulipfarm/skills`), `category` (matches the folder). No other fields.
4. Keep the manifest ordered by category, then by name. The manifest can be regenerated from the
   SKILL.md frontmatter, so frontmatter is the source of truth — never let the two drift.

## Validate before you finish

- Every `SKILL.md` frontmatter `name` equals its leaf directory; `version` is semver;
  `description` is present.
- `marketplace.json` is valid JSON, one entry per skill, `version` mirrors each frontmatter,
  and there is no `installs` field.
- No product/brand/vendor names appear in any `SKILL.md`.
- Changes land via pull request. Do not commit to `main` directly, and do not commit unless asked.
