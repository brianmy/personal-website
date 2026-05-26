import Image from "next/image";

const green = "#4a7c59";
const greenLight = "#eef4f0";
const greenDark = "#3a6246";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
              <Image
                src="/bmy_profile.jpeg"
                alt="Brian My"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="text-3xl font-bold tracking-tight" style={{ color: greenDark }}>Brian My</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — dark at bottom for CTA legibility, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-24 pb-32">
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-white/60">
            Growth Product Leader
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white max-w-2xl">
            Driven by customer obsession. Proven by growth metrics.
          </h1>
          <p className="text-lg text-white leading-relaxed mb-10 max-w-xl">
            I&apos;ve spent 15+ years building growth products at brands like Amazon,
            LendingClub, and Zendesk. Currently open to product leadership roles that are
            accountable for delivering business growth.
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
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: green }}>Work</p>
          <h2 className="text-4xl font-bold tracking-tight mb-16">Selected case studies</h2>

          <div className="space-y-12">

            {/* Case Study 1: Zendesk */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: green }}>
                    Zendesk · 2021–2026
                  </p>
                  <h3 className="text-2xl font-bold">Reinvigorating Growth at Zendesk</h3>
                </div>
                <span className="text-sm text-gray-400 shrink-0">Growth PM, Digital Segment</span>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Context</h4>
                  <p>
                    In early 2025, Zendesk reorganized around a new Digital Segment — SMBs with small or growing
                    support teams. The segment had seen multiple consecutive quarters of bookings contraction.
                    I was brought in under a new GM to lead new business bookings with a focus on the self-service
                    trial experience, later expanding to own onboarding and adoption for paying customers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Problem</h4>
                  <p>
                    Trial signups were healthy, but activation and conversion were declining. New customers
                    entered a blank, configuration-heavy product and dropped off before reaching Zendesk&apos;s
                    core &ldquo;aha moment&rdquo; — resolving a customer inquiry. The onboarding experience
                    relied on guided tours of features, not on getting users to feel immediate value.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Approach</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        Reframed the problem around customer outcomes: users didn&apos;t want AI for its own
                        sake — they wanted to know <em>&ldquo;How would Zendesk work for my business?&rdquo;</em>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        Led the team to build an AI-assisted onboarding experience that inferred company context
                        from signup data, used generative AI to pre-configure help center content and workflows,
                        and auto-generated sample tickets and support scenarios
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        Ran focused experiments using OpenAI&apos;s Web Search API to expedite user setup and
                        get users to their first resolved inquiry faster
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

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Outcome</h4>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="rounded-xl px-8 py-5 text-center shrink-0" style={{ backgroundColor: greenLight }}>
                      <p className="text-4xl font-bold" style={{ color: greenDark }}>170%</p>
                      <p className="text-sm mt-1" style={{ color: green }}>increase in trial activation</p>
                    </div>
                    <p className="flex-1 mt-2">
                      Combined with other Digital Segment initiatives, the team delivered a bookings inflection
                      in Q3 — returning to quarter-over-quarter growth after multiple consecutive quarters of
                      contraction. The AI-assisted setup also helped reposition Zendesk competitively as customer
                      expectations around AI rapidly increased.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Lesson</h4>
                  <p className="italic text-gray-500">
                    AI works best when it solves a concrete customer problem rather than being treated as a
                    standalone feature. Successful AI product development requires balancing speed,
                    experimentation, and customer trust — especially when the technology and market expectations
                    are evolving quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2: Amazon Music */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: green }}>
                    Amazon · 2018–2021
                  </p>
                  <h3 className="text-2xl font-bold">Growing Amazon Music at Scale</h3>
                </div>
                <span className="text-sm text-gray-400 shrink-0">Principal PM</span>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Context</h4>
                  <p>
                    As a Principal PM at Amazon Music, I led three growth product teams responsible for global
                    acquisition and retention across 60M+ customers. Amazon Music sat inside one of the
                    world&apos;s most powerful distribution ecosystems — and still faced a significant awareness
                    problem.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Problem</h4>
                  <p>
                    Two gaps, same root cause. Tens of millions of Prime members didn&apos;t know Amazon Music
                    was included in their membership. And existing customers weren&apos;t upgrading to Amazon
                    Music Unlimited or understanding why it was worth paying for over Spotify or Apple Music.
                    The discovery problem wasn&apos;t inside the app — it was before customers ever opened it.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Approach</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        <strong className="text-gray-900">Meet customers where they already are.</strong> My
                        biggest bet: embedding an Amazon Music player directly into Amazon.com search results.
                        A customer searching for Billie Eilish merchandise would discover they already had
                        access to Amazon Music and could start listening immediately. I wrote the six-page
                        PRFAQ, secured alignment across Amazon Music, Retail, and Prime leadership, and
                        proposed it as a two-way door decision built for rapid experimentation. It launched
                        after I left Amazon. It&apos;s still live on amazon.com today — which in
                        Amazon&apos;s culture means it earned its place.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        <strong className="text-gray-900">Solve the cold-start problem.</strong> We introduced
                        an Artist Taste Collection in the first-time user experience — a short quiz capturing
                        favorite artists that immediately personalized the homepage with relevant
                        recommendations. Getting personalization right in session one is often the difference
                        between a retained user and a churned one.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        <strong className="text-gray-900">Remove friction at the upgrade moment.</strong>{" "}
                        Inspired by Amazon&apos;s 1-Click Buy Now, I brought that same pattern into Amazon
                        Music for AMU upgrades — requiring close collaboration with security, compliance, and
                        finance to ensure we weren&apos;t eroding customer trust.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Outcome</h4>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="rounded-xl px-8 py-5 text-center shrink-0" style={{ backgroundColor: greenLight }}>
                      <p className="text-4xl font-bold" style={{ color: greenDark }}>104%</p>
                      <p className="text-sm mt-1" style={{ color: green }}>YoY subscription increase</p>
                    </div>
                    <p className="flex-1 mt-2">
                      A high-velocity A/B testing framework across iOS, Android, Desktop, and FireTV/Echo Show
                      accelerated our learning cycles and drove a 104% year-over-year subscription increase.
                      The retail discovery experience launched and remains live on amazon.com — across a global
                      base of 60M+ customers.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Lesson</h4>
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
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: green }}>
                    LendingClub · 2015–2018
                  </p>
                  <h3 className="text-2xl font-bold">0→1 Launch of Balance Transfer Personal Loans</h3>
                </div>
                <span className="text-sm text-gray-400 shrink-0">Growth PM</span>
              </div>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Context</h4>
                  <p>
                    A large percentage of LendingClub borrowers said they wanted loans to pay off credit card
                    debt — but after receiving funds, many weren&apos;t actually paying down their balances.
                    The credit and risk teams proposed a balance transfer product where LendingClub would pay
                    creditors directly instead of depositing cash.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Problem</h4>
                  <p>
                    Two teams with fundamentally different incentives had to build one product together. Risk
                    wanted maximum verification and friction to ensure debt paydown and minimize default risk.
                    Design and Growth wanted a simple, intuitive experience that didn&apos;t kill funnel
                    conversion. My job was to find the path through.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Approach</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 font-medium" style={{ color: green }}>→</span>
                      <span>
                        Brought both sides together around a shared customer outcome — improving borrowers&apos;
                        financial health — rather than debating features
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

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Outcome</h4>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="rounded-xl px-8 py-5 text-center shrink-0" style={{ backgroundColor: greenLight }}>
                      <p className="text-4xl font-bold" style={{ color: greenDark }}>~$900</p>
                      <p className="text-sm mt-1" style={{ color: green }}>saved per borrower</p>
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
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Lesson</h4>
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

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white">
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
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                The metric is never the problem. The problem is always upstream — in how a customer experiences
                the product, what they were promised, what they actually need. After fifteen years in growth,
                that&apos;s the belief I keep coming back to.
              </p>
              <p>
                I&apos;m a builder with a bias toward shipping. I&apos;d rather run a focused experiment and
                learn fast than deliberate until the moment passes. What I&apos;ve found is that you can move
                quickly <em>and</em> get it right — if you do the customer work first. I hold my teams to
                quantifying impact in both directions: what did customers feel, and what did it do to the
                business metrics.
              </p>
              <p>
                I care about building teams, not just products. The environments I&apos;m most proud of
                weren&apos;t the ones that shipped the most — they were the ones where people were trusted,
                engaged, and growing alongside the work. I want a seat at the table not because I need the
                credit, but because product leaders who are in the room make better decisions for customers
                and for the business.
              </p>
              <p>
                Outside of work: I run every day, bring the same analytical obsession to fantasy football
                and baseball that I bring to activation funnels, and spend a lot of time on the sidelines.
                My two sons are deep into swimming, baseball, and Scouts. I coach when I can. I show up
                when I can&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: green }}>Contact</p>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between text-sm text-gray-500">
          <span>Brian My</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

    </div>
  );
}
