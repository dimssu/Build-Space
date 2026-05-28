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
export type ValidationBlock = {
  eyebrow?: string;
  headline: string;
  body?: string;
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
  | "instructor"
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
  };
  instructor: {
    eyebrow: string;
    headline: string;
    lead: string;
    showLinks?: boolean; // surface COHORT.instructor.links as chip-row
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
  // Optional section ordering for everything between Hero and ClosingCTA.
  // Sections not listed are omitted. When unset, the page uses DEFAULT_ORDER
  // from src/pages/index.astro (mirrors the original rendering order).
  sectionOrder?: SectionKey[];
};

export type PartialVariant = Omit<Partial<Variant>, "slug"> & { slug: AdSlug };
