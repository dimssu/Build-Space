export type AdSlug =
  | "default"
  | "class11-hi"
  | "class12-parent"
  | "class10-curious"
  | "parent-proud"
  | "tutorial-dropout";

export type BrandMark = "buildspace" | "logic";

export type HeroOutcome = { label: string; note: string };

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
  };
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
};

export type PartialVariant = Omit<Partial<Variant>, "slug"> & { slug: AdSlug };
