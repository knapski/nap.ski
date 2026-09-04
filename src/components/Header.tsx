import { useState } from "react";
import type { MouseEvent } from 'react';

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

function deadClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#"
          onClick={deadClick}
          className="focus-ring flex shrink-0 items-center"
          aria-label="NAP Consulting home"
        >
          <img
            src="/assets/logo.jpeg"
            alt="NAP Consulting"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={deadClick}
              className="focus-ring text-sm font-medium tracking-wide text-navy/70 transition hover:text-navy"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:nap@nap.ski"
            className="focus-ring rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-sm p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-navy/10 bg-white px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    deadClick(e);
                    setOpen(false);
                  }}
                  className="focus-ring block py-2 text-sm font-medium text-navy/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:nap@nap.ski"
                className="focus-ring mt-1 inline-flex rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
