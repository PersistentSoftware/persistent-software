# Site evaluation and improvement brief

Evaluated 2026-11-14 against the local dev build (`main` at `e3871f4`, before the starter-app removal recorded in 1.2), at desktop (1024px) and phone (375px) widths. This file is a work order: an agent should be able to pick up any task below without the conversation that produced it.

## How to use this brief

- Tasks are grouped into three tiers. Work top to bottom; within a tier, tasks are independent unless a dependency is named.
- Tasks marked **[needs owner]** depend on facts or a decision only Chris can supply. They are collected in [Owner inputs](#owner-inputs). Do not invent the missing facts and do not start those tasks until the input exists. Everything else can proceed.
- Run the site with `pnpm dev --port 3100` (or the `persistent-software-dev` launch config). Verify each change in the browser at 375px and at 1024px or wider.
- When a page's content changes, update its `lastModified` in `app/sitemap.ts` in the same change, and update `public/llms.txt` if a page is added, removed or re-described.

## Guardrails

1. **Keep the design system.** It is documented in the comments of `app/globals.css` and `components/ps/*`: graphite for everything, cyan ("signal") rationed to one primary element per view, paper and ink bands only, hairline lattices instead of bordered cards, mono uppercase labels, no glows, lifts or coloured shadows. New components follow these rules. Nothing here asks for a restyle.
2. **Keep the voice.** First person, concrete, dry, short sentences ("That is a normal Tuesday"). No superlatives, no agency filler.
3. **No invented proof.** No made-up clients, logos, testimonials, metrics or case studies. The `/ai-search` page promises "no fake reviews"; the site has to meet its own standard. If a number has no source, soften it or cut it.
4. **Keep the SEO and entity work.** JSON-LD in `lib/entity.ts`, the disambiguation text, `llms.txt`, canonicals, generated OG images and IndexNow are already better than most comparable sites. Extend them; do not regress them.

## What already works

- A distinctive, coherent visual system that reads as "engineered", consistently applied across the marketing pages.
- Service pages (`/mobile`, `/migrations`, `/ai-search`) with sharp, specific headlines and unusually substantive copy. "You rank on Google. AI has never heard of you." is the strongest line on the site.
- Honest caveats (AI answers vary, no guarantee of recommendation, timelines are typical) that build trust.
- A low-risk offer on every service page: a review, assessment or audit whose findings the buyer keeps.
- No horizontal overflow at 375px on any page, and no console errors.

## Comparable sites

Home pages reviewed on 2026-11-14. What matters is the pattern, not the styling.

| Site | What it is | Pattern worth borrowing |
| --- | --- | --- |
| [speedshop.co](https://www.speedshop.co) | Rails performance consultancy led by one named expert | One-sentence positioning, then "Who is Speedshop?" with the person's credentials, then a long plain-text "Trusted by" list. Proof of authority through books, open source and a blog. |
| [infinite.red](https://infinite.red) | React Native agency | Named case studies and four attributed client quotes on the home page, directly under the hero. One contact CTA repeated. |
| [tighten.com](https://tighten.com) | Laravel consultancy | "We build and rescue web apps and dev teams" as the headline; a Results section of outcome-led case studies; a short contact form on the home page itself; a newsletter signup beside the blog. |
| [testdouble.com](https://testdouble.com) | Software consultancy | Each service card is a buyer's question ("Thinking about a big rewrite?") and links to its own page. A catch-all "Not sure what you need?" card. |
| [evilmartians.com](https://evilmartians.com) | Product consultancy for devtools | A named niche in the first line, outcome numbers attached to named clients, open source as proof, an FAQ written for AI answers, and three ways to make contact. |
| [duckbillhq.com](https://www.duckbillhq.com) | Cloud cost consultancy | Short pull-quotes from named customers, including honest "Anonymous, a major airline" attributions where the client cannot be named. |
| [tryprofound.com](https://www.tryprofound.com) | AI search visibility platform | Shows the product's output (visibility score, citations) instead of describing it. |

**Where this site trails them**

1. **Proof is off the home page.** Every comparable puts testimonials, named work or a client list within a scroll of the hero. Here the four recommendations and the portrait live only on `/about`, and there is no work page at all.
2. **The home headline is the weakest on the site.** "Ship software faster than ever." could belong to any vendor. Comparables say who they are for and what they do in the first line.
3. **Home services are dead ends.** Six cards, none clickable. Comparables link every service to a page.
4. **Contact is Calendly or `mailto:` only.** Tighten and Evil Martians offer a short form for buyers who are not ready for a call.
5. **No engagement or pricing guidance.** A solo practice is asked "what does this cost and how do we work together?" first. The only pricing on the site is a leftover template page.
6. **One blog post.** Comparables use writing, open source and talks as their main authority signal.

## Tier 1: fix first

These are defects or trust risks, not matters of taste.

### 1.1 Marketing pages do not prerender — done 2026-11-14

The root layout read the session cookie on every request, so no marketing page was static. Fixed as a side effect of 1.2: `pnpm build` now reports every route as static (○) or SSG (●). Keep it that way; nothing in `app/layout.tsx` or `app/(dashboard)/layout.tsx` should read cookies, headers or a database.

### 1.2 Starter-template leftovers — done 2026-11-14

The owner chose removal. `/sign-in`, `/sign-up`, `/pricing`, `/dashboard/*`, the API routes, `lib/db`, `lib/auth`, `lib/payments`, `proxy.ts`, the Drizzle config and their dependencies are deleted, and `next.config.ts` permanently redirects the old URLs to `/`. The site now has no server-side state, so task 2.7 (contact form) must bring its own delivery mechanism and its own validation dependency.

Two follow-ups remain:

- The route group is still named `app/(dashboard)`. Rename it to `app/(site)`; it changes no URLs.
- The Vercel project may still hold `POSTGRES_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `AUTH_SECRET` and `BASE_URL`, and Stripe may still have a webhook endpoint pointing at `/api/stripe/webhook`. These are the owner's to remove.

### 1.3 Unsourced numbers on `/migrations` **[needs owner]**

- The hero stats ("6–10x faster", "70–85% lower migration cost", "4x better p95 latency") and the before/after figures in `Performance.tsx` are attributed to "a Java-to-Python engagement".
- `app/(dashboard)/migrations/components/CaseStudy.tsx` is a complete, detailed case study ($1.4M quote to ~$180K, 11 weeks, 90 endpoints deleted) that is **not imported anywhere**. `migrations/page.tsx` renders Hero, Economics, Performance, Approach and CTA only.

This page has the site's most compelling story and it is switched off, while its numbers remain as bare claims. Resolve with owner input B:

- If the engagement is real and can be published (anonymised is fine, as Duckbill does): render `CaseStudy` between `Performance` and `Approach`, state the anonymisation plainly, and point the hero stats at it ("from the engagement below").
- If it is illustrative: either delete `CaseStudy.tsx` and relabel every figure as a modelled example, or rewrite it explicitly as "what a typical engagement looks like". Do not present it as a past client result.

**Done when:** every figure on `/migrations` is either traceable to a described engagement or labelled as an estimate.

### 1.4 Accessibility defects

- `app/layout.tsx` sets `viewport.maximumScale = 1`, which blocks pinch zoom (WCAG 1.4.4). Remove it.
- `components/ps/terminal.tsx` server-renders every line at `opacity-0` and reveals them with a timer. Without JavaScript the hero panel is empty, and the animation ignores `prefers-reduced-motion`. Render the lines visible by default and animate only as an enhancement (CSS animation with staggered `animation-delay`, wrapped in a `prefers-reduced-motion: no-preference` media query, is enough and lets the component become a server component).
- Home page heading order skips a level: the Services and Process bands open with a mono label and go straight from `h1` to `h3`. Give each band a real `h2` (see 2.3; a visually quiet `h2` is fine, a missing one is not).
- The header logo image has `alt=""` beside the wordmark, which is correct. Leave it.

### 1.5 Small correctness items

- `public/ps-logo.png` is 1.06 MB and is the `logo` in the Organization JSON-LD. Replace it with an SVG or a PNG under 50 KB at 512px.
- Contact details are hard-coded in 21 places while `lib/entity.ts` already exports `BOOKING_URL`, `CONTACT_EMAIL` and `TOKENLOG_URL`. Replace the literals with the constants.
- CTA wording drifts: "Book a call" (2), "Book a scoping call" (1), "Schedule a call" (6), plus "Get in touch" used both for `mailto:` buttons and, on `/about`, as the primary button ahead of the call. Standardise: primary is always the Calendly action and always cyan; use "Book a scoping call" everywhere except the page-specific hero variants ("Scope your app", "Scope your migration", "Get an AI visibility audit"), which should stay. Secondary is always "Email instead".
- `app/not-found.tsx` uses stock 404 copy. Rewrite in the site voice and link to the three service pages and the blog.
- The footer (`components/ui/footer.tsx`) omits tokenlog, LinkedIn and GitHub, and uses plain `<a>` for internal routes. Add the profile links (they are already in `lib/entity.ts`) and use `next/link`.
- The tokenlog nav item opens a new tab with no indication. Add a small external-link glyph and `aria-label="tokenlog (opens in a new tab)"`.

## Tier 2: conversion and content

Tasks 2.1, 2.2 and 2.3 are expanded into options with a recommendation each in [home-page-options.md](home-page-options.md). Where the two files differ, that file wins.

### 2.1 Rewrite the home hero

File: `app/(dashboard)/page.tsx`.

- Replace "Ship software faster than ever." with a headline that carries the actual differentiator: one senior engineer, a working prototype in week one, and the client owns the code. The About page's "Twenty years of shipping, one person to talk to." is already better than the home headline; the service pages' two-line pattern (plain claim, then the turn in cyan) is the house style to follow. Offer the owner three candidates in the PR description, for example:
  - "One senior engineer. / A working prototype in week one."
  - "Your product, built by the person you talk to."
  - "Twenty years of shipping. / A prototype you can click this week."
- Replace the eyebrow "Personal · Experienced · Fast" (three adjectives) with what the practice does: "Full-stack · Mobile · Migrations · AI search".
- Add a line of reassurance under the buttons, in the label voice: "30 minutes · you leave with a plan and a number".
- Put a face in the hero or directly under it. A small portrait with name and role (reuse `components/ps/figure.tsx` and `/chris-portrait.jpg`) does more for a one-person practice than the terminal alone. Keep the terminal; it works as the process summary.

### 2.2 Bring proof onto the home page

Directly below the hero, add a proof band built only from things that are true today:

- One pull-quote from the Teachley recommendation (it is the most recent and names efficiency and reliability), with name, title and a link to `/about#recommendations`. Lift the data out of `about/components/Recommendations.tsx` into a shared module so both pages read the same source.
- A plain text row of where the experience comes from, in the Speedshop "Trusted by" manner, using only employers and projects already named on `/about` (Teachley, inScoop, Medialets, TxVia, BeerXchange). Label it accurately, e.g. "Twenty years at", not "Clients". **[needs owner]** for the exact list and for the precise wording of the "a company acquired by Google" claim on `/about`, which currently names no company.
- Move the three stats from the closing band up into this band and replace the "100% of the code is yours" stat, which is a promise rather than a measurement, with a real number (apps shipped to the stores, years on React Native, or similar). **[needs owner]**

### 2.3 Make home services navigable and specific

File: `app/(dashboard)/components/Services.tsx`, `components/ps/lattice.tsx`.

- Add an `href` to `LatticeCell` so a whole cell can be a link, with the existing `hover:bg-sunk` plus a small arrow as the affordance.
- Link "Mobile apps" to `/mobile` and "Rescue work" to `/migrations`. Add cells for the two services that have pages but no home card: "Legacy migrations" and "AI search visibility". Eight cells in a 4×2 or the existing 3-column grid both work.
- Give the band a real heading. Following Test Double, consider phrasing cell titles as the buyer's situation ("Inherited a codebase nobody understands?") with the service name as the label above.
- Give the Process band a heading too ("How a build runs" as an `h2`, not only a label). The terminal in the hero and the six-step list say the same thing twice; cut the list to the three steps that differentiate (prototype in week one, weekly demos, you own the codebase) or keep six and drop the duplication from the closing CTA copy.

### 2.4 Rebalance the home page around the practice

- The tokenlog band (`components/Product.tsx`) is the longest section on a page whose job is to sell services, and it sends visitors to another site. Cut it to a compact band: name, one sentence, the flow diagram, one button, and one line that frames it as proof ("Built and run by the same person who would build yours"). The four feature cells and four provider cells belong on tokenlog's own site.
- The "What is Persistent Software?" band (`components/Practice.tsx`) spends half its length on the disambiguation paragraph. That text is for crawlers and is already in JSON-LD, `llms.txt` and the `/about` FAQ. Keep the first paragraph on the home page and drop the disambiguation to a single small-print sentence, or leave it to `/about`.

### 2.5 Add a work page

Create `/work` and add it to the nav, sitemap and `llms.txt`. Model it on Tighten's Results page: each entry is a short outcome-led story with a screenshot, the stack, and what Chris did. Candidates that exist today:

- BeerXchange (the React Native app from the blog post; screenshots are already in `public/blog/react-native-iphone-duo/`).
- tokenlog (live product; move the detail trimmed from the home page here).
- The white-label mobile platform (screenshots in `public/white-label/`).
- Teachley (role, scale, what was built). **[needs owner]** for what can be said publicly.
- The migration engagement, if task 1.3 confirms it is publishable.

Add `CreativeWork` or `SoftwareApplication` JSON-LD per entry, following the pattern in `lib/entity.ts`. With `/work` in the nav there are seven items; move tokenlog out of the header into the work page and footer to stay at six.

### 2.6 Say how engagements work and what they cost **[needs owner]**

Add an "Engagements" section (home page, above the closing CTA, and summarised on each service page). Three rows in the existing step-list style are enough: fixed-scope build, monthly retainer, and the paid or free assessment each service page already offers. For each: what it is, typical length, and a starting price or range. Publishing even a floor ("Builds start at $X") filters enquiries and is the most common question a solo practice gets. If the owner prefers not to publish prices, state the model and typical duration and say that the scoping call ends with a fixed quote.

Add two matching entries to the `/about` FAQ (and its FAQPage JSON-LD): "How much does a project cost?" and "What happens if you are unavailable?" The second is the standard objection to hiring one person; the "you own the source, accounts and pipeline" answer already exists in the copy and should be stated there directly.

### 2.7 Add a contact route that is not a call

Create `/contact` with a short form (name, email, what you are building, rough timeline) alongside the Calendly link and email address. Point every "Email instead" button at it. Implementation is the owner's choice (decision C): a server action that sends mail through a transactional provider, or a hosted form endpoint. Include a honeypot field, server-side validation (add `zod` back for it), and a clear success state. Do not add a CAPTCHA unless spam appears.

### 2.8 Shorten `/mobile`

The page is about 18,500px tall at 375px, roughly twice `/migrations`, because it is two pages in one: the prototype-to-production rebuild and the white-label product (`WhiteLabel.tsx` alone is 293 lines with its own stats, comparison, dashboard and module list).

- Split white-label into `/mobile/white-label` with its own metadata, OG image, sitemap entry and `llms.txt` line. Leave a short teaser band on `/mobile` that links to it.
- On the remaining page, the six-cell "how I work" grid after the timeline repeats points already made in the rebuild table; cut it to the three strongest.
- Add a sticky in-page section nav on `lg` and up for `/mobile`, `/migrations` and `/ai-search` (mono labels, current section underlined in signal), since all three are long single-column reads.

### 2.9 About page

- The hero's primary button is "Get in touch" (`mailto:`) with the call secondary, the reverse of every other page. Fix under 1.5.
- "I've led engineering at an education company, built side projects" undersells. Name Teachley in the hero and state the strongest fact first.
- The Services grid duplicates the home page's. Replace it with a link to the home services band or the new `/work` page.
- Add links out on the things named: Teachley, BeerXchange (store listings), LinkedIn, GitHub. Named, linked entities help both readers and the AI-search case the site itself makes.

### 2.10 Blog

- One post makes the blog look abandoned. Until there are three or more, drop "Blog" from the header (keep it in the footer) or rename the index to "Notes" and show it as a section on the home page.
- Each service page should link to its related post, and each post already links back via `related`; add a "Related writing" row to the service-page CTAs that reads from `lib/blog.ts`.
- Add an RSS feed at `/blog/rss.xml` and reference it in the root metadata `alternates`.
- Post ideas that match what the service pages already claim, each of which would double as proof: an AI-visibility audit of this site's own name collision with Persistent Systems (before and after, with the prompts); how tokenlog encrypts provider keys; a worked characterization-test harness for a legacy endpoint; rebuilding a generated prototype screen in React Native, with the diff. **[needs owner]** to write or approve drafts; an agent may outline but should not publish unreviewed first-person claims.

## Tier 3: polish

- **Sticky header.** The header scrolls away on pages up to 18,000px long. Make it sticky with the existing hairline border so "Book a call" stays reachable. No blur, no shadow.
- **Header CTA weight.** The header button is graphite and `sm`; the hero button below it is cyan and `lg`. Keep graphite (signal is rationed) but confirm the header button meets a 44px touch target on phones; `h-8` does not.
- **Tables on phones.** The comparison tables on `/mobile`, `/migrations` and `/ai-search` stack into long columns at 375px. Check each for legibility; where the before/after pairing is lost, render each row as a small two-line "before → after" block as `CaseStudy.tsx` does.
- **Struck-through "before" values.** The traditional-rewrite column on `/migrations` uses `line-through` on light grey text, which is hard to read. Keep the muted colour and drop the strike, or strike only on `md` and up.
- **Closing CTA band.** It is the same component pattern on every page with different copy. Extract one `ClosingCTA` in `components/ps/` that takes a heading, body, optional deliverables list and optional stats, and reads the URLs from `lib/entity.ts`.
- **Root metadata.** `keywords` in `app/layout.tsx` is a legacy stack list ("saas, tailwindcss"). Search engines ignore it; remove it or leave only page-level ones. Add a `title.template` ("%s | Persistent Software") so page titles stop repeating the suffix by hand.
- **Service JSON-LD.** Add a `Service` node per service page (provider is the Organization `@id`) and `BreadcrumbList` on blog posts and any nested page from 2.8.
- **Dark mode tokens.** `globals.css` defines a `.dark` theme that the marketing pages never use. Either wire it up later as its own project or leave it; do not half-apply it.

## Owner inputs

Collect these before starting the tasks that reference them. Nothing else in the brief is blocked.

| Ref | Question | Blocks |
| --- | --- | --- |
| B | Is the Java-to-Python migration a real engagement, and can it be published in anonymised form? What is the source of the 6–10x and 70–85% figures? | 1.3, one entry in 2.5 |
| C | How should the contact form deliver messages (mail provider or hosted endpoint)? | 2.7 |
| D | Engagement models and any prices or ranges that may be published. | 2.6 |
| E | Which employers and projects may be named on the home page, the exact "acquired by Google" wording, and one or two real numbers for the stats row. | 2.2, 2.5, 2.9 |
| F | Preferred home headline from the candidates in 2.1, or a rewrite. | final copy in 2.1 |

## Suggested order of pull requests

1. Tier 1 items that need no input: 1.4, 1.5 and the route-group rename from 1.2.
2. Home page: 2.1, 2.3, 2.4, and the parts of 2.2 that use existing `/about` content.
3. `/mobile` split and section nav: 2.8.
4. `/contact` (2.7) and `/work` (2.5), once inputs C and E arrive.
5. 1.3 and 2.6 as soon as inputs B and D arrive. These are the highest-value items in the brief and are only sequenced last because they wait on answers.
6. Tier 3.

## Verification for every pull request

- `pnpm build` passes, and marketing routes remain static once 1.1 has landed.
- Each changed page checked at 375px and 1024px or wider: no horizontal scroll, one `h1`, no skipped heading levels, at most one cyan primary action per view.
- Keyboard pass: every new link and control reachable, with the cyan focus outline visible.
- JSON-LD on changed pages validates, and `app/sitemap.ts` and `public/llms.txt` reflect any added, removed or re-dated page.
