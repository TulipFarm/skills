---
name: standup
version: 1.0.0
description: Compile a concise standup update — what shipped, what is in progress, and what is blocked — from recent commits, pull requests, and task activity.
---

# Standup

Turn recent work activity into a standup update a teammate can read in twenty
seconds.

## When to use

Use this skill when asked for a standup update, a daily/weekly summary of work, or
"what did I/we do since X".

## How to compile

1. **Gather evidence, not memory.** Pull from concrete sources available in context:
   recent commits, merged and open pull requests, task or board updates, deployment
   notes. Prefer the last working day unless another window is requested.
2. **Group by outcome, not by activity.** "Shipped marketplace install flow" beats a
   list of seven commits that built it.
3. **Use the three-section shape:**
   - **Done** — completed and verifiable (merged, deployed, closed).
   - **In progress** — started, with a one-phrase status and expected next step.
   - **Blocked** — what is stuck, why, and who or what unblocks it.
4. **Keep each item to one line.** Link the PR, ticket, or commit instead of
   describing it at length.
5. **Surface blockers honestly.** A blocker without an owner or ask is just a
   complaint — name what is needed.

## Output format

```
Standup — <date>
Done:
- <outcome> (<link>)
In progress:
- <item> — <status>, next: <step>
Blocked:
- <item> — blocked on <dependency>; need <ask>
```

Omit empty sections. If there was no activity, say so in one line rather than
inventing filler.
