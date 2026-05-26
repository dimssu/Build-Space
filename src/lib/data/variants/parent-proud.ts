import type { PartialVariant } from "./types";

// Ad 4 — English, first-person emotional parent voice. Testimonial register.
// Hero echoes the ad: "My child built something last weekend..."
export const parentProudVariant: PartialVariant = {
  slug: "parent-proud",
  audience: "parent",
  language: "en",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  eyebrow: "My kid built something I can't explain.",

  hero: {
    headline: "My child built something last weekend that I still don't fully understand.",
    headlineRest: "And I've never been more proud.",
    subhead:
      "A link. A live AI agent. Something that runs on the internet — created by them, from scratch, in four weeks. Five students per cohort. One AI engineer as the instructor. Same person every session.",
    primaryCta: "Book the demo class · ₹99",
    secondaryCta: "See what they'll show you",
    footnote: "First class is ₹99. A live look before you commit to ₹19,999.",
    outcomes: [
      { label: "A link", note: "Something they can share from their phone" },
      { label: "A live agent", note: "Built by them, running on the internet" },
      { label: "A moment", note: "Not a certificate — a thing that works" },
    ],
  },

  promise: {
    eyebrow: "For parents",
    headline: "Not a certificate. Not a grade. Something that works.",
    lead: "Two weeks in, your child will show you a working agent on their laptop. By week four, you'll be in the audience for demo day — watching the project they built, live, on a real URL anyone in the world can visit.",
    supporting:
      "Most courses end with a PDF and a feeling that not much happened. This one ends with something they can pull out their phone and show anyone, anywhere, for the rest of their life.",
  },

  curriculum: {
    eyebrow: "What they'll bring home",
    headline: "Four weekends. A link you can click at the end.",
    lead: "No slide decks. No theory marathon. Every Sunday your child closes the laptop with something running — building, week over week, toward a moment you don't forget.",
  },

  instructor: {
    eyebrow: "The instructor",
    headline: "An AI engineer in production. Same person every weekend.",
    lead: "\"I build AI systems for a living. I looked at what was being taught to school students in India and realised nobody was showing them the real thing. So I started Logic Labs.\"",
  },

  closing: {
    eyebrow: "Logic Labs · Cohort 01 · Saturday, June 13, 2026",
    headline: "That moment is what this is built around.\nStart with the ₹99 demo class.",
    body: "Two hours. Your child meets the instructor, builds something small, takes a short live test. You watch from the next room or join. If it isn't for your child, you have spent nothing. If it is, you have a demo day in four weeks.",
  },

  pricing: {
    headline: "One price. No surprises.",
    scholarshipLine:
      "Scholarships are decided inside the ₹99 demo class, on performance, not paperwork. A strong student gets in regardless of full-fee capacity.",
  },

  payModal: {
    title: "Book the demo class",
    subtitle: "₹99 · A live look at the cohort before you commit to ₹19,999.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "My Child Built an AI Agent — Logic Labs Cohort for Class 9–12",
    description:
      "A four-week live AI cohort for class 9–12 students in India. Your child ships a deployed agent — a link, something that runs. Cohort 01 starts June 13, 2026.",
  },

  faqPriority: ["parent", "student"],
};
