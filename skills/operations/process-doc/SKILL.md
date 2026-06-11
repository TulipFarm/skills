---
name: process-doc
version: 1.0.0
description: Document a business process — defining inputs, outputs, steps, owners, decision points, exceptions, and SLAs — in a format suitable for onboarding, SOPs, and process audits, so the process can be followed and improved without the original owner present.
---

# Process Documentation

A process document exists so the process can be run correctly by someone other
than the person who designed it. The test: could a new employee follow this
document on their first week and produce the correct output?

## When to use

Use this skill to document a recurring business process before someone who owns
it leaves, when a process needs to be standardized across multiple people or
locations, when preparing for an audit or certification that requires documented
procedures, or when a process is inconsistently executed and needs to be aligned.

## How to document a process

1. **Name and purpose.** Process name, one-sentence purpose (what it produces
   and why it matters), process owner (the person accountable for its quality),
   and applicable business unit or function.

2. **Scope.** Where does the process start (trigger or input) and where does it
   end (final output)? What is explicitly out of scope? Unclear boundaries are
   the source of most "that's not my job" breakdowns.

3. **Inputs.** What must exist or arrive for the process to begin?
   List each input, its source, and its required format or quality standard.

4. **Outputs.** What does the process produce? List each output, who receives
   it, and what "done" looks like for each.

5. **Roles.** List every role involved in the process. For each:
   - Role name (not person name — roles persist; people change).
   - RACI for the process overall: Responsible, Accountable, Consulted, Informed.

6. **Steps.** Number every step. For each step:
   - What is done.
   - Who does it (role name).
   - Input required to start this step.
   - Output or state change produced.
   - How long it should take (if there is an SLA).
   Decision points get their own step: "If X, proceed to step N; if Y, proceed
   to step M." Do not leave decisions implicit.

7. **Decision points and branching.** For each decision in the process, name the
   criteria used to decide, who decides, and where each path leads.

8. **Exceptions and escalation.** What are the known exceptions to the standard
   flow? For each, document how it is handled and who is escalated to if the
   exception cannot be resolved at the standard level.

9. **SLAs and quality standards.** For each step or output with a time or quality
   requirement, state it explicitly. "Process completed within 2 business days
   of receipt" is an SLA. "Reviewed for accuracy before sending" is a quality standard.

10. **Related documents.** Links to templates, forms, upstream and downstream
    processes, or reference materials needed to execute this process.

## Output format

```
Process: <name>
Owner: <role> | Version: 1.0 | Last reviewed: <date>
Purpose: <one sentence>

## Scope
Starts when: <trigger or input arrives>
Ends when: <final output is delivered>
Out of scope: <what this process does not cover>

## Inputs
| Input | Source | Required format |
|-------|--------|----------------|
| ...   | ...    | ...            |

## Outputs
| Output | Recipient | "Done" criteria |
|--------|----------|----------------|
| ...    | ...      | ...            |

## Roles (RACI)
| Role | R/A/C/I | Description |
|------|---------|-------------|
| ...  | ...     | ...         |

## Steps

### Step 1: <name>
- **Owner:** <role>
- **Input:** <what is needed>
- **Action:** <what to do>
- **Output:** <what is produced>
- **SLA:** <time limit, if any>

### Step 2: <name — if decision>
- **Decision:** <criteria>
- **If <condition>:** → Step <n>
- **If <condition>:** → Step <m>

[continue for all steps]

## Exceptions
| Exception | How to handle | Escalate to |
|-----------|--------------|-------------|
| ...       | ...          | ...         |

## Related documents
- <Template or form name — link>
```
