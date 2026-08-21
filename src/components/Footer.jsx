import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <a href="#top" className="link-underline hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
