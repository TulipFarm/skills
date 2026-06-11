---
name: journal-entry
version: 1.0.0
description: Prepare a journal entry for a business transaction — identifying the accounts affected, applying debit and credit rules per GAAP double-entry bookkeeping, stating the amounts, and specifying supporting documentation — so the entry is correct, auditable, and ready to post.
---

# Journal Entry

Every financial transaction has two sides — a debit and a credit that must be
equal. A journal entry is the permanent record of that transaction. Getting the
accounts and direction right the first time avoids downstream errors that are
much harder to find than to prevent.

## When to use

Use this skill to record a business transaction in the general ledger: accruals,
adjusting entries, prepaid amortization, depreciation, payroll entries,
revenue recognition, intercompany transfers, or any transaction that does not
flow through a standard subsystem automatically. Also use it to review a journal
entry someone else has prepared before it is posted.

## How to prepare a journal entry

1. **Understand the transaction completely.** Before picking accounts, describe
   what happened in plain language: what asset, liability, revenue, or expense
   changed, and in which direction. If you cannot describe the transaction in
   one sentence, you do not understand it well enough to record it.

2. **Apply the accounting equation.** Assets = Liabilities + Equity. Every entry
   must leave this equation balanced. Revenue increases equity; expenses decrease
   it. Confirm the direction of each account affected.

3. **Apply debit and credit rules:**
   - **Assets:** debit increases, credit decreases.
   - **Liabilities:** credit increases, debit decreases.
   - **Equity / retained earnings:** credit increases, debit decreases.
   - **Revenue:** credit increases, debit decreases.
   - **Expenses:** debit increases, credit decreases.
   Total debits must equal total credits.

4. **Select the accounts.** Use the company's chart of accounts. Be specific —
   use the right sub-account, not a catch-all. If the right account does not
   exist, flag it before posting, not after.

5. **Determine the period.** Entries must be posted to the correct accounting
   period based on when the transaction occurred (accrual basis) — not when
   cash was received or paid. For period-end entries, confirm the period is open.

6. **State the description.** Every journal entry must include a clear memo line
   explaining what it is for. "Adjusting entry" is not a description. "Accrued
   legal fees — October 2024 — Smith & Associates invoice pending" is.

7. **List the supporting documentation.** Name every document that supports
   the entry: invoice, contract, calculation, approval email. Auditors will ask
   for it — ensure it is attached or referenced before posting.

8. **Review for reasonableness.** Before posting, ask: Does the amount make sense?
   Is this the right period? Have I seen this type of entry before and does this
   match the pattern? A quick sanity check prevents the most common errors.

## Output format

```
Journal Entry
Entity: <company> | Period: <month/year> | Prepared by: <name> | Date: <date>

## Transaction description
<One sentence explaining what happened and why this entry is needed>

## Entry

| Account | Account # | Debit | Credit |
|---------|----------|-------|--------|
| <e.g., Prepaid Insurance> | <1200> | $12,000 | |
| <e.g., Cash> | <1000> | | $12,000 |
| **Total** | | **$12,000** | **$12,000** |

Memo: <description for the memo line>

## Supporting documentation
- <Document 1: Invoice #X from Y — attached>
- <Document 2: Calculation spreadsheet — attached>

## Posting checklist
- [ ] Debits equal credits
- [ ] Posted to correct accounting period
- [ ] Accounts match chart of accounts
- [ ] Supporting documentation attached
- [ ] Approved by: <name — required above $X threshold>
```
