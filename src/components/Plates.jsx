import { projects } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import GlobalSearch from "./diagrams/GlobalSearch";
import CentralizedATS from "./diagrams/CentralizedATS";
import ElectorsTreeGrid from "./diagrams/ElectorsTreeGrid";

const diagrams = {
  "global-search": GlobalSearch,
  "centralised-ats": CentralizedATS,
  "electors-tree-grid": ElectorsTreeGrid,
};

const columns = [
  { key: "problem", label: "The problem" },
  { key: "decision", label: "The decision" },
  { key: "consequence", label: "The consequence" },
];

function Plate({ project }) {
  const ruleRef = useReveal();
  const Diagram = diagrams[project.diagram];

  return (
    <section className="px-6 py-12 lg:px-[72px] lg:pt-[52px] lg:pb-[74px]">
      <div className="mx-auto max-w-[1120px]">
        <div ref={ruleRef} className="reveal-rule mb-6.5 h-px bg-text" />
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[214px_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="font-heading text-[64px] leading-[0.9] text-accent-300">{project.numeral}</p>
            <p className="mt-3 text-[11px] tracking-[0.14em] text-neutral-600 uppercase">Plate {project.numeral}</p>
            <div className="my-4.5 h-px bg-divider" />
            <p className="text-[12.5px] leading-[1.6] tracking-[0.05em] text-neutral-700">{project.company}</p>
            <p className="tabular mt-1.5 text-xs text-neutral-600">{project.period}</p>
            <p className="mt-4.5 text-xs leading-[1.7] text-neutral-600">{project.stack}</p>
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-normal leading-[1.06] tracking-[-0.015em] text-[clamp(34px,4vw,54px)]">
              {project.title}
            </h3>
            <p className="justify-hyphenate mt-4.5 max-w-[64ch] text-[17.5px] leading-[1.75]">{project.summary}</p>
            <figure className="mt-9 min-w-0">
              <div className="plate min-w-0 overflow-x-auto bg-neutral-100 p-[26px_24px]">
                {Diagram && (
                  <div className="w-[900px] lg:w-full">
                    <Diagram />
                  </div>
                )}
              </div>
              <figcaption className="mt-3 text-[11.5px] tracking-[0.08em] text-neutral-600 uppercase">
                {project.figCaption}
              </figcaption>
            </figure>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
              {columns.map((col, i) => (
                <div
                  key={col.key}
                  className={
                    i === 0
                      ? "lg:pr-[30px]"
                      : "border-t border-divider pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:px-[30px]" +
                        (i === columns.length - 1 ? " lg:pl-[30px] lg:pr-0" : "")
                  }
                >
                  <p className="text-[10.5px] tracking-[0.14em] text-accent-700 uppercase">{col.label}</p>
                  <p className="justify-hyphenate mt-3 text-[15px] leading-[1.72] text-neutral-800">
                    {project[col.key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Plates() {
  const introRef = useReveal();

  return (
    <>
      <section id="c-plates" className="border-t border-divider px-6 pt-16 pb-6 lg:px-[72px] lg:pt-24 lg:pb-10">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-9 lg:grid-cols-[214px_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="tabular text-[11px] tracking-[0.14em] text-accent-700 uppercase">03 · Plates</p>
            <p className="mt-2.5 font-heading text-[26px] leading-[1.2] text-neutral-700">Three things I built, drawn</p>
          </div>
          <p ref={introRef} className="reveal justify-hyphenate max-w-[62ch] text-[16.5px] leading-[1.75]">
            All three shipped inside enterprise products I cannot screenshot, so each plate is an architecture
            drawing of what I built and a plain account of the decision behind it. The diagrams are accurate to the
            systems; the claims are the ones I can stand behind in an interview.
          </p>
        </div>
      </section>

      {projects.map((project) => (
        <Plate key={project.title} project={project} />
      ))}
    </>
  );
}
