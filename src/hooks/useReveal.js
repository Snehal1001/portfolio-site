import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and toggles the
 * `is-visible` class once the element scrolls into view, pairing with the
 * `.reveal` (fade + rise) or `.reveal-rule` (self-drawing hairline) CSS in
 * index.css — the caller picks the variant via className. Elements already
 * visible at mount render final immediately.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.04 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
