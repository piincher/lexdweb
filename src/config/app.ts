/**
 * Application Configuration
 * 
 * Global application configuration and settings.
 */

export const APP_CONFIG = {
  NAME: 'LEXD',
  LEGAL_NAME: 'Larry Express Delivery',
  SHORT_NAME: 'LEXD',
  DESCRIPTION: 'Solutions logistiques complètes pour le sourcing, achat et expédition de la Chine vers le Cameroun',
  VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
} as const;

export const META_CONFIG = {
  TITLE: 'LEXD | Sourcing & Expédition Chine-Afrique',
  DESCRIPTION: 'LEXD - Votre partenaire logistique de confiance pour le sourcing, l\'achat et l\'expédition de marchandises de la Chine vers le Cameroun. Devis gratuit.',
  KEYWORDS: [
    'LEXD',
    'sourcing Chine Cameroon',
    'expédition Chine Cameroun',
    'fret maritime Chine Cameroun',
    'fret aérien Chine Douala',
    'logistique internationale',
    'import export Chine Cameroon',
  ],
  URL: 'https://www.lexdservices.com',
  IMAGE: 'https://www.lexdservices.com/icons/icon-512x512.png',
  LOCALE: 'fr_FR',
  TWITTER_HANDLE: '@chinalinkexpress', // Existing account; rename requires platform access.
} as const;

export const CONTACT_CONFIG = {
  EMAIL: 'contact@lexdservices.com',
  PHONE: {
    CHINA: '+861-786-366-8208',
    HILARY: '+237-726-60161',
    CAMEROON_1: '+237-726-60161',
    CAMEROON_2: '+237-726-60161',
  },
  WHATSAPP: {
    CHINA: '+8617863668208',
    HILARY: '+23772660161',
    CAMEROON: '+237672660161',
    CAMEROON_2: '+237672660161',
    GROUP_LINK: 'https://chat.whatsapp.com/KALSQm7oyEHFFGENKCj5yr',
  },
  ADDRESS: {
    STREET: 'Akwa, près du lycée Birgo',
    CITY: 'Douala',
    COUNTRY: 'Cameroon',
  },
  HOURS: {
    WEEKDAYS: { open: '08:00', close: '20:00' },
    SATURDAY: { open: '09:00', close: '17:00' },
    SUNDAY: { open: '10:00', close: '15:00' },
  },
} as const;

export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/chinalinkexpress',
  INSTAGRAM: 'https://instagram.com/chinalinkexpress',
  LINKEDIN: 'https://linkedin.com/company/chinalinkexpress',
  TWITTER: 'https://twitter.com/chinalinkexpress',
} as const;
