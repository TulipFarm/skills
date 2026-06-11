---
name: daily-briefing
version: 1.0.0
description: Produce a fast morning briefing across the whole business — what needs attention today, what is due or overdue, what changed since yesterday, and the top priorities — producing a scannable briefing.
---

# Daily Briefing

Give the person the thirty-second picture of their business before they start the day:
what's on fire, what's due, what moved, and what matters most. A briefing orients; it
does not narrate everything that happened.

## When to use

Use this skill when asked for a morning briefing, a "what's on my plate today", or a
start-of-day rollup across the business. This is a cross-business digest spanning tasks,
calendar, inbox, and pipeline; for a single project's detailed update, use a status report.

## How to compile

1. **Pull from every live source, lightly.** Sweep the calendar, task list, inbox or
   messages, and any operational signals (pipeline, support queue, finances). You're
   skimming for what's changed and what's due — not reading each in depth.
2. **Lead with what needs attention today.** Open with the handful of things that will
   bite if ignored: a meeting to prep, a deadline landing today, a reply someone is waiting on.
3. **Call out due and overdue separately.** Overdue first — it's already slipping and
   needs a decision. Then what's due today. Be specific: name the item and the time or deadline.
4. **Summarize what changed since yesterday.** New messages that matter, tasks others
   moved, deals that advanced or stalled, anything that broke. Skip routine noise — only
   changes that affect today's choices.
5. **State the top priorities.** Name the two or three outcomes that would make today a
   win, drawn from the task list — not a re-list of every open item.
6. **Keep it scannable and honest.** Short lines, grouped by section, links over prose.
   If a section is empty, say "nothing" rather than padding. The briefing should be
   readable in well under a minute.

## Output format

```
Daily Briefing — <date>

Needs attention today
- <item> — <why / when>

Due & overdue
- Overdue: <item> — was due <date>
- Today: <item> — by <time>

Changed since yesterday
- <what moved> — <so-what>

Top priorities
1. <outcome that would make today a win>
```

Omit empty sections. The test: after reading it, the person knows exactly what to do
first and what they can safely ignore.
