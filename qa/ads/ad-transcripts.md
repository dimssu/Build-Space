# Ad Transcripts — Logic Labs Cohort 01

Single source of truth for the 5 paid-traffic ads. Each ad targets a different audience with a different hook. The landing page variant at `src/lib/data/variants/<slug>.ts` must mirror these in tone, language, audience, and brand mark.

All ads end with the same footer chip and CTA:
- Dark chip: `Logic Labs — Cohort 1` / `Class 9–12 · Batch of 5`
- White pill CTA: `First class is at ₹99. →`

---

## Ad 1 — `class11-hi`

- **Brand mark**: `{ buildspace }` (top-right) — subtitle "build AI. not just use it."
- **Eyebrow chip** (top-left, with instructor avatar): `By week 4, you have a working AI agent. Deployed.`
- **Headline (blue, accent)**: `Bhai tu class 11 mein hai. AI ki duniya aa gayi.`
- **Headline (ink, rest)**: `Tera school abhi 2015 mein hai.`
- **Floating UI card**: titled "Chat" with green "Live" badge, url chip `youragent.buildspace.in`
  - In-card text: "Tera school Python padha raha hai jo kisi ne 10 saal pehle likha tha. Bahar AI agents hain — systems jo khud sochte hain, khud kaam karte hain. Logic Labs mein 4 weeks mein tu woh banana seekhega jo "
- **Body paragraph 1**: `Tera school Python padha raha hai jo kisi ne 10 saal pehle likha tha. Bahar AI agents hain — systems jo khud sochte hain, khud kaam karte hain.`
- **Body paragraph 2**: `Logic Labs mein 4 weeks mein tu woh banana seekhega jo companies 2026 mein hire kar rahi hain. 5 students. Sat-Sun. Same instructor. Ek deployed project — tera apna.`
- **Audience**: student (class 11)
- **Language**: hinglish (Latin script)
- **Tone**: peer-to-peer, casual, "bhai" / "tu" register

---

## Ad 2 — `class12-parent`

- **Brand mark**: `Logic.` (top-right) — distinct from buildspace, more formal
- **Eyebrow chip** (top-left, with instructor avatar): `Class 12. One summer. Use it right.`
- **Headline (blue, accent)**: `Your child is in class 12. You have one summer left before college.`
- **Headline (ink, rest)**: `This is for you.`
- **Floating UI card**: `<?php` label with green "Live" badge, url chip `youragent.buildspace.in`
- **Body paragraph 1**: `Before the degree. Before the internship grind. Before they're competing with 1.5 million engineers for the same roles — there's one summer where the head start is still possible.`
- **Body paragraph 2**: `Logic Labs is 4 weekends. Starting June 13. A deployed AI agent by the end. A portfolio piece that almost no engineering applicant has.`
- **Body paragraph 3**: `One summer. One decision.`
- **Audience**: parent (of class 12)
- **Language**: english
- **Tone**: urgent, formal, decisive, parent-to-parent

---

## Ad 3 — `class10-curious`

- **Brand mark**: `{ buildspace }` (top-right)
- **Eyebrow chip** (top-left): `Build Working AI Agents in 4 weeks`
- **Headline (blue, accent)**: `You're in class 10. You know coding matters.`
- **Headline (ink, rest)**: `You have no idea what to learn next.`
- **Floating UI card**: titled "Terminal" with green "Live" badge, url chip `youragent.buildspace.in`
- **Body paragraph 1**: `Most class 10 students will spend the next 2 years watching AI tutorials. You could spend 4 weekends building one.`
- **Body paragraph 2**: `Logic Labs is a live cohort — 5 students, class 9–12, taught by someone building AI systems in production today.`
- **Body paragraph 3**: `By week 4 you have a deployed agent. Not a course completion badge. Something that runs. Something that's yours.`
- **Audience**: student (class 10)
- **Language**: english
- **Tone**: direct, peer, framing-of-choice

---

## Ad 4 — `parent-proud`

- **Brand mark**: `{ buildspace }` (top-right)
- **Eyebrow chip** (top-left, with student avatar): `My kid built something I can't explain.`
- **Headline (blue, accent)**: `My child built something last weekend that I still don't fully understand.`
- **Headline (ink, rest)**: `And I've never been more proud.`
- **Floating UI card**: titled "Terminal" with "Live" badge, url chip `youragent.buildspace.in`
  - In-card text: `$ youragent.buildspace.in as123845267  /  Generating success from twotesnetz.`
- **Body paragraph 1**: `A link. A live AI agent. Something that runs on the internet — created by them, from scratch, in 4 weeks.`
- **Body paragraph 2**: `Not a certificate. Not a grade. Something that works. Something they can pull out their phone and show anyone, anywhere, for the rest of their life.`
- **Body paragraph 3**: `That moment is what Logic Labs is built around. 5 students. Class 9–12. Starting June 13.`
- **Audience**: parent (emotional, testimonial-first-person)
- **Language**: english
- **Tone**: first-person parent voice, emotional, proud, understated

---

## Ad 5 — `tutorial-dropout`

- **Brand mark**: `{ buildspace }` (top-right)
- **Eyebrow chip** (top-left, with student avatar): `Opened Python tutorial. Closed it. Us.`
- **Headline (blue, accent)**: `If you've opened a Python tutorial and closed it within 20 minutes —`
- **Headline (ink, rest)**: `we built this for you.`
- **Floating UI card**: terminal labelled "Terminal/Co1/chat" with green "Live" badge, url chip `youragent.buildspace.in`
- **Body paragraph 1**: `That's not a you problem. That's a content problem. Logic Labs is live, structured, and built for exactly where you are — class 9–12, some curiosity, no clear path.`
- **Body paragraph 2**: `5 students. Same instructor every session. You don't watch. You build. By week 4 you have a deployed AI agent that runs.`
- **Audience**: student (frustrated learner)
- **Language**: english
- **Tone**: empathetic, peer, "we get it"

---

## Common facts across ALL ads (must match `cohort.ts`)

- ₹99 first/demo class
- ₹19,999 full cohort (not stated in ads — only ₹99 is)
- 4 weeks / 4 weekends
- 5 students per cohort
- Class 9–12
- Sat + Sun, 2 hours each
- Starts June 13, 2026 (Saturday)
- Instructor: one AI engineer, every session
- Deliverable: deployed AI agent + live URL + GitHub repo
