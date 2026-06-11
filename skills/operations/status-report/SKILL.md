---
name: status-report
version: 1.0.0
description: Compile a crisp cross-functional status update covering progress since last time, what is on track versus at risk, decisions needed, and next steps, structured to be read in under a minute.
---

# Status Report

Tell a busy stakeholder where things stand and what you need from them — fast.
A status update is a decision tool, not a diary of activity.

## When to use

Use this skill when asked for a project, initiative, or stakeholder update — weekly,
milestone, or on demand. This is for cross-functional reporting to people who are not
in the daily work; for an engineer's own day-to-day work log, use the dev standup.

## How to compile

1. **Lead with the headline.** One line up top: overall status and the single most
   important thing the reader must know. Use a plain signal — on track, at risk, off
   track — and mean it. Do not bury a red status under green prose.
2. **Report progress against the plan, not effort spent.** "Onboarding flow live for
   pilot customers" beats "spent the week on onboarding". Tie each item to the goal or
   milestone it moves.
3. **Separate on track from at risk honestly.** For anything at risk, state the cause,
   the impact (date, scope, or cost), and what is being done about it. A risk with no
   mitigation is just bad news delivered late.
4. **Pull decisions to the front.** If you need the reader to choose, approve, or
   unblock something, say so explicitly with the options and your recommendation.
   Vague asks get ignored; specific asks get answered.
5. **End with next steps and dates.** What happens before the next update, who owns it,
   and when. Keep every line scannable — links over paragraphs.
6. **Cut ruthlessly.** If a detail does not change what the reader thinks or does, drop
   it. Under a minute to read is the target, not the maximum.

## Output format

```
<Project> — <date>  |  Status: 🟢 on track | 🟡 at risk | 🔴 off track
Headline: <the one thing to know>

Progress since last update
- <outcome tied to a goal/milestone>

On track
- <item> — <brief state>

At risk
- <item> — cause: <why> — impact: <date/scope/cost> — mitigation: <action>

Decisions needed
- <decision> — options: <A / B> — recommendation: <pick> — need by: <date>

Next steps
- <action> — owner: <name> — by: <date>
```

Omit empty sections. If nothing is at risk, say "Nothing at risk" rather than padding.
