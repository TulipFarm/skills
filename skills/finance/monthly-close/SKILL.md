---
name: monthly-close
version: 1.0.0
description: Run a repeatable month-end and quarter-end close — reconcile, accrue, review for errors, lock the period, and summarize — returning a close checklist and a short month summary.
---

# Monthly Close

A close is a discipline, not an event: the same steps in the same order every period so
the numbers are trustworthy and the next month opens clean.

## When to use

Use this skill when asked to run or build a month-end (or quarter-end) close, produce a
close checklist, or wrap up a period before reporting. This is the closing process that
makes the books final — not the statements it feeds, which come after.

## How to close

1. **Confirm all activity is recorded.** Every transaction for the period entered, all
   bank and card feeds imported, nothing sitting uncategorized. Close can't start on
   incomplete data.
2. **Reconcile every account.** Bank, card, loan, and clearing accounts each tie to their
   statement's closing balance. An unreconciled account means the period isn't done.
3. **Book accruals and adjustments.** Record expenses incurred but unbilled, revenue
   earned but uninvoiced, depreciation, prepaid amortization, and payroll spanning the
   period boundary. This is what separates a real close from a checkbook tally.
4. **Review for errors before locking.** Scan for the usual suspects: negative balances
   where none should exist, expense spikes versus prior months, anything in a catch-all
   or "ask my accountant" account, and round-number estimates that were never trued up.
5. **Lock the period, then summarize.** Once reconciled and reviewed, close the period so
   the numbers can't drift. Then write a short summary: revenue, key costs, net result,
   and what changed versus last period.

## Output format

```
Close checklist — <month/quarter>
[ ] All transactions recorded   [ ] Feeds imported   [ ] Nothing uncategorized
[ ] Bank/card/loan reconciled   [ ] Accruals & adjustments booked
[ ] Error review done           [ ] Period locked

Month summary:
- Revenue <amount> | Net <amount> | vs prior: <delta>
- Notable: <one or two lines on what moved and why>
- Open items carried forward: <none | list>
```
