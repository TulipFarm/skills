# Contributing

Thanks for helping grow the TulipFarm skills marketplace. Every skill here is a
natural-language instruction set that any small or medium business can install as-is,
so the bar is **generalizable, original, and safe**.

## Before you start

Read [`AGENTS.md`](AGENTS.md) — it is the authoring contract: the `SKILL.md` format,
the body structure to match, the voice, and the hard rules. A PR that ignores it will
bounce in review.

## Adding or changing a skill

1. Create `skills/<category>/<name>/SKILL.md` with frontmatter `name` + `version` +
   `description`. `name` must be kebab-case and equal the leaf directory name; `version`
   starts at `1.0.0`.
2. Add a matching entry to `marketplace.json` — `skillId` and `name` equal the frontmatter
   `name`, `version` mirrors the frontmatter `version`, `category` matches the folder, and
   `id` is `tulipfarm/skills/<category>/<name>`.
3. When you change an existing skill, bump its `version` in **both** the frontmatter and
   the manifest (patch for wording, minor for added guidance, major for behavior change).

Categories are fixed:
`finance` · `sales-crm` · `customer-support` · `marketing` · `people` · `product` ·
`data` · `design` · `operations` · `engineering` · `productivity`.

## Check it locally

```sh
node scripts/validate-marketplace.mjs   # manifest <-> skills consistency + frontmatter
npx markdownlint-cli2                    # lints README.md + AGENTS.md
```

The validator must pass before you open a PR — CI runs the same check.

## Opening a pull request

- One skill (or one focused change) per PR keeps review fast.
- CI runs three jobs: `validate` (the script above), `markdownlint`, and a dead-link check.
  All three must be green.
- Every install is also gated by SkillAudit and an explicit operator confirmation, but the
  safety bar is set **here**, in review — keep skills free of instructions that read or
  handle secrets, exfiltrate data, or take destructive actions.

## Hard rules (see `AGENTS.md` for the full list)

- **Vendor-neutral** — never name a product or brand; say "your CRM", "your help desk".
- **Original content only** — write from domain expertise; don't copy third-party skills.
- **Advisory natural-language only** — no secret-handling or destructive instructions.
- **Advice caveat** — legal, tax, and financial skills include a "guidance, not professional
  advice" note.

By contributing, you agree your work is licensed under the [MIT License](LICENSE).
