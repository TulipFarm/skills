---
name: writing-specifications
version: 1.0.0
description: Turn an idea into a clear spec or PRD — problem and why-now, target users, goals and non-goals, scope, requirements, success metrics, risks, and open questions — producing a document the team can build from.
---

# Writing Specifications

Write the spec that lets engineering, design, and stakeholders build the right thing
without a meeting for every ambiguity. A spec is a decision record, not a wish list.

## When to use

Use this skill when an idea is ready to be committed to and built, when work keeps
stalling on "what did we actually agree to", or when a feature is large enough that
verbal alignment will drift. Skip it for trivial changes — a one-liner suffices.

## How to write

1. **Lead with the problem and why now.** Two or three sentences: who is hurting, the
   evidence it's real, and what makes this the right moment. If you can't justify
   why-now, the spec is premature.
2. **Name the target users and the goal.** Be specific about who this is for and who
   it is explicitly not for. State the outcome you want, framed as a change in user
   behavior or a metric — not as "ship feature X".
3. **Draw goals and non-goals.** Non-goals do the heavy lifting: they cut scope and
   prevent the build from sprawling. List what you are deliberately not solving now.
4. **Specify requirements, not implementation.** Describe behavior and user-visible
   outcomes; leave the how to engineering unless a constraint is real.
   - Separate must-have from nice-to-have explicitly.
   - Cover the unhappy paths: empty, error, permission-denied, and limit cases.
5. **Define success metrics up front.** State how you'll know it worked and the
   threshold that counts as success, before building — so it can't be rationalized
   after the fact.
6. **Surface risks and open questions.** List what could go wrong and what is still
   undecided, each with an owner. Open questions in the spec are honest; discovered
   in build, they're expensive.

## Output format

Follow the skeleton in `references/spec-template.md`. Keep it as short as the
decisions require — a tight one-pager beats an unread ten-page document. Mark every
unresolved item as an open question rather than papering over it with vague language.
