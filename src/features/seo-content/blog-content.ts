import type { Locale } from '@/i18n/config';

export interface SeoArticleContent {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  updatedAt: string;
  readTime: string;
  category: string;
  sections: Array<{ title: string; body: string; items?: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  links: Array<{ href: string; label: string }>;
}

type ArticleLocaleContent = Record<'fr' | 'en', SeoArticleContent>;

const commonLinks = {
  fr: [
    { href: '/fr/cargo-chine-cameroun', label: 'Cargo Chine-Cameroon' },
    { href: '/fr/routes/china-to-cameroon', label: 'Fret Chine-Cameroun' },
    { href: '/fr/services/sourcing', label: 'Agent sourcing Chine' },
    { href: '/fr/calculateur', label: 'Calculateur de fret' },
  ],
  en: [
    { href: '/en/cargo-chine-cameroun', label: 'China to Cameroon cargo service' },
    { href: '/en/routes/china-to-africa', label: 'China to Africa routes' },
    { href: '/en/services/sourcing', label: 'China sourcing service' },
    { href: '/en/calculateur', label: 'Freight calculator' },
  ],
};

export const BLOG_CONTENT: Record<string, ArticleLocaleContent> = {
  'comment-importer-chine-cameroun-2026': {
    fr: {
      slug: 'comment-importer-chine-cameroun-2026',
      title: 'Comment importer de la Chine vers le Cameroun en 2026',
      description: 'Guide étape par étape pour importer du Cameroun depuis la Chine : fournisseurs, paiement, contrôle qualité, douane, fret aérien, fret maritime et livraison.',
      keywords: 'importer de Chine au Cameroun, guide import Chine Cameroun, fournisseur Chine Cameroun, fret Chine Cameroun',
      date: '2026-04-21',
      updatedAt: '21 avril 2026',
      readTime: 'Lecture : 8 minutes',
      category: 'Guide',
      sections: [
        { title: '1. Valider le produit et la marge', body: 'Avant de contacter un fournisseur, comparez le prix fournisseur, le coût du fret, la demande locale et les restrictions possibles. Un produit rentable sur Alibaba peut devenir non rentable après transport.' },
        { title: '2. Vérifier le fournisseur', body: 'Demandez des preuves de production, une facture claire, des photos récentes et des conditions écrites. LEXD peut vérifier les signaux essentiels avant paiement.' },
        { title: '3. Sécuriser paiement, contrôle et livraison', body: 'Après validation, organisez le paiement, l’inspection, la consolidation et le mode de fret. Le Cameroun reste notre hub principal, avec extension possible vers l’Afrique.' },
      ],
      faqs: [
        { question: 'Quel budget faut-il pour commencer ?', answer: 'Commencez avec un lot test ou un échantillon. Le budget dépend du produit, du MOQ, du paiement fournisseur et du mode de fret.' },
        { question: 'Quel fret choisir ?', answer: 'L’aérien convient aux produits urgents ou légers. Le maritime convient aux gros volumes et aux marchandises non urgentes.' },
      ],
      links: commonLinks.fr,
    },
    en: {
      slug: 'comment-importer-chine-cameroun-2026',
      title: 'How to Import from China to Cameroon and Africa in 2026',
      description: 'A practical guide for African importers buying from China: supplier checks, payment, quality control, customs, air freight, sea freight and delivery.',
      keywords: 'import from China to Cameroon, China Africa import guide, China supplier verification, freight China Africa',
      date: '2026-04-21',
      updatedAt: 'April 21, 2026',
      readTime: '8 min read',
      category: 'Guide',
      sections: [
        { title: '1. Validate the product and margin', body: 'Before contacting a supplier, compare the supplier price, freight cost, local demand and product restrictions. A product that looks profitable on Alibaba can lose margin after shipping.' },
        { title: '2. Verify the supplier before payment', body: 'Ask for production evidence, a clear invoice, recent photos and written terms. LEXD can check the essential supplier signals before you send money.' },
        { title: '3. Secure payment, inspection and delivery', body: 'Once the supplier is validated, plan payment, inspection, consolidation and the freight mode. Cameroon is our strongest hub, with operational support across Africa.' },
      ],
      faqs: [
        { question: 'What budget do I need to start?', answer: 'Start with a test lot or sample. The budget depends on product price, MOQ, supplier payment and freight mode.' },
        { question: 'Should I choose air or sea freight?', answer: 'Air freight works for urgent or lightweight goods. Sea freight is better for large volumes and non-urgent shipments.' },
      ],
      links: commonLinks.en,
    },
  },
  'cargo-chine-cameroun-guide-complet': {
    fr: {
      slug: 'cargo-chine-cameroun-guide-complet',
      title: 'Cargo Chine Cameroun : le guide complet du fret aérien et maritime',
      description: 'Tout savoir sur le cargo Chine-Cameroun : fret aérien, fret maritime, tarifs, délais, douane et choix du bon mode de transport.',
      keywords: 'cargo Chine Cameroun, fret aérien Chine Cameroun, fret maritime Chine Cameroun, conteneur Chine Cameroun',
      date: '2026-04-18',
      updatedAt: '18 avril 2026',
      readTime: 'Lecture : 6 minutes',
      category: 'Fret',
      sections: [
        { title: '1. Fret aérien Chine-Cameroun', body: 'L’aérien est idéal pour les produits urgents, légers ou à forte marge. Les délais habituels vers Douala sont de 14 à 21 jours.' },
        { title: '2. Fret maritime Chine-Cameroun', body: 'Le maritime convient aux gros volumes, meubles, machines et cartons lourds. Le trajet passe souvent par Dakar avant le transit terrestre vers Douala.' },
        { title: '3. Comment réserver avec LEXD', body: 'Envoyez vos informations sur WhatsApp, recevez un devis clair, faites livrer en Chine, puis suivez la consolidation, le départ et l’arrivée.' },
      ],
      faqs: [
        { question: 'Combien coûte le cargo Chine-Cameroun ?', answer: 'Le prix dépend du poids, du volume, de la catégorie produit et du mode de fret. Un devis personnalisé est nécessaire.' },
        { question: 'Le service est-il porte-à-porte ?', answer: 'Oui, selon la destination et le type d’envoi, LEXD coordonne réception, consolidation, fret, dédouanement et livraison.' },
      ],
      links: commonLinks.fr,
    },
    en: {
      slug: 'cargo-chine-cameroun-guide-complet',
      title: 'China to Cameroon Cargo: Complete Air and Sea Freight Guide',
      description: 'Everything African importers need to know about China to Cameroon cargo: air freight, sea freight, rates, timelines, customs and choosing the right mode.',
      keywords: 'China to Cameroon cargo, air freight China Cameroon, sea freight China Cameroon, container shipping China Cameroon, China Africa cargo',
      date: '2026-04-18',
      updatedAt: 'April 18, 2026',
      readTime: '6 min read',
      category: 'Freight',
      sections: [
        { title: '1. China to Cameroon air freight', body: 'Air freight is best for urgent, lightweight or high-margin goods. Typical delivery to Douala is 14 to 21 days depending on product category and routing.' },
        { title: '2. China to Cameroon sea freight', body: 'Sea freight is better for large volumes, furniture, machinery and heavy cartons. The route often moves through Dakar before road transit to Douala.' },
        { title: '3. Booking cargo with LEXD', body: 'Send your shipment details on WhatsApp, receive a clear quote, deliver goods to our China-side network and track consolidation, departure and arrival.' },
      ],
      faqs: [
        { question: 'How much does China to Cameroon cargo cost?', answer: 'Pricing depends on weight, volume, product category and freight mode. A confirmed quote is required for exact pricing.' },
        { question: 'Is door-to-door service available?', answer: 'Yes. Depending on destination and shipment type, LEXD coordinates receiving, consolidation, freight, customs and delivery.' },
      ],
      links: commonLinks.en,
    },
  },
  'acheter-alibaba-cameroun-sans-arnaque': {
    fr: {
      slug: 'acheter-alibaba-cameroun-sans-arnaque',
      title: 'Acheter sur Alibaba depuis le Cameroun sans se faire arnaquer',
      description: 'Guide pratique pour acheter sur Alibaba depuis le Cameroun : vérification fournisseur, paiement sécurisé, inspection qualité et expédition.',
      keywords: 'acheter Alibaba Cameroon, Alibaba Cameroon, fournisseur Alibaba Chine Cameroon, achat sécurisé Alibaba',
      date: '2026-04-15',
      updatedAt: '15 avril 2026',
      readTime: 'Lecture : 7 minutes',
      category: 'Sourcing',
      sections: [
        { title: '1. Repérer les signaux de confiance', body: 'Vérifiez l’ancienneté, les documents, les avis, la cohérence du prix et les preuves réelles de production.' },
        { title: '2. Ne pas payer sans vérification', body: 'Évitez les comptes personnels suspects et demandez une confirmation claire avant paiement.' },
        { title: '3. Inspecter avant expédition', body: 'Une inspection photo ou vidéo réduit les risques d’erreur de quantité, couleur, emballage ou qualité.' },
      ],
      faqs: [{ question: 'Alibaba livre-t-il directement au Cameroun ?', answer: 'Parfois, mais les coûts peuvent être élevés. Un transitaire permet souvent de consolider et contrôler les colis.' }],
      links: commonLinks.fr,
    },
    en: {
      slug: 'acheter-alibaba-cameroun-sans-arnaque',
      title: 'How to Buy from Alibaba for Cameroon Without Getting Scammed',
      description: 'A practical Alibaba buying guide for Cameroon and Africa: supplier verification, safe payment, inspection and shipping from China.',
      keywords: 'buy from Alibaba Cameroon, Alibaba agent Africa, avoid Alibaba scam, China supplier verification',
      date: '2026-04-15',
      updatedAt: 'April 15, 2026',
      readTime: '7 min read',
      category: 'Sourcing',
      sections: [
        { title: '1. Check trust signals', body: 'Review company age, documents, reviews, price consistency and real production evidence before taking a supplier seriously.' },
        { title: '2. Do not pay before verification', body: 'Avoid suspicious personal accounts and request clear written confirmation before payment.' },
        { title: '3. Inspect before shipment', body: 'Photo or video inspection reduces the risk of quantity, color, packaging and quality mistakes before goods leave China.' },
      ],
      faqs: [{ question: 'Can Alibaba ship directly to Cameroon?', answer: 'Sometimes, but costs can be high. A freight partner can consolidate and inspect parcels before shipping.' }],
      links: commonLinks.en,
    },
  },
  'paiement-fournisseur-chine-guide': {
    fr: {
      slug: 'paiement-fournisseur-chine-guide',
      title: 'Paiement fournisseur chinois : Alipay, virement et sécurité',
      description: 'Comparez les méthodes de paiement fournisseur en Chine et découvrez comment limiter les risques avant achat.',
      keywords: 'paiement fournisseur chinois, Alipay Cameroon, payer fournisseur Chine, paiement Alibaba Afrique',
      date: '2026-04-10',
      updatedAt: '10 avril 2026',
      readTime: 'Lecture : 5 minutes',
      category: 'Paiement',
      sections: [
        { title: '1. Comprendre la méthode demandée', body: 'Les fournisseurs peuvent demander Alipay, virement bancaire chinois ou paiement plateforme. Chaque méthode a ses risques.' },
        { title: '2. Vérifier avant de payer', body: 'Confirmez le nom de société, les coordonnées, la facture et la cohérence du devis.' },
        { title: '3. Garder une preuve exploitable', body: 'Conservez reçus, captures, facture et échanges importants pour suivre la commande.' },
      ],
      faqs: [{ question: 'LEXD peut-il payer un fournisseur ?', answer: 'Oui, selon le cas, nous pouvons assister le paiement et suivre la préparation de la marchandise.' }],
      links: commonLinks.fr,
    },
    en: {
      slug: 'paiement-fournisseur-chine-guide',
      title: 'Chinese Supplier Payment: Alipay, Bank Transfer and Safety',
      description: 'Compare Chinese supplier payment methods and learn how African importers can reduce risk before buying from China.',
      keywords: 'pay Chinese supplier, Alipay payment Africa, supplier payment China, Alibaba payment agent',
      date: '2026-04-10',
      updatedAt: 'April 10, 2026',
      readTime: '5 min read',
      category: 'Payment',
      sections: [
        { title: '1. Understand the requested payment method', body: 'Suppliers may request Alipay, a Chinese bank transfer or marketplace payment. Each method has different risks.' },
        { title: '2. Verify before payment', body: 'Confirm company name, account details, invoice information and quote consistency before sending funds.' },
        { title: '3. Keep usable proof', body: 'Keep receipts, screenshots, invoice documents and important conversations so the order can be tracked clearly.' },
      ],
      faqs: [{ question: 'Can LEXD pay a supplier for me?', answer: 'Yes, depending on the case, we can assist supplier payment and follow goods preparation.' }],
      links: commonLinks.en,
    },
  },
  'douane-cameroun-import-chine': {
    fr: {
      slug: 'douane-cameroun-import-chine',
      title: 'Douane Cameroun : documents pour importer de Chine',
      description: 'Documents et précautions pour importer de Chine au Cameroun : facture, packing list, restrictions, dédouanement et livraison.',
      keywords: 'douane Cameroun import Chine, documents douane Cameroun, dédouanement Cameroun Chine',
      date: '2026-04-05',
      updatedAt: '5 avril 2026',
      readTime: 'Lecture : 6 minutes',
      category: 'Douane',
      sections: [
        { title: '1. Préparer les documents', body: 'Facture commerciale, packing list, description produit, quantité, valeur et informations d’emballage doivent être claires.' },
        { title: '2. Vérifier les produits sensibles', body: 'Batteries, liquides, drones, produits chimiques et certains compléments peuvent nécessiter validation.' },
        { title: '3. Réduire les retards', body: 'Une description précise et des documents cohérents réduisent les blocages et frais imprévus.' },
      ],
      faqs: [{ question: 'Tous les produits passent-ils en douane ?', answer: 'Non. Certains produits sont interdits ou réglementés et doivent être validés avant achat.' }],
      links: commonLinks.fr,
    },
    en: {
      slug: 'douane-cameroun-import-chine',
      title: 'Cameroon Customs: Documents for Importing from China',
      description: 'Documents and precautions for importing from China to Cameroon and Africa: invoice, packing list, restrictions, customs and delivery.',
      keywords: 'Cameroon customs import China, customs documents Cameroon, China Africa customs clearance',
      date: '2026-04-05',
      updatedAt: 'April 5, 2026',
      readTime: '6 min read',
      category: 'Customs',
      sections: [
        { title: '1. Prepare the documents', body: 'Commercial invoice, packing list, product description, quantity, declared value and packaging details should be clear.' },
        { title: '2. Check restricted products', body: 'Batteries, liquids, drones, chemicals and some supplements may require validation before shipment.' },
        { title: '3. Reduce delays', body: 'Precise product descriptions and consistent documents reduce customs blocks and unexpected fees.' },
      ],
      faqs: [{ question: 'Can every product clear customs?', answer: 'No. Some products are prohibited or regulated and must be validated before purchase.' }],
      links: commonLinks.en,
    },
  },
  'conteneur-chine-cameroun-prix-2026': {
    fr: {
      slug: 'conteneur-chine-cameroun-prix-2026',
      title: 'Conteneur Chine Cameroon : prix, délais et démarches en 2026',
      description: 'FCL 20ft, FCL 40ft, LCL groupage, tarifs indicatifs, délais, ports de départ et route vers Douala.',
      keywords: 'conteneur Chine Cameroon, prix conteneur Chine Cameroon, FCL Cameroon, LCL Cameroon',
      date: '2026-04-01',
      updatedAt: '1 avril 2026',
      readTime: 'Lecture : 5 minutes',
      category: 'Fret',
      sections: [
        { title: '1. FCL ou LCL', body: 'Le FCL convient aux gros volumes. Le LCL permet de partager un conteneur quand votre volume est plus faible.' },
        { title: '2. Route maritime', body: 'Les marchandises partent de Chine, arrivent souvent à Dakar ou un autre port africains, puis continuent par route.' },
        { title: '3. Obtenir un tarif fiable', body: 'Le tarif dépend du volume, poids, produit, saison et port. Un devis confirmé reste indispensable.' },
      ],
      faqs: [{ question: 'FCL ou LCL pour commencer ?', answer: 'Le LCL est souvent plus adapté pour tester un volume modéré avant de remplir un conteneur complet.' }],
      links: commonLinks.fr,
    },
    en: {
      slug: 'conteneur-chine-cameroun-prix-2026',
      title: 'China to Cameroon Container Shipping: Prices, Timelines and Steps in 2026',
      description: 'FCL 20ft, FCL 40ft, LCL consolidation, indicative rates, timelines, departure ports and the route to Douala.',
      keywords: 'China to Cameroon container, container shipping China Cameroon, FCL Cameroon, LCL Cameroon, China Africa container freight',
      date: '2026-04-01',
      updatedAt: 'April 1, 2026',
      readTime: '5 min read',
      category: 'Freight',
      sections: [
        { title: '1. FCL or LCL', body: 'FCL works for large volumes. LCL lets you share container space when your shipment volume is smaller.' },
        { title: '2. Sea route', body: 'Goods leave China, often arrive through Dakar or another African port, then continue by road where needed.' },
        { title: '3. Getting a reliable rate', body: 'Rates depend on volume, weight, product, season and port. A confirmed quote is always required.' },
      ],
      faqs: [{ question: 'Should I start with FCL or LCL?', answer: 'LCL is often better for testing moderate volume before filling a full container.' }],
      links: commonLinks.en,
    },
  },
};

export function getBlogPosts(locale: Locale): SeoArticleContent[] {
  const lang = locale === 'en' ? 'en' : 'fr';
  return Object.values(BLOG_CONTENT).map((post) => post[lang]);
}

export function getBlogPost(slug: string, locale: Locale): SeoArticleContent {
  const post = BLOG_CONTENT[slug] || BLOG_CONTENT['comment-importer-chine-cameroun-2026'];
  return post[locale === 'en' ? 'en' : 'fr'];
}
