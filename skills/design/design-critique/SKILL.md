---
name: design-critique
version: 1.0.0
description: Review a design for usability, visual hierarchy, consistency with the design system, and alignment with user goals — returning a structured critique with severity-rated findings and specific actionable recommendations, not subjective aesthetic preferences.
---

# Design Critique

A good design critique makes designs better. It is not a preference share — it
is a structured evaluation against explicit criteria with specific, actionable
feedback. Vague feedback ("this feels off") is not a critique; it is noise.

## When to use

Use this skill to review a UI design, flow, wireframe, or prototype before it
goes to engineering or user testing. Also use it to provide peer feedback during
a design review session, or to self-critique a design before sharing it.

## How to critique a design

1. **Clarify the context first.** Before evaluating, confirm: Who is the user?
   What task are they trying to complete? What stage is this design at
   (early concept vs. production-ready)? What is the scope of feedback wanted?
   This prevents feedback that is irrelevant to the current stage.

2. **Evaluate usability.** For each key user task:
   - Is the path clear? Can the user figure out what to do without instruction?
   - Are interactive elements obvious (affordance)?
   - Are errors prevented or recoverable?
   - Is feedback given for actions?
   - Does the flow match the user's mental model of the task?

3. **Evaluate visual hierarchy.** Does the layout lead the eye to what matters
   most? Are primary actions visually prominent relative to secondary ones?
   Does the information density feel appropriate — not too sparse, not overwhelming?

4. **Check design system consistency.** Compare every component against the design
   system: are colors, typography, spacing, icons, and interaction patterns
   consistent? Flag deviations as either violations (should match) or proposals
   (intentional, but requires a system decision).

5. **Assess accessibility basics.** Even without a full WCAG audit: check
   contrast ratios for body text and interactive elements, confirm touch targets
   are at least 44×44 px, and verify text labels exist for all icons.

6. **Evaluate alignment with user goals.** Does the design help the user complete
   their job efficiently and confidently? Are there unnecessary steps, distracting
   elements, or unclear labels? Would a first-time user know what this screen does?

7. **Rate each finding.** Use consistent severity:
   - **Critical** — blocks task completion or causes errors. Must fix.
   - **Major** — significant friction or confusion. Should fix.
   - **Minor** — polish or consistency issue. Nice to fix.
   - **Suggestion** — alternative to consider, not a problem.

8. **Be specific and actionable.** Every finding must name the exact element,
   the problem, and a concrete recommendation. "Make the CTA more visible" is
   not actionable. "Increase the contrast ratio of the primary button from 2.8:1
   to at least 4.5:1" is.

## Output format

```
Design Critique: <screen or flow name>
Reviewer: <date> | Stage: <concept / detailed / production-ready>
User: <who> | Task: <what they are doing>

## Summary
<Two-to-three sentence overall assessment: what works well, what needs the most attention>

## Findings

| # | Element | Severity | Finding | Recommendation |
|---|---------|----------|---------|----------------|
| 1 | <e.g., "Submit button"> | Critical | <problem> | <specific fix> |
| 2 | ... | Major | ... | ... |

## What is working well
- <specific things that should be preserved>

## Open questions for the designer
- <things that need clarification before the critique can be complete>
```
