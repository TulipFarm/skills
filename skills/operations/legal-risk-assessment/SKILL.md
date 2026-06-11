---
name: legal-risk-assessment
version: 1.0.0
description: Identify and rate legal risks in a contract, proposal, or business decision — flagging liability exposure, missing protections, and problematic clauses — and produce a prioritized risk register with recommended mitigations, for use by non-lawyers before escalating to counsel.
---

# Legal Risk Assessment

A legal risk assessment is not legal advice — it is a structured first pass that
surfaces the most important issues for an informed review, so a business owner
or manager knows what questions to ask and which items require counsel.

**Important:** This skill produces a risk identification output for informational
purposes. It does not constitute legal advice and does not replace review by a
qualified attorney for material contracts or significant business decisions.

## When to use

Use this skill before signing a vendor agreement, SaaS contract, partnership
agreement, or service contract; when evaluating a business decision with legal
dimensions; or when preparing for legal counsel review and you want to identify
the key issues in advance. Do not use it as a substitute for legal counsel
on high-value, high-risk, or regulated matters.

## How to assess legal risk

1. **Identify the document type and parties.** State what kind of agreement or
   decision this is, who the parties are, and what jurisdiction governs it.
   This frames which risks are most relevant.

2. **Find the liability exposure clauses.** Look specifically for:
   - Indemnification: who indemnifies whom, for what, with what limits?
   - Limitation of liability: is liability capped? At what amount? Is the cap
     mutual or one-sided?
   - Warranties and representations: what is being warranted? Are any warranties
     disclaimed?
   - Insurance requirements: what coverage is required? Do you carry it?

3. **Review termination and exit terms.** What triggers termination? What is the
   notice period? Are there fees for early termination? What happens to data and
   assets on termination?

4. **Check intellectual property provisions.** Who owns work product or deliverables?
   Is there a license grant — what are its scope and limits? Are there assignment
   restrictions?

5. **Identify missing standard protections.** Flag if these are absent or weak:
   - Data protection / privacy provisions (especially if personal data is involved).
   - Confidentiality / NDA provisions.
   - Dispute resolution mechanism.
   - Governing law and jurisdiction.
   - Force majeure clause.

6. **Spot unusual or one-sided terms.** Flag clauses that deviate significantly
   from market standard or create unreasonable obligations — auto-renewal with
   short opt-out windows, unilateral price changes, broad assignment rights,
   unlimited audit rights.

7. **Rate each risk.** Use three ratings:
   - **High:** Material financial exposure or legal liability. Must be addressed
     before signing.
   - **Medium:** Elevated risk or missing protection. Should negotiate or get
     counsel opinion.
   - **Low:** Minor issue or common market term. Note but likely acceptable.

## Output format

```
Legal Risk Assessment: <document name>
Document type: <contract type> | Governing law: <jurisdiction> | Date: <date>

**Disclaimer:** This assessment is for informational purposes only and does not
constitute legal advice. Consult qualified legal counsel for material agreements.

## Summary
<Two-to-three sentence overall risk profile: overall risk level, most critical issues, recommendation to proceed/negotiate/escalate>

## Risk register

| # | Clause / Section | Risk | Rating | Recommended mitigation |
|---|-----------------|------|--------|------------------------|
| 1 | <e.g., Section 8 — Indemnification> | <Indemnity is one-sided — we indemnify them with no cap> | High | Negotiate mutual indemnification with liability cap equal to fees paid in prior 12 months |
| 2 | ... | ... | Medium | ... |

## Missing provisions
- [ ] Data protection clause — <assessment of impact>
- [ ] Limitation of liability — <absent / insufficient>

## Items to escalate to counsel
1. <Issue that requires legal opinion>

## Questions to resolve before signing
1. <Business or factual question that affects risk assessment>
```
