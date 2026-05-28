import Image from "next/image";
import MobileNav from "./MobileNav";
import CarouselLoader from "./CarouselLoader";

const green = "#4a7c59";
const greenLight = "#eef4f0";
const greenDark = "#3a6246";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <nav className="relative max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
              <Image
                src="/bmy_profile.jpeg"
                alt="Brian My"
                fill
                sizes="36px"
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="text-xl md:text-3xl font-bold tracking-tight" style={{ color: greenDark }}>Brian My</span>
          </div>
          <MobileNav />
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — dark at bottom for CTA legibility, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/25 via-black/30 to-blue-950/45" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-16 pb-16 md:pt-24 md:pb-32">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6 text-white/80">
            Growth Product Leader
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6 text-white max-w-2xl">
            Driven by customer obsession. Proven by growth metrics.
          </h1>
          <p className="text-base md:text-lg text-white leading-relaxed mb-6 md:mb-10 max-w-xl">
            I&apos;ve spent 15+ years building growth products at brands like Amazon,
            LendingClub, and Zendesk. Currently open to <strong>product leadership</strong> roles that are
            accountable for <strong>delivering business growth</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-full hover:border-white/60 transition-colors backdrop-blur-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-10 px-6 bg-gray-50 scroll-mt-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: green }}>Work</p>
          <h2 className="text-4xl font-bold tracking-tight mb-8">Selected case studies</h2>

          <div className="space-y-12">

            {/* Case Study 1: Zendesk */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/logo-zendesk.png" alt="Zendesk" className="w-5 h-5 rounded object-contain" />
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: green }}>
                      Zendesk · 2021–2026
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold">Reinvigorating Growth at Zendesk</h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Generative AI</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>PLG</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>B2B SaaS</span>
                </div>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Context</h4>
                  <p>
                    Zendesk reorganized around a new customer segmentation strategy in 2025. A new Digital
                    segment, companies with fewer than 50 employees, was defined. These primarily self-service
                    customers made up a segment representing tens of millions in annual bookings, but the segment
                    had been contracting over multiple consecutive quarters. As the product leader responsible
                    for the Product Led Growth strategy, I set out to reverse the decline.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Problem</h4>
                  <p>
                    Trial signups were healthy, but activation and conversion were declining. New customers
                    entered a blank, configuration-heavy product and dropped off before reaching Zendesk&apos;s
                    core &ldquo;aha moment&rdquo;, resolving a customer inquiry using the platform. The existing
                    trial and onboarding experience relied on guided tours of features, not on getting users to
                    feel immediate value.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Approach</h4>
                  <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
                    <div className="md:flex-1">
                      <p className="mb-4">
                        Reframed the problem around customer outcomes: trialists didn&apos;t want AI for its own
                        sake. Instead, they wanted to know <em>&ldquo;How would Zendesk work for my business?&rdquo;</em>{" "}
                        That insight led me to make a bet on generative AI to transform the trial experience into
                        one guiding users to resolve their first ticket with real data, without touching any
                        configuration.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Built an AI-assisted onboarding experience that inferred company context from signup
                            data, pre-configured help center content and workflows, and auto-generated sample
                            tickets and support scenarios
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Ran focused experiments using OpenAI&apos;s Web Search API to expedite user setup
                            and accelerate time-to-first-resolved-inquiry
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Partnered with GTM teams to surface product signals (stalled onboarding, strong buying
                            intent) for proactive outreach; iterated across two experiment cycles over two months
                          </span>
                        </li>
                      </ul>
                    </div>
                    <CarouselLoader />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Outcome</h4>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="rounded-xl px-8 py-5 text-center shrink-0" style={{ backgroundColor: greenLight }}>
                      <p className="text-4xl font-bold" style={{ color: greenDark }}>170%</p>
                      <p className="text-sm mt-1" style={{ color: greenDark }}>increase in trial activation</p>
                    </div>
                    <p className="flex-1 mt-2">
                      170% increase in trialists resolving a customer inquiry, a leading indicator to
                      conversion. The AI-assisted experience, combined with other growth initiatives I directed,
                      helped the team deliver a bookings inflection in Q3 2025, returning to quarter-over-quarter
                      growth after multiple consecutive quarters of contraction. The experience also helped
                      reposition Zendesk more competitively against Fin, Decagon, and Sierra as customer
                      expectations around AI rapidly increased.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Lesson</h4>
                  <p className="italic text-gray-500">
                    AI alone doesn&apos;t move metrics — solving a concrete customer problem does. The real
                    work was understanding why trialists were failing, then using AI as the lever to eliminate
                    that friction. We weren&apos;t rewarded for using AI. We were rewarded for balancing speed,
                    experimentation, and a genuine customer insight.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2: Amazon Music */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/logo-amazon.png" alt="Amazon" className="w-5 h-5 rounded object-contain" />
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: green }}>
                      Amazon · 2018–2021
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold">Growing Amazon Music at Scale</h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Awareness</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Activation</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Monetization</span>
                </div>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Context</h4>
                  <p>
                    As a Principal PM at Amazon Music, I led three growth product teams responsible for global
                    acquisition and retention across 60M+ customers. Amazon Music sat inside one of the
                    world&apos;s most powerful distribution ecosystems, yet still faced a significant awareness
                    problem.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Problem</h4>
                  <p>
                    Two gaps, same root cause. Tens of millions of Prime members didn&apos;t know Amazon Music
                    was included in their membership. And existing customers weren&apos;t upgrading to Amazon
                    Music Unlimited or understanding why it was worth paying for over Spotify or Apple Music.
                    The discovery problem wasn&apos;t inside the app. It was before customers ever opened it.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Approach</h4>
                  <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
                    <div className="md:flex-1">
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            <strong className="text-gray-900">Meet customers where they already are.</strong>{" "}
                            My biggest bet: embedding an Amazon Music player directly into the amazon.com commerce
                            experience. A customer searching for Billie Eilish merchandise would discover they
                            already had access to Amazon Music and could start listening immediately. I wrote the
                            six-page PRFAQ, secured alignment across Amazon Music, Retail, and Prime leadership,
                            and proposed it as a two-way door decision built for rapid experimentation. It launched
                            after I left Amazon. It&apos;s still live on amazon.com today. In Amazon&apos;s
                            culture, that means it earned its place.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            <strong className="text-gray-900">Solve the cold-start problem.</strong> We introduced
                            an Artist Taste Collection in the first-time user experience: a short quiz capturing
                            favorite artists that immediately personalized the Home experience with relevant
                            recommendations. Getting personalization right in session one is often the difference
                            between a retained user and a churned one.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            <strong className="text-gray-900">Remove friction at the upgrade moment.</strong>{" "}
                            Inspired by Amazon&apos;s 1-Click Buy Now, I brought that same pattern into Amazon
                            Music for AMU upgrades, requiring close collaboration with security, compliance, and
                            finance to ensure we weren&apos;t eroding customer trust.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-80 shrink-0">
                      <div className="relative w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: "1200 / 952" }}>
                        <Image
                          src="/amazon.webp"
                          alt="Amazon Music discovery experience on amazon.com"
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 640px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Outcome</h4>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="rounded-xl px-8 py-5 text-center shrink-0" style={{ backgroundColor: greenLight }}>
                      <p className="text-4xl font-bold" style={{ color: greenDark }}>104%</p>
                      <p className="text-sm mt-1" style={{ color: greenDark }}>YoY subscription increase</p>
                    </div>
                    <p className="flex-1 mt-2">
                      A high-velocity A/B testing framework across iOS, Android, Desktop, and FireTV/Echo Show
                      accelerated our learning cycles and drove a 104% year-over-year premium subscriber
                      increase. The retail discovery experience launched and remains live on amazon.com.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Lesson</h4>
                  <p className="italic text-gray-500">
                    The best growth lever isn&apos;t always inside your product. Sometimes the
                    highest-leverage move is finding where your customers already are — and making it
                    frictionless to discover you there.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 3: LendingClub */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/logo-lendingclub.png" alt="LendingClub" className="w-5 h-5 rounded object-contain" />
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: green }}>
                      LendingClub · 2015–2018
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold">0→1 Launch of Balance Transfer Personal Loans</h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>0 → 1</span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Fintech</span>
                </div>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Context</h4>
                  <p>
                    A large percentage of LendingClub borrowers said they wanted loans to pay off credit card
                    debt, but after receiving funds, many weren&apos;t actually paying down their balances.
                    The credit and risk teams proposed a balance transfer product where LendingClub would pay
                    creditors directly instead of depositing cash.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Problem</h4>
                  <p>
                    Two teams with fundamentally different incentives had to build one product together. Risk
                    wanted maximum verification and friction to ensure debt paydown and minimize default risk.
                    Design and Growth wanted a simple, intuitive experience that didn&apos;t kill funnel
                    conversion. My job was to find the path through.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Approach</h4>
                  <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
                    <div className="md:flex-1">
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Brought both sides together around a shared customer outcome of improving borrowers&apos;
                            financial health, rather than debating features
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Proposed an iterative rollout: MVP had users manually enter creditor info; risk teams
                            maintained stronger validation controls; design teams accepted initial friction in
                            exchange for fast learning
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Instrumented the funnel heavily across awareness, offer selection, creditor entry,
                            funding conversion, and repayment behavior
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                          <span>
                            Drove subsequent iterations: pre-populating creditor info, simplifying the balance
                            transfer flow, improving offer display relative to traditional cash loans, reducing
                            cognitive overload during loan selection
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 md:mt-0 w-1/2 md:w-60 shrink-0">
                      <div className="relative w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: "600 / 709" }}>
                        <Image
                          src="/lendingclub.webp"
                          alt="LendingClub balance transfer product"
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 320px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Outcome</h4>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="rounded-xl px-8 py-5 text-center shrink-0" style={{ backgroundColor: greenLight }}>
                      <p className="text-4xl font-bold" style={{ color: greenDark }}>~$900</p>
                      <p className="text-sm mt-1" style={{ color: greenDark }}>saved per borrower</p>
                    </div>
                    <p className="flex-1 mt-2">
                      Significant reduction in interest rates, with many borrowers improving their credit scores
                      within months. Gave LendingClub much greater confidence that loan proceeds were being used
                      to pay down debt. The product became foundational to LendingClub&apos;s personal loans
                      experience and was rolled out across the platform.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Lesson</h4>
                  <p className="italic text-gray-500">
                    Successful product leadership often isn&apos;t about choosing between customer experience
                    and risk management — it&apos;s about creating alignment around shared outcomes, then using
                    iterative experimentation to build trust across teams.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section id="projects" className="py-10 px-6 bg-white scroll-mt-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: green }}>Side Quest</p>
          <h2 className="text-4xl font-bold tracking-tight mb-8">Built for fun</h2>

          <div className="bg-gray-50 rounded-2xl p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: green }}>
                  March 2026
                </p>
                <h3 className="text-2xl font-bold">Support Space</h3>
              </div>
              <div className="flex gap-2 shrink-0">
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>RPG</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Phaser</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: greenLight, color: greenDark }}>Vite</span>
              </div>
            </div>

            <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
              <p>
                In junior year at Michigan, I spent a full semester building a game as a class project.
                It was harder than I expected, and I never quite finished it.
              </p>
              <p>
                Twenty-some years later, on a Friday afternoon in March, I built one in a weekend.
                I used a recently created MCP server to connect an LLM directly to Zendesk&apos;s help center
                content, then asked myself: what&apos;s the most fun thing I can do with this? The answer was
                a role-playing game where Zendesk&apos;s own documentation becomes the game world — bosses,
                trivia battles, and all. My kids helped add polish over the weekend before we shipped it.
              </p>
              <p className="italic text-gray-500">
                The 2002 version: one semester, never finished. The 2026 version: one weekend, live on the internet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src="/rpg-title.webp"
                  alt="Support Space RPG title screen"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 240px"
                />
              </div>
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-200" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src="/rpg-gameplay.webp"
                  alt="Support Space RPG gameplay showing a trivia battle"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 240px"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://zendesk-rpg.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white text-sm font-medium rounded-full transition-colors"
                style={{ backgroundColor: greenDark }}
              >
                Play the game →
              </a>
              <a
                href="https://github.com/brianmy-zendesk/zendesk-rpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border text-sm font-medium rounded-full transition-colors"
                style={{ borderColor: greenDark, color: greenDark }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                View source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-10 px-6 bg-white scroll-mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="md:sticky md:top-32">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: green }}>About</p>
              <h2 className="text-4xl font-bold tracking-tight leading-tight mb-8">
                The PM behind<br />the metrics
              </h2>
              <div className="relative w-2/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/bmy_profile.jpeg"
                  alt="Brian My"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 67vw, 22vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                The metric is never the problem. The problem is always upstream: in how a customer experiences
                the product, what they were promised, what they actually need. After fifteen years in growth,
                that&apos;s the belief I keep coming back to.
              </p>
              <p>
                I&apos;m a builder with a bias toward shipping. I&apos;d rather run a focused experiment and
                learn fast than deliberate until the moment passes. What I&apos;ve found is that you can move
                quickly and get it right, if you do the customer work first. I hold my teams accountable to
                quantifying impact in both directions: what did customers feel, and what did it do to the
                business metrics.
              </p>
              <p>
                I care about building teams, not just products. The environments I&apos;m most proud of
                weren&apos;t the ones that shipped the most. They were the ones where people were trusted,
                engaged, and growing alongside the work. I want a seat at the table not because I need the
                credit, but because product leaders who are in the room make better decisions for customers
                and for the business.
              </p>
              <p>
                Outside of work: I enjoy my daily jog around Moraga, bring the same analytical obsession
                to fantasy football and baseball that I bring to activation funnels, and spend a lot of
                time on the sidelines. My two sons are deep into swimming, baseball, and Scouts. I coach
                when I can. I show up when I can&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-10 px-6 bg-gray-900 text-white scroll-mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: greenDark }}>Contact</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s talk.</h2>
          <p className="text-lg text-gray-400 mb-10">
            Open to product leadership roles that are accountable for delivering business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:brian.my@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              brian.my@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/brianmy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-medium rounded-full hover:border-white/50 transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="https://drive.google.com/file/d/1ibWCc1wFp1WxJ_JoWiYaXlBhkzEGHmZr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-medium rounded-full hover:border-white/50 transition-colors"
            >
              Resume →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between text-sm">
          <span className="text-gray-400">Brian My</span>
          <span className="text-gray-400">© {new Date().getFullYear()}</span>
        </div>
      </footer>

    </div>
  );
}
