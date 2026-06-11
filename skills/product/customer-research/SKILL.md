---
name: customer-research
version: 1.0.0
description: Design and analyze customer research — interviews, surveys, and feedback data — to surface unmet needs, pain points, and jobs-to-be-done insights, returning a research brief or synthesis with evidence-grounded findings and recommended product directions.
---

# Customer Research

Customer research is listening at scale. The goal is to understand what customers
are actually trying to do and where they are failing — not to confirm what the
team already believes.

## When to use

Use this skill to plan a research study before product decisions, to analyze
existing research or interview transcripts, to synthesize NPS comments and
support tickets into themes, or to evaluate whether a product direction is backed
by customer evidence. Do not use it to generate fake personas or fabricated quotes
— research findings must trace to real data.

## How to do customer research

### Planning phase

1. **State the research question.** What specific decision will this research
   inform? Good research questions are narrow: "Why do users abandon the checkout
   flow?" not "What do users think of us?" Define what you need to learn to
   make a decision, and no more.

2. **Choose the right method.** Match the method to the question:
   - **Interviews** — open-ended exploration of motivations, workflows, context.
     Best for "why" and "how."
   - **Surveys** — quantify frequency, satisfaction, or ranking across many
     respondents. Best for "how many" and "how often."
   - **Usability testing** — observe task completion. Best for "can users do X."
   - **Analytics / support ticket mining** — behavioral patterns at scale.
     Best for "what are users actually doing."

3. **Define the sample.** Who will you talk to? Specify customer segment, job role,
   tenure, plan tier, or whatever defines the target population. How many? (5–8
   interviews is usually enough for thematic saturation; surveys need 50+ for
   basic significance.)

4. **Write the guide or survey.** For interviews: open-ended questions, not
   leading ones. Start with context-setting ("Tell me about the last time you..."),
   probe for specifics ("What happened next?"), avoid hypotheticals ("Would
   you use X?"). For surveys: start with screener, keep to 10 questions or fewer,
   test the instrument with one respondent before sending.

### Analysis phase

5. **Transcribe and tag.** For interviews: transcribe or take detailed notes.
   Tag each statement by theme (pain, behavior, workaround, delight, confusion).

6. **Find patterns.** Count how many participants mention each theme. A theme
   mentioned by one person is an anecdote; mentioned by four out of seven it
   is a finding. Distinguish the two.

7. **Extract jobs-to-be-done.** For each pain or behavior theme, articulate the
   underlying job: "When I [situation], I want to [motivation], so I can [goal]."
   This is the unit of insight that drives product decisions.

8. **Ground every finding in evidence.** Each finding must cite at least two
   supporting data points (quotes, behaviors, ticket counts). Do not infer beyond
   what the data shows.

## Output format

```
Customer Research: <topic>
Method: <interviews/survey/analytics> | Participants: <n> | Date: <date>

## Research question
<What decision this research was designed to inform>

## Key findings

### Finding 1: <Short declarative statement>
**Evidence:** "Quote from P3" / 5 of 7 participants mentioned this / 23% of
support tickets tagged with this theme.
**Job-to-be-done:** When [situation], I want to [motivation], so I can [goal].

### Finding 2: ...

## Recommended directions
1. <Product or design direction supported by findings>

## What we did not learn / open questions
- <gaps or follow-up research needed>

## Participant breakdown
| ID  | Segment | Role | Tenure |
|-----|---------|------|--------|
| P1  | ...     | ...  | ...    |
```
