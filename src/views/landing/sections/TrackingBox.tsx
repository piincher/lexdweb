/* Hallmark · genre: modern-minimal · macrostructure: Split Studio hero inset */

'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import styles from './sections.module.css';
import { CONTACT_CONFIG } from '@/config/app';

const WHATSAPP_NUMBER = CONTACT_CONFIG.WHATSAPP.CHINA;

/**
 * Hero tracking entry.
 *
 * Deliberately hands off to WhatsApp rather than calling the API.
 * `API_ENDPOINTS.SHIPMENTS.TRACK` exists, but it lives on
 * api.lexdservices.com, which does not resolve yet — and there is no web
 * tracking-result page to land on either. WhatsApp is how this business
 * already answers "where is my parcel", so the handoff is the real flow
 * rather than a placeholder.
 *
 * To move to a live lookup later, replace the body of `submit` with a
 * router push to the results route. Nothing else here needs to change.
 */
export function TrackingBox() {
  const t = useTranslations('landing.tracking');
  const [reference, setReference] = useState('');
  const trimmed = reference.trim();

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!trimmed) return;
    const message = t('whatsappMessage', { reference: trimmed });
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <form className={styles.tracking} onSubmit={submit}>
      <label className={styles.trackingLabel} htmlFor="tracking-reference">
        {t('label')}
      </label>
      <div className={styles.trackingRow}>
        <input
          id="tracking-reference"
          name="reference"
          type="text"
          inputMode="text"
          autoComplete="off"
          spellCheck={false}
          placeholder={t('placeholder')}
          value={reference}
          onChange={(event) => setReference(event.target.value)}
        />
        <button className={styles.trackingSubmit} type="submit" disabled={!trimmed}>
          <Search aria-hidden="true" />
          <span>{t('action')}</span>
        </button>
      </div>
      <p className={styles.trackingHint}>{t('hint')}</p>
    </form>
  );
}
