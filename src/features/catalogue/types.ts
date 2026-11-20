import type { Locale } from '@/i18n/config';

export type Localized = Record<Locale, string>;

export interface CatalogueProduct {
  id: string;
  name: Localized;
  summary: Localized;
  /** Paths under /public. Empty = photo pending (card shows a placeholder). */
  images: string[];
}

export interface CatalogueFaq {
  q: Localized;
  a: Localized;
}

export interface CatalogueCategory {
  slug: string;
  name: Localized;
  tagline: Localized;
  intro: Localized;
  metaTitle: Localized;
  metaDescription: Localized;
  products: CatalogueProduct[];
  guideTitle: Localized;
  guide: Localized[];
  faqs: CatalogueFaq[];
  /** Related long-form industry article (exists in fr/en only). */
  industryPath?: string;
}
