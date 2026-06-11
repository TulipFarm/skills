---
name: building-dashboards
version: 1.0.0
description: Design a clear KPI dashboard — pick the few metrics that matter, lay them out by importance with the right comparisons, and cut vanity numbers and clutter — delivered as a layout spec.
---

# Building Dashboards

A dashboard answers "are we okay, and where do I look if not" in one glance. If a
viewer has to study it, it has failed.

## When to use

Use this skill when asked to design or clean up a dashboard, scorecard, or KPI view
for a team or stakeholder. It covers what to show and how to arrange it; pairing it
with the visualization skill covers how each chart should look.

## How to design

1. **Name the audience and the one decision.** An exec dashboard answers "is the
   business healthy"; an ops dashboard answers "what needs attention today". Different
   audiences, different metrics — do not build one dashboard for everyone.
2. **Pick five to nine metrics, no more.** Force ranking: if everything is on the
   screen, nothing is important. Each metric must tie to a decision someone can act
   on; drop the rest into a linked detail view.
3. **Give every metric a comparison.** A bare number is meaningless. Show it against
   one of: a target, the prior period, or the same period last year. The comparison
   is the signal — the raw value is just context.
4. **Lay out by importance, top-left first.** Viewers scan in a Z. Put the headline
   KPIs across the top, supporting detail below, and the longest tables last.
5. **Cut vanity metrics ruthlessly.** Total registered users, cumulative anything,
   and numbers that only ever go up tell you nothing about whether to act. Keep
   metrics that can move in both directions.
6. **Design the empty and alert states.** Decide what "good", "watch", and "bad"
   look like up front — a threshold or color rule — so a glance reads as a verdict,
   not a lookup.

## Output format

```
Dashboard: <name> | Audience: <who> | Decision: <the one question>
Layout (top to bottom, left to right):
1. <KPI> — <comparison: vs target / prior period> — <good/bad threshold>
...
Refresh: <cadence>   Cut from scope: <vanity metrics removed and why>
```

If you cannot say what action a tile drives, it does not belong on the dashboard.
