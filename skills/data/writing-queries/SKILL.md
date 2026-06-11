---
name: writing-queries
version: 1.0.0
description: Write correct, readable SQL to pull the data you need, then verify the result is actually right with row counts, spot-checks, and edge cases before trusting it.
---

# Writing Queries

A query that runs is not a query that is right. Write it to be read, then prove it
returns what you think it does.

## When to use

Use this skill when pulling data from a database or warehouse to answer a question or
feed a report. It covers vendor-neutral SQL and the verification step that turns a
result set into something you can trust.

## How to write

1. **Define the grain of the answer first.** One row per what — per order, per
   customer, per day? Every join and aggregate either preserves that grain or breaks
   it. Most wrong numbers come from a join that silently fans out rows.
2. **Build incrementally.** Start from the base table, run it, eyeball the rows. Add
   one join or filter at a time and re-check the count. Do not write a five-join query
   and debug it all at once.
3. **Write SQL a human can read.**
   - Common table expressions (`WITH`) over nested subqueries.
   - Explicit `JOIN ... ON`, never comma joins; qualify columns with table aliases.
   - Filter early, name derived columns clearly, and avoid `SELECT *` in anything you
     will keep.
4. **Mind the silent traps.** `NULL`s break `NOT IN`, equality, and `COUNT(column)`.
   `INNER JOIN` drops unmatched rows you may have wanted. Integer division truncates.
   Aggregates ignore `NULL`s. Decide what you want for each, explicitly.
5. **Sanity-check the result before trusting it:**
   - Compare the row count and a key total against a number you already know.
   - Spot-check a handful of rows by hand against the source.
   - Test the edges: a customer with no orders, a duplicate, a date boundary.
   - Re-run after a `GROUP BY` and confirm no double-counting.
6. **Read advisory only.** Pull and aggregate; never write, update, or delete data as
   part of an analysis.

## Output format

```
-- Question: <what this answers>  Grain: <one row per ...>
<the query>

Sanity check:
- Row count: <n>  (vs expected <m> because <reason>)
- Spot check: <row checked by hand and what matched>
- Edge case: <the boundary tested>
```

If you cannot state how you verified a number, you have not finished the query.
