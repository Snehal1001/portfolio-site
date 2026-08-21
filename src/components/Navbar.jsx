import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 flex items-center justify-between h-16">
        <a href="#top" className="font-semibold tracking-tight text-ink">
          Snehal<span className="text-accent">.</span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden sm:inline-flex items-center rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
        >
          Say hello
        </a>

        <button
          aria-label="Toggle menu"
          className="sm:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="sm:hidden bg-paper border-b border-line px-6 pb-4">
          <ul className="flex flex-col gap-3 text-sm text-ink-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} className="block py-1 text-accent font-medium">
                Say hello
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
