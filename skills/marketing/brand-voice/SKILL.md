---
name: brand-voice
version: 1.0.0
description: Define and enforce a consistent brand voice — capturing tone attributes with do/don't examples, then reviewing drafts against them — producing a voice guide and/or a marked-up review.
---

# Brand Voice

Make every piece of content sound like it came from the same company. Voice is what's
consistent; tone is what shifts with context.

## When to use

Use this skill in two modes: **defining** a brand voice when none is written down or it's
inconsistent, and **enforcing** it by reviewing a draft against the guide. If the user
hands you a draft and a voice, review it. If they hand you only examples or a vibe,
define it first.

## How to define a voice

1. **Derive attributes from real examples, not adjectives.** Gather a few pieces the
   brand is proud of. Name three to five voice traits (e.g. "plain-spoken", "warm",
   "confident, never hype") that the samples actually demonstrate.
2. **Make each trait operational with do/don't pairs.** A trait is useless until it
   shows the line. For every attribute, give one "we say this" and one "we don't say
   this" using the same idea, so the difference is unmistakable.
3. **Capture tone shifts by context.** Same voice, different dial: how it sounds in an
   error message vs a launch announcement vs a sales email. Note what stays fixed.
4. **List hard rules.** Spelling of the brand and product names, words to avoid, formality
   level, emoji and exclamation policy, how the audience is addressed ("you" vs "users").

## How to review a draft against the voice

1. **Read the whole draft once for overall fit** before line-editing — does it *feel*
   like the brand?
2. **Mark each deviation inline** with the trait it breaks and a rewrite in-voice.
3. **Catch the common slips:** off-brand jargon, hype words, inconsistent formality, wrong
   name spelling, tone mismatched to the context.
4. **Report fit honestly.** If the draft is on-voice, say so in a line. No padding.

## Output format

When defining:

```
Brand voice
Attributes: <3–5 traits>
For each: Do — "<in-voice line>" · Don't — "<off-voice line>"
Tone by context: <error / launch / sales / support>
Hard rules: <names, banned words, formality, emoji/punctuation, address>
```

When reviewing: return the draft with inline `[voice: <trait> — rewrite: "<…>"]` notes
and a one-line overall verdict (on-voice / needs work).
