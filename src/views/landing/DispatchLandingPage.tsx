/* Hallmark · genre: modern-minimal · macrostructure: Split Studio
 * design-system: design.md · designed-as-app · enrichment: real operational photography
 * pre-emit: P5 H5 E5 S5 R5 V5
 */

/* Server component on purpose. Nothing here holds state or binds a handler,
 * and the sections below pull from `route-data` and `pricing/constants` —
 * ~18 kB of source that has no reason to cross into the browser bundle.
 * `TrackingBox` carries its own 'use client' directive for the one piece that
 * genuinely needs it. */

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  FileCheck,
  GraduationCap,
  MessageCircle,
  Plane,
  Search,
  Ship,
  WalletCards,
} from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { CONTACT_CONFIG } from '@/config/app';
import {
  AppSection,
  CorridorGrid,
  JourneyDetail,
  ProofStrip,
  RateStrip,
  TrackingBox,
} from './sections';
import styles from './DispatchLandingPage.module.css';

interface DispatchLandingPageProps { locale: Locale; }
interface FaqItem { question: string; answer: string; }

const WAREHOUSE_IMAGE = '/images/cargo/warehouse-douala-cbm.jpg';
const OPERATIONS_IMAGE = '/images/cargo/cargo-bales-warehouse.jpg';

const SERVICES = [
  { key: 'sourcing', href: '/services/sourcing', icon: Search },
  { key: 'airFreight', href: '/services/air-freight', icon: Plane },
  { key: 'seaFreight', href: '/services/sea-freight', icon: Ship },
  { key: 'payment', href: '/services/paiement-fournisseur-chine', icon: WalletCards },
  { key: 'businessConsulting', href: '/contact', icon: Briefcase },
  { key: 'studyChina', href: '/contact', icon: GraduationCap },
  { key: 'alibabaTraining', href: '/services/agent-sourcing-chine', icon: BookOpen },
  { key: 'chinaVisa', href: '/contact', icon: FileCheck },
] as const;

export function DispatchLandingPage({ locale }: DispatchLandingPageProps) {
  const t = useTranslations();
  const faq = Object.values(t.raw('faq.items') as Record<string, FaqItem>);
  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.corridor}>{t('dispatch.corridor')}</p>
          <h1 id="home-title">{t('hero.headline')}</h1>
          <p className={styles.lede}>{t('hero.subheadline')}</p>
          <div className={styles.heroActions}>
            <a href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP.CHINA}`} target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
              <MessageCircle aria-hidden="true" /><span>{t('cta.contactUs')}</span>
            </a>
            <Link href={withLocale('/services')} className={styles.secondaryAction}>
              <span>{t('navigation.services')}</span><ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <TrackingBox />
        </div>

        <figure className={styles.heroVisual}>
          <Image
            src={WAREHOUSE_IMAGE}
            alt={t('about.gallery.warehouseLabel')}
            fill
            priority
            sizes="(min-width: 64rem) 52vw, 100vw"
          />
          <figcaption>
            <span>{t('about.gallery.warehouseLabel')}</span>
            <strong>{t('about.gallery.warehouseLocation')}</strong>
          </figcaption>
        </figure>
      </section>

      {/* Prices immediately after the hero: cost is the first question in
          freight, and the numbers come straight from the pricing constants. */}
      <RateStrip locale={locale} />

      <section className={styles.coverage} aria-labelledby="coverage-title">
        <div>
          <p className={styles.coverageLabel}>{t('dispatch.coverageLabel')}</p>
          <h2 id="coverage-title">{t('dispatch.coverageTitle')}</h2>
          <p>{t('dispatch.coverageText')}</p>
        </div>
        <div className={styles.coverageDetails}>
          <div><span>{t('dispatch.rateCbm')}</span><strong>350 000 FCFA / CBM</strong></div>
          <div><span>{t('dispatch.rateKg')}</span><strong>8 000 FCFA / kg</strong></div>
          <a href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP.HILARY}`} target="_blank" rel="noopener noreferrer">
            {t('dispatch.contactHilary')} · {CONTACT_CONFIG.PHONE.HILARY}
          </a>
        </div>
      </section>

      {/* Replaces the old journey <ol>, which listed six one-word labels. */}
      <JourneyDetail />

      <section className={styles.services} id="services" aria-labelledby="services-title">
        <header>
          <h2 id="services-title">{t('dispatch.servicesTitle')}</h2>
          <p>{t('services.subtitle')}</p>
        </header>
        <div className={styles.serviceRows}>
          {SERVICES.map(({ key, href, icon: Icon }) => (
            <Link key={key} href={withLocale(href)} className={styles.serviceRow}>
              <span className={styles.serviceIcon}><Icon aria-hidden="true" /></span>
              <span className={styles.serviceCopy}>
                <strong>{t(`services.items.${key}.title`)}</strong>
                <small>{t(`services.items.${key}.description`)}</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <ProofStrip />

      {/* Entry point for the /routes/* corridor pages, which previously had no
          inbound link from the navbar, the footer, or this page. */}
      <CorridorGrid locale={locale} />

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <figure>
          <Image
            src={OPERATIONS_IMAGE}
            alt={t('about.gallery.warehouseLabel')}
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
          />
        </figure>
        <div className={styles.aboutCopy}>
          <h2 id="about-title">{t('about.title')}</h2>
          <p>{t('about.description1')}</p>
          <p>{t('about.description2')}</p>
          <ul>{(t.raw('about.tags') as string[]).map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <Link href={withLocale('/pourquoi-nous')}>{t('navigation.about')}<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <AppSection />

      <section className={styles.faq} aria-labelledby="faq-title">
        <header>
          <h2 id="faq-title">{t('faq.title')}</h2>
          <p>{t('faq.helpDescription')}</p>
          <a href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP.CHINA}`} target="_blank" rel="noopener noreferrer">
            {t('faq.contactWhatsApp')}<ArrowRight aria-hidden="true" />
          </a>
        </header>
        <div className={styles.faqList}>
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<i>+</i></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.closing} id="contact">
        <div>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>
        <a href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP.CHINA}`} target="_blank" rel="noopener noreferrer">
          <span>WhatsApp</span><ArrowRight aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
