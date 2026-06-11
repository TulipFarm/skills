---
name: sprint-planning
version: 1.0.0
description: Facilitate sprint planning end to end — establish the sprint goal, calculate team capacity, prioritize and size backlog items against that capacity, assign work, surface dependencies and risks, and produce a sprint commitment document the team has agreed to.
---

# Sprint Planning

Sprint planning produces a shared, realistic commitment — not a wishlist. The
output must reflect what the team can actually deliver given their capacity, not
what would be nice.

## When to use

Use this skill at the start of each sprint cycle, or when an existing sprint needs
to be re-planned due to scope change or capacity loss. Also useful for reviewing
a sprint plan that has been drafted informally and needs to be made explicit.

## How to plan a sprint

1. **Establish the sprint goal.** Before touching the backlog, state one clear goal
   for the sprint: the single outcome the team is optimizing for. Every item added
   to the sprint should serve this goal. Items that do not serve it are candidates
   to defer.

2. **Calculate capacity.** For each team member:
   - Working days in the sprint (subtract holidays, PTO, company events).
   - Productive hours per day (typically 5–6 for engineers accounting for
     meetings and overhead).
   - Any known part-time commitments (oncall, interviewing, other projects).
   Total capacity = Σ (available days × productive hours). Express in story points
   or hours depending on the team's estimation unit.

3. **Pull and prioritize the backlog.** Take the top items from the prioritized
   backlog. Confirm with the product owner that priority order reflects current
   reality — it may have shifted since last sprint. Do not re-debate every item;
   focus on items near the capacity boundary.

4. **Size and fit.** For each candidate item:
   - Confirm the estimate is current and based on a clear understanding of scope.
   - Flag items that are too large for a sprint (must be split before committing).
   - Stop pulling items when the running total exceeds capacity. Leave a 10–15 %
     buffer for unexpected work.

5. **Identify dependencies.** For each committed item, note dependencies on other
   teams, services, or items within the sprint. Flag dependencies that are not yet
   resolved — they are blockers-in-waiting.

6. **Assign work.** Assign each item to an owner. Avoid single points of failure:
   if one person is unavailable, does the sprint fail? Pair or cross-train
   where risk is high.

7. **State risks and assumptions.** Name the two or three things most likely to
   derail the sprint. For each, state the early warning signal and the response.

8. **Get agreement.** The plan is not final until the team says it is realistic.
   Surface concerns before the sprint starts, not on day three.

## Output format

```
Sprint Plan: Sprint <N>
Dates: <start> → <end> | Goal: <sprint goal>

## Capacity

| Person | Available days | Capacity (pts/hrs) | Notes |
|--------|---------------|-------------------|-------|
| ...    | ...           | ...               | ...   |
**Total capacity:** <N> | **Planned load:** <N> | **Buffer:** <N>

## Committed items

| ID | Title | Owner | Estimate | Priority | Dependencies |
|----|-------|-------|----------|----------|-------------|
| ...| ...   | ...   | ...      | ...      | ...         |

**Total committed:** <N pts/hrs>

## Deferred (considered but not committed)
- <item> — reason: <capacity / not ready / dependency>

## Risks
1. <Risk> — signal: <early warning> — response: <mitigation>

## Open questions / blockers
- <anything that must be resolved before sprint start>
```
