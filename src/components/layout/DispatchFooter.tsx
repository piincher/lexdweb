/* Hallmark · genre: modern-minimal · macrostructure: Editorial invitation footer
 * design-system: design.md · designed-as-app · pre-emit: P5 H5 E5 S5 R5 V5
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/config';
import { getCurrentYear } from '@/lib/utils';

interface DispatchFooterProps {
  locale: Locale;
  className?: string;
}

const SERVICE_LINKS = [
  ['/services/air-freight', 'services.items.airFreight.title'],
  ['/services/sea-freight', 'services.items.seaFreight.title'],
  ['/services/sourcing', 'services.items.sourcing.title'],
  ['/services/paiement-fournisseur-chine', 'services.items.payment.title'],
] as const;

const TOOL_LINKS = [
  ['/calculateur', 'navigation.calculator'],
  ['/comparateur-transport', 'navigation.compareShipping'],
  ['/verifier-produit', 'navigation.checkProduct'],
  ['/faq', 'navigation.faq'],
] as const;

export function DispatchFooter({ locale, className = '' }: DispatchFooterProps) {
  const t = useTranslations();
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <footer className={`studio-footer ${className}`}>
      <div className="studio-footer__invitation">
        <div>
          {/* This block is green-900 in both themes, so it always takes the
              light wordmark — unlike the directory below, which follows the
              theme. */}
          <Image
            className="studio-footer__wordmark"
            src="/lexd-wordmark-light.png"
            alt="LEXD"
            width={521}
            height={190}
          />
          <h2>{t('dispatch.footerStatement')}</h2>
        </div>
        <a href="https://wa.me/8617863668208" target="_blank" rel="noopener noreferrer">
          <span>{t('cta.contactUs')}</span><ArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="studio-footer__directory">
        <div className="studio-footer__brand">
          <Image
            className="studio-brand__wordmark studio-brand__wordmark--light"
            src="/lexd-wordmark.png"
            alt="LEXD"
            width={521}
            height={190}
          />
          <Image
            className="studio-brand__wordmark studio-brand__wordmark--dark"
            src="/lexd-wordmark-light.png"
            alt=""
            aria-hidden="true"
            width={521}
            height={190}
          />
          <p>Larry Express Delivery</p>
          <span>{t('dispatch.corridor')}</span>
        </div>
        <div>
          <h3>{t('footer.services')}</h3>
          {SERVICE_LINKS.map(([href, label]) => <Link key={href} href={withLocale(href)}>{t(label)}</Link>)}
        </div>
        <div>
          <h3>{t('navigation.tools')}</h3>
          {TOOL_LINKS.map(([href, label]) => <Link key={href} href={withLocale(href)}>{t(label)}</Link>)}
        </div>
        <address>
          <h3>{t('contact.info.title')}</h3>
          <span><MapPin aria-hidden="true" />Akwa, Douala, Cameroon</span>
        <a href="tel:+23772660161"><Phone aria-hidden="true" />Hilary · +237-726-60161</a>
          <a href="mailto:contact@lexdservices.com"><Mail aria-hidden="true" />contact@lexdservices.com</a>
        </address>
      </div>

      <div className="studio-footer__legal">
        <span>© {getCurrentYear()} LEXD</span>
        <div>
          <Link href={withLocale('/privacy')}>{t('navigation.privacy')}</Link>
          <Link href={withLocale('/terms')}>{t('navigation.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
