/**
 * SEO Configuration
 * 
 * Enterprise-level SEO configuration with comprehensive keywords
 * targeting China-Africa freight forwarding market.
 */

// ============================================================================
// Comprehensive Keyword Strings for Meta Tags
// ============================================================================

export const SEO_KEYWORDS = {
  en: [
    // Primary
    'freight forwarding', 'shipping from China', 'logistics company', 'international shipping',
    'sea freight', 'air freight', 'freight forwarder', 'China Cameroon shipping',
    // Long-tail
    'shipping from China to Cameroon', 'freight forwarding China to Douala', 'Alibaba shipping agent',
    'China procurement services', 'door to door shipping China Cameroon',
    'container shipping China Cameroon', 'FCL shipping', 'LCL consolidation',
    // Locations
    'shipping China Douala', 'freight forwarder China Cameroon', 'import China Cameroon',
    'Douala logistics', 'China to Douala shipping',
    // Services
    'air cargo China Cameroon', 'express shipping China Cameroon', 'Alibaba payment agent',
    'supplier verification China', 'quality inspection China',
    'customs clearance Cameroon', 'import export China Cameroon', 'sourcing agent Cameroon',
  ].join(', '),
  
  fr: [
    // Primary
    'fret maritime', 'fret aérien', 'expédition Chine', 'transitaire',
    'logistique internationale', 'transport international', 'commissionnaire transport',
    'fret Chine Cameroun', 'cargo chine cameroun', 'transitaire chine cameroun', 'envoi colis chine cameroun',
    // Long-tail
    'expédition colis Chine Cameroun', 'fret Chine Cameroun', 'envoi marchandises Chine Douala',
    'achat fournisseur Chine', 'agent sourcing Chine',
    'paiement fournisseur chinois', 'dédouanement Cameroun', 'livraison porte à porte Chine Cameroun',
    'conteneur Chine Cameroon', 'conteneur complet FCL', 'groupage maritime LCL',
    'cargo chine cameroun', 'fret chine douala', 'conteneur chine cameroun',
    // Locations
    'expédition Chine Douala', 'fret Chine Douala', 'transitaire Douala',
    'envoi colis Chine Douala', 'fret maritime Chine Cameroun', 'expédition Chine Cameroun',
    // Services
    'cargo aérien Chine Cameroon', 'express Chine Cameroon', 'agent paiement Alipay',
    'vérification fournisseur', 'inspection qualité Chine', 'entrepôt Chine Cameroon',
    'formalités douanières', 'déclaration en douane', 'import export Chine Cameroun',
  ].join(', '),
} as const;

// ============================================================================
// Page-specific SEO Metadata
// ============================================================================

export const PAGE_SEO = {
  home: {
    en: {
      title: 'LEXD | Sourcing & Shipping China to Cameroon | Air & Sea Freight',
      description: 'Your trusted partner for sourcing products from China and shipping to Cameroon. Air freight (14-21 days) & sea freight (60-75 days) to Douala via our partner network. Get your free quote today!',
      keywords: `${SEO_KEYWORDS.en}, LEXD, logistics Cameroon`,
    },
    fr: {
      title: 'Cargo Chine Cameroun | Fret Aérien & Maritime | LEXD',
      description: 'cargo chine cameroun — Votre partenaire de confiance pour le sourcing de produits en Chine et l\'expédition vers le Cameroun. Fret aérien (14-21 jours) & maritime (60-75 jours) vers Douala via notre réseau de partenaires. Devis gratuit!',
      keywords: `${SEO_KEYWORDS.fr}, LEXD, logistique Cameroon`,
    },
  },
  
  services: {
    airFreight: {
    en: {
      title: 'Air Freight China to Cameroon | Express Shipping',
        description: 'Fast air freight from China to Douala, Cameroon through trusted partner carriers. Delivery in 14-21 days. Real-time tracking. Get a quote for your air cargo!',
        keywords: 'air freight China Cameroon, air cargo, express shipping China Cameroon, air freight Douala, China air shipping',
      },
    fr: {
      title: 'Fret Aérien Chine Cameroun | Expédition Express',
        description: 'Fret aérien rapide de la Chine vers Douala, Cameroun via des transporteurs partenaires de confiance. Livraison en 14-21 jours. Suivi en temps réel. Demandez votre devis!',
        keywords: 'fret aérien Chine Cameroun, cargo aérien, express Chine Cameroun, fret aérien Douala',
      },
    },
    
    seaFreight: {
      en: {
        title: 'Sea Freight China to Cameroon | FCL & LCL Shipping | LEXD',
        description: 'Economical sea freight from Foshan port to Dakar port, then land transit to Douala. FCL container shipping & LCL consolidation in 60-75 days. Get a quote!',
        keywords: 'sea freight China Cameroon, FCL shipping, LCL consolidation, container shipping, maritime freight China Cameroon, sea freight Douala',
      },
      fr: {
        title: 'Fret Maritime Chine Cameroun | Conteneur FCL & Groupage LCL',
        description: 'Fret maritime économique du port de Foshan au port de Dakar, puis transit terrestre vers Douala. Conteneurs FCL & groupage LCL en 60-75 jours. Devis gratuit!',
        keywords: 'fret maritime Chine Cameroun, conteneur FCL, groupage LCL, transport maritime, fret maritime Chine Douala',
      },
    },
    
    sourcing: {
    en: {
      title: 'China Sourcing Agent for Cameroon | Alibaba Procurement',
        description: 'Professional sourcing agent in China. We buy from Alibaba on your behalf. Supplier verification, quality inspection, payment processing. Start sourcing today!',
        keywords: 'China sourcing agent, Alibaba agent, procurement China, supplier verification, quality inspection China',
      },
    fr: {
      title: 'Agent Sourcing Chine pour le Cameroun | Achat Alibaba',
      description: 'Agent sourcing en Chine pour les importateurs camerounais. Achat Alibaba, vérification fournisseur, inspection qualité, paiement et expédition vers Douala.',
      keywords: 'agent sourcing Chine Cameroon, agent Alibaba Cameroon, approvisionnement Chine Cameroon, vérification fournisseur Chine, inspection qualité Chine',
      },
    },
  },
  
  routes: {
    chinaToMali: {
    en: {
        title: 'Shipping from China to Cameroon | Freight Forwarder Douala',
        description: 'Reliable freight forwarding from China to Cameroon. Air & sea shipping to Douala. Door-to-door delivery. 7+ years experience. Get your free quote now!',
        keywords: 'shipping China Cameroon, freight forwarder Douala, China to Douala shipping, Cameroon logistics, import China Cameroon',
      },
    fr: {
        title: 'Cargo Chine Cameroun | Fret Aérien & Maritime | LEXD',
        description: 'Fret Chine-Cameroun fiable pour importer vers Douala. Fret aérien 14-21 jours, fret maritime 60-75 jours, sourcing, paiement fournisseur et suivi WhatsApp.',
        keywords: 'fret Chine Cameroun, expédition Chine Cameroun, transitaire Chine Cameroun, fret Chine Douala, cargo Chine Cameroun, import Chine Cameroun',
      },
    },
    

  },
  
  calculator: {
    en: {
      title: 'Shipping Cost Calculator | Freight Rates China to Cameroon',
      description: 'Calculate your shipping costs from China to Cameroon instantly. Air freight & sea freight rates to Douala via our partner network. Get an accurate estimate in seconds!',
      keywords: 'shipping calculator, freight rates China Cameroon, shipping cost estimator, air freight calculator, sea freight calculator',
    },
    fr: {
      title: 'Calculateur de Frais d\'Expédition | Tarifs Fret Chine-Cameroun',
      description: 'Calculez vos frais d\'expédition de la Chine vers le Cameroun instantanément. Tarifs fret aérien et maritime vers Douala via notre réseau de partenaires. Estimation précise!',
      keywords: 'calculateur frais expédition, tarifs fret Chine Cameroun, estimateur coût transport, calculateur fret aérien',
    },
  },
  
  pricing: {
    en: {
      title: 'Shipping Rates China to Cameroon | Air & Sea Freight Prices',
      description: 'Competitive shipping rates from China to Cameroon. Air freight & sea freight to Douala via partner carriers. Transparent pricing, no hidden fees. View our price list!',
      keywords: 'shipping rates China Cameroon, freight prices, air freight rates, sea freight rates, shipping costs',
    },
    fr: {
      title: 'Tarifs d\'Expédition Chine-Cameroun | Prix Fret Aérien & Maritime',
      description: 'Tarifs compétitifs pour expédier de la Chine vers le Cameroun. Fret aérien et maritime vers Douala via des partenaires. Prix transparents. Consultez nos tarifs!',
      keywords: 'tarifs expédition Chine Cameroun, prix fret, tarifs fret aérien, tarifs fret maritime, coûts transport',
    },
  },
  
  contact: {
    en: {
      title: 'Contact LEXD | Freight Quote China to Cameroon',
      description: 'Contact LEXD for a free freight quote. WhatsApp: +861-786-366-8208. Air & sea shipping from China to Africa through trusted partners.',
      keywords: 'contact freight forwarder, shipping quote China Cameroon, LEXD contact, freight inquiry',
    },
    fr: {
      title: 'Contact LEXD | Devis Fret Chine-Cameroun',
      description: 'Contactez LEXD pour un devis fret gratuit. WhatsApp: +861-786-366-8208. Fret aérien et maritime de la Chine vers l’Afrique via des partenaires de confiance.',
      keywords: 'contact transitaire, devis fret Chine Cameroun, LEXD contact, demande expédition',
    },
  },
  
  faq: {
    en: {
      title: 'Shipping FAQ | China to Cameroon Freight Questions',
      description: 'Find answers to all your shipping questions. Delivery times, rates, customs, prohibited items. Everything you need to know about shipping from China to Cameroon.',
      keywords: 'shipping FAQ, freight questions, China Cameroon shipping FAQ, customs clearance FAQ, shipping times',
    },
    fr: {
      title: 'FAQ Expédition | Questions Fret Chine-Cameroun',
      description: 'Trouvez les réponses à toutes vos questions sur l\'expédition. Délais, tarifs, douanes, articles interdits. Tout savoir sur l\'expédition de la Chine vers le Cameroun.',
      keywords: 'FAQ expédition, questions fret, FAQ fret Chine Cameroun, FAQ dédouanement, délais livraison',
    },
  },
} as const;

// ============================================================================
// Structured Data Configuration
// ============================================================================

export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LEXD',
    alternateName: 'Larry Express Delivery',
    url: 'https://www.lexdservices.com',
    logo: 'https://www.lexdservices.com/icons/icon-512x512.png',
    // Empty until LEXD's own profiles exist — see BUSINESS_INFO.social in
    // seo-advanced.ts for why a wrong `sameAs` is worse than none.
    sameAs: [] as string[],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-188-5172-5957',
      contactType: 'customer service',
      availableLanguage: ['French', 'English', 'Chinese', 'Arabic'],
    },
  },
  
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LEXD',
    image: 'https://www.lexdservices.com/icons/icon-512x512.png',
    '@id': 'https://www.lexdservices.com',
    url: 'https://www.lexdservices.com',
    telephone: '+861-786-366-8208',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Akwa, près du lycée Birgo',
      addressLocality: 'Douala',
      addressCountry: 'ML',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.6392,
      longitude: -8.0029,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
  },
  
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Freight Forwarding',
    provider: {
      '@type': 'Organization',
      name: 'LEXD',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Cameroon',
      },
      {
        '@type': 'Country',
        name: 'Senegal',
      },
      {
        '@type': 'Country',
        name: 'Ivory Coast',
      },
      {
        '@type': 'Country',
        name: 'Nigeria',
      },
      {
        '@type': 'Country',
        name: 'Ghana',
      },
      {
        '@type': 'Country',
        name: 'Guinea',
      },
      {
        '@type': 'Country',
        name: 'Burkina Faso',
      },
      {
        '@type': 'Country',
        name: 'Benin',
      },
      {
        '@type': 'Country',
        name: 'Togo',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Shipping Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Air Freight',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sea Freight',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sourcing & Procurement',
          },
        },
      ],
    },
  },
} as const;
