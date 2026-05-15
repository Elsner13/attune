# AGENTS.md — Sam Elsner / Resonance Website

You are the autonomous coding agent on this repo. Read this file at the start of every session. It is the source of truth for brand, stack, voice, and operating rules. When the brief and this file conflict, this file wins.

---

## 1. Mission

This repo serves the public web presence for **Sam Elsner** (the person and the brand) and his single offer:

- **Resonance** — the newsletter, the Cohort, and the mentorship. The whole offer.

The site's job is to convert curious readers into newsletter subscribers, and newsletter subscribers into Cohort applicants and mentorship clients. Every page is a perceptual surface in the same funnel — the visual system, the copy, and the affordances all carry the Resonance frequency.

---

## 2. Brand architecture

```
Sam Elsner (umbrella personal brand — the person)
└── Resonance      → newsletter (Substack) · Cohort · mentorship
                     ├── Newsletter — free, weekly, lives on Substack
                     ├── Cohort     — group program, application-only
                     └── Mentorship — 1:1, application-only
```

**Resonance** is not the umbrella. **Sam Elsner** is. Resonance is the single offer Sam currently sells, expressed as three tiers of commitment (free newsletter → paid group → paid 1:1).

**Retired brands:** *Attune* (community) and *Foundations* (entry course) have been sunset. The repo is named `attune` for legacy reasons — that brand no longer exists. Any reference to Attune or Foundations in the codebase should be removed when you encounter it. The site it serves is **Sam Elsner's web presence**, with **Resonance** as the single offer.

---

## 3. Stack & repo conventions

- **Framework:** Next.js 16 (App Router). Use server components by default; client components only when interactivity demands it.
- **Hosting:** Vercel. Branch previews on every PR; `main` auto-deploys to production.
- **Styling:** Tailwind CSS with custom theme tokens (see Brand System below). No CSS-in-JS libraries. Co-locate any one-off styles with their component.
- **Type safety:** TypeScript everywhere. No `any` unless explicitly justified in a comment.
- **Forms / email capture:** Substack subscribe widget for the newsletter. Stan.Store handles lead-magnet downloads (email capture happens there, then a VA copy-pastes into Substack — see §7).
- **Analytics:** Plumb in Vercel Analytics + Plausible if either is already configured. Don't add Google Analytics.
- **Images:** Use `next/image`. Optimize at build time. SVGs for icons.
- **Fonts:** Self-host via `next/font` — Fraunces (display), DM Sans (body), Geist Mono (labels). Never use Google Fonts CDN at runtime.
- **File naming:** kebab-case for files and routes. PascalCase for components. Co-locate `Component.tsx`, `Component.test.tsx`, and `index.ts` barrel where it makes sense.
- **Commits:** Conventional commits (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`). Reference the BACKLOG.md item number when applicable.
- **Branching:** Work on feature branches named `feat/<backlog-item-slug>`. PR into `main`. Don't push to `main` directly.

---

## 4. Brand system

These tokens are non-negotiable. Wire them into `tailwind.config.ts` once and reference them everywhere — no hardcoded hex values in components.

### Color tokens

| Role | Name | Hex | Tailwind token |
|---|---|---|---|
| Background | Void | `#080806` | `bg-void` |
| Surface | Onyx | `#1A1A18` | `bg-onyx` |
| Accent / CTA | Cosmic Crimson | `#B22222` | `bg-crimson` / `text-crimson` |
| Text | Bone | `#EDEBE0` | `text-bone` |
| Hover | Ember | `#8B1515` | `hover:bg-ember` |
| Secondary text | Ash | `#6B6B65` | `text-ash` |
| Dividers | Slate | `#2C2C2A` | `border-slate` |

### Typography

- **Display / headings:** Fraunces, italic by default for primary headlines. Weight 400–600. Use sparingly — Fraunces italic is the brand signature.
- **Body / UI:** DM Sans. Weight 400 for body, 500 for emphasis.
- **Labels / code / metadata:** Geist Mono. Weight 400.

### Design law (non-negotiable)

1. **8px grid.** All spacing, padding, margins, and layout dimensions are multiples of 8 (8, 16, 24, 32, 48, 64, 96…).
2. **Cosmic Crimson on ONE element per view.** Never two crimson elements visible in the same scroll position. The crimson is the focal point — protect its weight.
3. **Void space is active.** Negative space is part of the composition, not the absence of content. Aim for spacious, not crowded.
4. **No emojis in UI.** Not in navigation, not in CTAs, not in body copy. (Exception: the wealth marker `💵`, master `✦`, and full moon `🌕` glyphs may appear inside reading-related content because they carry mathematical meaning.)
5. **No gradients on backgrounds.** Solid Void or solid Onyx only. Subtle gradient permitted on a single hero accent line if it serves the composition.
6. **Dark mode is the only mode.** No light theme. The site is always Void-on-Bone.

### Component patterns

- **Buttons:** Crimson background, Bone text, no border-radius (or 2px max). Hover transitions to Ember over 150ms.
- **Section breaks:** A single 1px Slate divider with 96–128px vertical space on either side.
- **Hero typography:** Fraunces italic, 64–96px on desktop, 40–56px on mobile. Single sentence per hero.
- **Body type scale:** 16px base, 1.6 line-height, max-width 64–72ch for readability.

---

## 5. Voice rules (for any copy you write or refactor)

If you generate UI copy, marketing copy, error messages, empty states, or microcopy, follow these. If a string is more than three words, ask yourself "would Sam text this to a friend?" If not, rewrite.

- **First person ("I"), second person ("you"). Never "we." Never "you all." Never "you guys."**
- **Declarative first sentences.** Openers claim something. "The secret is…" / "Most people…" / "You are…" Never start with a question.
- **Short paragraphs.** One sentence on its own line is fine. White space is a tool.
- **No corporate verbs.** Banned: delve, realm, harness, unlock, tapestry, leverage (corporate sense), synergy, seamless, optimize (corporate sense).
- **No AI transitions.** Banned: "Furthermore," "In conclusion," "It's worth noting," "Let's dive in."
- **Cosmic-meets-practical.** Frequency, aura, archetype, alignment, manifestation, sovereign, forged — these are welcomed vocabulary, used alongside specifics and numbers.
- **Ecological vocabulary is core.** Affordance, attunement, coupling, emergence, self-organization, constraints, attractor, perception-action, representative, dimensional, signal, noise. These are Sam's working concepts.
- **Title rule (per Dan Koe via Jack Moses):** keep titles broad and beginner-level; go deep in the body. "How To Stop Caring What Other People Think" beats "On the Phenomenology of Becoming."
- **Subtitle rule:** one clean benefit promise in beginner language.
- **CTAs are direct.** "Read the newsletter." "Apply to the Cohort." "Work with Sam." Never "Learn more," "Click here," "Submit."

---

## 6. Domain & routing architecture

Primary domain: **`thesamelsner.com`**. Vercel routes the domain to this repo.

```
/                      Homepage — Sam Elsner umbrella, Resonance entry tiers visible
/resonance             Resonance sales page — Newsletter + Cohort + Mentorship in full
/about                 About Sam
/galactic-reading      (Future) reading offer / lead magnet
/lp/[slug]             Lead-magnet landing pages routed to Stan.Store
/read/[slug]           Optional: long-form essay archive (or external Substack)
```

Do not create `/foundations` or `/attune` routes. Those brands are retired.

The newsletter itself stays on Substack (`resonance.substack.com` or the current Substack URL). The `/resonance` page is the **marketing surface** for the newsletter, not the newsletter archive itself. Link out to Substack for current issues.

---

## 7. External integrations

- **Substack** — primary newsletter platform. Embed the Substack subscribe iframe on `/resonance` and any post-conversion screens. Do not try to replicate Substack's email infrastructure in-app.
- **Stan.Store** — lead magnet email-capture surface. Every lead-magnet landing page (`/lp/[slug]`) routes the CTA to a Stan.Store product page. Stan captures the email, Sam's VA manually moves it to the Substack subscriber list (workaround, intentional, do not try to automate without Sam's signoff).
- **Cohort applications** — start as a simple Tally or Typeform embed. Don't build a custom form unless explicitly ticketed.

---

## 8. Agent autonomy — what to do, what to ask

**Decide on your own:**
- Component decomposition.
- File structure within established conventions.
- Tailwind class composition for any layout that follows the brand system.
- Refactors that don't change visible behavior.
- Bug fixes scoped to a single component or route.
- Test coverage decisions when adding new code.

**Ask Sam before:**
- Changing a brand token (color, typography, design law).
- Changing the routing architecture (§6) or domain.
- Adding a new external dependency or third-party service.
- Modifying any copy on `/resonance` (the sales page is sacred — propose diffs, don't ship).
- Building a custom form to replace Substack or Stan.Store.
- Anything that touches billing or money movement.
- Migrations or upgrades to Next.js / React / Node major versions.

**When you ask, propose your recommendation.** Don't ask open-ended questions. Ask "I want to do X for reason Y — say go or push back."

---

## 9. Working files

- `BACKLOG.md` — sequenced list of pages and components to build. Pull the next item, work it, ship the PR, move to the next.
- `FIRST_TASK.md` — your first ticket end-to-end. Start here.

When you finish a backlog item, move it to a `## Shipped` section at the bottom of BACKLOG.md with the PR link and date. Don't delete shipped items — keep them as a build log.

---

## 10. Definition of done

A backlog item is "done" when:

1. Branch is merged to `main` via reviewed PR.
2. Vercel preview deploys cleanly with no console errors or build warnings.
3. The page renders correctly at 375px (mobile), 768px (tablet), and 1280px+ (desktop).
4. Brand tokens are used everywhere — no hardcoded hex values, no off-grid spacing.
5. Lighthouse score on the preview is ≥ 90 on Performance and Accessibility.
6. The page passes a keyboard-only navigation check (Tab through all interactive elements; no traps).
7. The PR description names what changed, what to test, and any open follow-ups.

---

## 11. When in doubt

Default to: **less, slower, more deliberate.** The brand is sovereign — that means we don't ship reactive crap. If a feature feels rushed, push back and ask for more time. Sam would rather ship one beautiful page a week than five mediocre pages a day.

If a request would violate any rule in this file, name the conflict and ask before proceeding. Don't silently override.

---

*Last revised: 2026-05-15 by Sam (via Claude/Cowork handoff).*
