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
} as const;

export const CONTACT_CONFIG = {
  EMAIL: 'contact@lexdservices.com',
  PHONE: {
    CHINA: '+861-786-366-8208',
    HILARY: '+237-674-578-453',
    CAMEROON_1: '+237-672-660-162',
    VERA: '+237-687-478-380',
  },
  WHATSAPP: {
    CHINA: '+8617863668208',
    HILARY: '+237672660161',
    CAMEROON: '+237672660162',
    VERA: '+237687478380',
    GROUP_LINK: 'https://chat.whatsapp.com/KALSQm7oyEHFFGENKCj5yr',
  },
  ADDRESS: {
    STREET: 'Opposite Lycée Polyvalent, Bonabéri',
    CITY: 'Douala',
    COUNTRY: 'Cameroon',
  },
  HOURS: {
    WEEKDAYS: { open: '08:00', close: '20:00' },
    SATURDAY: { open: '09:00', close: '17:00' },
    SUNDAY: { open: '10:00', close: '15:00' },
  },
} as const;

// LinkedIn and Twitter/X are intentionally absent: LEXD has no accounts on
// those platforms. Do not add placeholder links — a social icon pointing at a
// dead profile is worse than no icon.
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/lexdservices',
  INSTAGRAM: 'https://instagram.com/lexd237',
  TIKTOK: 'https://tiktok.com/@lexd237',
} as const;
