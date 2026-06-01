"use client";
import { useEffect, useState, useCallback } from "react";

export function useScrollSpy(
  sectionIds: string[],
  options: { threshold?: number } = {}
) {
  const { threshold = 0.3 } = options;
  const [activeId, setActiveId] = useState(sectionIds[0]);

  const getActive = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportH = window.innerHeight;
    const thresholdPx = viewportH * threshold;

    // At the very bottom of the page, force the last section active
    const atBottom =
      window.innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      return sectionIds[sectionIds.length - 1];
    }

    // Walk sections in reverse; pick the last one whose top has crossed threshold
    let active = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id.replace("#", ""));
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= thresholdPx) {
        active = id;
      }
    }
    return active;
  }, [sectionIds, threshold]);

  useEffect(() => {
    // Set initial state
    setActiveId(getActive());

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setActiveId(getActive());
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [getActive]);

  return activeId;
}