---
name: repository-issue-triage
version: 1.0.0
description: Triage repository issues and produce an evidence-based intake decision with duplicate candidates, severity, labels, ownership, missing information, and recommended disposition.
---

# Repository Issue Triage

Turn incoming repository issues into actionable, consistently classified work. Triage
determines what should happen next; it does not diagnose or fix the underlying code.

## When to use

Use this skill for new bug reports, feature requests, maintenance requests, and unclear
repository issues. Use a debugging workflow only after the issue is accepted and needs
technical root-cause investigation.

## How to triage an issue

1. **Restate the reported problem.** Identify expected behavior, actual behavior, affected
   users or systems, occurrence conditions, and the requested outcome.
2. **Check repository scope.** Confirm that the issue belongs to this repository or identify
   the likely owning component without transferring or closing it automatically.
3. **Search for duplicates.** Compare open and resolved issues by symptoms, component,
   error text, environment, and requested behavior. Cite likely matches and differences.
4. **Classify the issue type.** Choose bug, feature, maintenance, question, documentation,
   or investigation based on the request, not the reporter's label alone.
5. **Assess severity and priority separately.** Severity reflects impact; priority reflects
   timing and business importance. State evidence for both and avoid guessing prevalence.
6. **Identify missing information.** Request the smallest useful set: reproduction steps,
   observed output, expected output, environment, frequency, scope, or acceptance criteria.
   Do not request credentials, secrets, or unnecessary personal data.
7. **Recommend labels.** Use existing repository conventions for component, type, impact,
   status, and effort where evidence supports them. Flag uncertain labels.
8. **Recommend ownership.** Name the responsible team, role, or component area and explain
   the match. Do not assign a person without a clear ownership rule.
9. **Choose a disposition.** Recommend accept, needs information, duplicate, out of scope,
   defer, or close with rationale and cited evidence.
10. **Require confirmation for state changes.** Present proposed labels, assignment,
    duplicate linkage, transfer, or closure for human approval before applying them.

## Output format

- Issue summary and normalized type.
- Duplicate candidates with evidence and confidence.
- Severity, priority, affected scope, and rationale.
- Recommended labels and owner.
- Missing-information questions.
- Recommended disposition and exact state changes awaiting human confirmation.
