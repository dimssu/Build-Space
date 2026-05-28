import type { PartialVariant } from "./types";

// Ad 5 — Tutorial-dropout: students who started AI tutorials and abandoned
// them. The page leads with validation (you got stuck, nobody answered, you
// closed the tab), then offers the ₹99 demo class as a low-stakes re-entry.
// Trust gap is closed with a named, link-out instructor; scholarship is
// reframed as an open meritocracy ("show up and perform").
export const tutorialDropoutVariant: PartialVariant = {
  slug: "tutorial-dropout",
  audience: "student",
  language: "en",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  eyebrow: "Opened Python tutorial. Closed it. Us.",

  cohortBadge: {
    text: "Cohort 01 · No alumni yet — everyone starts from the same place",
    tone: "neutral",
  },

  hero: {
    // The original 2-part headline is kept as a fallback. The new `lines`
    // array is what actually renders — a 4-beat sequence that mirrors the
    // dropout experience, with the final line struck through after reveal.
    headline: "You watched the tutorial.",
    headlineRest: "You closed the tab.",
    lines: [
      { text: "You watched the tutorial.", tone: "ink" },
      { text: "You got stuck at hour two.", tone: "ink" },
      { text: "Nobody answered.", tone: "ink" },
      { text: "You closed the tab.", tone: "ink", strikethrough: true },
    ],
    subhead:
      "That was not a you problem. The bottleneck for almost every student is not ability — it is having no one in the room when the question comes up.",
    primaryCta: "₹99 — try again",
    secondaryCta: "See what you'll actually build",
    footnote: "Two hours. Saturday, June 13, 2026. If it isn't for you, you've spent nothing.",
    outcomes: [
      { label: "A person, not a playlist", note: "Same instructor every weekend, knows your name" },
      { label: "Questions get answered", note: "Tuesday night doubt? Ask. Reply same week." },
      { label: "Something that runs", note: "A deployed agent on a live URL by week four" },
    ],
  },

  validation: {
    eyebrow: "Before we go further",
    headline: "That was not a you problem.",
    body: "Logic Labs is built around the one thing tutorials cannot give you: a person who knows your name, knows where you got stuck last week, and answers the question the moment it comes up.",
  },

  promise: {
    eyebrow: "What's different here",
    headline: "Five students. Two hours. A person who answers.",
    lead: "Five students per cohort. Two hours per session. If you get stuck on a Tuesday night, you can ask. This is not a pre-recorded course with a comment section.",
    supporting:
      "Two weeks in, you'll have a working agent on your laptop. By week four, demo day — your project, live, on a real URL. Not a course completion badge. Something that runs.",
  },

  curriculum: {
    eyebrow: "What you actually do",
    headline: "Four weekends. You build, week over week.",
    lead: "No slide decks. No 12-hour YouTube playlists. Every Sunday you close the laptop with something running — small at first, then bigger, until you have a deployed AI agent that's yours.",
  },

  instructor: {
    eyebrow: "Who's actually teaching",
    headline: "Not a course author. A real engineer who shows up every weekend.",
    lead: "\"I build AI systems for a living. I looked at what students were being asked to watch and realised nobody was showing them the real thing. So I started Logic Labs. If you get stuck, I'm the person you ask.\"",
    showLinks: true,
  },

  closing: {
    eyebrow: "Cohort 01 · Saturday, June 13, 2026",
    headline: "₹99.\nTry again.",
    body: "Two hours. You meet the instructor, build something small, take a short live test. If it isn't for you, you've spent ₹99. If it is, you finally have a path that doesn't end with a closed tab.",
  },

  pricing: {
    headline: "One price. Open scholarship.",
    scholarshipLine:
      "Scholarships are decided live in the ₹99 demo class on performance, not paperwork. You don't need a prior track record — show up, build, and the scholarship is on the table.",
  },

  payModal: {
    title: "Try the demo class",
    subtitle: "₹99 · Two hours, live. The instructor is in the room.",
    ctaLabel: "Pay ₹99 — try again",
  },

  seo: {
    title: "Closed another Python tutorial? Try a live AI cohort — Logic Labs",
    description:
      "Got stuck on an AI tutorial and closed the tab? Logic Labs is the re-entry: five students, one instructor in the room, ₹99 demo class on June 13. No alumni yet — everyone starts here.",
  },

  faqPriority: ["student", "parent"],
};
