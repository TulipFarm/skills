---
name: inbox-triage
version: 1.0.0
description: Triage a general work inbox and produce a prioritized queue with classifications, urgency, ownership, duplicate groupings, and safe reply drafts.
---

# Inbox Triage

Turn an unstructured work inbox into a clear action queue. Classification is useful only
when it identifies what matters, who owns it, and what should happen next.

## When to use

Use this skill for a mixed work inbox containing requests, updates, approvals, invitations,
and automated notices. Do not use it as customer-support ticket triage or as permission to
send replies, archive messages, or change message state without confirmation.

## How to triage

1. **Set the review boundary.** Note the inbox scope, review period, known priorities, and
   any messages excluded from the pass.
2. **Classify each message.** Use a small stable set: action required, decision required,
   waiting, informational, scheduled, automated, or unclear.
3. **Judge urgency from evidence.** Look for explicit deadlines, operational impact,
   blocked work, legal or financial timing, and commitments already made. Do not equate
   sender seniority or emphatic wording with urgency.
4. **Identify the owner.** Name one person or role responsible for the next move. If
   ownership is ambiguous, flag it instead of assigning it silently.
5. **Extract the requested outcome.** State what the sender needs, by when, and what
   information or approval is missing.
6. **Group duplicates and threads.** Combine repeated notifications, forwarded copies,
   and messages about the same request. Preserve the newest material and conflicting details.
7. **Rank the queue.** Place time-critical blockers first, then due work, delegated follow-up,
   and informational items. Explain unusual priority choices.
8. **Draft concise replies where useful.** Base drafts only on known facts. Mark assumptions
   and placeholders, and do not promise dates, decisions, or work that was not authorized.
9. **Separate low-value noise.** Recommend handling for automated or non-actionable messages,
   but require human confirmation before archiving, deleting, unsubscribing, or changing rules.
10. **Surface uncertainty.** List messages that need context, identity checks, or ownership
    clarification before action.

## Output format

- Review scope and total messages considered.
- Priority queue with class, urgency, owner, due date, requested outcome, and rationale.
- Duplicate or related-message groups with the retained source message identified.
- Reply drafts clearly labeled as drafts requiring human review before sending.
- Unclear items and recommended questions.
- Suggested state changes listed separately for explicit human confirmation.
