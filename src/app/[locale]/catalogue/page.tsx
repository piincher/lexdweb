import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { i18nConfig, type Locale } from '@/i18n/config';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/config/seo-advanced';
import { StructuredData } from '@/components/seo';
import { CatalogueIndex, CATALOGUE_UI, CATALOGUE_CATEGORIES } from '@/features/catalogue';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: `${CATALOGUE_UI.title[locale]} | LEXD`,
    description: CATALOGUE_UI.intro[locale].slice(0, 160),
    keywords: CATALOGUE_CATEGORIES.map((c) => c.name[locale]).join(', '),
    path: '/catalogue',
    locale,
    supportedLocales: [...i18nConfig.locales],
  });
}

export default async function CataloguePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'LEXD', url: `/${locale}/` },
    { name: CATALOGUE_UI.title[locale], url: `/${locale}/catalogue` },
  ], locale);

  return (
    <>
      <StructuredData schemas={[breadcrumb]} />
      <CatalogueIndex locale={locale} />
    </>
  );
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;
