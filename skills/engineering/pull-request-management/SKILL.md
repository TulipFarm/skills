---
name: pull-request-management
version: 1.0.0
description: Assess a pull request lifecycle and produce a merge-readiness recommendation covering intent, review state, checks, dependencies, follow-up, and delivery risks.
---

# Pull Request Management

Manage the path from opened change to safe integration without performing the code review
itself. Readiness depends on intent, evidence, approvals, dependencies, and operational risk.

## When to use

Use this skill to summarize pull request status, identify blockers, coordinate reviewer
follow-up, or decide whether a change is ready to merge. Use code-review for evaluating the
correctness and quality of the code, and never merge automatically.

## How to manage a pull request

1. **Confirm intent and scope.** Read the change description, linked work, affected areas,
   and stated acceptance criteria. Flag unrelated changes or missing context.
2. **Map the lifecycle state.** Record draft or active status, author follow-up, requested
   reviewers, approval state, unresolved conversations, and time since the last meaningful update.
3. **Summarize checks.** List required and optional checks, their current results, and any
   missing or stale runs. Do not treat an unexplained pass as proof of complete coverage.
4. **Track review requirements.** Identify required expertise, ownership rules, pending
   reviewers, requested changes, and whether later commits invalidate earlier approval.
5. **Check dependencies.** Note prerequisite changes, branch ordering, environment changes,
   release timing, generated artifacts, and external decisions that affect safe integration.
6. **Assess delivery risk.** Surface migration, compatibility, rollout, observability,
   rollback, data safety, and user-impact concerns from the supplied material.
7. **Distinguish blockers from follow-ups.** Mark each item as merge-blocking, advisable
   before merge, or safe to track afterward, with a reason.
8. **Draft reviewer follow-up.** Prepare a concise message stating what review is needed,
   why that reviewer is relevant, and the timing constraint. Do not send it without approval.
9. **Recheck after material updates.** Reassess checks, approvals, dependencies, and open
   threads when the change scope or latest revision changes.
10. **Issue a readiness recommendation.** Choose ready, conditionally ready, or not ready.
    List the exact remaining conditions and require explicit human confirmation before merge.

## Output format

- Intent, scope, linked work, and current lifecycle state.
- Review and approval status with unresolved conversations.
- Check results, dependencies, and identified risks.
- Blockers separated from non-blocking follow-up.
- Draft reviewer message, clearly marked unsent.
- Merge-readiness recommendation with exact conditions and human confirmation required.
