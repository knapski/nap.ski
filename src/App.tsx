import Header from "./components/Header";
import Footer from "./components/Footer";
import PittsburghSkyline from "./components/PittsburghSkyline";
import type { MouseEvent } from 'react';

function deadClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
}

const SERVICES = [
  {
    title: "Regulatory Strategy",
    body: "Pathway planning, submission readiness, and cross-functional alignment for medical devices navigating FDA and international frameworks.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v14l-7-3-7 3V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "Quality Systems",
    body: "QMS design and remediation, design controls, CAPA effectiveness, and audit-ready processes that scale with your organization.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Commercialization",
    body: "Go-to-market strategy, market access considerations, and operational readiness from late development through launch.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22M21 21l-4.5-4.5" />
      </svg>
    ),
  },
];

export default function App() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <Header />

      {/* Launch banner */}
      <div className="border-b border-accent/20 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-5 py-2.5 text-center sm:px-8">
          <span
            className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden="true"
          />
          <p className="text-xs font-medium tracking-wide text-navy/80 sm:text-sm">
            Site under construction —{" "}
            <span className="font-semibold text-accent">launching soon</span>
            . For inquiries,{" "}
            <a
              href="mailto:nap@nap.ski"
              className="focus-ring underline decoration-accent/40 underline-offset-2 hover:text-accent"
            >
              nap@nap.ski
            </a>
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden="true"
          >
            <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Medical device consulting
              </p>
              <h1 className="font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Clarity from concept to commercialization
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                NAP Consulting partners with medtech teams on regulatory strategy,
                quality systems, and launch readiness — precise guidance when
                stakes and scrutiny are highest.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:nap@nap.ski"
                  className="focus-ring inline-flex items-center rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover"
                >
                  Email nap@nap.ski
                </a>
                <a
                  href="#services"
                  onClick={deadClick}
                  className="focus-ring inline-flex items-center rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/50 hover:bg-white/5"
                >
                  Our services
                </a>
              </div>
              <p className="mt-8 text-xs tracking-wide text-white/45">
                Full site experience coming soon · nap.ski
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-sm border border-white/10 bg-navy-light/80 p-6 shadow-2xl">
                <PittsburghSkyline className="w-full text-white" />
                <p className="mt-4 text-center text-xs tracking-widest text-white/40 uppercase">
                  Pittsburgh · Three rivers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-cream py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Services
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl">
                Where we add the most value
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Focused engagements across the product lifecycle — pragmatic,
                evidence-minded, and built for regulated environments.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-sm border border-navy/8 bg-white p-7 shadow-sm transition hover:border-accent/30 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-navy text-white">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {s.body}
                  </p>
                  <a
                    href="#"
                    onClick={deadClick}
                    className="focus-ring mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pittsburgh / About */}
        <section id="about" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="rounded-sm border border-navy/10 bg-cream p-6 sm:p-8">
                <PittsburghSkyline className="w-full text-navy" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Based in Pittsburgh
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl">
                At the confluence of industry and insight
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate">
                From Point State Park to the Golden Triangle, Pittsburgh has long
                been a place where rivers — and ideas — meet. NAP Consulting is
                rooted here: a practical hub for medical device leaders who need
                clear counsel without the noise.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Bridges, skyline, and three rivers — a reminder that the best
                paths forward are engineered with care.
              </p>
              <a
                href="#"
                onClick={deadClick}
                className="focus-ring mt-8 inline-flex text-sm font-semibold text-navy underline decoration-accent/50 underline-offset-4 hover:text-accent"
              >
                About NAP Consulting
              </a>
            </div>
          </div>
        </section>

        {/* Insights teaser (dead) */}
        <section id="insights" className="border-y border-navy/8 bg-cream py-16">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Insights
            </p>
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-navy sm:text-3xl">
              Perspectives on regulated product development
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate">
              Articles and briefings will appear here as we launch. In the
              meantime, reach out directly with questions about your program.
            </p>
            <a
              href="#"
              onClick={deadClick}
              className="focus-ring mt-6 inline-flex rounded-sm border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy/60"
              aria-disabled="true"
            >
              Coming soon
            </a>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-navy py-20 text-white sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Ready when you are
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65">
              Whether you are preparing a submission, strengthening a quality
              system, or planning a launch — start the conversation.
            </p>
            <a
              href="mailto:nap@nap.ski"
              className="focus-ring mt-10 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-hover"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              nap@nap.ski
            </a>
            <p className="mt-6 text-xs text-white/40">
              We typically respond within one business day.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
