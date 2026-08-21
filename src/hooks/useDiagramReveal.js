import { useEffect, useRef } from "react";

const STAGGER_MS = 60;
const DURATION = ".95s cubic-bezier(.3,.7,.2,1)";

/**
 * Draws an architecture diagram's [data-edge] paths in reading order when
 * its figure scrolls into view. Solid edges animate stroke-dashoffset;
 * edges that already carry a dasharray (speculative/return paths) fade in
 * instead, since dash-offset animation would fight their own pattern.
 */
export function useDiagramReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const edges = Array.from(node.querySelectorAll("[data-edge]"));
    if (edges.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const arm = () => {
      edges.forEach((path) => {
        if (reduceMotion) return;
        if (path.getAttribute("stroke-dasharray")) {
          path.style.opacity = "0";
        } else {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len} ${len}`;
          path.style.strokeDashoffset = String(len);
        }
      });
    };

    const play = () => {
      edges.forEach((path, i) => {
        setTimeout(() => {
          if (path.getAttribute("stroke-dasharray") && path.style.opacity === "0") {
            path.style.transition = `opacity 0.7s ease`;
            path.style.opacity = "1";
          } else {
            path.style.transition = `stroke-dashoffset ${DURATION}`;
            path.style.strokeDashoffset = "0";
          }
        }, i * STAGGER_MS);
      });
    };

    arm();

    if (reduceMotion) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
