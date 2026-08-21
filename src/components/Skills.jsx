import { skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="px-6 py-24">
      <div ref={ref} className="reveal mx-auto max-w-4xl">
        <h2 className="font-mono text-sm text-accent mb-3">02 · Skills</h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-ink mb-12">
          Tools I reach for
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-sm font-semibold text-ink mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-sm text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
