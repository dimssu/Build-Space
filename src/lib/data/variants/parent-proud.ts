import type { PartialVariant } from "./types";

// Ad 4 — Parent-proud: warm referral audience, shared from another proud parent.
// The hero stays untouched (the emotional moment is the strongest copy on the
// site). After the hero, a Validation beat carries the Cohort-01 honesty line.
// The flow is then reordered: Curriculum → Instructor immediately, so the
// warm proof lands before the comparison/logistics sections cool the
// emotional temperature. Instructor section surfaces LinkedIn / GitHub chips
// so a parent who Googles before spending ₹19,999 can find a real face.
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
      "A live AI cohort. Four weekends. Five students. One instructor who does this for a living. By the end your child has a deployed AI agent — a link, a real URL, something that runs.",
    primaryCta: "Book the ₹99 demo class",
    secondaryCta: "See what they'll build",
    footnote: "Saturday, June 13, 2026 · Two hours. If it's not for your child, you've spent ₹99.",
    outcomes: [
      { label: "A live AI agent", note: "On a real URL, anyone can visit" },
      { label: "A GitHub repo", note: "Their code, with their name on it" },
      { label: "Demo day", note: "You're in the room. They present." },
    ],
  },

  validation: {
    eyebrow: "From one parent to another",
    headline: "There are no alumni yet — this is Cohort 01.",
    body: "The parent who sent you this is in exactly the same position you are now. That's why the first class is ₹99. You watch the session. You see the instructor. You see your child build something small in two hours. You decide after.",
  },

  promise: {
    eyebrow: "What two weeks in looks like",
    headline: "By week two, your child shows you a working agent on their laptop.",
    lead: "By week four, demo day — your child presents their project, live, on a real URL anyone in the world can visit. You're in the audience. You don't watch from outside; you watch them ship.",
    supporting:
      "Most courses end with a PDF certificate and a feeling that not much happened. Logic Labs ends with something your child can show you, show their school, and put on a college application.",
  },

  curriculum: {
    eyebrow: "What your child actually builds",
    headline: "Four weekends. Something working every week.",
    lead: "No slide decks. No 12-hour playlists. Every Sunday your child closes the laptop with something they can run and show you — small at first, then bigger, until a deployed AI agent is theirs.",
  },

  instructor: {
    eyebrow: "Who you're trusting",
    headline: "Not a rotating tutor. The same engineer, every weekend.",
    lead: "\"I build AI systems for a living. I looked at what was being taught to school students in India and realised nobody was showing them the real thing. So I started Logic Labs. By week one I will know your child's name, their pace, and where they're stuck.\"",
    showLinks: true,
  },

  closing: {
    eyebrow: "Cohort 01 · Saturday, June 13, 2026",
    headline: "Book the ₹99 demo class.\nDecide after.",
    body: "Two hours. Your child meets the instructor, builds something small, takes a short live test. You watch from the next room or join in. If it isn't for your child, you've spent ₹99 — not ₹19,999.",
  },

  pricing: {
    headline: "One price. A real scholarship.",
    scholarshipLine:
      "Scholarships are decided live inside the ₹99 demo class, on how your child performs — not on a financial form. A strong child earns their seat. Financial capacity is not the filter.",
  },

  payModal: {
    title: "Book the demo class",
    subtitle: "₹99 · You and your child see Logic Labs live before you commit to ₹19,999.",
    ctaLabel: "Pay ₹99",
  },

  seo: {
    title: "My Child Built an AI Agent — Logic Labs Cohort for Class 9–12",
    description:
      "A four-week live AI cohort for class 9–12 students in India. Your child ships a deployed agent — a link, something that runs. Cohort 01 starts June 13, 2026.",
  },

  faqPriority: ["parent", "student"],

  // Warm flow: after the emotional hero + validation, lead with Curriculum
  // (what their child actually builds) and Instructor (who's teaching), so the
  // proof lands before Compare / CompareTable cool the temperature.
  sectionOrder: [
    "validation",
    "curriculum",
    "instructor",
    "promise",
    "howItWorks",
    "pricing",
    "compare",
    "compareTable",
    "faq",
  ],
};
