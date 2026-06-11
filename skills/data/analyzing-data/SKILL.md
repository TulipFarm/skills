---
name: analyzing-data
version: 1.0.0
description: Explore a dataset to answer a specific question — profile it first, then surface trends, outliers, and segments — and report findings honestly with the numbers and caveats behind them.
---

# Analyzing Data

Answer the question that was asked, with evidence — not a tour of every column you
found interesting.

## When to use

Use this skill when handed a dataset and a question: "why did signups drop", "which
customers churn", "what drives revenue". It covers ad hoc exploration that ends in a
written finding, not building a recurring dashboard or a formal statistical test.

## How to analyze

1. **Pin the question before touching the data.** Write it as one sentence with a
   measurable answer. "Is it bad?" is not a question; "did weekly active users fall
   more than 10% after the May release?" is.
2. **Profile and sanity-check first.** Before any conclusion, know the shape:
   - Row count, date range, granularity (one row per what?).
   - Missing values, duplicates, and obvious junk (negative ages, future dates).
   - Whether the totals match a source you already trust. If they don't, stop and
     reconcile — a wrong denominator poisons everything downstream.
3. **Start with the aggregate, then decompose.** Get the headline number, then split
   it by the dimensions that could explain it: time, segment, channel, cohort. Most
   real findings live in a segment, not the average.
4. **Hunt for outliers and breaks, not just trends.** A flat average often hides one
   segment cratering while another grows. Check distributions, not only means.
5. **Quantify every claim.** "Churn is up" is an opinion; "churn rose from 4.1% to
   6.3% month over month, concentrated in the free tier" is a finding.
6. **Try to break your own conclusion.** Ask what else could produce this number —
   a tracking change, a seasonal effect, a definition shift. Rule it out or flag it.

## Output format

```
Question: <the one-sentence question>
Answer: <direct answer, with the key number>
Evidence:
- <metric> — <value>, <comparison/segment>
Caveats:
- <data quality gap, confound, or thing you could not rule out>
```

State what the data cannot answer as plainly as what it can. A finding that hides its
caveats is worse than no finding.
