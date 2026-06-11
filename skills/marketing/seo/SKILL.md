---
name: seo
version: 1.0.0
description: Optimize content for search — mapping keyword intent, structuring on-page elements and internal links, and auditing an existing page for quick wins — producing an SEO review with concrete edits.
---

# SEO

Make a page rank for what its readers actually search, then earn the click. Optimize for
the human first and the crawler second — they want the same thing.

## When to use

Use this skill when asked to optimize a page or post for search, choose target keywords,
review on-page SEO, or audit an existing page for ranking improvements.

## How to optimize

1. **Start from intent, not the keyword string.** For the target query, decide what the
   searcher wants — to learn, to compare, to buy, or to find a specific page. Match the
   page's format to that intent; a buying query needs a product page, not a how-to.
2. **Pick one primary keyword per page plus a few natural variants.** One page, one main
   intent. Stuffing many keywords into one page splits its relevance and ranks for none.
3. **Get the on-page elements right.**
   - **Title** — primary keyword near the front, under ~60 characters, written to be
     clicked, not just matched.
   - **Headings** — one H1 stating the topic; H2/H3 covering the questions a searcher
     has, in their words.
   - **Meta description** — a ~150-character pitch for the click. It doesn't rank, but it
     wins or loses the visit.
   - **URL** — short, readable, keyword-bearing.
   - **First 100 words** — state the answer and the keyword early.
4. **Build internal links with descriptive anchors.** Link to related pages using text
   that describes the destination, not "click here". Link new pages from existing strong
   ones so they get discovered.
5. **Cover the topic completely.** Answer the related questions a reader (and search
   engine) expects. Depth and clarity beat keyword density every time.

## How to audit an existing page

- Check title, H1, headings, meta, and URL against the target intent — flag each gap.
- Find quick wins first: a weak title, a missing H1, thin intro, no internal links, an
  unclear primary keyword.
- List concrete before/after edits, ordered by impact for effort.

## Output format

```
Page: <url/path> · Target query: <keyword> · Intent: <learn/compare/buy/navigate>
On-page check:
- Title: <current> → <suggested>
- H1 / headings: <issue> → <fix>
- Meta: <current> → <suggested>
- Internal links: <gap> → <add link from/to>
Quick wins (high impact, low effort): <ordered list>
Verdict: <where this page stands and the single highest-leverage edit>
```

Recommend only edits that serve the reader. Never advise hidden text, keyword stuffing,
or anything you would not show a visitor — it backfires and is not a marketing tactic.
