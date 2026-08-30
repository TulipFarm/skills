---
name: routine-design
version: 1.0.0
description: Design a repeated operational routine and produce a safe schedule, event, or manual execution specification with approvals, retry behavior, idempotency, and stop conditions.
---

# Routine Design

Convert repeated work into a predictable routine that is safe to run more than once.
Specify behavior and controls rather than writing a broad process document.

## When to use

Use this skill when recurring work should run on a schedule, in response to an event, or
through a consistent manual trigger. Use process documentation when the goal is to explain
an end-to-end business process rather than design reliable repetition.

## How to design a routine

1. **Define the outcome.** State the result the routine must produce, who needs it, and
   how success will be observed.
2. **Choose the trigger.** Specify schedule, event, threshold, or manual request. Include
   time zone, expected frequency, allowed delay, and duplicate-trigger behavior.
3. **Set scope and boundaries.** Identify included records, systems, or teams, plus explicit
   exclusions and conditions that prevent a run.
4. **List required inputs.** Name each input, source, freshness requirement, validation rule,
   and fallback when the input is absent or incomplete.
5. **Design ordered steps.** Describe the smallest deterministic sequence, intermediate
   states, outputs, and owner for any manual judgment.
6. **Make reruns safe.** Define a run identifier, duplicate detection, already-completed
   checks, and how repeated execution avoids duplicate messages or records.
7. **Place approval gates.** Require human confirmation before sending, publishing,
   overwriting, deleting, canceling, committing, or making another irreversible change.
8. **Define retry behavior.** State which failures are temporary, retry limits, delay
   approach, and when the routine must stop rather than continue.
9. **Handle partial failure.** Record completed steps, preserve source data, isolate failed
   items, and produce a clear exception queue instead of hiding mixed outcomes.
10. **Set monitoring and stop conditions.** Specify completion evidence, alerts, escalation
    owner, maximum run time, unsafe conditions, and the manual pause or disable path.

## Routine specification

- Outcome, owner, trigger, timing, and scope.
- Inputs with freshness and validation requirements.
- Ordered steps with outputs and approval gates.
- Idempotency and duplicate-handling rules.
- Retry limits, partial-failure behavior, and exception ownership.
- Completion evidence, monitoring, escalation, and stop conditions.
- Proposed activation or state changes awaiting explicit human confirmation.
