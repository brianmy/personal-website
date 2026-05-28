# Brian My — brianmy.com

Personal portfolio site for Brian My, a Growth Product Leader with 15+ years building products at Amazon, Zendesk, and LendingClub. Built to support a senior PM job search — the site goes deeper than LinkedIn, with three full case studies and the thinking behind the work.

**Live site:** [brianmy.com](https://brianmy.com)

---

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS with inline style props for a custom color system
- **Font:** Geist Sans
- **Hosting:** Vercel (auto-deploy from `main`)
- **Domain:** Namecheap → Vercel

---

## Design Decisions

**Single-page layout over multi-page routing.** The site serves a single audience with a single goal: give a hiring manager enough signal to reach out. A scrolling narrative keeps the experience focused and removes decisions about where to navigate next.

**Full-bleed video hero.** A static image would have been simpler, but a plants-sprouting video reinforces the growth theme without stating it. Paired with a dark overlay for text legibility and a poster frame for fast first paint.

**Case study structure mirrors PM deliverables.** Each case study follows Context → Problem → Approach → Outcome → Lesson — the same structure a PM uses to communicate impact to stakeholders. The format is deliberate, not decorative.

**Zendesk carousel over a single screenshot.** Six screenshots tell the product story better than one. Built as a client component with `ssr: false` dynamic import to defer hydration and minimize Total Blocking Time on mobile.

**WebP for all case study images, JPEG for the profile photo.** Next.js Image handles resize at render time, so the profile source needs to stay high-res. Downscaling before converting caused visible quality loss.

**`greenDark` (#3a6246) for text on light green backgrounds.** The primary green (#4a7c59) on the mint background (#eef4f0) produces a 4.42:1 contrast ratio — just below WCAG AA's 4.5:1 threshold for small text. The darker shade hits 5.6:1 and passes.

---

## Performance

Scores from Google PageSpeed Insights:

|  | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile | 95 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

---

## SEO / AEO

- JSON-LD Person schema for AI answer engines (Perplexity, Google AI Overviews)
- `sitemap.xml` and `robots.txt` via Next.js file-based conventions
- OG image generated server-side via `next/og`
- Google Search Console verified; sitemap submitted

---

## How It Was Built

- **Video:** Generated with [Google Flow](https://flow.google) — prompted and iterated to get the plants-sprouting growth metaphor right
- **Code:** Built with [Claude Code](https://claude.ai/code) (Anthropic's AI coding tool) — architecture, implementation, performance tuning, and accessibility fixes
- **Content:** Written by me — the case study copy, about section, and framing of each project reflect my own thinking and voice

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
