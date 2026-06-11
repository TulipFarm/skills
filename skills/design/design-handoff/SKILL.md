---
name: design-handoff
version: 1.0.0
description: Prepare a design for engineering handoff — annotating specs, documenting interactions and states, flagging edge cases and responsive behavior, and producing a handoff checklist — so developers can build accurately without repeated design questions.
---

# Design Handoff

A successful handoff means engineering can build the feature without requiring
the designer to be in the loop for every detail. That requires specs that
anticipate the questions developers will ask before they ask them.

## When to use

Use this skill when a design is approved and about to be handed to engineering
to build. Also use it to audit an existing Figma file or design spec before
declaring it "ready for dev."

## How to prepare a handoff

1. **Verify the design is complete.** Before annotating anything, check that all
   required states and screens exist: empty state, loading state, error state,
   success state, edge cases (long text, no data, maximum items). Missing states
   discovered mid-development cause delays — find them now.

2. **Annotate interactions and behavior.** For every interactive element, document:
   - Trigger (click, hover, keyboard, swipe)
   - Action (opens modal, submits form, navigates to X)
   - Transition / animation (fade in 150ms, slide from right)
   - Feedback (button disabled state, loading spinner)
   Developers build to spec; if the interaction is not written down, it will
   not be built correctly.

3. **Specify responsive behavior.** For each layout, document behavior at every
   supported breakpoint. What stacks, what hides, what resizes? Do not leave
   this to developer judgment.

4. **Provide exact measurements.** Ensure spacing, sizing, border radius, and
   shadow values are defined with tokens or explicit values — not "looks about 8px."
   If your design tool generates these, verify they are correct before handoff.

5. **Name components explicitly.** Map each element to its design-system component
   name (e.g., "Button/Primary/Large", "Input/Text/Error"). For net-new components,
   name them consistently and note they are new.

6. **Document data requirements.** For each dynamic element, note: where the data
   comes from, what the field name is, maximum and minimum length, and what to
   show if the data is missing.

7. **Flag open decisions.** If any design decision is unresolved, say so
   explicitly and note who must resolve it before engineering can proceed.

8. **Write the handoff checklist.** A checklist developers and designers both
   sign off on before work begins.

## Output format

```
Design Handoff: <feature name>
Designer: <name> | Dev lead: <name> | Date: <date>
Design file: <link>

## Handoff checklist

### Completeness
- [ ] All screens and states designed (default, loading, empty, error, success)
- [ ] Responsive behavior specified for all breakpoints
- [ ] All interactive elements annotated
- [ ] Edge cases handled (long text, max items, zero state)

### Specs
- [ ] Component names match design system
- [ ] Spacing uses design tokens
- [ ] Typography uses type styles (not manual overrides)
- [ ] Colors use color tokens
- [ ] New components flagged and named

### Data and content
- [ ] Dynamic fields labeled with data source and field name
- [ ] Character limits specified
- [ ] Fallback / empty state content written

### Open items (must resolve before build)
- [ ] <Decision pending — owner: <name>>

## Interaction annotations

### <Component / screen>
- **Trigger:** <click/hover/keyboard>
- **Action:** <what happens>
- **Transition:** <animation, timing>
- **States:** default | hover | active | disabled | error | loading

## Responsive behavior

| Breakpoint | Layout change |
|------------|--------------|
| Mobile (<768px) | <what changes> |
| Tablet (768–1024px) | ... |
| Desktop (>1024px) | ... |
```
