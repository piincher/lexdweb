/**
 * Header Component
 * 
 * Futuristic animated header with glassmorphism, glowing effects,
 * and smooth micro-interactions. Features scroll-aware transparency
 * and magnetic hover effects.
 * Part of the landing page feature.
 */

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useScrollTo } from '@/hooks/useScrollTo';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Link as LocaleLink, usePathname as useIntlPathname } from '@/lib/i18n/navigation';
import { usePathname } from 'next/navigation';
import { useUIStore } from '@/store/useUIStore';
import { MagneticButton } from '@/components/animations';
import { type Locale, i18nConfig } from '@/i18n/config';
import { LanguageSelector } from '@/components/language';
import { SECTION_IDS } from '../constants';

interface HeaderProps {
  locale: Locale;
}

interface NavItem {
  key: string;
  sectionId: string;
  label: string;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'about', sectionId: SECTION_IDS.ABOUT, label: 'about' },
  { key: 'services', sectionId: SECTION_IDS.SERVICES, label: 'services' },
  { key: 'pricing', sectionId: 'pricing', label: 'pricing', href: '/tarifs' },
  { key: 'whyUs', sectionId: SECTION_IDS.WHY_US, label: 'whyUs' },
  { key: 'contact', sectionId: SECTION_IDS.CONTACT, label: 'contact' },
];

// Animated nav link with underline effect
function AnimatedNavLink({
  item,
  onClick,
  isActive,
  tNav,
  locale,
}: {
  item: NavItem;
  onClick: () => void;
  isActive: boolean;
  tNav: (key: string) => string;
  locale: string;
}) {
  const content = (
    <>
      <span className="relative z-10">{tNav(item.label)}</span>
      
      {/* Animated underline */}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-[var(--color-primary)]"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 bg-[var(--color-paper-2)] rounded-lg -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );

  if (item.href) {
    return (
      <Link href={`/${locale}${item.href}`}>
        <motion.span
          className="relative px-3 py-2 text-[var(--color-ink-2)] hover:text-[var(--color-primary)] font-medium group inline-block cursor-pointer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className="relative px-3 py-2 text-[var(--color-ink-2)] hover:text-[var(--color-primary)] font-medium group"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations();
  const tNav = useTranslations('navigation');
  const { scrollToElement } = useScrollTo();
  const pathname = usePathname();
  const intlPathname = useIntlPathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.sectionId));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
    closeMobileMenu();
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--color-rule)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with animation */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick(SECTION_IDS.HERO)}
          >
            <motion.div
              className="rounded-lg"
            >
              <Image
                src="/icons/icon-192x192.png"
                alt="LEXD logo"
                className="h-12 w-12 rounded-lg"
                width={1024}
                height={1024}
              />
            </motion.div>
            <motion.span
              className="ml-3 text-xl font-bold text-[var(--color-ink)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              LEXD
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <AnimatedNavLink
                  item={item}
                  onClick={() => handleNavClick(item.sectionId)}
                  isActive={activeSection === item.sectionId || (item.href && pathname?.includes(item.href)) ? true : false}
                  tNav={tNav}
                  locale={locale}
                />
              </motion.div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="hidden md:block"
            >
              <LanguageSelector
                locale={locale}
                variant="compact"
                align="right"
              />
            </motion.div>

            {/* WhatsApp CTA with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
            >
              <MagneticButton strength={20}>
                <a
                  href="https://wa.me/237672660161"
                  className="relative bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors overflow-hidden group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">{t('cta.contactUs')}</span>
                  </span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-gray-700 rounded-full origin-left"
                  animate={{ 
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 0 : 0,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-700 rounded-full"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-700 rounded-full origin-left"
                  animate={{ 
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 0 : 0,
                  }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-[72px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* Language Selector - Mobile */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {t('common.language') || 'Language'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {i18nConfig.locales.map((l) => (
                    <LocaleLink
                      key={l}
                      href={intlPathname || '/'}
                      locale={l}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        l === locale
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => closeMobileMenu()}
                    >
                      <span className="text-lg">{i18nConfig.localeLabels[l].flag}</span>
                      <span>{i18nConfig.localeLabels[l].label}</span>
                    </LocaleLink>
                  ))}
                </div>
              </motion.div>

              {/* Nav Links */}
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  item.href ? (
                    <Link key={item.key} href={`/${locale}${item.href}`}>
                      <motion.span
                        className="block text-left text-[var(--color-ink-2)] hover:text-[var(--color-primary)] font-medium py-3 px-4 rounded-lg hover:bg-[var(--color-paper-2)] transition-all cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {tNav(item.label)}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.key}
                      onClick={() => handleNavClick(item.sectionId)}
                      className="text-left text-[var(--color-ink-2)] hover:text-[var(--color-primary)] font-medium py-3 px-4 rounded-lg hover:bg-[var(--color-paper-2)] transition-all w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {tNav(item.label)}
                    </motion.button>
                  )
                ))}
                
                <motion.a
                  href="https://wa.me/237672660161"
                  className="bg-[var(--color-primary)] text-white px-4 py-4 rounded-lg font-semibold flex items-center justify-center mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> {t('cta.contactUs')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
