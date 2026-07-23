import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import {
  generatePageMetadata,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from '@/config/seo-advanced';
import { StructuredData } from '@/components/seo';
import { SeoServicePage } from '@/features/seo-content/SeoServicePage';

interface Props {
  params: Promise<{ locale: string }>;
}

const cargoContent = {
  fr: {
    metaTitle: 'Cargo Chine Cameroun | Fret Aérien & Maritime',
    metaDescription:
      "Transitaire spécialisé pour l'envoi de cargo de la Chine vers le Cameroun. Fret aérien 14-21 jours, conteneur maritime 60-75 jours vers Douala. Devis gratuit WhatsApp !",
    keywords:
      'cargo chine cameroun, fret chine cameroun, envoi colis chine cameroun, transitaire douala, fret chine douala, conteneur chine cameroun, expedition chine douala, cargo aerien douala, import chine cameroun',
    badge: 'Cargo Chine-Cameroon',
    title: 'Envoyez votre cargo de la Chine vers le Cameroun',
    intro:
      "LEXD est le transitaire de référence pour l'envoi de cargo de la Chine vers le Cameroun. Que vous importiez pour votre entreprise, votre boutique ou un projet personnel, nous gérons l'ensemble du transport de porte à porte jusqu'à Douala : sourcing, paiement fournisseur, fret aérien ou maritime, dédouanement et livraison.",
    highlights: [
      'Fret aérien 14-21 jours vers Douala',
      'Conteneur maritime 60-75 jours FCL/LCL',
      'Sourcing, paiement et vérification fournisseur',
      'Suivi WhatsApp avec photos à chaque étape',
    ],
    sections: [
      {
        title: 'Options de fret : aérien vs maritime',
        body: 'Le choix entre fret aérien et maritime dépend de votre budget, de votre délai et du type de marchandise. Le fret aérien est idéal pour les colis urgents, les échantillons ou les produits de valeur. Le conteneur maritime est préférable pour les volumes importants.',
        items: ['Fret aérien : 14-21 jours', 'Conteneur FCL : 60-75 jours', 'Groupage LCL pour volumes moyens', 'Conseil personnalisé selon votre marge'],
      },
      {
        title: 'Ce qui est inclus dans chaque envoi',
        body: 'Nous réceptionnons, contrôlons, consolidons, photographions, expédions et suivons votre marchandise avec un support WhatsApp clair.',
        items: ['Réception en Chine', 'Inspection photo ou vidéo', 'Consolidation multi-fournisseurs', 'Dédouanement et livraison au Cameroun'],
      },
      {
        title: 'Cameroon d’abord, Afrique ensuite',
        body: 'Douala reste notre hub principal, mais notre réseau permet aussi d’accompagner des importateurs vers le Sénégal, la Côte d’Ivoire, le Ghana, le Nigeria et d’autres destinations d’Afrique.',
      },
    ],
    table: {
      headers: ['Besoin', 'Sans LEXD', 'Avec LEXD'],
      rows: [
        ['Trouver un transitaire fiable', 'Recherche longue et risquée', 'Transitaire spécialisé Chine-Afrique'],
        ['Payer un fournisseur chinois', 'Difficultés avec Alipay et virements', 'Paiement assisté et vérification fournisseur'],
        ['Consolider plusieurs achats', 'Colis éparpillés', 'Entrepôt en Chine + regroupement'],
        ['Suivre la livraison', 'Peu de visibilité', 'Photos et updates WhatsApp'],
      ],
    },
    process: [
      'Vous nous envoyez le lien produit, les quantités ou le devis fournisseur sur WhatsApp.',
      'Nous proposons un devis clair avec fret aérien et maritime, délais et taxes incluses.',
      'Nous réceptionnons, inspectons, consolidons et expédions votre cargo.',
      'Nous suivons l’arrivée et coordonnons la livraison finale.',
    ],
    faqs: [
      { question: 'Combien de temps prend le cargo de la Chine vers le Cameroun ?', answer: "Le fret aérien prend entre 14 et 21 jours jusqu'à Douala. Le maritime prend généralement 60 à 75 jours selon le port et le transit terrestre." },
      { question: 'Quel est le prix du cargo Chine-Cameroun ?', answer: 'Le tarif dépend du mode, du poids, du volume et du type de marchandise. Envoyez-nous vos détails sur WhatsApp pour une estimation précise.' },
      { question: 'Puis-je suivre mon cargo pendant le transport ?', answer: 'Oui. Vous recevez des mises à jour WhatsApp avec photos aux étapes importantes.' },
    ],
    links: [
      { href: '/fr/routes/china-to-cameroon', label: 'Route fret Chine-Cameroun' },
      { href: '/fr/services/air-freight', label: 'Fret aérien Chine-Afrique' },
      { href: '/fr/services/sea-freight', label: 'Fret maritime conteneur' },
      { href: '/fr/calculateur', label: 'Calculer le coût de fret' },
    ],
    pageLabels: {},
  },
  en: {
    metaTitle: 'China to Cameroon Cargo | Air & Sea Freight for Africa',
    metaDescription:
      'Specialist China-to-Cameroon and China-to-West-Africa cargo support. Air freight in 14-21 days, sea freight in 60-75 days, sourcing, supplier payment, consolidation and WhatsApp tracking.',
    keywords:
      'China to Cameroon cargo, shipping from China to Cameroon, China Africa freight, air freight China Cameroon, sea freight China Cameroon, China to Africa shipping, freight forwarder Douala',
    badge: 'China to Cameroon Cargo',
    title: 'Ship cargo from China to Cameroon and Africa',
    intro:
      'LEXD helps African importers move goods from China to Cameroon and Africa with one coordinated process: sourcing, supplier payment, inspection, consolidation, air freight, sea freight, customs coordination and final delivery support. Cameroon is our strongest hub, with routes extending across Africa.',
    highlights: [
      'Air freight to Douala in 14-21 days',
      'FCL/LCL sea freight in 60-75 days',
      'Supplier sourcing, payment and verification',
      'WhatsApp tracking with photo updates',
    ],
    sections: [
      {
        title: 'Freight options: air vs sea',
        body: 'The right mode depends on budget, timeline and product type. Air freight is best for urgent parcels, samples and high-value goods. Sea freight is better for larger volumes, furniture, machinery and heavy cartons.',
        items: ['Air freight: 14-21 days', 'FCL container: 60-75 days', 'LCL consolidation for medium volumes', 'Route advice based on your margin'],
      },
      {
        title: 'What is included in each shipment',
        body: 'We receive, inspect, consolidate, photograph, ship and track your goods with clear WhatsApp support throughout the process.',
        items: ['Receiving in China', 'Photo or video inspection', 'Multi-supplier consolidation', 'Customs and delivery coordination'],
      },
      {
        title: 'Cameroon first, Africa next',
        body: 'Douala remains our primary operating hub, but our network also supports importers shipping to Senegal, Ivory Coast, Ghana, Nigeria and other African destinations.',
      },
    ],
    table: {
      headers: ['Need', 'Without LEXD', 'With LEXD'],
      rows: [
        ['Find a reliable freight partner', 'Long and risky search', 'China-Africa freight specialist'],
        ['Pay a Chinese supplier', 'Alipay and transfer issues', 'Assisted payment and supplier checks'],
        ['Consolidate several purchases', 'Scattered parcels', 'China-side warehouse and grouping'],
        ['Track the delivery', 'Limited visibility', 'Photo updates on WhatsApp'],
      ],
    },
    process: [
      'Send us the product link, quantities or supplier quote on WhatsApp.',
      'We provide a clear air and sea freight quote with timeline and included costs.',
      'We receive, inspect, consolidate and ship your cargo from China.',
      'We track arrival and coordinate final delivery or pickup support.',
    ],
    faqs: [
      { question: 'How long does China to Cameroon cargo take?', answer: 'Air freight to Douala usually takes 14 to 21 days. Sea freight usually takes 60 to 75 days depending on port handling and road transit.' },
      { question: 'How much does China to Cameroon cargo cost?', answer: 'Pricing depends on mode, weight, volume and product category. Send your shipment details on WhatsApp for a precise estimate.' },
      { question: 'Can I track my cargo during transit?', answer: 'Yes. You receive WhatsApp updates and photos at key shipment milestones.' },
    ],
    links: [
      { href: '/en/routes/china-to-cameroon', label: 'China to Cameroon route' },
      { href: '/en/routes/china-to-africa', label: 'China to Africa routes' },
      { href: '/en/services/air-freight', label: 'Air freight service' },
      { href: '/en/services/sea-freight', label: 'Sea freight service' },
    ],
    pageLabels: {
      ctaLabel: 'Get a quote on WhatsApp',
      routeCtaLabel: 'See China to Africa routes',
      routeCtaHref: '/en/routes/china-to-africa',
      comparisonTitle: 'Quick comparison',
      processTitle: 'Our process',
      faqTitle: 'Frequently asked questions',
      usefulLinksTitle: 'Useful links',
      asideTitle: 'Need advice before paying?',
      asideText: 'Send the supplier link, quantities and destination. Our team will reply on WhatsApp.',
      asideCtaLabel: 'Contact LEXD',
      stepLabel: 'Step',
    },
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const content = isEn ? cargoContent.en : cargoContent.fr;

  return generatePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    path: '/cargo-chine-cameroun',
    locale: locale as Locale,
    supportedLocales: ['fr', 'en'],
  });
}

export default async function CargoChineMaliPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const content = isEn ? cargoContent.en : cargoContent.fr;
  setRequestLocale(locale);

  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: content.metaTitle,
      serviceType: 'FreightForwardingService',
      provider: { '@id': 'https://www.lexdservices.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Cameroon' },
        { '@type': 'Place', name: 'Africa' },
        { '@type': 'Country', name: 'China' },
      ],
      description: content.metaDescription,
    },
    generateBreadcrumbSchema(
      [
        { name: isEn ? 'Home' : 'Accueil', url: `/${locale}/` },
        { name: content.badge, url: `/${locale}/cargo-chine-cameroun` },
      ],
      locale as Locale
    ),
    generateFAQPageSchema([...content.faqs], locale as Locale),
  ];

  return (
    <>
      <StructuredData schemas={schemas} />
      <SeoServicePage
        locale={isEn ? 'en' : 'fr'}
        badge={content.badge}
        title={content.title}
        intro={content.intro}
        highlights={content.highlights}
        sections={content.sections}
        table={content.table}
        process={content.process}
        faqs={content.faqs}
        links={content.links}
        {...content.pageLabels}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 3600;
