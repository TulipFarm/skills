---
name: audit-support
version: 1.0.0
description: Prepare for an audit by mapping controls to requirements, gathering evidence, identifying gaps, and producing an audit-ready evidence package — so auditors receive complete, well-organized submissions and no surprises arise during fieldwork.
---

# Audit Support

Audit preparation is not about passing — it is about demonstrating that controls
exist, operate effectively, and are documented sufficiently to be independently
verified. Surprises during fieldwork are expensive; find gaps during prep.

## When to use

Use this skill to prepare for an external audit (SOC 2, ISO 27001, PCI DSS,
financial audit, regulatory examination), an internal audit, or a customer
security questionnaire. Most useful six to eight weeks before the audit begins.
Also useful mid-audit when evidence requests need to be organized and responded to.

## How to prepare for an audit

1. **Get the audit scope and requirements.** Before gathering anything, confirm:
   - What is being audited (systems, processes, time period).
   - What framework or standard applies.
   - What specific controls or criteria will be tested.
   - The evidence formats the auditor will accept.
   Working from an unclear scope wastes time and produces gaps.

2. **Map controls to requirements.** Create a control-to-requirement mapping:
   for each audit criterion, identify the control or process that satisfies it.
   Controls that have no corresponding requirement are not needed for this audit.
   Requirements with no corresponding control are gaps to fix.

3. **Identify the evidence for each control.** For each control, determine exactly
   what evidence demonstrates it operates effectively:
   - Policy or procedure document (approved and current).
   - Configuration screenshot or system report.
   - Sample of transactions (auditors typically test a sample — know your population).
   - Training completion records.
   - Access review results.
   Name the evidence source, where it is, and who owns it.

4. **Conduct a pre-audit gap assessment.** For each control-requirement mapping:
   - Does the evidence exist?
   - Is it current? (Outdated policies, expired certifications, access reviews
     from two years ago may not satisfy the auditor.)
   - Is it sufficient? (A policy that exists but was never approved or communicated
     is not evidence of effective operation.)
   Rate each as: Ready / Needs update / Gap.

5. **Remediate gaps before fieldwork.** For each gap, assign an owner and a
   deadline. Prioritize gaps that are critical to the audit scope over cosmetic
   documentation issues. Not all gaps can be closed before an audit — document
   compensating controls for any that remain open.

6. **Organize the evidence package.** Structure evidence so auditors can navigate
   it without your help:
   - One folder per requirement or control domain.
   - Each piece of evidence labeled with the control it supports and the time
     period it covers.
   - An index that maps each requirement to the evidence file(s).

7. **Prepare the team.** Brief everyone who may be interviewed or asked for
   evidence: what to expect, what their scope is, what to say and not to say.
   Auditors may interview personnel — unprepared staff create unnecessary findings.

## Output format

```
Audit Preparation: <audit name / framework>
Scope: <systems / processes> | Period: <start> – <end> | Audit date: <date>
Prepared: <date>

## Readiness summary
- Ready: <n controls>
- Needs update: <n>
- Gap (no evidence): <n>
- Overall readiness: <percentage>

## Control-to-requirement mapping and evidence status

| Req. ID | Requirement | Control | Evidence | Location | Status |
|---------|------------|---------|----------|----------|--------|
| CC6.1   | <description> | <control> | <document name> | <link/folder> | Ready |
| CC6.2   | ... | ... | ... | ... | Gap |

## Gaps and remediation plan

| Req. ID | Gap description | Owner | Deadline | Compensating control |
|---------|----------------|-------|---------|---------------------|
| <CC6.2> | <Access review not completed in past 12 months> | <name> | <date> | <description or "none"> |

## Evidence index
- <Requirement>: [File name — location]
- ...

## Pre-audit action items
- [ ] <Action — owner — due date>
```
