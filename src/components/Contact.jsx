import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="px-6 py-28 border-t border-line">
      <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
        <h2 className="font-mono text-sm text-accent mb-3">05 · Contact</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-ink text-balance">
          Let's build something reliable together.
        </h3>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Open to full-stack engineering roles and interesting projects. The fastest way to
          reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-accent transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline text-ink-soft hover:text-ink">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline text-ink-soft hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
