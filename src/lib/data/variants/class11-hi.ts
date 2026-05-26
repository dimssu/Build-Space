import type { PartialVariant } from "./types";

// Ad 1 — Hinglish, peer-to-peer voice for class 11 students.
// Mirrors the ad's "bhai / tu / tera" register and the {buildspace} brand mark.
export const class11HiVariant: PartialVariant = {
  slug: "class11-hi",
  audience: "student",
  language: "hinglish",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  eyebrow: "Week 4 tak ek working AI agent. Deployed.",

  hero: {
    headline: "Bhai tu class 11 mein hai. AI ki duniya aa gayi.",
    headlineRest: "Tera school abhi 2015 mein hai.",
    subhead:
      "Char weekends. Paanch students. Ek AI engineer instructor. Char hafton mein tu ek working agent banayega — live URL, GitHub repo, sab tera. Same instructor har session.",
    primaryCta: "₹99 mein pehli class book kar",
    secondaryCta: "Dekh kya banega",
    footnote: "Pehli class sirf ₹99. Pura cohort ₹19,999 — phir sochna.",
    outcomes: [
      { label: "Apna AI agent", note: "Scratch se, Python mein, tu khud banayega" },
      { label: "Live URL", note: "Tera project online — duniya dekh sakti hai" },
      { label: "GitHub repo", note: "Tera code, tera, hamesha ke liye" },
    ],
  },

  promise: {
    eyebrow: "Sun bhai",
    headline: "Yakeen kar — week 2 tak tu khud dikhayega ek chalta hua agent.",
    lead: "Do hafte mein tera apna agent laptop pe chalega. Char hafte mein demo day — tera deployed project, ek real URL pe, koi bhi kahin se khol sakta hai. Bina certificate ke. Bina PDF ke.",
    supporting:
      "Aaj kal har course end mein ek certificate deta hai aur lagta hai kuch hua hi nahi. Logic Labs ke baad tere paas wo cheez hai jo tu school, college application, aur kisi bhi banda ko phone nikaal ke dikha sake.",
  },

  curriculum: {
    eyebrow: "Tu kya banayega",
    headline: "Char hafte. Har hafte kuch chalta hua.",
    lead: "Koi slides nahi. Koi theory ka pahaad nahi. Har Sunday laptop band karne se pehle ek cheez chalti hui — tu run kar sakta hai, kisi ko bhi dikha sakta hai.",
  },

  instructor: {
    eyebrow: "Instructor",
    headline: "Koi teacher nahi jisne AI seekha. Ek banda jo roz AI banata hai.",
    lead: "\"Main production mein AI systems banata hoon. India mein school students ko kya padhaya ja raha hai dekha — koi real cheez nahi sikha raha tha. Tab Logic Labs shuru kiya.\"",
  },

  closing: {
    eyebrow: "Logic Labs · Cohort 01 · Saturday, 13 June 2026",
    headline: "₹99 mein pehli class le.\nPhir decide kar.",
    body: "Do ghante. Instructor se mil. Kuch chhota bana. Ek chhota live test de. Pasand aaye toh ₹19,999 ka pura cohort. Nahi aaye toh chal koi baat nahi — kuch gawaaya nahi.",
  },

  pricing: {
    headline: "Ek price. Koi chhupa kharcha nahi.",
    scholarshipLine:
      "Scholarship ka decision ₹99 wali demo class mein hota hai — performance pe, kagaz pe nahi. Banda strong hai toh seat milegi, full fee ka chakkar alag.",
  },

  payModal: {
    title: "Pehli class book kar",
    subtitle: "₹99 · Pura cohort ₹19,999 — pehle live dekh, phir sochna.",
    ctaLabel: "₹99 bhar de",
  },

  seo: {
    title: "Bhai tu class 11 mein hai — AI agent banana seekh · Logic Labs",
    description:
      "Class 11 ke liye live AI cohort — char weekends, paanch students, ek practitioner instructor. Char hafte mein deployed AI agent. 13 June 2026 se shuru.",
  },

  faqPriority: ["student", "parent"],
};
