import type { PartialVariant } from "./types";

// Ad 3 — English, peer voice for class 10 students. Choice framing:
// 2 years of tutorials vs 4 weekends building.
export const class10CuriousVariant: PartialVariant = {
  slug: "class10-curious",
  audience: "student",
  language: "en",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  eyebrow: "Build working AI agents in 4 weeks · Cohort 01",

  hero: {
    headline: "You're in class 10. You know coding matters.",
    headlineRest: "You have no idea what to learn next.",
    subhead:
      "Four weekends. Five students. One AI engineer who builds in production today. By week four you have a deployed agent — not a tutorial finished, an actual thing that runs on the internet and is yours.",
    primaryCta: "Book your demo class · ₹99",
    secondaryCta: "See what you'll build",
    footnote: "First class is ₹99. The full cohort is ₹19,999 — decide after.",
    outcomes: [
      { label: "A working AI agent", note: "Built from scratch, in Python, by you" },
      { label: "A live URL", note: "Something you can send to anyone, anywhere" },
      { label: "A GitHub repo", note: "Real code on your name, from class 10 onward" },
    ],
  },

  promise: {
    eyebrow: "For class 10 students",
    headline: "Two years of tutorials, or four weekends of building. Pick one.",
    lead: "Most class 10 students will spend the next two years watching AI tutorials on YouTube and never finish one. You could spend four weekends in a live cohort and walk out with a deployed agent that has your name on it.",
    supporting:
      "No course completion badge. No certificate PDF. Something that runs. Something that's yours. Something you can show a teacher, a senior, a college, a friend — for the rest of your life.",
  },

  curriculum: {
    eyebrow: "What you'll build",
    headline: "Four weeks. Something that runs every week.",
    lead: "No slide decks. No concept maps. Every Sunday you close the laptop with something you can run — building, week over week, toward a deployed AI agent of your own.",
  },

  instructor: {
    eyebrow: "Your instructor",
    headline: "Someone shipping AI systems in production. Same person every session.",
    lead: "\"I build AI systems for a living. I looked at what was being taught to class 9–12 students in India and realised nobody was showing them the real thing. So I started Logic Labs.\"",
  },

  closing: {
    eyebrow: "Logic Labs · Cohort 01 · Saturday, June 13, 2026",
    headline: "Spend two hours.\nDecide after.",
    body: "Two hours. You meet the instructor, build something small, and take a short live test. If it isn't for you, you've spent ₹99. If it is, you start class 11 already shipping things most engineers don't.",
  },

  pricing: {
    headline: "One price. No surprises.",
    scholarshipLine:
      "Scholarships are decided in the ₹99 demo class, on performance, not paperwork. If you can build, you get in — regardless of what the full fee looks like at home.",
  },

  payModal: {
    title: "Book your demo class",
    subtitle: "₹99 · A live look at Logic Labs before you commit to ₹19,999.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "Class 10? Build an AI Agent in 4 Weekends — Logic Labs",
    description:
      "A live four-week AI cohort for class 9–12 students in India. Five students per batch, one practitioner instructor, a deployed agent in Python by week four. Cohort 01 starts June 13, 2026.",
  },

  faqPriority: ["student", "parent"],
};
