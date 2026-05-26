# DESIGN.md — Build Space

> Visual system for the Build Space landing page. Tokens are the source of truth; CSS variables in `src/styles/global.css` mirror this file.

## Color strategy

**Restrained with one Committed accent.** Warm off-white surface, deep ink type, single confident accent that carries identity. No neon. No pure black or white. Every neutral is tinted toward the warm-paper axis so the page reads as a printed document, not a screen.

### Tokens (OKLCH)

```
--paper:        oklch(0.985 0.005 80)     /* warm off-white, page background */
--paper-soft:   oklch(0.965 0.008 80)     /* alt section background */
--paper-card:   oklch(0.99  0.004 80)     /* raised surface */
--ink:          oklch(0.20  0.015 260)    /* primary text */
--ink-soft:     oklch(0.40  0.015 260)    /* secondary text */
--ink-mute:     oklch(0.58  0.010 260)    /* tertiary, captions */
--rule:         oklch(0.90  0.010 80)     /* hairline divider */
--rule-strong:  oklch(0.82  0.010 80)     /* stronger divider */

--accent:       oklch(0.55  0.16  245)    /* trust blue, warmer than #3B82F6 */
--accent-deep:  oklch(0.42  0.18  245)    /* hover / pressed */
--accent-soft:  oklch(0.92  0.06  245)    /* tint background */

--good:         oklch(0.55  0.13  155)    /* "what Logic Labs does" column */
--good-soft:    oklch(0.94  0.05  155)
--warn:         oklch(0.60  0.14   60)    /* warm muted, never red */
```

Pairings (verified contrast):
- `--ink on --paper` → ~14:1 (passes AAA body)
- `--ink-soft on --paper` → ~7:1 (passes AAA body)
- `--accent on --paper` → ~5.2:1 (passes AA large, AA UI)
- `paper on --accent-deep` → ~7:1 (button text)

## Typography

**Pairing:** Two families, both off the reflex-reject list.

- **Display:** [Tobias](https://klim.co.nz/) preferred (paid) or **PP Editorial New** trial → free fallback **Fraunces is rejected**; use **Cormorant Infant** ONLY as last resort. *Decision: ship with* **Newsreader is also rejected per impeccable**. Practical free pick → **Bricolage Grotesque** display weights for display, with quiet contrast.
- **Body / UI:** **General Sans** (Fontshare, free, distinctive) — humanist, calm, modern. Not Inter, not DM Sans.

> **Final pairing in v1:** **Bricolage Grotesque** (display, weights 500/700) + **General Sans** (body, weights 400/500/600). Both self-hosted woff2. Reasoning: Bricolage is a 2023 release with variable optical sizing, distinct from the saturated editorial-italic look; General Sans is humanist enough to feel warm without being sleepy.

### Type ramp

`clamp()` fluid scale, ratio ≥ 1.25 between steps.

```
--text-xs:    clamp(0.78rem, 0.74rem + 0.2vw,  0.84rem)   /* labels */
--text-sm:    clamp(0.88rem, 0.84rem + 0.2vw,  0.95rem)   /* meta */
--text-base:  clamp(1.00rem, 0.96rem + 0.2vw,  1.08rem)   /* body */
--text-lg:    clamp(1.18rem, 1.10rem + 0.4vw,  1.30rem)   /* lead */
--text-xl:    clamp(1.45rem, 1.30rem + 0.7vw,  1.65rem)   /* h3 */
--text-2xl:   clamp(1.85rem, 1.60rem + 1.2vw,  2.20rem)   /* h2 small */
--text-3xl:   clamp(2.40rem, 2.00rem + 2.0vw,  3.20rem)   /* h2 */
--text-4xl:   clamp(3.20rem, 2.40rem + 3.5vw,  4.80rem)   /* h1 large */
--text-hero:  clamp(3.80rem, 2.80rem + 5.0vw,  6.80rem)   /* hero only */
```

Body line-length capped at **65–72ch**. Body line-height 1.55; display line-height 1.02–1.08.

## Spacing

8-point base scale, fluid for the largest steps.

```
--s-1: 0.25rem    /*  4 */
--s-2: 0.5rem     /*  8 */
--s-3: 0.75rem    /* 12 */
--s-4: 1rem       /* 16 */
--s-5: 1.5rem     /* 24 */
--s-6: 2rem       /* 32 */
--s-7: 3rem       /* 48 */
--s-8: clamp(3.5rem, 3rem + 2vw, 5rem)     /* 56-80 */
--s-9: clamp(5rem,   4rem + 4vw, 7.5rem)   /* 80-120, section padding */
--s-10: clamp(7rem,  5rem + 6vw, 10rem)    /* 112-160, major sections */
```

Vary rhythm — don't apply the same gap everywhere. Hero vertical padding > section padding > component padding.

## Radii

```
--r-sm: 6px      /* inputs, small buttons */
--r-md: 10px     /* cards, callouts */
--r-lg: 18px     /* hero panels, video frame */
--r-pill: 999px  /* nav badges, tags */
```

Avoid the SaaS-default `--r-md` everywhere — use `--r-sm` on small surfaces, `--r-lg` on hero/feature surfaces.

## Elevation

Restrained. No drop-shadow soup.

```
--elev-1: 0 1px 0 0 oklch(0.90 0.01 80)                  /* hairline */
--elev-2: 0 1px 2px -1px oklch(0.20 0.01 260 / 0.08),
          0 2px 6px -2px oklch(0.20 0.01 260 / 0.06)
--elev-3: 0 8px 24px -8px oklch(0.20 0.01 260 / 0.12)    /* sparingly */
```

## Motion

- **Entry choreography:** 600–800ms staggered reveal on first paint. Children stagger 60–80ms apart.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) for almost everything. Never bounce, never elastic.
- **Hover:** 120–160ms. Color/opacity/transform only — never layout properties.
- **Scroll choreography:** Lenis smooth scroll site-wide (gentle, not exaggerated). GSAP ScrollTrigger only for the hero video scrubber.
- **Reduced motion:** `prefers-reduced-motion: reduce` → all reveals become instant, smooth scroll disables, scroll-video collapses to a poster image. This is a hard requirement.

### Motion tokens

```
--ease-out:   cubic-bezier(0.22, 1, 0.36, 1)
--ease-in:    cubic-bezier(0.65, 0, 0.85, 1)
--dur-fast:   140ms
--dur-base:   320ms
--dur-slow:   720ms
```

## Imagery rules

- Every photo is warm-graded, 50mm or 85mm aesthetic, shot-on-film soft grain. India-rooted, never stocky.
- AVIF primary + WebP fallback, served via `astro:assets`.
- Lazy below the fold. Always `alt` in brand voice.
- The hero scroll-video falls back to a static poster image when reduced-motion is on or video fails to load.

## Layout primitives

- Page max-width container: `min(1120px, 100% - 2rem)`.
- Section vertical padding: `--s-9` default; `--s-10` for hero and closing CTA.
- Asymmetric grids over centered stacks. Left-aligned by default; centered only for the hero closer and a single section break.

## Component recipes

- **Button primary:** 14/16 body, padding `0.875rem 1.5rem`, `--r-md`, accent fill, `--paper` text, 160ms hover lift `translateY(-1px)` + accent-deep fill.
- **Button secondary:** transparent fill, 1px `--rule-strong` border, ink text, hover → `--paper-soft` fill.
- **Card:** `--paper-card` background, 1px `--rule` border, `--r-md`, `--s-6` padding. No nested cards. No side-stripe borders.
- **Stat tile:** display number in `--text-3xl`, label in `--text-xs` uppercase tracking `0.08em`, ink-mute color, separated by `--rule` hairline.
- **FAQ disclosure:** ARIA `button` + `aria-expanded`, animated via `grid-template-rows` 0fr → 1fr (never `height: auto`).

## Anti-patterns (banned for this surface)

- Pure black backgrounds. Pure white surfaces. Neon blue accents.
- Mono fonts as decoration (only inside code blocks if any).
- Side-stripe colored borders.
- Drop-shadow soup. Glassmorphism. Gradient text.
- Identical 3-up icon-title-text card grids.
- "Trusted by" logo bands (we don't have any yet, and faking it would betray the brand).
- Manufactured urgency: "3 spots left!" countdowns, blinking "Apply now" banners.
