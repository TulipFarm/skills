---
name: deployment
version: 1.0.0
description: Ship a release safely with a pre-deploy checklist, a rollout strategy that includes a rollback plan, and post-deploy verification and monitoring, producing a deployment checklist.
---

# Deployment

Ship in a way you can undo. A safe release is boring: you know what is going out, how
to roll it back, and how you will tell whether it worked.

## When to use

Use this skill when releasing to production — especially for risky changes like schema
migrations, config flips, or anything touching a critical path. Use it to plan the
rollout before you push, not to react after something breaks.

## How to deploy

1. **Run a pre-deploy checklist.** Tests green, change reviewed, what is actually going
   out, migrations ordered correctly, config and secrets in place, dependencies ready.
   Confirm you can roll back *before* you start — never deploy a one-way door blind.
2. **Make the change backward-compatible where you can.** Decouple deploy from release
   with feature flags. Split schema changes so old and new code both work during the
   window: add columns before you read them, stop writing before you drop.
3. **Roll out gradually.** Prefer a staged rollout — a canary, one region, or a small
   percentage — over flipping everything at once. Watch the early slice before widening,
   so a bad release hits a few users, not all of them.
4. **Keep the rollback plan one step away.** Know the exact command or toggle to revert,
   and the signal that triggers it. A rollback you have to improvise mid-incident is not
   a plan. Decide the abort criteria *before* you watch the graphs.
5. **Verify after deploy.** Check the signals users feel — error rate, latency, key
   flows, business metrics — not just that the process started. "It deployed" is not
   "it works."
6. **Monitor through the soak window.** Watch for delayed failures after traffic ramps:
   slow leaks, cache effects, downstream pressure. Stay attentive past the first green
   minute before declaring success.

## Output format

Deliver a checklist tied to this release:

```
Release: <what is shipping>
Pre-deploy:
  [ ] tests green, reviewed, migration order confirmed
  [ ] backward-compatible / behind flag
  [ ] rollback step verified: <exact command/toggle>
Rollout: <canary / % / region plan> — abort if <signal>
Post-deploy:
  [ ] verify <user-facing signals + key flow>
  [ ] monitor <metrics> through <soak window>
```

If you cannot state how to roll this back, you are not ready to deploy it.
