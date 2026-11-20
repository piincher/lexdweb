import type { CatalogueCategory } from '../types';

export const forage: CatalogueCategory = {
  slug: 'forage',
  name: { fr: 'Forage', en: 'Drilling rigs', zh: '钻机', ar: 'معدات الحفر' },
  tagline: {
    fr: 'Foreuses de puits d’eau sur camion, sur chenilles ou sur remorque.',
    en: 'Water-well drilling rigs: truck-mounted, crawler and trailer.',
    zh: '水井钻机：车载式、履带式和拖车式。',
    ar: 'حفارات آبار المياه: محمولة على شاحنة، على جنازير، أو على مقطورة.',
  },
  intro: {
    fr: 'Foreuses pour puits d’eau, de la petite unité sur remorque pour forages villageois aux machines sur camion pour les entreprises de forage. Nous comparons plusieurs usines, vérifions l’équipement livré avec la foreuse et organisons l’expédition.',
    en: 'Water-well rigs, from small trailer units for village boreholes to truck-mounted machines for drilling companies. We compare several factories, check the tooling supplied with the rig and arrange shipping.',
    zh: '水井钻机，从适合村庄打井的小型拖车式钻机到钻井公司使用的车载钻机。我们对比多家工厂，核查随机配套钻具，并安排发运。',
    ar: 'حفارات آبار المياه، من الوحدات الصغيرة على مقطورة لآبار القرى إلى الآلات المحمولة على شاحنات لشركات الحفر. نقارن عدة مصانع، ونتحقق من الأدوات المرفقة بالحفارة، وننظم الشحن.',
  },
  metaTitle: {
    fr: 'Foreuses de puits d’eau de Chine : camion, chenilles, remorque | LEXD',
    en: 'Water Well Drilling Rigs from China: Truck, Crawler, Trailer | LEXD',
    zh: '中国水井钻机采购：车载、履带、拖车式 | LEXD',
    ar: 'حفارات آبار مياه من الصين: شاحنة، جنازير، مقطورة | LEXD',
  },
  metaDescription: {
    fr: 'Importez une foreuse de puits d’eau de Chine vers l’Afrique : modèles sur camion, sur chenilles ou sur remorque. Comparaison d’usines, inspection, transport. Devis WhatsApp.',
    en: 'Import a water-well drilling rig from China to Africa: truck-mounted, crawler or trailer models. Factory comparison, inspection and shipping. WhatsApp quote.',
    zh: '从中国进口水井钻机到非洲：车载式、履带式或拖车式。工厂对比、检验、运输。WhatsApp 询价。',
    ar: 'استورد حفارة آبار مياه من الصين إلى أفريقيا: طرازات على شاحنة أو جنازير أو مقطورة. مقارنة المصانع، الفحص، والشحن. عرض سعر عبر واتساب.',
  },
  products: [
    {
      id: 'rig-truck',
      name: { fr: 'Foreuse sur camion', en: 'Truck-mounted drilling rig', zh: '车载式钻机', ar: 'حفارة محمولة على شاحنة' },
      summary: {
        fr: 'Foreuse et compresseur montés sur un porteur : se déplace seule d’un site à l’autre, pour les entreprises de forage.',
        en: 'Rig and compressor mounted on a truck chassis: drives itself from site to site, for drilling companies.',
        zh: '钻机与空压机安装在卡车底盘上，可自行转场，适合钻井公司。',
        ar: 'الحفارة والضاغط مركبان على هيكل شاحنة: تنتقل بنفسها من موقع لآخر، مناسبة لشركات الحفر.',
      },
      images: ['/images/catalogue/water-well-rig-truck.jpg', '/images/catalogue/water-well-rig-truck-heavy.jpg'],
    },
    {
      id: 'rig-crawler',
      name: { fr: 'Foreuse sur chenilles', en: 'Crawler drilling rig', zh: '履带式钻机', ar: 'حفارة على جنازير' },
      summary: {
        fr: 'Montée sur chenilles pour les terrains difficiles et les sites sans piste carrossable.',
        en: 'Mounted on tracks for rough ground and sites with no road access.',
        zh: '履带底盘，适合复杂地形和没有道路的施工点。',
        ar: 'مركبة على جنازير للأراضي الوعرة والمواقع التي لا توجد بها طرق.',
      },
      images: ['/images/catalogue/water-well-rig-crawler.jpg'],
    },
    {
      id: 'rig-trailer',
      name: { fr: 'Petite foreuse sur remorque', en: 'Small trailer drilling rig', zh: '小型拖车式钻机', ar: 'حفارة صغيرة على مقطورة' },
      summary: {
        fr: 'Unité compacte à moteur diesel, tractée par un pick-up : idéale pour les forages villageois et agricoles peu profonds.',
        en: 'Compact diesel unit towed by a pick-up: suited to shallow village and farm boreholes.',
        zh: '柴油动力小型钻机，可由皮卡牵引，适合村庄和农场的浅井。',
        ar: 'وحدة مدمجة بمحرك ديزل تسحبها سيارة بيك أب: مناسبة لآبار القرى والمزارع الضحلة.',
      },
      images: ['/images/catalogue/water-well-rig-trailer.jpg'],
    },
  ],
  guideTitle: {
    fr: 'Choisir sa foreuse',
    en: 'Choosing a drilling rig',
    zh: '如何选择钻机',
    ar: 'كيف تختار الحفارة',
  },
  guide: [
    {
      fr: 'Indiquez la profondeur visée et le type de sol (sable, latérite, roche) : c’est le premier critère de choix.',
      en: 'Give the target depth and ground type (sand, laterite, rock): this is the first selection criterion.',
      zh: '提供目标井深和地层类型（砂层、红土、岩石），这是选型的首要依据。',
      ar: 'حدد العمق المطلوب ونوع التربة (رمل، لاتيريت، صخر): هذا هو المعيار الأول للاختيار.',
    },
    {
      fr: 'En roche, une foreuse au marteau fond-de-trou demande un compresseur adapté : vérifiez s’il est inclus ou à acheter à part.',
      en: 'In rock, a down-the-hole hammer rig needs a matching air compressor: check whether it is included or sold separately.',
      zh: '岩层需使用潜孔锤钻进，必须配套相应空压机：确认是否包含在报价内。',
      ar: 'في الصخر تحتاج حفارة المطرقة إلى ضاغط هواء مناسب: تحقق مما إذا كان مشمولاً أم يُباع منفصلاً.',
    },
    {
      fr: 'Faites lister les tiges, outils de forage et pièces de rechange fournis : ils pèsent lourd dans le coût réel.',
      en: 'Ask for a list of the drill pipes, bits and spare parts supplied: they weigh heavily in the real cost.',
      zh: '要求列出随机提供的钻杆、钻头和备件清单，它们在实际成本中占比很大。',
      ar: 'اطلب قائمة بأنابيب الحفر والرؤوس وقطع الغيار المرفقة: فهي تؤثر كثيراً في التكلفة الفعلية.',
    },
    {
      fr: 'Demandez une formation vidéo ou un technicien à l’arrivée si vos équipes découvrent la machine.',
      en: 'Ask for video training, or a technician on arrival, if your crew is new to the machine.',
      zh: '如果您的团队初次使用该设备，可要求提供视频培训或到货后派技术员指导。',
      ar: 'اطلب تدريباً بالفيديو أو فنياً عند الوصول إذا كان فريقك جديداً على الآلة.',
    },
  ],
  faqs: [
    {
      q: { fr: 'Quelle profondeur peut atteindre une foreuse ?', en: 'How deep can a rig drill?', zh: '钻机能钻多深？', ar: 'ما العمق الذي يمكن أن تصل إليه الحفارة؟' },
      a: {
        fr: 'Cela dépend du modèle et du sol. Donnez-nous votre profondeur cible et nous ne proposerons que des machines capables de l’atteindre avec marge.',
        en: 'It depends on the model and the ground. Give us your target depth and we only propose rigs that reach it with margin.',
        zh: '这取决于机型和地层。告诉我们目标深度，我们只推荐能留有余量达到该深度的钻机。',
        ar: 'يعتمد ذلك على الطراز ونوع التربة. أعطنا العمق المطلوب ولن نقترح إلا حفارات تبلغه بهامش أمان.',
      },
    },
    {
      q: { fr: 'Le compresseur est-il fourni ?', en: 'Is the compressor included?', zh: '是否包含空压机？', ar: 'هل الضاغط مشمول؟' },
      a: {
        fr: 'Sur les modèles sur camion, il est souvent monté sur le porteur. Pour les autres, il est parfois vendu à part : le devis le précise toujours.',
        en: 'On truck-mounted models it is often fitted on the chassis. For others it is sometimes sold separately: the quote always says so.',
        zh: '车载钻机通常将空压机装在底盘上；其他机型有时需单独购买，报价中会写明。',
        ar: 'في الطرازات المحمولة على شاحنة يكون غالباً مركباً على الهيكل. وفي غيرها يُباع أحياناً منفصلاً: ويوضح العرض ذلك دائماً.',
      },
    },
    {
      q: { fr: 'Comment la foreuse est-elle expédiée ?', en: 'How is the rig shipped?', zh: '钻机如何发运？', ar: 'كيف تُشحن الحفارة؟' },
      a: {
        fr: 'Les petites foreuses voyagent en conteneur. Les modèles sur camion ou sur chenilles partent en roulier (RoRo) ou sur flat-rack selon leurs dimensions.',
        en: 'Small rigs travel in a container. Truck and crawler models go by roll-on/roll-off or on a flat-rack depending on their size.',
        zh: '小型钻机装集装箱运输；车载式和履带式根据尺寸采用滚装船或框架箱运输。',
        ar: 'تُشحن الحفارات الصغيرة في حاوية. أما الطرازات على شاحنة أو جنازير فتُشحن بسفن الدحرجة (RoRo) أو على حاوية مسطحة حسب حجمها.',
      },
    },
  ],
  industryPath: '/industries/machines-chine-afrique',
};
