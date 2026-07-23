/* Hallmark · genre: modern-minimal · macrostructure: Editorial invitation footer
 * design-system: design.md · designed-as-app · pre-emit: P5 H5 E5 S5 R5 V5
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, MessageCircle } from 'lucide-react';
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

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/KALSQm7oyEHFFGENKCj5yr';
const WHATSAPP_GROUP_LABEL: Record<string, string> = {
  fr: 'Rejoindre le groupe WhatsApp',
  en: 'Join our WhatsApp group',
  ar: 'انضم إلى مجموعة واتساب',
  zh: '加入 WhatsApp 群组',
};

function WhatsAppIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
        <a href="https://wa.me/237672660161" target="_blank" rel="noopener noreferrer">
          <span>{t('cta.contactUs')}</span><ArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="studio-footer__directory" data-stagger>
        <div className="studio-footer__brand" data-reveal>
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
        <div data-reveal>
          <h3>{t('footer.services')}</h3>
          {SERVICE_LINKS.map(([href, label]) => <Link key={href} href={withLocale(href)}>{t(label)}</Link>)}
        </div>
        <div data-reveal>
          <h3>{t('navigation.tools')}</h3>
          {TOOL_LINKS.map(([href, label]) => <Link key={href} href={withLocale(href)}>{t(label)}</Link>)}
        </div>
        <address data-reveal>
          <h3>{t('contact.info.title')}</h3>
          <span><MapPin aria-hidden="true" />Akwa, Douala, Cameroon</span>
        <a href="https://wa.me/23772660161" target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Hilary · +237-726-60161</a>
          <a href="mailto:contact@lexdservices.com"><Mail aria-hidden="true" />contact@lexdservices.com</a>
          <a href="mailto:lexdservices237@gmail.com"><Mail aria-hidden="true" />lexdservices237@gmail.com</a>
          <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />{WHATSAPP_GROUP_LABEL[locale] ?? WHATSAPP_GROUP_LABEL.fr}</a>
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
