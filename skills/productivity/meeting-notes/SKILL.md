---
name: meeting-notes
version: 1.0.0
description: Turn raw meeting notes or a transcript into useful structured notes — a short summary, the decisions made, and action items with owners and due dates — producing notes the team can act on.
---

# Meeting Notes

Convert the mess of a meeting into something a person who wasn't there can read in a
minute and act on. Notes exist to drive decisions and follow-through, not to transcribe
every word said.

## When to use

Use this skill when asked to write up a meeting, clean up rough notes, or summarize a
transcript or recording into shareable form. Reach for it after any meeting where
decisions were made or work was assigned.

## How to structure

1. **Capture the frame first.** Note what the meeting was, when, and who was there. One
   line — it's context, not the point.
2. **Write a short summary.** Three to five sentences on what the meeting was about and
   where it landed. Someone should grasp the outcome from this alone, without scrolling.
3. **Pull out decisions explicitly.** List each decision as a standalone statement of
   what was decided — not the debate that led to it. If something was discussed but not
   decided, record it as open, not as a decision.
4. **Extract action items with an owner and a due date.** This is the part that matters.
   - Every action gets a single named owner — "the team" owns nothing.
   - Every action gets a due date, even a rough one; undated tasks don't happen.
   - Phrase each as a concrete next step, not a topic.
5. **Note open questions and parking-lot items.** Anything unresolved or deferred, so it
   resurfaces instead of vanishing.
6. **Separate signal from chatter.** Cut the small talk, the tangents, and the thinking-
   out-loud. Keep what changes what someone now believes or does.

## Output format

```
Meeting: <topic> — <date> — Attendees: <names>

Summary
<3–5 sentences on what it covered and where it landed.>

Decisions
- <what was decided>

Action items
- <action> — owner: <name> — due: <date>

Open questions
- <unresolved item> — owner: <name>
```

Send the action items to wherever work is tracked, not just into the notes. A decision
or task that lives only in meeting notes is one nobody will act on.
