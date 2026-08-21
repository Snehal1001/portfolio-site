import { useLayoutEffect, useRef, useState } from "react";
import { index } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = index.map((i) => i.id);
const darkIds = ["c-correspondence"];

export default function MarginIndex() {
  const { activeId, isDark } = useActiveSection(ids, darkIds);
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const [rule, setRule] = useState({ top: 0, height: 44 });

  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const active = itemRefs.current[activeId];
      if (!nav || !active) return;
      const navRect = nav.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      setRule({ top: activeRect.top - navRect.top, height: activeRect.height });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="Index"
      className="fixed inset-x-0 top-0 z-40 flex h-auto w-full items-center gap-4 overflow-x-auto border-b border-divider bg-bg px-6 py-2.5 [-webkit-overflow-scrolling:touch] sm:gap-6 sm:px-[34px] lg:inset-y-0 lg:inset-x-auto lg:left-0 lg:h-screen lg:w-[214px] lg:flex-col lg:justify-center lg:gap-5 lg:overflow-visible lg:border-b-0 lg:py-0 lg:pl-11"
    >
      {index.map((item) => {
        const active = item.id === activeId;
        return (
          <a
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            href={`#${item.id}`}
            className="grid flex-none grid-cols-[auto] items-baseline gap-0 transition-colors duration-400 lg:grid-cols-[34px_1fr] lg:gap-2.5"
          >
            <span
              className={`tabular hidden text-[11px] tracking-[0.1em] transition-colors duration-400 lg:inline ${
                active
                  ? isDark
                    ? "text-accent-300"
                    : "text-accent"
                  : isDark
                  ? "text-neutral-400"
                  : "text-neutral-500"
              }`}
            >
              {item.num}
            </span>
            <span>
              <span
                className={`block font-heading text-base leading-[1.15] transition-colors duration-400 sm:text-[17px] lg:text-[19px] ${
                  active
                    ? isDark
                      ? "text-accent-300"
                      : "text-accent-700"
                    : isDark
                    ? "text-neutral-400"
                    : "text-neutral-700"
                }`}
              >
                {item.word}
              </span>
              <span
                className={`mt-0.5 hidden text-[10.5px] tracking-[0.09em] uppercase transition-colors duration-400 sm:block ${
                  active
                    ? isDark
                      ? "text-neutral-300"
                      : "text-neutral-600"
                    : isDark
                    ? "text-neutral-600"
                    : "text-neutral-500"
                }`}
              >
                {item.gloss}
              </span>
            </span>
          </a>
        );
      })}

      <div
        className="pointer-events-none absolute left-0 top-0 hidden bottom-0 w-px bg-divider lg:block"
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute left-0 top-0 hidden w-px transition-[background-color] duration-400 lg:block ${
          isDark ? "bg-accent-300" : "bg-accent"
        }`}
        style={{
          height: `${rule.height}px`,
          transform: `translateY(${rule.top}px)`,
          transition: "transform .55s cubic-bezier(.2,.7,.2,1), height .4s ease, background-color .4s ease",
        }}
        aria-hidden="true"
      />
    </nav>
  );
}
