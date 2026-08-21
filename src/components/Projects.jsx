import { projects } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project }) {
  const ref = useReveal();

  return (
    <article
      ref={ref}
      className="reveal rounded-2xl border border-line p-6 sm:p-8 hover:border-accent/40 hover:shadow-sm transition-all"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-xl font-semibold text-ink">{project.title}</h4>
        <span className="font-mono text-xs text-ink-soft whitespace-nowrap">{project.period}</span>
      </div>
      <p className="text-sm text-accent font-medium mt-1">{project.company}</p>
      <p className="mt-4 text-ink-soft leading-relaxed">{project.summary}</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-2">
            The problem
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-2">
            My approach
          </p>
          <ul className="space-y-1.5">
            {project.approach.map((a, i) => (
              <li key={i} className="text-sm text-ink-soft leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-ink-soft/50" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-accent-soft px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-1">Impact</p>
        <p className="text-sm text-ink leading-relaxed">{project.impact}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-xs text-ink-soft border border-line rounded px-2 py-0.5">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const headingRef = useReveal();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div ref={headingRef} className="reveal">
          <h2 className="font-mono text-sm text-accent mb-3">04 · Projects</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-ink mb-3">Selected work</h3>
          <p className="text-ink-soft mb-12 max-w-2xl">
            Case studies drawn from production work at MRI Software, Reflik, and Civica India.
            Have a personal project to add? Drop it into{" "}
            <code className="font-mono text-xs bg-paper-soft border border-line rounded px-1.5 py-0.5">
              src/data/content.js
            </code>
            .
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
