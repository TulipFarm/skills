---
name: memory-management
version: 1.0.0
description: Decide what the assistant should durably remember versus look up each time — keeping a small set of stable, high-value personal and operational facts, pruning the rest, and redirecting document-sized information to the knowledge base — producing curated memory entries and a list of what to drop.
---

# Memory Management

Curate the assistant's durable memory like a tight working set, not an archive. Memory
is for the few facts that make every future interaction better; everything else should
be looked up when needed. A bloated memory is worse than a small one — it adds noise and
goes stale.

## When to use

Use this skill when deciding whether to remember something, when memory has grown
cluttered or contradictory, or when reviewing what the assistant has retained. Reach for
it whenever you catch yourself saving information "just in case".

## How to curate

1. **Apply the keep test.** Remember a fact only if it is all four: stable (won't change
   next week), high-value (changes how you respond often), reusable (applies across many
   future tasks), and concise (a line, not a document). If it fails any, don't store it.
2. **Favor the durable, personal, and operational.** Worth keeping: how the person likes
   things done, recurring preferences, key relationships and roles, standing constraints,
   tools and conventions in use. These pay off on nearly every interaction.
3. **Don't remember what you can derive or look up.** One-off details, anything in a
   document or system already, fast-changing state (today's tasks, current numbers), and
   anything you can recompute on demand. Storing these guarantees staleness.
4. **Redirect document-sized information to the knowledge base.** If it's longer than a
   couple of lines, structured, or shared, it belongs in the knowledge base, not memory.
   Memory points to it; it doesn't hold it.
5. **Write entries to be self-contained and atomic.** One fact per entry, phrased so it
   makes sense with no surrounding context months later. Date anything that could age.
6. **Prune on a cadence.** Periodically reread every entry and ask "is this still true,
   still useful, still concise?" Delete the stale, merge duplicates, and demote anything
   that has grown into a document. Pruning is the habit that keeps memory trustworthy.

## Quality bar

Memory is healthy when it's small enough to skim, every entry would still earn its place
if you re-decided today, and nothing in it contradicts reality. When in doubt, don't
remember — a fact looked up fresh beats a fact remembered wrong.
