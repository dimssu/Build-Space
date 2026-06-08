// Single source of truth for cohort-level facts. Referenced by copy + JSON-LD.

export const COHORT = {
  brand: "Build Space",
  cohort: "Logic Labs · Cohort 01",
  startDate: "2026-06-20",
  startDateReadable: "Saturday, June 20, 2026",
  endDate: "2026-07-12",
  durationWeeks: 4,
  sessionsPerWeek: 2,
  totalSessions: 8,
  sessionHours: 2,
  scheduleSummary: "Saturdays + Sundays, 2 hours each",
  format: "Online, live, browser-only (Chrome or Safari)",
  batchSize: 5,
  seatsRemaining: 2, // seats left in current batch — when 0, open a new batch of 5
  classEligibility: "Class 9 to 12",
  country: "India",
  language: "English",
  priceINR: 19999,
  priceDisplay: "₹19,999",
  scholarshipPriceINR: 9999,
  scholarshipPriceDisplay: "₹9,999",
  contact: {
    email: "priyanshu_sem@zohomail.in",
    whatsapp: "+91 9315776817",
  },
  url: "https://buildspace.dimssu.com",
  ogImage: "/og-cover.png",
  instructor: {
    name: "Priyanshu Semwal",
    role: "AI Engineer · Currently building agentic systems in production",
    credentials: [
      "Recur Club",
      "TCS Bancs",
      "Marxx AI",
      "5+ years building",
      "Agentic systems",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/semwalpriyanshu/" },
      { label: "GitHub", href: "https://github.com/Priyanshu2425" },
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
  // Gallery cards for the horizontal projects section. Add a real `image` URL
  // once screenshots exist; the card renders a terminal preview until then.
  projects: [
    {
      title: "Research assistant",
      week: "Week 01",
      description: "Types a question, gets a structured answer with sources. Built in Python, running in the terminal by end of session.",
      tech: ["Python", "OpenAI API", "Web search"],
      terminal: [
        '> search("best CS colleges India 2024")',
        "",
        "Searching 8 sources...",
        "",
        "IIT Bombay · IIT Delhi · BITS Pilani",
        "lead on placements (NIRF 2024).",
        "IISc Bangalore leads on research.",
        "",
        "→ 3 sources cited.",
      ],
    },
    {
      title: "Memory-aware assistant",
      week: "Week 02",
      description: "Remembers what was said last session. Multi-tool: web search, notes, calendar. Picks up where it left off.",
      tech: ["Python", "LangChain", "SQLite"],
      terminal: [
        '> "What was my science project about?"',
        "",
        "[Memory] Session 3: lemon battery",
        "vs AA cells. Avg voltage: 0.7V.",
        "",
        "Next step: test at 25°C vs 4°C.",
        "I'll generate the test sheet now.",
      ],
    },
    {
      title: "Their own idea",
      week: "Week 03",
      description: "Week 3 belongs to the student. Every student ships something different — the instructor helps design and build it.",
      tech: ["Python", "Custom tools"],
      terminal: [
        '> build("cricket stats tracker")',
        "",
        "3 tools designed:",
        "  fetch_match_data(match_id)",
        "  summarise_innings(data)",
        "  compare_players(p1, p2)",
        "",
        "fetch_match_data → connected.",
        "Building summarise_innings...",
      ],
    },
    {
      title: "Deployed. Live URL.",
      week: "Week 04",
      description: "The finished agent goes live on a public URL with a GitHub repo. Demo day — parents in the audience.",
      tech: ["Python", "Vercel", "GitHub"],
      terminal: [
        "$ vercel deploy",
        "",
        "✓  Build complete  (4.1s)",
        "✓  Environment: production",
        "✓  URL: agent-abc.vercel.app",
        "",
        "Your agent is live.",
        "Share it with anyone.",
      ],
    },
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
    { label: "Start", value: "20 June 2026", note: "Saturday · 8 sessions over 4 weeks" },
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
    "One instructor, every session — not a rotating pool",
    "Ask doubts any day, not just during class",
    "Session recordings if you miss one",
    "A deployed AI agent on a live URL",
    "GitHub repository with your child's code",
    "Demo day — parents in the audience",
    "Completion certificate",
    "WhatsApp contact for parents",
    "Parent observer access to any session",
  ],
  faqs: [
    {
      q: "Will this take time away from board exams?",
      a: "Four weekends, Saturday and Sunday, two hours each. Weekdays are completely untouched.",
      forParent: true,
    },
    {
      q: "₹19,999 is real money. What is the proof this is different?",
      a: "The first class is ₹99: your child builds something small, takes a live test, and you see the full format before you spend ₹19,999.",
      forParent: true,
    },
    {
      q: "Is AI even a stable career to bet on?",
      a: "The tools will change. The principles, how an agent reasons, how systems are built, do not. We teach those.",
      forParent: true,
    },
    {
      q: "What if my child has never coded before?",
      a: "Python basics are covered in class. The only requirements are Class 9 maths and curiosity.",
      forParent: true,
    },
    {
      q: "Why only 5 students per cohort?",
      a: "In a class of five, every doubt is answered in that session. It is the whole product, not a marketing number.",
      forParent: true,
    },
    {
      q: "How is this different from Codingal, CuriousJr, or Scaler?",
      a: "Codingal and CuriousJr use block tools for younger children; Scaler is for college students. Build Space is for Class 9 to 12, taught by someone building AI professionally today.",
      forParent: true,
    },
    {
      q: "Can my child learn this for free on YouTube?",
      a: "Yes, and most stop. The bottleneck is not access to content — it is someone who answers the question the moment it comes up.",
      forParent: false,
    },
    {
      q: "What is non-refundable, and what is not?",
      a: "Both fees are non-refundable: the ₹99 demo class and the ₹19,999 cohort fee. This is stated upfront, not in the fine print.",
      forParent: false,
    },
  ],
} as const;

export type Faq = (typeof COHORT.faqs)[number];

export type Testimonial = {
  quote: string;
  name: string;
  description: string; // e.g. "Parent of a Class 11 student, Mumbai"
};

// Add real parent or student quotes here. The SocialProof section only renders
// when this array is non-empty — ship it empty until you have real quotes.
export const TESTIMONIALS: Testimonial[] = [];
