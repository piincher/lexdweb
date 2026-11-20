import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { i18nConfig, type Locale } from '@/i18n/config';
import {
  generatePageMetadata,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from '@/config/seo-advanced';
import { StructuredData } from '@/components/seo';
import { CategoryView, CATALOGUE_CATEGORIES, CATALOGUE_UI, getCategory } from '@/features/catalogue';

interface Props {
  params: Promise<{ locale: Locale; category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return generatePageMetadata({
    title: category.metaTitle[locale],
    description: category.metaDescription[locale],
    keywords: category.products.map((p) => p.name[locale]).join(', '),
    path: `/catalogue/${category.slug}`,
    locale,
    ogImage: category.products.find((p) => p.images.length > 0)?.images[0],
    supportedLocales: [...i18nConfig.locales],
  });
}

export default async function CatalogueCategoryPage({ params }: Props) {
  const { locale, category: slug } = await params;
  setRequestLocale(locale);
  const category = getCategory(slug);
  if (!category) notFound();

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'LEXD', url: `/${locale}/` },
      { name: CATALOGUE_UI.title[locale], url: `/${locale}/catalogue` },
      { name: category.name[locale], url: `/${locale}/catalogue/${category.slug}` },
    ], locale),
    generateFAQPageSchema(
      category.faqs.map((f) => ({ question: f.q[locale], answer: f.a[locale] })),
      locale,
    ),
  ];

  return (
    <>
      <StructuredData schemas={schemas} />
      <CategoryView category={category} locale={locale} />
    </>
  );
}

export function generateStaticParams() {
  return i18nConfig.locales.flatMap((locale) =>
    CATALOGUE_CATEGORIES.map((c) => ({ locale, category: c.slug })),
  );
}

export const dynamic = 'force-static';
export const dynamicParams = false;
