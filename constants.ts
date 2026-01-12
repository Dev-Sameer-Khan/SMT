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
    spares: "SPARES",
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
      valves: "Valves",
      bearings: "Bearings",
      gaskets: "Gaskets",
      screw: "Screw Compressors",
      piston: "Piston Compressors",
      vanes: "Vane Compressors",
      rotary: "Rotary Compressors",
    },
    
    // Product categories
    productCategoryLabels: {
      all: "ALL COMPONENTS",
      engine: "ENGINE PARTS",
      compressor: "COMPRESSORS",
      filter: "FILTERS",
      spare: "SPARES",
    },
    
    // Product subcategories
    productSubcategories: {
      engine: [
        { id: "pistons", label: "Pistons" },
        { id: "cylinders", label: "Cylinders" },
        { id: "valves", label: "Valves" },
        { id: "bearings", label: "Bearings" },
        { id: "gaskets", label: "Gaskets" },
      ],
      compressor: [
        { id: "screw", label: "Screw Compressors" },
        { id: "piston", label: "Piston Compressors" },
        { id: "vanes", label: "Vane Compressors" },
        { id: "rotary", label: "Rotary Compressors" },
      ],
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
    spares: "القطع الاحتياطية",
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
      valves: "صمامات",
      bearings: "رمانات",
      gaskets: "جوانات",
      screw: "ضواغط لولبية",
      piston: "ضواغط مكبسية",
      vanes: "ضواغط شفرات",
      rotary: "ضواغط دوارة",
    },
    
    // Product categories
    productCategoryLabels: {
      all: "كل المكونات",
      engine: "قطع المحرك",
      compressor: "الضواغط",
      filter: "المرشحات",
      spare: "القطع الاحتياطية",
    },
    
    // Product subcategories
    productSubcategories: {
      engine: [
        { id: "pistons", label: "مكابس" },
        { id: "cylinders", label: "أسطوانات" },
        { id: "valves", label: "صمامات" },
        { id: "bearings", label: "رمانات" },
        { id: "gaskets", label: "جوانات" },
      ],
      compressor: [
        { id: "screw", label: "ضواغط لولبية" },
        { id: "piston", label: "ضواغط مكبسية" },
        { id: "vanes", label: "ضواغط شفرات" },
        { id: "rotary", label: "ضواغط دوارة" },
      ],
    },
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Perkins Water Pump Kit",
    category: "engine",
    subcategory: "gaskets",
    desc: "Genuine Perkins Powerpart water pump kit, includes pump and gasket for engine cooling.",
    specs: "Perkins Genuine Powerpart",
    image: "https://drive.google.com/thumbnail?id=1CXR6MNQoAlFUdNP0mOjrbdAoiXb6TpFZ&sz=w1000"
  },
  {
    id: "2",
    title: "Multi-Stage Screw Compressor",
    category: "compressor",
    subcategory: "screw",
    desc: "Oil-free compression for pharmaceutical applications.",
    specs: "350 CFM | Variable Speed",
    image: "https://images.unsplash.com/photo-1606337321936-02d1b1a4d5ef?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    id: "3",
    title: "Nanofiber Fuel Filter",
    category: "filter",
    desc: "Advanced particulate capture for high-pressure common rail systems.",
    specs: "Efficiency 99.9%",
    image: "https://images.unsplash.com/photo-1730201127761-15888d9ddf98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Gasket Performance Kit",
    category: "spare",
    desc: "Full sealing solution for heavy earthmovers.",
    specs: "Heat Resilient Fluoroelastomer",
    image: "https://images.unsplash.com/photo-1759419281480-bacc913c9606?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Turbocharger Cartridge",
    category: "engine",
    subcategory: "valves",
    desc: "Balanced assembly for high-efficiency turbo performance.",
    specs: "Precision Machined | Journal Bearing",
    image: "https://images.unsplash.com/photo-1600377232142-164c095e686e?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Industrial Air Dryer",
    category: "compressor",
    subcategory: "rotary",
    desc: "Desiccant-based moisture removal for compressed air systems.",
    specs: "480V | -40°C Dew Point",
    image: "https://images.unsplash.com/photo-1705129472480-2145aecb9aaa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    title: "Hydraulic Return Filter",
    category: "filter",
    desc: "High-dirt holding capacity and low pressure drop.",
    specs: "Flow Rate 120 L/min | 10 Micron",
    image: "https://images.unsplash.com/photo-1614447428943-52ec0bdbc7aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    title: "Valve Overhaul Kit",
    category: "spare",
    desc: "Complete set for rapid on-site valve maintenance.",
    specs: "NBR & Viton Options",
    image: "https://images.unsplash.com/photo-1763836393379-68f9721966ee?q=80&w=848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    title: "Marine Cylinder Liner",
    category: "engine",
    subcategory: "cylinders",
    desc: "Wear-resistant cast iron cylinder for marine diesel engines.",
    specs: "Honed Bore | Chrome Plated",
    image: "https://images.unsplash.com/photo-1552656967-7a0991a13906?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    title: "Oil-Water Separator",
    category: "compressor",
    subcategory: "piston",
    desc: "Removes oil mist and vapor from condensate streams.",
    specs: "Auto-Drain | Polypropylene Body",
    image: "https://plus.unsplash.com/premium_photo-1682145074686-96a169644544?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    title: "High-Efficiency Cabin Filter",
    category: "filter",
    desc: "Captures allergens and fine particulates for cabin filtration.",
    specs: "Minimum Efficiency 97% | Activated Carbon",
    image: "https://images.unsplash.com/photo-1556838656-af51dadc2c93?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    title: "Universal Seal Kit",
    category: "spare",
    desc: "Multi-application sealing solution for pumps and valves.",
    specs: "Assorted Sizes | Chemical Resistant",
    image: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
