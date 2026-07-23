/**
 * Locale-Aware Root Layout - SEO Optimized
 * 
 * Features:
 * - Dynamic metadata generation per locale
 * - Proper hreflang implementation
 * - Preconnect to critical domains
 * - Structured data injection
 * - SSR-safe theme handling
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/internationalization
 */

import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { Bricolage_Grotesque, Geist_Mono, Manrope } from 'next/font/google';
import { setRequestLocale } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { i18nConfig, type Locale, getLocaleDirection, getSeoLocale } from '@/i18n/config';
import { loadMessages } from '@/i18n/messages';
import { HumanReadableIntlProvider } from '@/components/i18n/HumanReadableIntlProvider';
import { SharedNavbar, SharedFooter } from '@/components/layout';
import { GoogleAnalytics } from '@/components/seo';
import { ThemeProvider, ThemeInitScript } from '@/components/theme';
import { PWAProvider, InstallPrompt, UpdateNotification, OfflineIndicator } from '@/components/pwa';
import { PromoModalProvider } from '@/features/promoCampaigns';
import { SmoothScroll } from '@/components/smooth-scroll';
import { AnimationProvider } from '@/components/animation';
import type { Theme, ResolvedTheme } from '@/store/useThemeStore';
import '../globals.css';
import '@/styles/scroll-animations.css';

// Animation component styles
import '@/components/animations/SpotlightCard.css';
import '@/components/animations/GradientMesh.css';
import '@/components/animations/GridPattern.css';
import '@/components/animations/SpotlightBorder.css';
import '@/components/animations/GradientText.css';
import '@/components/animations/Marquee.css';

// ============================================================================
// Font Configuration
// ============================================================================

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Monospace is less critical
});

// ============================================================================
// Server-Side Theme Resolution
// ============================================================================

async function getServerTheme(): Promise<{ theme: Theme; resolvedTheme: ResolvedTheme }> {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value;
  
  let theme: Theme = 'system';
  
  if (themeCookie && ['light', 'dark', 'system'].includes(themeCookie)) {
    theme = themeCookie as Theme;
  }
  
  // Resolve system theme (default to light on server)
  let resolvedTheme: ResolvedTheme = 'light';
  if (theme === 'dark') {
    resolvedTheme = 'dark';
  } else if (theme === 'light') {
    resolvedTheme = 'light';
  }
  // For 'system', we default to 'light' on server to avoid flash
  // Client will correct this immediately after hydration
  
  return { theme, resolvedTheme };
}

// ============================================================================
// Static Generation Configuration
// ============================================================================

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

// ============================================================================
// Metadata Generation
// ============================================================================

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  const validLocale = i18nConfig.locales.includes(locale as Locale) 
    ? locale 
    : i18nConfig.defaultLocale;
  
  // Load messages directly for metadata
  const messages = (await import(`@/i18n/locales/${validLocale}/common.json`)).default;
  const seoLocale = getSeoLocale(validLocale as Locale);
  const isEn = validLocale === 'en';
  
  // Comprehensive SEO keywords by locale
  const keywords = isEn 
    ? 'freight forwarding, shipping from China, logistics company, international shipping, sea freight, air freight, freight forwarder, China Cameroon shipping, shipping from China to Cameroon, freight forwarding China to Douala, Alibaba shipping agent, China procurement services, door to door shipping China Cameroon, container shipping China Cameroon, FCL shipping, LCL consolidation, air cargo China to Cameroon, express shipping China Cameroon, shipping China Douala, freight forwarder China Cameroon, import China Cameroon, customs clearance Cameroon, sourcing agent Cameroon'
    : 'fret maritime, fret aérien, expédition Chine, transitaire, logistique internationale, transport international, commissionnaire transport, fret Chine Cameroun, expédition colis Chine Cameroun, fret Chine Douala, achat fournisseur Chine, agent sourcing Chine, paiement fournisseur chinois, dédouanement Cameroun, livraison porte à porte Chine Cameroun, conteneur Chine Cameroun, conteneur complet FCL, groupage maritime LCL, cargo aérien Chine Cameroun, express Chine Cameroun, expédition Chine Douala, transitaire Douala, import Chine Cameroun, sourcing Cameroun';
  
  return {
    title: {
      template: '%s | LEXD',
      default: messages.metadata?.title || 'LEXD | Freight Forwarding China to Africa',
    },
    description: messages.metadata?.description || 'Leading freight forwarder from China to Africa. Air & sea shipping with competitive rates.',
    keywords: keywords,
    authors: [{ name: 'LEXD' }],
    creator: 'LEXD',
    publisher: 'LEXD',
    metadataBase: new URL('https://www.lexdservices.com'),
    alternates: {
      canonical: `/${validLocale}/`,
      languages: {
        'fr-FR': '/fr/',
        'en-US': '/en/',
        'zh-CN': '/zh/',
        'ar-SA': '/ar/',
        'x-default': '/fr/',
      },
    },
    openGraph: {
      title: messages.metadata?.title || 'LEXD',
      description: messages.metadata?.description || '',
      url: `https://www.lexdservices.com/${validLocale}/`,
      siteName: 'LEXD',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: isEn ? 'LEXD - Freight Forwarding China to Africa' : 'LEXD - Fret Chine Afrique',
        },
      ],
      locale: seoLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata?.title || 'LEXD',
      description: messages.metadata?.description || '',
      images: ['/og-image.jpg'],
      // `creator`/`site` intentionally omitted until LEXD has its own X handle.
      // They previously credited @chinalinkexpress, which attributed every
      // shared LEXD link to a different company.
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    },
    category: 'logistics',
    classification: 'Business & Industrial > Shipping & Logistics',
    other: {
      'geo.region': 'ML-BM',
      'geo.placename': 'Douala',
      'geo.position': '12.6392;-8.0029',
      'ICBM': '12.6392, -8.0029',
    },
    appleWebApp: {
      capable: true,
      title: 'LEXD',
      statusBarStyle: 'default',
    },
    applicationName: 'LEXD',
    manifest: '/manifest.json',
  };
}

// ============================================================================
// Layout Component
// ============================================================================

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  
  // Validate locale
  const validLocale = i18nConfig.locales.includes(locale as Locale) 
    ? locale 
    : i18nConfig.defaultLocale;

  // Set locale for static generation
  setRequestLocale(validLocale);

  // Get text direction (LTR/RTL)
  const direction = getLocaleDirection(validLocale as Locale);

  // Load messages for this locale
  const messages = await loadMessages(validLocale as Locale);

  // Get theme from cookie for SSR
  const { resolvedTheme } = await getServerTheme();

  return (
    <>
      {/* Theme Initialization Script - Prevents flash */}
      <ThemeInitScript />
      
      {/* Performance: Preconnect to Critical Domains */}
      <link rel="preconnect" href="https://chinalinkexpress.nyc3.cdn.digitaloceanspaces.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for Third-Party Services */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="LEXD" />
      <meta name="application-name" content="LEXD" />
      <meta name="msapplication-TileColor" content="#007757" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#007757" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0A1815" media="(prefers-color-scheme: dark)" />
      
      {/* PWA Icons */}
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
      <link rel="mask-icon" href="/icons/icon-192x192.png" color="#007757" />
      
      <div className={`${bricolage.variable} ${manrope.variable} ${geistMono.variable} lexd-site-frame antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <PWAProvider>
            <HumanReadableIntlProvider locale={validLocale} messages={messages}>
              <AnimationProvider>
                <SmoothScroll>
                  <PromoModalProvider>
                    <OfflineIndicator />
                    <UpdateNotification />
                    <SharedNavbar locale={validLocale as Locale} />
                    
                    <main className="lexd-site-main flex-grow">
                      {children}
                    </main>
                    
                    <SharedFooter locale={validLocale as Locale} />
                    <InstallPrompt />
                  </PromoModalProvider>
                </SmoothScroll>
              </AnimationProvider>
            </HumanReadableIntlProvider>
          </PWAProvider>
        </ThemeProvider>
        
        {/* Analytics */}
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics />
      </div>
    </>
  );
}
