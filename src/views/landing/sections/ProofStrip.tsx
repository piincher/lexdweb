/* Hallmark · genre: modern-minimal · macrostructure: Split Studio assurance row */

import { useTranslations } from 'next-intl';
import { Camera, Landmark, ShieldCheck, Wallet } from 'lucide-react';
import styles from './sections.module.css';

const ITEMS = [
  { key: 'inspection', icon: ShieldCheck },
  { key: 'photos', icon: Camera },
  { key: 'customs', icon: Landmark },
  { key: 'payment', icon: Wallet },
] as const;

/**
 * Replaces the four adjectives the About block used as proof —
 * "Fiable · Rapide · Sécurisé · Compétitif" — which assert nothing a visitor
 * can check.
 *
 * These four items are process commitments the business either honours or does
 * not, so they are falsifiable in a way an adjective is not. Deliberately no
 * statistics: the only numbers available (`founded: 2019`, `employees: 50-200`,
 * `totalReviews: 312`) were inherited from ChinaLink's configuration and have
 * not been confirmed for LEXD. Publishing them as LEXD's own would be a claim
 * nobody here has verified.
 */
export function ProofStrip() {
  const t = useTranslations('landing.proof');

  return (
    <section className={styles.section} aria-labelledby="proof-title">
      <div className={styles.sectionHead}>
        <p className={styles.overline}>{t('overline')}</p>
        <h2 id="proof-title">{t('title')}</h2>
        <p>{t('subtitle')}</p>
      </div>

      <div className={styles.proof}>
        {ITEMS.map(({ key, icon: Icon }) => (
          <div key={key} className={styles.proofItem}>
            <span className={styles.proofIcon}>
              <Icon aria-hidden="true" />
            </span>
            <h3>{t(`items.${key}.title`)}</h3>
            <p>{t(`items.${key}.body`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
