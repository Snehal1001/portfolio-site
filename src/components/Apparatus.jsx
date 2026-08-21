import { skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function Row({ group }) {
  const ref = useReveal();
  return (
    <tr ref={ref} className="reveal block sm:table-row">
      <td className="block w-full py-1 align-top font-heading text-xl sm:table-cell sm:w-[190px] sm:py-4.5">
        {group.category}
      </td>
      <td className="block w-full pb-4.5 align-top text-[15.5px] leading-[1.9] text-neutral-800 sm:table-cell sm:py-4.5">
        {group.items}
      </td>
    </tr>
  );
}

export default function Apparatus() {
  return (
    <section id="c-apparatus" className="border-t border-divider px-6 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-9 lg:grid-cols-[214px_1fr] lg:gap-14">
        <div>
          <p className="tabular text-[11px] tracking-[0.14em] text-accent-700 uppercase">04 · Apparatus</p>
          <p className="mt-2.5 font-heading text-[26px] leading-[1.2] text-neutral-700">The working set</p>
          <div className="my-5.5 h-px bg-divider" />
          <p className="text-[14.5px] leading-[1.75] text-neutral-700">
            Grouped by what I have actually shipped with, not by what reads well on a keyword scan.
          </p>
        </div>
        <table className="table w-full">
          <tbody>
            {skills.map((group) => (
              <Row key={group.category} group={group} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
