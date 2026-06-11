---
name: ticket-triage
version: 1.0.0
description: Categorize, prioritize, and route an incoming support ticket and draft an accurate first reply, producing a triaged ticket with category, priority, and owner plus a ready-to-send response.
---

# Ticket Triage

Triage a support ticket the way a seasoned queue lead would: read what the customer
actually needs, route it once and correctly, and answer the part you can answer now.

## When to use

Use this skill when a new ticket, email, chat, or form submission lands in the queue
and needs to be sorted before anyone works it. Also use it when re-triaging a
mislabeled or bounced ticket, or when clearing a backlog where each item needs a
category, priority, owner, and a first response.

## How to triage

1. **Read for the real ask, not the subject line.** Customers describe symptoms, not
   root problems. Identify what they want to happen, and separate it from how they
   phrased it. Note the product area, account, and any error or order reference.
2. **Categorize by the team that resolves it.** Pick one primary category (e.g.
   billing, bug, how-to, account access, feature request). If it spans two, name the
   one that owns the resolution and flag the secondary.
3. **Set priority on impact, not tone.** Judge by scope (one user vs. many), severity
   (blocked vs. inconvenienced), and any commitment at risk (SLA, paid tier, deadline).
   A calm "I can't log in to run payroll" outranks an angry cosmetic complaint.
4. **Route to a single owner.** Name the team or role that resolves it, not a person
   who happens to be online. If it needs another team's input first, say so explicitly
   so it doesn't bounce.
5. **Check for known issues and duplicates.** Search the knowledge base and recent
   tickets before drafting. Link the existing article or incident rather than
   re-investigating.
6. **Draft only what you can stand behind.** Answer the resolvable part now; for the
   rest, set a clear expectation and ask the one question that unblocks progress. Never
   invent steps, timelines, or causes you have not confirmed.

## Output format

```
Ticket: <id / subject>
Category: <primary> (secondary: <area or none>)
Priority: <urgent | high | normal | low> — <one-line reason>
Owner: <team / role>
Known issue: <link or none>

Draft reply:
<greeting + acknowledgment of the actual problem>
<the answer or concrete next step you can stand behind>
<the single question or info needed, if any>
<sign-off>
```

Keep the reply to what is true now. If you cannot resolve it, set an honest
expectation rather than padding with reassurance.
