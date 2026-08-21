import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Colophon() {
  const ruleRef = useReveal();
  const nameRef = useReveal();
  const col1Ref = useReveal();
  const col2Ref = useReveal();

  return (
    <section id="c-colophon" className="px-6 pt-28 pb-24 lg:px-[72px] lg:pt-[110px] lg:pb-[100px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col items-start gap-1.5 text-[11px] tracking-[0.14em] text-neutral-600 uppercase sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <span>{profile.name} — {profile.title}</span>
          <span className="tabular whitespace-nowrap">{profile.runningHead}</span>
        </div>
        <div ref={ruleRef} className="reveal-rule mt-3.5 h-px bg-text" style={{ opacity: 0.28 }} />

        <div className="mt-14">
          <h1
            ref={nameRef}
            className="reveal font-heading font-light leading-[0.88] tracking-[-0.025em] text-[clamp(60px,10.4vw,166px)]"
          >
            Snehal
            <br />
            Prajapati
          </h1>
          <div className="my-9 h-px bg-divider" style={{ marginTop: "38px", marginBottom: "30px" }} />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-11">
            <p ref={col1Ref} className="reveal justify-hyphenate text-[17.5px] leading-[1.75]">
              {profile.openingColumns[0]}
            </p>
            <p ref={col2Ref} className="reveal justify-hyphenate text-[17.5px] leading-[1.75]">
              {profile.openingColumns[1]}
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a className="btn btn-primary" href="#c-plates">
              Read the plates
            </a>
            <a className="btn btn-secondary" href={profile.resumeFile} download>
              Résumé.pdf
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
