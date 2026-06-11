---
name: code-review
version: 1.0.0
description: Review a diff, pull request, or file for correctness bugs, risky patterns, and maintainability issues, reporting prioritized findings with concrete fixes.
---

# Code Review

Review code the way a careful senior engineer would: find what is actually broken or
risky first, style nits last.

## When to use

Use this skill when asked to review a pull request, a diff, a branch, or a specific
file — or before merging work that touched more than a trivial amount of code.

## How to review

1. **Understand intent first.** Read the change description, commit messages, or ask
   what the change is supposed to do. A review without intent is a lint pass.
2. **Read the full change, not hunks in isolation.** Open the surrounding code of each
   modified function so you see callers, error paths, and invariants.
3. **Hunt in priority order:**
   - Correctness: logic errors, off-by-one, inverted conditions, missed error handling,
     race conditions, broken edge cases (empty, null, huge, concurrent).
   - Security: unvalidated input, injection, secrets in code, authz gaps.
   - Data safety: destructive migrations, lossy conversions, missing transactions.
   - API/contract breaks: changed signatures, response shapes, serialized formats.
   - Tests: do they actually exercise the new behavior? Would they fail if the code
     were wrong?
   - Maintainability: duplication, dead code, misleading names — only after the above.
4. **Verify, don't speculate.** If you can run the tests or type-checker, do it and
   include the result.

## Reporting findings

- One finding per line item: `file:line — severity — what is wrong — suggested fix`.
- Severity levels: `blocker` (must fix before merge), `warning` (should fix),
  `nit` (optional polish).
- No praise padding. If the change is clean, say so in one sentence.
- When you suggest a fix, make it concrete enough to paste.
