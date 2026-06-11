---
name: statistical-analysis
version: 1.0.0
description: Apply sound basic statistics without overreaching — pick the right summary or test, check assumptions, separate correlation from causation, and state significance and uncertainty plainly.
---

# Statistical Analysis

Use statistics to keep yourself honest, not to dress up a conclusion you already
reached. The goal is an analysis that will not mislead the person who acts on it.

## When to use

Use this skill when a question needs more than a count — comparing two groups, judging
whether a change is real or noise, summarizing a distribution, or testing a
hypothesis. It covers everyday statistics; it does not cover building predictive
models.

## How to analyze

1. **Match the summary to the data.** Use the median, not the mean, for skewed data
   like revenue or response time — one whale drags the mean and lies. Always report a
   measure of spread (range, IQR, or standard deviation) alongside any average.
2. **Pick the test the question actually calls for.** Comparing two group means → a
   t-test; proportions → a chi-square or proportion test; a trend across a continuous
   variable → correlation or regression. State which and why before running it.
3. **Check the assumptions, do not just trust the p-value.** Sample size large enough?
   Groups independent? Distribution wildly skewed or full of outliers? A test run on
   data that violates its assumptions produces a confident wrong answer.
4. **Separate correlation from causation, out loud.** Two things moving together is
   not one causing the other. Name the plausible confounders. Only claim causation
   from a controlled experiment with proper randomization — never from observational
   data alone.
5. **State significance and uncertainty in plain words.** Report the effect size and a
   confidence interval, not a lone p-value. "Statistically significant" is not
   "large" or "important" — a tiny effect can be significant with enough data, and
   that distinction is usually the whole point.
6. **Beware the multiple-comparison trap.** Test twenty segments and one will look
   significant by chance. If you went hunting across many slices, say so and treat the
   finding as a lead, not a conclusion.

## Quality bar

Every claim states its effect size, its uncertainty, and the assumption most likely
to be wrong. If the honest answer is "the data cannot tell us this," say that — an
analysis that admits its limits is worth more than one that manufactures certainty.
