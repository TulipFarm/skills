---
name: email-sequence
version: 1.0.0
description: Write a multi-touch outbound email sequence — initial outreach plus follow-ups — tailored to persona, pain point, and deal stage, with each email short, specific, and ending in one clear ask, ready to send or load into a sequencing tool.
---

# Email Sequence

An email sequence is a coordinated series of messages designed to earn a
response over multiple touches. The cardinal rule: every email must give the
prospect a reason to open the next one — and each one must have one ask, not five.

## When to use

Use this skill to build cold outreach sequences for new prospects, reactivation
sequences for dormant opportunities, or nurture sequences for leads not yet ready
to engage. The input is the persona, the primary pain point, and the deal stage.
Do not use it to blast generic copy — sequences built without persona specificity
perform poorly.

## How to write an email sequence

1. **Define the target clearly.** Before writing, articulate:
   - Persona: job title, industry, company size, likely reporting structure.
   - Primary pain: the one problem they care about most that you solve.
   - Awareness level: do they know your company? Do they know they have the problem?
   - Desired outcome of the sequence: meeting booked / reply received / link clicked.

2. **Design the arc.** A standard cold sequence is 3–5 emails over 2–3 weeks.
   Each touch should use a different angle — do not send the same email three times.
   Common arc:
   - Email 1: Relevance + pain + soft ask.
   - Email 2: A different angle — social proof, specific use case, or data point.
   - Email 3: Short, direct follow-up — assume they are busy, not uninterested.
   - Email 4 (optional): New value — share a resource, insight, or relevant news.
   - Email 5 (optional): Breakup email — closes the loop, sometimes triggers a reply.

3. **Write Email 1: Lead with relevance, not your product.**
   Opening line must be specific to them — not "I hope this finds you well."
   Reference their company, role, a recent announcement, or the problem category.
   One sentence on what you do. One sentence on why it is relevant to their
   situation. One clear, low-friction ask (15-minute call, a yes/no reply).
   Target: under 100 words.

4. **Write follow-ups: new angle, same ask.**
   Each follow-up should surface a different reason to engage — never repeat
   the first email. Use social proof (customer result), specificity (their
   industry), or urgency (timing relevance) as levers. Keep each under 75 words.
   Reference the previous email briefly but do not re-summarize it.

5. **Write subject lines separately.** Subject lines determine open rate. Write
   three options per email:
   - Curiosity-based: asks a question or creates a knowledge gap.
   - Benefit-based: names the outcome directly.
   - Reference-based: names their company, a mutual connection, or a recent event.

6. **Check for quality signals.** Before finalizing:
   - Does every email have exactly one ask?
   - Is the first line of every email specific to the recipient (not generic)?
   - Is each email under 100 words?
   - Are you making a claim that requires proof you cannot provide?

## Output format

```
Email Sequence: <Persona> — <Pain Point>
Sequence length: <n> emails | Spacing: <days between sends>
Desired outcome: <meeting / reply / click>

---

## Email 1 — <Angle: e.g., "Direct outreach">
**Subject line options:**
1. <curiosity>
2. <benefit>
3. <reference>

**Body:**
<email text — under 100 words>

**CTA:** <exact ask>

---

## Email 2 — <Angle: e.g., "Social proof">
**Subject:** <subject line>

**Body:**
<email text>

---

[repeat for each email in sequence]

---

## Personalization variables
- {{first_name}}, {{company}}, {{pain_detail}} — fill before sending
```
