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
    jcb : "JCB & BOBCAT",
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
      "SMT Engines is an India and Saudi Arabia–based company providing best OEM and aftermarket parts, along with genuine engine spare parts and reliable maintenance and repair services for global industries. Delivering quality and trust since 2014.",
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
    europeHub: "Gulf Branch",
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
      electric : "ELECTRIC",
      // jcb : "JCB & BOBCAT",
    },
    
    // Product subcategories
    productSubcategories: {
      engine: [
        { id: "caterpiller", label: "Caterpiller" },
        { id: "cummins", label: "Cummins" },
        { id: "deutz", label: "Deutz" },
        { id: "perkins", label: "Perkins" },
        {id: "volvo", label : "Volvo"},
        {id: "betico", label : "Betico"},
        {id: "atlas", label : "Atlaa Copco"},
        {id: "hatz", label : "Hatz Diesel"},
        {id: "bomag", label : "Bomag"},
        {id: "jcb", label : "JCB"},
        {id: "bobcat", label : "Bobcat"},
        {id: "miller", label : "Miller"},
        {id: "kubota", label : "Kubota"},
        {id: "dynapac", label : "Dynapac"}
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
    jcb : "JCB & BOBCAT",
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
          // jcb : "JCB & BOBCAT",
    },
    
    // Product subcategories
    productSubcategories: {
      engine: [
        { id: "caterpiller", label: "مكابس" },
        { id: "cummins", label: "أسطوانات" },
        { id: "deutz", label: "صمامات" },
        { id: "perkins", label: "رمانات" },
        {id: "volvo", label : "Volvo"},
        {id: "betico", label : "Betico"},
        {id: "atlas", label : "Atlaa Copco"},
        {id: "hatz", label : "Hatz Diesel"},
        {id: "bomag", label : "Bomag"},
        {id: "jcb", label : "JCB"},
        {id: "bobcat", label : "Bobcat"},
        {id: "miller", label : "Miller"},
        {id: "kubota", label : "Kubota"},
        {id: "dynapac", label : "Dynapac"}
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
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667821/ULPK0002_lzkqnu.jpg",
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
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667831/overhaul-kit-_iuzjkg.jpg",
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
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667830/perkins_parts_wq2ivw.jpg",
    ]
  },
  {
    id: "4",
    title: "1100 SERIES CAMSHAFT",
    category: "engine",
    subcategory: "perkins",
    desc: "Precision-engineered camshaft designed for Perkins 1100 series engines to ensure accurate valve timing and optimal combustion efficiency.",
    specs: "High-Grade Forged Steel | Induction Hardened Lobes | Precision Ground",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/Perkins-Spares-White_u6outz.jpg",
    ]
  },
  {
    id: "5",
    title: "Perkins 1100 Series Engine Overhaul Kit",
    category: "engine",
    subcategory: "perkins",
    desc: "A complete professional-grade restoration kit containing all essential components to rebuild and extend the service life of Perkins 1100 series engines.",
    specs: "Includes Pistons, Rings, Liners & Gasket Set | OEM Quality | Heavy-Duty Construction",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/piston_perkins_tmseej.avif",
    ]
  },
  {
    id: "6",
    title: "Perkins 1100 Series Engine Overhaul Kit",
    category: "engine",
    subcategory: "perkins",
    desc: "Comprehensive engine rebuild solution featuring precision-matched parts for Perkins 1100 series applications, ensuring factory-spec performance.",
    specs: "Main & Con-Rod Bearings | Full Engine Gasket Kit | High-Tensile Fasteners",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/Perkins-1004_sxpze3.webp",
    ]
  },
  {
    id: "7",
    title: "1000 AND 700 SERIES PISTON KIT",
    category: "engine",
    subcategory: "perkins",
    desc: "High-strength piston assembly kit designed for compatibility across Perkins 1000 and 700 series engines, engineered for thermal resilience and durability.",
    specs: "Anodized Piston Crown | Phosphate Coated | Includes Pins & Clips",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667828/115017491_jd0ltb.jpg",
    ]
  },
  {
    id: "8",
    title: "Piston And Ring Kit",
    category: "engine",
    subcategory: "perkins",
    desc: "A matched set of pistons and high-tension rings designed to restore engine compression and reduce oil consumption in Perkins diesel engines.",
    specs: "Multi-Piece Ring Set | Heat-Resistant Alloy | Reduced Friction Profile",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667827/thermostat_i2i3os.jpg",
    ]
  },
  {
    id: "9",
    title: "1000 SERIES THERMOSTAT",
    category: "engine",
    subcategory: "perkins",
    desc: "Regulates engine temperature by controlling coolant flow to the radiator.",
    specs: "Wax-element Type | Precision Temperature Response",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667826/Full-Set-Gasket-C6-6_muds0m.avif",
    ]
  },
  {
    id: "10",
    title: "1100 AND 400 SERIES CONNECTION",
    category: "engine",
    subcategory: "perkins",
    desc: "High-pressure connector designed for engine intake and cooling systems.",
    specs: "Corrosion Resistant | Secure Seal Fitting",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667825/filter_mkaltp.jpg",
    ]
  },
  {
    id: "11",
    title: "1200 SERIES THERMOSTAT ASSEMBLY",
    category: "engine",
    subcategory: "perkins",
    desc: "Complete housing and thermostat unit for cooling system management.",
    specs: "Heavy-duty Housing | Pre-calibrated Spring",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667825/genrator_kxfpxo.jpg",
    ]
  },
  {
    id: "12",
    title: "400 SERIES THERMOSTAT",
    category: "engine",
    subcategory: "perkins",
    desc: "The 3.152 Series Water Pump is a direct replacement component used in Perkins D3.152 and 3.1524 diesel engines. Its function is critical for engine cooling, as it circulates coolant through the block and radiator to prevent overheating. These engines are commonly found in industrial, agricultural, and marine equipment.",
    specs: "Assorted Sizes | Chemical Resistant",
    image: [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/ring01_gy5pyp.jpg",
    ]
  },
  {
    id: "13",
    title: "900 SERIES THERMOSTAT ASSEMBLY",
    category: "engine",
    subcategory: "perkins",
    desc: "he 4.236 Series Water Pump is an engine-driven component for Perkins 4.236, 4.248, and related diesel engines. Its primary function is to circulate fresh water coolant within the engine's closed cooling system, ensuring efficient temperature regulation. These water pumps are vital for engines commonly used in a wide range of industrial, agricultural, and marine applications.",
    specs: "Equivalent to U5MW0106 | Shaft diameter typically 19mm (or 0.750\")",
    image: [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/engine_perkins_eti7uj.jpg",
    ]
  },
  {
    id: "14",
    title: "1000 SERIES WATER PUMP",
    category: "engine",
    subcategory: "perkins",
    desc: "A heavy-duty water pump specifically designed for the Perkins 1000 series engines, ensuring efficient coolant circulation to maintain steady operating temperatures under heavy loads.",
    specs: "Ceramic Cartridge Seals | Sealed Precision Bearings | Cast Iron Housing | Equivalent to U45011020",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/piston_62_ujmnay.jpg",
    ]
  },
  {
  id: "15",
  title: "1100 Series Water Pump kit",
  category: "engine",
  subcategory: "perkins",
  desc: "High-performance water pump kit for Perkins 1100 series engines, engineered to provide maximum flow and pressure for demanding agricultural and industrial cooling systems.",
  specs: "Includes O-Rings & Gaskets | High-Strength Impeller | Ceramic Face Seals | Corrosion Resistant Finish",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667822/fuel_lift_pump_02_yiblxx.jpg",
    ]
  },
  {
    id: "16",
    title: "1200 SERIES WATER PUMP KIT",
    category: "engine",
    subcategory: "perkins",
    desc: "A comprehensive cooling system overhaul kit for Perkins 1200 series engines, featuring a high-capacity pump and all necessary components for a complete professional installation.",
    specs: "Full Gasket Set Included | High-Flow Design | OEM Standard Bearings",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667820/water_pump_bqvybm.jpg",
    ]
  },
  {
    id: "17",
    title: "3.152 SERIES WATER PUMP",
    category: "engine",
    subcategory: "perkins",
    desc: "Heavy-duty replacement water pump designed for Perkins 3.152 series engines, ensuring optimal coolant circulation and temperature regulation.",
    specs: "Cast Iron Housing | Precision Bearings | Leak-Proof Seals",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667819/Copy_of_perkins_parts_gvkrjn.jpg",
    ]
  },
  {
    id: "18",
    title: "4.236 SERIES WATER PUMP",
    category: "engine",
    subcategory: "perkins",
    desc: "Engineered specifically for Perkins 4.236 series engines to provide reliable cooling performance in demanding industrial and agricultural environments.",
    specs: "High-Flow Impeller | Corrosion Resistant | OEM Fitment",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667819/water_pump_404_faypgc.jpg",
    ]
  },
  {
    id: "19",
    title: "400 AND 400 SERIES WATER PUMP",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Premium water pump assembly tailored for Perkins 400 series compact engines, offering efficient thermal management and long-term durability.",
    specs: "Compact Design | Low-Noise Operation | Heat-Treated Shaft",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667803/cat_oh_mpmfnx.avif",
    ]
  },
  {
    id: "20",
    title: "500 SERIES WATER PUMP",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Robust coolant pump for Perkins 500 series engines, built to withstand high-pressure cooling cycles and prevent engine overheating.",
    specs: "Includes Gasket | Heavy-Duty Internal Seal | Direct Bolt-on",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667802/-329-4510_tmddfn.webp",
    ]
  },
  {
    id: "21",
    title: "700 SERIES WATER PUMP",
    category: "engine",
    subcategory: "caterpiller",
    desc: "High-performance water pump for Perkins 700 series engines, designed to provide consistent flow rates and maximum engine protection.",
    specs: "Reinforced Housing | Specialized Bearing Kit | Anti-Corrosive Coating",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667802/c9_mjl27z.jpg",
    ]
  },
  {
    id: "22",
    title: "900 SERIES WATER PUMP",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667801/water_pumpc15_jnrcqh.jpg",
    ]
  },
  {
    id: "23",
    title: "Engine Part Kit",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667801/3406_crtqdg.jpg",
    ]
  },
  {
    id: "24",
    title: "Piston",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/CAT-Engine-Spare-Parts_bbdpuk.jpg",
    ]
  },
  {
    id: "25",
    title: "Piston AS",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/waterpump3406_tgb4jh.avif",
    ]
  },
  {
    id: "26",
    title: "Piston Assembly",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/inject_o0vh5a.avif",
    ]
  },
  {
    id: "27",
    title: "Piston Clutch",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667855/piston_ring_txbzoe.avif",
    ]
  },
  {
    id: "28",
    title: "Air Conditioner Thermostart ",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667855/water_pump_g66hht.jpg",
    ]
  },
  {
    id: "29",
    title: "Engine Thermostart",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667854/piston_ring._c6k00d.avif",
    ]
  },
  {
    id: "30",
    title: "Thermostart  A",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667854/ring._gpw9xi.webp",
    ]
  },
  {
    id: "31",
    title: "Thermostart Housing",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667853/s-l400_water_pump_khiuok.jpg",
    ]
  },
  {
    id: "32",
    title: "Water Temperature Regulator Thermostat",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667852/water_pump._mqezdw.webp",
    ]
  },
  {
    id: "33",
    title: "10R-1669: Cat® Reman Water Pump",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667852/gasket_top_vcdgs3.webp",
    ]
  },

  {
    id: "34",
    title: "20R-7175: Cat® Reman Auxiliary Sea Water Pump",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667850/gasket_nt_b1eouu.webp",
    ]
  },
  {
    id: "35",
    title: "20R-9122: Cat® Reman Water Pump",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667850/gasket_lower_smaqxn.webp",
    ]
  },
  {
    id: "36",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667849/con_rod_asy_i4xipu.avif",
    ]
  },
  {
    id: "37",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667848/cummins_genrater_fynxkp.jpg",
    ]
  },
  {
    id: "37",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667848/main_brg_k9huzm.webp",
    ]
  },
  {
    id: "38",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667847/cummins-4bt-crankshaft-_x1b2md.jpg",
    ]
  },  {
    id: "39",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "cummins",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667847/belt_puly_k6nlff.jpg",
    ]
  },
  {
    id: "40",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667818/piston_liner_ttxfbs.webp",
    ]
  },
  {
    id: "41",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667818/fuel_pump_zu64ye.jpg",
    ]
  },  {
    id: "42",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667818/injector_avyxpp.avif",
    ]
  },
  {
    id: "43",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667817/oil_cooler_housing_vjk43s.avif",
    ]
  },  {
    id: "44",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667816/water_pump_pzthak.avif",
    ]
  },  {
    id: "45",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667816/head_gasket_qtfuoz.webp",
    ]
  },
  {
    id: "46",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667815/alternator_1_vtsj8l.jpg",
    ]
  },
  {
    id: "47",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667815/alternator_tfha2z.jpg",
    ]
  },  {
    id: "48",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667813/Cylinder-Head_nxvknw.avif",
    ]
  },
  {
    id: "49",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667813/starter1_xklzyx.webp",
    ]
  },
  {
    id: "50",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667813/air-cleaner_zp7oyq.webp",
    ]
  },
  {
    id: "51",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667811/belt_pulley_j6ndzn.jpg",
    ]
  },
  {
    id: "52",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667811/_crankshaft__q4ewfj.jpg",
    ]
  },
  {
    id: "53",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667810/Oil-Pump_lyfh0h.avif",
    ]
  },
  {
    id: "54",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667809/Deutz-4-F4l912_s1h28x.avif",
    ]
  },
  {
    id: "55",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667809/2012_b1g61m.webp",
    ]
  },
  {
    id: "51",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667808/lift_pump_qo9ykv.jpg",
    ]
  },
  {
    id: "52",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667808/injection_pump_i9ibxx.jpg",
    ]
  },
  {
    id: "53",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667806/pump_fuel_ryvpkg.jpg",
    ]
  },
  {
    id: "54",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667806/ring_deutz_baaocj.webp",
    ]
  },
  {
    id: "55",
    title: "248-5513: Engine Water Temperature Reg",
    category: "engine",
    subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667805/ring_seal_hrw8pk.jpg",
    ]
  },
  {
    id: "56",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667831/bulker_ddeb3w.webp",
    ]
  },
  {
    id: "57",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667847/2head_compressor_ox8qmy.jpg",
    ]
  },
  {
    id: "58",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667846/2-compressor-with-electric-motor_s7glkx.jpg",
    ]
  },
  {
    id: "60",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667844/-air-compressor-withdiesel-engine-_n3ivdf.jpg",
    ]
  },
  {
    id: "61",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667843/vWAPp9ornrKkP3k69WEb_giqfer.png",
    ]
  },
  {
    id: "62",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667843/Aa7251b7456294ca0ac0fafd4592509619.jpg_350x350_gbgzxh.jpg",
    ]
  },
  {
    id: "63",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667842/A536460b44ed54e39a3dd82c3b36d0fc9D.jpg_350x350_ticw2f.jpg",
    ]
  },
  {
    id: "64",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667842/Aa72d3bed88314e98881e7d891d808186k.jpg_350x350_tiloqy.jpg",
    ]
  },
  {
    id: "65",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667841/A9783da7eaff04527a1ac49530721218cx.jpg_350x350_bhh4of.jpg",
    ]
  },
  {
    id: "66",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667840/A191835522d994905b1269f7951c5070d0.jpg_350x350_tujfz1.jpg",
    ]
  },
  {
    id: "67",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667840/A05602323c3a64ac09d4b3b442e864df8c.jpg_350x350_y7lg4j.jpg",
    ]
  },
  {
    id: "68",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667838/A2684b3c836aa4151b65d552f7658364c5.jpg_350x350_kt4vsz.jpg",
    ]
  },
  {
    id: "69",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667838/A0ba7790e90f14b159a7de9ee58dcbbadj.jpg_350x350_hzjlkg.jpg",
    ]
  },
  {
    id: "70",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667837/A4fa483301adf412782b6e9a4c924ff45c.jpg_350x350_ibv5wx.jpg",
    ]
  },
  {
    id: "71",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667837/Ae53626015aba4eaf86d48b45f52c5c43T.jpg_350x350_meyoas.jpg",
    ]
  },
  {
    id: "72",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667836/A2f1d1969c0a144eca31fbffad70f544ek.jpeg_350x350_hbraeu.jpg",
    ]
  },
  {
    id: "73",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667836/A316721c567fd40fe8df0bc8257d23e24c.jpg_350x350_xxue8w.jpg",
    ]
  },
  {
    id: "74",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667833/A35ca4c699dad4618bb419871a424fce2F.jpg_350x350_bhcehi.jpg",
    ]
  },
  {
    id: "75",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667833/160mm_ohbuyz.avif",
    ]
  },
  {
    id: "76",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667832/radiater_f6hjad.avif",
    ]
  },
  {
    id: "77",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667832/oil_cap_s2ewdf.avif",
    ]
  },
  {
    id: "78",
    title: "248-5513: Engine Water Temperature Reg",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667843/Aaa69d4b989ad4ea59670dd113b77ac9cN.jpg_350x350_fu9ua2.jpg",
    ]
  },
  {
    id: "79",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667784/avr-r450_qj0huc.jpg",
    ]
  },
  {
    id: "81",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667784/sx440_tzoozx.webp",
    ]
  },
  {
    id: "82",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667783/R448-_tjzlny.jpg",
    ]
  },
  {
    id: "83",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667782/deepsee_7320_fxs3eu.jpg",
    ]
  },
  {
    id: "84",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667781/DSE86205_mvd2mj.webp",
    ]
  },
  {
    id: "85",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667781/stop-solenoid_b5c33t.png",
    ]
  },
  {
    id: "86",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667779/_69983_pks0dx.jpg",
    ]
  },
  {
    id: "87",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667779/soloniod_lvbzcr.jpg",
    ]
  },
  {
    id: "88",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667777/w.t_suzpex.jpg",
    ]
  },
  {
    id: "89",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667777/622-333_bxklju.jpg",
    ]
  },
  {
    id: "90",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667777/sensor_hw1us7.jpg",
    ]
  },
  {
    id: "91",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667776/-water-temperature-sensors_bhjg28.jpg",
    ]
  },
  {
    id: "92",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667775/DSE6120-MKII_u73tu4.jpg",
    ]
  },
  {
    id: "93",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667775/VDO-_kwnjoc.webp",
    ]
  },
  {
    id: "94",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667775/s-l400_l9v8z5.jpg",
    ]
  },
  {
    id: "95",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667767/st_likcqx.avif",
    ]
  },
  {
    id: "96",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667767/alntr_k2cr7j.webp",
    ]
  },
  {
    id: "97",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667766/IMG_6563-scaled_jdwpdc.jpg",
    ]
  },
  {
    id: "98",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667766/common-rail-sensor-_mdcxnf.png",
    ]
  },
  {
    id: "99",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/-amp-alternator_p2tvwp.jpg",
    ]
  },
  {
    id: "101",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/8amp_ut7jrm.avif",
    ]
  },
  {
    id: "102",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/r250_ind4j7.jpg",
    ]
  },
  {
    id: "103",
    title: "248-5513: Engine Water Temperature Reg",
    category: "electric",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/sensor._nh237x.jpg",
    ]
  },
  {
    id: "104",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667791/fleetguard-parts_r9suii.jpg",
    ]
  },
  {
    id: "105",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667790/mann_mbuqip.webp",
    ]
  },
  {
    id: "106",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667789/baldwin-filters_rvjayz.jpg",
    ]
  },
  {
    id: "107",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667789/perkins_filters_nyisob.jpg",
    ]
  },
  {
    id: "108",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667788/deutz_air_cleaner_ysrsei.jpg",
    ]
  },
  {
    id: "109",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667787/deutz-genuine-filters-_hmcfos.webp",
    ]
  },
  {
    id: "110",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667786/seprater_hmxte4.jpg",
    ]
  },
  {
    id: "111",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667786/sep_atlas_tuhzvd.webp",
    ]
  },
  {
    id: "112",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667785/filter_cat_lnbiev.png",
    ]
  },
  {
    id: "113",
    title: "248-5513: Engine Water Temperature Reg",
    category: "filter",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667785/kubota_filters_ezumjh.jpg",
    ]
  },
  {
    id: "114",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673828/2485C557_jgwwbs.jpg",
    ]
  },
  {
    id: "115",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673882/zvrxqqsz7t6m2yomcxmc_sjwotr.jpg",
    ]
  },
  {
    id: "116",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673880/ytwctgpj7d18kgped30v_tbshwp.jpg",
    ]
  },
  {
    id: "117",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673878/yi9koaxg3hyfki4wnaff_usbigv.jpg",
    ]
  },
  {
    id: "118",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673877/wjglhfwzubmlgjyzdihz_jeaoap.jpg",
    ]
  },
  {
    id: "119",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673875/v9pcxkohnrgz0uuiwtev_tdf9nm.jpg",
    ]
  },
  {
    id: "120",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673874/pcuhgqprhhfw0jonvwzp_gewaop.jpg",
    ]
  },
  {
    id: "121",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673872/oxbmyliaygrfjf43bsol_gz5mgg.jpg",
    ]
  },
  {
    id: "122",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673872/ltiq1emwbz7uesyxufmm_xyzxf2.jpg",
    ]
  },
  {
    id: "123",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673870/fan_afhypq.jpg",
    ]
  },
  {
    id: "124",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673868/excavtor_ejwfzu.jpg",
    ]
  },
  {
    id: "125",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673867/Engine-Shaft-Couplings_avif_z1xpgw.jpg",
    ]
  },
  {
    id: "126",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673839/dynapac_x21vpt.jpg",
    ]
  },
  {
    id: "127",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673837/d440_zns9sd.jpg",
    ]
  },
  {
    id: "128",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673835/cat_fan_kbo0ff.jpg",
    ]
  },
  {
    id: "129",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673836/Coupling-O_agvufv.jpg",
    ]
  },
  {
    id: "130",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673832/Anti-Vibration_upfbvg.jpg",
    ]
  },
  {
    id: "131",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673833/cat_coup_httypb.jpg",
    ]
  },
  {
    id: "131",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673831/anti-vib_tx7nij.jpg",
    ]
  },
  {
    id: "131",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673830/antivib_zxlnsz.jpg",
    ]
  },
  {
    id: "131",
    title: "248-5513: Engine Water Temperature Reg",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "Industrial-grade water pump for Perkins 900 series engines, optimized for high-efficiency cooling in heavy machinery and power generation.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673830/Absorber-Buffer_g49ahc.jpg",
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Zero downtime since switching to IP's V12 piston kits. Their logistics team is surgical in their execution and delivery speed.",
    author: "Abdullah",
    position: "Fleet Operations Manager",
    company: "Global Logistics Corp",
    location: "Jeddah, Saudi Arabia",
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
    author: "Sameer Khan",
    position: "Chief Engineer",
    company: "Schneider-Werke",
    location: "Delhi, India",
  },
];