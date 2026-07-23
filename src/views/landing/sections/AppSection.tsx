/* Hallmark · genre: modern-minimal · macrostructure: Split Studio dark inset */

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import styles from './sections.module.css';

/**
 * Store links for the LEXD app.
 *
 * `ios` is null on purpose. The old listing (App Store id6503253700) is the
 * ChinaLink-branded app, and sending a LEXD visitor there would hand them a
 * differently-branded product; the clean-break rebrand ships a new listing that
 * does not exist yet. The Play URL resolves by package name as soon as
 * `com.nuvotech.lexd` is published, so it is safe to render now.
 *
 * Fill `ios` in once the new App Store listing is live — the button appears on
 * its own, and the "Android first" note disappears.
 */
const APP_LINKS: { ios: string | null; android: string | null } = {
  ios: null,
  android: 'https://play.google.com/store/apps/details?id=com.nuvotech.lexd',
};

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.63-.68.83-1.27 2.15-1.11 3.23 1.18.09 2.38-.66 3.1-1.75z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
    </svg>
  );
}

export function AppSection() {
  const t = useTranslations('landing.app');
  const features = t.raw('features') as string[];

  return (
    <section className={styles.app} aria-labelledby="app-title">
      <div>
        <p className={styles.overline} style={{ color: 'var(--green-200)' }}>
          {t('overline')}
        </p>
        <h2 id="app-title">{t('title')}</h2>
        <p className={styles.appLede}>{t('subtitle')}</p>

        <ul className={styles.appList}>
          {features.map((feature) => (
            <li key={feature}>
              <Check aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={styles.appActions}>
          {APP_LINKS.android ? (
            <a
              className={styles.storeButton}
              href={APP_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayMark />
              <span>
                <small>{t('storePrefix')}</small>
                <strong>Google Play</strong>
              </span>
            </a>
          ) : null}

          {APP_LINKS.ios ? (
            <a
              className={styles.storeButton}
              href={APP_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppleMark />
              <span>
                <small>{t('storePrefix')}</small>
                <strong>App Store</strong>
              </span>
            </a>
          ) : null}
        </div>

        {!APP_LINKS.ios ? <p className={styles.trackingHint}>{t('iosPending')}</p> : null}
      </div>

      <figure className={styles.appVisual}>
        <Image
          src="/lexd-wordmark-light.png"
          alt="LEXD"
          width={521}
          height={190}
        />
      </figure>
    </section>
  );
}
