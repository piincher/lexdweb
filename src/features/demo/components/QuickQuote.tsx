/**
 * QuickQuote — floating action button + modal estimator.
 * Computes an indicative price from the demo lane rates. Accessible:
 * role="dialog", Escape closes, backdrop click closes, focus moves in.
 */
'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { X, Calculator, Check } from 'lucide-react';
import { TRENDING_ROUTES, type ShipmentMode } from '../data/demoData';
import { OVERLINE } from './statusStyles';

const ORIGINS = ['CAN', 'SZX', 'NING', 'YIW'];
const DESTINATIONS = ['DLA', 'DKR', 'ABJ', 'COO', 'CKY'];
const FALLBACK_RATE: Record<ShipmentMode, number> = { air: 5400, sea: 1400 };

function findRate(origin: string, destination: string, mode: ShipmentMode): number {
  const lane = TRENDING_ROUTES.find(
    (r) => r.originCode === origin && r.destinationCode === destination && r.mode === mode
  );
  return lane ? lane.pricePerKg : FALLBACK_RATE[mode];
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid var(--color-rule)',
  backgroundColor: 'var(--surface)',
  color: 'var(--color-ink)',
  fontSize: 14,
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  ...OVERLINE,
  display: 'block',
  marginBottom: 6,
  color: 'var(--color-ink-2)',
};

export function QuickQuote() {
  const t = useTranslations('demo');
  const [open, setOpen] = React.useState(false);
  const [origin, setOrigin] = React.useState(ORIGINS[0]);
  const [destination, setDestination] = React.useState(DESTINATIONS[0]);
  const [mode, setMode] = React.useState<ShipmentMode>('air');
  const [weight, setWeight] = React.useState('');
  const [error, setError] = React.useState('');
  const [result, setResult] = React.useState<number | null>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const kg = Number(weight);
    if (!Number.isFinite(kg) || kg < 1 || kg > 10_000) {
      setError(t('quote.errorWeight'));
      setResult(null);
      return;
    }
    setError('');
    setResult(Math.round(kg * findRate(origin, destination, mode)));
  };

  const reset = () => {
    setResult(null);
    setWeight('');
    setError('');
  };

  return (
    <>
      {/* FAB — genuinely floating, shadow allowed */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg font-semibold text-sm shadow-xl transition-transform hover:-translate-y-0.5"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent-ink, #FFFFFF)' }}
        aria-haspopup="dialog"
      >
        <Calculator size={18} />
        {t('quote.fab')}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            style={{ backgroundColor: 'rgb(19 26 23 / 0.55)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="quick-quote-title"
              className="w-full sm:max-w-md rounded-t-2xl sm:rounded-xl border p-6 outline-none"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--color-rule)' }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p style={{ ...OVERLINE, color: 'var(--color-primary)' }}>{t('quote.fab')}</p>
                  <h3 id="quick-quote-title" className="mt-1 text-xl font-bold" style={{ color: 'var(--color-ink)' }}>
                    {t('quote.title')}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--color-ink-2)' }}>
                    {t('quote.subtitle')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t('quote.close')}
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors hover:bg-[var(--color-paper-2)]"
                  style={{ color: 'var(--color-muted)' }}
                >
                  <X size={18} />
                </button>
              </div>

              {result === null ? (
                <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="qq-origin" style={labelStyle}>{t('quote.origin')}</label>
                      <select id="qq-origin" value={origin} onChange={(e) => setOrigin(e.target.value)} style={inputStyle}>
                        {ORIGINS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="qq-destination" style={labelStyle}>{t('quote.destination')}</label>
                      <select id="qq-destination" value={destination} onChange={(e) => setDestination(e.target.value)} style={inputStyle}>
                        {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="qq-weight" style={labelStyle}>{t('quote.weight')}</label>
                      <input
                        id="qq-weight"
                        type="number"
                        min={1}
                        max={10000}
                        inputMode="numeric"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder={t('quote.weightPlaceholder')}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="qq-mode" style={labelStyle}>{t('quote.mode')}</label>
                      <select id="qq-mode" value={mode} onChange={(e) => setMode(e.target.value as ShipmentMode)} style={inputStyle}>
                        <option value="air">{t('quote.modeAir')}</option>
                        <option value="sea">{t('quote.modeSea')}</option>
                      </select>
                    </div>
                  </div>
                  {error && (
                    <p role="alert" className="text-sm font-medium" style={{ color: 'var(--color-error)' }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg font-semibold text-sm transition-colors"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent-ink, #FFFFFF)' }}
                  >
                    {t('quote.submit')}
                  </button>
                </form>
              ) : (
                <div className="mt-6">
                  <div
                    className="rounded-xl border p-5 text-center"
                    style={{ borderColor: 'var(--color-primary-100)', backgroundColor: 'var(--color-primary-50)' }}
                  >
                    <span
                      className="mx-auto w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent-ink, #FFFFFF)' }}
                    >
                      <Check size={20} strokeWidth={3} />
                    </span>
                    <p className="mt-3" style={{ ...OVERLINE, color: 'var(--color-primary-700)' }}>
                      {t('quote.resultTitle')}
                    </p>
                    <p
                      className="mt-1 font-bold"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xl)', color: 'var(--color-ink)', fontVariantNumeric: 'tabular-nums' }}
                    >
                      {result.toLocaleString('fr-FR')} {t('routes.currency')}
                    </p>
                    <p className="mt-1 text-sm" style={{ color: 'var(--color-ink-2)' }}>
                      {t('quote.resultDetail', {
                        weight,
                        mode: t(mode === 'air' ? 'quote.modeAir' : 'quote.modeSea'),
                        origin,
                        destination,
                      })}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-4 w-full py-3.5 rounded-lg font-semibold text-sm transition-colors"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'var(--color-ink)',
                      border: '1.5px solid var(--color-rule)',
                    }}
                  >
                    {t('quote.reset')}
                  </button>
                </div>
              )}

              <p className="mt-4 text-xs text-center" style={{ color: 'var(--color-muted)' }}>
                {t('quote.disclaimer')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default QuickQuote;
