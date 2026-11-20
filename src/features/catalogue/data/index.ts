import { CONTACT_CONFIG } from '@/config/app';
import type { Locale } from '@/i18n/config';
import type { CatalogueCategory, Localized } from '../types';
import { engins } from './engins';
import { forage } from './forage';
import { acier } from './acier';
import { production } from './production';
import { camions } from './camions';

export const CATALOGUE_CATEGORIES: CatalogueCategory[] = [engins, forage, acier, production, camions];

export const getCategory = (slug: string) => CATALOGUE_CATEGORIES.find((c) => c.slug === slug);

export const CATALOGUE_UI = {
  title: {
    fr: 'Catalogue machines et matériaux',
    en: 'Machinery and materials catalogue',
    zh: '机械与建材目录',
    ar: 'كتالوج الآلات والمواد',
  },
  intro: {
    fr: 'Engins, foreuses, camions, machines de production et acier, sourcés pour vous auprès d’usines en Chine et livrés en Afrique. Chaque produit est trouvé sur demande : envoyez-nous votre besoin, nous revenons avec des offres vérifiées.',
    en: 'Construction equipment, drilling rigs, trucks, production machines and steel, sourced for you from factories in China and delivered to Africa. Every product is sourced on request: tell us what you need and we come back with checked offers.',
    zh: '工程机械、钻机、卡车、生产设备和钢材，我们为您从中国工厂采购并运送至非洲。所有产品均按需采购：告诉我们您的需求，我们提供经过核实的报价。',
    ar: 'معدات بناء، حفارات، شاحنات، آلات إنتاج وصلب، نوردها لك من مصانع في الصين ونوصلها إلى أفريقيا. كل منتج يُورَّد حسب الطلب: أخبرنا بحاجتك ونعود إليك بعروض موثّقة.',
  },
  badge: { fr: 'Sourcing sur demande', en: 'Sourced on request', zh: '按需采购', ar: 'توريد حسب الطلب' },
  quote: { fr: 'Demander un devis', en: 'Request a quote', zh: '获取报价', ar: 'اطلب عرض سعر' },
  photoPending: { fr: 'Photo à venir', en: 'Photo coming soon', zh: '图片即将上传', ar: 'الصورة قريباً' },
  seeCategory: { fr: 'Voir la catégorie', en: 'View category', zh: '查看类别', ar: 'عرض الفئة' },
  products: { fr: 'produits', en: 'products', zh: '个产品', ar: 'منتجات' },
  product: { fr: 'produit', en: 'product', zh: '个产品', ar: 'منتج' },
  allCategories: { fr: 'Tout le catalogue', en: 'Full catalogue', zh: '全部目录', ar: 'الكتالوج الكامل' },
  otherCategories: { fr: 'Autres catégories', en: 'Other categories', zh: '其他类别', ar: 'فئات أخرى' },
  faqTitle: { fr: 'Questions fréquentes', en: 'Frequently asked questions', zh: '常见问题', ar: 'أسئلة شائعة' },
  relatedArticle: { fr: 'Lire notre guide complet', en: 'Read our full guide', zh: '阅读完整指南', ar: 'اقرأ دليلنا الكامل' },
  howTitle: { fr: 'Comment ça marche', en: 'How it works', zh: '采购流程', ar: 'كيف يعمل' },
  how: [
    {
      fr: 'Vous nous écrivez sur WhatsApp avec le produit, la quantité et la ville de livraison.',
      en: 'Message us on WhatsApp with the product, quantity and delivery city.',
      zh: '通过 WhatsApp 告诉我们产品、数量和交货城市。',
      ar: 'راسلنا عبر واتساب بالمنتج والكمية ومدينة التسليم.',
    },
    {
      fr: 'Nous consultons plusieurs usines et vous envoyons des offres avec photos et vidéos.',
      en: 'We consult several factories and send you offers with photos and videos.',
      zh: '我们询价多家工厂，并发送附有照片和视频的报价。',
      ar: 'نستشير عدة مصانع ونرسل لك عروضاً مع صور وفيديوهات.',
    },
    {
      fr: 'Nous inspectons la marchandise avant le solde, puis gérons transport et dédouanement.',
      en: 'We inspect the goods before the balance, then handle shipping and customs.',
      zh: '我们在尾款前验货，随后负责运输和清关。',
      ar: 'نفحص البضاعة قبل دفع المبلغ المتبقي، ثم نتولى الشحن والتخليص الجمركي.',
    },
  ] as Localized[],
  disclaimer: {
    fr: 'Les produits présentés sont des exemples de ce que nous pouvons sourcer ; ils ne constituent pas un stock. Les noms de marques (Shacman, XCMG…) servent uniquement à décrire les produits : LEXD n’est pas concessionnaire officiel de ces marques.',
    en: 'The products shown are examples of what we can source; they are not stock. Brand names (Shacman, XCMG…) are used only to describe products: LEXD is not an official dealer for these brands.',
    zh: '所展示产品仅为我们可采购的示例，并非现货库存。品牌名称（陕汽、徐工等）仅用于描述产品，LEXD 并非这些品牌的官方经销商。',
    ar: 'المنتجات المعروضة أمثلة لما يمكننا توريده، وليست مخزوناً. تُستخدم أسماء العلامات التجارية (شكمان، XCMG…) لوصف المنتجات فقط، وLEXD ليست وكيلاً رسمياً لهذه العلامات.',
  },
  quoteMessage: {
    fr: 'Bonjour LEXD, je souhaite un devis pour : ',
    en: 'Hello LEXD, I would like a quote for: ',
    zh: '您好 LEXD，我想询价：',
    ar: 'مرحباً LEXD، أرغب في عرض سعر لـ: ',
  },
} satisfies Record<string, Localized | Localized[]>;

export const quoteHref = (productName: string, locale: Locale) =>
  `https://wa.me/${CONTACT_CONFIG.WHATSAPP.CAMEROON.replace(/\D/g, '')}?text=${encodeURIComponent(
    CATALOGUE_UI.quoteMessage[locale] + productName,
  )}`;
