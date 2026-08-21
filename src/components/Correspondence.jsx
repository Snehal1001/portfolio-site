import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import portrait from "../assets/snehal.jpg";

export default function Correspondence() {
  const headlineRef = useReveal();
  const ruleRef = useReveal();
  const portraitRef = useReveal();
  const phoneDigits = profile.phone.replace(/[^\d+]/g, "");

  return (
    <section
      id="c-correspondence"
      className="relative overflow-hidden px-6 py-20 lg:px-[72px] lg:pt-[120px] lg:pb-24"
      style={{ background: "var(--color-ground-dark)", color: "var(--color-neutral-200)" }}
    >
      <p
        aria-hidden="true"
        className="tabular pointer-events-none absolute -bottom-14 right-10 hidden font-heading font-light leading-[0.7] sm:block"
        style={{ fontSize: "clamp(150px, 22vw, 280px)", color: "rgba(182,130,53,0.14)" }}
      >
        05
      </p>
      <div className="relative mx-auto max-w-[1120px]">
        <p className="tabular text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--color-accent-300)" }}>
          05 · Correspondence
        </p>
        <h2
          ref={headlineRef}
          className="reveal mt-6.5 max-w-[20ch] font-heading font-light leading-[1.02] tracking-[-0.02em] text-[clamp(42px,6vw,88px)]"
          style={{ color: "var(--color-neutral-100)" }}
        >
          Currently open to the next difficult system.
        </h2>
        <div
          ref={ruleRef}
          className="reveal-rule my-9 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.24) 48px, rgba(255,255,255,0.24) calc(100% - 48px), transparent)",
          }}
        />
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[186px_1.05fr_1fr_1fr] lg:gap-10">
          <div ref={portraitRef} className="reveal max-w-[186px]">
            <div className="plate">
              <img src={portrait} alt="Snehal Prajapati" className="block h-auto w-full" />
            </div>
            <p className="mt-3 text-[10.5px] tracking-[0.12em] uppercase" style={{ color: "var(--color-neutral-500)" }}>
              Portrait of the engineer
            </p>
          </div>
          <p
            className="justify-hyphenate text-[17px] leading-[1.8]"
            style={{ color: "var(--color-neutral-300)" }}
          >
            Looking for full-stack roles where the frontend is a real problem and the backend is not somebody
            else&rsquo;s. Email gets read the same day; the résumé has the long version of everything above.
          </p>
          <div className="grid gap-3.5">
            <p className="text-[10.5px] tracking-[0.14em] uppercase" style={{ color: "var(--color-neutral-500)" }}>
              Direct
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-heading text-[21px] leading-[1.2]"
              style={{ color: "var(--color-accent-300)" }}
            >
              {profile.email}
            </a>
            <a
              href={`tel:${phoneDigits}`}
              className="tabular font-heading text-[21px]"
              style={{ color: "var(--color-accent-300)" }}
            >
              {profile.phone}
            </a>
          </div>
          <div className="grid gap-3.5">
            <p className="text-[10.5px] tracking-[0.14em] uppercase" style={{ color: "var(--color-neutral-500)" }}>
              Elsewhere
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-heading text-[21px]"
              style={{ color: "var(--color-accent-300)" }}
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-heading text-[21px]"
              style={{ color: "var(--color-accent-300)" }}
            >
              GitHub
            </a>
            <a
              href={profile.resumeFile}
              download
              className="font-heading text-[21px]"
              style={{ color: "var(--color-accent-300)" }}
            >
              Résumé, PDF
            </a>
          </div>
        </div>
        <div
          className="my-16 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.16) 48px, rgba(255,255,255,0.16) calc(100% - 48px), transparent)",
            marginBottom: "20px",
          }}
        />
        <div
          className="flex flex-col gap-2 text-[11px] tracking-[0.1em] uppercase sm:flex-row sm:items-baseline sm:justify-between"
          style={{ color: "var(--color-neutral-500)" }}
        >
          <span>
            {profile.name} · {profile.location}
          </span>
          <span className="tabular">Set in Cormorant Garamond &amp; Lora · MMXXVI</span>
        </div>
      </div>
    </section>
  );
}
