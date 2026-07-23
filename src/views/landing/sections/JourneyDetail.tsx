/* Hallmark · genre: modern-minimal · macrostructure: Split Studio workflow */

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import styles from './sections.module.css';

interface JourneyStep {
  title: string;
  body: string;
  tag?: string;
}

/**
 * Replaces the six one-word labels the workflow section used to show.
 *
 * "Fournisseur · Achat · Qualité · Paiement · Expédition · Livraison" is a
 * process any forwarder could print. The differentiators — inspection before
 * the supplier is paid, WhatsApp photo updates, customs handled in-house —
 * were invisible. Each step now states what LEXD actually does at that stage.
 */
export function JourneyDetail() {
  const t = useTranslations('landing.journey');
  const steps = t.raw('steps') as JourneyStep[];

  return (
    <section className={styles.section} aria-labelledby="journey-detail-title">
      <div className={styles.sectionHead}>
        <p className={styles.overline}>{t('overline')}</p>
        <h2 id="journey-detail-title">{t('title')}</h2>
        <p>{t('subtitle')}</p>
      </div>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.stepIndex}>{String(index + 1).padStart(2, '0')}</span>
            <div className={styles.stepBody}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.tag ? (
                <p className={styles.stepTag}>
                  <Check aria-hidden="true" />
                  {step.tag}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
