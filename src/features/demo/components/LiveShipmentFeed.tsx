/**
 * LiveShipmentFeed — self-updating event stream.
 * A new event arrives every few seconds and is prepended to the list
 * (capped), with a status rail per row. Pauses for reduced motion.
 */
'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FEED_EVENTS, type ShipmentStatus } from '../data/demoData';
import { STATUS_STYLES, OVERLINE } from './statusStyles';

const MAX_VISIBLE = 6;
const TICK_MS = 3200;

interface VisibleEvent {
  uid: string;
  eventIndex: number;
  arrivedAt: number;
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export function LiveShipmentFeed() {
  const t = useTranslations('demo');
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = React.useState<VisibleEvent[]>(() =>
    FEED_EVENTS.slice(0, 4).map((_, i) => ({ uid: `init-${i}`, eventIndex: i, arrivedAt: Date.now() - (4 - i) * 60_000 }))
  );
  const cursor = React.useRef(4);
  const uidCounter = React.useRef(4);

  React.useEffect(() => {
    if (reduced) return undefined;
    const id = window.setInterval(() => {
      setVisible((prev) => {
        const next: VisibleEvent = {
          uid: `tick-${uidCounter.current++}`,
          eventIndex: cursor.current % FEED_EVENTS.length,
          arrivedAt: Date.now(),
        };
        cursor.current += 1;
        return [next, ...prev].slice(0, MAX_VISIBLE);
      });
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--surface)' }}
    >
      {/* Header row */}
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b"
        style={{ borderColor: 'var(--color-rule)' }}
      >
        <span style={{ ...OVERLINE, color: 'var(--color-ink-2)' }}>{t('sections.feed.title')}</span>
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className={`${reduced ? '' : 'animate-ping'} absolute inline-flex h-full w-full rounded-full opacity-75`}
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--color-primary)' }} />
          </span>
          <span style={{ ...OVERLINE, color: 'var(--color-primary)' }}>{t('feed.liveBadge')}</span>
        </span>
      </div>

      {/* Event list */}
      <ul aria-live="polite" aria-label={t('sections.feed.title')} className="divide-y" style={{ borderColor: 'var(--color-rule)' }}>
        <AnimatePresence initial={false}>
          {visible.map((row) => {
            const ev = FEED_EVENTS[row.eventIndex];
            const status = STATUS_STYLES[ev.status as ShipmentStatus];
            const minutes = Math.max(0, Math.round((Date.now() - row.arrivedAt) / 60_000));
            return (
              <motion.li
                key={row.uid}
                initial={reduced ? false : { opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative flex items-center gap-4 px-5 py-4"
                style={{ paddingLeft: 20 }}
              >
                {/* Status rail */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0"
                  style={{ width: 3, backgroundColor: status.rail }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--color-ink)' }}>
                    {t(`feed.events.${ev.key}`, ev.values)}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    {minutes === 0 ? t('feed.justNow') : t('feed.minutesAgo', { minutes })}
                  </p>
                </div>
                <span
                  className="shrink-0 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: status.chipBg, color: status.chipText, letterSpacing: '0.06em' }}
                >
                  {t(`status.${ev.status}`)}
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default LiveShipmentFeed;
