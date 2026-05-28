// Single source of truth for cohort-level facts. Referenced by copy + JSON-LD.

export const COHORT = {
  brand: "Build Space",
  cohort: "Logic Labs · Cohort 01",
  startDate: "2026-06-13",
  startDateReadable: "Saturday, June 13, 2026",
  endDate: "2026-07-12",
  durationWeeks: 4,
  sessionsPerWeek: 2,
  totalSessions: 8,
  sessionHours: 2,
  scheduleSummary: "Saturdays + Sundays, 2 hours each",
  format: "Online, live, browser-only (Chrome or Safari)",
  batchSize: 5,
  classEligibility: "Class 9 to 12",
  country: "India",
  language: "English",
  priceINR: 19999,
  priceDisplay: "₹19,999",
  contact: {
    email: "hello@buildspace.in",
    whatsapp: "+91 00000 00000", // placeholder — replace before launch
  },
  url: "https://buildspace.in",
  ogImage: "/og-cover.png",
  instructor: {
    name: "The Logic Labs Instructor", // public name TBD
    role: "AI Engineer · Currently building agentic systems in production",
    credentials: [
      "Recur Club",
      "TCS Bancs",
      "Marxx AI",
      "5+ years building",
      "Agentic systems",
    ],
    // Public social links — surfaced in the Instructor section when a variant
    // sets `instructor.showLinks = true`. Closes the "trust gap" for audiences
    // (e.g. tutorial-dropout) that need to see a real face before trying again.
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
    // One concrete shipped product surfaced when a variant sets
    // `instructor.showShippedWork = true`. For high-anxiety audiences
    // (e.g. class12-parent) it's the proof that the instructor doesn't just
    // teach AI — they ship it. Update `href` to the real product URL before
    // launch; the placeholder is fine for staging.
    shippedWork: {
      label: "Recur Club",
      href: "https://recurclub.com",
      summary: "Agentic AI systems running in production today.",
    },
  },
  stats: [
    { value: "5", label: "students per cohort" },
    { value: "4", label: "weekends, weekends only" },
    { value: "₹99", label: "to attend the demo class" },
    { value: "1", label: "instructor, every session" },
  ],
  weeks: [
    {
      label: "Week 01",
      title: "First working agent",
      desc: "Your child writes their first AI agent script in Python. It runs. They understand every line. The maths behind it connects to what they already know from school.",
      outcome: "A working agent script your child can explain to you.",
    },
    {
      label: "Week 02",
      title: "Memory and tools",
      desc: "The agent gets smarter. It remembers things between conversations. It can use external tools like web search. Your child builds an agent that completes a real multi-step task on its own.",
      outcome: "An agent that does something useful, end-to-end.",
    },
    {
      label: "Week 03",
      title: "Their own idea, built",
      desc: "Your child brings an idea. The instructor helps them architect it. No two students build the same thing. This is the week the abstract becomes personal.",
      outcome: "A custom agent that solves a problem your child chose.",
    },
    {
      label: "Week 04",
      title: "Deployed, and presented",
      desc: "The agent goes live with a real URL anyone can visit and a GitHub repository your child owns. The final session is demo day, with you in the audience.",
      outcome: "A live URL, a GitHub repo, and a demo day you watch.",
    },
  ],
  howSteps: [
    {
      num: "01",
      title: "Apply in two minutes",
      desc: "Tell us your child's class, what they already know, and why they want in. No essays.",
    },
    {
      num: "02",
      title: "Attend the ₹99 demo class",
      desc: "First class is ₹99. Your child builds something small, meets the instructor, and takes a short live test. Scholarships are decided here, based on performance.",
    },
    {
      num: "03",
      title: "Confirm the spot",
      desc: "If your child is in, the fee is one-time over UPI. Scholarships apply automatically. No EMI, no hidden charges.",
    },
    {
      num: "04",
      title: "Four weekends of class",
      desc: "Saturdays and Sundays, 2 hours each. The school week stays untouched. Doubts can be asked any day.",
    },
    {
      num: "05",
      title: "Demo day, with you in the room",
      desc: "Week 4 ends with a live presentation. Your child walks you through what they built, on a real URL.",
    },
  ],
  logistics: [
    { label: "Start", value: "13 June 2026", note: "Saturday · 8 sessions over 4 weeks" },
    { label: "Schedule", value: "Sat + Sun", note: "2 hours per session, weekends only" },
    { label: "Format", value: "Online, live", note: "Chrome or Safari, no software to install" },
    { label: "Batch size", value: "5 students", note: "A hard limit, not a promise" },
    { label: "Eligible", value: "Class 9 to 12", note: "India · Python helpful, not required" },
    { label: "Parents", value: "Always welcome", note: "Observer access to any session · WhatsApp contact" },
  ],
  compare: [
    {
      label: "Teaches what companies hire for today",
      them: "Block-based demos, API calls to chatbots",
      us: "Real Python, production-grade agents",
    },
    {
      label: "Built for Indian Class 9 to 12 specifically",
      them: "Designed for 135 countries",
      us: "India-first, builds on JEE maths",
    },
    {
      label: "Who teaches the class",
      them: "Rotating pool of CS graduates",
      us: "One AI practitioner, every session",
    },
    {
      label: "Batch size",
      them: "10 to 200 students",
      us: "5 students, hard limit",
    },
    {
      label: "Session length",
      them: "45 minutes",
      us: "2 hours, long enough to actually build",
    },
    {
      label: "What your child walks out with",
      them: "A PDF certificate",
      us: "A live, deployed AI agent + GitHub repo",
    },
  ],
  pricingIncludes: [
    "8 live sessions, 2 hours each",
    "One instructor throughout",
    "Doubt support, any day of the week",
    "Session recordings if you miss one",
    "A deployed AI agent project",
    "GitHub repository, yours to keep",
    "Demo day, family invited",
    "Completion certificate",
    "WhatsApp contact for parents",
    "Observer access to any session",
  ],
  faqs: [
    {
      q: "Will this take time away from board exams?",
      a: "It is four weekends, Saturday and Sunday, two hours each. Weekdays are completely untouched. A student who understands what AI actually is often returns to studies more focused, not less.",
      forParent: true,
    },
    {
      q: "₹19,999 is real money. What is the proof this is different?",
      a: "The first class is ₹99. Your child attends, builds something small, takes a live test. You see the instructor, the format, the students. If it is not for your child, you have spent ₹99 — not ₹19,999.",
      forParent: true,
    },
    {
      q: "Is AI even a stable career to bet on?",
      a: "The specific tools will change. The principles, how an agent reasons, how systems are built, do not. We teach the principles. A student who understands those will adapt when the tools change.",
      forParent: true,
    },
    {
      q: "What if my child has never coded before?",
      a: "Python basics are covered in class for anyone who needs them. The curriculum assumes Class 9 maths and curiosity. Nothing else.",
      forParent: true,
    },
    {
      q: "Why only 5 students per cohort?",
      a: "Because in a class of five there is nowhere to hide and no reason to. Every doubt is answered in the same session. Every student gets seen. It is the whole product, not a marketing number.",
      forParent: true,
    },
    {
      q: "How is this different from Codingal, CuriousJr, or Scaler?",
      a: "Codingal and CuriousJr teach younger children with block-based tools and rotating teachers. Scaler is built for college students and working professionals. Build Space is built specifically for Indian Class 9 to 12, by an active AI practitioner.",
      forParent: true,
    },
    {
      q: "Can my child learn this for free on YouTube?",
      a: "Yes, and most students who try, stop. The bottleneck for school students is rarely access. It is a person who answers the question the moment it comes up, and a small enough group that asking the question is not scary.",
      forParent: false,
    },
    {
      q: "What is non-refundable, and what is not?",
      a: "The demo class is ₹99 and is non-refundable, because the instructor's time and the live assessment are committed the moment you book. Once a student enrols in the full cohort, the ₹19,999 fee is also non-refundable — the cost of live instruction, model usage, and content built for that batch is committed. This is stated upfront.",
      forParent: false,
    },
  ],
} as const;

export type Faq = (typeof COHORT.faqs)[number];
