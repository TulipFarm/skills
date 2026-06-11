# TulipFarm Skills

The official skills marketplace for [TulipFarm](https://github.com/TulipFarm/tulipfarm).
TulipFarm instances browse this repository via `GET /api/v1/skills/marketplace` and
install skills through the SkillAudit → operator-confirm flow.

These are generalized skills for small and medium businesses — not tied to any one
company, industry, or product — so any instance can install one and use it as-is.

## Layout

```
marketplace.json                     # catalog manifest
skills/<category>/<name>/SKILL.md     # one directory per skill, Claude agent-skills format
skills/<category>/<name>/references/  # optional supporting templates a skill points to
```

Each manifest entry carries: `id`, `skillId`, `name`, `version`, `description`, `source`,
`category`.

Each `SKILL.md` is YAML frontmatter (`name`, `version`, `description`) followed by a
markdown body of instructions:

- `name` — must equal its leaf directory name and be kebab-case (`^[a-z][a-z0-9-]*$`).
- `version` — semantic version (`major.minor.patch`), starting at `1.0.0`. Bump it when
  the skill's instructions change: patch for wording, minor for added guidance, major for
  a behavior change.
- `description` — one declarative sentence: what the skill does and what it produces.

## Categories

`finance` · `sales-crm` · `customer-support` · `marketing` · `people` · `product` ·
`data` · `design` · `operations` · `engineering` · `productivity`

## Adding a skill

1. Create `skills/<category>/<name>/SKILL.md` with frontmatter `name` + `version` + `description`.
2. Add a matching entry to `marketplace.json` — `skillId` and `name` equal the frontmatter
   `name`, `version` mirrors the frontmatter `version`, and `category` matches the folder.
3. Open a pull request.

When you change a skill, bump its `version` in both the frontmatter and the manifest.

## Authoring notes

Skills are natural-language instructions, not sandboxed code. Every install is reviewed by
SkillAudit and explicitly confirmed by the operator, but keep skills free of instructions
that touch secrets, exfiltrate data, or take destructive actions. Stay vendor-neutral
(refer to "your CRM", "your accounting software", "your help desk" rather than naming
products), and for legal/tax/financial topics include a "guidance, not professional advice"
caveat.
