---
name: org-planning
version: 1.0.0
description: Model organizational structure changes — headcount planning, span-of-control analysis, reporting line proposals, and role transition sequencing — producing a current-state vs. proposed-state comparison with rationale and an implementation sequence.
---

# Org Planning

Org design decisions are consequential and hard to reverse. Good org planning
is explicit about the trade-offs — not just what the new structure looks like,
but why it is better than the current one and what the cost of the transition is.

## When to use

Use this skill when planning a reorganization, designing a new team structure
for a growth hire or product pivot, assessing whether the current org is right
for a new strategy, or evaluating span-of-control concerns. Also use it to model
the org impact of a significant headcount change in either direction.

## How to plan an org change

1. **Document the current state.** Map the current org structure: teams, roles,
   reporting lines, and headcount. For each manager, note their span of control
   (number of direct reports). Note any informal structures or dotted-line
   relationships that are operationally significant.

2. **Define the goal of the change.** Why is a change needed? The motivation
   must be explicit:
   - Strategy change (new product, new market, new business model).
   - Growth (current structure does not scale to projected headcount).
   - Dysfunction (coordination failures, unclear ownership, low velocity).
   - Leader change (departure, promotion, new hire).
   A structural change without a clear goal is reorganization for its own sake.

3. **Identify the design principles.** Before drawing boxes, state the principles
   the new structure must satisfy:
   - What decisions should each team be able to make autonomously?
   - What must be centralized vs. distributed?
   - What is the preferred span of control for this org?
   - How should customer or product segments map to team boundaries?
   These principles make the design defensible and the trade-offs explicit.

4. **Propose the new structure.** For each proposed team or role:
   - Team name and mandate.
   - Reporting line.
   - Current headcount and proposed headcount.
   - Key open roles or transitions required.

5. **Analyze span of control.** For every manager in the proposed structure,
   note their span. Flag:
   - Under-span (<3 directs for a mid-level manager): suggests unnecessary
     management layers.
   - Over-span (>8–10 for a senior IC manager, >6–7 for a player-coach): suggests
     the manager cannot develop people effectively.

6. **Identify people impacts.** For each person in the affected org:
   - Role change? (New manager, new scope, new peers.)
   - Level change? (Promotion, demotion, lateral move.)
   - Reduction or addition?
   People impacts require careful sequencing — who is told what, and when?

7. **Sequence the transition.** A simultaneous reorg of ten roles creates chaos.
   Sequence changes in a logical order: first resolve the leadership layer, then
   the IC layer. Name dependencies (cannot fill Role B until Role A is hired).

## Output format

```
Org Plan: <team or scope>
Goal: <reason for change> | Date: <date>

## Current state
<Description of current structure — teams, reporting lines, headcount>
Total headcount: <n> | Management layers: <n>

## Design principles
1. <Principle>
2. ...

## Proposed structure

| Team | Manager | Scope | Current HC | Proposed HC | Change |
|------|---------|-------|-----------|------------|--------|
| ...  | ...     | ...   | ...       | ...        | +/-    |

## Span-of-control analysis

| Manager | Proposed direct reports | Assessment |
|---------|------------------------|------------|
| <name>  | <n>                    | Healthy / Under-span / Over-span |

## People impacts
| Person | Current role | Proposed role | Impact type |
|--------|-------------|--------------|-------------|
| ...    | ...         | ...          | New manager / Scope change / etc. |

## Transition sequence
1. <Step — when — owner>
2. ...

## Trade-offs and risks
- <What this design optimizes for>
- <What it sacrifices>
- <Key risk during transition>
```
