import type { PartialVariant } from "./types";

// Ad 2 — Formal English, urgent parent-to-parent voice for class 12 parents.
// Uses the more formal `Logic.` brand mark instead of {buildspace}.
export const class12ParentVariant: PartialVariant = {
  slug: "class12-parent",
  audience: "parent",
  language: "en",
  brandTag: { text: "Logic.", mark: "logic" },

  eyebrow: "Class 12. One summer. Use it right.",

  hero: {
    headline: "Your child is in class 12. You have one summer left before college.",
    headlineRest: "This is for you.",
    subhead:
      "Four weekends. Five students. One AI engineer as the instructor. By the end of this summer your child has shipped a deployed AI agent — a portfolio piece almost no engineering applicant walks into first year with.",
    primaryCta: "Book the demo class · ₹99",
    secondaryCta: "See what they'll ship",
    footnote: "First class is ₹99. A live look before you commit to ₹19,999.",
    outcomes: [
      { label: "A deployed AI agent", note: "Built in Python, live before college starts" },
      { label: "A live URL", note: "Anyone on an admissions panel can visit it" },
      { label: "A GitHub repo", note: "Real code, on the public record, theirs" },
    ],
  },

  promise: {
    eyebrow: "For parents of class 12",
    headline: "Before the degree. Before the internship grind. Before 1.5 million engineers.",
    lead: "There is one summer where the head start is still possible. Two weeks in, your child will show you a working agent on their laptop. By week four, you will watch demo day — their project, live, with a real URL.",
    supporting:
      "Most students walk into a first-year engineering classroom with a transcript and nothing else. Your child will walk in with something deployed, something running, something an admissions officer or recruiter can click on.",
  },

  curriculum: {
    eyebrow: "What they ship over one summer",
    headline: "Four weekends. A portfolio piece by the end.",
    lead: "No slide decks. No theory marathon. Every Sunday, your child closes the laptop with something they can run and show you — building, week over week, toward a deployed agent.",
  },

  instructor: {
    eyebrow: "The instructor",
    headline: "An AI engineer in production. Same person every session.",
    lead: "\"I build AI systems for a living. I looked at what was being taught to class 12 students in India and realised nobody was showing them the real thing. So I started Logic Labs.\"",
  },

  closing: {
    eyebrow: "Logic Labs · Cohort 01 · Saturday, June 13, 2026",
    headline: "One summer. One decision.\nBook the ₹99 demo class.",
    body: "Two hours. Your child meets the instructor, builds something small, takes a short live test. You watch from the next room or join. If it isn't for your child, you have spent nothing. If it is, your summer is set.",
  },

  pricing: {
    headline: "One price. One summer. No surprises.",
    scholarshipLine:
      "Scholarships are decided inside the ₹99 demo class, on performance — not financial paperwork. A strong class 12 student gets in regardless of full-fee capacity.",
  },

  payModal: {
    title: "Book the demo class",
    subtitle: "₹99 · A live look before you commit to ₹19,999. One summer to use well.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "Class 12. One Summer Left. Build an AI Agent — Logic Labs",
    description:
      "A four-week live AI cohort for class 12 students before college. Five students, one practitioner instructor, a deployed AI agent in Python by the end. Cohort 01 starts June 13, 2026.",
  },

  faqPriority: ["parent", "student"],
};
