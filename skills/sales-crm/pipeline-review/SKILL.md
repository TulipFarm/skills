---
name: pipeline-review
version: 1.0.0
description: Review the deal pipeline — flag stalled and at-risk deals, sanity-check stages and the forecast, and recommend where to focus — producing a pipeline-health summary with prioritized actions.
---

# Pipeline Review

Look past the rolled-up number to the deals underneath it. Find what is stuck, what is
miscategorized, and what the rep should actually work this week.

## When to use

Use this skill when asked to review a sales pipeline, inspect open deals, sanity-check a
forecast, or prep for a pipeline or forecast call. Reach for it when the total looks
healthy but you suspect the details don't hold up.

## How to review

1. **Start from deal age and last activity, not stage.** Sort by time-in-stage and days
   since last touch. A deal that hasn't moved or been contacted in weeks is stalled,
   whatever stage it claims to sit in. This surfaces the rot fastest.
2. **Audit stages against reality.** Every late-stage deal should have the evidence that
   stage implies — a champion, a next step, a date. A "negotiation" deal with no meeting
   booked is mislabeled; demote it and the forecast tightens honestly.
3. **Flag at-risk deals with the reason.** Stalled, slipped close date (more than once
   is a red flag), no next step scheduled, single-threaded to one contact, or gone
   quiet. Name the specific risk per deal — "at risk" alone is useless.
4. **Sanity-check the forecast bottom-up.** Sum the deals you actually believe will
   close this period and compare to the headline number. If committed exceeds what the
   deal-by-deal read supports, say so and show the gap.
5. **Find the gaps, not just the risks.** Too few deals to hit quota, everything bunched
   in one stage, or a coverage ratio that's thin — these are pipeline problems the deal
   list won't shout. Call them out.
6. **Recommend where to focus, ranked.** Point at the few deals worth time this week:
   advanceable, at-risk-but-savable, or in need of a clear next step. A review without
   prioritized actions is a spreadsheet, not advice.

## Output format

```
Pipeline Health — <date> (<N> open deals, <value> total)
Forecast check: committed <X> vs bottom-up <Y> — gap: <note>
At risk:
- <deal>, <value>, <stage> — risk: <stalled/slipped/single-threaded/quiet> — action: <move>
Stage corrections:
- <deal> — claimed <stage>, evidence supports <stage> — fix
Focus this week (ranked):
1. <deal> — why now + next step
```

Lead with the forecast gap and the at-risk deals — those are what the call is for.
