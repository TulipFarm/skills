---
name: product-brainstorming
version: 1.0.0
description: Run a structured ideation session — frame the problem, diverge widely, cluster themes, then converge by scoring impact against effort — producing a shortlist of ideas with rationale.
---

# Product Brainstorming

Generate options worth building by separating divergence from judgment, then forcing
a ranked decision instead of leaving a pile of sticky notes.

## When to use

Use this skill when you need ideas for a problem, feature area, or goal and want more
than the first thing that comes to mind. Reach for it before writing a spec, when a
metric is stuck, or when the team keeps circling the same obvious answer.

## How to facilitate

1. **Frame the problem before any idea.** Write one sentence: who has what problem,
   in what context, and why it matters now. State the constraint that bounds the
   solution space (time, budget, platform). Ideas generated against a fuzzy problem
   are noise.
2. **Diverge without judging.** Generate quantity first — aim for 15–30 raw ideas.
   - Defer all criticism; "yes, and" not "yes, but".
   - Use prompts to break ruts: the opposite approach, the no-budget version, what a
     competitor would never do, what you'd build if you had ten times the resources.
   - Include the boring, safe options — they anchor the comparison.
3. **Cluster into themes.** Group the raw ideas into 4–7 buckets by the underlying
   bet they make (e.g. "remove a step", "automate the manual part", "change pricing").
   Themes, not individual ideas, are what you actually choose between.
4. **Converge by scoring.** Rate each surviving idea on **impact** (how much it moves
   the framed problem) and **effort** (cost to build and maintain), high/medium/low.
   - Favor high-impact / low-effort first; park high-impact / high-effort as bets.
   - Kill low-impact / high-effort without ceremony.
   - Note any idea that is cheap to test even if its payoff is unproven.
5. **Write the rationale.** For each shortlisted idea, capture one line on why it won
   and what assumption it rests on. A shortlist without reasoning is a guess with
   better formatting.

## Output format

```
Problem: <one sentence + the binding constraint>
Shortlist:
- <idea> — impact <H/M/L>, effort <H/M/L> — why: <rationale>; assumes: <key bet>
Parked (high impact, high effort): <idea> — revisit when <condition>
Cut: <idea or theme> — <one-line reason>
```

Keep the cut list — it stops the same dead ideas from coming back next session.
