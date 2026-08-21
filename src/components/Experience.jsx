import { experience, education } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ExperienceItem({ item }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal relative pl-8 sm:pl-10 pb-12 last:pb-0 border-l border-line last:border-transparent">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-semibold text-ink">
          {item.role} <span className="text-ink-soft font-normal">· {item.company}</span>
        </h4>
        <span className="font-mono text-xs text-ink-soft whitespace-nowrap">{item.period}</span>
      </div>
      <ul className="mt-3 space-y-2">
        {item.highlights.map((h, i) => (
          <li key={i} className="text-sm text-ink-soft leading-relaxed pl-4 relative">
            <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-ink-soft/50" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <span key={s} className="font-mono text-xs text-accent bg-accent-soft rounded px-2 py-0.5">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const headingRef = useReveal();

  return (
    <section id="experience" className="px-6 py-24 bg-paper-soft border-y border-line">
      <div className="mx-auto max-w-3xl">
        <div ref={headingRef} className="reveal">
          <h2 className="font-mono text-sm text-accent mb-3">03 · Experience</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-ink mb-12">
            Where I've worked
          </h3>
        </div>

        <div>
          {experience.map((item) => (
            <ExperienceItem key={item.company} item={item} />
          ))}
        </div>

        <div className="mt-4 pl-8 sm:pl-10">
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-ink">{education.degree}</span> — {education.school} (
            {education.period})
          </p>
        </div>
      </div>
    </section>
  );
}
