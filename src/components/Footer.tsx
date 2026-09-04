import type { MouseEvent } from 'react';
function deadClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <img
            src="/assets/logo.jpeg"
            alt="NAP Consulting"
            className="mb-4 h-12 w-auto rounded-sm bg-white object-contain p-1"
          />
          <p className="text-sm leading-relaxed text-white/65">
            Medical device consulting focused on marketing, sales, and
            commercial readiness — from go-to-market strategy through launch.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/45">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              {["Services", "About", "Insights"].map((label) => (
                <li key={label}>
                  <a href="#" onClick={deadClick} className="focus-ring hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/45">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a
                  href="mailto:nap@nap.ski"
                  className="focus-ring text-accent hover:text-white"
                >
                  nap@nap.ski
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} NAP Consulting. All rights reserved.</p>
          <p className="tracking-wide">nap.ski · Launching soon</p>
        </div>
      </div>
    </footer>
  );
}
