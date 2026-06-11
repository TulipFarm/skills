---
name: customer-escalation
version: 1.0.0
description: Handle an upset customer or a cross-team hand-off by de-escalating, packaging the issue with full context for whoever must act, and proposing a resolution path, producing an escalation summary plus a customer-facing reply.
---

# Customer Escalation

Run an escalation the way a calm senior agent would: take the heat off the customer,
hand the next team everything they need to act, and commit only to what you can keep.

## When to use

Use this skill when a customer is frustrated, a ticket has bounced or stalled, or the
fix is owned by another team (engineering, billing, a vendor). Also use it when a
routine ticket crosses a line — repeated contacts, a threat to churn or go public, or
an SLA breach — and someone with more authority or access must take over.

## How to escalate

1. **De-escalate before you route.** Acknowledge the impact in the customer's terms,
   own the experience without over-apologizing or assigning blame, and confirm what
   you understand. People calm down when they feel heard and see a concrete next step.
2. **Establish the facts cleanly.** Pin down what happened, when it started, who is
   affected, and what has already been tried. Strip emotion and contradictions so the
   receiving team gets signal, not a transcript.
3. **Package context for the next actor.** Assume they have zero history. Include the
   account, the reproducible problem, impact and urgency, what was attempted, and the
   exact decision or action you are asking them for. A vague hand-off bounces back.
4. **Propose a resolution path, don't just dump the problem.** State the outcome the
   customer needs and your recommended route to it, with a fallback if the first
   option fails. Make the ask decision-ready.
5. **Set expectations you can keep.** Give the customer a realistic next-update time,
   not a guessed fix time. Under-promise on timing; never commit another team's work
   you cannot see.
6. **Own the loop.** Note who holds the ticket now and when you will check back, so it
   does not stall silently between teams.

## Output format

```
ESCALATION SUMMARY (internal)
Account: <customer / tier>   Severity: <level>   SLA at risk: <yes/no>
Problem: <plain, reproducible statement>
Timeline: <when it started / key events>
Impact: <who and what is blocked>
Tried: <steps already taken + outcome>
Ask: <the specific decision or action needed from this team>
Recommended path: <primary> / Fallback: <alternative>
Owner now: <team>   Next check-in: <when>

CUSTOMER REPLY
<acknowledge impact> <what is happening now> <realistic next-update time> <sign-off>
```

Keep the internal summary and the customer reply separate. Internal notes, blame, and
guesswork never go in the customer-facing message.
