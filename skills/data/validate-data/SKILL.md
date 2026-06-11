---
name: validate-data
version: 1.0.0
description: Validate a dataset for completeness, schema conformance, referential integrity, and outliers — then return a prioritized data quality report with row-level examples so stakeholders know what to trust and what to fix.
---

# Data Validation

Data validation is a first-pass audit before any analysis or load. The goal is to
surface quality problems with enough specificity that they can be fixed — not just
noted as "data issues."

## When to use

Use this skill whenever you receive a new dataset, before loading data to
production, when analysis results look suspicious, after an ETL pipeline runs, or
when integrating data from an external source. Do not skip validation under time
pressure — bad data caught now is cheaper than bad decisions made later.

## How to validate

1. **Profile the dataset first.** Count rows, columns, and distinct values. Compute
   nulls per column as a percentage. Note the expected row count if known. This
   gives you a baseline before any deep checks.

2. **Schema conformance.** Verify column names, data types, and required fields
   match the expected schema. Flag: wrong types (e.g., dates stored as strings),
   missing columns, extra unexpected columns.

3. **Completeness.** Check every required field for nulls, empty strings, and
   placeholder values (0, "N/A", "TBD", "NULL" as a string). Report missing-value
   rate per column and identify which missing values are blocking versus acceptable.

4. **Uniqueness and duplicates.** Identify duplicate primary keys or natural keys.
   Partial duplicates (same key, different values) are especially dangerous —
   surface those separately.

5. **Referential integrity.** If the dataset joins to another table, verify foreign
   keys exist in the referenced table. Quantify orphaned records.

6. **Domain constraints.** Check business rules: dates within expected range, amounts
   non-negative, codes drawn from a known list, percentages between 0 and 100.
   State each constraint tested and the failure count.

7. **Outliers and distributional sanity.** For numeric columns, check min, max, mean,
   and standard deviation. Flag values more than 3 standard deviations from the mean
   or outside a plausible domain range. Do not delete outliers — flag them for human
   review.

8. **Cross-field consistency.** Check relationships between fields: end date after
   start date, total equals sum of line items, status codes consistent with other
   status fields.

9. **Prioritize findings.** Not all issues block use. Rate each finding: **Blocker**
   (stops loading or analysis entirely), **High** (will cause wrong results),
   **Medium** (partial data loss), **Low** (cosmetic or edge case).

## Output format

```
Data Quality Report: <dataset name>
Validated: <date>
Row count: <n> | Columns: <n> | Expected rows: <n or "unknown">

## Summary
<Two-sentence overall assessment: safe to use / conditional / do not use>

## Findings

| # | Check | Column(s) | Severity | Count | Example |
|---|-------|-----------|----------|-------|---------|
| 1 | Null required field | order_id | Blocker | 142 rows | row 503: order_id = NULL |
| 2 | ...   | ...       | ...      | ...   | ...     |

## Recommended actions
1. <Fix for blocker 1>
2. <Fix for high issue>
...

## What passed
- <list of checks that came back clean>
```
