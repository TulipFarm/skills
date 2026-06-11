---
name: tech-debt
version: 1.0.0
description: Identify, assess, and prioritize technical debt by cataloging it, estimating ongoing cost and risk against effort to fix, and proposing a realistic paydown plan tied to upcoming work, producing a prioritized tech-debt list.
---

# Tech Debt

Treat technical debt like a loan with interest: track what you owe, what it costs you
to carry, and pay down the items whose interest actually hurts.

## When to use

Use this skill when work keeps getting slower in an area, when planning a quarter and
deciding what to clean up, or when a "quick" change repeatedly turns risky. Use it to
make debt visible and rankable — not to justify a rewrite.

## How to assess

1. **Catalog the debt concretely.** Each item is one specific thing: a fragile module,
   a missing test boundary, a copy-pasted pattern, an outdated dependency, a workaround
   that should be temporary. Vague entries like "the code is messy" are not actionable.
2. **Name the cost of carrying it.** What does this debt make slower, riskier, or
   scarier *today*? Slows every change here, blocks a feature, causes recurring
   incidents, onboarding tax. Debt with no ongoing cost is not worth tracking.
3. **Estimate effort to fix.** A rough size — hours, days, or weeks — and the risk of
   the fix itself. Some debt is cheap to clear; some is load-bearing and dangerous.
4. **Rank by cost-and-risk over effort.** Prioritize high-pain, low-effort items first.
   Be honest that high-effort, low-pain debt may be correct to leave alone — not all
   debt should be repaid.
5. **Tie paydown to upcoming work.** The cheapest time to fix debt is when you are
   already touching that code. Map items to roadmap features so cleanup rides along
   instead of competing for standalone time.
6. **Propose a realistic plan.** A short list you can actually execute beats an
   exhaustive backlog nobody funds. Suggest what to do now, what to do alongside
   planned work, and what to consciously defer.

## Output format

Deliver a ranked table, highest-priority first:

```
| Item | Cost of carrying | Effort | Risk | When to pay it down |
|------|------------------|--------|------|---------------------|
| <specific debt> | <what it slows/risks> | S/M/L | low/med/high | now / with <feature> / defer |
```

Close with a one-paragraph recommendation: the two or three items to tackle next and
why. A list that recommends fixing everything recommends nothing.
