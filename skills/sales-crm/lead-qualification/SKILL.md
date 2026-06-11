---
name: lead-qualification
version: 1.0.0
description: Score and prioritize inbound leads against a lightweight fit-plus-intent framework and recommend the next action for each, producing a ranked list with reasons and a next step.
---

# Lead Qualification

Sort the inbox of inbound leads so the rep works the best ones first. Score on fit and
intent, be explicit about why, and never leave a lead without a next move.

## When to use

Use this skill when asked to qualify, score, triage, or prioritize inbound leads, form
fills, or trial signups. Reach for it when there are more leads than time and someone
needs to know which to call today versus nurture versus drop.

## How to qualify

1. **Pin down the ideal-customer profile first.** If not given, infer it from current
   best customers: company size, industry, region, role of the contact. Without an ICP,
   a score is just a guess with decimals.
2. **Score fit and intent separately.** Fit = how well they match the ICP. Intent = how
   ready they are to buy. A great-fit tire-kicker and an eager bad-fit are different
   problems; collapsing them into one number hides that.
3. **Read the intent signals you actually have.** Demo request and pricing-page visits
   are high intent; a whitepaper download is low. Reply speed, budget or timeline
   mentions, and decision-maker title all push intent up. State which signals you used.
4. **Bucket into A / B / C, not a false-precision number.** A = strong fit and intent,
   work now. B = one strong, one weak, nurture. C = poor fit or no intent, deprioritize
   or disqualify. Tiers drive action; a "87.3" does not.
5. **Recommend one concrete next step per lead.** "Call within 24h", "send a one-touch
   nudge", "add to monthly nurture", "disqualify — wrong segment". The recommendation is
   the deliverable; the score only justifies it.
6. **Flag missing data instead of guessing.** If company size or role is blank, say the
   score is provisional and name what to enrich. A confident wrong score wastes a rep's
   morning.

## Output format

```
Lead Qualification — <date> (<N> leads)
Tier A — work now:
- <name>, <company> — fit: <high/med/low>, intent: <high/med/low> — why: <signals> — next: <action>
Tier B — nurture:
- <name>, <company> — ... — next: <action>
Tier C — deprioritize/disqualify:
- <name>, <company> — reason: <why> — next: <action>
```

Sort within each tier by intent. Every lead carries a reason and a next step — no bare
rankings.
