/**
 * TrendingRoutes — lane board with prices, transit times and 7-day
 * rate movement. Reads like a waybill table: hairline rows, mono
 * numerals, overline headers.
 */
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Plane, Ship, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TRENDING_ROUTES, type RouteTrend } from '../data/demoData';
import { OVERLINE } from './statusStyles';

const TREND_META: Record<RouteTrend, { Icon: typeof Minus; color: string; sign: string }> = {
  up: { Icon: TrendingUp, color: 'var(--color-error)', sign: '+' },
  down: { Icon: TrendingDown, color: 'var(--color-success)', sign: '-' },
  flat: { Icon: Minus, color: 'var(--color-muted)', sign: '' },
};

export function TrendingRoutes() {
  const t = useTranslations('demo');

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--surface)' }}
    >
      {/* Header */}
      <div
        className="hidden md:grid grid-cols-[1.4fr_0.8fr_1fr_1fr] gap-4 px-5 py-3 border-b"
        style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper-2)' }}
      >
        {[t('routes.route'), t('routes.transit'), t('routes.price'), t('routes.trend')].map((h) => (
          <span key={h} style={{ ...OVERLINE, color: 'var(--color-muted)' }}>
            {h}
          </span>
        ))}
      </div>

      <ul className="divide-y" style={{ borderColor: 'var(--color-rule)' }}>
        {TRENDING_ROUTES.map((route) => {
          const meta = TREND_META[route.trend];
          const ModeIcon = route.mode === 'air' ? Plane : Ship;
          return (
            <li
              key={route.id}
              className="grid grid-cols-2 md:grid-cols-[1.4fr_0.8fr_1fr_1fr] gap-y-2 gap-x-4 px-5 py-4 items-center transition-colors hover:bg-[var(--color-paper-2)]"
            >
              {/* Route */}
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-primary-50)', color: 'var(--color-primary)' }}
                >
                  <ModeIcon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-mono)' }}>
                    {route.originCode} → {route.destinationCode}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                    {t('routes.volume', { count: route.shipmentsPerWeek })}
                  </p>
                </div>
              </div>

              {/* Transit */}
              <p className="text-sm" style={{ color: 'var(--color-ink-2)' }}>
                <span className="md:hidden" style={{ ...OVERLINE, fontSize: 9, color: 'var(--color-muted)', display: 'block' }}>
                  {t('routes.transit')}
                </span>
                {t('routes.days', { days: route.transitDays })}
              </p>

              {/* Price */}
              <p
                className="text-sm font-bold"
                style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' }}
              >
                <span className="md:hidden" style={{ ...OVERLINE, fontSize: 9, color: 'var(--color-muted)', display: 'block', fontFamily: 'var(--font-body)' }}>
                  {t('routes.price')}
                </span>
                {route.pricePerKg.toLocaleString('fr-FR')} {t('routes.currency')}
              </p>

              {/* Trend */}
              <p className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: meta.color, fontVariantNumeric: 'tabular-nums' }}>
                <span className="md:hidden" style={{ ...OVERLINE, fontSize: 9, color: 'var(--color-muted)', display: 'block', fontFamily: 'var(--font-body)' }}>
                  {t('routes.trend')}
                </span>
                <meta.Icon size={16} />
                {meta.sign}{route.trendPct}%
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TrendingRoutes;
