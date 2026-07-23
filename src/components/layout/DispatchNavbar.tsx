/* Hallmark · genre: modern-minimal · macrostructure: Split Studio navigation
 * design-system: design.md · designed-as-app · pre-emit: P5 H5 E5 S5 R5 V5
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  Calculator,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSelector } from '@/components/language/LanguageSelector';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import type { Locale } from '@/i18n/config';
import { CONTACT_CONFIG } from '@/config/app';

interface DispatchNavbarProps {
  locale: Locale;
}

const PRIMARY_LINKS = [
  { key: 'home', href: '/', label: 'navigation.home' },
  { key: 'services', href: '/services', label: 'navigation.services' },
  { key: 'pricing', href: '/tarifs', label: 'navigation.pricing' },
  { key: 'community', href: '/communaute', label: 'navigation.community' },
  { key: 'blog', href: '/blog', label: 'navigation.blog' },
  { key: 'contact', href: '/contact', label: 'navigation.contact' },
] as const;

const TOOL_LINKS = [
  { href: '/calculateur', label: 'navigation.calculator', icon: Calculator },
  { href: '/comparateur-transport', label: 'navigation.compareShipping', icon: Scale },
  { href: '/verifier-produit', label: 'navigation.checkProduct', icon: ShieldCheck },
] as const;

export function DispatchNavbar({ locale }: DispatchNavbarProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const withLocale = (href: string) => `/${locale}${href}`;
  const isActive = (href: string) =>
    href === '/'
      ? pathname === `/${locale}` || pathname === `/${locale}/`
      : pathname?.startsWith(withLocale(href));

  return (
    <header className="studio-header">
      <div className="studio-corridor">
        <span><i aria-hidden="true" />{t('dispatch.corridor')}</span>
        <div className="studio-corridor__prefs">
          <LanguageSelector locale={locale} variant="minimal" />
          <ThemeToggle />
        </div>
      </div>

      <div className="studio-nav">
        <Link
          href={withLocale('/')}
          className="studio-brand"
          onClick={() => setOpen(false)}
          aria-label="LEXD — Larry Express Delivery"
        >
          {/* Two files rather than one CSS-filtered asset: the wordmark is
              two-tone (black letterforms, green swash), so a filter that
              lightens the letters for dark mode would also wash out the
              green. `.dark` swaps which one renders — no JS, no hydration
              flash, and the hidden one costs no layout. */}
          <Image
            className="studio-brand__wordmark studio-brand__wordmark--light"
            src="/lexd-wordmark.png"
            alt="LEXD"
            width={521}
            height={190}
            priority
          />
          <Image
            className="studio-brand__wordmark studio-brand__wordmark--dark"
            src="/lexd-wordmark-light.png"
            alt=""
            aria-hidden="true"
            width={521}
            height={190}
            priority
          />
          <small className="studio-brand__tagline">Larry Express Delivery</small>
        </Link>

        <nav className="studio-nav__links" aria-label="Primary navigation">
          {PRIMARY_LINKS.map((link) => (
            <Link
              key={link.key}
              href={withLocale(link.href)}
              data-active={isActive(link.href)}
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="studio-nav__actions">
          <Link className="studio-calculator" href={withLocale('/calculateur')}>
            <Calculator aria-hidden="true" /><span>{t('navigation.calculator')}</span>
          </Link>
          <a className="studio-whatsapp" href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP.CAMEROON}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /><span>WhatsApp</span>
          </a>
          <button
            className="studio-menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="studio-mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {PRIMARY_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={withLocale(link.href)}
                  data-active={isActive(link.href)}
                  onClick={() => setOpen(false)}
                >
                  <span>{t(link.label)}</span><ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className="studio-mobile-tools">
              {TOOL_LINKS.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={withLocale(href)} onClick={() => setOpen(false)}>
                  <Icon aria-hidden="true" /><span>{t(label)}</span>
                </Link>
              ))}
            </div>
            <div className="studio-mobile-preferences">
              <LanguageSelector locale={locale} variant="minimal" />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
