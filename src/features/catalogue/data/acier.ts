import type { CatalogueCategory } from '../types';

export const acier: CatalogueCategory = {
  slug: 'acier-toiture',
  name: { fr: 'Acier & toiture', en: 'Steel & roofing', zh: '钢材与屋面板', ar: 'الصلب والأسقف' },
  tagline: {
    fr: 'Tôles de toiture colorées, bobines galvanisées et profilés acier.',
    en: 'Coloured roof sheets, galvanised coils and steel sections.',
    zh: '彩钢屋面板、镀锌卷和型钢。',
    ar: 'صفائح أسقف ملونة، لفائف مجلفنة، ومقاطع صلب.',
  },
  intro: {
    fr: 'Matériaux en acier pour la construction et la revente : tôles prélaquées, bobines pour les fabricants de tôles, cornières et fers U. Nous vérifions l’épaisseur réelle et le revêtement avant le chargement, là où se jouent la plupart des litiges.',
    en: 'Steel materials for construction and resale: pre-painted roof sheets, coils for sheet makers, angles and channels. We check the real thickness and coating before loading, which is where most disputes start.',
    zh: '用于建筑和批发的钢材：彩涂屋面板、供压板厂使用的钢卷、角钢和槽钢。我们在装柜前核验实际厚度和镀层，这正是大多数纠纷的源头。',
    ar: 'مواد صلب للبناء وإعادة البيع: صفائح أسقف مطلية مسبقاً، لفائف لمصنّعي الصفائح، زوايا ومقاطع U. نتحقق من السماكة الفعلية والطلاء قبل التحميل، فهنا تبدأ معظم النزاعات.',
  },
  metaTitle: {
    fr: 'Tôles, bobines et profilés acier de Chine | LEXD',
    en: 'Roof Sheets, Steel Coils and Sections from China | LEXD',
    zh: '中国彩钢瓦、钢卷与型钢采购 | LEXD',
    ar: 'صفائح أسقف ولفائف ومقاطع صلب من الصين | LEXD',
  },
  metaDescription: {
    fr: 'Importez tôles de toiture colorées, bobines galvanisées, cornières et fers U de Chine vers l’Afrique. Contrôle d’épaisseur avant chargement. Devis WhatsApp.',
    en: 'Import coloured roof sheets, galvanised coils, steel angles and channels from China to Africa. Thickness check before loading. WhatsApp quote.',
    zh: '从中国进口彩钢屋面板、镀锌卷、角钢和槽钢到非洲。装柜前检测厚度。WhatsApp 询价。',
    ar: 'استورد صفائح أسقف ملونة ولفائف مجلفنة وزوايا ومقاطع U من الصين إلى أفريقيا. فحص السماكة قبل التحميل. عرض سعر عبر واتساب.',
  },
  products: [
    {
      id: 'roof-sheets',
      name: { fr: 'Tôles de toiture colorées', en: 'Coloured roof sheets', zh: '彩钢屋面板', ar: 'صفائح أسقف ملونة' },
      summary: {
        fr: 'Tôles prélaquées ondulées ou nervurées, coloris et longueurs à la demande.',
        en: 'Pre-painted corrugated or ribbed sheets, colours and lengths to order.',
        zh: '彩涂波纹板或梯形板，颜色和长度可定制。',
        ar: 'صفائح مطلية مسبقاً مموجة أو مضلعة، بالألوان والأطوال حسب الطلب.',
      },
      images: ['/images/catalogue/roof-sheets-coloured.jpg'],
    },
    {
      id: 'galvanised-coils',
      name: { fr: 'Bobines d’acier galvanisé', en: 'Galvanised steel coils', zh: '镀锌钢卷', ar: 'لفائف صلب مجلفن' },
      summary: {
        fr: 'Matière première pour les fabricants de tôles et de profilés, en galvanisé ou prélaqué.',
        en: 'Raw material for roof-sheet and profile makers, galvanised or pre-painted.',
        zh: '压板厂和型材厂的原材料，镀锌或彩涂均可。',
        ar: 'مادة خام لمصنّعي صفائح الأسقف والمقاطع، مجلفنة أو مطلية مسبقاً.',
      },
      images: ['/images/catalogue/galvanised-steel-coils.jpg'],
    },
    {
      id: 'steel-angles',
      name: { fr: 'Cornières acier', en: 'Steel angles', zh: '角钢', ar: 'زوايا صلب' },
      summary: {
        fr: 'Cornières à ailes égales pour charpentes, portails et structures métalliques.',
        en: 'Equal-leg angles for frames, gates and steel structures.',
        zh: '等边角钢，用于屋架、大门和钢结构。',
        ar: 'زوايا متساوية الأضلاع للهياكل والبوابات والإنشاءات المعدنية.',
      },
      images: ['/images/catalogue/steel-angles.jpg'],
    },
    {
      id: 'steel-channels',
      name: { fr: 'Fers U (profilés en U)', en: 'Steel channels (U sections)', zh: '槽钢', ar: 'مقاطع صلب على شكل U' },
      summary: {
        fr: 'Profilés en U pour poutres, châssis et ossatures.',
        en: 'U sections for beams, frames and framing.',
        zh: '槽钢，用于梁、底架和框架结构。',
        ar: 'مقاطع U للعوارض والهياكل والإطارات.',
      },
      images: [],
    },
  ],
  guideTitle: {
    fr: 'Les points à vérifier sur l’acier',
    en: 'What to check on steel',
    zh: '钢材采购的检查要点',
    ar: 'ما يجب التحقق منه في الصلب',
  },
  guide: [
    {
      fr: 'Exigez l’épaisseur réelle, revêtement compris ou non : un écart de 0,05 mm change le prix et la solidité.',
      en: 'Insist on the real thickness, stating whether coating is included: a 0.05 mm gap changes both price and strength.',
      zh: '要求明确实际厚度以及是否含镀层：0.05 毫米的差异就会影响价格和强度。',
      ar: 'اشترط السماكة الفعلية مع توضيح ما إذا كانت تشمل الطلاء: فرق 0.05 مم يغيّر السعر والمتانة.',
    },
    {
      fr: 'Précisez la masse de zinc (par exemple Z60, Z80) : c’est elle qui protège la tôle de la rouille.',
      en: 'Specify the zinc coating mass (for example Z60, Z80): it is what protects the sheet from rust.',
      zh: '注明镀锌量（如 Z60、Z80），它决定钢板的防锈能力。',
      ar: 'حدد كتلة طبقة الزنك (مثل Z60 أو Z80): فهي التي تحمي الصفيحة من الصدأ.',
    },
    {
      fr: 'L’acier atteint vite le poids maximal d’un conteneur avant son volume : nous optimisons le chargement en tonnes.',
      en: 'Steel reaches a container’s weight limit long before its volume limit: we plan loading by tonnage.',
      zh: '钢材往往先达到集装箱限重而非容积上限：我们按吨位规划装柜。',
      ar: 'يصل الصلب إلى الحد الأقصى لوزن الحاوية قبل حجمها بكثير: لذا نخطط التحميل حسب الأطنان.',
    },
    {
      fr: 'Le cours de l’acier change chaque semaine : un devis est valable quelques jours seulement.',
      en: 'Steel prices change every week: a quote is only valid for a few days.',
      zh: '钢材价格每周变动，报价有效期通常只有几天。',
      ar: 'تتغير أسعار الصلب كل أسبوع: لذا يكون عرض السعر صالحاً لبضعة أيام فقط.',
    },
  ],
  faqs: [
    {
      q: { fr: 'Quelle quantité minimum puis-je commander ?', en: 'What is the minimum order?', zh: '最小起订量是多少？', ar: 'ما الحد الأدنى للطلب؟' },
      a: {
        fr: 'Pour l’acier, le plus économique est un conteneur complet. Pour de plus petites quantités, demandez-nous : nous pouvons parfois grouper avec d’autres envois.',
        en: 'For steel, a full container is the most economical. For smaller quantities, ask us: we can sometimes consolidate with other shipments.',
        zh: '钢材以整柜最为经济。数量较少时请咨询我们，有时可与其他货物拼柜。',
        ar: 'بالنسبة للصلب، الحاوية الكاملة هي الأكثر اقتصاداً. للكميات الأصغر اسألنا: فأحياناً يمكن تجميعها مع شحنات أخرى.',
      },
    },
    {
      q: { fr: 'Les couleurs de tôle sont-elles personnalisables ?', en: 'Can I choose the sheet colours?', zh: '屋面板颜色可以定制吗？', ar: 'هل يمكن اختيار ألوان الصفائح؟' },
      a: {
        fr: 'Oui. Envoyez-nous la référence RAL ou une photo de la couleur ; l’usine envoie un échantillon ou une photo avant production.',
        en: 'Yes. Send us the RAL code or a photo of the colour; the factory sends a sample or photo before production.',
        zh: '可以。请提供 RAL 色号或颜色照片，工厂会在生产前提供样品或照片确认。',
        ar: 'نعم. أرسل لنا رمز RAL أو صورة للون، ويرسل المصنع عينة أو صورة قبل الإنتاج.',
      },
    },
    {
      q: { fr: 'Comment savoir si l’épaisseur livrée est la bonne ?', en: 'How do I know the delivered thickness is right?', zh: '如何确认交付厚度符合要求？', ar: 'كيف أتأكد من أن السماكة المسلّمة صحيحة؟' },
      a: {
        fr: 'Nous mesurons des échantillons au micromètre avant le chargement et vous envoyons les photos des mesures avant le solde.',
        en: 'We measure samples with a micrometer before loading and send you photos of the readings before the balance is paid.',
        zh: '装柜前我们用千分尺抽样测量，并在您支付尾款前发送测量照片。',
        ar: 'نقيس عينات بالميكرومتر قبل التحميل ونرسل لك صور القياسات قبل دفع المبلغ المتبقي.',
      },
    },
  ],
  industryPath: '/industries/materiaux-construction-chine-afrique',
};
