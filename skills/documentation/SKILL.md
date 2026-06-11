---
name: documentation
description: Write or update technical documentation — READMEs, API references, architecture overviews, and runbooks — that stays accurate to the code and useful to its audience.
---

# Documentation

Produce documentation that a newcomer can follow without asking questions, grounded
in the actual code rather than assumptions.

## When to use

Use this skill when asked to write or refresh a README, document an API or module,
produce an architecture overview, or capture an operational runbook.

## How to write

1. **Identify the audience and the single job of the document.** A README answers
   "what is this and how do I run it"; an API reference answers "what can I call and
   what comes back"; a runbook answers "what do I do when X happens". Do not mix jobs.
2. **Read the code before writing.** Verify every command, path, flag, port, and
   example against the repository as it exists now. Never document behavior you have
   not confirmed.
3. **Lead with the most-needed information.** Quick start before background. Working
   example before parameter tables.
4. **Show, then explain.** Every concept gets a copy-pasteable example with expected
   output. Prefer one realistic example over three toy ones.
5. **Keep structure shallow.** Two heading levels are usually enough. If a section
   exceeds a screen, split it or cut it.

## Maintaining existing docs

- Diff the docs against current behavior: stale commands, renamed flags, dead links,
  removed features. Fix or delete — never leave known-wrong text standing.
- Match the existing voice and formatting of the project.
- When code changes make docs wrong, update the docs in the same change.

## Quality bar

A reader should be able to go from clone to running the project using only the
document. If any step requires tribal knowledge, the document is not done.
