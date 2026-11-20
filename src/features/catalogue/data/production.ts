import type { CatalogueCategory } from '../types';

export const production: CatalogueCategory = {
  slug: 'machines-de-production',
  name: { fr: 'Machines de production', en: 'Production machines', zh: '生产设备', ar: 'آلات الإنتاج' },
  tagline: {
    fr: 'Profileuses de tôles, machines à parpaings et unités de traitement de minerai.',
    en: 'Roof-sheet roll formers, concrete block machines and mineral processing plants.',
    zh: '压瓦机、水泥砖机和选矿设备。',
    ar: 'آلات تشكيل صفائح الأسقف، آلات صنع البلوك، ووحدات معالجة المعادن.',
  },
  intro: {
    fr: 'Équipements pour produire sur place : profileuses qui transforment une bobine en tôles de toiture, machines à parpaings et lignes de traitement de minerai. Nous confirmons avec l’usine les formats, la tension électrique et la liste des pièces avant toute commande.',
    en: 'Equipment to produce locally: roll formers that turn a coil into roof sheets, concrete block machines and mineral processing lines. We confirm formats, voltage and the parts list with the factory before any order.',
    zh: '本地化生产设备：将钢卷加工成屋面板的压瓦机、水泥砖机以及选矿生产线。下单前我们与工厂确认规格、电压和配件清单。',
    ar: 'معدات للإنتاج محلياً: آلات تشكيل تحوّل اللفيفة إلى صفائح أسقف، آلات صنع البلوك، وخطوط معالجة المعادن. نؤكد مع المصنع المقاسات والجهد الكهربائي وقائمة القطع قبل أي طلب.',
  },
  metaTitle: {
    fr: 'Profileuses de tôles et machines de traitement de minerai de Chine | LEXD',
    en: 'Roof Sheet Roll Forming Machines & Mineral Plants from China | LEXD',
    zh: '中国压瓦机与选矿设备采购 | LEXD',
    ar: 'آلات تشكيل صفائح الأسقف ومعدات معالجة المعادن من الصين | LEXD',
  },
  metaDescription: {
    fr: 'Importez une profileuse de tôles, une machine à parpaings ou une unité de traitement de minerai de Chine vers l’Afrique. Vérification usine et transport. Devis WhatsApp.',
    en: 'Import a roof-sheet roll former, a concrete block machine or a mineral processing plant from China to Africa. Factory checks and shipping. WhatsApp quote.',
    zh: '从中国进口压瓦机、水泥砖机或选矿设备到非洲。工厂核查与运输。WhatsApp 询价。',
    ar: 'استورد آلة تشكيل صفائح أسقف أو آلة صنع بلوك أو وحدة معالجة معادن من الصين إلى أفريقيا. فحص المصنع والشحن. عرض سعر عبر واتساب.',
  },
  products: [
    {
      id: 'roll-former-double',
      name: { fr: 'Profileuse de tôles double étage', en: 'Double-layer roof-sheet roll former', zh: '双层压瓦机', ar: 'آلة تشكيل صفائح أسقف ثنائية الطبقة' },
      summary: {
        fr: 'Deux profils de tôle sur une seule machine, par exemple ondulé et nervuré.',
        en: 'Two sheet profiles on one machine, for example corrugated and ribbed.',
        zh: '一台设备可生产两种板型，例如波纹板和梯形板。',
        ar: 'مقطعان من الصفائح على آلة واحدة، مثل المموج والمضلع.',
      },
      images: ['/images/catalogue/roof-sheet-machine-double-layer.jpg'],
    },
    {
      id: 'roll-former-triple',
      name: { fr: 'Profileuse de tôles triple étage', en: 'Triple-layer roof-sheet roll former', zh: '三层压瓦机', ar: 'آلة تشكيل صفائح أسقف ثلاثية الطبقات' },
      summary: {
        fr: 'Trois profils sur un même bâti, pour proposer plus de modèles de tôles avec une seule ligne.',
        en: 'Three profiles on one frame, to offer more sheet styles from a single line.',
        zh: '同一机架上三种板型，一条生产线即可提供更多产品。',
        ar: 'ثلاثة مقاطع على هيكل واحد، لتقديم أنواع أكثر من الصفائح بخط إنتاج واحد.',
      },
      images: ['/images/catalogue/roof-sheet-machine-triple-layer.jpg'],
    },
    {
      id: 'block-machine',
      name: { fr: 'Machine à parpaings', en: 'Concrete block machine', zh: '水泥砖机', ar: 'آلة صنع الطوب الإسمنتي (البلوك)' },
      summary: {
        fr: 'Presse vibrante pour fabriquer parpaings, briques pleines et pavés ; les moules se changent selon le format voulu.',
        en: 'Vibrating press for hollow blocks, solid bricks and pavers; moulds are swapped for each format.',
        zh: '振动压制成型，可生产空心砖、实心砖和路面砖，更换模具即可改变规格。',
        ar: 'مكبس اهتزازي لصنع البلوك المفرغ والطوب المصمت وبلاط الأرصفة؛ تُغيَّر القوالب حسب المقاس المطلوب.',
      },
      images: ['/images/catalogue/concrete-block-machine.jpg'],
    },
    {
      id: 'mineral-plant',
      name: { fr: 'Unité de traitement de minerai', en: 'Mineral processing plant', zh: '选矿设备', ar: 'وحدة معالجة المعادن' },
      summary: {
        fr: 'Ligne de séparation par gravité (spirales, tables) pour concentrer le minerai.',
        en: 'Gravity separation line (spirals, shaking tables) to concentrate ore.',
        zh: '重选生产线（螺旋溜槽、摇床），用于矿石富集。',
        ar: 'خط فصل بالجاذبية (حلزونات، طاولات هزازة) لتركيز الخام.',
      },
      images: ['/images/catalogue/mineral-processing-plant.jpg'],
    },
  ],
  guideTitle: {
    fr: 'Préparer l’achat d’une machine de production',
    en: 'Preparing to buy a production machine',
    zh: '采购生产设备前的准备',
    ar: 'التحضير لشراء آلة إنتاج',
  },
  guide: [
    {
      fr: 'Envoyez une photo ou un dessin des profils de tôle vendus chez vous : l’usine fabrique les rouleaux sur cette base.',
      en: 'Send a photo or drawing of the sheet profiles sold in your market: the factory makes the rollers from it.',
      zh: '发送您当地市场所售板型的照片或图纸，工厂据此制作辊轮。',
      ar: 'أرسل صورة أو رسماً لمقاطع الصفائح المباعة في سوقك: يصنع المصنع البكرات على أساسه.',
    },
    {
      fr: 'Vérifiez la tension et la fréquence de votre réseau (par exemple 380 V, 50 Hz) : moteurs et armoire électrique doivent correspondre.',
      en: 'Check your grid voltage and frequency (for example 380 V, 50 Hz): motors and control cabinet must match.',
      zh: '确认当地电网电压和频率（如 380V、50Hz），电机和电控柜必须匹配。',
      ar: 'تحقق من جهد وتردد الشبكة لديك (مثل 380 فولت، 50 هرتز): يجب أن تتوافق المحركات ولوحة التحكم.',
    },
    {
      fr: 'Pour le minerai, l’usine a besoin d’un échantillon ou d’une analyse : sans cela, la ligne proposée n’est qu’une estimation.',
      en: 'For ore, the factory needs a sample or an assay: without one, the proposed line is only an estimate.',
      zh: '选矿设备需要矿样或化验报告，否则推荐的工艺流程只是估计。',
      ar: 'بالنسبة للخام، يحتاج المصنع إلى عينة أو تحليل: وبدونهما يبقى الخط المقترح مجرد تقدير.',
    },
    {
      fr: 'Demandez une vidéo d’essai de la machine avec votre profil avant le solde, et les pièces d’usure en double.',
      en: 'Ask for a test video of the machine running your profile before the balance, plus duplicate wear parts.',
      zh: '付尾款前要求提供使用您的板型试机的视频，并备一套易损件。',
      ar: 'اطلب فيديو تجريبياً للآلة وهي تنتج مقطعك قبل دفع المبلغ المتبقي، مع نسخة احتياطية من القطع الاستهلاكية.',
    },
  ],
  faqs: [
    {
      q: { fr: 'L’usine peut-elle reproduire un profil de tôle local ?', en: 'Can the factory copy a local sheet profile?', zh: '工厂能做当地的板型吗？', ar: 'هل يستطيع المصنع تصنيع مقطع صفائح محلي؟' },
      a: {
        fr: 'Oui, à partir des cotes ou d’un échantillon de tôle. L’usine envoie un plan du profil à valider avant de fabriquer les rouleaux.',
        en: 'Yes, from dimensions or a sheet sample. The factory sends a profile drawing for approval before making the rollers.',
        zh: '可以，根据尺寸或板样制作。工厂会在制作辊轮前发送板型图供您确认。',
        ar: 'نعم، بناءً على الأبعاد أو عينة من الصفيحة. يرسل المصنع رسماً للمقطع للموافقة عليه قبل تصنيع البكرات.',
      },
    },
    {
      q: { fr: 'Qui installe la machine à l’arrivée ?', en: 'Who installs the machine on arrival?', zh: '到货后谁负责安装？', ar: 'من يركّب الآلة عند وصولها؟' },
      a: {
        fr: 'Les profileuses sont livrées assemblées et se mettent en route avec une vidéo d’instructions. Pour les lignes plus complexes, un technicien peut être demandé dans le devis.',
        en: 'Roll formers ship assembled and start up with an instruction video. For more complex lines, a technician can be included in the quote.',
        zh: '压瓦机整机发货，按视频指导即可开机。复杂生产线可在报价中包含技术员上门服务。',
        ar: 'تُشحن آلات التشكيل مجمّعة وتُشغَّل باتباع فيديو تعليمات. أما الخطوط الأكثر تعقيداً فيمكن تضمين فني في عرض السعر.',
      },
    },
    {
      q: { fr: 'Comment sont expédiées ces machines ?', en: 'How are these machines shipped?', zh: '这些设备如何运输？', ar: 'كيف تُشحن هذه الآلات؟' },
      a: {
        fr: 'En conteneur, le plus souvent un 40 pieds, avec calage et protection anticorrosion. Les grandes lignes de minerai peuvent demander plusieurs conteneurs.',
        en: 'In a container, usually a 40-foot, braced and protected against corrosion. Large mineral lines may need several containers.',
        zh: '通常使用 40 尺集装箱，加固并做防锈处理。大型选矿线可能需要多个集装箱。',
        ar: 'في حاوية، غالباً بطول 40 قدماً، مع التثبيت والحماية من التآكل. قد تحتاج خطوط المعادن الكبيرة إلى عدة حاويات.',
      },
    },
  ],
  industryPath: '/industries/machines-chine-afrique',
};
