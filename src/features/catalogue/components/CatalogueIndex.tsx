import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { CATALOGUE_CATEGORIES, CATALOGUE_UI } from '../data';
import { CatalogueShell } from './CatalogueShell';

export function CatalogueIndex({ locale }: { locale: Locale }) {
  return (
    <CatalogueShell
      locale={locale}
      badge={CATALOGUE_UI.badge[locale]}
      title={CATALOGUE_UI.title[locale]}
      intro={CATALOGUE_UI.intro[locale]}
    >
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
        {CATALOGUE_CATEGORIES.map((category) => {
          const cover = category.products.find((p) => p.images.length > 0)?.images[0];
          return (
            <Link
              key={category.slug}
              href={`/${locale}/catalogue/${category.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-blue-400 dark:border-slate-800 dark:bg-slate-950"
              data-reveal
              data-hover="lift"
            >
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900">
                {cover && (
                  <Image
                    src={cover}
                    alt={category.name[locale]}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-xl font-bold">{category.name[locale]}</h2>
                <p className="mt-2 flex-1 text-slate-700 dark:text-slate-300">{category.tagline[locale]}</p>
                <p className="mt-4 flex items-center justify-between text-sm font-semibold text-blue-700 dark:text-blue-300">
                  <span>
                    {category.products.length}{' '}
                    {(category.products.length === 1 ? CATALOGUE_UI.product : CATALOGUE_UI.products)[locale]}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    {CATALOGUE_UI.seeCategory[locale]}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </span>
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </CatalogueShell>
  );
}
