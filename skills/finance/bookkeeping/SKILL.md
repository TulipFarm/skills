---
name: bookkeeping
version: 1.0.0
description: Record and categorize transactions using double-entry basics and reconcile accounts against bank and card statements, returning a correctly-categorized ledger plus an exceptions list of miscategorizations and duplicates.
---

# Bookkeeping

Keep the books clean: every transaction recorded once, categorized correctly, and
reconciled to what the bank actually shows.

## When to use

Use this skill when asked to record or categorize transactions, clean up a messy ledger,
or reconcile accounts against a bank or card statement. This is the day-to-day ledger
layer that feeds the formal statements — not the statements themselves and not
forecasting.

## How to keep the books

1. **Record every transaction with both sides.** Double-entry means each entry hits two
   accounts and the debits equal the credits. A sale is cash (or receivable) up and
   revenue up; a supplier payment is expense up and cash down. If an entry doesn't
   balance, it's wrong.
2. **Categorize consistently to a fixed chart of accounts.** Same vendor and purpose
   should always map to the same account. Resist inventing one-off categories — they
   make every later report noisy.
3. **Separate the owner from the business.** Personal spending on a business card is a
   draw or loan, never an expense. Mixing the two is the fastest way to unreliable books.
4. **Reconcile against the source of truth.** Match every ledger line to the bank or card
   statement for the period. The reconciled balance must equal the statement's closing
   balance — chase the difference until it's zero.
5. **Hunt the usual errors while reconciling:**
   - Duplicates: the same charge entered twice, or a payment recorded both manually and
     from an import.
   - Miscategorizations: capital purchases booked as expenses, transfers booked as
     income, refunds booked as new revenue.
   - Missing entries: bank lines with no ledger match, or fees and interest never recorded.

## Output format

```
Reconciliation — <account> — <period>
Reconciled balance: <amount>  (matches statement: yes/no)
Exceptions:
- <date> <amount> — <issue: duplicate | miscategorized to X, should be Y | unmatched> — fix
```

If everything reconciles cleanly, say so in one line and list the exceptions as none.
