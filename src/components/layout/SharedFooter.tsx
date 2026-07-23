/**
 * Shared Footer Component
 *
 * Site-wide footer with links, contact info, and social links.
 * Supports RTL layouts and dark mode.
 * Part of the layout components.
 */

'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn, getCurrentYear } from '@/lib/utils';
import type { Locale } from '@/i18n/config';

interface SharedFooterProps {
  locale: Locale;
  className?: string;
}

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/KALSQm7oyEHFFGENKCj5yr';
const WHATSAPP_GROUP_LABEL: Record<string, string> = {
  fr: 'Rejoindre le groupe WhatsApp',
  en: 'Join our WhatsApp group',
  ar: 'انضم إلى مجموعة واتساب',
  zh: '加入 WhatsApp 群组',
};

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/chinalinkexpress', label: 'Facebook', color: 'hover:bg-[var(--color-primary)]' },
  { icon: Instagram, href: 'https://instagram.com/chinalinkexpress', label: 'Instagram', color: 'hover:bg-[var(--color-primary)]' },
  { icon: Linkedin, href: 'https://linkedin.com/company/chinalinkexpress', label: 'LinkedIn', color: 'hover:bg-[var(--color-primary)]' },
] as const;

const SERVICE_LINKS = [
  { labelKey: 'services.items.sourcing.title', href: '/services/sourcing' },
  {
    labels: { fr: 'Agent sourcing Chine', en: 'China sourcing agent' },
    href: '/services/agent-sourcing-chine',
    locales: ['fr', 'en'],
  },
  {
    labels: { fr: 'Achat Alibaba Cameroon', en: 'Alibaba buying agent' },
    href: '/services/achat-alibaba-cameroun',
    locales: ['fr', 'en'],
  },
  { labelKey: 'services.items.airFreight.title', href: '/services/air-freight' },
  { labelKey: 'services.items.seaFreight.title', href: '/services/sea-freight' },
  { labelKey: 'services.items.payment.title', href: '/services/paiement-fournisseur-chine', locales: ['fr', 'en'] },
  { labelKey: 'services.features.sourcing.supplierVerification', href: '/services/verification-fournisseur-chine', locales: ['fr', 'en'] },
  {
    labels: { fr: 'Cargo Chine Cameroon', en: 'China to Cameroon cargo' },
    href: '/cargo-chine-cameroun',
    locales: ['fr', 'en'],
  },
] as const;

export function SharedFooter({ locale, className }: SharedFooterProps) {
  const t = useTranslations();
  const year = getCurrentYear();

  return (
    <footer className={cn('bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}/`} className="inline-block mb-4">
              <span className="text-2xl font-bold text-[var(--color-primary)]">
                LEXD
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      'w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-colors',
                      social.color
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp Community Group */}
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {WHATSAPP_GROUP_LABEL[locale] ?? WHATSAPP_GROUP_LABEL.fr}
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => {
                const linkLocale =
                  'frOnly' in link && link.frOnly
                    ? 'fr'
                    : 'locales' in link && !(link.locales as readonly string[]).includes(locale)
                      ? 'fr'
                      : locale;
                const label = 'labelKey' in link ? t(link.labelKey) : link.labels[locale as 'fr' | 'en'] || link.labels.fr;

                return (
                  <li key={link.href}>
                    <Link
                      href={`/${linkLocale}${link.href}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={`/${locale}/calculateur`}
                  className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm"
                >
                  {t('navigation.calculator')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.links')}
            </h3>
            <ul className="space-y-3">
              {['navigation.about', 'navigation.blog', 'navigation.faq', 'navigation.contact', 'navigation.privacy', 'navigation.terms'].map((key) => {
                const getHref = () => {
                  if (key === 'navigation.about') return '#about';
                  if (key === 'navigation.blog') return 'blog';
                  if (key === 'navigation.contact') return '#contact';
                  if (key === 'navigation.privacy') return 'privacy';
                  if (key === 'navigation.terms') return 'terms';
                  return 'faq';
                };
                return (
                  <li key={key}>
                    <Link
                      href={`/${locale}/${getHref()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm"
                    >
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('navigation.tools')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}/calculateur`}
                  className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm"
                >
                  {t('navigation.calculator')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/comparateur-transport`}
                  className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm"
                >
                  {t('navigation.compareShipping')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/verifier-produit`}
                  className="text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors text-sm"
                >
                  {t('navigation.checkProduct')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Akwa, Douala, Cameroon
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  <a href="tel:+8617863668208" className="hover:text-[var(--color-primary)] block">+861-786-366-8208</a>
                  <a href="tel:+23772660161" className="hover:text-[var(--color-primary)] block">Hilary · +237-726-60161</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                <a
                  href="mailto:contact@lexdservices.com"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-[var(--color-primary)]"
                >
                  contact@lexdservices.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  <p>{t('contact.info.hoursWeekday')}</p>
                  <p>{t('contact.info.hoursSaturday')}</p>
                  <p>{t('contact.info.hoursSunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
              &copy; {year} LEXD. {t('footer.copyright')}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Made with <span className="text-rose-500">❤</span> by{' '}
              <a
                href="https://nuvotech.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] transition-colors"
              >
                nuvotech.tech
              </a>{' '}
              team{' '}
              <a
                href="https://wa.me/237672660161"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                +86 178 6567 3053
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SharedFooter;
