/* Hallmark · genre: modern-minimal · macrostructure: Split Studio index */

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Plane, Ship } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { getRouteData, type RouteLocale } from '@/features/routes/route-data';
import styles from './sections.module.css';

interface CorridorGridProps { locale: Locale; }

/**
 * The eleven /routes/* pages had no inbound link from the navbar, the footer,
 * or the homepage — they existed only in the sitemap. This grid is the entry
 * point, which fixes the dead end and the internal linking in one move.
 *
 * Country, city and both transit durations are read from `getRouteData`, the
 * same source the route pages render, so a corridor can never advertise one
 * transit time here and a different one on its own page.
 */
const CORRIDORS = [
  'china-to-cameroon',
  'china-to-senegal',
  'china-to-cote-divoire',
  'china-to-burkina-faso',
  'china-to-guinea',
  'china-to-niger',
  'china-to-mali',
  'china-to-togo',
  'china-to-benin',
  'china-to-zambia',
] as const;

// Corridors shown in the grid that don't have their own /routes/* page yet.
// Their tile links to the general China-to-Africa page instead of a 404.
const DISPLAY_ONLY_CORRIDORS = new Set<string>(['china-to-mali', 'china-to-zambia']);

export function CorridorGrid({ locale }: CorridorGridProps) {
  const t = useTranslations('landing.corridors');

  // flatMap rather than map+filter: it drops the nulls and narrows `data` to
  // non-null in one pass, without a hand-written type predicate.
  const corridors = CORRIDORS.flatMap((slug) => {
    const data = getRouteData(slug, locale as RouteLocale);
    return data ? [{ slug, data }] : [];
  });

  return (
    <section className={styles.section} aria-labelledby="corridors-title">
      <div className={styles.sectionHead}>
        <p className={styles.overline}>{t('overline')}</p>
        <h2 id="corridors-title">{t('title')}</h2>
        <p>{t('subtitle')}</p>
      </div>

      <div className={styles.corridors}>
        {corridors.map(({ slug, data }) => (
          <Link
            key={slug}
            href={`/${locale}/routes/${DISPLAY_ONLY_CORRIDORS.has(slug) ? 'china-to-africa' : slug}`}
            // Cameroon is the home corridor, marked with the amber rule rather
            // than reordered into a separate block.
            className={`${styles.corridor} ${slug === 'china-to-cameroon' ? styles.corridorHome : ''}`}
          >
            <span className={styles.corridorName}>
              <strong>{data.destination.country}</strong>
              <small>{data.destination.city}</small>
            </span>
            <span className={styles.corridorTimes}>
              <span>
                <Plane aria-hidden="true" />
                {data.airFreight.duration}
              </span>
              <span>
                <Ship aria-hidden="true" />
                {data.seaFreight.duration}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.sectionFoot}>
        <Link className={styles.textLink} href={`/${locale}/routes/china-to-africa`}>
          {t('allCta')}
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
