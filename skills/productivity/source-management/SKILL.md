---
name: source-management
version: 1.0.0
description: Organize, annotate, and maintain a collection of research sources — tracking relevance, credibility, last-reviewed date, and coverage gaps — so the collection stays useful, current, and free of duplication as a project evolves.
---

# Source Management

A source collection is only valuable if it stays organized, current, and
trustworthy. Source management is the ongoing practice of capturing, annotating,
pruning, and auditing research material so it serves rather than buries.

## When to use

Use this skill when you are building or maintaining a body of research for a
project that spans multiple sessions: competitive intelligence, policy tracking,
technical literature, market analysis, or any domain where knowledge accumulates.
Also use it when a source library has grown unwieldy and needs a cleanup pass.

## How to manage sources

1. **Standardize the capture format.** Every source gets a record on first entry:
   - Title and URL or reference
   - Type (article, report, interview, internal doc, dataset)
   - Date published and date added
   - Author or publisher
   - One-sentence summary of what it contributes
   - Relevance rating: High / Medium / Low (to this project)
   - Credibility rating: Primary (original research) / Secondary (analysis) /
     Opinion/Anecdote

2. **Tag by topic or theme.** Apply consistent topic tags so sources can be
   filtered by theme later. Use a controlled vocabulary — new tags only when
   an existing one does not fit.

3. **Annotate with key claims.** For High-relevance sources, add two to five
   bullet points capturing the most important claims or data points. This is
   the investment that makes synthesis fast.

4. **Track coverage.** Maintain a coverage map: for each major topic the project
   needs to understand, note how many sources cover it and whether any are
   primary. Topics with no primary sources or only old sources are coverage gaps.

5. **Set expiry and review cadence.** Some sources go stale (market data, pricing,
   regulations). Mark each with a review date. On review: confirm still accurate,
   update the summary, or retire the source.

6. **Prune ruthlessly.** Remove sources that are: superseded by a newer source,
   Low-relevance with no unique claim, or confirmed to be inaccurate. A smaller
   collection of high-quality sources is better than a large archive.

7. **Deduplicate.** When adding a new source, check if it makes the same claims
   as an existing one. If so, keep the more credible or recent one; merge the
   annotation if the new one adds a claim the old one missed.

## Output format

```
Source Library: <project name>
Last audited: <date> | Total sources: <n>

## Coverage map

| Topic | Sources | Primary sources | Gap? |
|-------|---------|----------------|------|
| ...   | n       | n              | Yes/No |

## Source records

### S1 — <Title>
- **URL/Ref:** <link or citation>
- **Type:** <type> | **Credibility:** <Primary/Secondary/Opinion>
- **Published:** <date> | **Added:** <date> | **Review by:** <date>
- **Relevance:** High/Medium/Low
- **Summary:** <one sentence>
- **Key claims:**
  - <claim 1>
  - <claim 2>
- **Tags:** <tag1>, <tag2>

## Gaps and recommended additions
- <Topic with insufficient coverage>: suggest sourcing from <where>
```
