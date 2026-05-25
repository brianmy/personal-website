# PRD: Brian My — Personal Brand Website

## Overview

A personal website for Brian My, a strategic Growth Product Leader with 15+ years of experience, designed to support his search for a senior PM role. The site should function as a living portfolio and professional hub — communicating his unique value, showcasing his work, and giving hiring decision-makers a reason to reach out.

**Reference inspiration:** [benshih.design](https://www.benshih.design/) — clean, minimal, case-study-driven, personality-forward.

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
| Recruiters | Quick orientation, contact info, LinkedIn link |
| Former colleagues / referral network | Something to forward that makes a strong case |

---

## Non-Goals

- A job board or resume replacement (LinkedIn handles this)
- A blog or writing section (deferred to v2)
- E-commerce or any transactional flow

---

## Pages & Content

### 1. Home / Hero
- **Positioning headline** — one crisp line defining what Brian does and for whom
  - Example direction: *"Growth PM who turns ambiguous problems into products people actually use"*
- **Sub-headline** — 1–2 sentences on his background and current focus
- **CTA** — "See my work" (scrolls to case studies) + "Get in touch"
- Professional photo

### 2. Work / Case Studies

Three case studies showing Brian's thinking process and measurable impact. Each follows this structure:
- **Context** — Company, role, the problem
- **Approach** — How Brian thought about it, key decisions
- **Outcome** — Quantified results
- **What I learned** — Shows self-awareness and growth

---

#### Case Study 1: Reinvigorating Growth at Zendesk *(Zendesk, 2024–2025)*

**Context:** In early 2025, Zendesk reorganized around a new Digital Segment — SMBs with small or growing customer support teams. The segment had seen multiple consecutive quarters of bookings contraction. Brian was brought in under a new GM to lead new business bookings with a specific focus on the self-service trial experience, and later expanded scope to own onboarding and adoption for paying customers.

**Problem:** Trial signups were healthy, but activation and conversion were declining. New customers entered a blank, configuration-heavy product and dropped off before reaching Zendesk's core "aha moment" — resolving a customer inquiry. The onboarding experience relied on guided tours of features, not on getting users to feel immediate value.

**Approach:**
- Reframed the problem around customer outcomes: users didn't want AI for its own sake — they wanted to know *"How would Zendesk work for my business?"*
- Led the team to build an AI-assisted onboarding experience that inferred company context from signup data, used generative AI to pre-configure help center content and workflows, and auto-generated sample tickets and support scenarios
- Ran focused experiments using OpenAI's Web Search API to expedite user setup and get users to their first resolved inquiry faster
- Partnered with GTM teams to surface product signals (stalled onboarding, strong buying intent) for proactive outreach
- Iterated quickly: two experiment cycles over two months, layering in more AI-generated personalization over time

**Outcome:**
- 170% increase in the number of trialists who resolved a customer inquiry — the key activation milestone
- Combined with other Digital Segment initiatives, the team delivered a bookings inflection in Q3 — returning to quarter-over-quarter growth after multiple consecutive quarters of contraction
- The AI-assisted setup experience also helped reposition Zendesk competitively as customer expectations around AI capabilities rapidly increased

**Lesson:** AI works best when it solves a concrete customer problem rather than being treated as a standalone feature. Successful AI product development requires balancing speed, experimentation, and customer trust — especially when the technology and market expectations are evolving quickly.

---

#### Case Study 2: 0→1 Launch of Balance Transfer Personal Loans *(LendingClub)*

**Context:** A large percentage of LendingClub borrowers said they wanted loans to pay off credit card debt — but after receiving funds, many weren't actually paying down their balances. This left customers in debt longer than expected, and created risk and repayment concerns for the business. The credit and risk teams proposed a balance transfer product where LendingClub would pay creditors directly instead of depositing cash.

**Problem:** Two teams with fundamentally different incentives had to build one product together. Risk wanted maximum verification and friction to ensure debt paydown and minimize default risk. Design and Growth wanted a simple, intuitive experience that didn't kill funnel conversion. Brian's job was to find the path through.

**Approach:**
- Brought both sides together around a shared customer outcome — improving borrowers' financial health — rather than debating features
- Proposed an iterative rollout instead of trying to solve everything perfectly upfront
- MVP: users manually entered creditor information; risk teams had stronger validation and direct-pay controls; design teams accepted initial friction in exchange for fast learning
- Instrumented the funnel heavily across awareness, offer selection, creditor entry, funding conversion, and repayment behavior
- Drove subsequent iterations: pre-populating creditor info, simplifying the balance transfer flow, improving offer display relative to traditional cash loans, reducing cognitive overload during loan selection
- Ran A/B tests across borrower segments, starting with debt consolidation customers before expanding broadly

**Outcome:**
- Borrowers using balance transfer loans saved an average of nearly $900 over the life of the loan
- Significant reduction in interest rates, with many borrowers improving their credit scores within months
- Gave LendingClub much greater confidence that loan proceeds were actually being used to pay down debt — directly supporting the company's financial wellness mission
- Product became a foundational part of LendingClub's personal loans experience and was rolled out across the platform

**Lesson:** Successful product leadership often isn't about choosing between customer experience and risk management — it's about creating alignment around shared outcomes, then using iterative experimentation to build trust across teams.

---

#### Case Study 3: Amazon Music Discovery on Amazon.com *(Amazon — placeholder)*

> **Status: Placeholder.** Brian to provide a STAR-format summary of this experience. The case study will cover his work on integrating Amazon Music discovery into Amazon's ecommerce experience.

---

### 3. About
More personal than a LinkedIn bio. Should answer:
- What drives Brian as a PM — his product philosophy
- What makes him different: customer obsession, business judgment, empathetic leadership
- A glimpse of the person, not just the professional — interests, what he's thinking about

### 4. Contact
- Simple `mailto:` link
- LinkedIn URL
- Clear CTA: *"Open to senior PM and Head of Product roles. Let's talk."*

---

## Design Direction

Inspired by benshih.design, with adjustments for a PM (not designer) audience.

- **Tone:** Confident, clear, human — not corporate
- **Layout:** Clean, generous whitespace, content-first
- **Typography:** Strong hierarchy — one serif or modern sans for headings, readable body font
- **Color:** Neutral base (white/off-white) with one strong accent color — let it emerge from the design process
- **Photography:** Professional photo of Brian on hero
- **Mobile:** Fully responsive
- **No clutter:** No unnecessary animations, widgets, or social feeds

---

## Decisions Made

| Question | Decision |
|---|---|
| Domain | `brianmy.com` |
| Registrar | Namecheap |
| Hosting | Vercel (free tier, auto-deploy from GitHub) |
| Stack | Next.js + Tailwind CSS |
| Writing/blog | Deferred to v2 |
| Photo | Brian has a professional photo ready |
| Timeline | ASAP — target live within 2 weeks |
| Color/style | Let it emerge from reference sites |

---

## Technical Requirements

- Fast load times (Core Web Vitals passing)
- SEO-ready (meta tags, OG images, sitemap)
- Easy for Brian to update content without a developer
- Auto-deploys from the `brianmy/personal-website` GitHub repo via Vercel

---

## Success Metrics

- [ ] Site is live at `brianmy.com` within 2 weeks of build start
- [ ] At least 2 complete case studies published at launch
- [ ] Passes Google PageSpeed Insights (score > 90 mobile)
- [ ] At least 3 inbound conversations from hiring managers within 60 days of launch

---

## Remaining Open Items

- [ ] **Case Study 3:** Brian to provide STAR summary for Amazon Music discovery work
- [ ] **Hero headline:** Finalize positioning statement (draft above is a starting point)
- [ ] **About copy:** Brian to draft or provide raw thoughts; can be refined with Claude
- [ ] **Confidentiality check:** Review case study details (especially Zendesk metrics) before publishing
