# FIRST_TASK.md — Build the Sam Elsner homepage

This is your end-to-end first ticket. Complete it before pulling anything else from BACKLOG.md. Read AGENTS.md first.

The goal of this task is twofold:

1. Ship a beautiful, on-brand homepage.
2. Establish the full design-token system in code (Tailwind theme, fonts, base components) so every page that follows inherits the same foundation.

---

## 1. Pre-flight (do this before writing components)

1. **Read `AGENTS.md` and `BACKLOG.md` end-to-end.** Confirm you understand the brand architecture (Sam Elsner umbrella → Resonance, expressed as three tiers: Newsletter / Cohort / Mentorship), the design law (8px grid, one Cosmic Crimson element per view, dark-mode-only), and the voice rules. Confirm you understand that *Attune* and *Foundations* are retired brands.
2. **Audit the existing repo.** Run `ls`, look at `package.json`, check Next.js version, current routing, any existing components. Report back to Sam in your PR description what you found. **Do not rip out existing scaffolding** — extend it.
3. **Wire the design tokens into Tailwind.** Open `tailwind.config.ts` (or create it if missing). Add:
   - Custom colors: `void`, `onyx`, `crimson`, `ember`, `bone`, `ash`, `slate`.
   - Custom font families: `display` (Fraunces), `sans` (DM Sans), `mono` (Geist Mono).
   - Extend spacing to enforce 8px increments where Tailwind defaults don't already cover (Tailwind's default `4` = 16px, `6` = 24px, etc. — verify the scale aligns with the brand law).
4. **Wire fonts via `next/font`.** Self-hosted, no Google Fonts CDN. Fraunces (italic 400, 500, 600), DM Sans (400, 500), Geist Mono (400). Apply them globally via the root layout.
5. **Set the root background to Void and root text to Bone.** This is the global theme. Every page inherits it.

---

## 2. Build the homepage (`/`)

The homepage is one continuous scroll surface, mobile-first, with the following sections in order:

### Section A — Hero (above the fold)

- Single Fraunces-italic sentence centered, 80px desktop / 48px mobile.
- Working hero copy (Sam will replace, but ship with this as placeholder): *"I write about how to attune to the affordance landscape — and act."*
- Below the hero sentence, one DM Sans subtitle line, 18px, Ash color, 24px below the hero: *"Resonance — newsletter, Cohort, mentorship. From an ecological psychologist who used to throw discus."*
- Two CTAs stacked on mobile, side-by-side on desktop:
  - Primary: **"Read the newsletter"** → links to `/resonance` (Crimson background).
  - Secondary: **"About me"** → links to `/about` (Onyx outlined, Bone text).
- 100vh height on desktop; on mobile, aim for ~85vh so the next section peeks above the fold.

### Section B — The three tiers of Resonance

- Section heading, Fraunces italic, 40px desktop / 32px mobile: *"Three ways in."*
- Sub-heading, DM Sans 16px Ash, 16px below the heading: *"One offer. Three tiers of commitment."*
- Three cards in a single row on desktop (768px+), stacked on mobile (in this order — the ladder rises top-to-bottom on mobile, left-to-right on desktop).
- Each card: Onyx background, 24px padding, 1px Slate border, no border-radius (or 2px max).
- Card structure:
  - Tier label (Geist Mono, 12px, uppercase, Ash) — e.g. "TIER 01 — FREE".
  - Title in Fraunces italic, 28px, Bone.
  - One-sentence description in DM Sans, 16px, Ash.
  - Single text link at the bottom in Bone, underlined on hover, ending with a Crimson arrow `→`.

Card content:

| Card | Tier label | Title | Description | Link |
|---|---|---|---|---|
| 1 | TIER 01 — FREE | **The Newsletter** | *Weekly Resonance. The signal in the noise. Hosted on Substack.* | "Subscribe →" → `/resonance#newsletter` |
| 2 | TIER 02 — COHORT | **The Cohort** | *Application-only group program. Twelve weeks. Limited spots.* | "Apply →" → `/resonance#cohort` |
| 3 | TIER 03 — 1:1 | **Mentorship** | *Application-only. One operator at a time.* | "Apply →" → `/resonance#mentorship` |

**Cosmic Crimson rule for this section:** the only crimson element visible is the arrow inside **The Cohort** card (the primary money offer). The Newsletter and Mentorship arrows are Bone, not Crimson.

### Section C — The work

A single paragraph block, max-width 64ch, centered, 18px DM Sans, Bone on Void.

> *I'm Sam Elsner. I was a 2x NCAA discus champion and a 6x All-American. Then I became an ecological psychologist and started teaching what I learned about how skill emerges — through perception, through constraints, through the friction that produces growth.*
>
> *Now I write a weekly newsletter. I run a small Cohort. I take on a few 1:1 mentorship clients. Everything I make sits inside one frame: you cannot learn what you do not risk. The work is to attune your perception until the affordances of your life become visible — then to act.*

(Sam will refine. Ship as-is for now.)

Single section divider below.

### Section D — Latest from the newsletter

- Section heading, Fraunces italic, 40px desktop / 32px mobile: *"Latest writing."*
- Three placeholder cards (or links — your call) showing the three most recent Resonance posts. Until Substack is integrated, stub these with `TODO: pull latest from Substack RSS` and use lorem-ipsum titles plus `#` links. Flag this in the PR.
- Single CTA below: **"Read the full newsletter on Substack →"** → links to the Substack URL (placeholder `#` if Sam hasn't supplied; flag in PR).

### Section E — Final CTA

- Centered block, Onyx background, 48px padding, full-width up to 1280px max.
- Fraunces italic heading, 32px: *"Subscribe to Resonance."*
- DM Sans body, 16px Ash, one sentence: *"Weekly. Free. The signal in the noise."*
- Substack subscribe embed (placeholder `<div>` with `TODO` comment if embed URL not yet supplied).

### Section F — Footer

- Single row on desktop, stacked on mobile.
- Left: `Sam Elsner` in Fraunces italic, 18px.
- Center: links to Resonance / About / Substack — DM Sans 14px Bone, hover Crimson.
- Right: social icons — X (`@samelsner0`), Threads, Instagram. Use simple SVG icons or `lucide-react`. Each 20px, Bone, hover Crimson.
- Bottom: `© 2026 Sam Elsner` in Ash 12px Geist Mono.

---

## 3. Acceptance criteria

Before opening the PR, verify all of the following:

- [ ] `tailwind.config.ts` has the seven brand color tokens and three font family tokens.
- [ ] `next/font` is wired for Fraunces, DM Sans, and Geist Mono — no external font CDN calls in the rendered HTML (check the Network tab).
- [ ] The homepage renders at 375px (mobile), 768px (tablet), 1280px (desktop) with no horizontal scroll and no broken layouts.
- [ ] No hardcoded hex values anywhere in component files — everything routes through the Tailwind tokens.
- [ ] No hardcoded pixel spacing off the 8px grid.
- [ ] Exactly **one** Cosmic Crimson element is visible in each scroll position on desktop. Walk the page and confirm.
- [ ] Keyboard navigation: Tab through every interactive element. No traps, focus rings visible.
- [ ] Lighthouse score on the Vercel preview is **≥ 90 on Performance** and **≥ 90 on Accessibility**.
- [ ] No console errors, no build warnings.
- [ ] All `TODO` placeholders are flagged in the PR description with a list of what Sam needs to supply.

---

## 4. PR description template

When you open the PR, use this template:

```
## Homepage build — first ticket

### What this ships
- Tailwind theme wired with brand tokens (void, onyx, crimson, ember, bone, ash, slate).
- next/font wired for Fraunces, DM Sans, Geist Mono.
- Homepage at `/` with six sections per FIRST_TASK.md.
- Base components: NavBar, Footer, Hero, CTAButton, SectionDivider.

### What I found in the existing repo
- (audit report from pre-flight step 2)

### Open follow-ups / TODOs
- [ ] Substack subscribe embed URL — needed for Section E
- [ ] Substack RSS or recent post URLs — needed for Section D
- [ ] Final hero copy — placeholder shipped, awaiting Sam's revision
- [ ] About page narrative — Sam to supply for /about (next backlog item)

### How to test
- Local: `pnpm dev` (or `npm run dev`), visit http://localhost:3000.
- Preview: see Vercel preview URL above.
- Test viewports: 375 / 768 / 1280.
- Test keyboard nav: Tab through, confirm focus states.

### Lighthouse
- Performance: __
- Accessibility: __
- Best Practices: __
- SEO: __
```

---

## 5. When you're done

1. Open the PR. Tag Sam for review.
2. Move this item to the `## Shipped` section of BACKLOG.md with the PR link and today's date.
3. Update task #1 status to completed.
4. Pull the next item: **Resonance sales page (`/resonance`)** from BACKLOG.md item #2. This is the highest-value page on the site — read AGENTS.md again before starting.
5. Wait for Sam's PR review and any requested changes before pulling further items.

---

## 6. If you get stuck

- Conflict between this brief and AGENTS.md → AGENTS.md wins. Flag the conflict.
- Missing copy or URL Sam hasn't supplied → ship a `TODO` placeholder, document it in the PR, move on.
- Architectural question (e.g., "should I use App Router segments or a single page file?") → make the call, document your reasoning in the PR. Sam will redirect if needed.
- Brand-token ambiguity (e.g., "what color is a disabled button?") → derive from the existing token system, document your derivation, flag for Sam's review.

The goal is forward motion. A shipped imperfect homepage beats an unshipped perfect one. Sam will iterate.
