---
name: roadmap-planning
version: 1.0.0
description: Build and maintain a roadmap — group initiatives into themes and now/next/later horizons, sequence by value and dependency, and keep it current as priorities shift — producing a roadmap view plus a near-term plan.
---

# Roadmap Planning

Build a roadmap that communicates intent and sequence without pretending to be a
dated promise. A roadmap is a living statement of priority, not a Gantt chart.

## When to use

Use this skill when planning what to build over the coming quarters, when stakeholders
ask "what's next and why", or when an existing roadmap has drifted from reality.
Reach for it after ideas are shortlisted and specs exist, not before.

## How to plan

1. **Anchor to outcomes, not features.** Each initiative should map to a goal or
   metric it serves. If you can't say what changes for the user or the business, it
   doesn't belong on the roadmap yet.
2. **Group into themes.** Cluster initiatives under a handful of themes that reflect
   strategy (e.g. "reduce churn", "open a new segment"). Themes let a stakeholder
   grasp direction without reading every row.
3. **Use horizons, not hard dates.** Sort work into **now** (committed, in or near
   build), **next** (likely, shaped enough to estimate roughly), and **later**
   (directional, deliberately fuzzy). Confidence drops as you move out — say so.
4. **Sequence by value and dependency.** Order within horizons by impact, then resolve
   ordering forced by dependencies and shared work.
   - Pull forward anything that unblocks multiple later items.
   - Flag the critical path so a slip's blast radius is visible.
5. **Write the near-term plan.** For the "now" horizon, get concrete: the specific
   initiatives, their target outcome, and rough sizing. This is the part the team
   executes against.
6. **Keep it current.** Re-review on a fixed cadence. When priorities shift, move
   items between horizons and record why — a roadmap nobody trusts to be current is
   worse than none.

## Output format

```
Theme: <strategic theme>
  Now:   <initiative> — outcome: <goal/metric>, size: <S/M/L>
  Next:  <initiative> — outcome: <goal/metric> (est.)
  Later: <initiative> — direction only
Critical path: <item> blocks <items>
Last reviewed: <date> — changed: <what moved and why>
```

State assumptions and confidence explicitly. A roadmap presented as certainty when
it isn't will burn trust the first time it slips.
