/**
 * Metadata Utilities
 * 
 * Helper functions for generating consistent, SEO-optimized metadata
 * across all pages with proper hreflang and OpenGraph support.
 */

import { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';
import { Locale, i18nConfig, getSeoLocale } from '@/i18n/config';
import { BUSINESS_INFO, generatePageMetadata } from '@/config/seo-advanced';

// ============================================================================
// NEW: Expanded Metadata Generators for #1 Rankings
// ============================================================================

/**
 * Payment service page metadata
 */
export async function generatePaymentMetadata(locale: Locale): Promise<Metadata> {
  const isEn = locale === 'en';
  
  return generatePageMetadata({
    title: isEn
      ? 'Pay Chinese Suppliers Safely | Alibaba & 1688 Payment Agent | LEXD'
      : 'Payer Fournisseur Chinois | Service Paiement Alibaba 1688 | LEXD',
    description: isEn
      ? 'Secure payment service for Chinese suppliers. Pay Alibaba, 1688 & factory suppliers safely via Alipay, WeChat Pay, bank transfer. WhatsApp: +861-786-366-8208'
      : 'Service de paiement sécurisé pour fournisseurs chinois. Payez Alibaba, 1688 et usines via Alipay, WeChat Pay, virement. Évitez les arnaques. 500+ entreprises africaines nous font confiance.',
    keywords: isEn
      ? 'pay Chinese supplier, supplier payment China, Alibaba payment service, 1688 payment, pay factory in China, secure payment China, escrow payment China, WeChat Pay supplier, Alipay supplier payment, payment agent China, avoid Alibaba scam, safe payment China, freight forwarder China Cameroon'
      : 'payer fournisseur chinois, paiement fournisseur Chine, service paiement Alibaba, paiement 1688, payer usine Chine, paiement sécurisé Chine, escrow Chine, WeChat Pay fournisseur, Alipay paiement, agent paiement Chine, éviter arnaque Alibaba, cargo chine cameroun, transitaire chine cameroun',
    path: '/services/paiement-fournisseur-chine',
    locale,
    ogType: 'article',
  });
}

/**
 * Supplier verification page metadata
 */
export async function generateVerificationMetadata(locale: Locale): Promise<Metadata> {
  const isEn = locale === 'en';
  
  return generatePageMetadata({
    title: isEn
      ? 'Verify Chinese Suppliers | Avoid Alibaba Scams | Factory Audit China'
      : 'Vérifier Fournisseur Chinois | Éviter Arnaque Alibaba | Audit Usine Chine',
    description: isEn
      ? 'Avoid scams on Alibaba & 1688. On-site Chinese supplier verification: factory audit, license check, quality inspection. Protect your investment. Trusted by African importers since 2019.'
      : 'Évitez les arnaques sur Alibaba et 1688. Vérification sur place des fournisseurs chinois : audit usine, vérification licence, inspection qualité. Protégez votre investissement.',
    keywords: isEn
      ? 'verify Chinese supplier, Alibaba supplier verification, check Chinese factory, avoid China scam, legitimate Chinese supplier, factory audit China, supplier background check, Alibaba scam check, 1688 supplier check, trusted manufacturer China, freight forwarder China Cameroon'
      : 'vérifier fournisseur chinois, vérification fournisseur Alibaba, vérifier usine chinoise, éviter arnaque Chine, fournisseur chinois sérieux, audit usine Chine, vérification arnaque Alibaba, vérification fournisseur 1688, fabricant de confiance Chine, cargo chine cameroun, transitaire chine cameroun',
    path: '/services/verification-fournisseur-chine',
    locale,
    ogType: 'article',
  });
}

/**
 * Alibaba agent page metadata
 */
export async function generateAlibabaAgentMetadata(locale: Locale): Promise<Metadata> {
  const isEn = locale === 'en';
  
  return generatePageMetadata({
    title: isEn
      ? 'Alibaba Buying Agent for Africa | Buy from China | LEXD'
      : 'Agent Achat Alibaba Afrique | Acheter en Chine | LEXD',
    description: isEn
      ? 'Your trusted Alibaba buying agent for Cameroon, Senegal, Ivory Coast & Africa. We find suppliers, negotiate prices, verify quality, handle payment & ship to your door. Get started on WhatsApp!'
      : 'Votre agent achat Alibaba de confiance pour le Cameroun, Sénégal, Côte d\'Ivoire et Afrique. Nous trouvons les fournisseurs, négocions, vérifions la qualité, payons et expédions. Commencez sur WhatsApp !',
    keywords: isEn
      ? 'Alibaba buying agent, Alibaba agent Africa, buy from Alibaba Cameroon, Alibaba sourcing agent, Alibaba procurement Africa, Alibaba shipping agent, buy from China agent, China buying agent Africa, Alibaba middleman, cargo chine cameroun, freight forwarder China Cameroon'
      : 'agent achat Alibaba, agent Alibaba Afrique, acheter Alibaba Cameroon, agent sourcing Alibaba, approvisionnement Alibaba Afrique, agent maritime Alibaba, acheter Chine agent, agent achat Chine Afrique, intermédiaire Alibaba, cargo chine cameroun, transitaire chine cameroun',
    path: '/services/agent-sourcing-chine',
    locale,
    ogType: 'article',
  });
}

/**
 * Industry page metadata generator
 */
export async function generateIndustryMetadata(
  locale: Locale,
  industry: 'textiles' | 'electronics' | 'machinery' | 'cosmetics' | 'autoParts' | 'construction'
): Promise<Metadata> {
  const isEn = locale === 'en';
  
  const industryConfig = {
    textiles: {
      title: isEn
        ? 'Import Textiles from China to Africa | Clothing Wholesale Agent | LEXD'
        : 'Importer Textiles Chine Afrique | Agent Grossiste Vêtements | LEXD',
      description: isEn
        ? 'Import clothing, fabrics & textiles from China to Cameroon, Senegal & Africa. We source from Guangzhou wholesale markets, inspect quality, and ship via air or sea. Best prices guaranteed!'
        : 'Importez vêtements, tissus et textiles de Chine vers le Cameroun, Sénégal et Afrique. Nous sourçons sur les marchés de gros de Guangzhou, inspectons et expédions par air ou mer.',
      keywords: isEn
        ? 'import textiles from China, wholesale clothing China, buy clothes from China, textile sourcing agent, import fabrics China Africa, garment factory China, wholesale fashion China, clothing supplier China, freight forwarder China Cameroon'
        : 'importer textiles Chine, grossiste vêtements Chine, acheter vêtements Chine, agent sourcing textile, importer tissus Chine Afrique, usine vêtements Chine, grossiste mode Chine, fournisseur vêtements Chine, cargo chine cameroun',
      path: '/industries/textiles-chine-afrique',
    },
    electronics: {
      title: isEn
        ? 'Import Electronics from China to Africa | Phones, Laptops, Gadgets | LEXD'
        : 'Importer Électronique Chine Afrique | Téléphones, Ordinateurs | LEXD',
      description: isEn
        ? 'Import phones, laptops, accessories & electronics from China to Africa. Shenzhen sourcing agent with quality control and warranty support. Air freight 14-21 days to Douala.'
        : 'Importez téléphones, ordinateurs, accessoires et électronique de Chine vers l\'Afrique. Agent sourcing Shenzhen avec contrôle qualité et support garantie. Fret aérien 14-21 jours à Douala.',
      keywords: isEn
        ? 'import electronics from China, wholesale phones China, buy laptops from China, electronics sourcing agent, Shenzhen electronics market, import gadgets China Africa, phone supplier China, electronics wholesale Africa, cargo chine cameroun'
        : 'importer électronique Chine, gros téléphones Chine, acheter ordinateurs Chine, agent sourcing électronique, marché électronique Shenzhen, importer gadgets Chine Afrique, fournisseur téléphones Chine, cargo chine cameroun',
      path: '/industries/electronique-chine-afrique',
    },
    machinery: {
      title: isEn
        ? 'Import Machinery from China to Africa | Industrial Equipment | LEXD'
        : 'Importer Machines Chine Afrique | Équipement Industriel | LEXD',
      description: isEn
        ? 'Import industrial machinery, construction equipment & tools from China to Africa. FCL container shipping, factory direct pricing, installation support. Get your quote today!'
        : 'Importez machines industrielles, équipement construction et outils de Chine vers l\'Afrique. Expédition conteneur FCL, prix direct usine, support installation. Devis gratuit !',
      keywords: isEn
        ? 'import machinery from China, industrial equipment China, buy machines from China, machinery sourcing agent, factory equipment China Africa, construction machinery import, machine supplier China, heavy equipment shipping, cargo chine cameroun'
        : 'importer machines Chine, équipement industriel Chine, acheter machines Chine, agent sourcing machines, équipement usine Chine Afrique, importer matériel construction, fournisseur machines Chine, cargo chine cameroun',
      path: '/industries/machines-chine-afrique',
    },
    cosmetics: {
      title: isEn
        ? 'Import Cosmetics from China to Africa | Beauty Products Wholesale | LEXD'
        : 'Importer Cosmétiques Chine Afrique | Produits Beauté Gros | LEXD',
      description: isEn
        ? 'Import beauty products, skincare, hair products & cosmetics from China to Africa. Guangzhou cosmetics market sourcing with FDA-compliant labeling. Air & sea freight available.'
        : 'Importez produits beauté, soins visage, cheveux et cosmétiques de Chine vers l\'Afrique. Sourcing marché cosmétiques Guangzhou avec étiquetage conforme. Fret aérien et maritime disponible.',
      keywords: isEn
        ? 'import cosmetics from China, wholesale beauty products China, buy skincare from China, cosmetics sourcing agent, Guangzhou cosmetics market, import hair products China Africa, beauty supplier China, cosmetics wholesale Africa, cargo chine cameroun'
        : 'importer cosmétiques Chine, gros produits beauté Chine, acheter soins visage Chine, agent sourcing cosmétiques, marché cosmétiques Guangzhou, importer produits cheveux Chine Afrique, cargo chine cameroun',
      path: '/industries/cosmetiques-chine-afrique',
    },
    autoParts: {
      title: isEn
        ? 'Import Auto Parts from China to Africa | Car Spare Parts Wholesale | LEXD'
        : 'Importer Pièces Auto Chine Afrique | Gros Pièces Détachées | LEXD',
      description: isEn
        ? 'Import car parts, truck spare parts & auto accessories from China to Africa. Guangzhou auto parts market sourcing with quality guarantee. Container shipping for bulk orders.'
        : 'Importez pièces auto, pièces détachées camion et accessoires de Chine vers l\'Afrique. Sourcing marché pièces auto Guangzhou avec garantie qualité. Expédition conteneur pour gros volumes.',
      keywords: isEn
        ? 'import auto parts from China, wholesale car parts China, buy spare parts from China, auto parts sourcing agent, Guangzhou auto parts market, import truck parts China Africa, car accessories supplier China, auto parts wholesale Africa, cargo chine cameroun'
        : 'importer pièces auto Chine, gros pièces auto Chine, acheter pièces détachées Chine, agent sourcing pièces auto, marché pièces auto Guangzhou, importer pièces camion Chine Afrique, cargo chine cameroun',
      path: '/industries/pieces-auto-chine-afrique',
    },
    construction: {
      title: isEn
        ? 'Import Building Materials from China to Africa | Construction Supplies | LEXD'
        : 'Importer Matériaux Construction Chine Afrique | Fournitures Bâtiment | LEXD',
      description: isEn
        ? 'Import tiles, sanitary ware, hardware, tools & building materials from China to Africa. Foshan ceramics market sourcing. FCL container shipping at best rates. Quote in 24h!'
        : 'Importez carreaux, sanitaire, quincaillerie, outils et matériaux construction de Chine vers l\'Afrique. Sourcing marché céramique Foshan. Expédition conteneur FCL aux meilleurs tarifs. Devis en 24h !',
      keywords: isEn
        ? 'import building materials from China, wholesale tiles China, buy sanitary ware from China, construction materials sourcing agent, Foshan ceramics market, import hardware China Africa, building supplies supplier China, cargo chine cameroun'
        : 'importer matériaux construction Chine, gros carreaux Chine, acheter sanitaire Chine, agent sourcing matériaux construction, marché céramique Foshan, importer quincaillerie Chine Afrique, cargo chine cameroun',
      path: '/industries/materiaux-construction-chine-afrique',
    },
  };
  
  const config = industryConfig[industry];
  
  return generatePageMetadata({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    path: config.path,
    locale,
    ogType: 'article',
  });
}

/**
 * Comparison page metadata
 */
export async function generateComparisonMetadata(
  locale: Locale,
  topic: 'air-vs-sea' | 'alibaba-vs-1688' | 'dhl-vs-forwarder'
): Promise<Metadata> {
  const isEn = locale === 'en';
  
  const comparisonConfig = {
    'air-vs-sea': {
      title: isEn
        ? 'Air Freight vs Sea Freight from China to Africa | 2026 Comparison | LEXD'
        : 'Fret Aérien vs Maritime Chine Afrique | Comparaison 2026 | LEXD',
      description: isEn
        ? 'Air freight (14-21 days, $8-15/kg) vs sea freight (60-75 days, $80-150/CBM). Which is best for your China to Africa shipment? Complete 2026 comparison with costs, times, and recommendations.'
        : 'Fret aérien (14-21 jours, 8-15$/kg) vs maritime (60-75 jours, 80-150$/CBM). Lequel choisir pour votre expédition Chine-Afrique ? Comparaison complète 2026 avec coûts, délais et recommandations.',
      keywords: isEn
        ? 'air freight vs sea freight China Africa, shipping by air or sea from China, container vs air cargo cost, cheapest shipping method China Africa, DHL vs freight forwarder China, cargo chine cameroun'
        : 'fret aérien vs maritime Chine Afrique, expédition air ou mer depuis Chine, conteneur vs cargo aérien coût, moyen expédition pas cher Chine Afrique, DHL vs transitaire Chine, cargo chine cameroun',
      path: '/guides/fret-aerien-vs-maritime-chine-cameroun',
    },
    'alibaba-vs-1688': {
      title: isEn
        ? 'Alibaba vs 1688 for African Importers | Which is Better? | LEXD'
        : 'Alibaba vs 1688 pour Importateurs Africains | Lequel Choisir? | LEXD',
      description: isEn
        ? 'Alibaba (international, English, higher prices) vs 1688 (Chinese-only, factory direct, 30-50% cheaper). Which platform should African importers use? Complete guide with pros, cons, and our recommendation.'
        : 'Alibaba (international, anglais, prix plus élevés) vs 1688 (chinois uniquement, direct usine, 30-50% moins cher). Quelle plateforme pour les importateurs africains ? Guide complet avec avantages et inconvénients.',
      keywords: isEn
        ? 'Alibaba vs 1688 for Africa, difference Alibaba 1688, buy from 1688 Africa, 1688 sourcing agent, Alibaba agent Africa, cheaper than Alibaba, Chinese factory direct, cargo chine cameroun'
        : 'Alibaba vs 1688 pour Afrique, différence Alibaba 1688, acheter sur 1688 Afrique, agent sourcing 1688, agent Alibaba Afrique, moins cher qu Alibaba, direct usine chinoise, cargo chine cameroun',
      path: '/guides/alibaba-vs-1688-pour-afrique',
    },
    'dhl-vs-forwarder': {
      title: isEn
        ? 'DHL vs Freight Forwarder from China to Africa | Cost Comparison 2026 | LEXD'
        : 'DHL vs Transitaire Chine Afrique | Comparaison Coût 2026 | LEXD',
      description: isEn
        ? 'DHL ($25-50/kg, 5-7 days) vs freight forwarder ($8-15/kg, 14-21 days). Which is better for shipping from China to Cameroon, Senegal, Ivory Coast? Detailed cost comparison for African businesses.'
        : 'DHL (25-50$/kg, 5-7 jours) vs transitaire (8-15$/kg, 14-21 jours). Lequel choisir pour expédier de Chine vers le Cameroun, Sénégal, Côte d\'Ivoire ? Comparaison détaillée pour entreprises africaines.',
      keywords: isEn
        ? 'DHL vs freight forwarder China Africa, DHL shipping China Cameroon cost, cheap alternative DHL China, freight forwarder vs courier China, shipping cost comparison China Africa, cargo chine cameroun'
        : 'DHL vs transitaire Chine Afrique, coût DHL Chine Cameroun, alternative pas cher DHL Chine, transitaire vs courrier Chine, comparaison coût expédition Chine Afrique, cargo chine cameroun',
      path: '/guides/dhl-vs-transitaire-chine-afrique',
    },
  };
  
  const config = comparisonConfig[topic];
  
  return generatePageMetadata({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    path: config.path,
    locale,
    ogType: 'article',
  });
}


// ============================================================================
// Default Metadata Templates
// ============================================================================

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#007757' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1815' },
  ],
  colorScheme: 'light dark',
};

/**
 * Base metadata that applies to all pages
 */
export function getBaseMetadata(locale: Locale): Metadata {
  const seoLocale = getSeoLocale(locale);
  
  return {
    applicationName: BUSINESS_INFO.name,
    authors: [{ name: BUSINESS_INFO.name, url: BUSINESS_INFO.url }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
    generator: 'Next.js 15',
    referrer: 'origin-when-cross-origin',
    metadataBase: new URL(BUSINESS_INFO.url),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    },
    category: 'logistics',
    classification: 'Business & Industrial > Shipping & Logistics',
    other: {
      // Geographic targeting
      'geo.region': 'ML-BM',
      'geo.placename': 'Douala',
      'geo.position': '12.6392;-8.0029',
      'ICBM': '12.6392, -8.0029',
      // Business info
      'business:contact_data:street_address': BUSINESS_INFO.address.streetAddress,
      'business:contact_data:locality': BUSINESS_INFO.address.addressLocality,
      'business:contact_data:country_name': BUSINESS_INFO.address.addressCountry,
      'business:contact_data:phone_number': BUSINESS_INFO.contact.phones.cameroon,
      'place:location:latitude': '12.6392',
      'place:location:longitude': '-8.0029',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@chinalinkexpress',
      site: '@chinalinkexpress',
    },
    appleWebApp: {
      capable: true,
      title: BUSINESS_INFO.name,
      statusBarStyle: 'default',
    },
    icons: {
      icon: [
        { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/icons/icon-32x32.png',
      apple: [
        { url: '/icons/icon-72x72.png', sizes: '72x72' },
        { url: '/icons/icon-114x114.png', sizes: '114x114' },
        { url: '/icons/icon-144x144.png', sizes: '144x144' },
        { url: '/icons/icon-152x152.png', sizes: '152x152' },
        { url: '/icons/icon-180x180.png', sizes: '180x180' },
        { url: '/icons/icon-192x192.png', sizes: '192x192' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/icons/safari-pinned-tab.svg',
          color: '#007757',
        },
      ],
    },
    manifest: '/manifest.json',
  };
}

// ============================================================================
// Page Metadata Generators
// ============================================================================

interface PageMetadataParams {
  locale: Locale;
  pageName: string;
  path: string;
  customTitle?: string;
  customDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

/**
 * Generate metadata for any page with translations
 */
export async function generateLocalizedMetadata({
  locale,
  pageName,
  path,
  customTitle,
  customDescription,
  ogImage,
  ogType = 'website',
  noIndex = false,
}: PageMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  const title = customTitle || t(`${pageName}.title`);
  const description = customDescription || t(`${pageName}.description`);
  const keywords = t(`${pageName}.keywords`);
  
  return generatePageMetadata({
    title,
    description,
    keywords,
    path,
    locale,
    ogImage,
    ogType,
    noIndex,
  });
}

/**
 * Home page metadata
 */
export async function generateHomeMetadata(locale: Locale): Promise<Metadata> {
  const isEn = locale === 'en';
  
  return generatePageMetadata({
    title: isEn 
      ? 'LEXD | #1 Freight Forwarder China to Africa | Shipping & Sourcing'
      : 'LEXD | N°1 Transitaire Chine Afrique | Fret & Sourcing',
    description: isEn
      ? '#1 freight forwarder and sourcing agent from China to Africa. Air freight 14-21 days, sea freight 60-75 days. Alibaba & 1688 buying agent, supplier payment, verification. Free WhatsApp quote! Serving Cameroon, Senegal, Ivory Coast, Ghana, Nigeria & all Africa.'
      : 'N°1 transitaire et agent sourcing de la Chine vers l\'Afrique. Fret aérien 14-21 jours, maritime 60-75 jours. Agent achat Alibaba & 1688, paiement fournisseur, vérification. Devis gratuit WhatsApp ! Livraison Cameroun, Sénégal, Côte d\'Ivoire, Ghana, Nigeria et Afrique.',
    keywords: isEn
      ? 'freight forwarding, shipping from China, logistics company, international shipping, sea freight, air freight, freight forwarder, China Africa shipping, shipping from China to Africa, China to Africa shipping, freight forwarding China to Cameroon, shipping from China to Senegal, China to Ivory Coast freight, Alibaba shipping agent, China sourcing agent, buy from Alibaba Africa, supplier payment China, verify Chinese supplier, China to Cameroon cargo, freight forwarder China Cameroon, import from China Cameroon, wholesale from China Africa, container shipping China Africa, door to door shipping China Africa, cheapest shipping China Africa, Alibaba agent Cameroon, 1688 sourcing agent, pay Chinese supplier, factory audit China, import textiles China, import electronics China, import machinery China, import cosmetics China, import auto parts China, building materials China Africa, cargo shipping Douala, freight forwarder Douala, China Cameroon trade, Africa logistics'
      : 'cargo chine cameroun, transitaire chine cameroun, fret chine douala, envoi colis chine cameroun, fret aerien chine afrique, conteneur chine cameroun, expedition chine cameroun, achat alibaba cameroun, agent sourcing chine, chinalink express, fret maritime, fret aérien, expédition Chine, transitaire, logistique internationale, agent achat Alibaba, acheter sur 1688 Afrique, payer fournisseur chinois, vérifier fournisseur chinois, cargo aérien Chine Cameroun, conteneur maritime Chine Afrique, livraison porte à porte Chine Afrique, fret pas cher Chine Afrique, agent Alibaba Cameroun, agent sourcing 1688, paiement fournisseur Chine, audit usine Chine, importer textiles Chine, importer électronique Chine, importer machines Chine, importer cosmétiques Chine, importer pièces auto Chine, matériaux construction Chine Afrique, expédition Douala, transitaire Douala, commerce Chine Cameroun, logistique Afrique',
    path: '/',
    locale,
    ogType: 'website',
  });
}

/**
 * Service page metadata
 */
export async function generateServiceMetadata(
  locale: Locale,
  service: 'air' | 'sea' | 'sourcing'
): Promise<Metadata> {
  const isEn = locale === 'en';
  
  const serviceConfig = {
    air: {
      title: isEn 
        ? 'Air Freight China to Africa | Cameroon & Africa Hub'
        : 'Cargo Aérien Chine Cameroun | Fret Express Douala | LEXD',
      description: isEn
        ? 'Fast air freight from China to Cameroon and Africa. Delivery in 14-21 days via Douala hub, with sourcing, supplier payment, consolidation, and WhatsApp tracking.'
        : 'Fret aérien rapide de la Chine vers Douala, Cameroun. Livraison en 14-21 jours, sourcing, paiement fournisseur, consolidation et suivi WhatsApp.',
      keywords: isEn
        ? 'air freight China Africa, air cargo China Cameroon, express shipping China Africa, air freight Douala, cargo from China to Cameroon'
        : 'fret aérien Chine Cameroun, cargo aérien Chine Cameroun, cargo aerien chine cameroun, express Chine Cameroun, fret aérien Douala, cargo Chine Cameroun',
      path: '/services/air-freight',
    },
    sea: {
      title: isEn
        ? 'Sea Freight China to Africa | FCL & LCL via Africa'
        : 'Conteneur Chine Cameroun | Fret Maritime Douala | FCL & LCL',
      description: isEn
        ? 'Economical sea freight from China to Africa, then land transit to Douala and nearby markets. FCL and LCL options in 60-75 days.'
        : 'Fret maritime économique du port de Foshan au port de Dakar, puis transit terrestre vers Douala. Conteneur FCL et groupage LCL vers le Cameroun en 60-75 jours.',
      keywords: isEn
        ? 'sea freight China Africa, FCL shipping Africa, LCL consolidation Cameroon, container shipping China Cameroon, sea freight Douala'
        : 'fret maritime Chine Cameroun, conteneur Chine Cameroun, conteneur chine cameroun, groupage LCL Cameroun, transport maritime Chine Cameroun, fret maritime Chine Douala',
      path: '/services/sea-freight',
    },
    sourcing: {
      title: isEn
        ? 'China Sourcing Agent for Africa | Alibaba & 1688 Procurement'
        : 'Agent Sourcing Chine | Achat Alibaba | Paiement Fournisseur',
      description: isEn
        ? 'China sourcing agent for African importers. We buy from Alibaba and 1688, verify suppliers, inspect goods, process payment, and ship through our Cameroon hub and Africa routes.'
        : 'Agent sourcing en Chine pour les importateurs camerounais. Achat Alibaba, vérification fournisseur, inspection qualité, paiement et expédition vers Douala.',
      keywords: isEn
        ? 'China sourcing agent Africa, Alibaba agent Africa, China procurement services, supplier verification China, 1688 sourcing agent'
        : 'agent sourcing Chine Cameroon, agent Alibaba Cameroon, approvisionnement Chine Cameroon, vérification fournisseur Chine, inspection qualité Chine',
      path: '/services/sourcing',
    },
  };
  
  const config = serviceConfig[service];
  
  return generatePageMetadata({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    path: config.path,
    locale,
    ogType: 'article',
  });
}

/**
 * Route page metadata
 */
export async function generateRouteMetadata(
  locale: Locale,
  route: 'cameroon'
): Promise<Metadata> {
  const isEn = locale === 'en';
  
  const routeConfig = {
    cameroon: {
      title: isEn
        ? 'Shipping from China to Cameroon | Freight Forwarder Douala'
        : 'Cargo Chine Cameroun | Fret Aérien & Maritime | LEXD',
      description: isEn
        ? 'Reliable freight forwarding from China to Cameroon. Air freight 14-21 days, sea freight 60-75 days, sourcing, supplier payment, and WhatsApp tracking to Douala.'
        : 'Transitaire spécialisé Chine-Cameroon. Cargo aérien 14-21 jours, conteneur maritime 60-75 jours. Devis gratuit WhatsApp. 7+ ans d\'expérience.',
      keywords: isEn
        ? 'shipping from China to Cameroon, freight forwarder China Cameroon, cargo from China to Cameroon, China to Douala shipping, import China Cameroon'
        : 'cargo chine cameroun, fret chine cameroun, envoi colis chine cameroun, transitaire douala, fret chine douala, logistique cameroun, import chine cameroun, conteneur chine cameroun, expedition chine douala, cargo aerien douala',
      path: '/routes/china-to-cameroon',
    },
  };
  
  const config = routeConfig[route];
  
  return generatePageMetadata({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    path: config.path,
    locale,
  });
}

/**
 * Calculator page metadata
 */
export async function generateCalculatorMetadata(locale: Locale): Promise<Metadata> {
  const isEn = locale === 'en';
  
  return generatePageMetadata({
    title: isEn
      ? 'Shipping Cost Calculator | Freight Rates China to Cameroon | LEXD'
      : 'Calculateur de Frais d\'Expédition | Tarifs Fret Chine-Cameroun',
    description: isEn
      ? 'Calculate your shipping costs from China to Cameroon instantly. Air freight & sea freight rates to Douala via our partner network. Get an accurate estimate in seconds!'
      : 'Calculez vos frais d\'expédition de la Chine vers le Cameroun instantanément. Tarifs fret aérien et maritime vers Douala via notre réseau de partenaires. Estimation précise!',
    keywords: isEn
      ? 'shipping calculator, freight rates China Cameroun, shipping cost estimator, air freight calculator, sea freight calculator, calculateur fret'
      : 'calculateur frais expédition, tarifs fret Chine Cameroun, estimateur coût transport, calculateur fret aérien, simulateur prix fret',
    path: '/calculateur',
    locale,
  });
}

/**
 * Contact page metadata
 */
export async function generateContactMetadata(locale: Locale): Promise<Metadata> {
  const isEn = locale === 'en';
  
  return generatePageMetadata({
    title: isEn
      ? 'Contact LEXD | Freight Quote | China to Cameroon Shipping'
      : 'Contact LEXD | Devis Fret | Expédition Chine-Cameroun',
    description: isEn
      ? 'Contact LEXD for a free freight quote. WhatsApp: +861-786-366-8208. Air & sea shipping from China to Africa via trusted partners.'
      : 'Contactez LEXD pour un devis fret gratuit. WhatsApp: +861-786-366-8208. Fret aérien et maritime de la Chine vers l’Afrique via des partenaires de confiance.',
    keywords: isEn
      ? 'contact freight forwarder, shipping quote China Cameroun, LEXD contact, freight inquiry, devis expédition'
      : 'contact transitaire, devis fret Chine Cameroun, LEXD contact, demande expédition, devis logistique',
    path: '/contact',
    locale,
  });
}

// ============================================================================
// JSON-LD Structured Data Helpers
// ============================================================================

/**
 * Safely serialize structured data to JSON-LD
 */
export function serializeStructuredData(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}

/**
 * Generate combined structured data for a page
 */
export function generatePageStructuredData(
  schemas: Record<string, unknown>[],
  options: { pretty?: boolean } = {}
): string {
  const { pretty = false } = options;
  
  if (schemas.length === 1) {
    return JSON.stringify(schemas[0], null, pretty ? 2 : 0);
  }
  
  // Multiple schemas as @graph
  const graphData = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
  
  return JSON.stringify(graphData, null, pretty ? 2 : 0);
}
