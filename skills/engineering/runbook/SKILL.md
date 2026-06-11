---
name: runbook
version: 1.0.0
description: Write a clear operational runbook for a recurring procedure — covering purpose, prerequisites, step-by-step instructions, validation checks, and rollback steps — so any on-call engineer can execute it safely without prior context.
---

# Runbook

A runbook is a precise, repeatable playbook for a recurring operational task. It
exists so that *anyone* on the team — including someone paged at 2 a.m. for the
first time — can execute the procedure correctly without guessing or context.

## When to use

Use this skill when you need to document a recurring operational procedure:
deployments, database migrations, cache flushes, certificate renewals, failover
sequences, oncall escalation paths, or any task run more than once by more than
one person. If you have explained the same thing verbally three times, write a
runbook.

## How to write a runbook

1. **Name and purpose.** One sentence: what this runbook does and why it exists.
   Include a link to the system or service it covers.

2. **Audience and frequency.** Who runs this (team, role) and how often (daily,
   weekly, on-call only). This sets the expected expertise level.

3. **Prerequisites.** List everything required before starting: access, credentials,
   tools, environment variables, required upstream state. Flag anything that must
   be confirmed — e.g., "production traffic must be below 20 % before proceeding."

4. **Step-by-step procedure.** Write numbered steps. Each step:
   - States the exact command or action, not a description of it.
   - Explains what it does in one sentence.
   - Names the expected output or state change so the operator knows it worked.
   Use `code blocks` for commands. Never skip a step because it "seems obvious."

5. **Validation.** After the procedure, list explicit checks confirming success:
   metrics to observe, log lines to grep, health-check endpoints to hit, smoke
   tests to run. Each check should pass/fail unambiguously.

6. **Rollback.** For every destructive or reversible step, document the rollback
   action. If the procedure cannot be rolled back, say so explicitly and state the
   escalation path.

7. **Troubleshooting.** A short table of common failure modes, their symptoms, and
   the corrective action. Drawn from real past failures.

8. **Ownership and history.** Last updated, owner, link to the change log. Runbooks
   rot — give reviewers a signal for when to distrust this document.

## Output format

```
# Runbook: <Procedure Name>

**Purpose:** <one sentence>
**Audience:** <team/role>
**Frequency:** <how often>
**Last updated:** <date> — <owner>

---

## Prerequisites

- [ ] <requirement or access>
- [ ] <required upstream state>

## Procedure

1. **<Step title>**
   ```
   <exact command>
   ```
   Expected output: <what to see if it worked>

2. ...

## Validation

- [ ] <check> — expected: <value or state>
- [ ] ...

## Rollback

| Step | Rollback action |
|------|-----------------|
| <n>  | <exact undo>    |

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| ...     | ...         | ... |
```
