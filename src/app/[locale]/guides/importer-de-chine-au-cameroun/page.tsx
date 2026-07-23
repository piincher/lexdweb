import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n/config';
import {
  BUSINESS_INFO,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generatePageMetadata,
} from '@/config/seo-advanced';
import { StructuredData } from '@/components/seo';
import { SeoGuidePage } from '@/features/seo-content/SeoGuidePage';

interface Props {
  params: Promise<{ locale: string }>;
}

const title = 'Comment importer de Chine au Cameroun en toute sécurité';
const description =
  'Guide pratique 2026 pour importer de Chine au Cameroun : choisir un produit, vérifier le fournisseur, payer en sécurité, contrôler la qualité, choisir le fret et recevoir à Douala.';
const faqs = [
  {
    question: 'Quel budget faut-il pour commencer à importer de Chine au Cameroun ?',
    answer: 'Le budget dépend du produit, du minimum de commande, du mode de transport et des frais de paiement. Pour commencer prudemment, testez un petit lot ou un échantillon avant une grosse commande.',
  },
  {
    question: 'Comment choisir un bon fournisseur sur Alibaba ?',
    answer: 'Vérifiez l\'identité de l\'entreprise, demandez des preuves de production, commencez par un échantillon et utilisez un intermédiaire de confiance pour le paiement.',
  },
  {
    question: 'Quel fret choisir pour Douala ?',
    answer: 'Le fret aérien convient aux produits urgents ou légers. Le fret maritime convient aux gros volumes, meubles, machines et cartons lourds.',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: 'Importer de Chine au Cameroun : guide complet 2026',
    description,
    keywords:
      'importer de Chine au Cameroun, comment importer de Chine, achat Chine Cameroun, fournisseur Chine Cameroun, fret Chine Cameroun',
    path: '/guides/importer-de-chine-au-cameroun',
    locale: locale as Locale,
    ogType: 'article',
  });
}

export default async function ImportGuidePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Organization', name: BUSINESS_INFO.name },
    publisher: { '@type': 'Organization', name: BUSINESS_INFO.name },
    datePublished: '2026-04-21',
    dateModified: '2026-04-21',
    inLanguage: 'fr-FR',
    mainEntityOfPage: `${BUSINESS_INFO.url}/fr/guides/importer-de-chine-au-cameroun`,
  };

  return (
    <>
      <StructuredData
        schemas={[
          articleSchema,
          generateBreadcrumbSchema([
            { name: 'Accueil', url: '/fr/' },
            { name: 'Guides', url: '/fr/guides/importer-de-chine-au-cameroun' },
            { name: 'Importer de Chine au Cameroun', url: '/fr/guides/importer-de-chine-au-cameroun' },
          ], locale as Locale),
          generateFAQPageSchema(faqs, locale as Locale),
        ]}
      />
      <SeoGuidePage
        title={title}
        description={description}
        updatedAt="21 avril 2026"
        readTime="Lecture : 8 minutes"
        sections={[
          {
            title: '1. Choisir un produit rentable avant de chercher un fournisseur',
            body: 'La première erreur est de commencer par Alibaba au hasard. Commencez par le marché camerounais : prix de vente à Douala, marge possible, concurrence, poids, fragilité, réglementation et fréquence de demande.',
            items: ['Comparez le prix local et le prix fournisseur', 'Évitez les produits trop fragiles au début', 'Calculez le fret avant de commander', 'Vérifiez si le produit est sensible ou interdit'],
          },
          {
            title: '2. Trouver un fournisseur chinois sans se faire piéger',
            body: 'Alibaba peut donner accès à de bons fournisseurs, mais aussi à des intermédiaires ou vendeurs risqués. Demandez des preuves réelles avant de payer.',
            items: ['Photos/vidéos récentes de production', 'Devis clair avec quantité et délai', 'Nom de société cohérent', 'Conditions de paiement et d’expédition écrites'],
          },
          {
            title: '3. Sécuriser le paiement fournisseur',
            body: 'Beaucoup de fournisseurs demandent Alipay ou un virement local. Avant de payer, vérifiez le fournisseur et gardez une preuve. LEXD peut faciliter le paiement et le suivi.',
            items: ['Ne payez pas un compte personnel suspect', 'Demandez une facture ou confirmation', 'Gardez les échanges importants', 'Évitez les gros acomptes sans contrôle'],
          },
          {
            title: '4. Contrôler la qualité avant l’expédition',
            body: 'Une inspection photo ou vidéo avant départ évite les mauvaises surprises à Douala. Le contrôle doit vérifier la quantité, l’apparence, l’emballage et les références principales.',
          },
          {
            title: '5. Choisir fret aérien ou maritime vers Douala',
            body: 'Le fret aérien est rapide et adapté aux petits volumes. Le fret maritime est plus économique pour les gros volumes, mais plus lent. Le bon choix dépend de la marge, de l’urgence et du type de marchandise.',
          },
          {
            title: '6. Préparer la réception au Cameroun',
            body: 'Avant l’arrivée, confirmez le contact de réception, l’adresse, les documents, les éventuels frais particuliers et le mode de paiement du fret.',
          },
        ]}
        faqs={faqs}
        links={[
          { href: '/fr/services/sourcing', label: 'Agent sourcing Chine pour le Cameroun' },
          { href: '/fr/services/paiement-fournisseur-chine', label: 'Paiement fournisseur chinois' },
          { href: '/fr/routes/china-to-cameroon', label: 'Fret Chine-Cameroun' },
          { href: '/fr/calculateur', label: 'Calculateur fret Chine-Cameroun' },
        ]}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'fr' }];
}

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = 3600;
