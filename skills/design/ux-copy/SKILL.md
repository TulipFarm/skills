---
name: ux-copy
version: 1.0.0
description: Write clear interface microcopy — buttons, labels, empty states, errors, tooltips, onboarding — that is concise, human, and tells the user what to do next, delivered with placement and context notes.
---

# UX Copy

Write the words inside the interface so the user always knows where they are, what
just happened, and what to do next. Microcopy is design, not decoration.

## When to use

Use this skill when writing or fixing the text on buttons, form labels, empty
states, error and confirmation messages, tooltips, or onboarding steps. Reach for
it when copy is vague ("Submit"), blaming ("You entered an invalid value"), or
silent where the user is stuck — not for long-form marketing or documentation.

## How to write

1. **Lead with the verb and the outcome.** Buttons name the action that happens:
   "Save changes", "Send invite", "Delete account" — never "OK", "Submit", or
   "Yes". The label should make sense without the surrounding sentence.
2. **Write errors that say what to do next.** Name what went wrong in plain words,
   then the fix. "That email is already registered — try signing in instead" beats
   "Error 409". Never blame the user; the system failed to be clear.
3. **Use empty states to onboard.** An empty list is the best place to explain the
   feature and offer the first action: one line of what it's for, one button to
   start. A blank screen with "No data" wastes the moment.
4. **Be concise, then human.** Cut filler ("please", "in order to", "successfully").
   Then read it aloud — if it sounds like a robot or a lawyer, rewrite it the way
   you'd say it to a colleague.
5. **Stay consistent across the product.** One term per concept — pick "delete" or
   "remove" and never alternate. Match tense, capitalization (sentence case is
   usually safest), and tone. Maintain a tiny term list so it holds over time.
6. **Match length to space and stakes.** Tooltips are a phrase; confirmations for
   destructive actions spell out the consequence ("This permanently deletes 3
   files"). Truncation is a design failure, not the writer's problem to absorb.

## Output format

```
<Surface / element>  (where it appears + trigger)
  Copy: "<the exact text>"
  Note: <why — what the user needs to know or do next>
```

Deliver every string with its placement and context note, so whoever implements it
knows what it is and why. Copy reviewed without its surface is copy reviewed blind.
