/**
 * SocialProofBanner — rotating recent-activity line.
 * One item at a time with a subtle crossfade; pauses for reduced motion.
 */
'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PROOF_ITEMS } from '../data/demoData';
import { OVERLINE } from './statusStyles';

const ROTATE_MS = 4000;

export function SocialProofBanner() {
  const t = useTranslations('demo');
  const [index, setIndex] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) return undefined;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % PROOF_ITEMS.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const item = PROOF_ITEMS[index];

  return (
    <div
      className="rounded-xl border px-5 py-4 flex items-center gap-4"
      style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--surface)' }}
      aria-live="polite"
    >
      <span
        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
        style={{ backgroundColor: 'var(--color-primary-50)', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}
        aria-hidden
      >
        {item.initials}
      </span>
      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={item.id}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium truncate"
            style={{ color: 'var(--color-ink)' }}
          >
            {t(`proof.items.${item.key}`, item.values)}
          </motion.p>
        </AnimatePresence>
        <p className="mt-0.5" style={{ ...OVERLINE, fontSize: 10, color: 'var(--color-muted)' }}>
          {t('sections.proof.title')}
        </p>
      </div>
      {/* Position dots */}
      <div className="flex gap-1.5 shrink-0" aria-hidden>
        {PROOF_ITEMS.map((p, i) => (
          <span
            key={p.id}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: i === index ? 'var(--color-primary)' : 'var(--color-rule)' }}
          />
        ))}
      </div>
    </div>
  );
}

export default SocialProofBanner;
