---
name: process-improvement
version: 1.0.0
description: Document and improve a business process by mapping its current steps and handoffs, finding bottlenecks, rework, and waste, then proposing a leaner version with named owners and a current-vs-proposed comparison.
---

# Process Improvement

Make a process faster and more reliable by seeing how it actually runs today —
not how the org chart says it should — then cutting what does not earn its place.

## When to use

Use this skill when a recurring workflow feels slow, error-prone, or unclear, or when
someone asks to document, streamline, or redesign how a task gets done. It fits
onboarding, approvals, fulfillment, support, billing — any repeatable sequence of
steps with handoffs between people or systems.

## How to improve a process

1. **Map the current state first, exactly as it runs.** Walk it end to end with the
   people who do the work. Capture every step, who does it, the system or document
   used, and each handoff between roles.
   - Note where work waits in a queue versus where it is actively touched.
   - Record the trigger that starts it and the condition that means "done".
2. **Find the friction.** Look for the four classic problems:
   - Bottlenecks: a step where work piles up because one person or tool is the choke point.
   - Rework: anything done twice — re-keying data, fixing errors, chasing approvals.
   - Waiting: idle time between steps, often the biggest hidden cost.
   - Waste: steps that produce nothing the customer or next step actually needs.
3. **Quantify where you can.** Attach rough numbers — handoffs, average wait, error
   rate, touches per item. A guess beats a vibe and shows where the real cost sits.
4. **Design the leaner version.** Remove, merge, automate, or reorder steps. Assign a
   single clear owner to each remaining step — shared ownership is no ownership.
   - Eliminate before you automate; never speed up a step that should not exist.
   - Cut approval layers that add delay without adding judgment.
5. **Sanity-check the redesign.** Confirm it still handles the edge cases and exceptions
   the old process absorbed. List what changed and the expected effect of each change.

## Output format

```
Process: <name>  |  Trigger: <what starts it>  |  Done when: <end condition>

Current state
1. <step> — owner: <role> — system: <where> — handoff to: <next>  [wait/rework/waste]
...

Problems found
- <bottleneck/rework/wait/waste> at step N — impact: <rough number or effect>

Proposed state
1. <step> — owner: <role>  (changed: removed | merged | automated | reordered)
...

Changes & expected effect
- <change> → <expected improvement, e.g. "2 handoffs → 0; ~1 day saved">
```

Keep the two maps side by side so the reader sees exactly what moved and why.
