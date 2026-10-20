import { useEffect, useState } from "react";
import { onNavigate } from "../lib/scroll";

/** How long scrolling must be idle before a nav-click lock is released. */
const SCROLL_IDLE_MS = 160;
/** Safety cap so a lock can never get stuck. */
const MAX_LOCK_MS = 4000;

/**
 * Tracks which navigation section is currently being viewed.
 *
 * Rule for choosing the active section: imagine a horizontal "reading line"
 * just below the sticky header (header bottom + 25% of the viewport). The
 * active section is the LAST section whose top edge has passed that line.
 * Because sections are contiguous, exactly one section owns the line at any
 * time, so two partially visible sections never compete and the highlight
 * cannot flicker. At the very bottom of the page the last section wins.
 *
 * IntersectionObserver (band-shaped rootMargin, several thresholds) tells us
 * *when* sections move relative to the header; the reading-line rule
 * decides *which* one is active. While a nav click is smooth-scrolling, the
 * clicked section stays highlighted until scrolling stops, so sections passed
 * on the way don't flash.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const headerBottom = () =>
      document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect().bottom ?? 72;

    let locked = false;
    let idleTimer = 0;
    let capTimer = 0;
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      if (locked) return;
      const line = headerBottom() + window.innerHeight * 0.25;
      let current = sections[0].id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1].id;
      setActive((prev) => (prev === current ? prev : current));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(evaluate);
    };

    const unlock = () => {
      locked = false;
      window.clearTimeout(idleTimer);
      window.clearTimeout(capTimer);
      schedule();
    };
    const armIdleTimer = () => {
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(unlock, SCROLL_IDLE_MS);
    };

    const onScroll = () => {
      if (locked) armIdleTimer();
      else schedule();
    };

    const offNavigate = onNavigate((id) => {
      if (!ids.includes(id)) return;
      locked = true;
      setActive(id);
      armIdleTimer();
      window.clearTimeout(capTimer);
      capTimer = window.setTimeout(unlock, MAX_LOCK_MS);
    });

    const observer = new IntersectionObserver(schedule, {
      // A band from just under the header to 40% from the bottom of the viewport.
      rootMargin: `-${Math.round(headerBottom())}px 0px -40% 0px`,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });
    sections.forEach((s) => observer.observe(s));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    evaluate();

    return () => {
      observer.disconnect();
      offNavigate();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      window.clearTimeout(idleTimer);
      window.clearTimeout(capTimer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
