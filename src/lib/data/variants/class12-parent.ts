import type { PartialVariant } from "./types";

// Ad 2 — Parents of Class 12 students. Two anxieties dominate: boards next
// year, and "is AI a real career or a distraction?" The brief asks the hero
// to dismiss the boards objection immediately and reframe the page around
// urgency (college applications) rather than the emotional "one summer left"
// of the original ad copy. The instructor section earns the most weight here:
// a parent spending ₹19,999 on a stranger needs LinkedIn / GitHub + one
// concrete shipped product visible.
export const class12ParentVariant: PartialVariant = {
  slug: "class12-parent",
  audience: "parent",
  language: "en",
  brandTag: { text: "Logic.", mark: "logic" },

  // Keep the ad chip continuity at the top of the hero; the cohort framing
  // ("founding batch") moves to the validation row below.
  eyebrow: "Class 12. One summer. Use it right.",

  cohortBadge: {
    text: "Cohort 01 · Founding batch",
    tone: "neutral",
  },

  hero: {
    // The new headline is two short phrases, both <30 chars — the default
    // --text-hero sizing is fine; no compact mode needed.
    headline: "Four weekends. Zero weekdays.",
    headlineRest: "Boards stay untouched.",
    subhead:
      "Class 12 students who build AI agents arrive at college with a deployed project, a GitHub repo, and a skill the admissions committee will not have seen before.",
    primaryCta: "Book the ₹99 demo class",
    secondaryCta: "See what they'll build",
    footnote: "Saturday, June 13, 2026 · Two hours. If it's not for your child, you've spent ₹99.",
    outcomes: [
      { label: "A deployed AI agent", note: "On a real URL, anyone can visit" },
      { label: "A GitHub repo", note: "Their code, with their name on it" },
      { label: "A portfolio piece", note: "Few college applicants will arrive with one" },
    ],
  },

  validation: {
    eyebrow: "Two things to clear first",
    headline: "Everyone is telling your child AI is the future. Almost no one is showing them how to build it.",
    body: [
      "In real Python, on real infrastructure, with a real URL at the end. The skill, not the headline. That gap is what Logic Labs exists to close.",
      "This is Cohort 01 — a founding batch, no alumni yet. That is exactly why the first class is ₹99: you attend, you see the instructor, you see the format. You decide after.",
      "And a strong child earns their seat regardless of the ₹19,999 fee. Scholarships are decided live in the demo class — on performance, not on a financial form.",
    ],
  },

  promise: {
    eyebrow: "About the year ahead",
    headline: "Class 12 to college, with something to actually show.",
    lead: "By the time your child sits in their first college admissions interview, they have a deployed AI agent on a real URL — and the vocabulary to walk an interviewer through it. Their peers will be presenting marks. Your child will be presenting a project.",
    supporting:
      "Most courses end with a PDF certificate and a feeling that not much happened. Logic Labs ends with a GitHub repo, a live link, and a portfolio piece an admissions committee can actually click on.",
  },

  curriculum: {
    eyebrow: "What your child actually builds",
    headline: "Four weekends. Something working every week.",
    lead: "No slide decks. No 12-hour playlists. Every Sunday your child closes the laptop with something running — small at first, then bigger, until a deployed AI agent is theirs. Weekdays untouched throughout. Board prep continues uninterrupted.",
  },

  instructor: {
    eyebrow: "Who you're trusting with ₹19,999",
    headline: "Not a rotating tutor. An engineer shipping AI to production today.",
    lead: "\"I build AI systems for a living. I looked at what Class 12 students were being taught in India and realised nobody was showing them the real thing. So I started Logic Labs. By week one I will know your child's name, their pace, and where they're stuck — and you can see exactly what I work on outside of class.\"",
    showLinks: true,
    showShippedWork: true,
  },

  closing: {
    eyebrow: "Cohort 01 · Saturday, June 13, 2026",
    headline: "Book the ₹99 demo class.\nDecide after.",
    body: "Two hours. Your child meets the instructor, builds something small, takes a short live test. You watch from the next room or join in. If it isn't for your child, you've spent ₹99 — not ₹19,999.",
  },

  pricing: {
    headline: "One price. A real scholarship.",
    scholarshipLine:
      "Scholarships are decided live in the ₹99 demo class — on how your child performs, not on a financial form. A strong student gets in regardless of full-fee capacity.",
  },

  scholarship: {
    pill: "Merit scholarships — decided on talent, not money",
    line: "Scholarships are decided live in the ₹99 demo class — on how your child performs, not on a financial form.",
    bannerEyebrow: "Logic Labs Scholarships",
    bannerHeadline: "A seat your child earns. Not one you just pay for.",
    bannerBody:
      "With one summer left before college, every Cohort 01 seat is open to a scholarship — decided live in the ₹99 demo class, on how your child performs. No essays, no income proof, no committee. A strong student gets in regardless of your capacity to pay the full ₹19,999.",
    bannerCta: "Book the ₹99 demo class",
    points: [
      "Decided on merit, not money",
      "No essays, no financial proof",
      "Awarded in the ₹99 demo class",
    ],
  },

  payModal: {
    title: "Book the demo class",
    subtitle: "₹99 · You and your child see Logic Labs live before you commit to ₹19,999.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "Class 12. Boards Untouched. Build an AI Agent — Logic Labs",
    description:
      "Four weekends. Zero weekdays. Boards stay untouched. Class 12 students who build AI agents arrive at college with a deployed project and a GitHub repo. Cohort 01 starts June 13, 2026.",
  },

  faqPriority: ["parent", "student"],

  // Trust-first flow for an anxiety-heavy audience: validation immediately
  // dismisses boards + reframes AI + surfaces scholarship; Instructor next so
  // a parent who Googles before paying ₹19,999 finds proof; then curriculum,
  // the urgency-framed promise, logistics, pricing, and finally the
  // comparison sections.
  sectionOrder: [
    "validation",
    "instructor",
    "curriculum",
    "scholarship",
    "promise",
    "howItWorks",
    "pricing",
    "compare",
    "compareTable",
    "faq",
  ],
};
