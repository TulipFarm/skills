---
name: record-import-and-cleanup
version: 1.0.0
description: Map and clean external tabular or unstructured data into target records, producing a validated import-ready set, preserved source data, and a documented exception queue.
---

# Record Import and Cleanup

Prepare external records for a defined target without losing provenance. Cleaning must be
repeatable, reversible, and explicit about every value that could not be mapped safely.

## When to use

Use this skill when importing records from spreadsheets, exports, forms, or structured text
into an existing record model. Use general data validation when the goal is only to assess
quality rather than produce an import-ready dataset.

## How to prepare records

1. **Preserve the source.** Keep the original input unchanged and assign a stable source
   row or item identifier before transformation.
2. **Define the target contract.** List target fields, types, required values, allowed codes,
   uniqueness rules, relationships, and record-level acceptance criteria.
3. **Create an explicit field map.** Map each source field to a target field or exclusion,
   including transformations, defaults, confidence, and rationale.
4. **Normalize values consistently.** Standardize whitespace, case, dates, numbers, units,
   phone formats, addresses, and controlled terms without changing substantive meaning.
5. **Handle missing values deliberately.** Distinguish unknown, not applicable, blank,
   invalid, and intentionally omitted values. Do not invent required data.
6. **Resolve duplicates conservatively.** Match on stable identifiers first, then documented
   combinations. Separate exact duplicates, probable duplicates, and legitimate similar records.
7. **Preserve provenance.** Retain source identifier, original value, transformed value,
   transformation rule, and match decision for audit and rollback.
8. **Validate relationships and constraints.** Check required fields, allowed values,
   uniqueness, parent references, date logic, and cross-field rules against the target contract.
9. **Build an exception queue.** Isolate ambiguous matches, invalid records, conflicting
   values, and missing required data with a recommended human resolution.
10. **Assess import readiness.** Report accepted, rejected, duplicate, and review counts.
    Require explicit human approval before importing, overwriting, or merging target records.

## Output format

- Source snapshot details and target record contract.
- Field mapping and transformation rules.
- Import-ready records with stable source identifiers and provenance.
- Duplicate decisions with match evidence and confidence.
- Exception queue with reason, affected fields, and recommended resolution.
- Validation summary, counts, and exact import actions awaiting human confirmation.
