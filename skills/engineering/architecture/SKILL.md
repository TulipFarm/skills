---
name: architecture
version: 1.0.0
description: Design or review a software architecture by clarifying requirements and constraints, weighing options with explicit trade-offs, choosing one, and capturing the decision as an architecture sketch and decision record.
---

# Architecture

Design systems by making the hard choices explicit and writing down why you chose
what you chose — so the next person inherits reasoning, not just a diagram.

## When to use

Use this skill when starting a new service or major feature, when a design decision
will be expensive to reverse, or when reviewing a proposed architecture. Reach for it
the moment someone asks "how should we build this" — not after code already exists.

## How to design

1. **Pin down requirements and constraints first.** Separate functional needs from the
   real drivers: expected load, latency budget, consistency needs, team size, deadline,
   cost ceiling, and what must stay flexible. Name what you do *not* need to solve yet.
2. **Sketch the shape.** Components, the data that flows between them, where state
   lives, and the boundaries that own each responsibility. Boxes and arrows are enough —
   a sketch that fits on one screen beats a perfect diagram nobody reads.
3. **Generate 2-3 real options.** Not strawmen. Each should plausibly work. Common
   axes: monolith vs. services, sync vs. async, build vs. buy, SQL vs. document store.
4. **Weigh trade-offs honestly.** For each option list what it costs: complexity,
   operational burden, latency, failure modes, migration pain, team familiarity. State
   what you give up by choosing it, not just what you gain.
5. **Choose, and say why.** Pick the option that best fits the constraints, and name
   the specific constraint that decided it. "Chose X because the deadline rules out
   building Y" is a real reason; "X is more scalable" is not.
6. **Record the decision.** Capture context, options considered, the choice, and the
   consequences in a short Architecture Decision Record. Future-you will ask "why did
   we do this" — answer it now.

## Output format

Deliver a one-screen sketch plus an ADR:

```
# ADR-NNN: <decision title>
Status: proposed | accepted | superseded
Context: <requirements + constraints that forced a decision>
Options:
  1. <option> — pro: <…>; con: <…>
  2. <option> — pro: <…>; con: <…>
Decision: <chosen option> — because <the constraint that decided it>
Consequences: <what gets easier, what gets harder, what we must revisit>
```

Keep it boring and durable. A good record is one you can reread in a year and still
understand the call.
