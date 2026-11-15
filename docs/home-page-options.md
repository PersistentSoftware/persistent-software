# Home page options: proof, headline, service cards

Researched 2026-11-14. This expands tasks 2.1, 2.2 and 2.3 of [site-improvements.md](site-improvements.md) into options the owner can choose between. Each section ends with a recommendation; an implementing agent should build the recommended option unless the owner has picked another. The guardrails in the brief still apply: keep the design system and voice, and invent no proof.

## Status

Built on 2026-11-14 on branch `home-proof-headline-cards`: 1A, 1B, 2A and 3C.

- 1B links BeerXchange to its App Store and Google Play listings and uses the owner's description.
- 2A keeps the week-one promise the home page already made. The mismatch with `/mobile` ("two weeks") is still open.
- Not done: the track-record line (1C), cutting Process to three steps, and replacing the "100%" stat. Process gained an `h2` only.

## What the research found

Sites reviewed: Speedshop, Infinite Red (home and React Native page), Tighten, Test Double, Evil Martians, Duckbill, Mechanical Orchard, Lullabot, Hamel Husain, Simple Thread, Profound.

- **Proof comes second, always.** On every consultancy reviewed, the first thing after the hero is evidence: quotes (Infinite Red, Duckbill, Mechanical Orchard), named work (Tighten, Lullabot, Evil Martians) or a client list (Speedshop). None puts services or process ahead of it.
- **Solo and small practices lead with the person's record.** Hamel Husain's first paragraph is "20+ years of experience… Airbnb and GitHub". Speedshop answers "Who is Speedshop?" with one person's credentials and what he maintains.
- **Things you built count as proof.** Evil Martians and Speedshop lean on open source and products at least as much as on client names. That matters here, because this practice is new and has products but no client results to cite.
- **Anonymous attribution is accepted when it is honest.** Mechanical Orchard quotes a "Fortune 20 Automotive Company"; Duckbill quotes "Anonymous, a major domestic airline".
- **Strong headlines name a buyer or a situation.** "We build and rescue web apps and dev teams" (Tighten). "Mainframe modernization, done right" (Mechanical Orchard). Test Double titles every service card with the buyer's question.

## What proof exists today

Everything below is already in the repo or live. Nothing else may be claimed without the owner supplying it.

| Asset | Where it lives now | Limits |
| --- | --- | --- |
| Four LinkedIn recommendations from former managers | `about/components/Recommendations.tsx` | They are from managers, not clients, and three are from 2016 or earlier. Only the Teachley one (May 2024) is recent. |
| Portrait | `public/chris-portrait.jpg`, shown only on `/about` | None. |
| tokenlog, a live product | Home page band, own subdomain | None. Anyone can open it. |
| White-label mobile platform | `/mobile`, six screenshots in `public/white-label/` | Screens use example data, and the page says so. |
| BeerXchange, a React Native app | Blog post and its screenshots | The site never links to a store listing. Owner to confirm it is published. |
| Career record: 20+ years, 8+ leading teams, Teachley, inScoop, Medialets, TxVia | `/about` | "A company acquired by Google" is unnamed. Owner to confirm wording. |
| One detailed blog post | `/blog/react-native-iphone-duo` | One post. |

There are no client logos, client testimonials or client results, and the `/about` FAQ says so plainly. The options below work within that.

## 1. Proof on the home page

### Option 1A: a quote band under the hero

One pull-quote from the Teachley recommendation, the portrait, name, role and the honest context line ("Managed Chris directly at Teachley · May 2024"), linking to `/about#recommendations`.

- For: smallest change; puts a face and a third-party voice within one scroll; uses the most recent and strongest quote.
- Against: one quote from a former employer is thin on its own, and it says nothing about what the practice has built.

### Option 1B: a "running right now" band

Three things a visitor can open today, each a framed screenshot with one line and a link: tokenlog (live), the white-label app (screens, link to `/mobile`), BeerXchange (store link, or the blog post if unpublished). Heading in the house voice, for example "Three things I built that you can open."

- For: proof by demonstration, which is the kind a new practice can actually offer; reuses images already in the repo; absorbs the oversized tokenlog band (brief task 2.4).
- Against: these are own projects, not client work, and the band must not imply otherwise; needs the BeerXchange link from the owner.

### Option 1C: a track-record line

A plain-text row in the Speedshop manner: "Twenty years at Teachley · inScoop · Medialets · TxVia", plus the two real stats (20+ years shipping, 8+ leading teams).

- For: cheap, scannable, and honest as long as it is labelled as employment history and not clients.
- Against: names most buyers will not recognise; depends on the owner confirming the list and the Google-acquisition wording.

### Option 1D: proof inside the hero

Replace the terminal panel with a card holding the portrait and the Teachley quote, so proof is above the fold.

- For: the strongest placement; a one-person practice is selling the person.
- Against: loses the terminal, which is the one piece of character in the design system and doubles as the process summary; makes the hero carry too much on a phone.

### Recommendation: 1A and 1B together, in that order

A slim quote band directly under the hero, then the "running right now" band. Together they answer "who is this?" and "can he build?" before the page asks for anything. Add 1C's line to the quote band once the owner confirms the names. Keep the terminal; skip 1D.

Also replace the "100% of the code is yours" stat in the closing band. It is a promise, not a measurement, and it sits beside two real numbers.

## 2. The headline

Current: "Ship software / faster than ever." with the eyebrow "Personal · Experienced · Fast". Any vendor could say it, and "faster than ever" invites the question "faster than what?".

The service pages already show the house pattern: a plain statement, then the turn in cyan ("The prototype worked. / Now make it scale."). Every option follows it.

| | Headline | Angle | Trade-off |
| --- | --- | --- | --- |
| 2A | One senior engineer. / A working prototype in week one. | The person and the promise | The most specific and the most differentiated. Commits every engagement to week one (see the note below). |
| 2B | Senior engineering, / without the agency. | Positioning against the alternative | Instantly tells a buyer what this is and is not. Says nothing about speed or ownership; the subhead must carry those. |
| 2C | I build and rescue software. / You own every line. | What is done, and the ownership guarantee | Covers both new builds and inherited codebases, as Tighten's does. Less memorable than 2A. |
| 2D | Your product, built by / the person you talk to. | The buyer's experience | Warm and true. Weakest on what is actually delivered. |
| 2E | From first call to working prototype / in one week. | Speed, made concrete | Keeps the current speed theme but makes it checkable. Drops the solo-senior differentiator. |

**Consistency note.** The home page promises a clickable prototype in week one. `/mobile` promises "a signed build on your phone in two weeks". Whichever headline is chosen, the two pages must not contradict each other: either the home claim is scoped to web products in the subhead, or it becomes "in days, not months".

Supporting copy for any option:

- Eyebrow: replace the three adjectives with what the practice does: "Full-stack · Mobile · Migrations · AI search".
- Subhead: keep the current sentence, which is already good, and trim it to the two facts the headline does not state.
- Under the buttons, in the label voice: "30 minutes · you leave with a plan and a number".

### Recommendation: 2A, with 2B as the alternative

2A states the two things no agency can say. If the week-one commitment is too strong to make of every project, use 2B and put the prototype promise in the subhead.

## 3. Home service cards

Current: six cards (full-stack, mobile, payments, integrations, rescue, team support), none clickable. Two services with full pages, migrations and AI search, have no card. Of the six, only "Mobile apps" has a page to link to.

### Option 3A: link what can be linked

Make "Mobile apps" link to `/mobile`, point "Rescue work" at `/migrations`, and add cards for migrations and AI search, giving eight.

- For: an hour of work; fixes the dead ends.
- Against: leaves a grid where some cells are links and some are not, with nothing to tell them apart; eight equal cards flatten the three services the site has invested most in.

### Option 3B: two tiers

Three large cards for the services that have pages (Mobile, Migrations, AI search), each carrying that page's own headline as its hook and an arrow. Below them, one compact row for capabilities without pages: full-stack builds, payments, integrations, team support.

- For: matches how the site is actually built; every large card goes somewhere.
- Against: demotes full-stack builds, which is the core offer and the home page's own subject, to a footnote.

### Option 3C: cards titled by the buyer's situation

Six cards, each a situation in the buyer's words with the service named beneath, and every one a link:

| Card title | Service label | Goes to |
| --- | --- | --- |
| "I have an idea and no engineer." | Product builds | `#process`, later `/work` |
| "Our prototype works. It will not survive real users." | Mobile apps | `/mobile` |
| "We are stuck on a stack nobody wants to touch." | Legacy migrations | `/migrations` |
| "We rank on Google and AI never mentions us." | AI search | `/ai-search` |
| "I inherited a codebase nobody understands." | Rescue work | `/migrations`, or the scoping call |
| "Not sure which of these you are?" | Scoping call | Calendly |

The capabilities that are not situations (Stripe, Salesforce, ClassLink, Clever, team leadership) move to a single mono line beneath the grid, like the stack lists on the service pages.

- For: visitors self-select in a glance; every card has a destination; it is the pattern Test Double uses and it fits this site's voice ("That is a normal Tuesday"); the catch-all card gives undecided visitors a next step.
- Against: the most rewriting; the first card has no dedicated page until `/work` exists; payments and integrations lose their own cards.

### Recommendation: 3C

It fixes the dead ends, surfaces the two missing services, and reads like the rest of the site. If time is short, ship 3A first; it is a strict subset of the component work 3C needs.

Component work for any option: add an optional `href` to `LatticeCell` in `components/ps/lattice.tsx`, rendering the whole cell as a `next/link` with the existing `hover:bg-sunk` and a small arrow, and give the band a real `h2`.

## How the three fit together

Recommended order for the home page once all three land:

1. Hero: new headline (2A), eyebrow, reassurance line, terminal kept.
2. Quote band (1A).
3. Situation cards (3C), with the capability line.
4. "Running right now" band (1B), replacing the long tokenlog section.
5. Process, cut to the three steps that differentiate.
6. Closing call to action, with only measured stats.

## Owner inputs these options need

| Needed for | Question |
| --- | --- |
| 1C | Which employers may be named on the home page, and what is the exact wording for the Google acquisition? |
| 2A | Can every engagement promise a working prototype in week one, or only web builds? |
| Closing band | One real number to replace the "100%" stat (apps shipped, years on React Native, or similar). |

Options 1A, 2B and 3C need no input and can be built immediately.
