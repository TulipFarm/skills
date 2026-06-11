---
name: research-synthesis
version: 1.0.0
description: Synthesize qualitative research — interviews, surveys, support tickets, reviews — into themes, insights, and recommended actions grounded in evidence, producing a synthesis with supporting quotes and counts.
---

# Research Synthesis

Turn a pile of raw qualitative input into a small set of insights the team will act
on, with each claim traceable to evidence — not to whoever spoke loudest.

## When to use

Use this skill after collecting user interviews, survey responses, support tickets,
or product reviews and you need to know what they collectively mean. Reach for it
before a roadmap decision, a spec, or any "users want X" assertion.

## How to synthesize

1. **State the question first.** Write what you're trying to learn. Synthesis without
   a question becomes a summary of everything and a decision about nothing.
2. **Tag at the observation level.** Break the raw input into individual
   observations — one quote, complaint, or data point each. Label each with a short
   code (the topic it touches). Resist forming conclusions while tagging.
3. **Group codes into themes.** Cluster related observations into 4–7 themes. A theme
   earns its place by recurring across multiple sources, not by being vivid once.
4. **Promote themes to insights.** A theme is "users mention onboarding". An insight
   is "users abandon during onboarding because step three asks for data they don't
   have yet". Insights state the why and have a consequence.
5. **Count and quote.** For each insight, give the frequency (how many sources, of how
   many total) and one or two verbatim quotes. Numbers separate a real pattern from a
   memorable anecdote.
6. **Separate signal from noise.** Flag low-frequency items honestly, note who is
   missing from the sample, and call out where the evidence is thin. Do not launder a
   single loud complaint into a "theme".
7. **Recommend actions tied to evidence.** Each recommendation must point back to the
   insight that justifies it. If you can't trace it to the data, it's an opinion —
   label it as one.

## Output format

```
Question: <what we set out to learn>
Sources: <n interviews / m tickets / k reviews>
Insight: <what it means + why> — <x of y sources>
  "<verbatim quote>"
  → Recommended: <action>
Thin / unresolved: <item> — <why we're not acting yet>
```

Order insights by weight of evidence, not by how surprising they are.
