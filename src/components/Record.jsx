import { education, experience } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function JobRow({ job }) {
  const ref = useReveal();

  return (
    <article
      ref={ref}
      className="reveal grid grid-cols-1 gap-6 border-t border-text py-7 lg:grid-cols-[172px_minmax(0,1fr)] lg:gap-10"
    >
      <div>
        <p className="tabular text-xs tracking-[0.1em] text-neutral-600 uppercase">{job.period}</p>
        <p className="mt-3 font-heading text-2xl leading-[1.15]">{job.company}</p>
        <p className="mt-1 text-[13.5px] text-neutral-700 italic">{job.role}</p>
      </div>
      <div>
        <p className="justify-hyphenate mb-4.5 text-[16.5px] leading-[1.7]">{job.lede}</p>
        <ul className="m-0 grid list-none gap-2.5 p-0">
          {job.highlights.map((h, i) => (
            <li key={i} className="grid grid-cols-[22px_1fr] text-[15.5px] leading-[1.7] text-neutral-800">
              <span className="font-heading text-accent">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs tracking-[0.06em] text-neutral-600">{job.stack}</p>
      </div>
    </article>
  );
}

export default function Record() {
  return (
    <section id="c-record" className="border-t border-divider px-6 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-9 lg:grid-cols-[214px_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="tabular text-[11px] tracking-[0.14em] text-accent-700 uppercase">02 · Record</p>
          <p className="mt-2.5 font-heading text-[26px] leading-[1.2] text-neutral-700">Where the work happened</p>
          <div className="my-5.5 h-px bg-divider" />
          <p className="text-[14.5px] leading-[1.75] text-neutral-700">
            Three companies, one throughline: inherited codebases, live users, no maintenance window.
          </p>
        </div>
        <div>
          {experience.map((job) => (
            <JobRow key={job.company} job={job} />
          ))}
          <div className="grid grid-cols-1 gap-2 border-t border-divider pt-5 lg:grid-cols-[172px_minmax(0,1fr)] lg:gap-10">
            <p className="tabular text-xs tracking-[0.1em] text-neutral-600 uppercase">{education.period}</p>
            <p className="text-[15.5px] leading-[1.7] text-neutral-700">
              {education.degree}, {education.school}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
