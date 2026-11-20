import type { CatalogueCategory } from '../types';

export const engins: CatalogueCategory = {
  slug: 'engins-de-chantier',
  name: {
    fr: 'Engins de chantier',
    en: 'Construction equipment',
    zh: '工程机械',
    ar: 'معدات البناء',
  },
  tagline: {
    fr: 'Tractopelles et chargeuses sur pneus, sourcées auprès d’usines chinoises.',
    en: 'Backhoe loaders and wheel loaders, sourced from Chinese factories.',
    zh: '挖掘装载机和轮式装载机，直接从中国工厂采购。',
    ar: 'لوادر حفارة ولوادر بعجلات، يتم توريدها من مصانع صينية.',
  },
  intro: {
    fr: 'Tractopelles et chargeuses pour les chantiers, carrières et travaux routiers. Nous trouvons le modèle adapté à votre budget, contrôlons la machine en Chine avant le paiement final et organisons le transport jusqu’à votre port.',
    en: 'Backhoe loaders and wheel loaders for building sites, quarries and road works. We find the right model for your budget, inspect the machine in China before the final payment, and ship it to your port.',
    zh: '适用于工地、采石场和道路工程的挖掘装载机和轮式装载机。我们根据您的预算寻找合适的机型，在尾款支付前于中国现场验机，并安排运输至您的港口。',
    ar: 'لوادر حفارة ولوادر بعجلات لمواقع البناء والمحاجر وأعمال الطرق. نجد الطراز المناسب لميزانيتك، ونفحص الآلة في الصين قبل الدفعة النهائية، وننظم شحنها إلى ميناء بلدك.',
  },
  metaTitle: {
    fr: 'Engins de chantier de Chine : tractopelles et chargeuses | LEXD',
    en: 'Construction Equipment from China: Backhoe & Wheel Loaders | LEXD',
    zh: '中国工程机械采购：挖掘装载机与轮式装载机 | LEXD',
    ar: 'معدات بناء من الصين: لوادر حفارة ولوادر بعجلات | LEXD',
  },
  metaDescription: {
    fr: 'Importez tractopelles et chargeuses sur pneus de Chine vers l’Afrique. Sourcing usine, inspection avant expédition, transport maritime. Devis sur WhatsApp.',
    en: 'Import backhoe loaders and wheel loaders from China to Africa. Factory sourcing, pre-shipment inspection and sea freight. Get a quote on WhatsApp.',
    zh: '从中国进口挖掘装载机和轮式装载机到非洲。工厂采购、发货前检验、海运。通过 WhatsApp 获取报价。',
    ar: 'استورد لوادر حفارة ولوادر بعجلات من الصين إلى أفريقيا. توريد من المصنع، فحص قبل الشحن، وشحن بحري. اطلب عرض سعر عبر واتساب.',
  },
  products: [
    {
      id: 'backhoe-loader',
      name: { fr: 'Tractopelle', en: 'Backhoe loader', zh: '挖掘装载机', ar: 'لودر حفار (باكهو)' },
      summary: {
        fr: 'Godet de chargement à l’avant, bras de pelle à l’arrière : une seule machine pour creuser, charger et niveler.',
        en: 'Loader bucket at the front, digging arm at the back: one machine to dig, load and level.',
        zh: '前装载斗，后挖掘臂：一台机器即可完成挖掘、装载和平整。',
        ar: 'دلو تحميل في الأمام وذراع حفر في الخلف: آلة واحدة للحفر والتحميل والتسوية.',
      },
      images: ['/images/catalogue/backhoe-loader.jpg'],
    },
    {
      id: 'wheel-loader',
      name: { fr: 'Chargeuse sur pneus (type ZL50)', en: 'Wheel loader (ZL50 class)', zh: '轮式装载机（ZL50 级）', ar: 'لودر بعجلات (فئة ZL50)' },
      summary: {
        fr: 'Chargeuse de la classe 5 tonnes, très répandue pour le sable, le gravier et les carrières.',
        en: '5-tonne class loader, widely used for sand, gravel and quarry work.',
        zh: '5 吨级装载机，广泛用于砂石料和采石场作业。',
        ar: 'لودر من فئة 5 أطنان، شائع الاستخدام للرمل والحصى وأعمال المحاجر.',
      },
      images: ['/images/catalogue/wheel-loader-zl50gn.jpg'],
    },
  ],
  guideTitle: {
    fr: 'Avant d’acheter un engin',
    en: 'Before you buy a machine',
    zh: '购买工程机械前须知',
    ar: 'قبل شراء آلة',
  },
  guide: [
    {
      fr: 'Précisez l’usage (terrassement, carrière, route) et la charge à déplacer : c’est ce qui fixe la taille du godet et la puissance.',
      en: 'State the job (earthworks, quarry, roads) and the load to move: this sets the bucket size and engine power.',
      zh: '说明用途（土方、采石、道路）和需搬运的载荷，这决定了铲斗容量和发动机功率。',
      ar: 'حدد نوع العمل (حفر، محجر، طرق) والحمولة المطلوب نقلها: فهذا ما يحدد حجم الدلو وقوة المحرك.',
    },
    {
      fr: 'Demandez quelle marque de moteur et de transmission est montée : elle conditionne les pièces détachées disponibles chez vous.',
      en: 'Ask which engine and transmission brands are fitted: they decide which spare parts you can find locally.',
      zh: '询问所配发动机和变速箱的品牌，这关系到您当地能否买到配件。',
      ar: 'اسأل عن علامة المحرك وناقل الحركة المركبين: فهي تحدد قطع الغيار المتوفرة محلياً.',
    },
    {
      fr: 'Faites inspecter la machine en marche avant le solde : vidéo de démarrage, test hydraulique, numéro de châssis.',
      en: 'Have the machine inspected running before the balance: start-up video, hydraulic test, chassis number.',
      zh: '付尾款前进行开机验机：启动视频、液压测试、核对车架号。',
      ar: 'افحص الآلة وهي تعمل قبل دفع المبلغ المتبقي: فيديو تشغيل، اختبار هيدروليكي، رقم الهيكل.',
    },
    {
      fr: 'Prévoyez le mode de transport : roulier (RoRo) ou flat-rack selon la taille, et un lot de pièces d’usure à expédier avec.',
      en: 'Plan the shipping mode: roll-on/roll-off or flat-rack depending on size, plus a set of wear parts shipped alongside.',
      zh: '规划运输方式：根据尺寸选择滚装船或框架箱，并随机发运一套易损件。',
      ar: 'خطط لطريقة الشحن: سفينة دحرجة (RoRo) أو حاوية مسطحة حسب الحجم، مع مجموعة قطع استهلاكية تُشحن معها.',
    },
  ],
  faqs: [
    {
      q: { fr: 'Les engins sont-ils neufs ou d’occasion ?', en: 'Are the machines new or used?', zh: '机器是新的还是二手的？', ar: 'هل الآلات جديدة أم مستعملة؟' },
      a: {
        fr: 'Les deux sont possibles. Dites-nous votre budget et l’état souhaité ; nous vous envoyons des offres avec photos et vidéos de la machine réelle.',
        en: 'Both are possible. Tell us your budget and the condition you want; we send offers with photos and videos of the actual machine.',
        zh: '两者均可。告诉我们您的预算和期望的成色，我们会发送实机照片和视频的报价。',
        ar: 'كلاهما ممكن. أخبرنا بميزانيتك والحالة المطلوبة، ونرسل لك عروضاً مع صور وفيديوهات للآلة الفعلية.',
      },
    },
    {
      q: { fr: 'Pourquoi aucun prix n’est affiché ?', en: 'Why are no prices shown?', zh: '为什么不显示价格？', ar: 'لماذا لا تظهر الأسعار؟' },
      a: {
        fr: 'Le prix dépend du modèle, des options, du cours de l’acier et du fret du moment. Nous établissons un devis à jour pour chaque demande.',
        en: 'The price depends on the model, options, steel prices and current freight rates. We prepare an up-to-date quote for each request.',
        zh: '价格取决于机型、配置、钢材行情和当期运费。我们会针对每个询价提供最新报价。',
        ar: 'يعتمد السعر على الطراز والخيارات وأسعار الصلب وأسعار الشحن الحالية. نعدّ عرض سعر محدّثاً لكل طلب.',
      },
    },
    {
      q: { fr: 'Combien de temps faut-il pour recevoir l’engin ?', en: 'How long until the machine arrives?', zh: '多久能收到机器？', ar: 'كم يستغرق وصول الآلة؟' },
      a: {
        fr: 'Comptez le délai de fabrication ou de préparation en usine, puis environ 60 à 75 jours de transport maritime vers l’Afrique de l’Ouest et centrale.',
        en: 'Allow for factory build or preparation time, then about 60 to 75 days of sea freight to West and Central Africa.',
        zh: '需加上工厂生产或备货时间，再加约 60 至 75 天海运至西非和中非。',
        ar: 'احسب مدة التصنيع أو التجهيز في المصنع، ثم نحو 60 إلى 75 يوماً من الشحن البحري إلى غرب ووسط أفريقيا.',
      },
    },
  ],
  industryPath: '/industries/machines-chine-afrique',
};
