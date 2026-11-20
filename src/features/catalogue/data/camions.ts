import type { CatalogueCategory } from '../types';

export const camions: CatalogueCategory = {
  slug: 'camions',
  name: { fr: 'Camions', en: 'Trucks', zh: '卡车', ar: 'الشاحنات' },
  tagline: {
    fr: 'Tracteurs routiers et porteurs de marques chinoises, comme Shacman.',
    en: 'Tractor units and rigid trucks from Chinese makers such as Shacman.',
    zh: '陕汽等中国品牌的牵引车和载货车。',
    ar: 'رؤوس قاطرة وشاحنات من مصنّعين صينيين مثل شكمان (Shacman).',
  },
  intro: {
    fr: 'Tracteurs routiers 6x4 pour le transport de conteneurs et de marchandises lourdes. Nous trouvons la configuration adaptée à vos routes, vérifions le camion et ses documents en Chine, puis l’expédions en roulier.',
    en: '6x4 tractor units for container and heavy-goods haulage. We find the configuration that suits your roads, check the truck and its papers in China, then ship it roll-on/roll-off.',
    zh: '用于集装箱和重货运输的 6x4 牵引车。我们根据您的路况选择合适配置，在中国核验车辆及其文件，并通过滚装船发运。',
    ar: 'رؤوس قاطرة 6x4 لنقل الحاويات والبضائع الثقيلة. نجد الإعداد المناسب لطرقك، ونفحص الشاحنة ووثائقها في الصين، ثم نشحنها بسفن الدحرجة (RoRo).',
  },
  metaTitle: {
    fr: 'Camions tracteurs de Chine (type Shacman) vers l’Afrique | LEXD',
    en: 'Tractor Trucks from China (Shacman type) to Africa | LEXD',
    zh: '中国牵引车（陕汽等）出口非洲 | LEXD',
    ar: 'شاحنات قاطرة من الصين (طراز شكمان) إلى أفريقيا | LEXD',
  },
  metaDescription: {
    fr: 'Importez un camion tracteur 6x4 de Chine vers l’Afrique : sourcing, contrôle du véhicule et des documents, expédition en roulier. Devis sur WhatsApp.',
    en: 'Import a 6x4 tractor truck from China to Africa: sourcing, vehicle and paperwork checks, roll-on/roll-off shipping. Get a quote on WhatsApp.',
    zh: '从中国进口 6x4 牵引车到非洲：采购、车辆及文件核验、滚装运输。WhatsApp 询价。',
    ar: 'استورد شاحنة قاطرة 6x4 من الصين إلى أفريقيا: التوريد، فحص المركبة والوثائق، والشحن بسفن الدحرجة. اطلب عرض سعر عبر واتساب.',
  },
  products: [
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
  ],
  guideTitle: {
    fr: 'Bien choisir son camion',
    en: 'Choosing the right truck',
    zh: '如何选择卡车',
    ar: 'كيف تختار الشاحنة المناسبة',
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
      fr: 'Contrôlez le numéro de châssis (VIN) sur le camion et sur les documents d’exportation avant le solde.',
      en: 'Check the chassis number (VIN) on the truck and on the export papers before the balance.',
      zh: '付尾款前核对车辆和出口文件上的车架号（VIN）是否一致。',
      ar: 'تحقق من رقم الهيكل (VIN) على الشاحنة وفي وثائق التصدير قبل دفع المبلغ المتبقي.',
    },
  ],
  faqs: [
    {
      q: { fr: 'Êtes-vous concessionnaire Shacman ?', en: 'Are you a Shacman dealer?', zh: '你们是陕汽经销商吗？', ar: 'هل أنتم وكلاء لشكمان؟' },
      a: {
        fr: 'Non. LEXD est un agent de sourcing et transitaire : nous achetons auprès de vendeurs en Chine pour votre compte. La marque est citée uniquement pour décrire le produit.',
        en: 'No. LEXD is a sourcing agent and freight forwarder: we buy from sellers in China on your behalf. The brand is mentioned only to describe the product.',
        zh: '不是。LEXD 是采购代理和货运代理，代表您向中国卖家采购。品牌名称仅用于描述产品。',
        ar: 'لا. LEXD وكيل توريد ووكيل شحن: نشتري من البائعين في الصين نيابة عنك. ويُذكر اسم العلامة لوصف المنتج فقط.',
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
      q: { fr: 'Comment le camion est-il expédié ?', en: 'How is the truck shipped?', zh: '卡车如何运输？', ar: 'كيف تُشحن الشاحنة؟' },
      a: {
        fr: 'En roulier (RoRo) : le camion est conduit dans le navire et en ressort au port d’arrivée. Il peut aussi transporter un chargement si la compagnie l’accepte.',
        en: 'By roll-on/roll-off: the truck is driven onto the ship and off at the destination port. It can sometimes carry cargo if the shipping line accepts it.',
        zh: '采用滚装运输：卡车直接开上船，到港后开下。若船公司允许，车上也可装载货物。',
        ar: 'بسفن الدحرجة (RoRo): تُقاد الشاحنة إلى داخل السفينة وتخرج منها في ميناء الوصول. ويمكن أحياناً أن تحمل بضائع إذا قبلت شركة الشحن ذلك.',
      },
    },
  ],
};
