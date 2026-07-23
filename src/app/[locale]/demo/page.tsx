/**
 * Live Features Demo Page
 *
 * Interactive showcase of the LEXD tracking experience:
 * live shipment feed, delivery countdown, tracking timeline,
 * trending routes board, social proof, and a quick-quote estimator.
 * Runs entirely on simulated data (noindex).
 */

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { DemoScreen } from '@/features/demo';

interface DemoPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: `Demo | ${t('title')}`,
    description: 'Experience our shipment tracking and interactive features.',
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { locale } = await params;

  return <DemoScreen locale={locale} />;
}
