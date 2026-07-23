import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import { generatePageMetadata } from '@/config/seo-advanced';
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateOrganizationSchema,
} from '@/config/seo-advanced';
import { StructuredData } from '@/components/seo';
import { SeoServicePage } from '@/features/seo-content/SeoServicePage';

interface Props {
  params: Promise<{ locale: string }>;
}

const content = {
  fr: {
    metaTitle: 'Paiement fournisseur chinois depuis le Cameroun | Alipay, Virement',
    metaDescription:
      'Payez un fournisseur en Chine depuis le Cameroun avec LEXD. Paiement Alipay, virement, preuve de paiement, vérification fournisseur et expédition vers Douala.',
    keywords:
      'paiement fournisseur chinois Cameroun, payer fournisseur Chine depuis Cameroun, Alipay Cameroun Chine, virement fournisseur Chine, supplier payment China Cameroun, pay Chinese supplier from Africa',
    badge: 'Paiement fournisseur Chine-Cameroon',
    title: 'Payer un fournisseur en Chine depuis le Cameroun',
    intro:
      'Vous avez trouvé un fournisseur sur Alibaba, 1688 ou directement en Chine, mais il demande un paiement local, Alipay ou un virement chinois ? LEXD vous aide à sécuriser le paiement, vérifier les informations essentielles et organiser la suite : contrôle, consolidation et expédition vers Douala.',
    highlights: [
      'Paiement Alipay ou virement selon le cas',
      'Preuve de paiement partagée avec le client',
      'Vérification recommandée avant tout gros montant',
      'Suivi fournisseur puis expédition Chine-Cameroun',
    ],
    sections: [
      {
        title: 'Plateformes et paiements acceptés',
        body: 'Les fournisseurs chinois travaillent souvent avec des moyens de paiement difficiles à utiliser depuis le Cameroun ou l’Afrique. Nous aidons à payer les commandes lorsque le fournisseur accepte Alipay, virement bancaire chinois ou paiement via plateforme.',
        items: ['Alibaba et fournisseurs B2B', '1688 et vendeurs domestiques chinois', 'Tmall pour certains achats', 'Fournisseurs contactés directement'],
      },
      {
        title: 'Les risques à éviter avant de payer',
        body: 'Le paiement est l’étape où beaucoup d’importateurs perdent de l’argent : faux fournisseurs, compte personnel suspect, prix trop bas, changement de qualité ou absence de preuve. LEXD demande les informations clés avant paiement pour réduire ces risques.',
        items: ['Nom de société cohérent', 'Historique et preuves de production', 'Adresse et contact fournisseur', 'Photos, vidéos ou échantillon si nécessaire'],
      },
      {
        title: 'Ce que vous recevez après paiement',
        body: 'Après validation, vous recevez une confirmation claire. Le fournisseur est ensuite suivi jusqu’à la préparation de la marchandise, avec possibilité de contrôle photo avant l’expédition vers le Cameroun.',
        items: ['Confirmation du montant payé', 'Capture ou reçu disponible selon le canal', 'Suivi de la commande fournisseur', 'Coordination avec le service sourcing ou fret'],
      },
    ],
    tableHeaders: ['Besoin', 'Sans LEXD', 'Avec LEXD'],
    tableRows: [
      ['Payer via Alipay', 'Souvent impossible depuis le Cameroun', 'Paiement assisté en Chine'],
      ['Limiter les arnaques', 'Vérification difficile à distance', 'Contrôles avant paiement'],
      ['Regrouper les achats', 'Chaque fournisseur expédie séparément', 'Consolidation avant fret'],
      ['Suivre la commande', 'Messages éparpillés', 'Coordination WhatsApp'],
    ],
    process: [
      'Vous envoyez le lien produit, le devis fournisseur, le montant et les coordonnées du vendeur.',
      'Nous vérifions les informations de base et signalons les risques visibles avant paiement.',
      'Vous validez le montant, le taux et les frais applicables.',
      'LEXD règle le fournisseur par le canal accepté lorsque tout est clair.',
      'Nous suivons la préparation de la commande et pouvons organiser inspection, consolidation et expédition.',
    ],
    faqs: [
      {
        question: 'Puis-je payer un fournisseur chinois depuis le Cameroun ?',
        answer: 'Oui. LEXD peut faciliter le paiement de fournisseurs en Chine pour les importateurs camerounais, notamment lorsque le fournisseur demande Alipay ou un virement local chinois.',
      },
      {
        question: 'Recevrai-je une preuve de paiement ?',
        answer: 'Oui. Nous partageons une confirmation de paiement et les détails utiles pour suivre la commande avec le fournisseur.',
      },
      {
        question: 'Vérifiez-vous le fournisseur avant paiement ?',
        answer: 'Nous recommandons toujours une vérification avant paiement, surtout pour un nouveau fournisseur ou un gros montant.',
      },
      {
        question: 'Pouvez-vous payer plusieurs fournisseurs puis regrouper les colis ?',
        answer: 'Oui. Nous pouvons gérer plusieurs paiements, suivre les commandes et consolider les marchandises avant expédition vers Douala.',
      },
    ],
    links: [
      { href: '/fr/services/verification-fournisseur-chine', label: 'Vérifier un fournisseur chinois' },
      { href: '/fr/services/sourcing', label: 'Agent sourcing Chine pour le Cameroun' },
      { href: '/fr/routes/china-to-cameroon', label: 'Fret Chine-Cameroun' },
      { href: '/fr/calculateur', label: 'Calculer le coût de fret' },
    ],
  },
  en: {
    metaTitle: 'Pay Chinese Supplier from Cameroon | Alipay & Bank Transfer',
    metaDescription:
      'Pay suppliers in China from Cameroon or Africa with LEXD. Alipay, Chinese bank transfer, supplier checks, payment proof, consolidation and shipping to Douala.',
    keywords:
      'pay Chinese supplier from Cameroon, supplier payment China Africa, Alipay payment service Cameroon, China supplier bank transfer, pay Alibaba supplier Cameroon, China procurement payment Africa',
    badge: 'China supplier payment',
    title: 'Pay a supplier in China from Cameroon or Africa',
    intro:
      'Found a supplier on Alibaba, 1688 or directly in China, but they need Alipay, a Chinese bank transfer or local payment? LEXD helps importers verify the supplier, complete the payment, collect proof, and move the order into inspection, consolidation and shipping.',
    highlights: [
      'Alipay or China bank transfer support',
      'Payment proof shared with the buyer',
      'Supplier verification before large payments',
      'Order follow-up, consolidation and China-Africa shipping',
    ],
    sections: [
      {
        title: 'Platforms and payment methods',
        body: 'Many Chinese suppliers use payment methods that are hard to access from Cameroon and Africa. We assist when the supplier accepts Alipay, Chinese bank transfer or marketplace payment.',
        items: ['Alibaba and B2B suppliers', '1688 and domestic Chinese sellers', 'Tmall for selected purchases', 'Direct factory or trading company contacts'],
      },
      {
        title: 'Payment risks to avoid',
        body: 'Supplier payment is where many importers lose money: fake companies, suspicious personal accounts, unrealistic prices, product switches or no payment proof. We review the key signals before money moves.',
        items: ['Company name consistency', 'Production and trading evidence', 'Supplier address and contact details', 'Photos, videos or samples when needed'],
      },
      {
        title: 'What happens after payment',
        body: 'After validation, you receive clear confirmation. We follow the supplier until the goods are ready and can arrange photo checks before shipping to Cameroon or another African destination.',
        items: ['Paid amount confirmation', 'Receipt or screenshot when available', 'Supplier order follow-up', 'Coordination with sourcing or freight services'],
      },
    ],
    tableHeaders: ['Need', 'Without LEXD', 'With LEXD'],
    tableRows: [
      ['Pay with Alipay', 'Often impossible from Cameroon', 'Assisted payment in China'],
      ['Reduce fraud risk', 'Hard to verify remotely', 'Checks before payment'],
      ['Combine purchases', 'Each supplier ships separately', 'Consolidation before freight'],
      ['Track the order', 'Scattered messages', 'WhatsApp coordination'],
    ],
    process: [
      'Send the product link, supplier quote, amount and seller contact details.',
      'We review the basic information and flag visible risks before payment.',
      'You confirm the amount, exchange rate and applicable service fees.',
      'LEXD pays the supplier through the accepted channel once the details are clear.',
      'We follow preparation and can organize inspection, consolidation and shipping.',
    ],
    faqs: [
      {
        question: 'Can I pay a Chinese supplier from Cameroon?',
        answer: 'Yes. LEXD can assist supplier payments in China for Cameroon and Africa-based importers, especially when the supplier requests Alipay or a local Chinese bank transfer.',
      },
      {
        question: 'Will I receive proof of payment?',
        answer: 'Yes. We share payment confirmation and useful order details so you can keep the supplier process documented.',
      },
      {
        question: 'Do you verify the supplier before payment?',
        answer: 'We strongly recommend verification before payment, especially for a new supplier or a large amount.',
      },
      {
        question: 'Can you pay multiple suppliers and consolidate the goods?',
        answer: 'Yes. We can coordinate several payments, follow the orders, and consolidate goods before shipping to Douala.',
      },
    ],
    links: [
      { href: '/en/services/verification-fournisseur-chine', label: 'Verify a Chinese supplier' },
      { href: '/en/services/sourcing', label: 'China sourcing agent' },
      { href: '/en/routes/china-to-cameroon', label: 'China to Cameroon freight' },
      { href: '/en/calculateur', label: 'Calculate freight cost' },
    ],
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = locale === 'en' ? content.en : content.fr;

  return generatePageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    path: '/services/paiement-fournisseur-chine',
    locale: locale as Locale,
    supportedLocales: ['fr', 'en'],
  });
}

export default async function SupplierPaymentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isEn = locale === 'en';
  const page = isEn ? content.en : content.fr;

  const schemas = [
    generateOrganizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.metaTitle,
      serviceType: 'Supplier Payment Service',
      provider: { '@id': 'https://www.lexdservices.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'Cameroon' },
        { '@type': 'Country', name: 'China' },
      ],
      description:
        page.metaDescription,
    },
    generateBreadcrumbSchema([
      { name: isEn ? 'Home' : 'Accueil', url: `/${locale}/` },
      { name: 'Services', url: `/${locale}/services` },
      { name: isEn ? 'Supplier payment China' : 'Paiement fournisseur Chine', url: `/${locale}/services/paiement-fournisseur-chine` },
    ], locale as Locale),
    generateFAQPageSchema([...page.faqs], locale as Locale),
  ];

  return (
    <>
      <StructuredData schemas={schemas} />
      <SeoServicePage
        locale={isEn ? 'en' : 'fr'}
        badge={page.badge}
        title={page.title}
        intro={page.intro}
        highlights={[...page.highlights]}
        sections={[...page.sections]}
        table={{
          headers: [...page.tableHeaders],
          rows: [...page.tableRows],
        }}
        process={[...page.process]}
        faqs={[...page.faqs]}
        links={[...page.links]}
        ctaLabel={isEn ? 'Request a quote on WhatsApp' : undefined}
        routeCtaHref={`/${locale}/routes/china-to-cameroon`}
        routeCtaLabel={isEn ? 'See China to Cameroon freight' : undefined}
        comparisonTitle={isEn ? 'Quick comparison' : undefined}
        processTitle={isEn ? 'Our process' : undefined}
        faqTitle={isEn ? 'Frequently asked questions' : undefined}
        usefulLinksTitle={isEn ? 'Useful links' : undefined}
        asideTitle={isEn ? 'Need advice before paying?' : undefined}
        asideText={isEn ? 'Send the supplier link, quantities and destination. Our team will reply on WhatsApp.' : undefined}
        asideCtaLabel={isEn ? 'Contact LEXD' : undefined}
        stepLabel={isEn ? 'Step' : undefined}
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
