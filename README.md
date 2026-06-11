# TulipFarm Skills

The official skills marketplace for [TulipFarm](https://github.com/TulipFarm/tulipfarm).
TulipFarm instances browse this repository via `GET /api/v1/skills/marketplace` and
install skills through the SkillAudit → operator-confirm flow.

## Layout

```
marketplace.json          # catalog manifest (id, skillId, name, description, installs, source)
skills/<name>/SKILL.md    # one directory per skill, Claude agent-skills format
```

Each `SKILL.md` is YAML frontmatter (`name`, `description`) followed by a markdown
body of instructions. The frontmatter `name` must match its directory name and be
kebab-case (`^[a-z][a-z0-9-]*$`).

## Adding a skill

1. Create `skills/<name>/SKILL.md` with frontmatter `name` + `description`.
2. Add a matching entry to `marketplace.json` (`skillId` must equal the frontmatter `name`).
3. Open a pull request.

Skills are natural-language instructions, not sandboxed code. Every install is
reviewed by SkillAudit and explicitly confirmed by the operator, but keep skills
free of instructions that touch secrets, exfiltrate data, or take destructive
actions.
