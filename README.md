[![make.fun · u-markk-st-one-line-office-jokes-a51f2bcc](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/rohanajesika/one-line-office-jokes/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/rohanajesika/one-line-office-jokes/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-office-jokes-a51f2bcc)

# One-Line Office Jokes

One one-line joke about office life, written for the [make.fun "One-Line Office Jokes" bounty](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc). An AI judge compares the jokes head to head, and the funniest lines take the pool.

## The joke

> The office plant died, so facilities taped a photo of a plant to the pot and closed the ticket as 'resolved'.

## Why this one

The judge weighs five things, most important first, and the line is built for them in that order:

1. **A genuine single-line joke about office life** — a setup with a punchline, about the office plant and the facilities ticket, not a story, slogan or list.
2. **A real detail** — the facilities ticket marked "resolved" is the office's own paperwork; everyone who works in an office has watched a ticket get closed while nothing was actually fixed.
3. **The laugh lands in the last few words** — "closed the ticket as 'resolved'" is the final beat, and it reframes everything before it: the photo taped to the pot was never a stand-in, it was the fix.
4. **Clear on one reading** — plant dies, photo replaces it, ticket closed. No setup needs explaining.
5. **Freshness** — no Monday morning, no photocopier, no reply-all, no "this meeting could have been an email". The joke turns on a dead office plant and a closed ticket.

Five candidate lines were drafted in `main.ts` with notes on why each lost; this one won.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The program refuses to write anything outside the gate — the text must be 1 to 199 characters, a single line, and not only white space — and it fails loudly instead of writing an invalid file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
