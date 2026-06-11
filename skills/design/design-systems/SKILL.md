---
name: design-systems
version: 1.0.0
description: Establish and maintain a small, practical design system — tokens, a core component set, and usage rules — and capture it as a compact system spec teams can actually follow.
---

# Design Systems

Build the smallest design system that keeps the product visually consistent. The
goal is shared defaults, not a rulebook nobody reads.

## When to use

Use this skill when a product's screens are drifting — mismatched colors, six button
styles, ad-hoc spacing — or when starting a new product and you want consistency
from day one. Reach for it to define tokens and core components, not to redesign a
brand or produce exhaustive specs for every edge case.

## How to build

1. **Define tokens before components.** Tokens are the named decisions everything
   else references — change the token, change the system.
   - Color: a neutral ramp (5–7 steps), one primary, and semantic roles (success,
     warning, danger, info). Name by role, not hue — `color-danger`, not `red`.
   - Type: one or two families, a modular scale (e.g. 12/14/16/20/24/32), and a
     small set of weights. Define line-heights alongside sizes.
   - Spacing: one base unit (4 or 8px) and a fixed scale of multiples. Forbid
     off-scale values — they are the source of visual drift.
   - Radius, border, shadow: 2–3 options each. More is clutter.
2. **Pick a core component set, not all of them.** Button, input, select, checkbox,
   radio, card, modal, table row, badge, toast. Build these well before anything
   exotic. Define each component's states explicitly: default, hover, focus,
   disabled, loading, error.
3. **Write usage rules as do/don't pairs.** "Primary button: one per view, for the
   main action. Don't use two primaries to mean 'these are equal'." Rules people
   can apply in a glance beat paragraphs of theory.
4. **Reference tokens everywhere — hardcode nothing.** Components and screens consume
   tokens; they never embed raw hex or pixel values. This is what makes a global
   change possible.
5. **Keep accessibility in the tokens.** Bake minimum contrast into the color ramp
   and a visible focus style into the component states, so accessibility is the
   default rather than a later audit.

## Output format

```
Design System — <product>
Tokens:
  Color:   neutral-50…900, primary, success/warning/danger/info
  Type:    families, scale (px / line-height), weights
  Space:   base unit + scale
  Radius/Border/Shadow: options
Components:
  <Name> — purpose; states: default/hover/focus/disabled/loading/error
Usage rules:
  - <do> / <don't>
```

Keep the spec to one page. If it grows past that, the system is doing too much —
cut options until it fits.
