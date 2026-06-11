---
name: knowledge-synthesis
version: 1.0.0
description: Synthesize information from multiple sources into a single structured summary — deduplicating overlapping claims, surfacing key takeaways, resolving contradictions, and citing sources — so the reader gets one authoritative view instead of n documents to reconcile.
---

# Knowledge Synthesis

Synthesis is not summarizing each source in turn. It is building one coherent view
from many inputs — finding what they agree on, noting where they diverge, and
drawing conclusions the sources individually do not state.

## When to use

Use this skill when you have gathered research from multiple sources (articles,
reports, interviews, docs, transcripts) and need a unified, deduplicated output.
Common triggers: competitor research, market landscape analysis, policy review,
pre-meeting background reading, literature review, or distilling a Slack thread
into a shared understanding.

## How to synthesize

1. **Inventory the sources.** List every source with a short identifier (S1, S2…),
   its type (article, interview, internal doc), date, and credibility signal.
   Note sources with clear bias or gaps upfront.

2. **Extract claims and data points.** Read each source and pull out every
   distinct factual claim, data point, opinion, or recommendation. Tag each
   with its source identifier. Do not interpret yet — just extract.

3. **Cluster by theme.** Group extracted items into themes or topics. Name each
   theme. Items that appear in multiple sources belong to the same cluster —
   these are likely the most important points.

4. **Deduplicate and reconcile.** Within each cluster:
   - Merge identical or near-identical claims, citing all sources that make them.
   - For conflicting claims, state both versions, note the discrepancy, and assess
     which is more credible (source quality, recency, corroboration).
   - For gaps — things no source addresses — note them explicitly.

5. **Identify key takeaways.** Across all themes, state the three to five most
   important insights that a reader must walk away with. These should be
   conclusions, not just topic headings.

6. **Surface uncertainties.** Note what remains unknown or disputed after synthesis,
   and what additional evidence would resolve it.

7. **Cite precisely.** Every claim in the output must trace to at least one source.
   Do not introduce information not present in the source material.

## Output format

```
Knowledge Synthesis: <topic>
Sources: <n> | Prepared: <date>

## Key takeaways
1. <Most important insight — supported by S2, S4>
2. ...

## Themes

### <Theme name>
<Unified view from sources. Where sources agree: "All three sources confirm X."
Where they conflict: "S1 reports X while S3 reports Y; S3 is more recent and
cites primary data.">
Sources: S1, S2, S3

### ...

## Open questions and gaps
- <What no source addressed>
- <Unresolved discrepancies>

## Source inventory
| ID | Source | Type | Date | Credibility note |
|----|--------|------|------|-----------------|
| S1 | ...    | ...  | ...  | ...             |
```
