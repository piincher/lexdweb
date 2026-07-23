/* Hallmark · genre: modern-minimal · macrostructure: Split Studio rate band */

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Plane, Ship, Zap } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { AIR_RATES, SEA_RATES } from '@/features/pricing/constants';
import { AnimatedNumber } from '@/components/animations/AnimatedNumber';
import styles from './sections.module.css';

interface RateStripProps { locale: Locale; }

/**
 * Prices, above the fold, as numbers.
 *
 * Rates come from `@/features/pricing/constants` — the same source the
 * calculator uses — so the homepage can never quote a stale price. Only the
 * numbers are read from there; the surrounding words come from i18n, because
 * the constants are written in French.
 *
 * `deliveryTime` in the constants reads e.g. "14-21 jours". We take the digits
 * and re-render the unit from the message catalogue rather than duplicating the
 * range in four locale files, which would drift the moment a rate changes.
 */
const dayRange = (value: string): string => {
  const match = value.match(/(\d+)\s*[-–]\s*(\d+)/);
  return match ? `${match[1]}–${match[2]}` : value;
};

const rateOf = (category: string): number =>
  AIR_RATES.find((rate) => rate.category === category)?.rateFCFA ?? 0;

const timeOf = (category: string): string =>
  dayRange(AIR_RATES.find((rate) => rate.category === category)?.deliveryTime ?? '');

export function RateStrip({ locale }: RateStripProps) {
  const t = useTranslations('landing.rates');

  const tiers = [
    {
      key: 'sea',
      icon: Ship,
      amount: SEA_RATES.rateFCFA,
      unit: t('perCbm'),
      days: dayRange(SEA_RATES.deliveryTime),
      note: t('seaNote'),
      featured: false,
    },
    {
      key: 'standard',
      icon: Plane,
      amount: rateOf('standard'),
      unit: t('perKg'),
      days: timeOf('standard'),
      note: t('standardNote'),
      featured: false,
    },
    {
      key: 'electronics',
      icon: Plane,
      amount: rateOf('electronics'),
      unit: t('perKg'),
      days: timeOf('electronics'),
      note: t('electronicsNote'),
      featured: false,
    },
    {
      key: 'express',
      icon: Zap,
      amount: rateOf('express'),
      unit: t('perKg'),
      days: timeOf('express'),
      note: t('expressNote'),
      featured: true,
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="rates-title">
      <div className={styles.sectionHead} data-reveal>
        <p className={styles.overline}>{t('overline')}</p>
        <h2 id="rates-title">{t('title')}</h2>
        <p>{t('subtitle')}</p>
      </div>

      <div className={styles.rates} data-stagger>
        {tiers.map(({ key, icon: Icon, amount, unit, days, note, featured }) => (
          <div
            key={key}
            className={`${styles.rate} ${featured ? styles.rateFeatured : ''}`}
            data-reveal
            data-hover="lift"
          >
            <p className={styles.rateMode}>
              <Icon aria-hidden="true" />
              {t(`tiers.${key}`)}
            </p>
            <p className={styles.ratePrice}>
              <AnimatedNumber value={amount} locale="fr-FR" />
              <span className={styles.rateUnit}> FCFA {unit}</span>
            </p>
            <p className={styles.rateTime}>{t('days', { range: days })}</p>
            <p className={styles.rateNote}>{note}</p>
          </div>
        ))}
      </div>

      <div className={styles.sectionFoot}>
        <Link className={styles.textLink} href={`/${locale}/calculateur`}>
          {t('calculatorCta')}
          <ArrowRight aria-hidden="true" />
        </Link>
        <span>{t('disclaimer')}</span>
      </div>
    </section>
  );
}
