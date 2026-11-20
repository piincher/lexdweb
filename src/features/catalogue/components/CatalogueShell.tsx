import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';
import { CATALOGUE_UI } from '../data';

interface Props {
  locale: Locale;
  badge: string;
  title: string;
  intro: string;
  /** Breadcrumb or other content above the badge. */
  top?: ReactNode;
  children: ReactNode;
}

/** Dark hero + page body + "how it works" + brand disclaimer, shared by both catalogue pages. */
export function CatalogueShell({ locale, badge, title, intro, top, children }: Props) {
  return (
    <main
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="lexd-workbench min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white"
    >
      <section className="bg-slate-950 pt-28 pb-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {top}
          <p className="mb-4 inline-flex rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-100 ring-1 ring-blue-300/20">
            {badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{intro}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {children}

        <section data-reveal>
          <h2 className="text-2xl font-bold md:text-3xl">{CATALOGUE_UI.howTitle[locale]}</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {CATALOGUE_UI.how.map((step, i) => (
              <li key={step.fr} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-300">{i + 1}</span>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{step[locale]}</p>
              </li>
            ))}
          </ol>
        </section>

        <p className="border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {CATALOGUE_UI.disclaimer[locale]}
        </p>
      </div>
    </main>
  );
}
