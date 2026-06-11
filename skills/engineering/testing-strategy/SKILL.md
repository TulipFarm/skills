---
name: testing-strategy
version: 1.0.0
description: Decide what and how to test — the right mix across unit, integration, and end-to-end levels, what to cover first by risk and blast radius, what not to test, and what "done" means — producing a testing plan.
---

# Testing Strategy

Decide what to test before writing tests. The goal is confidence per unit of effort —
not coverage for its own sake, and not testing everything equally.

## When to use

Use this skill when starting a feature and deciding how to verify it, when a codebase
has too few or too many tests, or when tests are slow and flaky and you need to rebalance.
Use it to choose deliberately rather than defaulting to "add some unit tests."

## How to plan

1. **Rank surfaces by risk and blast radius.** What breaks quietly, what affects money
   or data, what many users hit, what is hardest to fix in production. Spend your test
   budget where failure costs the most — not where tests are easiest to write.
2. **Pick the right level for each surface.** Unit tests for logic and edge cases —
   fast, many, isolated. Integration tests for the seams between components and real
   data stores. End-to-end tests for a few critical user journeys, sparingly. Push
   detail down to the cheapest level that can catch the bug.
3. **Test behavior, not implementation.** Assert on observable outcomes and contracts,
   so tests survive refactors. Tests coupled to internals break on every change and
   train people to ignore them.
4. **Decide what *not* to test.** Trivial getters, framework code, third-party
   libraries, throwaway prototypes. Saying no is part of the strategy — a test with no
   chance of catching a real bug is pure maintenance cost.
5. **Cover the unhappy paths.** Empty, null, malformed, oversized, concurrent,
   permission-denied, timeout. Bugs live at the edges; the happy path rarely surprises.
6. **Define "done."** State the bar: which surfaces must have tests, what the suite
   must catch, and the time/flakiness budget. "Done" is a stated threshold, not a
   coverage percentage chased to 100.

## Output format

Deliver a plan, not a wish list:

```
Risk map: <surfaces ranked by blast radius>
Unit:        <what logic/edge cases — the bulk>
Integration: <which seams + real dependencies>
E2E:         <the 1-3 critical journeys, no more>
Not testing: <explicitly skipped, and why>
Done when:   <the bar this suite must clear>
```

Aim the heaviest testing at the riskiest, hardest-to-fix code. A plan that tests
everything equally has no strategy in it.
