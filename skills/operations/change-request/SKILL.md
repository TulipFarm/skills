---
name: change-request
version: 1.0.0
description: Draft a change request for an operational, IT, or process change — describing the change, its rationale, impact assessment, rollback plan, and approval requirements — so the change can be reviewed, approved, and executed safely without information gaps.
---

# Change Request

A change request is a formal record of a proposed change that enables reviewers
to assess it quickly and approvers to authorize it with confidence. The quality
of the change request determines the quality of the change — vague requests get
vague approvals and surprise outcomes.

## When to use

Use this skill when making any change that requires review or approval before
execution: IT system changes, infrastructure modifications, process changes,
policy updates, vendor changes, data modifications, or any change to a
production environment. Required wherever change management controls exist.

## How to write a change request

1. **Describe the change precisely.** What exactly is being changed? Be specific:
   not "update the server" but "update the Linux kernel on the production web
   servers from 5.15 to 5.19." Someone who was not involved in the decision must
   be able to understand exactly what will happen.

2. **State the rationale.** Why is this change needed? Reference the problem it
   solves, the risk it mitigates, or the requirement it satisfies. Link to the
   incident, ticket, or business requirement that drives it.

3. **Assess the impact.** For every stakeholder and system that could be affected:
   - Who or what is affected?
   - How — service interruption, behavioral change, data change?
   - How long — is there downtime? When?
   - What is the scope — all users, specific customers, internal only?

4. **Define the risk.** What is the probability and severity of the change
   going wrong? What are the known failure modes? A low-risk change and a
   high-risk change require different levels of review — do not use the same
   template language for both.

5. **Write the implementation plan.** Step-by-step execution instructions,
   including:
   - Pre-change prerequisites and verification steps.
   - The change actions in sequence.
   - Validation checks: how will you know the change was successful?
   - Post-change monitoring: what will you watch and for how long?

6. **Write the rollback plan.** If the change fails or produces unexpected results,
   exactly how is it reversed? Name each rollback step and its expected outcome.
   If rollback is not possible, say so explicitly — this escalates the risk rating.

7. **Identify approvals required.** Based on the risk rating and scope, list who
   must approve this change before it can proceed. Include any blackout windows
   or freeze periods that apply.

## Output format

```
Change Request
ID: <CR-XXXX> | Date: <date> | Requestor: <name>
Type: Standard / Normal / Emergency | Risk: Low / Medium / High

## Change description
<Precise description of what is changing — specific systems, versions, data, or process>

## Rationale
<Why this change is needed — link to incident, ticket, or business requirement>

## Impact assessment
| Area | Impact | Duration | Scope |
|------|--------|---------|-------|
| <System/users> | <description> | <e.g., 15-min downtime> | <all users / subset> |

## Risk rating: <Low / Medium / High>
**Failure modes:**
- <What could go wrong and consequence>

**Risk mitigations:**
- <How failure modes are addressed>

## Implementation plan

### Pre-change
- [ ] <Prerequisite — responsible person>

### Change steps
1. <Step — expected duration>
2. ...

### Validation
- [ ] <Check that confirms success>

### Post-change monitoring
- Monitor: <what> for <how long>

## Rollback plan
1. <Rollback step>
Rollback possible: Yes / No — if No: <escalation path>

## Approvals required
| Approver | Role | Required by |
|---------|------|------------|
| <name>  | <role> | <date> |

## Scheduled window
Date: <date> | Time: <start – end> | Blackout check: <clear / blocked>
```
