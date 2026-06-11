---
name: campaign-planning
version: 1.0.0
description: Plan a marketing campaign end to end — goal and target metric, audience, channels, core message, content calendar, and measurement — producing a complete campaign plan.
---

# Campaign Planning

Turn a fuzzy marketing goal into a campaign you can actually run and measure. A campaign
without a target metric is just a wish.

## When to use

Use this skill when asked to plan a campaign, a product launch, a promotion, or a
multi-channel marketing push — anything that coordinates several pieces of content over
a window of time toward a goal.

## How to plan

1. **Set one goal and one target metric.** "Awareness" is not a goal; "300 trial
   signups in six weeks" is. Pick the single number that defines success and a baseline
   to measure against. Everything else serves it.
2. **Define the audience narrowly.** Who specifically, what they want, where they
   already spend attention, and what objection stops them. A campaign aimed at everyone
   lands on no one.
3. **Write the core message once.** One sentence the whole campaign repeats — the
   promise and why it matters to this audience. Every asset is a variation of it.
4. **Choose channels by where the audience is, not by what's trendy.** Pick two or
   three you can execute well over the whole window. Spreading thin across six channels
   beats nothing.
5. **Build a content calendar.** Map each asset to a channel, a date, an owner, and the
   stage it serves (attract → engage → convert). Front-load the hook, sustain the
   middle, close with a clear push.
6. **Decide measurement up front.** Name the metric per channel, where it's tracked,
   and the check-in cadence. Define what you'll do if numbers lag at the midpoint — kill,
   shift budget, or change the message.

## Output format

```
Campaign: <name> · Window: <start–end>
Goal: <target metric vs baseline>
Audience: <who> — wants <X>, blocked by <objection>
Core message: <one sentence>
Channels: <2–3, with the role of each>

Calendar:
| Date | Channel | Asset | Stage | Owner |
| ...  | ...     | ...   | ...   | ...   |

Measurement: <metric per channel> · tracked in <tool> · review at <midpoint/end>
Contingency: if <metric> < <threshold> by <date>, then <action>
```

If the goal, audience, or budget is unstated, surface it as an open question — do not
plan around a guess.
