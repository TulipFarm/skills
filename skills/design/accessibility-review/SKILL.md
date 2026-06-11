---
name: accessibility-review
version: 1.0.0
description: Audit a UI for WCAG 2.1 AA compliance — checking color contrast, keyboard navigation, ARIA usage, focus management, and screen-reader text — and return a prioritized violation list with specific remediation steps and success criteria.
---

# Accessibility Review

Accessibility is not a checklist to satisfy — it is about ensuring the product
works for users with disabilities. A good review finds real barriers and fixes
them with enough specificity that a developer can act without guessing.

## When to use

Use this skill before shipping a new feature, during a design review, or when
auditing an existing page for compliance. Required for any product serving public
users or enterprise customers with accessibility mandates (Section 508, ADA,
EN 301 549). Use it proactively, not only after a complaint.

## How to review for accessibility

Work through the following categories systematically. For each issue found, record
the location, the WCAG criterion violated, the severity, and the fix.

### 1. Color and contrast
- Body text must be ≥ 4.5:1 contrast against its background (WCAG 1.4.3).
- Large text (18pt+ or 14pt bold) must be ≥ 3:1.
- UI components and graphical objects must be ≥ 3:1 (WCAG 1.4.11).
- Do not use color alone to convey meaning — always add a text label or icon
  (WCAG 1.4.1).
- Check contrast for all states: default, hover, focus, error, disabled.

### 2. Keyboard navigation
- Every interactive element must be reachable by Tab key (WCAG 2.1.1).
- There must be no keyboard trap — the user can always navigate away (WCAG 2.1.2).
- The navigation order must follow a logical, visually consistent sequence (WCAG 1.3.2).
- Keyboard shortcuts must not conflict with browser or OS shortcuts (WCAG 2.1.4).

### 3. Focus management
- Focus indicator must be visible on all interactive elements (WCAG 2.4.7). The
  default browser outline is acceptable; removing it without a replacement is not.
- After a modal or dialog opens, focus must move to it. When it closes, focus must
  return to the triggering element (WCAG 2.4.3).
- In single-page flows, focus must not reset to the top of the page on route change.

### 4. ARIA and semantic HTML
- Use native HTML elements (button, a, input) before ARIA. ARIA adds roles and
  states to elements; it does not add behavior.
- Every custom component must have the correct ARIA role, aria-label or
  aria-labelledby, and aria-expanded / aria-selected / aria-pressed as applicable.
- Avoid redundant ARIA (e.g., `role="button"` on a `<button>`).
- Dynamic content updated via JavaScript must use aria-live regions where appropriate.

### 5. Images and media
- All meaningful images must have descriptive alt text (WCAG 1.1.1).
- Decorative images must have `alt=""`.
- Videos must have captions; audio-only content must have a transcript (WCAG 1.2.x).
- Complex images (charts, diagrams) need a text alternative, not just alt text.

### 6. Forms
- Every input must have a visible, programmatically associated label (WCAG 1.3.1).
  Placeholder text alone does not count.
- Error messages must identify the field and describe the error — not just
  turn the border red (WCAG 3.3.1, 3.3.3).
- Required fields must be indicated before submission (WCAG 3.3.2).

### 7. Motion and timing
- Animations that run for more than 5 seconds must have a mechanism to pause,
  stop, or hide (WCAG 2.2.2).
- Content that flashes more than 3 times per second violates WCAG 2.3.1 and
  must be removed.

## Output format

```
Accessibility Review: <screen or feature>
Standard: WCAG 2.1 AA | Date: <date>

## Summary
<Overall pass/fail assessment and top two issues to fix first>

## Violations

| # | Location | WCAG Criterion | Severity | Issue | Fix |
|---|----------|---------------|----------|-------|-----|
| 1 | <element, screen> | 1.4.3 Contrast | Critical | Contrast ratio 2.8:1 on body text | Change text color from #999 to #767676 (4.5:1) |
| 2 | ... | ... | Major | ... | ... |

Severity: **Critical** = blocks use for some users | **Major** = significant barrier |
**Minor** = partial barrier | **Advisory** = best practice, not a strict violation

## Passed checks
- <list of areas that passed with no issues>

## Testing notes
- Tools used: <axe / NVDA / VoiceOver / Lighthouse / manual>
- Browsers tested: <list>
- Any areas not tested: <scope limits>
```
