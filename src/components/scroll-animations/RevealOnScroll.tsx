'use client';

/**
 * RevealOnScroll
 *
 * A single, site-wide reveal-on-scroll enhancer. Mount it once (in the locale
 * layout) and any element carrying a `data-reveal` attribute fades/slides into
 * view the first time it enters the viewport.
 *
 * Why this exists alongside the CSS-only `ScrollReveal`:
 * `ScrollReveal` relies on `animation-timeline: view()`, which today only runs
 * in Chromium. This IntersectionObserver version animates in every modern
 * browser (Safari and Firefox included), which is where most of our mobile
 * traffic is.
 *
 * Design decisions that keep it safe:
 * - It only ever HIDES elements that are currently off-screen. Anything already
 *   in view is marked visible instantly, so there is never a flash of hidden
 *   content and the hero stays perfect for LCP.
 * - The hidden state lives entirely in JS-added classes, so with JavaScript
 *   disabled — or for crawlers — every `data-reveal` element renders visible.
 * - It bails out completely under `prefers-reduced-motion`, leaving content as-is.
 * - A MutationObserver re-scans on client-side navigation and any dynamically
 *   inserted content, so the effect works on every route without per-page wiring.
 *
 * Usage (no import needed on the consuming element — just an attribute):
 *   <section data-reveal>…</section>            // default: fade + rise
 *   <div data-reveal="left">…</div>             // slide from left
 *   <ul data-stagger> <li data-reveal/> … </ul> // children cascade
 */

import { useEffect } from 'react';

const PENDING = 'reveal-pending';
const VISIBLE = 'is-visible';
const STAGGER_STEP_MS = 70;
const STAGGER_MAX_STEPS = 8;

export function RevealOnScroll(): null {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // No motion preference, or a browser without IntersectionObserver: leave
    // every element in its natural, fully-visible state.
    if (prefersReduced || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger is computed per batch: siblings of a `data-stagger` container
        // that cross into view together (e.g. one grid row) cascade, while a
        // vertical list — whose items arrive one callback at a time — does not
        // pick up an artificial per-item delay.
        const batchCount = new Map<Element, number>();
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const parent = el.parentElement;
          if (parent?.hasAttribute('data-stagger')) {
            const n = batchCount.get(parent) ?? 0;
            batchCount.set(parent, n + 1);
            if (n > 0) {
              el.style.transitionDelay = `${
                Math.min(n, STAGGER_MAX_STEPS) * STAGGER_STEP_MS
              }ms`;
            }
          }
          el.classList.remove(PENDING);
          el.classList.add(VISIBLE);
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    const prepare = (el: HTMLElement) => {
      // `data-reveal-ready` guards against processing an element twice (the
      // MutationObserver can surface the same node more than once).
      if (el.dataset.revealReady) return;
      el.dataset.revealReady = 'true';

      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

      if (inView) {
        // Already on screen — reveal immediately, no hide, no flash.
        el.classList.add(VISIBLE);
      } else {
        el.classList.add(PENDING);
        observer.observe(el);
      }
    };

    const scan = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>('[data-reveal]')
        .forEach((el) => prepare(el));
    };

    scan(document);

    // Re-scan on client-side navigations and any content inserted later.
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as HTMLElement;
          if (el.matches('[data-reveal]')) prepare(el);
          el
            .querySelectorAll<HTMLElement>('[data-reveal]')
            .forEach((child) => prepare(child));
        });
      }
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

export default RevealOnScroll;
