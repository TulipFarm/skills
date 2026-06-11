---
name: reconciliation
version: 1.0.0
description: Reconcile two sets of records — bank vs. general ledger, AR vs. subledger, intercompany accounts — by matching items, identifying and explaining discrepancies, and producing a reconciliation statement that supports the sign-off balance.
---

# Reconciliation

Reconciliation proves that two independent records of the same items agree.
If they do not agree, the difference must be explained — not rounded, not ignored,
not carried forward without resolution.

## When to use

Use this skill for month-end bank reconciliation, AR or AP subledger reconciliation,
intercompany balance reconciliation, payroll reconciliation, or any close-period
task that requires proving two records match. Also use it when an account balance
looks wrong and you need to find out why.

## How to reconcile

1. **Establish the starting balances.** Document the opening balance for both
   records at the start of the reconciliation period. Confirm both records start
   from the same prior period sign-off balance. If opening balances differ, stop
   and investigate before proceeding — a prior period error will contaminate
   everything downstream.

2. **Identify the source of each record.** Name both records and state when they
   were pulled. Both must be as of the same date. A reconciliation between a
   balance pulled today and a statement pulled last week will show false differences.

3. **Match items systematically.** Work through each record and mark matched items.
   Matching strategies:
   - By transaction ID or reference number (exact).
   - By amount and date range (where IDs differ across systems).
   - By batch or settlement group.
   Use a spreadsheet or tool — do not match in your head.

4. **Categorize unmatched items.** For every item that cannot be matched, assign it
   to one of:
   - **Timing difference:** transaction recorded in one system but not yet in the other
     (e.g., deposit in transit, outstanding check). These are expected and reconcile
     with time.
   - **Error in Record A:** recorded incorrectly in one system — needs a correction.
   - **Error in Record B:** recorded incorrectly in the other system.
   - **Missing transaction:** exists in one record with no corresponding entry.
   - **Unknown:** cannot categorize yet — needs investigation.

5. **Explain every difference.** The reconciliation is not complete until every
   unmatched item has an explanation. "Variance of $500" is not an explanation.
   "Invoice #1042 posted to GL in November but payment cleared bank in October —
   timing difference" is.

6. **Compute the reconciled balance.** Start with one record's balance, add or
   subtract timing differences and corrections, and arrive at the balance that
   should equal the other record. Both sides must agree after adjustments.

7. **Identify items requiring action.** Errors need journal entries or system
   corrections. Unknown items need investigation. Assign each to an owner with
   a due date.

8. **Get sign-off.** The reconciliation must be reviewed and approved by someone
   other than the preparer before the period is closed.

## Output format

```
Reconciliation: <account name>
Record A: <source — pulled as of date>
Record B: <source — pulled as of date>
Period: <month/year> | Prepared: <name — date>

## Opening balance confirmation
- Record A opening: $<amount>
- Record B opening: $<amount>
- Match: Yes / No (if No: prior period variance of $X — explain)

## Reconciliation statement

Record A balance: $<amount>
Add: <Timing item — description>: $<amount>
Less: <Correction — description>: ($<amount>)
**Adjusted Record A balance: $<amount>**

Record B balance: $<amount>
**Difference after adjustment: $<amount>** ← must be $0

## Unmatched items

| # | Description | Amount | Category | Action | Owner | Due |
|---|------------|--------|----------|--------|-------|-----|
| 1 | <description> | $<x> | Timing difference | None — will clear in <month> | n/a | n/a |
| 2 | <description> | $<x> | Error | Post adjusting JE | <name> | <date> |

## Sign-off
Prepared by: <name — date>
Reviewed by: <name — date>
```
