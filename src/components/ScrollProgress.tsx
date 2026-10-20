import { useEffect, useRef } from "react";

/**
 * Thin progress bar fixed to the very top of the viewport.
 * progress = scrollTop / (scrollHeight - clientHeight), clamped to 0..1.
 * Updates are batched with requestAnimationFrame and recalculated whenever
 * the viewport or document height changes.
 */
export function ScrollProgress() {
  const fillRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const top = window.scrollY || doc.scrollTop;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, top / scrollable)) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress})`;
      if (barRef.current) barRef.current.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    update();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <div ref={fillRef} className="scroll-progress__fill" />
    </div>
  );
}
