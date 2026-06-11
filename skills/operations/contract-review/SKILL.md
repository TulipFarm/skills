---
name: contract-review
version: 1.0.0
description: Review a routine business contract or NDA for a non-lawyer by surfacing key terms, obligations, dates, and liabilities, flagging risky or unusual clauses, and listing questions to raise, producing a plain-English summary with flagged clauses.
---

# Contract Review

Read a routine agreement the way a sharp operator would before signing: find what you
are committing to, what could hurt you, and what to ask about — in plain language.

> Not legal advice. This produces a plain-English orientation to help a non-lawyer read
> a routine agreement. For high-stakes, high-value, or unusual terms, get a qualified
> lawyer to review before you sign.

## When to use

Use this skill when asked to make sense of a standard business contract, NDA, service
agreement, order form, or similar before signing. It is for orientation and spotting
issues to escalate — not for negotiating complex deals or replacing counsel.

## How to review a contract

1. **Establish the basics first.** Who are the parties, what is each actually agreeing
   to do, what is being paid, and over what term. If you cannot state the deal in two
   sentences, you do not yet understand it.
2. **Extract the obligations and dates.** List what each side must do, by when. Pull out
   every concrete date and deadline — start, term length, renewal, termination notice,
   payment due, deliverable dates. Missed dates cause most avoidable contract pain.
3. **Find where the risk sits.** Read carefully for the clauses that decide who bears
   loss when things go wrong:
   - Liability and indemnity — who pays for what damage, and is it capped.
   - Termination — how either side exits, notice required, and what survives.
   - Auto-renewal — does it renew silently, and what is the cancel window.
   - Payment terms, late fees, and price-increase rights.
   - Confidentiality, data handling, and IP ownership.
   - Exclusivity, non-compete, or anything that limits your future options.
4. **Flag the unusual and the one-sided.** Compare against what is normal for this kind
   of agreement. Call out anything lopsided, vague, open-ended, or unusually broad —
   uncapped liability, indefinite obligations, unilateral change rights, broad indemnity.
5. **List the questions to raise.** Turn every ambiguity and red flag into a specific
   question for the other party or for counsel. Mark which items genuinely need a lawyer.

## Output format

```
Contract Review — <agreement name>  |  Date: <date>
⚠ Not legal advice — get counsel for high-stakes or unusual terms.

The deal in brief: <two-sentence plain-English summary>
Parties: <A> and <B>   |   Value: <amount/structure>   |   Term: <length>

Key dates
- <date> — <what happens / what is due>
- <renewal/notice window> — <action needed by when>

Obligations
- <Party A must …>
- <Party B must …>

Flagged clauses
- 🔴 <clause> — <why it is risky / unusual> — <plain-English effect>
- 🟡 <clause> — <worth clarifying>

Questions to raise
- <specific question>  [lawyer needed: yes/no]
```

If a clause is genuinely high-stakes or you cannot tell what it means, say so and route
it to a lawyer rather than guessing.
