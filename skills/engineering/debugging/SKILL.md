---
name: debugging
version: 1.0.0
description: Debug a problem methodically — reproduce it reliably, isolate the cause by bisection, test one hypothesis at a time, find and fix the root cause, then verify with a regression test, reporting the cause, fix, and verification.
---

# Debugging

Debug by narrowing the search space, not by guessing and editing. The goal is to
*understand* the failure, then fix the cause — not to make the symptom disappear.

## When to use

Use this skill when something is broken, flaky, or behaving unexpectedly, and the
cause is not obvious. Especially when you have changed code two or three times hoping
it helps — that is the signal to stop guessing and debug deliberately.

## How to debug

1. **Reproduce it reliably first.** Find the smallest, most consistent way to trigger
   the bug. If you cannot reproduce it on demand, you cannot know when it is fixed —
   spend your effort here before anything else.
2. **Read the actual error.** The stack trace, the log line, the failing assertion.
   Most bugs announce their location; do not skim past the evidence to a theory.
3. **Isolate by bisection.** Halve the search space each step: comment out sections,
   bisect the commit history, remove inputs, or stub dependencies until the failure
   flips on and off. This finds the cause in log(n) tries, not n.
4. **Form one hypothesis and test it.** State what you think is wrong and what you
   expect to see if you are right. Change *one* thing. If it does not behave as
   predicted, the hypothesis is wrong — discard it, do not pile on a second change.
5. **Find the root cause, not the symptom.** Keep asking "but why" until you reach
   something that, if true, explains every observation. A null check that silences a
   crash without explaining the null is a band-aid, not a fix.
6. **Fix it, then verify.** Apply the smallest fix that addresses the cause. Confirm
   the original reproduction now passes and you have not broken neighbors.
7. **Add a regression test.** Write a test that fails on the old code and passes on the
   new. A bug without a test is a bug that returns.

## Output format

Report the investigation, not just the patch:

```
Symptom: <observed failure + how to reproduce>
Root cause: <the actual mechanism — why it happened>
Fix: <what changed and why this addresses the cause>
Verification: <repro now passes; regression test added; neighbors checked>
```

If you fixed it but do not understand why it works, you are not done — say so rather
than claiming a fix you cannot explain.
