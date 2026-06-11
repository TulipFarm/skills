---
name: capacity-plan
version: 1.0.0
description: Build a team capacity plan — mapping available headcount and working time to planned initiatives, surfacing over- and under-allocation by role and period, and proposing prioritization or staffing adjustments — so leadership can make informed trade-off decisions before commitments are made.
---

# Capacity Planning

Capacity planning answers: "Can this team do what we are asking it to do, with
the people it has?" The goal is to surface over-commitment before it becomes
missed deadlines — not to justify every hour.

## When to use

Use this skill before committing to a project plan or roadmap, during annual or
quarterly planning, when a new initiative is proposed and must be funded from
existing headcount, or when a team is visibly overloaded and you need to make
the case for prioritization or hiring. Also use it after a significant headcount
change to replan remaining capacity.

## How to build a capacity plan

1. **Define the planning period.** Capacity plans are most useful at 1–3 month
   granularity. Beyond three months, the uncertainty in both headcount and scope
   makes detailed planning an illusion. State the period clearly.

2. **Inventory available capacity.** For each person on the team:
   - Working days in the period (subtract holidays, PTO, company events).
   - Role and skills (determines which initiatives they can staff).
   - Baseline overhead: meetings, oncall rotations, review work, 1:1s —
     this is typically 20–30% of a person's time. Do not plan as if people
     have 100% productive time.
   Effective capacity = (working days × hours per day) × (1 − overhead percentage).

3. **List all planned initiatives.** Gather every commitment and initiative
   that will consume capacity during the planning period:
   - Named projects or features.
   - BAU (business as usual) operations work.
   - Planned tech debt or maintenance.
   - Hiring and interviewing load.
   Be comprehensive — hidden work is the most common cause of capacity surprises.

4. **Estimate effort per initiative.** For each initiative, estimate the effort
   required in person-days or person-weeks, broken down by role. Get estimates
   from the people doing the work, not from the people requesting it.

5. **Assign and map.** Assign work to people, respecting role requirements.
   Running total: as each initiative is assigned, track remaining capacity per
   person. Flag when a person is over-allocated (assigned more than their
   available capacity).

6. **Surface over-allocation.** For every person or role that is over-allocated,
   quantify the gap (X days over). This is the number that drives the trade-off
   conversation — someone must decide what to deprioritize, delay, or hire for.

7. **Propose adjustments.** Given the over-allocation, present options:
   - Deprioritize initiative X (saves Y person-days).
   - Delay initiative X by Z weeks (shifts load out of the period).
   - Hire for role R (adds N person-days in month M, with ramp time).
   - Rebalance across people (move work from over-allocated to under-allocated).
   Do not pick the option — present it for leadership to decide.

## Output format

```
Capacity Plan: <team name>
Period: <start> → <end> | Prepared: <date>

## Team capacity

| Person | Role | Working days | Overhead (%) | Effective capacity (days) |
|--------|------|-------------|-------------|--------------------------|
| ...    | ...  | ...         | ...         | ...                      |
**Total team capacity:** <n person-days>

## Planned work

| Initiative | Role needed | Effort (days) | Assigned to | Period |
|-----------|-------------|--------------|-------------|--------|
| ...       | ...         | ...          | ...         | ...    |
**Total planned load:** <n person-days>

## Allocation summary

| Person | Capacity | Planned | Over/(Under) | Status |
|--------|---------|---------|-------------|--------|
| ...    | ...     | ...     | ...         | OK / Over |

## Over-allocation detail
- <Person>: <n> days over — driven by: <initiative(s)>

## Options to resolve over-allocation
1. Deprioritize <initiative> → saves <n> days for <person/role>
2. Delay <initiative> by <n> weeks → shifts <n> days out of period
3. Hire <role> → available in <month> after ramp

## Assumptions
- Overhead rate: <percentage>
- Ramp time for new hires: <weeks>
- PTO assumed: <days per person>
```
