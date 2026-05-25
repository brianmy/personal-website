# PRD: Brian My — Personal Brand Website

## Status: Built — Pending Launch

The site is built and pushed to GitHub (`brianmy/personal-website`). Remaining steps before launch: connect repo to Vercel, point `brianmy.com` DNS to Vercel.

---

## Overview

A personal website for Brian My, a strategic Growth Product Leader with 15+ years of experience, designed to support his search for a senior PM role. The site functions as a living portfolio and professional hub — communicating his unique value, showcasing his work, and giving hiring decision-makers a reason to reach out.

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

### 1. Home / Hero ✅

**Headline (finalized):**
> Customer obsession first. Then growth metrics that prove themselves.

**Sub-headline (finalized):**
> I've spent 15+ years building growth products at brands like Amazon, LendingClub, and Zendesk. Currently open to product builder roles responsible for hitting business growth objectives.

**CTAs:** "See my work" (scrolls to case studies) + "Get in touch" (scrolls to contact)

**Design:** Full-bleed video background (`hero.mp4` — plants sprouting/growing), dark gradient overlay, white text. Profile photo removed from hero; visual interest carried by video.

---

### 2. Work / Case Studies ✅

Three case studies, each structured as: Context → Problem → Approach → Outcome → Lesson.

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

> ⚠️ **Pre-publish:** Confirm Zendesk metrics (170% activation, bookings inflection) are safe to publish publicly.

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

#### Case Study 3: Growing Amazon Music at Scale *(Amazon — Principal PM)*

**Context:** As a Principal PM at Amazon Music, Brian led three growth product teams responsible for global acquisition and retention across 60M+ customers. Amazon Music sat inside one of the world's most powerful distribution ecosystems — and still faced a significant awareness problem.

**Problem:** Two gaps, same root cause. Tens of millions of Prime members didn't know Amazon Music was included in their membership. And existing customers on the free tier weren't upgrading to Amazon Music Unlimited or understanding why it was worth paying for over Spotify or Apple Music. The discovery problem wasn't inside the app — it was before customers ever opened it.

**Approach:**
- **Meet customers where they already are.** Embedded an Amazon Music player directly into Amazon.com search results (e.g., searching for Billie Eilish merchandise surfaces the player). Brian wrote the six-page PRFAQ, secured alignment across Amazon Music, Retail, and Prime leadership, and proposed it as a two-way door decision. Launched after Brian left Amazon; still live on amazon.com today.
- **Solve the cold-start problem.** Introduced an Artist Taste Collection in the FTUE — a short quiz capturing favorite artists that immediately personalized the homepage with relevant recommendations in session one.
- **Remove friction at the upgrade moment.** Inspired by Amazon's 1-Click Buy Now, brought the same pattern to AMU upgrades — requiring close collaboration with security, compliance, and finance.
- Operated a high-velocity A/B testing framework across iOS, Android, Desktop, and FireTV/Echo Show.

**Outcome:**
- 104% year-over-year subscription increase
- Retail discovery experience launched and remains live on amazon.com
- Shaped acquisition and retention strategies for 60M+ customers globally

**Lesson:** The best growth lever isn't always inside your product. Sometimes the highest-leverage move is finding where your customers already are — and making it frictionless to discover you there.

---

### 3. About ✅

**Heading:** The PM behind the metrics

**Copy (finalized):**

The metric is never the problem. The problem is always upstream — in how a customer experiences the product, what they were promised, what they actually need. After fifteen years in growth, that's the belief I keep coming back to.

I'm a builder with a bias toward shipping. I'd rather run a focused experiment and learn fast than deliberate until the moment passes. What I've found is that you can move quickly *and* get it right — if you do the customer work first. I hold my teams to quantifying impact in both directions: what did customers feel, and what did it do to the business metrics.

I care about building teams, not just products. The environments I'm most proud of weren't the ones that shipped the most — they were the ones where people were trusted, engaged, and growing alongside the work. I want a seat at the table not because I need the credit, but because product leaders who are in the room make better decisions for customers and for the business.

Outside of work: I run every day, bring the same analytical obsession to fantasy football and baseball that I bring to activation funnels, and spend a lot of time on the sidelines. My two sons are deep into swimming, baseball, and Scouts. I coach when I can. I show up when I can't.

**Design:** Two-column layout — sticky heading + headshot (left), copy (right).

---

### 4. Contact ✅

- Email: brian.my@gmail.com
- LinkedIn: linkedin.com/in/brianmy
- CTA: *"Open to senior PM and Head of Product roles. Let's talk."*

---

## Design

| Element | Decision |
|---|---|
| Accent color | Heather Green — `#4a7c59` (labels, arrows) / `#3a6246` (metric numbers, nav name) |
| Background | White / `#f9fafb` (gray-50 for Work section) |
| Typography | Geist Sans (Google Fonts) |
| Hero | Full-bleed video background with dark gradient overlay |
| Case study cards | White rounded cards (`rounded-2xl`) on gray-50 background |
| Nav | Fixed, white/blur backdrop, circular headshot + "Brian My" in `text-3xl` Heather Green |
| Photo | Profile headshot in nav (36px circle) and About section (2/3 column width) |
| Mobile | Fully responsive |

---

## Decisions Made

| Question | Decision |
|---|---|
| Domain | `brianmy.com` |
| Registrar | Namecheap |
| Hosting | Vercel (free tier, auto-deploy from GitHub) |
| Stack | Next.js + Tailwind CSS + TypeScript |
| Writing/blog | Deferred to v2 |
| Photo | `bmy_profile.jpeg` — in nav and About section |
| Logo | `bmy_logo.png` — available in public/, not currently used in nav |
| Hero video | `hero.mp4` (plants sprouting) — full-bleed background |
| Color | Heather Green (`#4a7c59` / `#3a6246`) as accent |
| Timeline | ASAP — target live within 2 weeks of build start |

---

## Technical

- **Repo:** `brianmy/personal-website` (public, GitHub)
- **Framework:** Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Assets in `/public`:** `bmy_profile.jpeg`, `bmy_logo.png`, `hero.mp4`
- **Deploy:** Not yet connected to Vercel

---

## Success Metrics

- [ ] Site is live at `brianmy.com`
- [ ] At least 2 complete case studies published at launch ✅ (3 complete)
- [ ] Passes Google PageSpeed Insights (score > 90 mobile)
- [ ] At least 3 inbound conversations from hiring managers within 60 days of launch

---

## Remaining Before Launch

- [ ] **Confidentiality check:** Confirm Zendesk metrics (170% activation, Q3 bookings inflection) are safe to publish
- [ ] **Vercel:** Connect `brianmy/personal-website` repo for auto-deploy
- [ ] **DNS:** Point `brianmy.com` (Namecheap) to Vercel
- [ ] **SEO:** Add OG image for social sharing previews
- [ ] **PageSpeed:** Test and tune after Vercel deploy
