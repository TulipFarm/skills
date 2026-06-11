---
name: incident-response
version: 1.0.0
description: Respond to a production incident calmly — assess severity, stabilize and mitigate before diagnosing, communicate clearly throughout, resolve, then run a blameless post-mortem with action items — producing an incident timeline and post-mortem.
---

# Incident Response

When production is on fire, restore service first and understand later. Stay calm,
mitigate the user impact, communicate, then dig into root cause once things are stable.

## When to use

Use this skill when something is broken in production right now: an outage, degraded
performance, data issues, or a failing critical path. Use it to bring order to the
chaos — and afterward, to turn the incident into prevention rather than blame.

## How to respond

1. **Assess severity and declare it.** How many users, how badly, is data at risk, is
   it getting worse. Set a severity level so everyone treats it with the right urgency,
   and name one person to coordinate — a single owner, not a crowd.
2. **Stabilize before you diagnose.** Stop the bleeding first: roll back the recent
   deploy, disable the broken feature, fail over, scale up, or throttle. Mitigation
   that restores users buys you time; chasing root cause while users suffer does not.
3. **Communicate clearly and often.** Post short, factual updates on a known channel at
   a steady cadence: what is impacted, what you are doing, when the next update lands.
   Silence during an incident reads as chaos. Say what you know and what you do not.
4. **Resolve and confirm recovery.** Once mitigated, verify the fix actually restored
   service — check the signals users feel, not just that an alarm cleared. Then stand
   down and announce it.
5. **Write the timeline as you go.** Capture detection time, key actions, and recovery
   time while memory is fresh. Reconstructing it days later loses the truth.
6. **Run a blameless post-mortem.** Focus on the system and the conditions, never the
   person. Ask what allowed this to happen and what would catch it next time. Produce
   specific, owned, dated action items — vague lessons change nothing.

## Output format

Deliver a timeline and a blameless post-mortem:

```
Incident: <title> — severity <N>
Timeline (UTC):
  HH:MM detected — <signal>
  HH:MM mitigated — <action that restored users>
  HH:MM resolved  — <confirmed recovery>
Impact: <who/what, how long, data affected?>
Root cause: <the system condition, not a name>
Contributing factors: <what made it worse or slower to catch>
Action items:
  - <fix/guardrail> — owner — due
```

Measure impact and time-to-recover, not whose commit it was. The output is prevention,
not punishment.
