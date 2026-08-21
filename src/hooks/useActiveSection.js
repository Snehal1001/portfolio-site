import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids currently owns the middle band of
 * the viewport, plus whether that section is the dark closing section —
 * drives the margin index's active state and color inversion.
 */
export function useActiveSection(ids, darkIds = []) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return { activeId, isDark: darkIds.includes(activeId) };
}
