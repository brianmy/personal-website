# PRD: Brian My — Personal Brand Website

## Status: Built — Pending Launch

The site is built and pushed to GitHub (`brianmy/personal-website`). Remaining steps before launch: connect repo to Vercel, point `brianmy.com` DNS to Vercel.

---

## Overview

A personal website for Brian My, a strategic Growth Product Leader with 15+ years of experience, designed to support his search for a senior PM role. The site functions as a living portfolio and professional hub — communicating his unique value, showcasing his work, and giving hiring decision-makers a reason to reach out.

---

## Goals

1. **Establish credibility** with hiring managers and founders at target companies
2. **Differentiate** Brian from other senior PMs through specific work and thinking
3. **Drive inbound** — make it easy for the right people to reach out
4. **Own his narrative** — a single canonical place that goes deeper than LinkedIn

---

## Target Audience

| Audience | What they need from the site |
|---|---|
| Hiring managers / VPs of Product | Proof of impact, strategic thinking, leadership signal |
| Founders / Execs at growth-stage companies | Cultural fit, growth track record, judgment |
| Recruiters | Quick orientation, contact info, LinkedIn link, resume |
| Former colleagues / referral network | Something to forward that makes a strong case |

---

## Non-Goals

- A job board or resume replacement (LinkedIn handles this)
- A blog or writing section (deferred to v2)
- E-commerce or any transactional flow

---

## Pages & Content

### 1. Nav (fixed, white/blur) ✅

- Left: 36px circular headshot + "Brian My" in `text-3xl` Heather Green (`#3a6246`)
- Right: Work / About / Contact / Resume anchor links
- **Resume** opens Google Drive PDF in new tab

---

### 2. Hero ✅

**Headline:** Driven by customer obsession. Proven by growth metrics.

**Sub-headline:** I've spent 15+ years building growth products at brands like Amazon, LendingClub, and Zendesk. Currently open to **product leadership** roles that are accountable for **delivering business growth**.

**CTAs:** "See my work" (white pill) + "Get in touch" (border pill)

**Design:** Full-bleed video background (`hero.mp4` — plants sprouting/growing), dark blue-tinted gradient overlay, white text.

---

### 3. Work / Case Studies ✅

Three case study cards, each structured as: Context → Problem → Approach (with product screenshot) → Outcome (metric callout) → Lesson.

Each card header includes: company favicon + company name + date range + tag pills.

---

#### Case Study 1: Reinvigorating Growth at Zendesk *(2021–2026)*

**Tag pills:** Generative AI · PLG · B2B SaaS

**Context:** Zendesk reorganized around a new customer segmentation strategy in 2025. A new Digital segment, companies with fewer than 50 employees, was defined. These primarily self-service customers made up a segment representing tens of millions in annual bookings, but the segment had been contracting over multiple consecutive quarters. As the product leader responsible for the Product Led Growth strategy, I set out to reverse the decline.

**Problem:** Trial signups were healthy, but activation and conversion were declining. New customers entered a blank, configuration-heavy product and dropped off before reaching Zendesk's core "aha moment", resolving a customer inquiry using the platform. The existing trial and onboarding experience relied on guided tours of features, not on getting users to feel immediate value.

**Approach:** Reframed the problem around customer outcomes: trialists didn't want AI for its own sake. Instead, they wanted to know "How would Zendesk work for my business?" That insight led me to make a bet on generative AI to transform the trial experience into one guiding users to resolve their first ticket with real data, without touching any configuration.

→ Built an AI-assisted onboarding experience that inferred company context from signup data, pre-configured help center content and workflows, and auto-generated sample tickets and support scenarios
→ Ran focused experiments using OpenAI's Web Search API to expedite user setup and accelerate time-to-first-resolved-inquiry
→ Partnered with GTM teams to surface product signals (stalled onboarding, strong buying intent) for proactive outreach; iterated across two experiment cycles over two months

**Product screenshot:** Auto-advancing carousel of 6 screenshots (`zendesk-1.png` through `zendesk-6.png`), 4-second interval, green dot indicators.

**Outcome:** 170% increase in trial activation. Combined with other growth initiatives, delivered a bookings inflection in Q3 2025, returning to quarter-over-quarter growth after multiple consecutive quarters of contraction.

**Lesson:** AI alone doesn't move metrics — solving a concrete customer problem does. The real work was understanding why trialists were failing, then using AI as the lever to eliminate that friction.

---

#### Case Study 2: Growing Amazon Music at Scale *(2018–2021)*

**Tag pills:** Awareness & Activation · Monetization · Consumer

**Context:** As a Principal PM at Amazon Music, I led three growth product teams responsible for global acquisition and retention across 60M+ customers. Amazon Music sat inside one of the world's most powerful distribution ecosystems — and still faced a significant awareness problem.

**Problem:** Two gaps, same root cause. Tens of millions of Prime members didn't know Amazon Music was included in their membership. And existing customers weren't upgrading to Amazon Music Unlimited or understanding why it was worth paying for over Spotify or Apple Music. The discovery problem wasn't inside the app — it was before customers ever opened it.

**Approach:**
→ Meet customers where they already are. Embedded an Amazon Music player directly into the amazon.com commerce experience. Wrote the six-page PRFAQ, secured alignment across Amazon Music, Retail, and Prime leadership.
→ Solve the cold-start problem. Introduced an Artist Taste Collection in the FTUE — a short quiz capturing favorite artists that immediately personalized the Home experience.
→ Remove friction at the upgrade moment. Brought Amazon's 1-Click Buy Now pattern to AMU upgrades.

**Product screenshot:** `amazon.png` (single image, 1200×952)

**Outcome:** 104% YoY subscription increase. Retail discovery experience remains live on amazon.com.

**Lesson:** The best growth lever isn't always inside your product. Sometimes the highest-leverage move is finding where your customers already are — and making it frictionless to discover you there.

---

#### Case Study 3: 0→1 Launch of Balance Transfer Personal Loans *(2015–2018)*

**Tag pills:** 0 → 1 · Fintech

**Context:** A large percentage of LendingClub borrowers said they wanted loans to pay off credit card debt — but after receiving funds, many weren't actually paying down their balances. The credit and risk teams proposed a balance transfer product where LendingClub would pay creditors directly.

**Problem:** Two teams with fundamentally different incentives — Risk vs. Design/Growth — had to build one product together.

**Approach:** Brought both sides together around a shared customer outcome. Proposed an iterative rollout. Instrumented the funnel heavily. Drove subsequent iterations.

**Product screenshot:** `lendingclub.png` (single image, 600×709, displayed at `md:w-60`)

**Outcome:** ~$900 saved per borrower. Product became foundational to LendingClub's personal loans experience.

**Lesson:** Alignment around shared outcomes, then iterative experimentation to build trust.

---

### 4. About ✅

**Heading:** The PM behind the metrics

**Design:** Two-column sticky layout — heading + headshot left (2/3 width), copy right.

**Copy (finalized):**

The metric is never the problem. The problem is always upstream — in how a customer experiences the product, what they were promised, what they actually need. After fifteen years in growth, that's the belief I keep coming back to.

I'm a builder with a bias toward shipping. I'd rather run a focused experiment and learn fast than deliberate until the moment passes. What I've found is that you can move quickly and get it right, if you do the customer work first. I hold my teams accountable to quantifying impact in both directions: what did customers feel, and what did it do to the business metrics.

I care about building teams, not just products. The environments I'm most proud of weren't the ones that shipped the most — they were the ones where people were trusted, engaged, and growing alongside the work. I want a seat at the table not because I need the credit, but because product leaders who are in the room make better decisions for customers and for the business.

Outside of work: I enjoy my daily jog around Moraga, bring the same analytical obsession to fantasy football and baseball that I bring to activation funnels, and spend a lot of time on the sidelines. My two sons are deep into swimming, baseball, and Scouts. I coach when I can. I show up when I can't.

---

### 5. Contact ✅

**Heading:** Let's talk.
**Subhead:** Open to product leadership roles that are accountable for delivering business growth.

**CTAs (3 pills):**
- Email: brian.my@gmail.com
- LinkedIn: linkedin.com/in/brianmy
- Resume (Google Drive PDF, opens in new tab)

---

### 6. Footer ✅

"Brian My" + dynamic copyright year.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `green` | `#4a7c59` | Section labels, arrow bullets, pill text, dot indicators |
| `greenLight` | `#eef4f0` | Pill backgrounds, metric callout box backgrounds |
| `greenDark` | `#3a6246` | Metric numbers, nav "Brian My" text |
| Background | `#ffffff` / `gray-50` | White for hero/about/contact, gray-50 for Work section |
| Body text | `gray-600` | Case study body copy |
| Headings | `gray-900` | Section and card headings |

---

## Technical

| Item | Decision |
|---|---|
| Framework | Next.js 16.2.6 (App Router, TypeScript, Turbopack) |
| Styling | Tailwind CSS + inline style props for custom colors |
| Font | Geist Sans (Google Fonts) |
| Repo | `brianmy/personal-website` (public, GitHub) |
| Hosting | Vercel (free tier) — not yet connected |
| Domain | `brianmy.com` (Namecheap) — not yet pointed to Vercel |
| Security | CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy in `next.config.ts` |

---

## Key Decisions

| Question | Decision |
|---|---|
| Single-page vs multi-page | Single-page scrolling (no routing) |
| Accent color | Heather Green `#4a7c59` / `#3a6246` |
| Hero | Full-bleed video with blue-tinted dark overlay |
| Case study order | Zendesk → Amazon → LendingClub (most recent first) |
| Case study screenshots | Right-aligned in Approach section; carousel for Zendesk (6 slides), single image for Amazon and LendingClub |
| Tag pills | Per-card, greenLight background / green text, rounded-full |
| Resume | Google Drive PDF link — in nav and Contact section |
| Blog/writing | Deferred to v2 |
| Company logos | Favicons shown next to company names in Work section only |
| Nav name | Text "Brian My" preferred over logo image |

---

## Remaining Before Launch

- [ ] **Confidentiality check** — Confirm Zendesk 170% metric and Q3 bookings inflection are safe to publish
- [ ] **Vercel** — Connect `brianmy/personal-website` repo for auto-deploy
- [ ] **DNS** — Point `brianmy.com` (Namecheap) to Vercel
- [ ] **Custom email** — Set up hello@brianmy.com (Cloudflare Email Routing or Google Workspace)
- [ ] **OG image** — Add social sharing preview image for link unfurls
- [ ] **PageSpeed** — Test and tune after Vercel deploy (target: 90+ mobile)
- [ ] **Amazon/LendingClub copy** — Context and Problem sections not yet updated with Brian's final copy
