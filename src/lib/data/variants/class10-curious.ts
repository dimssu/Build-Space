import type { PartialVariant } from "./types";

// Ad 3 — Class 10 students who are curious about AI but haven't found a way in.
// The brief reframes the hero from defeatist ("no idea what to learn next") to
// aspirational ("here is where that goes"), softens the Python intimidation
// (Class 9 maths + curiosity is the only requirement), names the tutorial
// dropout experience without making the reader feel called out, and frames
// the scholarship as a meritocracy a curious kid can win.
export const class10CuriousVariant: PartialVariant = {
  slug: "class10-curious",
  audience: "student",
  language: "en",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  // Keep the ad chip's continuity at the top of the hero. The new cohort
  // framing ("no alumni yet") moves into the validation row below.
  eyebrow: "Build working AI agents in 4 weeks",

  cohortBadge: {
    text: "Cohort 01 · No alumni yet",
    tone: "neutral",
  },

  hero: {
    // Compact sizing — the new aspirational headline is one long sentence
    // that wraps past the fold at --text-hero.
    size: "compact",
    headline: "You've been curious about AI for a while.",
    headlineRest: "Here is where that goes.",
    subhead:
      "Four weekends. Five students. By the end you have a deployed AI agent on the internet — built by you, in Python, with a URL you can send anyone.",
    primaryCta: "₹99 — first class",
    secondaryCta: "See what you'll build",
    footnote: "Saturday, June 20, 2026 · Two hours. If it's not for you, you've spent ₹99.",
    outcomes: [
      { label: "An AI agent you built", note: "Python, from scratch — no copy-paste" },
      { label: "A real URL", note: "Send the link to anyone, they can use it" },
      { label: "A GitHub repo", note: "Your code, with your name on it" },
    ],
  },

  validation: {
    eyebrow: "If you've tried tutorials",
    headline: "Tutorials are free. They leave you stuck at hour two.",
    body: "This is different. Five students per cohort — everyone gets seen, nobody hides. The instructor knows your name. When you get stuck on a Tuesday night, you can ask. Class 9 maths and curiosity. That's the only requirement.",
  },

  promise: {
    eyebrow: "The five-student room",
    headline: "Five students. Everyone gets seen. Nobody hides.",
    lead: "Not a class of 200 where you ask a comment section. Not a YouTube playlist where you cope alone. A live room with five students, one instructor, two hours twice a weekend. The whole shape of the class is small enough that asking the question is not scary.",
    supporting:
      "By week two you have a working agent on your laptop. By week four you have a deployed one — on a real URL, that anyone you send the link to can use. Not a course completion badge. Something that runs.",
  },

  curriculum: {
    eyebrow: "What you'll actually build",
    headline: "Four weekends. Something that runs every week.",
    lead: "No 12-hour playlists. No slide decks. Every Sunday you close the laptop with something running — small at first, then bigger, until a deployed AI agent is yours. The maths underneath connects to what you already know from Class 9.",
  },

  instructor: {
    eyebrow: "Who's actually teaching",
    headline: "Not a teacher who learned AI. An engineer who shows up every weekend.",
    lead: "\"I build AI systems for a living. I looked at what students were being asked to watch and realised nobody was showing them the real thing. So I started Logic Labs. If you're curious and you ask, I'm the person you ask.\"",
    showLinks: true,
  },

  closing: {
    eyebrow: "Cohort 01 · Saturday, June 20, 2026",
    headline: "₹99.\nCome and see.",
    body: "Two hours. You meet the instructor, build something small, take a short live test. If it isn't for you, you've spent ₹99. If it is, you finally have somewhere your curiosity goes.",
  },

  pricing: {
    headline: "₹99 to try. The scholarship is decided in the room.",
    scholarshipLine:
      "Scholarships are decided live in the ₹99 demo class — on how you perform, nothing else. No essays. No financial form. Show up curious, build something, and you have a real shot.",
  },

  scholarship: {
    pill: "Scholarships you earn by building — not by paperwork",
    line: "Scholarships are decided live in the ₹99 demo class — on how you build, not on any form.",
    bannerEyebrow: "Logic Labs Scholarships",
    bannerHeadline: "A seat you can earn. Not just buy.",
    bannerBody:
      "Every Cohort 01 seat is open to a scholarship, and it's decided live in the ₹99 demo class — on how you perform, nothing else. No essays. No financial form. Show up curious, build something, and you've got a real shot, regardless of who can pay the full fee.",
    bannerCta: "Earn your seat · ₹99",
    points: [
      "Decided on how you build",
      "No essays, no forms",
      "Won in the ₹99 demo class",
    ],
  },

  payModal: {
    title: "Try the demo class",
    subtitle: "₹99 · Two hours, live. The instructor is in the room.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "Class 10? Curious about AI? Try a live cohort — Logic Labs",
    description:
      "A live four-week AI cohort for class 9–12 students in India who are curious about building. Five students, one instructor, ₹99 demo class on June 20. No alumni yet — everyone starts here.",
  },

  faqPriority: ["student", "parent"],

  // Warm flow: validation (tutorial pain + belonging + Python softening) →
  // curriculum (what you build — the curious-kid hook) → instructor (named,
  // linked, so a curious kid can google before paying) → promise → logistics
  // → pricing → comparison sections later.
  sectionOrder: [
    "validation",
    "curriculum",
    "projects",
    "instructor",
    "scholarship",
    "promise",
    "howItWorks",
    "pricing",
    "compare",
    "compareTable",
    "faq",
  ],
};
