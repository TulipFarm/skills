---
name: tax-prep
version: 1.0.0
description: Organize records ahead of tax filing — categorize deductible expenses, assemble the document checklist, and flag gaps — returning an organized tax packet and an open-items list, as preparation only and not tax advice.
---

# Tax Prep

Get records filing-ready so the accountant spends time on judgment, not chasing
receipts. This is preparation and organization only — not professional tax advice.

## When to use

Use this skill when asked to organize records for tax season, sort deductible expenses,
build the document checklist for a filing, or sanity-check what's missing before handing
off to an accountant or tax preparer.

## How to prepare

1. **Confirm the entity and period up front.** What kind of business, what tax year, cash
   or accrual. The right checklist depends on all three — don't assume.
2. **Start from reconciled books.** Tax prep on un-reconciled data just moves errors onto
   a return. If the period isn't closed and reconciled, that comes first.
3. **Group expenses into deduction-relevant categories.** Sort spend into the buckets a
   preparer expects — supplies, rent, payroll, vehicle/mileage, home-office, professional
   fees, travel, meals — and flag any with special rules so they're reviewed, not assumed.
4. **Assemble the document checklist.** Income records, expense totals by category,
   payroll and contractor filings, asset purchases for depreciation, prior-year return,
   and statements that substantiate the numbers. List what's gathered and what's still
   outstanding.
5. **Flag gaps and judgment calls — don't decide them.** Missing receipts, unclear
   personal-versus-business splits, large or unusual items, and anything whose
   deductibility is a real question. These go to the professional with a note, not a guess.

## Output format

```
Tax packet — <entity> — <tax year> — basis: <cash/accrual>
Deductible expenses by category:
- <category>: <total>   (flag: <special rule / none>)
Documents:
- Gathered: <list>
- Missing/outstanding: <list>
Open items for the preparer:
- <gap or judgment call> — <why it needs review>
```

Reminder: this packet is preparation and organization. Filing positions and deduction
eligibility are decisions for a qualified tax professional.
