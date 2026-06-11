---
name: weekly-briefing
version: 1.0.0
description: Generate a weekly prep brief from calendar events, open tasks, and pending items — surfacing the week's priorities, decisions that need to be made, upcoming deadlines, and background context — so the first Monday morning read sets the week up rather than re-establishing it.
---

# Weekly Briefing

A weekly briefing is not a task dump — it is an edited view of the week ahead
that answers: what matters most this week, what decisions do I need to make, and
what might I be walking into unprepared.

## When to use

Use this skill at the start of each work week, or at end of Friday for a forward
view into the next week. The input is calendar events for the week, open tasks
and commitments, any pending items from last week, and any background context
available. Also useful before returning from vacation or a period away.

## How to generate a weekly briefing

1. **Review the calendar.** Scan every event for the week and ask:
   - What prep does each meeting require?
   - Which meetings have an open question, decision, or output I need to drive?
   - Which meetings are commitments I made to others that I must not miss?
   Cluster meetings by day and note the heaviest / lightest days.

2. **Pull open tasks and commitments.** Collect from all sources: task manager,
   email flagged items, open action items from recent meetings, commitments made
   verbally. Ask: which of these are due this week or blocking someone else?

3. **Identify the week's top priorities.** From the calendar and task list, select
   the three to five things that, if done, would make this week a success.
   Be ruthless — a week with ten priorities has no priorities.

4. **Surface decisions that need to be made.** Flag anything that is pending a
   decision from you or a key stakeholder, especially where delay has downstream
   consequences. Name the decision and who needs to make it.

5. **Flag upcoming deadlines.** Any commitment due this week or next week that
   is not yet complete. Include external deadlines (tax filings, contract renewals,
   performance reviews) not just internal tasks.

6. **Note background reading and prep.** For any meeting or event that requires
   preparation, note exactly what to read or review and how long it should take.
   This prevents the "I'll prep on the way" failure mode.

7. **Carry over from last week.** What was supposed to happen last week that did
   not? These carryover items need explicit acknowledgment — left untracked they
   accumulate and create trust issues.

## Output format

```
Weekly Briefing: <Week of date>
Generated: <date>

## This week's top priorities
1. <Priority — why it matters this week>
2. ...

## Calendar overview

| Day | Key events | Prep needed |
|-----|-----------|-------------|
| Mon | <event> | <prep> |
| ... | ...       | ...         |

## Decisions needed this week
- <Decision> — owner: <name> — deadline: <date> — impact if delayed: <consequence>

## Deadlines and commitments due
- <date>: <commitment> — status: <on track / at risk>

## Open items carried from last week
- <Item> — was due: <date> — revised plan: <when to close>

## Background reading / prep
- <Meeting or event>: read <document> (~<time>)

## One thing to protect this week
<The single most important thing that, if crowded out, would make the week a failure>
```
