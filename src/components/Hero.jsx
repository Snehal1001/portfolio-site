import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-accent-soft blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-accent mb-5">Hi, I'm Snehal 👋</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink text-balance">
          {profile.title}
        </h1>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
          {profile.heroTagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-accent transition-colors"
          >
            View my work
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Download résumé
          </a>
        </div>

        <p className="mt-8 text-sm text-ink-soft">{profile.location}</p>
      </div>
    </section>
  );
}
