---
name: metrics-review
version: 1.0.0
description: Review a set of business or financial metrics — computing period-over-period changes, flagging anomalies against trend and plan, and summarizing key trends and concerns — so stakeholders get an interpreted view of what the numbers mean, not just the numbers.
---

# Metrics Review

Raw numbers do not tell a story — interpretation does. A metrics review answers
"what is happening, is it good or bad, and what should we do about it?" not just
"what are the numbers?"

## When to use

Use this skill for weekly or monthly business reviews, board reporting prep,
investor update preparation, post-campaign analysis, or any time a set of metrics
needs to be reviewed and interpreted for a decision-making audience. Especially
useful when multiple metrics need to be read together to tell a coherent story.

## How to review metrics

1. **Establish the comparison context.** Every number needs a comparison to have
   meaning. For each metric, determine:
   - Prior period (last week, last month, last quarter).
   - Same period last year (if seasonality is relevant).
   - Budget or plan target.
   - A benchmark or goal, if one exists.
   A metric without a comparison is just a number.

2. **Compute period-over-period changes.** For each metric:
   - Absolute change (current minus prior period).
   - Percentage change ((current − prior) / |prior| × 100).
   - Variance vs. plan ((actual − plan) / |plan| × 100).
   Present both absolute and percentage — $1M improvement means very different
   things on a $5M base versus a $500M base.

3. **Identify the trend direction.** Is the metric improving, declining, or flat
   over the last three or more periods? A single-period change can be noise —
   trend over multiple periods is signal.

4. **Flag anomalies.** Look for:
   - Metrics that deviate more than 10–15% from trend without an explanation.
   - Metrics that moved in the opposite direction from correlated metrics.
   - A gap between a leading indicator and a lagging indicator that should
     track together.

5. **Cluster metrics by theme.** Group related metrics together and read them
   as a set: growth metrics, efficiency metrics, quality metrics. Patterns within
   a cluster are more meaningful than individual data points.

6. **Separate correlation from causation.** If two metrics moved together, note
   it — but do not claim one caused the other without supporting evidence.
   State what you know vs. what you are hypothesizing.

7. **Surface the three to five things that matter most.** Out of all the metrics
   reviewed, what are the most important things the audience needs to understand?
   The summary should be opinionated, not a neutral list of every movement.

8. **Recommend actions.** For any metric that is at risk or declining, state
   a recommended action, an owner, and a timeline.

## Output format

```
Metrics Review: <entity / scope>
Period: <current period> | Compared to: <prior period> and <plan>
Prepared: <date>

## Executive summary
<Three-to-four sentence interpretation: what the metrics say overall, the most
important trend, the key concern, and the key positive.>

## Key metrics

| Metric | Current | Prior period | Change | vs. Plan | Trend | Flag |
|--------|---------|-------------|--------|---------|-------|------|
| <e.g., MRR> | $<x> | $<x> | +X% | +X% | ↑ | — |
| <e.g., Churn> | X% | X% | +X pp | Over plan | ↑ | ⚠️ Above plan |

## Notable findings

### <Metric or theme>
<Interpretation: what is happening, what is driving it, and what it means>

## Concerns requiring action
1. <Metric / trend> — recommended action — owner — timeline

## What is working
- <Metric or area performing well — and why it matters>
```
