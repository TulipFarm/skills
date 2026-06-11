---
name: policy-lookup
version: 1.0.0
description: Search internal or external policy documents to find the governing rule for a specific situation — locating the exact source section, quoting the relevant language, and summarizing applicability and any exceptions — so the requester gets a precise answer, not a wall of policy text.
---

# Policy Lookup

Policy lookup is about finding the *right* rule, not just any mention of a topic.
The output must cite the exact source so the reader can verify it and a reviewer
can trust it.

## When to use

Use this skill when someone needs to know what a policy says about a specific
situation: HR policies (leave, expense, conduct), legal or regulatory requirements,
vendor contracts, security policies, compliance frameworks (SOC 2, GDPR, HIPAA),
or internal operating procedures. Do not use it to interpret whether a policy
*should* apply — that is legal or management judgment. Do use it to find and
present the text accurately.

## How to do a policy lookup

1. **Understand the question precisely.** Before searching, restate the situation
   in your own words: who is asking, what they want to do, and what outcome they
   need clarity on. Ambiguous questions produce wrong answers — clarify first.

2. **Identify the right policy documents.** Name the documents likely to govern
   the situation. If multiple could apply (employee handbook, state law, vendor
   contract), list all of them. Do not search only the first one you find.

3. **Search methodically.** Use the table of contents, index, or full-text search.
   Try multiple search terms: the specific action, the category of action, relevant
   role names, and dollar thresholds or time limits if relevant. Do not stop at
   the first hit — scan for exceptions or superseding clauses.

4. **Extract the governing language.** Quote the relevant section verbatim. Do not
   paraphrase at this stage — paraphrasing introduces interpretation error.

5. **Summarize applicability.** In plain language, state:
   - What the policy requires or permits in this situation.
   - Who it applies to.
   - Any conditions, thresholds, or timeframes.
   - Explicit exceptions.

6. **Flag conflicts and ambiguity.** If two policies say different things, surface
   both. If the policy text is ambiguous, say so and identify what the ambiguity
   hinges on. Do not resolve legal or contractual ambiguity — flag it for the
   appropriate authority.

7. **Note what the policy does not cover.** Explicitly state if the situation is
   not addressed by any policy found. Absence of a rule is itself useful information.

## Output format

```
Policy Lookup: <question or situation>
Looked up by: <date>

## Answer
<Plain-language answer: what the policy says about this situation>

## Governing source

**Document:** <policy document name, version/date>
**Section:** <section number and title>
**Quoted text:**
> "<exact verbatim quote>"

## Conditions and exceptions
- Applies to: <who>
- Conditions: <thresholds, timeframes, circumstances>
- Exceptions: <any carve-outs>

## Related sections
- <Other sections or documents that touch this topic>

## Conflicts or ambiguity
<If none: "No conflicts found across reviewed documents.">
<If yes: describe the conflict and who should resolve it.>

## Not covered
<What aspects of the question the policy does not address>
```
