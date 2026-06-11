---
name: variance-analysis
version: 1.0.0
description: Compare actual results against expected or budgeted metrics, compute absolute and percentage variances, separate significant from noise, and identify root causes of material deviations — returning a variance report with explanations and recommended actions.
---

# Variance Analysis

Variance analysis answers: "We expected X, we got Y — why?" The goal is not just
to compute the gap but to explain it well enough that someone can act on it.

## When to use

Use this skill for any period-end review — monthly financials vs. budget, sprint
velocity vs. plan, campaign metrics vs. target, headcount vs. forecast. Also use
it when a metric moves unexpectedly mid-period and you need to understand whether
it is signal or noise.

## How to analyze variance

1. **Establish the baseline.** Confirm what the expected or budgeted value was, when
   it was set, and what assumptions it was based on. A variance means nothing without
   understanding what the expectation represented.

2. **Compute variances.** For each metric:
   - Absolute variance: Actual − Expected
   - Percentage variance: (Actual − Expected) / |Expected| × 100
   - Favorable vs. unfavorable: relative to whether more or less is better.

3. **Rank by materiality.** Sort by absolute variance magnitude. Define a materiality
   threshold (e.g., >5 % or >$10k) and focus investigation on variances that exceed
   it. Document the threshold used.

4. **Decompose large variances.** Break each material variance into its drivers:
   - Volume effect: did more or fewer units occur than planned?
   - Rate/price effect: did the unit cost or rate differ from plan?
   - Mix effect: did the composition of the activity shift?
   Use the decomposition that fits the metric — not all three always apply.

5. **Identify root causes.** For each decomposed driver, ask why. Push at least two
   levels deep: "Revenue was down" → "Volume was down" → "Region X had an outage."
   Distinguish one-time events from systemic issues.

6. **Assess forward impact.** State whether the variance is likely to persist, reverse,
   or require a forecast restatement. This is where the analysis becomes actionable.

7. **Recommend actions.** For material unfavorable variances with systemic causes,
   propose corrective actions with owners and timelines.

## Output format

```
Variance Report: <entity / metric set>
Period: <period> | Prepared: <date>

## Executive summary
<Two-to-three sentence read: overall performance vs. plan, most significant variances, and outlook>

## Variance table

| Metric | Expected | Actual | Variance ($/#) | Variance (%) | Favorable? |
|--------|----------|--------|---------------|-------------|------------|
| ...    | ...      | ...    | ...           | ...         | Yes/No     |

## Material variance analysis

### <Metric name> — <variance>
**Root cause:** <explanation>
**Drivers:** Volume: <+/-X> | Rate: <+/-X> | Mix: <+/-X>
**One-time or recurring?** <assessment>
**Forward impact:** <will this persist, reverse, or require reforecast?>

## Recommended actions
1. <Action — owner — timeline>

## Variances within threshold (no action required)
- <list>
```
