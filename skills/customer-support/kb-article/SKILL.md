---
name: kb-article
version: 1.0.0
description: Turn a resolved issue or a recurring question into a clear, reusable help-center article covering the problem, steps, and gotchas, producing a structured KB article ready to publish.
---

# KB Article

Write a help-center article the way a support lead who is tired of answering the same
ticket would: state the problem in the customer's words, give the exact steps, and warn
about what trips people up.

## When to use

Use this skill after resolving a ticket that will recur, when the same question keeps
hitting the queue, or when a workflow is confusing enough that a self-serve answer
would deflect contacts. Also use it to fix an existing article that is stale, wrong, or
that customers still write in about despite it existing.

## How to write

1. **Title with the customer's problem, not your feature.** People search the symptom
   they have ("Reset password when the email never arrives"), not your internal term.
   Make the title match what they would type.
2. **Open with who it is for and what they will achieve.** One or two lines: the
   situation this solves and the outcome. Let a reader self-select in or out fast.
3. **List prerequisites honestly.** Required access, plan, role, or info needed before
   they start. Surfacing this up front prevents a failed attempt halfway through.
4. **Write numbered steps that match the real interface.** One action per step, in the
   order taken, using the exact labels the customer sees. Verify every step against the
   current product — never document remembered or assumed behavior.
5. **Call out gotchas and edge cases inline.** The wrong button that looks right, the
   change that takes a few minutes to apply, the setting that differs by plan. This is
   what turns a generic article into one that actually deflects tickets.
6. **End with verification and the escape hatch.** How the reader confirms it worked,
   and where to go if it didn't — so a failed self-serve attempt routes cleanly instead
   of becoming an angry ticket.

## Output format

```
# <Problem in the customer's words>

**Who this is for:** <situation> — **Result:** <outcome>

**Before you start:** <prerequisites or "none">

## Steps
1. <action with exact UI label>
2. <action> — note: <gotcha if any>
...

## If it doesn't work
<common failure + fix, then where to get help>
```

Keep it to one job per article. If it sprawls across two problems, split it. Generalize
the example so any reader can follow it, not just the customer whose ticket sparked it.
