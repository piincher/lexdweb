'use client';

/**
 * AnimatedNumber
 *
 * Counts up from zero to `value` the first time it scrolls into view, then
 * settles on the exact figure. Locale-aware grouping (e.g. "350 000" in fr-FR),
 * so it drops in wherever a formatted rate is already rendered without changing
 * the surrounding copy or the final value shown.
 *
 * Updates textContent directly via rAF — no React re-render per frame. Under
 * `prefers-reduced-motion` it renders the final value immediately.
 */

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/features/hero-animation/hooks/useIntersectionObserver';

/** Layout effect on the client, no-op on the server (avoids the SSR warning). */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface AnimatedNumberProps {
  /** Final value to count up to. */
  value: number;
  /** BCP-47 locale for thousands grouping (e.g. 'fr-FR'). */
  locale?: string;
  /** Seconds the count-up takes. */
  duration?: number;
  /** Text rendered before the number. */
  prefix?: string;
  /** Text rendered after the number. */
  suffix?: string;
  /** Decimal places to keep. */
  decimals?: number;
  className?: string;
}

/** EaseOutExpo — fast start, gentle settle. Matches the existing Counter. */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function AnimatedNumber({
  value,
  locale,
  duration = 1.6,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: AnimatedNumberProps) {
  const outRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const hasRun = useRef(false);

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const format = useCallback(
    (n: number) =>
      `${prefix}${n.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`,
    [prefix, suffix, decimals, locale]
  );

  // Before the first paint, reset the (SSR-correct) final value to 0 so the
  // count-up starts clean — no visible final→0 jump for numbers near the fold.
  // Left untouched under reduced motion, where the final value simply stands.
  useIsomorphicLayoutEffect(() => {
    if (!outRef.current) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!prefersReduced) outRef.current.textContent = format(0);
  }, [format]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!outRef.current || !isIntersecting || hasRun.current) return;
    hasRun.current = true;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      outRef.current.textContent = format(value);
      return;
    }

    const durationMs = duration * 1000;
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const progress = Math.min((now - startRef.current) / durationMs, 1);
      const current = value * easeOutExpo(progress);
      if (outRef.current) outRef.current.textContent = format(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (outRef.current) {
        outRef.current.textContent = format(value);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [isIntersecting, value, duration, format]);

  return (
    <span ref={ref} className={className}>
      {/* Server-renders the final value so no-JS and crawlers see the real
          figure; the effect overwrites it to 0 and counts up on view. */}
      <span ref={outRef}>{format(value)}</span>
    </span>
  );
}

export default AnimatedNumber;
