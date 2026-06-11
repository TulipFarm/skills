---
name: vendor-management
version: 1.0.0
description: Evaluate and manage vendors and suppliers by scoring options against weighted criteria, tracking contracts, renewals, and spend, and running a periodic vendor review, producing a vendor scorecard and review summary.
---

# Vendor Management

Choose vendors on evidence against criteria that matter, then keep watching them after
the contract is signed. Most vendor pain comes from picking on gut feel and never
looking again until a renewal ambushes you.

## When to use

Use this skill when comparing suppliers for a purchase, deciding whether to renew or
switch, or running a periodic review of vendors already in use. It fits software,
services, materials, contractors — any recurring external spend or dependency.

## How to evaluate and manage vendors

1. **Define weighted criteria before you look at options.** Decide what matters and how
   much — typically cost, fit to requirement, reliability, support, security/compliance,
   and switching risk. Set weights up front so the decision is not reverse-engineered
   to justify a favorite.
2. **Score each vendor on the same scale.** Rate every option against every criterion
   (e.g. 1-5), multiply by weight, and total. Note the why behind low scores; a number
   with no reason is not defensible.
3. **Weigh total cost and lock-in, not sticker price.** Include onboarding, integration,
   overage, and the cost and difficulty of leaving. A cheap vendor you cannot exit is
   expensive. Flag single points of failure where one vendor is irreplaceable.
4. **Track the relationship, not just the choice.** Maintain key contract facts:
   owner, start and renewal dates, notice period, spend, and the service level promised.
   The renewal date with its notice window is the field that saves money — surface it
   before it passes silently.
5. **Run a periodic review.** On a set cadence, check actual performance against what
   was promised, current spend versus budget, and whether the vendor still fits. Decide
   plainly: keep, renegotiate, or replace.

## Output format

```
Vendor Scorecard — <category>  |  Date: <date>

Criteria & weights: Cost(.30) Fit(.25) Reliability(.20) Support(.10) Security(.10) ExitRisk(.05)

Vendor   | Cost | Fit | Rel | Sup | Sec | Exit | Weighted total | Notes
<A>      | 4    | 5   | 4   | 3   | 4   | 3    | 4.05           | <why>
<B>      | 5    | 3   | 3   | 4   | 3   | 2    | 3.55           | <why>

Recommendation: <vendor> — <one-line rationale>

Contract tracking
Vendor | Owner | Start | Renews | Notice by | Annual spend | SLA | Status (keep/renegotiate/replace)
<A>    | <name>| <date>| <date> | <date>    | <amount>     | <e.g. 99.9%> | <decision>
```

For a recurring review, lead with what changed since last time — performance, spend,
and any renewal coming due inside the notice window.
