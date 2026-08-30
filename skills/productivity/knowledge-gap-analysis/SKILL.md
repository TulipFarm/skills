---
name: knowledge-gap-analysis
version: 1.0.0
description: Analyze a knowledge set for unanswered questions, stale content, conflicts, and missing ownership, producing a ranked research and update plan.
---

# Knowledge Gap Analysis

Find where available knowledge cannot support a reliable decision or task. The output is a
prioritized plan to close meaningful gaps, not a general complaint that documentation is weak.

## When to use

Use this skill before a handoff, launch, audit, planning cycle, or knowledge refresh when
teams need to know what is missing or untrustworthy. Use knowledge-capture for turning known
source material into individual reusable entries.

## How to analyze knowledge gaps

1. **Define the decisions and tasks to support.** List the outcomes the knowledge set must
   enable. A gap matters only in relation to a real use.
2. **Set the review scope.** Identify repositories, documents, source dates, topics, and
   stakeholders included and excluded from the analysis.
3. **Map required questions.** Break each target outcome into the questions a competent
   person must answer to proceed safely and consistently.
4. **Test current coverage.** Mark each question as answered, partially answered, unanswered,
   contradictory, stale, or inaccessible from the supplied material.
5. **Check evidence quality.** Distinguish authoritative sources from unsupported assertions,
   indirect summaries, and content whose origin cannot be verified.
6. **Find freshness risk.** Flag knowledge tied to changed policies, systems, roles, dates,
   assumptions, or operating conditions. Do not treat age alone as proof of invalidity.
7. **Expose conflicts.** Quote the competing claims, cite both sources, and identify the
   owner or evidence needed to resolve them.
8. **Identify ownership gaps.** Note topics with no accountable maintainer, reviewer, or
   escalation path, especially when the content affects high-impact work.
9. **Rank by business risk.** Score gaps by decision impact, frequency of use, likelihood
   of error, urgency, and effort to close. Explain the highest priorities.
10. **Build the closure plan.** Recommend the research question, best source or expert,
    responsible owner, deliverable, and review point for each priority gap.

## Output format

- Scope, target decisions, and knowledge sources reviewed.
- Coverage map by required question and current status.
- Ranked gaps with impact, urgency, evidence, and confidence.
- Conflict and stale-content register with proposed resolution owners.
- Research and update plan with owner, source path, deliverable, and sequence.
- Known limitations that may change the ranking.
