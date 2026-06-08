import type { Variant } from "./types";

// The default variant is the literal, current site copy. Every string here is
// lifted verbatim from the corresponding component so that rendering with
// `variant = default` produces a page identical to the one shipped today.
//
// Factual cohort data (price, dates, weeks, instructor, FAQs) still lives in
// `@lib/data/cohort` and is composed into the page at render time. Anything
// here is the *editorial* layer — copy that an ad variant might want to swap.

export const defaultVariant: Variant = {
  slug: "default",
  audience: "parent",
  language: "en",
  brandTag: { text: "Build Space", mark: "buildspace" },

  eyebrow: "Logic Labs · Cohort 01 · Starts Saturday, June 20, 2026",

  hero: {
    headline: "Your child can build AI.",
    headlineRest: "Not just use it.",
    subhead:
      "Four weekends. Five students. One AI practitioner as the instructor. By the end, your child ships a working agent — a live URL, a GitHub repo — and presents it to you on demo day.",
    primaryCta: "Book the demo class · ₹99",
    secondaryCta: "See what they build",
    footnote: "First class is ₹99. A live look before you commit to ₹19,999.",
    outcomes: [
      { label: "A working AI agent", note: "Built from scratch, in Python" },
      { label: "A live URL", note: "Their project, online, anyone can visit" },
      { label: "A GitHub repo", note: "Their code, theirs to keep" },
    ],
  },

  promise: {
    eyebrow: "For parents",
    headline: "You don't have to take our word for it. You'll see it.",
    lead: "Two weeks in, your child will show you a working agent on their laptop. By week four, you'll be in the audience for demo day — watching the project they built, live, with a real URL anyone in the world can visit.",
    supporting:
      "Most courses end with a PDF certificate and a feeling that not much happened. Logic Labs ends with something your child can show you, show their school, and put on a college application.",
  },

  curriculum: {
    eyebrow: "What your child builds",
    headline: "Four weeks. Something working every week.",
    lead: "No slide decks. No concept maps. Every Sunday, your child closes the laptop with something they can run and show you.",
  },

  instructor: {
    eyebrow: "The instructor",
    headline: "Not a teacher who learned AI. A practitioner who showed up.",
    lead: "\"I build AI systems for a living. I looked at what was being taught to school students in India and realised nobody was showing them the real thing. So I started Logic Labs.\"",
    showShippedWork: true,
  },

  closing: {
    eyebrow: "Logic Labs · Cohort 01 · Saturday, June 20, 2026",
    headline: "Book the ₹99 demo class.\nDecide after.",
    body: "Two hours. Your child meets the instructor, builds something small, and takes a short live test. You watch from the next room or join. If it is not for your child, you have spent ₹99 — not ₹19,999.",
  },

  pricing: {
    headline: "Before you spend ₹19,999, spend ₹99.",
    scholarshipLine:
      "Scholarships are earned in the ₹99 demo class on performance, not paperwork. Strong performers pay as little as ₹9,999 — half the full price.",
  },

  scholarship: {
    pill: "Merit scholarships — decided on talent, not money",
    line: "Scholarships decided live in the demo class. Strong performers pay as little as ₹9,999.",
    bannerEyebrow: "Logic Labs Scholarships",
    bannerHeadline: "A seat your child earns. Not one you just pay for.",
    bannerBody:
      "Every seat is open to a scholarship, decided live in the ₹99 demo class on how your child performs. Strong performers pay as little as ₹9,999. No essays, no income proof, no financial paperwork.",
    bannerCta: "Earn the scholarship · ₹99",
    points: [
      "Decided on merit, not money",
      "No essays, no financial proof",
      "Awarded in the ₹99 demo class",
    ],
  },

  payModal: {
    title: "Book the demo class",
    subtitle: "₹99 · A live look at the cohort before you commit to ₹19,999.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "Build Space — Live AI Cohort for Class 9 to 12 Students in India",
    description:
      "A four-week live cohort for Indian Class 9 to 12 students. Build and deploy a working AI agent in Python. Five students per batch, one practitioner instructor. Cohort 01 starts June 20, 2026.",
    ogImage: "/og-cover.png",
  },

  faqPriority: ["parent", "student"],
};
