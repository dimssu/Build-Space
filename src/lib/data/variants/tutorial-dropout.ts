import type { PartialVariant } from "./types";

// Ad 5 — English, empathetic peer voice for the frustrated tutorial-dropout.
// "We get it." Frames the failure as a content problem, not a you-problem.
export const tutorialDropoutVariant: PartialVariant = {
  slug: "tutorial-dropout",
  audience: "student",
  language: "en",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  eyebrow: "Opened Python tutorial. Closed it. Us.",

  hero: {
    headline: "If you've opened a Python tutorial and closed it within 20 minutes —",
    headlineRest: "we built this for you.",
    subhead:
      "Four weekends. Five students. One instructor who builds AI in production. You don't watch — you build. By week four you have a deployed agent that actually runs, on a real URL, with your name on it.",
    primaryCta: "Try the ₹99 demo class",
    secondaryCta: "See what you'll actually build",
    footnote: "First class is ₹99. The full cohort is ₹19,999 — decide after.",
    outcomes: [
      { label: "You build, not watch", note: "Live cohort, same instructor every weekend" },
      { label: "A deployed agent", note: "Runs on the internet — not a paused video" },
      { label: "A real GitHub repo", note: "Your code, your name, on the public record" },
    ],
  },

  promise: {
    eyebrow: "For everyone who's been stuck",
    headline: "That's not a you problem. That's a content problem.",
    lead: "Tutorials are passive, infinite, and built for nobody in particular. Logic Labs is live, structured, and built for exactly where you are — class 9–12, some curiosity, no clear path. Five students. Same instructor every session.",
    supporting:
      "Two weeks in, you'll have a working agent on your laptop. By week four, demo day — your project, live, on a real URL. Not a course completion badge. Something that runs.",
  },

  curriculum: {
    eyebrow: "What you actually do",
    headline: "Four weekends. You build, week over week.",
    lead: "No slide decks. No 12-hour YouTube playlists. Every Sunday you close the laptop with something running — small at first, then bigger, until you have a deployed AI agent that's yours.",
  },

  instructor: {
    eyebrow: "Your instructor",
    headline: "Not a course author. An AI engineer who shows up every weekend.",
    lead: "\"I build AI systems for a living. I looked at what students were being asked to watch and realised nobody was showing them the real thing. So I started Logic Labs.\"",
  },

  closing: {
    eyebrow: "Logic Labs · Cohort 01 · Saturday, June 13, 2026",
    headline: "Skip the tutorial.\nTry the ₹99 demo class.",
    body: "Two hours. You meet the instructor, build something small, take a short live test. If it isn't for you, you've spent ₹99. If it is, you finally have a path that doesn't end with a closed tab.",
  },

  pricing: {
    headline: "One price. No surprises.",
    scholarshipLine:
      "Scholarships are decided inside the ₹99 demo class, on performance, not paperwork. If you can build, you're in — regardless of what the full fee looks like at home.",
  },

  payModal: {
    title: "Try the demo class",
    subtitle: "₹99 · A live look at Logic Labs before you commit to ₹19,999.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "Closed Another Python Tutorial? Try a Live AI Cohort — Logic Labs",
    description:
      "A live four-week AI cohort for class 9–12 students who can't sit through tutorials. Five students, one practitioner instructor, a deployed AI agent by week four. Cohort 01 starts June 13, 2026.",
  },

  faqPriority: ["student", "parent"],
};
