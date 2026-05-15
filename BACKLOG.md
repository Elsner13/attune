# BACKLOG.md — Sam Elsner / Resonance Website

Sequenced build queue. Pull the top unstarted item. Read AGENTS.md before every session. When you finish an item, move it to `## Shipped` at the bottom with PR link and date.

Each item lists: **purpose**, **routes**, **sections**, **brand cues**, **acceptance criteria**, **dependencies**.

**Brand context (read before pulling any item):** Sam Elsner is the umbrella personal brand. **Resonance** is his single offer, expressed as three tiers: a free Substack newsletter, an application-only group **Cohort**, and application-only 1:1 **mentorship**. *Attune* and *Foundations* are retired brands — do not build pages for them, and remove references to them if you find them in the existing codebase.

---

## Active queue

### 1. Homepage (`/`) — Sam Elsner umbrella

**Status:** First task. See `FIRST_TASK.md` for the full brief.

**Purpose:** One scrollable surface that introduces Sam, presents the three Resonance tiers (Newsletter / Cohort / Mentorship), and routes visitors into the funnel. Sets the visual system for every page that follows.

**Acceptance:** See FIRST_TASK.md.

---

### 2. Resonance sales page (`/resonance`)

**Purpose:** The flagship sales surface. Converts visitors into newsletter subscribers, Cohort applicants, and mentorship clients. This is the single highest-value page on the site — protect it.

**Sections:**
- **Hero** — single Fraunces-italic sentence naming what Resonance is (working draft: *"Resonance is the field where signal meets sovereignty."* — Sam will provide final copy).
- **The newsletter (free tier)** — what it is, weekly cadence, three sample issue titles with one-line teasers, Substack subscribe widget (NOT a custom form). Frame this as the entry tier — "start here."
- **The Cohort (group tier)** — what it is, who it's for, what's included, number of spots, doors-open/close cadence, application CTA. Primary money offer.
- **The mentorship (1:1 tier)** — application-only, brief description, who it's for, link to the application. Highest-commitment tier.
- **Sam's positioning** — 2-paragraph "who is the operator" block (ecological psychologist, 2x NCAA discus champion turned creator-educator, lineage thinkers).
- **Testimonials** — placeholder slots for 3–6 once Sam supplies them; design the component but leave content as `TODO`.
- **Final CTA** — Substack subscribe + Cohort application stacked.

**Brand cues:**
- Hero typography: Fraunces italic 80px desktop, 48px mobile.
- One Cosmic Crimson element per visible scroll position. CTAs use it.
- The three tiers (Newsletter / Cohort / Mentorship) are visually distinct sections with rising commitment — design the rhythm so the eye walks down the ladder.
- Long-form rhythm: short paragraphs, generous Void space between sections (96px vertical minimum on desktop).
- A single 1px Slate divider between major sections — never a colored block break.

**Acceptance:**
- Substack subscribe iframe loads cleanly (no layout shift).
- Cohort CTA links to the Tally/Typeform URL Sam provides (placeholder `#` link until Sam supplies; flag in PR).
- Mentorship CTA links to a separate Tally/Typeform application URL (placeholder `#` until Sam supplies).
- Mobile-first: page reads top-to-bottom on a 375px viewport with no horizontal scroll.
- Final hero passes the **Stranger Test** — a first-time visitor with zero context understands what Resonance is in 3 seconds.

**Dependencies:**
- Hero copy from Sam (block the page on this; do not ship placeholder hero copy long-term).
- Cohort application URL from Sam.
- Mentorship application URL from Sam.
- Substack URL / embed code from Sam.

---

### 3. About Sam (`/about`)

**Purpose:** The human anchor. Visitors who want to know who is behind the writing land here.

**Sections:**
- Photo + Fraunces italic intro sentence.
- The arc — 4–6 paragraph narrative (athletic background → ecological psychology → coaching → creator). Sam supplies the working draft; you format and lay it out, don't generate the prose.
- The thinkers — visual list of intellectual lineage (Gibson, Bernstein, Davids, Gray, Marcus Aurelius, Waddington, Epictetus, Csikszentmihalyi) with one-line "why they matter" notes.
- The current work — Resonance (Newsletter / Cohort / Mentorship) as a recap with deep links to `/resonance`.
- Contact — single CTA: subscribe to the newsletter (not an email contact form).

**Acceptance:** narrative is Sam's actual words, not paraphrased. If you need to write filler, ask Sam first.

**Dependencies:** Sam's narrative draft.

---

### 4. Lead-magnet landing page template (`/lp/[slug]`)

**Purpose:** Reusable landing-page route for every Resonance lead magnet. The first lead magnet (TBD — candidates: four-tier zodiac decoder, Hermes morning reading template, affordance-landscape audit, constraint-curriculum builder, "Luck Is a Read" perception primer) gets shipped first; subsequent magnets reuse the template.

**Sections:**
- Hero — Fraunces italic, names the magnet and the transformation.
- One-paragraph promise.
- What's inside — 3–5 bullets describing the actual content of the magnet.
- Email capture CTA — routes to the Stan.Store product page for the specific magnet. **Do not build a custom email-capture form.**
- Below the fold — one short paragraph framing how this magnet fits Resonance + link to `/resonance`.

**Brand cues:**
- Single hero block above the fold — no nav distraction. Logo top-left links home, that's it.
- One Cosmic Crimson CTA. That's the entire affordance.

**Acceptance:**
- `[slug]` route works with at least one example slug.
- Stan.Store link opens in a new tab.
- Page loads in under 1.5s on a 3G simulation.

**Dependencies:**
- Sam picks the first magnet from the bench.
- Sam sets up the Stan.Store product and provides the URL.

---

### 5. Long-form archive (`/read` and `/read/[slug]`) — DEFERRED, decide before scoping

Two paths:

**A. External — link out to Substack.** `/read` is a single page that redirects or links to the Resonance Substack URL. Zero ongoing maintenance.

**B. Internal — MDX-driven archive in the repo.** `/read` lists essays, `/read/[slug]` renders MDX content. Higher quality typography control, costs ongoing publishing friction (Sam writes in two places).

**Recommendation:** ship **A** at launch. Revisit **B** once Sam has 25+ Substack posts and a clear SEO motivation.

**Acceptance:** decide with Sam before pulling this item.

---

### 6. Galactic Reading page (`/galactic-reading`) — FUTURE OFFER

**Purpose:** Eventually a paid reading offer. For now, optionally a lead magnet (free first reading in exchange for email).

**Status:** Hold until Sam green-lights productizing readings. Do not build until ticketed explicitly.

---

### 7. Site-wide components (build as needed during the items above)

These get built in service of the page items, not as a standalone sprint. Components live in `app/components/` or `components/` per Next.js convention.

- `<NavBar />` — minimal top nav, links to Resonance / About / Newsletter (Substack). Sticky on scroll, Void background, Bone text, Crimson active state.
- `<Footer />` — single row, copyright + Resonance / About / Substack links + social (X primary, Threads, Instagram).
- `<Hero />` — Fraunces italic single-sentence hero with optional subtitle slot.
- `<SectionDivider />` — 1px Slate, 96–128px vertical space.
- `<CTAButton variant="primary | secondary" />` — Crimson primary, Onyx-outlined secondary.
- `<SubstackEmbed />` — wraps the Substack iframe with consistent sizing.
- `<TestimonialCard />` — placeholder testimonial block, accepts quote + attribution + optional photo.
- `<FAQ />` — accordion-style, keyboard-accessible, Bone text on Void.

---

### 8. Cleanup: remove retired-brand references from the codebase

**Purpose:** *Attune* and *Foundations* are retired. The repo carries legacy references that need to be cleaned up.

**Scope:**
- Grep the repo for `Attune`, `attune` (in copy/UI strings only — leave the repo directory name alone), `Foundations`, `foundations` (in copy/UI strings).
- Remove or replace each reference with the equivalent Resonance / Sam Elsner framing.
- Remove any `/foundations` or `/attune` routes if they exist.
- Update package.json `name` field, README, and any meta tags / OG images that say "Attune."

**Acceptance:** a `grep -ri "attune\|foundations" --include="*.tsx" --include="*.ts" --include="*.md" --include="*.json"` returns only:
- This BACKLOG.md (the historical reference).
- The repo directory name itself (legacy, leave alone).
- Migration / git history (untouched).

**Dependencies:** none — can be done any time, but easiest after the homepage and `/resonance` are shipped so you have a clear replacement.

---

## Shipped

*(Move completed items here with date and PR link.)*

---

## Operating notes for the agent

- Pull only one item at a time. Ship it. Then pull the next.
- If you discover a dependency Sam hasn't supplied (e.g., a copy block or a URL), flag it in your PR, stub the placeholder, and move to the next item rather than waiting.
- If a backlog item conflicts with AGENTS.md, AGENTS.md wins. Ask Sam before deviating.
- New backlog items get appended to the bottom of the active queue unless Sam explicitly prioritizes them above existing items.
