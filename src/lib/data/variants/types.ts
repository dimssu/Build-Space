export type AdSlug =
  | "default"
  | "class11-hi"
  | "class12-parent"
  | "class10-curious"
  | "parent-proud"
  | "tutorial-dropout";

export type BrandMark = "buildspace" | "logic";

export type HeroOutcome = { label: string; note: string };

// Multi-line hero. When `hero.lines` is set on a variant, it supersedes the
// 2-part `headline` + `headlineRest` rendering. Each line gets its own colour
// (accent = blue, ink = dark) and an optional animated strikethrough that
// draws across after the line reveals — designed for the moment-of-failure
// hooks (e.g. "You closed the tab.").
export type HeroLineTone = "accent" | "ink";
export type HeroLine = {
  text: string;
  tone?: HeroLineTone; // default "ink"
  strikethrough?: boolean; // animated strike that draws after reveal
};

// Small framing chip — useful when the cohort number itself is the framing.
// e.g. "Cohort 01 · No alumni yet — everyone starts from the same place".
export type CohortBadge = {
  text: string;
  tone?: "accent" | "neutral"; // default "neutral"
};

// A "we hear you" beat between the hero and the rest of the page. Renders
// as a quiet, full-bleed section with one large statement + optional body.
// Use it on ads where the audience has a specific prior failure to validate
// before the page starts selling.
//
// `body` can be a single string or an array of strings — when an array, each
// element renders as its own paragraph with consistent rhythm. Use the array
// form when the validation moment needs to address multiple concerns at once
// (e.g. class12-parent: boards + skill gap + cohort honesty + scholarship).
export type ValidationBlock = {
  eyebrow?: string;
  headline: string;
  body?: string | string[];
};

// Optional per-variant overrides for content that normally comes from the
// factual base in `cohort.ts`. Useful when an audience needs the factual
// content delivered in their own voice — e.g. class11-hi needs the four
// curriculum weeks and the student FAQs in Hinglish, while every other
// variant continues to read from COHORT.weeks / COHORT.faqs.
export type WeekCard = {
  label: string;
  title: string;
  desc: string;
  outcome: string;
};
export type FaqItem = {
  q: string;
  a: string;
  forParent: boolean;
};

// Scholarship framing, surfaced in several places at once so the "you can earn
// a seat" message repeats across the page (the brand's strongest equaliser).
// `defaultVariant` always supplies a complete object, so the shallow-merge in
// getVariant() guarantees every variant has scholarship copy even if it only
// overrides a field or two. Each ad variant rewrites these in its own voice
// (Hinglish for class11-hi, parent pronouns for parent variants, etc.).
export type Scholarship = {
  // Compact one-liner reused in the nav chip + hero pill. Keep it short.
  pill: string;
  // Single sentence reused in the hero sub-area + closing-CTA reassurance.
  line: string;
  // Dedicated banner section (the centrepiece scholarship callout).
  bannerEyebrow: string;
  bannerHeadline: string;
  bannerBody: string;
  bannerCta: string;
  // Short merit chips rendered under the banner headline.
  points: string[];
};

// All sections rendered inside <main>, between the (always-first) Hero and the
// (always-last) ClosingCTA. When a variant sets `sectionOrder`, these are
// rendered in that order — useful for warm/cool flow tuning (e.g. an emotional
// referral ad wants Curriculum + Instructor immediately, not after a cold
// comparison table).
export type SectionKey =
  | "validation"
  | "promise"
  | "compare"
  | "curriculum"
  | "projects"
  | "instructor"
  | "testimonials"
  | "scholarship"
  | "howItWorks"
  | "compareTable"
  | "pricing"
  | "faq";

export type Variant = {
  slug: AdSlug;
  audience: "parent" | "student";
  language: "en" | "hinglish";
  brandTag: { text: string; mark: BrandMark };

  eyebrow: string;
  hero: {
    headline: string;
    headlineRest: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
    outcomes: HeroOutcome[];
    lines?: HeroLine[]; // when set, supersedes headline/headlineRest
    // "display" (default) keeps the punchy --text-hero sizing — works for
    // short 2-part headlines like "Your child can build AI. / Not just use it."
    // "compact" applies the same smaller clamp() as multi-line heros, so a
    // long single-sentence headline (e.g. parent-proud's emotional opener)
    // fits one viewport without wrapping past the fold.
    size?: "display" | "compact";
  };
  cohortBadge?: CohortBadge;
  validation?: ValidationBlock;
  promise: {
    eyebrow: string;
    headline: string;
    lead: string;
    supporting: string;
  };
  curriculum: {
    eyebrow: string;
    headline: string;
    lead: string;
    // Label shown above each week's outcome pill (default: "By Sunday night:").
    // Configurable so a Hinglish variant can swap it to "Sunday raat tak:".
    outcomeLabel?: string;
  };
  instructor: {
    eyebrow: string;
    headline: string;
    lead: string;
    showLinks?: boolean; // surface COHORT.instructor.links as chip-row
    showShippedWork?: boolean; // render the COHORT.instructor.shippedWork card
  };
  closing: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  pricing: {
    headline: string;
    scholarshipLine: string;
  };
  // Scholarship framing surfaced in multiple places (nav, hero, dedicated
  // banner, closing CTA). Required so defaultVariant always carries copy and
  // the merge guarantees every variant inherits it.
  scholarship: Scholarship;
  payModal: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
  faqPriority: ("parent" | "student")[];
  // Optional copy override for the FAQ section header + group labels. When
  // unset, the page uses the canonical English defaults.
  faq?: {
    eyebrow?: string;        // default: "Honest answers"
    headline?: string;       // default: "The questions parents actually ask."
    supporting?: string;     // default: "If a question is not here…"
    parentGroupLabel?: string; // default: "For parents"
    studentGroupLabel?: string; // default: "For students"
  };
  // Optional section ordering for everything between Hero and ClosingCTA.
  // Sections not listed are omitted. When unset, the page uses DEFAULT_ORDER
  // from src/pages/index.astro (mirrors the original rendering order).
  sectionOrder?: SectionKey[];
  // Optional content overrides — see types above. Each falls back to
  // COHORT.weeks / COHORT.faqs when unset, so the default and other variants
  // are untouched.
  weeks?: WeekCard[];
  faqs?: FaqItem[];
};

export type PartialVariant = Omit<Partial<Variant>, "slug"> & { slug: AdSlug };
