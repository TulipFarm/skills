---
name: creating-visualizations
version: 1.0.0
description: Choose the right chart for the question — trend, comparison, distribution, part-to-whole, or relationship — and present it cleanly with honest scales and clear labels, ready to build.
---

# Creating Visualizations

Pick the chart that makes the answer obvious, then get out of its way. The chart type
is dictated by the question, not by what looks impressive.

## When to use

Use this skill when deciding how to visualize a finding or metric — for a report, a
slide, or a dashboard tile. It covers chart choice and presentation; it assumes you
already have the data and know what you are trying to show.

## How to choose

1. **State what the chart must show, in one phrase.** The phrasing picks the chart:
   - Change over time → line chart.
   - Comparison across categories → bar chart (horizontal if labels are long).
   - Distribution of one variable → histogram or box plot.
   - Part-to-whole → stacked bar or a single number; a pie only for two or three
     slices, never more.
   - Relationship between two variables → scatter plot.
2. **Reach for a bar or line before anything fancy.** Most questions are answered by
   one of the two. Dual axes, 3D, radar, and gauges almost always obscure more than
   they reveal — avoid them.
3. **Keep scales honest.** Start bar-chart axes at zero; truncating exaggerates
   differences and misleads. For line charts a non-zero baseline is fine if labeled.
   Never invert or warp an axis to make a point.
4. **Label so it stands alone.** Title states the takeaway, axes name their units,
   and the reader needs no caption to understand it. If it needs a paragraph to
   explain, redesign it.
5. **Strip the chartjunk.** Remove gridline clutter, redundant legends, drop shadows,
   and decorative color. Use color to encode meaning or highlight one series — not to
   decorate. Default to direct labels over a separate legend.
6. **Sort for meaning.** Order bars by value, not alphabetically, unless the category
   order itself carries information (months, sizes).

## Output format

```
Question: <what the chart must answer>
Chart: <type> — <why this one>
Encoding: x = <field>, y = <field>, color/size = <field if any>
Notes: <scale baseline, sort order, the one thing to highlight>
```

If two chart types both fit, pick the simpler one. Clarity beats cleverness every
time.
