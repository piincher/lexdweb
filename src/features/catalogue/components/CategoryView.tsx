import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { CATALOGUE_CATEGORIES, CATALOGUE_UI } from '../data';
import type { CatalogueCategory } from '../types';
import { CatalogueShell } from './CatalogueShell';
import { ProductCard } from './ProductCard';

const chip =
  'rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-slate-800 dark:text-blue-300 dark:hover:bg-slate-900';

export function CategoryView({ category, locale }: { category: CatalogueCategory; locale: Locale }) {
  const others = CATALOGUE_CATEGORIES.filter((c) => c.slug !== category.slug);
  // Industry articles only exist in fr/en.
  const showArticle = category.industryPath && (locale === 'fr' || locale === 'en');

  return (
    <CatalogueShell
      locale={locale}
      badge={CATALOGUE_UI.badge[locale]}
      title={category.name[locale]}
      intro={category.intro[locale]}
      top={
        <Link
          href={`/${locale}/catalogue`}
          className="mb-6 flex w-fit items-center gap-1 text-sm font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
        >
          <span className="rtl:rotate-180" aria-hidden="true">←</span> {CATALOGUE_UI.allCategories[locale]}
        </Link>
      }
    >
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        <section data-reveal>
          <h2 className="text-2xl font-bold md:text-3xl">{category.guideTitle[locale]}</h2>
          <ul className="mt-5 space-y-3">
            {category.guide.map((point) => (
              <li key={point.fr} className="rounded-lg border border-slate-200 p-4 leading-7 text-slate-700 dark:border-slate-800 dark:text-slate-300">
                {point[locale]}
              </li>
            ))}
          </ul>
          {showArticle && (
            <Link href={`/${locale}${category.industryPath}`} className={`mt-5 inline-block ${chip}`}>
              {CATALOGUE_UI.relatedArticle[locale]}
            </Link>
          )}
        </section>

        <section data-reveal>
          <h2 className="text-2xl font-bold md:text-3xl">{CATALOGUE_UI.faqTitle[locale]}</h2>
          <div className="mt-5 space-y-4">
            {category.faqs.map((faq) => (
              <div key={faq.q.fr} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
                <h3 className="font-bold">{faq.q[locale]}</h3>
                <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{faq.a[locale]}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <nav aria-label={CATALOGUE_UI.otherCategories[locale]} data-reveal>
        <h2 className="text-xl font-bold">{CATALOGUE_UI.otherCategories[locale]}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {others.map((c) => (
            <Link key={c.slug} href={`/${locale}/catalogue/${c.slug}`} className={chip}>
              {c.name[locale]}
            </Link>
          ))}
        </div>
      </nav>
    </CatalogueShell>
  );
}
