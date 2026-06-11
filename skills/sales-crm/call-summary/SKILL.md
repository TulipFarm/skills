---
name: call-summary
version: 1.0.0
description: Summarize a sales call into what was discussed, decisions made, commitments from both sides, next steps with owners and due dates, and required CRM field updates — so the record is complete and the deal can be handed off without a debrief.
---

# Call Summary

A call summary is not a transcript — it is an action document. Its purpose is to
capture what was decided and who does what next, so nothing falls through the cracks
between the call ending and the deal advancing.

## When to use

Use this skill immediately after any sales call where commitments were made,
new information was learned, or the deal moved (or stalled). Do not wait until
end of day — memory decays. Write the summary while the details are fresh.

## How to write a call summary

1. **Capture the participants.** Names, titles, and companies for everyone on
   the call. Note who was present but did not speak — their presence signals
   organizational interest.

2. **Summarize what was discussed.** Three to seven bullet points covering the
   key topics. This is not a transcript — skip pleasantries and off-topic tangents.
   Include:
   - Pain points or needs the prospect named (use their words where possible).
   - Questions they asked.
   - Information you shared (demo areas, pricing discussed, case studies referenced).
   - Objections raised.

3. **Record decisions.** If anything was agreed to or resolved ("they confirmed
   budget is approved," "we agreed to a 30-day pilot scope"), state it as a
   decision — not as something that was "discussed."

4. **Capture commitments — both sides.** List what the rep committed to and what
   the prospect committed to. Be specific: "will send proposal by Friday" not
   "will follow up." Vague commitments are not commitments.

5. **Define next steps with owners and dates.** Each next step must have:
   - What will be done.
   - Who will do it.
   - By when.
   If a next step does not have an owner and a date, it will not happen.

6. **Update the deal stage and CRM.** List exactly which CRM fields need to be
   updated after this call: stage, close date, deal size, contact roles, notes,
   next activity date. This is a task, not optional — a call that is not logged
   does not exist.

7. **Flag risks and intelligence.** Note any signals from the call that affect
   the deal probability: new stakeholder discovered, competitive mention,
   timeline change, budget constraint. These are intelligence items that inform
   future prep.

## Output format

```
Call Summary: <Account name>
Date: <date> | Duration: <time> | Type: <discovery / demo / check-in / etc.>
Participants: <names and titles>

## What was discussed
- <Key topic 1>
- <Key topic 2>
- Objections raised: <list>

## Decisions made
- <Agreed or confirmed item>

## Commitments

| Who | Commitment | Due |
|-----|-----------|-----|
| Rep | <e.g., Send proposal> | <date> |
| Prospect | <e.g., Loop in IT lead> | <date> |

## Next steps

| Step | Owner | Due date |
|------|-------|---------|
| <specific action> | <name> | <date> |

## CRM updates required
- [ ] Stage: <new stage>
- [ ] Next activity: <type — date>
- [ ] <Any other fields to update>

## Deal intelligence
- <Risk, signal, or new information worth noting>
```
