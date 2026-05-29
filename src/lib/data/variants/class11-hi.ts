import type { PartialVariant } from "./types";

// Ad 1 — Class 11 students, Hinglish (Latin script), peer-direct "tu / tera"
// register. The brief calls out the tone gap as the biggest fix: hero is
// Hinglish on the existing site, but curriculum + FAQ revert to formal
// English and break the voice. This variant now carries Hinglish all the way
// through — including the four curriculum weeks and the student FAQs, which
// are now overridable via Variant.weeks and Variant.faqs.
export const class11HiVariant: PartialVariant = {
  slug: "class11-hi",
  audience: "student",
  language: "hinglish",
  brandTag: { text: "{ buildspace }", mark: "buildspace" },

  // Keep the ad chip continuity at the top of the hero. Cohort framing
  // moves into the validation row.
  eyebrow: "Week 4 tak ek working AI agent. Deployed.",

  cohortBadge: {
    text: "Cohort 01 · Abhi koi purane students nahi",
    tone: "neutral",
  },

  hero: {
    // The brief's three-beat hero — built for multi-line rendering with the
    // last line in accent (the call-to-action beat).
    lines: [
      { text: "Tera phone mein AI hai.", tone: "ink" },
      { text: "Tune banaya nahi.", tone: "ink" },
      { text: "Abhi change kar.", tone: "accent" },
    ],
    headline: "Tera phone mein AI hai. Tune banaya nahi.",
    headlineRest: "Abhi change kar.",
    subhead:
      "Class 11 ke liye. Char weekends. Paanch students. Ek banda jo roz production mein AI banata hai. Char hafte mein tu ek deployed AI agent banayega — tera apna, live URL pe, GitHub mein.",
    primaryCta: "₹99 mein pehli class book kar",
    secondaryCta: "Dekh tu kya banayega",
    footnote: "Saturday, 13 June 2026 · Do ghante. Tere liye nahi hai toh ₹99 gaya, ₹19,999 nahi.",
    outcomes: [
      { label: "Banaya hua AI agent", note: "Python mein, scratch se, copy-paste nahi" },
      { label: "Real URL", note: "Link kisi ko bhi bhej, woh use kar sakta hai" },
      { label: "GitHub repo", note: "Tera code, tera naam ke saath" },
    ],
  },

  validation: {
    eyebrow: "Pehle ek baat sun",
    headline: "Har jagah log AI ki baat karte hain. Koi sikhata nahi ki banta kaise hai.",
    body: [
      "Real Python mein. Real agent. Real URL pe. Bas baatein nahi — banane ki cheez. Tutorials free hain, sab try karte hain, hour two pe sab atak jaate hain — kyunki sawaal poochhne ke liye koi paas nahi hota.",
      "Yeh Cohort 01 hai — abhi koi purane students nahi hain. Isliye pehli class sirf ₹99 hai: aa, dekh, instructor mile, format dekh. Phir decide kar.",
      "Scholarship bhi available hai — but wo form pe nahi, demo class mein teri performance pe decide hoti hai. Strong student hai toh seat pakki — chahe full fee ghar mein affordable ho ya na ho.",
    ],
  },

  promise: {
    eyebrow: "Paanch logon ka room",
    headline: "Paanch students. Sab dikhte hain. Koi peeche nahi chhupta.",
    lead: "200 logon ki class nahi jahan tu comment section ko sawaal kare. YouTube playlist nahi jahan akela atak jaaye. Ek live room hai jahan paanch log, ek instructor, do ghante twice a weekend. Sawaal poochhne mein darr nahi lagta yahaan.",
    supporting:
      "Do hafte mein tera ek working agent hoga laptop pe. Char hafte mein deployed — real URL pe, jisko bhi link bhej, woh use kar sakta hai. PDF certificate nahi. Banayi hui cheez.",
  },

  curriculum: {
    eyebrow: "Tu kya banayega",
    headline: "Char hafte. Har hafte kuch chalta hua.",
    lead: "Slide decks nahi. 12-ghante ki playlists nahi. Har Sunday tu laptop band karega ek chalti hui cheez ke saath — pehle chhoti, phir badi, jab tak ek deployed AI agent tera apna nahi ho jaata. Maths jo neeche hai woh school se hi pata hai.",
    outcomeLabel: "Sunday raat tak:",
  },

  // Hinglish week descriptions — closes the tone gap on the curriculum cards.
  weeks: [
    {
      label: "Week 01",
      title: "Pehla working agent",
      desc: "Tu apna pehla AI agent script Python mein likhega. Chalta hai. Har line samajh aati hai. Maths jo neeche hai woh tujhe school se hi pata hai.",
      outcome: "Ek chalta hua agent script jo tu kisi ko bhi samjha sakta hai.",
    },
    {
      label: "Week 02",
      title: "Memory aur tools",
      desc: "Agent thoda smart hota hai. Pichli conversation yaad rakhta hai. Web search jaise tools use karta hai. Tu ek aisa agent banayega jo multi-step kaam khud kare.",
      outcome: "Ek agent jo end-to-end kuch useful karta hai.",
    },
    {
      label: "Week 03",
      title: "Teri apni idea, ban gayi",
      desc: "Tu apni ek idea laata hai. Instructor uska architecture banata hai tere saath. Do students same cheez nahi banate. Yahaan se cheez personal ho jaati hai.",
      outcome: "Ek custom agent jo teri chuni hui problem solve karta hai.",
    },
    {
      label: "Week 04",
      title: "Deployed, present bhi kiya",
      desc: "Agent live ho jaata hai — real URL jahan koi bhi visit kar sake, GitHub repo tera apna. Aakhri session demo day hai — ghar wale audience mein.",
      outcome: "Ek live URL, ek GitHub repo, aur ek demo day jo ghar wale dekhte hain.",
    },
  ],

  instructor: {
    eyebrow: "Sikhata kaun hai",
    headline: "Koi rotating tutor nahi. Ek banda — production mein AI ship karta hai.",
    lead: "\"Main AI systems banata hoon kaam ke liye. School ke students ko jo padhaya jaa raha tha woh dekha aur samajh aaya — asli cheez koi dikha nahi raha. Isliye Logic Labs shuru ki. Tera naam week one mein hi yaad hoga mujhe. Atak gaya toh main hi hoon jisse tu poochhega.\"",
    showLinks: true,
    showShippedWork: true,
  },

  closing: {
    eyebrow: "Cohort 01 · Saturday, 13 June 2026",
    headline: "₹99.\nPehle aa, phir dekh.",
    body: "Do ghante. Tu instructor se milta hai, kuch chhota banata hai, ek short live test deta hai. Agar tere liye nahi hai, tu ₹99 mein bachega — ₹19,999 mein nahi. Agar hai, toh tujhe finally ek aisa rasta milega jo YouTube tab band karne pe khatam nahi hota.",
  },

  pricing: {
    headline: "₹99 mein aa. Demo class mein decide hoga sab.",
    scholarshipLine:
      "Scholarship demo class mein milti hai — teri performance pe, kisi form pe nahi. Essays nahi. Financial proof nahi. Aaja, code likh, aur seat ka real chance hai.",
  },

  scholarship: {
    pill: "Scholarship demo class mein milti hai — form pe nahi",
    line: "Scholarship ₹99 wali demo class mein decide hoti hai — teri performance pe, kisi form pe nahi.",
    bannerEyebrow: "Logic Labs Scholarship",
    bannerHeadline: "Seat kamayi jaati hai. Sirf kharidi nahi jaati.",
    bannerBody:
      "Har Cohort 01 seat pe scholarship mil sakti hai — aur woh ₹99 wali demo class mein decide hoti hai, teri performance pe. Na essay, na financial proof, na kisi committee ka wait. Strong student hai toh seat pakki — chahe full ₹19,999 fee ghar mein affordable ho ya na ho.",
    bannerCta: "Scholarship kama · ₹99",
    points: [
      "Performance pe decide hoti hai",
      "Na essay, na financial proof",
      "₹99 demo class mein milti hai",
    ],
  },

  payModal: {
    title: "Demo class book kar",
    subtitle: "₹99 · Do ghante, live. Instructor room mein hota hai.",
    ctaLabel: "₹99 bhar de",
  },

  seo: {
    title: "Class 11? Tera phone mein AI hai, tune banaya nahi — Logic Labs",
    description:
      "Class 11 ke liye live AI cohort — char weekends, paanch students, ek practitioner instructor. Char hafte mein deployed AI agent. 13 June 2026 se shuru.",
  },

  faqPriority: ["student", "parent"],

  // FAQ section copy in Hinglish — closes the last piece of the tone gap.
  faq: {
    eyebrow: "Seedhi baat",
    headline: "Jo sawaal tere mann mein hain.",
    supporting:
      "Koi sawaal yahaan nahi hai? <a href=\"mailto:priyanshu_sem@zohomail.in\" style=\"color: var(--color-accent-deep); text-decoration: underline; text-underline-offset: 4px;\">priyanshu_sem@zohomail.in</a> pe likh — ek insaan reply karega. Bot nahi hai.",
    studentGroupLabel: "Tere liye",
    parentGroupLabel: "Ghar walon ke liye",
  },

  // Hinglish student FAQs. The parent group is intentionally empty (the
  // group renders only when it has items), keeping the audience pure.
  faqs: [
    {
      q: "Mujhe pehle Python aata nahi — chal jaayega?",
      a: "Haan. Class mein Python ki basics cover hoti hain jisko zaroorat hai. Bas Class 9 maths aur curiosity chahiye. Bas itna hi.",
      forParent: false,
    },
    {
      q: "Iski koi free YouTube playlist nahi mil sakti?",
      a: "Mil jaayegi. Aur zyaadatar log start karke beech mein chhod dete hain. Bottleneck access nahi hai — sawaal poochhne ke liye ek banda chahiye paas, aur class itni chhoti ki sawaal poochhna scary na lage. Yahi farak hai.",
      forParent: false,
    },
    {
      q: "Board exams ke time pe time kahaan se nikalu?",
      a: "Sirf Saturday-Sunday hai. Weekdays bilkul touch nahi hote. Aur jo students AI ko samajhte hain, woh padhai mein zyada focused hote hain, kam nahi.",
      forParent: false,
    },
    {
      q: "₹19,999 bahut hai. Yeh worth hai?",
      a: "Pehli class ₹99 hai. Aa, kuch banata, live test deta. Instructor, format, students sab dekh leta. Tere liye nahi hai toh ₹99 gaya — ₹19,999 nahi.",
      forParent: false,
    },
    {
      q: "Scholarship kaise milti hai?",
      a: "Demo class mein. Teri performance pe. Form nahi bharna, essay nahi likhni. Aaja, code likh, aur agar instructor ko lagta hai tu ready hai, toh seat pakki — full fee chahe ya nahi.",
      forParent: false,
    },
    {
      q: "₹99 wali class refund hoti hai?",
      a: "Nahi. Pehli class ₹99 hai aur non-refundable hai — kyunki instructor ka time aur live assessment commit ho jaate hain jaise hi tu book karta hai. Upfront bata diya.",
      forParent: false,
    },
  ],

  // Student-first warm flow: validation → curriculum (what you build) →
  // instructor (named + linked + shipped work) → promise (the 5-student room)
  // → logistics → pricing → comparison sections → faq at the end.
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
