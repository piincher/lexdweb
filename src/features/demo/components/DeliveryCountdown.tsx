/**
 * DeliveryCountdown — ticking ETA cards for the demo shipments.
 * Counts down to a target computed once at mount (offset-based, so it
 * is always live), with progress bars and status rails.
 */
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Plane, Ship } from 'lucide-react';
import { DEMO_SHIPMENTS, type DemoShipment } from '../data/demoData';
import { STATUS_STYLES, OVERLINE } from './statusStyles';

interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function toParts(ms: number): CountdownParts {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86_400),
    hours: Math.floor((total % 86_400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function CountdownCard({ shipment, now }: { shipment: DemoShipment; now: number }) {
  const t = useTranslations('demo');
  const target = React.useMemo(() => Date.now() + shipment.etaOffsetMinutes * 60_000, [shipment.etaOffsetMinutes]);
  const parts = toParts(target - now);
  const status = STATUS_STYLES[shipment.status];
  const ModeIcon = shipment.mode === 'air' ? Plane : Ship;

  const cells: Array<{ value: number; label: string }> = [
    { value: parts.days, label: t('countdown.days') },
    { value: parts.hours, label: t('countdown.hours') },
    { value: parts.minutes, label: t('countdown.minutes') },
    { value: parts.seconds, label: t('countdown.seconds') },
  ];

  return (
    <li
      className="relative rounded-xl border overflow-hidden"
      style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--surface)', paddingLeft: 3 }}
    >
      <span aria-hidden className="absolute left-0 top-0 bottom-0" style={{ width: 3, backgroundColor: status.rail }} />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'var(--color-primary-50)', color: 'var(--color-primary)' }}
            >
              <ModeIcon className="w-4.5 h-4.5" size={18} />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-sm" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-mono)' }}>
                {shipment.code}
              </p>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                {shipment.originCode} → {shipment.destinationCode}
              </p>
            </div>
          </div>
          <span
            className="shrink-0 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider"
            style={{ backgroundColor: status.chipBg, color: status.chipText, letterSpacing: '0.06em' }}
          >
            {t(`status.${shipment.status}`)}
          </span>
        </div>

        <p className="mt-4" style={{ ...OVERLINE, color: 'var(--color-muted)' }}>
          {t('countdown.arrivesIn')}
        </p>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {cells.map((cell) => (
            <div
              key={cell.label}
              className="rounded-lg border px-2 py-2.5 text-center"
              style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper-2)' }}
            >
              <div
                className="font-bold leading-none"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', color: 'var(--color-ink)', fontVariantNumeric: 'tabular-nums' }}
              >
                {String(cell.value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
                {cell.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-paper-2)' }}>
            <div
              className="h-full rounded-full transition-[width] duration-700"
              style={{ width: `${shipment.progress}%`, backgroundColor: 'var(--color-primary)' }}
            />
          </div>
          <p className="mt-1.5 text-xs" style={{ color: 'var(--color-muted)' }}>
            {t('countdown.progress', { percent: shipment.progress })}
          </p>
        </div>
      </div>
    </li>
  );
}

export function DeliveryCountdown() {
  const [now, setNow] = React.useState<number>(() => Date.now());

  React.useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {DEMO_SHIPMENTS.map((shipment) => (
        <CountdownCard key={shipment.id} shipment={shipment} now={now} />
      ))}
    </ul>
  );
}

export default DeliveryCountdown;
