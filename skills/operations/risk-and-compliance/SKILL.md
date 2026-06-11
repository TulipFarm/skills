---
name: risk-and-compliance
version: 1.0.0
description: Identify and track operational risks and compliance obligations in a register — rating each by likelihood and impact, assigning owners, and defining mitigations and review dates — producing a maintainable risk and compliance register.
---

# Risk And Compliance

Surface what could go wrong and what you are obligated to do, then keep it visible and
owned. A risk you have written down and assigned is one you can manage; the rest are
surprises waiting to happen. This is general guidance, not legal advice — confirm
specific regulatory obligations with a qualified professional.

## When to use

Use this skill when asked to assess operational risk, build or update a risk register,
or track compliance obligations such as data handling, financial controls, safety, or
contractual commitments. It fits periodic reviews, audits, new initiatives, or after
an incident exposes a gap.

## How to build the register

1. **Identify risks and obligations broadly, then sort.** Sweep across operations,
   finance, people, technology/data, legal/regulatory, and third parties. Capture each
   as a concrete statement of what could go wrong or what is required — not a vague theme.
   - Risk: "Key vendor outage halts order fulfillment."
   - Obligation: "Customer records retained and deletable per applicable data rules."
2. **Rate likelihood and impact.** Use a simple consistent scale (e.g. low/medium/high
   on each) and combine into a severity. Score from evidence, not optimism. Severity
   sets the order you work the list, not whether an item belongs on it.
3. **Assign a single owner to every item.** A named person accountable for the
   mitigation and for reporting status. Unowned risks rot.
4. **Define the mitigation and the residual.** State the control or action that reduces
   likelihood or impact, and be honest about the risk that remains after it. Distinguish
   what is in place today from what is still planned.
5. **Set a review date and a trigger.** When the item gets re-checked, plus any event
   (new contract, incident, regulation change) that forces an earlier review.
6. **Keep it current.** A register reviewed once and abandoned is theater. Re-rate on
   each cycle, close what is resolved, and add what is new.

## Output format

```
Risk & Compliance Register — <date>  |  Owner of register: <name>

ID | Item (risk or obligation) | Type | Likelihood | Impact | Severity | Owner | Mitigation / control | Status | Residual | Review by
R1 | <what could go wrong>      | Risk | High       | High   | Critical | <name> | <control/action>      | In place / Planned | Low | <date>
C1 | <what is required>         | Compliance | Med  | High   | High     | <name> | <how it is met>       | Met / Gap          | —   | <date>
```

Order by severity, highest first. Flag any open gap on a high-severity item plainly.
