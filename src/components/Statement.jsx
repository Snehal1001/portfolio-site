import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Statement() {
  const ledeRef = useReveal();
  const ruleRef = useReveal();

  return (
    <section id="c-statement" className="border-t border-divider px-6 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-9 lg:grid-cols-[214px_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="tabular text-[11px] tracking-[0.14em] text-accent-700 uppercase">01 · Statement</p>
          <p className="mt-2.5 font-heading text-[26px] leading-[1.2] text-neutral-700">What I actually do</p>
        </div>
        <div>
          <p
            ref={ledeRef}
            className="reveal font-heading font-normal leading-[1.28] tracking-[-0.01em] text-[clamp(28px,3vw,40px)] text-balance"
          >
            {profile.statement}
          </p>
          <div ref={ruleRef} className="reveal-rule my-11 h-px bg-divider" />
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {profile.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`${i === 0 ? "lg:pr-[34px]" : "border-t border-divider pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:px-[34px]"} ${
                  i === profile.stats.length - 1 ? "lg:pl-[34px] lg:pr-0" : ""
                }`}
              >
                <p className="tabular m-0 font-heading text-[54px] leading-none text-accent-700">
                  {stat.value}
                  {stat.unit && <span className="text-[34px]">{stat.unit}</span>}
                </p>
                <p className="mt-2.5 text-[15.5px] leading-[1.7] text-neutral-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
