import { TranslationSet, Product, Testimonial } from "./types";

export const TRANSLATIONS: Record<"en" | "ar", TranslationSet> = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navProducts: "Products",
    navContact: "Contact",
    ctaInquiry: "Contact Us",
    
    // Hero Section
    heroTitle: "INDUSTRIAL PRECISION",
    heroTagline: "Engineering Excellence at Scale",
    heroDesc:
      "Elite global supplier of high-performance engine components, filtration systems, and industrial compressors.",
    heroBtnProducts: "Your Products",
    heroBtnInquiry: "Contact Us",
    
    // Stats
    statsProducts: "Inventory Units",
    statsExperience: "Years Experience",
    statsProjects: "Global Deliveries",
    statsClients: "Key Partners",
    
    // Launch Section
    launchTitle: "Air Compressor",
    launchBadge: "Main Product",
    
    // About Section
    aboutTitle: "RELIABILITY ENGINEERED",
    aboutSubtitle: "A Legacy of Industrial Trust",
    aboutText:
      "Focused on high-performance engine components and heavy-duty filtration. Our supply chain ensures zero downtime for global fleet owners and industrial projects.",
    
    // Products
    productCategories: "OUR PRODUCTS",
    catalogTitle: "CATALOG",
    coreInventory: "CORE INVENTORY",
    catalogDesc: "Browse our technical specifications. If you don't find a specific part number, please use the direct inquiry form.",
    categoriesTitle: "CATEGORIES",
    allComponents: "ALL COMPONENTS",
    engineParts: "ENGINE PARTS",
    compressors: "COMPRESSORS",
    filters: "FILTERS",
    electricItem: "ELECTRIC ITEM",
    rubberCoupling: "RUBBER & COUPLING",
    viewProduct: "View Product",
    inquireNow: "Inquire Now",
    cantFindPart: "CAN'T FIND A PART?",
    cantFindPartDesc: "Our database includes 100,000+ unlisted part numbers. Contact engineering support.",
    requestCustomPart: "REQUEST CUSTOM PART",
    
    // Product Details
    backToProducts: "Back to Products",
    productDescription: "Product Description",
    productFeatures: "Product Features",
    contactViaWhatsApp: "Contact via WhatsApp",
    requestTechnicalQuote: "Request Technical Quote",
    viewAllProducts: "View All Products",
    whyChooseUs: "WHY CHOOSE US",
    engineeringExcellence: "Engineering Excellence You Can Trust",
    moreFromCategory: "MORE FROM THIS CATEGORY",
    explore: "Explore",
    ourRecommendations: "OUR RECOMMENDATIONS",
    youMightAlsoLike: "You Might Also Like",
    clientReviews: "CLIENT REVIEWS",
    whatClientsSay: "What Our Clients Say",
    frequentlyAskedQuestions: "FREQUENTLY ASKED QUESTIONS",
    productInfoSupport: "Product Information & Support",
    needMoreInfo: "Need More Information?",
    contactForm: "Contact Form",
    whatsappDirect: "WhatsApp Direct",
    category: "Category",
    specifications: "Specifications",
    
    // FAQ
    faqTitle: "TECHNICAL SPECIFICATIONS & FAQ",
    
    // Contact
    contactTitle: "ESTABLISH PARTNERSHIP",
    establishConnection: "ESTABLISH CONNECTION",
    contactDesc: "Direct channel for high-volume procurement, technical specifications, and global logistics coordination.",
    operationalHours: "Operational Hours",
    encryption: "Encryption",
    location: "Location",
    phoneNumber: "Phone Number",
    email: "Email",
    technicalInquiry: "Technical Inquiry",
    authorizedPersonnel: "Authorized Personnel",
    corporateEmail: "Corporate Email",
    directContact: "Direct Contact",
    organizationName: "Organization Name",
    technicalDetails: "Technical Details / Part SKU",
    executeTransmission: "EXECUTE TRANSMISSION",
    dataTransmitted: "Data Transmitted",
    dataTransmittedDesc: "Your inquiry has been logged in our CRM. A senior division engineer will respond within standard SLA windows.",
    resetForm: "RESET FORM",
    
    // Footer
    footerTagline:
      "SMT is a Saudi Arabia–based company providing genuine engine spare parts and reliable maintenance and repair services, delivering quality you can trust since 2014.",
    navigation: "Navigation",
    divisions: "Divisions",
    engineComponents: "Engine Components",
    industrialFiltration: "Industrial Filtration",
    screwCompressors: "Screw Compressors",
    heavySpares: "Heavy Spares",
    globalHub: "Global Hub",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    
    // Home Page
    portfolio: "PORTFOLIO",
    exploreFullInventory: "Explore Full Invetory",
    aboutUs: "ABOUT US",
    clinicalPrecision: "Clinical Precision in Supply.",
    engineeringExpertise: "ENGINEERING EXPERTISE",
    reliabilityEngineered: "Reliability isn't accidental. It is engineered.",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    getInTouch: "GET IN TOUCH",
    connectWithEngineering: "Connect with Engineering.",
    contactDesc2: "Direct access to our technical desk and logistics hubs worldwide. We respond to industrial emergencies 24/7.",
    gotoTechnicalDesk: "GOTO TECHNICAL DESK",
    technicalSupport: "Technical Support",
    directHotline: "Direct Hotline",
    globalHQ: "Global HQ",
    europeHub: "Europe Hub",
    knowledgeBase: "KNOWLEDGE BASE",
    
    // Testimonials
    testimonialTitle: "What Clients Say",
    verifiedReliability: "Verified Industrial Reliability.",
    
    // Customers
    ourCompanies: "Our Companies",
    trustedBy: "Trusted by",
    globalBrands: "Global Brands",
    
    // Error Page
    systemAnomaly: "SYSTEM ANOMALY DETECTED",
    routeNotFound: "Route Not Found",
    errorDesc: "The requested technical directory or resource is unavailable or has been moved to a secure partition.",
    rebootToHome: "REBOOT TO HOME",
    
    // WhatsApp
    whatsappTooltip: "Chat with us on WhatsApp",
    
    // Subcategories
    subcategoryLabels: {
      pistons: "Pistons",
      cylinders: "Cylinders",
      perkins: "Perkins",
      bearings: "Bearings",
      gaskets: "Gaskets",
      waterpump: "waterpump"
      // screw: "Screw Compressors",
      // piston: "Piston Compressors",
      // vanes: "Vane Compressors",
      // rotary: "Rotary Compressors",
    },
    
    // Product categories
    productCategoryLabels: {
      all: "ALL COMPONENTS",
      engine: "ENGINE PARTS",
      compressor: "COMPRESSORS",
      filter: "FILTERS",
      rubberCoupling:  "RUBBER & COUPLING",
      electric : "ELECTRIC"
    },
    
    // Product subcategories
    productSubcategories: {
      engine: [
        { id: "caterpiller", label: "Caterpiller" },
        { id: "cummins", label: "Cummins" },
        { id: "deutz", label: "Deutz" },
        { id: "perkins", label: "Perkins" },
      ],
      // compressor: [
      //   { id: "screw", label: "Screw Compressors" },
      //   { id: "piston", label: "Piston Compressors" },
      //   { id: "vanes", label: "Vane Compressors" },
      //   { id: "rotary", label: "Rotary Compressors" },
      // ],
    },
  },
  ar: {
    // Navigation
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navProducts: "المنتجات",
    navContact: "اتصل بنا",
    ctaInquiry: "استفسار مباشر",
    
    // Hero Section
    heroTitle: "دقة صناعية",
    heroTagline: "التميز الهندسي على نطاق واسع",
    heroDesc:
      "مورد عالمي لنخبة مكونات المحركات، وأنظمة الترشيح، والضواغط الصناعية.",
    heroBtnProducts: "عرض الإمكانيات",
    heroBtnInquiry: "استفسار فني",
    
    // Stats
    statsProducts: "وحدات المخزون",
    statsExperience: "سنوات الخبرة",
    statsProjects: "تسليمات عالمية",
    statsClients: "شركاء رئيسيون",
    
    // Launch Section
    launchTitle: "ريادة طاقة الهواء: قسم الضواغط",
    launchBadge: "قسم جديد",
    
    // About Section
    aboutTitle: "موثوقية هندسية",
    aboutSubtitle: "إرث من الثقة الصناعية",
    aboutText:
      "نركز على مكونات المحركات عالية الأداء والترشيح الشاق. تضمن سلسلة التوريد الخاصة بنا عدم وجود فترات توقف لأصحاب الأساطيل العالمية.",
    
    // Products
    productCategories: "القدرات الأساسية",
    catalogTitle: "الكتالوج",
    coreInventory: "المخزون الأساسي",
    catalogDesc: "تصفح المواصفات الفنية لدينا. إذا لم تجد رقم جزء محدد، يرجى استخدام نموذج الاستفسار المباشر.",
    categoriesTitle: "الفئات",
    allComponents: "جميع المكونات",
    engineParts: "قطع المحرك",
    compressors: "الضواغط",
    filters: "المرشحات",
    electricItem: "كهربائي",
    rubberCoupling: "المطاط والاقتران",
    viewProduct: "عرض المنتج",
    inquireNow: "استفسر الآن",
    cantFindPart: "لا تجد جزءًا؟",
    cantFindPartDesc: "تتضمن قاعدة البيانات لدينا أكثر من 100,000 رقم جزء غير مدرج. اتصل بدعم الهندسة.",
    requestCustomPart: "طلب جزء مخصص",
    
    // Product Details
    backToProducts: "العودة إلى المنتجات",
    productDescription: "وصف المنتج",
    productFeatures: "ميزات المنتج",
    contactViaWhatsApp: "اتصل عبر واتساب",
    requestTechnicalQuote: "طلب عرض فني",
    viewAllProducts: "عرض جميع المنتجات",
    whyChooseUs: "لماذا تختارنا",
    engineeringExcellence: "التميز الهندسي الذي يمكنك الوثوق به",
    moreFromCategory: "المزيد من هذه الفئة",
    explore: "استكشف",
    ourRecommendations: "توصياتنا",
    youMightAlsoLike: "قد يعجبك أيضًا",
    clientReviews: "آراء العملاء",
    whatClientsSay: "ماذا يقول عملاؤنا",
    frequentlyAskedQuestions: "الأسئلة الشائعة",
    productInfoSupport: "معلومات المنتج والدعم",
    needMoreInfo: "تحتاج إلى مزيد من المعلومات؟",
    contactForm: "نموذج الاتصال",
    whatsappDirect: "واتساب مباشر",
    category: "الفئة",
    specifications: "المواصفات",
    
    // FAQ
    faqTitle: "المواصفات الفنية والأسئلة الشائعة",
    
    // Contact
    contactTitle: "تأسيس شراكة",
    establishConnection: "إنشاء اتصال",
    contactDesc: "قناة مباشرة للمشتريات الكبيرة والمواصفات الفنية وتنسيق الخدمات اللوجستية العالمية.",
    operationalHours: "ساعات العمل",
    encryption: "التشفير",
    location: "الموقع",
    phoneNumber: "رقم الهاتف",
    email: "البريد الإلكتروني",
    technicalInquiry: "استفسار فني",
    authorizedPersonnel: "الموظفون المصرح لهم",
    corporateEmail: "البريد الإلكتروني للشركة",
    directContact: "الاتصال المباشر",
    organizationName: "اسم المنظمة",
    technicalDetails: "التفاصيل الفنية / رقم جزء SKU",
    executeTransmission: "تنفيذ الإرسال",
    dataTransmitted: "تم إرسال البيانات",
    dataTransmittedDesc: "تم تسجيل استفسارك في نظام إدارة علاقات العملاء لدينا. سيرد مهندس قسم كبير ضمن نافذة SLA القياسية.",
    resetForm: "إعادة تعيين النموذج",
    
    // Footer
    footerTagline: "SMT هي شركة مقرها المملكة العربية السعودية تقدم قطع غيار المحركات الأصلية وخدمات الصيانة والإصلاح الموثوقة، وتقدم جودة يمكنك الوثوق بها منذ عام 2014.",
    navigation: "التنقل",
    divisions: "الأقسام",
    engineComponents: "مكونات المحرك",
    industrialFiltration: "الترشيح الصناعي",
    screwCompressors: "الضواغط اللولبية",
    heavySpares: "القطع الاحتياطية الثقيلة",
    globalHub: "المركز العالمي",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    
    // Home Page
    portfolio: "المحفظة",
    exploreFullInventory: "استكشف المخزون الكامل",
    aboutUs: "من نحن",
    clinicalPrecision: "الدقة السريرية في التوريد.",
    engineeringExpertise: "الخبرة الهندسية",
    reliabilityEngineered: "الموثوقية ليست عرضية. إنها مصممة هندسيًا.",
    ourMission: "مهمتنا",
    ourVision: "رؤيتنا",
    getInTouch: "تواصل معنا",
    connectWithEngineering: "تواصل مع الهندسة.",
    contactDesc2: "وصول مباشر إلى مكتبنا الفني ومراكز الخدمات اللوجستية في جميع أنحاء العالم. نستجيب لحالات الطوارئ الصناعية على مدار الساعة.",
    gotoTechnicalDesk: "اذهب إلى المكتب الفني",
    technicalSupport: "الدعم الفني",
    directHotline: "الخط الساخن المباشر",
    globalHQ: "المقر العالمي",
    europeHub: "مركز أوروبا",
    knowledgeBase: "قاعدة المعرفة",
    
    // Testimonials
    testimonialTitle: "تقارير الأداء",
    verifiedReliability: "الموثوقية الصناعية الموثقة.",
    
    // Customers
    ourCompanies: "شركاتنا",
    trustedBy: "موثوق به من قبل",
    globalBrands: "العلامات التجارية العالمية",
    
    // Error Page
    systemAnomaly: "تم اكتشاف شذوذ في النظام",
    routeNotFound: "المسار غير موجود",
    errorDesc: "الدليل الفني المطلوب أو المورد غير متاح أو تم نقله إلى قسم آمن.",
    rebootToHome: "إعادة التشغيل إلى الصفحة الرئيسية",
    
    // WhatsApp
    whatsappTooltip: "تواصل معنا عبر واتساب",
    
    // Subcategories
    subcategoryLabels: {
      pistons: "مكابس",
      cylinders: "أسطوانات",
      perkins: "صمامات",
      bearings: "رمانات",
      gaskets: "جوانات",
      waterpump: "مضخة مياه"
      // screw: "ضواغط لولبية",
      // piston: "ضواغط مكبسية",
      // vanes: "ضواغط شفرات",
      // rotary: "ضواغط دوارة",
    },
    
    // Product categories
    productCategoryLabels: {
      all: "كل المكونات",
      engine: "قطع المحرك",
      compressor: "الضواغط",
      filter: "المرشحات",
      rubberCoupling:  "المطاط والاقتران",
      electric : "كهربائي",
    },
    
    // Product subcategories
    productSubcategories: {
      engine: [
        { id: "caterpiller", label: "مكابس" },
        { id: "cummins", label: "أسطوانات" },
        { id: "deutz", label: "صمامات" },
        { id: "perkins", label: "رمانات" },
      ],
      // compressor: [
      //   { id: "screw", label: "ضواغط لولبية" },
      //   { id: "piston", label: "ضواغط مكبسية" },
      //   { id: "vanes", label: "ضواغط شفرات" },
      //   { id: "rotary", label: "ضواغط دوارة" },
      // ],
    },
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "400 Series CamShaft",
    category: "engine",
    subcategory: "perkins",
    desc: "It is an elongated shaft with a series of lobes and bearings, and a gear at one end. The part is shown horizontally against a plain white background.",
    specs: "Perkins Genuine Powerpart",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413143/2_agmra8.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413143/3_py1qpb.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413143/1_syr98c.jpg",
    ]
  },
  {
    id: "2",
    title: "1000 and 4.236 series camshaft gear",
    category: "engine",
    subcategory: "perkins",
    desc: "Oil-free compression for pharmaceutical applications.",
    specs: "1000 and 4.236 gear",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413142/2_shgihi.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413142/1_yptvxt.jpg",
    ]
  },
  {
    id: "3",
    title: "1000 and 1100 series timing case",
    category: "engine",
    subcategory : "perkins",
    desc: "Advanced particulate capture for high-pressure common rail systems.",
    specs: "1000 and 1100 case",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413141/2_tvpnkn.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413140/1_amoxp3.jpg",
    ]
  },
  {
    id: "4",
    title: "Gasket Performance Kit",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Full sealing solution for heavy earthmovers.",
    specs: "Heat Resilient Fluoroelastomer",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413140/2_ztvk3z.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413139/1_nkyv5m.jpg",
    ]
  },
  {
    id: "5",
    title: "Perkins 1100 Series Engine Overhaul Kit",
    category: "engine",
    subcategory: "perkins",
    desc: "Balanced assembly for high-efficiency turbo performance.",
    specs: "Precision Machined | Journal Bearing",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413144/3_npgw9q.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413144/1_onfx9u.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413144/2_wrnf9f.jpg",
    ]
  },
  {
    id: "6",
    title: "Industrial Air Dryer",
    category: "compressor",
    subcategory: "perkins",
    desc: "Desiccant-based moisture removal for compressed air systems.",
    specs: "480V | -40°C Dew Point",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413144/2_wrnf9f.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413147/2_vc6fj0.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413146/3_n39ej1.jpg",
    ]
  },
  {
    id: "7",
    title: "Hydraulic Return Filter",
    category: "filter",
    subcategory: "perkins",
    desc: "High-dirt holding capacity and low pressure drop.",
    specs: "Flow Rate 120 L/min | 10 Micron",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413146/1_j7yrqn.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413146/2_mbho8y.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413145/3_yjfwc2.jpg",
    ]
  },
  {
    id: "8",
    title: "Valve Overhaul Kit",
    category: "electric",
    subcategory: "perkins",
    desc: "Complete set for rapid on-site valve maintenance.",
    specs: "NBR & Viton Options",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413149/1_s6a3rh.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413148/2_bzk2nw.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413147/3_oho6lx.jpg",
    ]
  },
  {
    id: "9",
    title: "Marine Cylinder Liner",
    category: "engine",
    subcategory: "perkins",
    desc: "Wear-resistant cast iron cylinder for marine diesel engines.",
    specs: "Honed Bore | Chrome Plated",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413153/1_izgtis.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413152/2_nfp5ha.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413152/3_elo8lo.jpg",
    ]
  },
  {
    id: "10",
    title: "Oil-Water Separator",
    category: "compressor",
    subcategory: "perkins",
    desc: "Removes oil mist and vapor from condensate streams.",
    specs: "Auto-Drain | Polypropylene Body",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413154/1_hag5yc.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413154/2_bwol6w.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413153/4_p1w8vv.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413153/3_lrtobv.jpg"
    ]
  },
  {
    id: "11",
    title: "High-Efficiency Cabin Filter",
    category: "filter",
    subcategory: "perkins",
    desc: "Captures allergens and fine particulates for cabin filtration.",
    specs: "Minimum Efficiency 97% | Activated Carbon",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413152/4_xwr5af.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413149/1_ym8cci.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413149/2_twruqe.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413149/3_an5fmz.jpg"
    ]
  },
  {
    id: "12",
    title: "3.152 SERIES WATER PUMP",
    category: "waterpump",
    subcategory: "perkins",
    desc: "The 3.152 Series Water Pump is a direct replacement component used in Perkins D3.152 and 3.1524 diesel engines. Its function is critical for engine cooling, as it circulates coolant through the block and radiator to prevent overheating. These engines are commonly found in industrial, agricultural, and marine equipment.",
    specs: "Assorted Sizes | Chemical Resistant",
    image: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800\&h=800\&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800\&h=800\&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800\&h=800\&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800\&h=800\&fit=crop"
    ]
  },
  {
    id: "13",
    title: "4.236 SERIES WATER PUMP",
    category: "waterpump",
    subcategory: "perkins",
    desc: "he 4.236 Series Water Pump is an engine-driven component for Perkins 4.236, 4.248, and related diesel engines. Its primary function is to circulate fresh water coolant within the engine's closed cooling system, ensuring efficient temperature regulation. These water pumps are vital for engines commonly used in a wide range of industrial, agricultural, and marine applications.",
    specs: "Equivalent to U5MW0106 | Shaft diameter typically 19mm (or 0.750\")",
    image: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800\&h=800\&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800\&h=800\&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800\&h=800\&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800\&h=800\&fit=crop"
    ]
  }
  {
    id: "14",
    title: "400 AND 400 SERIES WATER PUMP",
    category: "waterpump",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Features high-quality ceramic cartridge seals and sealed bearings; Engineered for specific engine coolant flow and pressure; Example Equivalent Part No: U45011020",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413171/2_wrghqv.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413171/1_ehetfp.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413170/4_srjaqo.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413170/3_tzf3i0.jpg",
    ]
  },
  {
  id: "15",
  title: "500 SERIES WATER PUMP",
  category: "waterpump",
  subcategory: "perkins",
  desc: "The 500 Series Water Pump is a fresh water pump specifically designed for the Perkins 500 / Prima Series Marine Engine. Its critical role is to circulate coolant within the closed cooling system to maintain optimal engine operating temperatures and prevent overheating, which is vital for its common marine and industrial applications.",
  specs: "Engineered for precise coolant flow and pressure; Features high-quality ceramic seals and sealed bearings for extended life; Requires careful installation of the pulley, supporting the impeller end of the shaft.",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413177/4_sfnrmy.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413177/1_dl9guh.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413177/2_wnnucj.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413176/3_ext6mt.jpg",
    ]
  },
  {
    id: "16",
    title: "Universal Seal Kit4",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413165/1_am8qo2.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413164/2_gpvyqv.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413163/3_yk4yri.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413163/4_kewcz2.jpg",
    ]
  },
  {
    id: "17",
    title: "Universal Seal Kit5",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413158/1_cqeqzd.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413157/2_uuowbv.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413157/3_hwypwk.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413156/4_sutyzx.jpg",
    ]
  },
  {
    id: "18",
    title: "Universal Seal Kit6",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413168/1_arsmjw.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413167/2_zqvhhn.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413165/4_cbsrpu.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413165/3_ljciqe.jpg",
    ]
  },
  {
    id: "19",
    title: "Universal Seal Kit7",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413176/1_wro5ne.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413172/2_jkxp6u.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413172/3_aahtul.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413172/4_z6jvxo.jpg",
    ]
  },
  {
    id: "20",
    title: "Universal Seal Kit8",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413161/1_yccqiv.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413161/2_ahhwn3.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413158/3_nrmieo.jpg",
    ]
  },
  {
    id: "21",
    title: "Universal Seal Kit9",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413163/1_vc0ygx.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413162/2_vassvu.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413162/3_eibumx.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413161/4_bjakmy.jpg",
    ]
  },
  {
    id: "22",
    title: "Universal Seal Kit11",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image : [
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413156/1_gz3mgr.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413155/2_xctcze.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413155/3_yb98ym.jpg",
      "https://res.cloudinary.com/dbgzq41x2/image/upload/v1768413155/4_qerzos.jpg",
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Zero downtime since switching to IP's V12 piston kits. Their logistics team is surgical in their execution and delivery speed.",
    author: "Jameson H. Vance",
    position: "Fleet Operations Manager",
    company: "Global Logistics Corp",
    location: "Houston, TX",
  },
  {
    id: "t2",
    quote:
      "The Compressor Division's commissioning was flawless. We achieved 99.9% uptime in high-ambient desert conditions that killed our previous units.",
    author: "Omar Al-Fayed",
    position: "Operations Director",
    company: "Desert Peak Energy",
    location: "Dubai, UAE",
  },
  {
    id: "t3",
    quote:
      "Finding a supplier that actually understands engineering drawings without back-and-forth fluff is rare. Remarkable precision.",
    author: "Karl Schneider",
    position: "Chief Engineer",
    company: "Schneider-Werke",
    location: "Berlin, DE",
  },
];