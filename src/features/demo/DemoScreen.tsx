/**
 * DemoScreen — full-page composition of the interactive demo modules.
 * Waybill language: paper background, hairline rules, one amber signal
 * per view, tracked overline eyebrows, mono numerals.
 */
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import { DemoSection } from './components/DemoSection';
import { LiveShipmentFeed } from './components/LiveShipmentFeed';
import { DeliveryCountdown } from './components/DeliveryCountdown';
import { TrackingTimeline } from './components/TrackingTimeline';
import { TrendingRoutes } from './components/TrendingRoutes';
import { SocialProofBanner } from './components/SocialProofBanner';
import { QuickQuote } from './components/QuickQuote';
import { OVERLINE } from './components/statusStyles';

interface DemoScreenProps {
  locale: string;
}

export function DemoScreen({ locale }: DemoScreenProps) {
  const t = useTranslations('demo');

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      {/* ── Hero strip ─────────────────────────────────────────────── */}
      <header
        className="border-b"
        style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 md:pt-36 md:pb-20">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--color-primary)]"
            style={{ color: 'var(--color-muted)' }}
          >
            <ArrowLeft size={16} />
            {t('hero.backHome')}
          </Link>
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <p style={{ ...OVERLINE, color: 'var(--color-primary)' }}>{t('hero.eyebrow')}</p>
            <span
              className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 16%, transparent)',
                color: 'var(--color-accent-dark)',
                letterSpacing: '0.06em',
              }}
            >
              {t('hero.simulatedBadge')}
            </span>
          </div>
          <h1
            className="mt-3 font-bold tracking-tight max-w-3xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-ink)',
            }}
          >
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--color-ink-2)' }}>
            {t('hero.subtitle')}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* ── Live feed + countdown ────────────────────────────────── */}
        <DemoSection
          labelledBy="demo-feed"
          eyebrow="01"
          title={t('sections.feed.title')}
          subtitle={t('sections.feed.subtitle')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-2">
              <LiveShipmentFeed />
            </div>
            <div className="lg:col-span-3">
              <DeliveryCountdown />
            </div>
          </div>
        </DemoSection>

        <div aria-hidden className="border-t" style={{ borderColor: 'var(--color-rule)' }} />

        {/* ── Timeline ─────────────────────────────────────────────── */}
        <DemoSection
          labelledBy="demo-timeline"
          eyebrow="02"
          title={t('sections.timeline.title')}
          subtitle={t('sections.timeline.subtitle')}
        >
          <TrackingTimeline />
        </DemoSection>

        <div aria-hidden className="border-t" style={{ borderColor: 'var(--color-rule)' }} />

        {/* ── Routes + social proof ────────────────────────────────── */}
        <DemoSection
          labelledBy="demo-routes"
          eyebrow="03"
          title={t('sections.routes.title')}
          subtitle={t('sections.routes.subtitle')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              <TrendingRoutes />
            </div>
            <div className="lg:col-span-2 space-y-4">
              <SocialProofBanner />
            </div>
          </div>
        </DemoSection>
      </div>

      {/* ── Quick quote FAB + modal ────────────────────────────────── */}
      <QuickQuote />
    </main>
  );
}

export default DemoScreen;
