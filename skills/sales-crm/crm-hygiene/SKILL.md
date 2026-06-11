---
name: crm-hygiene
version: 1.0.0
description: Audit and clean customer, contact, and lead records — dedupe, standardize fields, fill gaps, and flag stale entries — producing a cleanup report plus the corrected records.
---

# CRM Hygiene

Treat the contact database as the asset it is: every duplicate, blank field, and dead
record quietly costs a deal. Clean it methodically, and show your work.

## When to use

Use this skill when asked to clean up a CRM, dedupe contacts or accounts, standardize
how fields are filled, or audit data quality before a campaign, migration, or report.
Reach for it whenever someone says the data is "messy" or numbers don't reconcile.

## How to clean

1. **Profile before you touch anything.** Count total records, and tally how many are
   missing key fields (email, company, owner, stage). You cannot fix what you have not
   measured, and the counts become your before/after proof.
2. **Find duplicates by identity, not by exact match.** Group on normalized email
   domain, company name, and phone. Catch near-misses: trailing whitespace, "Inc"
   vs "Inc.", `Co.`/`Company`, casing. List candidate pairs — do not auto-merge.
3. **Merge with a survivorship rule.** Keep the record with the most recent activity
   and the most complete fields; carry over any non-empty values the loser had. Never
   silently drop notes, owners, or linked deals — fold them into the survivor.
4. **Standardize formatting field by field.** One convention each: phone format,
   country/state codes, company suffix, title casing for names, lowercase emails,
   canonical URLs (strip `https://`/`www`). Apply the same rule everywhere.
5. **Fill safe gaps only.** Derive what is unambiguous (company from email domain,
   region from country) and leave the rest blank. Inventing data is worse than a hole.
6. **Flag, don't delete.** Mark stale (no activity past a threshold), incomplete, or
   unowned records for human review. Deletion is the owner's call, not yours.

## Output format

```
CRM Hygiene Report — <date>
Scanned: <N> records
- Duplicates: <N> merge groups (list pairs + chosen survivor)
- Standardized: <N> records across <fields>
- Gaps filled: <N> (field ← source)
- Flagged: <N> stale, <N> incomplete, <N> unowned — needs review
Corrected records: <attached/exported>
```

Always include the before/after counts. A cleanup nobody can verify did not happen.
