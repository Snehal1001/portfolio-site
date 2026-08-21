import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const stats = [
  { value: "4.5+", label: "years of experience" },
  { value: "3", label: "companies shipped production code at" },
  { value: "1000s", label: "of daily active users served" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="px-6 py-24 bg-paper-soft border-y border-line">
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <h2 className="font-mono text-sm text-accent mb-3">01 · About</h2>
        <p className="text-2xl sm:text-3xl font-semibold text-ink leading-snug text-balance">
          {profile.summary}
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-ink">{s.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
