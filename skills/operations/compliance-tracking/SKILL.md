---
name: compliance-tracking
version: 1.0.0
description: Track compliance obligations across regulatory, contractual, and certification requirements — recording due dates, owners, evidence requirements, and current status — and produce a compliance register that surfaces overdue and at-risk items before they become violations.
---

# Compliance Tracking

Compliance is not a one-time checkbox — it is an ongoing operational process.
Tracking it means knowing what you owe, to whom, by when, and whether you have
the evidence to prove it. Missing a compliance deadline is often more damaging
than the underlying gap.

## When to use

Use this skill to build or audit a compliance register, to prepare for an
upcoming audit or certification renewal, to onboard a new compliance obligation
(new regulation, new contract, new certification), or to run a periodic compliance
review. Also use it when compliance responsibilities are scattered across people
and no central view exists.

## How to track compliance

1. **Enumerate all obligations.** List every compliance requirement in scope:
   - Regulatory: GDPR, HIPAA, SOC 2, ISO 27001, PCI DSS, state privacy laws, etc.
   - Contractual: obligations in customer contracts, vendor agreements, and
     partner agreements.
   - Certification: requirements to maintain a certification or license.
   - Internal policies: audit requirements, review cadences defined in policy.
   Do not assume you know all obligations — check contracts, regulatory guidance,
   and certification bodies directly.

2. **Classify each obligation.** For each item:
   - **Type:** regulatory / contractual / certification / internal.
   - **Governing document:** the regulation, contract clause, or policy that creates it.
   - **Frequency:** one-time, annual, quarterly, ongoing, event-triggered.
   - **Evidence required:** exactly what proves compliance (policy document, audit log,
     training record, signed attestation, technical control screenshot).

3. **Assign ownership.** Every obligation must have a single named owner. Shared
   ownership is no ownership. The owner is responsible for ensuring evidence
   exists and due dates are met — not necessarily for doing all the work.

4. **Set due dates and review dates.** For recurring obligations, set the next
   due date and the review date (when to start preparing — typically 4–6 weeks
   before the deadline). For event-triggered obligations, document the triggering
   event.

5. **Record current status.** For each item:
   - **Compliant:** evidence exists and is current.
   - **In progress:** working toward compliance, on track.
   - **At risk:** deadline approaching and evidence is not ready.
   - **Overdue:** past due date with no evidence or incomplete evidence.
   - **Not applicable:** document why with approval.

6. **Surface overdue and at-risk items.** Sort by status and due date. Overdue
   and at-risk items must be escalated to the owner and, for high-severity
   obligations, to leadership.

7. **Maintain the evidence inventory.** For each compliant item, record where
   the evidence is stored and its expiry date. Evidence that is hard to find in
   an audit is nearly as bad as evidence that does not exist.

## Output format

```
Compliance Register: <company or scope>
Last updated: <date> | Next review: <date>

## Status summary
- Compliant: <n>
- In progress: <n>
- At risk: <n> ← NEEDS ATTENTION
- Overdue: <n> ← ESCALATE

## Register

| ID | Obligation | Type | Governing doc | Owner | Frequency | Next due | Review by | Status | Evidence location |
|----|-----------|------|--------------|-------|-----------|---------|-----------|--------|------------------|
| C1 | <GDPR Art. 30 — Records of processing> | Regulatory | GDPR | <name> | Annual | <date> | <date> | Compliant | <link> |
| C2 | ... | ... | ... | ... | ... | ... | ... | At risk | ... |

## Overdue and at-risk items (action required)

| ID | Obligation | Owner | Due date | Gap | Escalated to |
|----|-----------|-------|---------|-----|-------------|
| <C3> | <description> | <name> | <date> | <what is missing> | <name — date> |

## Upcoming deadlines (next 60 days)
- <date>: <obligation> — owner: <name> — status: <status>
```
