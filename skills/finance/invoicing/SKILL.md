---
name: invoicing
version: 1.0.0
description: Create clear invoices, track outstanding and aging receivables, and run a polite escalating follow-up sequence on overdue accounts, returning the invoice, an aging view, and the next follow-up message to send.
---

# Invoicing

Get invoices out clean and chase them without burning the relationship — most late
payment is friction or forgetting, not refusal.

## When to use

Use this skill when asked to draft an invoice, review which receivables are outstanding or
overdue, build an aging report, or write the next nudge on an unpaid account.

## How to invoice and collect

1. **Make the invoice impossible to misread.** Every invoice needs a unique number, issue
   and due dates, an itemized list with quantities and amounts, the total, accepted
   payment methods, and clear terms (e.g. net 30). A vague invoice is a slow invoice.
2. **State terms and pay the moment a relationship starts, not when it's overdue.** Due
   date, late policy, and how to pay should be on every invoice from the first one.
3. **Track receivables by age, not just total owed.** Bucket open invoices into current,
   1–30, 31–60, 61–90, and 90+ days past due. The buckets tell you who to chase first and
   how hard.
4. **Run an escalating, dated follow-up sequence:**
   - A few days before due: a friendly heads-up that it's coming.
   - Just past due: a short "this slipped past the date" reminder, assume oversight.
   - ~15 days over: firmer, restate the amount and terms, offer to resolve any issue.
   - 30+ days over: direct — request immediate payment, name next steps (hold work, late
     fee per terms, escalation).
5. **Keep the tone professional at every stage.** Warm early, firm later, never hostile.
   Always make paying easy: restate the amount, the link or method, and a single clear ask.

## Output format

```
Invoice #<n> — <customer> — due <date> — total <amount>

Aging:
- Current: <amount>   1–30: <amount>   31–60: <amount>   61–90: <amount>   90+: <amount>
- Oldest open: #<n>, <days> overdue

Next follow-up (#<n>, <stage>):
<short message: greeting, what's owed, the ask, how to pay>
```
