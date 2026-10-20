import type { MouseEvent } from "react";

/** True when the visitor prefers reduced motion. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Listener = (id: string) => void;
const listeners = new Set<Listener>();

/** Subscribe to programmatic navigation (used to pin the active nav item). */
export function onNavigate(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/**
 * Smoothly scroll to an element by id. The CSS `scroll-margin-top` on the
 * target accounts for the progress bar + sticky header, so headings are
 * never hidden. Updates the URL hash without a page reload.
 */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  listeners.forEach((fn) => fn(id));
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  if (history.replaceState) history.replaceState(null, "", `#${id}`);
  // Move focus for keyboard / screen-reader users without a second jump.
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

/** onClick handler for in-page anchor links (`href="#id"`). */
export function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>, id: string): void {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  scrollToId(id);
}
