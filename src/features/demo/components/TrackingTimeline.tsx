/**
 * TrackingTimeline — waypoint stepper for a demo shipment.
 * Horizontal on desktop, vertical on mobile; done / current / upcoming
 * states with a pulsing ring on the active waypoint.
 */
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/demoData';
import { DEMO_SHIPMENTS } from '../data/demoData';
import { OVERLINE } from './statusStyles';

export function TrackingTimeline() {
  const t = useTranslations('demo');
  const shipment = DEMO_SHIPMENTS[0];

  return (
    <div
      className="rounded-xl border p-6 md:p-8"
      style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--surface)' }}
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm font-bold" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-mono)' }}>
          {t('timeline.shipmentLabel', { code: shipment.code })}
        </p>
        <span
          className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 16%, transparent)', color: 'var(--color-accent-dark)', letterSpacing: '0.06em' }}
        >
          {t('status.customs')}
        </span>
      </div>

      <ol className="mt-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
        {TIMELINE_STEPS.map((step, index) => {
          const isLast = index === TIMELINE_STEPS.length - 1;
          const done = step.state === 'done';
          const current = step.state === 'current';
          return (
            <li key={step.id} className="relative flex md:flex-1 md:flex-col items-start md:items-center gap-3 md:gap-0 md:text-center">
              {/* Connector */}
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute md:static left-[13px] top-7 bottom-[-24px] w-px md:left-1/2 md:top-[13px] md:bottom-auto md:h-px md:w-full"
                  style={{ backgroundColor: done ? 'var(--color-primary)' : 'var(--color-rule)' }}
                />
              )}
              {/* Node */}
              <span
                className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: done ? 'var(--color-primary)' : current ? 'var(--surface)' : 'var(--color-paper-2)',
                  borderColor: done || current ? 'var(--color-primary)' : 'var(--color-rule)',
                  color: done ? 'var(--color-accent-ink, #FFFFFF)' : current ? 'var(--color-primary)' : 'var(--color-muted)',
                  boxShadow: current ? '0 0 0 4px color-mix(in srgb, var(--color-primary) 18%, transparent)' : undefined,
                }}
              >
                {done ? <Check size={14} strokeWidth={3} /> : <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'currentColor' }} />}
              </span>
              {/* Copy */}
              <div className="md:mt-3 md:px-2 min-w-0">
                <p
                  className="text-sm font-semibold leading-tight"
                  style={{ color: step.state === 'upcoming' ? 'var(--color-muted)' : 'var(--color-ink)' }}
                >
                  {t(`timeline.steps.${step.key}`)}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{
                    color: current ? 'var(--color-primary)' : 'var(--color-muted)',
                    fontFamily: 'var(--font-mono)',
                    ...(current ? OVERLINE : {}),
                    fontSize: current ? 10 : undefined,
                  }}
                >
                  {t(`timeline.times.${step.timeKey}`)}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TrackingTimeline;
