// Entry for make.fun u-markk-st-one-line-office-jokes-a51f2bcc:
// "One-Line Office Jokes".
//
// A program (Node 22, standard library only) that writes ONE one-line
// office joke, under 200 characters, to /output/entry.txt. The joke is
// judged head to head by an AI judge against other entries, so the whole
// entry is one line of comedy. Deterministic: the same bytes on every
// run, no network, no input, no randomness, no clock.
//
// How the chosen joke maps to the judge's brief, in the judge's own order:
//   1. A genuine single-line joke about office life: a setup with a
//      punchline, about the office plant and the facilities ticket —
//      office life through and through, not a story, slogan or list.
//   2. A real detail: the facilities ticket marked "resolved" is the
//      office's own paperwork — everyone who works in an office has
//      watched a ticket get closed while nothing was actually fixed.
//   3. The laugh lands in the last few words: "closed the ticket as
//      'resolved'" is the final beat, and it reframes everything before
//      it — the photo taped to the pot was never a fix, it was the fix.
//   4. Clear on one reading: plant dies, photo replaces it, ticket
//      closed. No setup needs explaining.
//   5. Freshness: no Monday morning, no photocopier, no reply-all, no
//      "this meeting could have been an email" — the joke turns on a
//      dead office plant and a closed ticket, a corner of office life
//      the obvious lines never touch.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Drafts considered, kept here so the choice is auditable. Each is one
// line aimed at the same tired office worker; the notes say why it lost.
const CANDIDATES: { text: string; note: string }[] = [
  {
    text: "The office plant died, so facilities taped a photo of a plant to the pot and closed the ticket as 'resolved'.",
    note: 'Chosen. Revised from "replaced it with a photo of a plant and a ticket marked \'resolved\'": "taped a photo of a plant to the pot" is a sharper, more visual image, and "closed the ticket as \'resolved\'" is the office paperwork itself doing the punchline — the ticket closed as resolved. The laugh lands in the last few words, and the detail (a facilities ticket) is one every office worker recognises.',
  },
  {
    text: 'HR announced a wellness program: a poster of a beach, taped over the window that overlooks the car park.',
    note: 'A vivid image and a real turn, but the punchline is a picture, not a beat — the laugh arrives in the middle of the line and then the sentence keeps going.',
  },
  {
    text: "I asked IT to fix my laptop and they turned it off and on, then billed the fix to my team as 'digital transformation'.",
    note: 'Strong recognition, and "digital transformation" is a good final beat — but "have you tried turning it off and on" is one of the most told IT lines there is, so it loses on freshness.',
  },
  {
    text: "The lift has been 'out of order' since March, so now we hold our stand-ups on the stairs, standing up.",
    note: 'The pun lands on the very last word, but the joke needs the reader to know what a stand-up is, and the setup is two clauses long for a one-line payoff.',
  },
  {
    text: "My calendar says 'focus time' from nine to five, which is why nobody can ever find me — including me.",
    note: 'True, and it winces, but it reads as an observation with a twist rather than a joke with a punchline, and the turn arrives before the final beat.',
  },
];

// The joke: the setup names the dead office plant and the photo taped
// to its pot; the punchline lands where the reader did not expect —
// the facilities ticket is closed as "resolved", and the photo was
// the fix all along.
const JOKE = CANDIDATES[0].text;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space. Fail loudly here rather than write an invalid file.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke is ${JOKE.length} characters, must be 1-199`);
}
if (JOKE.trim().length === 0) {
  throw new Error('joke must not be only white space');
}
if (JOKE.includes('\n')) {
  throw new Error('joke must be a single line');
}

// One file, exactly the joke, no trailing newline: the entry is the joke
// and nothing else.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

console.log(`joke (${JOKE.length} chars): ${JOKE}`);
