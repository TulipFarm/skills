---
name: stakeholder-update
version: 1.0.0
description: Draft a stakeholder update covering progress against goals, decisions made, blockers, risks, and specific asks — calibrated to the audience's level of detail and the update cadence — producing a clear, readable communication that earns trust rather than just filling a slot.
---

# Stakeholder Update

A stakeholder update has one job: give the audience what they need to maintain
confidence and make decisions, in the least amount of reading time possible.
Dense updates that take ten minutes to parse defeat the purpose.

## When to use

Use this skill for weekly project updates, monthly business reviews, board
updates, executive sponsor communications, or any regular or ad hoc update to
people who are accountable for outcomes but not in the daily work. The input is
the audience type, cadence, and current project or business state.

## How to write a stakeholder update

1. **Know your audience and adjust accordingly.** The same facts require different
   framings:
   - **Executives and board:** outcomes and implications — not activities. They
     want to know if things are on track, what decisions they need to make, and
     what risks to be aware of.
   - **Cross-functional stakeholders:** what affects them, what you need from them.
   - **Investors:** metrics, progress against plan, risks, and capital implications.
   Calibrate the level of technical detail to the audience's domain knowledge.

2. **Lead with the status verdict.** Before anything else, state clearly:
   - On track / At risk / Off track.
   - One sentence summarizing the current state.
   This lets a busy reader stop after the first sentence and get the essential
   message.

3. **Summarize progress since last update.** What was accomplished since the last
   communication? Be concrete — completed milestones, shipped features, closed
   deals, resolved issues. Avoid activity language ("we worked on X") in favor
   of outcome language ("X is now complete").

4. **State what is on track vs. at risk.** For each key goal or milestone:
   - On track: no action needed from the audience.
   - At risk: explain why, what the mitigation is, and whether you need help.
   - Off track: explain the gap, the revised plan, and any impact on downstream
     dependencies.

5. **Summarize decisions made.** If decisions were made that affect the audience
   or that were delegated to you, state them. This creates a paper trail and
   confirms alignment.

6. **Surface blockers and risks.** A stakeholder update that hides problems is
   worse than no update. Be direct: name the blocker, its impact, and what you
   need to unblock it. If there are risks that could materialize before the
   next update, name them.

7. **Make your asks explicit.** If you need something from the audience, say so
   clearly at the end: a decision, an introduction, an approval, feedback by a
   deadline. Vague asks get ignored.

8. **Keep it scannable.** Use headers and bullets for everything except the opening
   summary. No paragraph longer than four lines. Include a "key numbers" section
   if metrics matter to this audience.

## Output format

```
Update: <Project / Area>
Audience: <who> | Period: <dates covered> | Date: <date>

## Status: ON TRACK / AT RISK / OFF TRACK

<One-to-two sentence summary of current state.>

## Progress since last update
- <Completed milestone or shipped item>
- <Other concrete progress>

## On track
- <Goal / milestone>: <one line>

## At risk / Off track
- <Goal>: <what changed, mitigation, what is needed>

## Decisions made
- <Decision — rationale — by whom>

## Blockers and risks
- **Blocker:** <description> — need: <what you need from audience>
- **Risk:** <description> — likelihood: <H/M/L> — mitigation: <plan>

## Key numbers (if applicable)
| Metric | Value | vs. Plan |
|--------|-------|---------|
| ...    | ...   | ...     |

## Asks
1. <Specific ask — deadline>
```
