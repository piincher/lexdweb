import type { CatalogueCategory } from '../types';

export const camions: CatalogueCategory = {
  slug: 'camions',
  name: { fr: 'Camions & remorques', en: 'Trucks & trailers', zh: '卡车与挂车', ar: 'الشاحنات والمقطورات' },
  tagline: {
    fr: 'Bennes, tracteurs, ampliroll, semi-remorques plateau et citerne (HOWO, Shacman…).',
    en: 'Dump trucks, tractor units, hook-lifts, flatbed and tanker semi-trailers (HOWO, Shacman…).',
    zh: '自卸车、牵引车、勾臂车、平板及罐式半挂车（豪沃、陕汽等）。',
    ar: 'شاحنات قلاب، رؤوس قاطرة، شاحنات خطافية، ونصف مقطورات مسطحة وصهاريج (HOWO، شكمان…).',
  },
  intro: {
    fr: 'Camions et remorques pour le transport de matériaux, de conteneurs et de carburant. Nous trouvons la configuration adaptée à vos routes et à vos charges, vérifions le véhicule et ses documents en Chine, puis l’expédions en roulier.',
    en: 'Trucks and trailers for hauling materials, containers and fuel. We find the configuration that suits your roads and loads, check the vehicle and its papers in China, then ship it roll-on/roll-off.',
    zh: '用于运输建材、集装箱和燃油的卡车与挂车。我们根据您的路况和载重选择合适配置，在中国核验车辆及其文件，并通过滚装船发运。',
    ar: 'شاحنات ومقطورات لنقل المواد والحاويات والوقود. نجد الإعداد المناسب لطرقك وحمولاتك، ونفحص المركبة ووثائقها في الصين، ثم نشحنها بسفن الدحرجة (RoRo).',
  },
  metaTitle: {
    fr: 'Camions benne, tracteurs et semi-remorques de Chine | LEXD',
    en: 'Dump Trucks, Tractor Units and Semi-Trailers from China | LEXD',
    zh: '中国自卸车、牵引车与半挂车出口非洲 | LEXD',
    ar: 'شاحنات قلاب ورؤوس قاطرة ونصف مقطورات من الصين | LEXD',
  },
  metaDescription: {
    fr: 'Importez camions benne, tracteurs 6x4, ampliroll, semi-remorques plateau et citernes de Chine vers l’Afrique. Contrôle du véhicule, expédition en roulier. Devis WhatsApp.',
    en: 'Import dump trucks, 6x4 tractor units, hook-lift trucks, flatbed and tanker semi-trailers from China to Africa. Vehicle checks, roll-on/roll-off shipping. WhatsApp quote.',
    zh: '从中国进口自卸车、6x4 牵引车、勾臂车、平板及罐式半挂车到非洲。车辆核验、滚装运输。WhatsApp 询价。',
    ar: 'استورد شاحنات قلاب ورؤوس قاطرة 6x4 وشاحنات خطافية ونصف مقطورات مسطحة وصهاريج من الصين إلى أفريقيا. فحص المركبة والشحن بسفن الدحرجة. عرض سعر عبر واتساب.',
  },
  products: [
    {
      id: 'dump-truck',
      name: { fr: 'Camion benne 6x4 (type HOWO)', en: '6x4 dump truck (HOWO type)', zh: '6x4 自卸车（豪沃等）', ar: 'شاحنة قلاب 6x4 (طراز HOWO)' },
      summary: {
        fr: 'Benne basculante pour sable, gravier, latérite et déblais de chantier.',
        en: 'Tipper body for sand, gravel, laterite and site spoil.',
        zh: '自卸车厢，适合运输砂石、红土和工地渣土。',
        ar: 'صندوق قلاب لنقل الرمل والحصى واللاتيريت ومخلفات الحفر.',
      },
      images: [
        '/images/catalogue/dump-trucks-red.jpg',
        '/images/catalogue/dump-truck-tipping.jpg',
        '/images/catalogue/dump-truck-front.jpg',
      ],
    },
    {
      id: 'tractor-truck',
      name: { fr: 'Tracteur routier 6x4 (type Shacman)', en: '6x4 tractor unit (Shacman type)', zh: '6x4 牵引车（陕汽等）', ar: 'رأس قاطرة 6x4 (طراز شكمان)' },
      summary: {
        fr: 'Tracteur trois essieux pour semi-remorques porte-conteneurs, plateaux et citernes.',
        en: 'Three-axle tractor for container, flatbed and tanker semi-trailers.',
        zh: '三轴牵引车，可牵引集装箱、平板和罐式半挂车。',
        ar: 'قاطرة بثلاثة محاور لنصف مقطورات الحاويات والمنصات والصهاريج.',
      },
      images: ['/images/catalogue/shacman-tractor-truck.jpg', '/images/catalogue/shacman-tractor-truck-chassis.jpg'],
    },
    {
      id: 'hook-lift-truck',
      name: { fr: 'Camion ampliroll (bras de levage)', en: 'Hook-lift truck', zh: '勾臂式垃圾车', ar: 'شاحنة بذراع خطافي (هوك ليفت)' },
      summary: {
        fr: 'Charge et dépose seul ses caissons : collecte des déchets, chantiers, matériaux en vrac.',
        en: 'Loads and drops its own containers: waste collection, building sites, bulk materials.',
        zh: '可自行装卸箱体，适用于垃圾收运、工地和散装物料。',
        ar: 'تحمّل وتُنزل حاوياتها بنفسها: جمع النفايات، مواقع البناء، والمواد السائبة.',
      },
      images: ['/images/catalogue/hook-lift-truck.jpg'],
    },
    {
      id: 'flatbed-trailer',
      name: { fr: 'Semi-remorque plateau', en: 'Flatbed semi-trailer', zh: '平板半挂车', ar: 'نصف مقطورة مسطحة' },
      summary: {
        fr: 'Plateau 3 ou 4 essieux avec verrous pour conteneurs 20 et 40 pieds, ou chargement général.',
        en: '3 or 4-axle flatbed with twist locks for 20 and 40-foot containers, or general cargo.',
        zh: '3 轴或 4 轴平板，带集装箱锁具，可运 20 尺和 40 尺集装箱或普通货物。',
        ar: 'منصة بثلاثة أو أربعة محاور مع أقفال لحاويات 20 و40 قدماً أو للبضائع العامة.',
      },
      images: ['/images/catalogue/flatbed-semi-trailer.jpg', '/images/catalogue/flatbed-semi-trailers-stacked.jpg'],
    },
    {
      id: 'fuel-tanker',
      name: { fr: 'Semi-remorque citerne à carburant', en: 'Fuel tanker semi-trailer', zh: '油罐半挂车', ar: 'نصف مقطورة صهريج وقود' },
      summary: {
        fr: 'Citerne compartimentée pour gasoil, essence ou huiles ; capacité et nombre de compartiments à la demande.',
        en: 'Compartmented tank for diesel, petrol or oils; capacity and number of compartments to order.',
        zh: '分仓罐体，可装柴油、汽油或油品，容量和仓数可定制。',
        ar: 'صهريج مقسّم إلى حجرات للديزل أو البنزين أو الزيوت؛ السعة وعدد الحجرات حسب الطلب.',
      },
      images: ['/images/catalogue/fuel-tanker-semi-trailer.jpg'],
    },
  ],
  guideTitle: {
    fr: 'Bien choisir son camion ou sa remorque',
    en: 'Choosing the right truck or trailer',
    zh: '如何选择卡车或挂车',
    ar: 'كيف تختار الشاحنة أو المقطورة المناسبة',
  },
  guide: [
    {
      fr: 'Vérifiez les règles d’importation de votre pays : certains limitent l’âge des véhicules ou imposent une norme d’émissions.',
      en: 'Check your country’s import rules: some cap vehicle age or require an emissions standard.',
      zh: '了解本国进口规定：部分国家限制车龄或要求特定排放标准。',
      ar: 'تحقق من قواعد الاستيراد في بلدك: بعض الدول تحدد عمر المركبة أو تشترط معيار انبعاثات.',
    },
    {
      fr: 'Choisissez la conduite à gauche et une configuration adaptée à vos routes (pistes, charges, climat).',
      en: 'Pick left-hand drive and a configuration suited to your roads (unpaved tracks, loads, climate).',
      zh: '选择左舵车型，并根据路况（土路、载重、气候）确定配置。',
      ar: 'اختر المقود على اليسار وإعداداً يناسب طرقك (طرق ترابية، الأحمال، المناخ).',
    },
    {
      fr: 'Demandez la marque du moteur et de la boîte de vitesses : c’est ce qui compte pour l’entretien et les pièces.',
      en: 'Ask for the engine and gearbox brands: they matter most for servicing and spare parts.',
      zh: '询问发动机和变速箱品牌，这对保养和配件最重要。',
      ar: 'اسأل عن علامة المحرك وعلبة التروس: فهي الأهم للصيانة وقطع الغيار.',
    },
    {
      fr: 'Pour une remorque, précisez la charge utile, le nombre d’essieux et, pour une citerne, la capacité et le produit transporté.',
      en: 'For a trailer, state the payload and number of axles; for a tanker, the capacity and the product carried.',
      zh: '挂车需说明载重和轴数；罐车还需说明容量和所运介质。',
      ar: 'للمقطورة حدد الحمولة وعدد المحاور، وللصهريج حدد السعة والمادة المنقولة.',
    },
    {
      fr: 'Contrôlez le numéro de châssis (VIN) sur le véhicule et sur les documents d’exportation avant le solde.',
      en: 'Check the chassis number (VIN) on the vehicle and on the export papers before the balance.',
      zh: '付尾款前核对车辆和出口文件上的车架号（VIN）是否一致。',
      ar: 'تحقق من رقم الهيكل (VIN) على المركبة وفي وثائق التصدير قبل دفع المبلغ المتبقي.',
    },
  ],
  faqs: [
    {
      q: {
        fr: 'Êtes-vous concessionnaire HOWO ou Shacman ?',
        en: 'Are you a HOWO or Shacman dealer?',
        zh: '你们是豪沃或陕汽的经销商吗？',
        ar: 'هل أنتم وكلاء لـ HOWO أو شكمان؟',
      },
      a: {
        fr: 'Non. LEXD est un agent de sourcing et transitaire : nous achetons auprès de vendeurs en Chine pour votre compte. Les marques sont citées uniquement pour décrire les produits.',
        en: 'No. LEXD is a sourcing agent and freight forwarder: we buy from sellers in China on your behalf. Brands are mentioned only to describe the products.',
        zh: '不是。LEXD 是采购代理和货运代理，代表您向中国卖家采购。品牌名称仅用于描述产品。',
        ar: 'لا. LEXD وكيل توريد ووكيل شحن: نشتري من البائعين في الصين نيابة عنك. وتُذكر أسماء العلامات لوصف المنتجات فقط.',
      },
    },
    {
      q: { fr: 'Neuf ou d’occasion ?', en: 'New or used?', zh: '新车还是二手车？', ar: 'جديدة أم مستعملة؟' },
      a: {
        fr: 'Les deux selon votre budget et les règles de votre pays. Pour l’occasion, nous envoyons photos, vidéo moteur et kilométrage avant tout paiement.',
        en: 'Both, depending on your budget and your country’s rules. For used trucks we send photos, an engine video and the mileage before any payment.',
        zh: '视您的预算和本国法规而定。二手车会在付款前提供照片、发动机视频和里程信息。',
        ar: 'كلاهما حسب ميزانيتك وقواعد بلدك. للشاحنات المستعملة نرسل صوراً وفيديو للمحرك وعدد الكيلومترات قبل أي دفعة.',
      },
    },
    {
      q: { fr: 'Comment camions et remorques sont-ils expédiés ?', en: 'How are trucks and trailers shipped?', zh: '卡车和挂车如何运输？', ar: 'كيف تُشحن الشاحنات والمقطورات؟' },
      a: {
        fr: 'En roulier (RoRo) : le camion est conduit dans le navire et en ressort au port d’arrivée. Les remorques voyagent en roulier ou sur flat-rack, parfois plusieurs empilées.',
        en: 'By roll-on/roll-off: the truck is driven onto the ship and off at the destination port. Trailers go roll-on/roll-off or on a flat-rack, sometimes several stacked together.',
        zh: '采用滚装运输：卡车直接开上船，到港后开下。挂车采用滚装或框架箱运输，有时可多台叠装。',
        ar: 'بسفن الدحرجة (RoRo): تُقاد الشاحنة إلى داخل السفينة وتخرج منها في ميناء الوصول. وتُشحن المقطورات بسفن الدحرجة أو على حاويات مسطحة، وأحياناً عدة مقطورات مكدسة معاً.',
      },
    },
  ],
};
