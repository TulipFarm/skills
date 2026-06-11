---
name: slack-search
version: 1.0.0
description: Formulate effective Slack search queries to find relevant conversations, past decisions, and context — iterating across search strategies, synthesizing results from key threads, and surfacing the answer with links to the source messages so the reader can verify and explore further.
---

# Slack Search

Slack contains institutional memory that exists nowhere else — decisions made in
passing, context shared informally, commitments made over DM. The challenge is
surfacing it reliably. Good Slack search is a skill, not just a search bar.

## When to use

Use this skill when you need to find a past decision, a document that was shared,
a conversation about a specific topic, or context on a project that pre-dates
your involvement. Also use it when you are about to ask a question in Slack and
want to check if it has already been answered.

## How to search Slack effectively

1. **Start with the most specific terms.** Use distinctive phrases, project names,
   or terminology that would only appear in messages about this topic. Avoid
   common words (words that appear in thousands of messages are not useful filters).

2. **Use Slack's advanced search operators.** Slack supports modifiers that narrow
   results dramatically:
   - `in:#channel-name` — search within a specific channel.
   - `from:@username` — messages from a specific person.
   - `before:YYYY-MM-DD` and `after:YYYY-MM-DD` — date range.
   - `has:link`, `has:file`, `has:reaction:white_check_mark` — messages with
     specific attributes.
   Combine operators to narrow results: `in:#engineering after:2024-01-01 deployment`.

3. **Try multiple search angles.** If the first search does not find it, try:
   - Synonyms or alternate terminology for the same concept.
   - The names of people likely to have sent or replied to relevant messages.
   - The channels where the topic would have been discussed.
   - Slightly different date ranges.
   One failed search does not mean the information is not in Slack.

4. **Read threads, not just messages.** Slack surfaces individual messages in
   search results, but the decision or answer often lives in the thread reply.
   Click into threads before concluding a message is not relevant.

5. **Look in likely channels.** If search results are thin, think about which
   channels this conversation would have happened in and browse or search
   within those channels directly.

6. **Check pins and bookmarks.** Important messages are often pinned in channels.
   Check the channel's pinned items before exhausting the search.

7. **Synthesize the findings.** Once you have found relevant messages, summarize:
   - What was decided or said.
   - When it was said.
   - Who said it.
   - The message link so the reader can verify.

## Output format

```
Slack Search: <topic or question>
Searched: <date>

## Answer / finding
<Direct answer to the question, if found. If not found, state what was and was not found.>

## Key threads

### Thread 1 — <channel> — <date>
**Summary:** <what was discussed and decided>
**Key participants:** <names>
**Link:** <Slack deep link to message>

### Thread 2 — ...

## Search queries used
- `<query 1>`
- `<query 2>`

## Channels searched
- <list>

## Not found / gaps
<If the question was not fully answered, state what is still unknown and suggest where to look or who to ask.>
```
