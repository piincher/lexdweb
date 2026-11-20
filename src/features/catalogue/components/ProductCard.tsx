import Image from 'next/image';
import { ImageOff, MessageCircle } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { CATALOGUE_UI, quoteHref } from '../data';
import type { CatalogueProduct } from '../types';

export function ProductCard({ product, locale }: { product: CatalogueProduct; locale: Locale }) {
  const name = product.name[locale];

  return (
    <article
      className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
      data-reveal
    >
      {product.images.length > 0 ? (
        // Several photos = swipeable row, no JS needed.
        <div className="flex snap-x snap-mandatory overflow-x-auto" aria-label={name}>
          {product.images.map((src, i) => (
            <div key={src} className="relative aspect-[4/3] w-full shrink-0 snap-center bg-slate-100 dark:bg-slate-900">
              <Image
                src={src}
                alt={i === 0 ? name : `${name} (${i + 1})`}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          <ImageOff className="h-8 w-8" aria-hidden="true" />
          <span className="text-sm font-medium">{CATALOGUE_UI.photoPending[locale]}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
          {CATALOGUE_UI.badge[locale]}
          {product.images.length > 1 && ` · ${product.images.length} photos`}
        </span>
        <h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{name}</h3>
        <p className="mt-2 flex-1 leading-7 text-slate-700 dark:text-slate-300">{product.summary[locale]}</p>
        <a
          href={quoteHref(name, locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-500"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {CATALOGUE_UI.quote[locale]}
        </a>
      </div>
    </article>
  );
}
