---
name: discover-brand
version: 1.0.0
description: Audit a brand's existing content, messaging, and visual identity to extract implicit brand guidelines from real examples — surfacing the voice, tone, vocabulary patterns, and visual style that are already present, even if they have never been formally documented.
---

# Brand Discovery

Brand discovery answers the question: "What brand do we actually have?" —
not what was intended, but what exists in the wild. The output is grounded in
real examples, not aspiration.

## When to use

Use this skill when a company has brand material but no formal guidelines,
when guidelines exist but content has drifted from them, when a new team member
needs to understand the brand quickly, or when preparing to write formal brand
guidelines. Discovery must precede guideline generation — do not write guidelines
for a brand you have not audited.

## How to discover a brand

1. **Gather the source material.** Collect a representative sample across:
   - Website: homepage, product pages, about page, pricing page, blog posts.
   - Marketing: email campaigns, ads, social posts (recent, not cherry-picked).
   - Sales: pitch decks, proposal templates, battlecards.
   - Product: in-app copy, onboarding flows, error messages, notifications.
   - Customer-facing: support replies, release notes, help articles.
   Aim for at least 20 content samples. The wider the sample, the more honest
   the discovery.

2. **Analyze voice and tone.** Read each sample and ask:
   - What personality comes through? (Formal, casual, expert, approachable,
     authoritative, playful, earnest?)
   - How does the brand address the reader? (First person, second person, collective?)
   - What emotional register does it occupy most consistently?
   - Where does tone shift (support vs. marketing vs. product)?
   Note specific phrases that feel characteristic — these will become examples.

3. **Extract vocabulary patterns.** Identify:
   - Words and phrases that appear repeatedly.
   - Words that are consistently avoided (jargon, competitor names, clichés).
   - How technical language is handled — explained, embraced, or avoided?
   - Naming conventions for product features and categories.

4. **Analyze visual style (if applicable).** Note: color palette in use, typography
   choices, imagery style (photography, illustration, abstract), logo usage patterns.
   This is observation, not redesign.

5. **Identify inconsistencies.** Flag where tone, vocabulary, or visual choices
   are inconsistent across channels or time. Inconsistencies reveal either brand
   drift or deliberate channel adaptation — determine which.

6. **Articulate the implicit brand.** Synthesize findings into the brand as it
   actually exists:
   - Voice: three to five adjectives with evidence.
   - Tone spectrum: how tone shifts by context.
   - Vocabulary: patterns and anti-patterns.
   - Visual identity: what is consistently used.

## Output format

```
Brand Discovery: <company name>
Sources reviewed: <n samples> | Date: <date>

## Implicit brand statement
<Two-to-three sentence characterization of the brand as it exists in the material>

## Voice
Observed adjectives: <adj 1>, <adj 2>, <adj 3>

Examples:
- "<quoted text>" — [source]
- "<quoted text>" — [source]

## Tone spectrum
- Marketing / acquisition content: <tone description>
- Product / in-app: <tone description>
- Support / help: <tone description>

## Vocabulary patterns

### Characteristic phrases and words (use)
- "<phrase>" — appears in: [sources]

### Avoided or absent patterns
- <jargon/style that is notably absent>

## Visual observations
- Color: <observed palette>
- Typography: <observed type choices>
- Imagery: <style observed>

## Inconsistencies found
- <Description of inconsistency — where it appears>

## Recommended next step
<Whether this brand is strong enough to formalize, or whether it needs work before guidelines are written>
```
