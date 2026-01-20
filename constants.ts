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
    title: "1000 SERIES LIFT PUMP",
    category: "engine",
    subcategory: "perkins",
    desc: "Primary fuel pump to move the fuel from the tank into the engine fuel system. Designed to ensure the correct level of flow and pressure into the fuel system, correct flow rate and pressure are critical to prevent the issues of cavitation and vaporization that can lead to implosion and damage to surfaces. Perkins fuel pumps are carefully selected during our engine design to provide the pressure and flow required for the whole fuel system and tested for many thousands of running hours to ensure smooth running and maximum performance and power. Uses high-performance seals to ensure long life, and deliver correct pressure whatever the conditions.",
    specs: "Genuine Perkins pump | Optimized flow & pressure | High-performance seals | Thousands of hours tested",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667821/ULPK0002_lzkqnu.jpg",
    ]
  },
  {
    id: "2",
    title: "Engine Overhaul Servicer Kit",
    category: "engine",
    subcategory: "perkins",
    desc: "An overhaul will extend your engine’s life many years to come by returning performance to like-new conditions. It is a substantially better return on investment than trading in your old engine for a brand-new one",
    specs: "Comprehensive kit for major engine rebuild | Restores original engine performance | Components for 1000 & 4.236 gear engines",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667831/overhaul-kit-_iuzjkg.jpg",
    ]
  },
  {
    id: "3",
    title: "Ats Diesel Engine Spare Parts",
    category: "engine",
    subcategory : "perkins",
    desc: "diesel engines (Perkins, Deutz, Lister, Lombardini, Isuzu, Cummins) – agricultural tractors (Massey Ferguson,Ford New Holland, Fiat, Universal / Romanian, Belarus, John Deere and Zetor)– commercial vehicles (Bedford J6, BMC Leyland, Mercedes, Scania, Volvo, Caterpillar, Iveco and JCB).",
    specs: "Fits Perkins, Deutz, Lister & more | For tractors, engines & commercial vehicles | Assorted parts for key systems",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667830/perkins_parts_wq2ivw.jpg",
    ]
  },
  {
    id: "4",
    title: "Perkins Powerpart Ecoplus",
    category: "engine",
    subcategory: "perkins",
    desc: "The collection includes air, oil, and fuel filters designed for Perkins diesel engines. These genuine parts are engineered to capture harmful contaminants and ensure engine longevity. The filters feature the 'ecoplus' branding,indicating a specific range of components. A starter motor assembly is also visible among the filters. ",
    specs: "Air, oil & fuel filter set | Advanced contaminant filtration | 'Ecoplus' series genuine Perkins parts",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/Perkins-Spares-White_u6outz.jpg",
    ]
  },
  {
    id: "5",
    title: "Perkins Piston and Ring Kit",
    category: "engine",
    subcategory: "perkins",
    desc: "Function: Creates a seal between the piston and the cylinder wall, preventing gas from escaping and regulating oil consumption. Components: Typically includes the top compression ring, intermediate compression ring, and oil control ring. Material: Made from durable, high-quality materials to withstand high temperatures and pressures. ",
    specs: "Includes piston, top/intermediate/oil rings | Premium steel material | For high-temp & high-pressure operation",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/piston_perkins_tmseej.avif",
    ]
  },
  {
    id: "6",
    title: "Perkins/Caterpillar engine piston",
    category: "engine",
    subcategory: "perkins",
    desc: "Diameter: 100mm STD, Rings: 3.5T x 2.5 x 4, Pin: 38mm x 83mm, Total Height: 108mm, Compression Height: 70.00mm",
    specs: "Diameter: 100mm STD | Rings: 3.5T x 2.5 x 4 | Pin: 38mm x 83mm | Total height: 108mm | Compression height: 70mm",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/Perkins-1004_sxpze3.webp",
    ]
  },
  {
    id: "7",
    title: "Perkins Piston & Rings kit",
    category: "engine",
    subcategory: "perkins",
    desc: "Designed for various Perkins diesel engines, including models 404c-22 and 404D-22. The kit includes the piston and a set of piston rings. Piston rings create a seal between the piston and cylinder wall, minimizing gas loss and regulating oil consumption. The part is used in industrial, agricultural, construction, material handling, marine, and power generation markets",
    specs: "Kit for Perkins 404c-22/404D-22 | Complete piston w/ rings set | For industrial/tractor/marine engines",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667828/115017491_jd0ltb.jpg",
    ]
  },
  {
    id: "8",
    title: "coolant thermostat assembly",
    category: "engine",
    subcategory: "perkins",
    desc: "It is made from a durable aluminum alloy. It is compatible with various Perkins engine models, including the 1103, 1104, and 1106 series. The component manages the engine's cooling system temperature by controlling the flow of coolant. It is also used in some Massey Ferguson tractors. ",
    specs: "Aluminum alloy body | Controls coolant flow in Perkins 1103/1104/1106 | For precise engine temp management",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667827/thermostat_i2i3os.jpg",
    ]
  },
  {
    id: "9",
    title: "full engine gasket set",
    category: "engine",
    subcategory: "perkins",
    desc: "Includes all necessary gaskets and seals for a complete engine overhaul, covering both upper and lower engine components. Designed to meet or exceed original equipment (OE) standards for a precise fit and lasting performance.Essential for major engine work or a full rebuild. The specific part number for this set is T403322 or U5LC1106D. ",
    specs: "Complete upper & lower gasket set | OE fit & performance | For overhaul/full rebuild | PN: T403322/U5LC1106D",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667826/Full-Set-Gasket-C6-6_muds0m.avif",
    ]
  },
  {
    id: "10",
    title: "Perkins 2654403 Oil Filter",
    category: "engine",
    subcategory: "perkins",
    desc: "It has an external diameter of 96 mm. It has a length of 130.9 mm. It is designed to capture contaminants and reduce wear and tear on Perkins engine components. ",
    specs: "Diameter: 96mm | Length: 130.9mm | High contaminant holding capacity | OE for Perkins 2654403",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667825/filter_mkaltp.jpg",
    ]
  },
  {
    id: "11",
    title: "FG Wilson diesel generator set",
    category: "engine",
    subcategory: "perkins",
    desc: "Brand: FG Wilson Engine: Powered by a fuel-efficient Perkins engine Application: Suitable for both standby and prime power applications Features: Engineered for dependable performance, durability, and low emissions Power Range: Available in various power outputs ranging from 7.5 kVA up to 220 kVA and beyond, depending on the specific model ",
    specs: "FG Wilson gen-set, Perkins engine | Power range: 7.5–220 kVA+ | Designed for standby/prime use | Low emissions",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667825/genrator_kxfpxo.jpg",
    ]
  },
  {
    id: "12",
    title: " Perkins piston ring kit",
    category: "engine",
    subcategory: "perkins",
    desc: "Function: They create a seal between the piston and the cylinder walls, preventing gas from escaping and egulating oil consumption. Components: The set typically includes a top compression ring, an intermediate compression ring, and an oil control ring. Material: Made from materials like cast iron or steel designed to resist wear, heat, and pressure. Usage: They are used in various Perkins diesel engines for industrial, agricultural, and power generation applications. ",
    specs: "Incl. compression & oil rings | Fits Perkins engines | Wear/heat/pressure-resistant cast iron/steel",
    image: [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/ring01_gy5pyp.jpg",
    ]
  },
  {
    id: "13",
    title: "Perkins 1200 series industrial diesel engine",
    category: "engine",
    subcategory: "perkins",
    desc: "Perkins engines are known for their durability and reliability, powering various industrial and construction applications. The 1204E-E44TA model features a 4.4-liter displacement, 4 cylinders, and a maximum torque of 560 Nm. The engine is designed to meet various emissions standards, including EU Stage IIIB/U.S. EPA Tier 4 Interim equivalents.Electronically controlled engines in this series deliver precise fuel injection based on the load applied. ",
    specs: "Model: 1204E-E44TA | 4.4L, 4-cyl | Max torque: 560Nm | Meets EU Stage IIIB/US Tier 4i | Electronically controlled",
    image: [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/engine_perkins_eti7uj.jpg",
    ]
  },
  {
    id: "14",
    title: "Perkins C4.4 engine piston",
    category: "engine",
    subcategory: "perkins",
    desc: "Material: Forged aluminum alloy with heat-treated crown Diameter: OEM standard bore size for the Perkins C4.4 engine Piston Pin: Included; floating type with circlips Ring Grooves: Pre-machined with hardened steel ring inserts",
    specs: "Forged aluminum piston | Heat-treated crown | OEM C4.4 bore | Includes pin & circlips, steel ring grooves",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/piston_62_ujmnay.jpg",
    ]
  },
  {
  id: "15",
  title: "Mechanical fuel lift pump",
  category: "engine",
  subcategory: "perkins",
  desc: "It is compatible with a range of engines, including certain Perkins and John Deere models. The pump is designed to resist fuel corrosion with a premium cast aluminum housing and quality diaphragm materials. It is a direct-fit replacement part designed for easy bolt-on installation. A mounting gasket is included for proper sealing and a hassle-free installation",
  specs: "Cast aluminum body | Fuel-resistant diaphragm | Direct-fit, includes gasket | For Perkins & John Deere",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667822/fuel_lift_pump_02_yiblxx.jpg",
    ]
  },
  {
    id: "16",
    title: "Perkins water pump and gasket set",
    category: "engine",
    subcategory: "perkins",
    desc: "The water pump is a critical component for engine cooling systems. The included gasket has the OEM number 3682A011. These parts are compatible with Perkins 1100 Series engines, specifically models like the 1103 and 1104. The gasket ensures a secure seal to prevent coolant leaks. ",
    specs: "High-flow water pump | OEM gasket 3682A011 included | For Perkins 1100 Series (1103/1104)",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667820/water_pump_bqvybm.jpg",
    ]
  },
  {
    id: "17",
    title: "ATS International diesel engine parts",
    category: "engine",
    subcategory: "perkins",
    desc: "The components are designed for heavy-duty applications in trucks, buses, agricultural tractors, and power generators. ATS International supplies premium quality diesel engine and agricultural tractor parts to Original quipment Manufacturers and aftermarket distributors globally. Key features include high durability, precision engineering, and performance under pressure. The parts are engineered to meet OE (Original Equipment) quality standards. ",
    specs: "OE-quality parts | Heavy-duty design | Precision engineering | Engineered for trucks, tractors, generators",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667819/Copy_of_perkins_parts_gvkrjn.jpg",
    ]
  },
  {
    id: "18",
    title: "400 series Perkins engines water pump",
    category: "engine",
    subcategory: "perkins",
    desc: "Part Numbers: U45010062, 145010060, 145010070, and 145010061. Function: Circulates coolant to regulate engine temperature. Compatibility: Fits Perkins engine models 403D-15, 403D-15T, 404D-15, 404D-22, 404D-22T, 404D-22TA, 403D-17, and 404C-22T. Contents: Includes the pump assembly and a gasket for installation. Material: Constructed with high-quality, durable materials designed to withstand high temperatures and pressure. ",
    specs: "Pump+gasket | For Perkins 400 Series (403D/404D) | High-temp materials | PN: U45010062, 145010060/70/61",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667819/water_pump_404_faypgc.jpg",
    ]
  },
  {
    id: "19",
    title: "Caterpillar engine overhaul kit",
    category: "engine",
    subcategory: "caterpiller",
    desc: "The kit includes essential components for rebuilding a diesel engine, such as pistons, cylinder liners, valves, and gaskets. It is designed for various Caterpillar engine models, including the 3306. The components are made from durable materials like aluminum alloy and cast iron to withstand high pressure and thermal loads. Overhaul kits help restore engine performance, efficiency, and longevity. ",
    specs: "Complete CAT engine overhaul set | Incl. pistons, liners, valves, gaskets | Fits 3306 & others | Heavy-duty materials",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667803/cat_oh_mpmfnx.avif",
    ]
  },
  {
    id: "20",
    title: "Caterpiller set of pistons",
    category: "engine",
    subcategory: "caterpiller",
    desc: "Part Number: 329-4510 Engine Type: Suitable for Caterpillar C18 diesel engines and generator sets Material: Forged from premium aerospace-grade aluminum and features proprietary coatings Features: Optimized for high-flow cylinder heads and camshafts, designed for improved thermal stability ",
    specs: "Set for CAT C18 | Forged aerospace aluminum | Proprietary coatings | PN: 329-4510 | High-flow, thermally stable",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667802/-329-4510_tmddfn.webp",
    ]
  },
  {
    id: "21",
    title: "Caterpillar engine piston kit",
    category: "engine",
    subcategory: "caterpiller",
    desc: "The kit includes the piston body, a piston pin (also called a wrist pin), and two circlips. Piston kits are designed to create a seal, compress the air-fuel mixture, and transfer force to the crankshaft. The parts in the image appear to be new aftermarket or replacement parts designed to meet or exceed OEM specifications. Specific part numbers can vary depending on the exact engine model (e.g., C4.4T/Ta, C7.1, 3406). These parts are crucial for smooth and powerful engine operation. ",
    specs: "Piston, pin, circlips kit | For CAT C4.4T, C7.1, 3406 | Aftermarket/OEM spec | Compression seal & durability",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667802/c9_mjl27z.jpg",
    ]
  },
  {
    id: "22",
    title: "Caterpiller Engine Water Pump",
    category: "engine",
    subcategory: "caterpiller",
    desc: "It is a direct replacement part. Compatible OEM part numbers include 352-0211, 10R0484, and 161-5719. It circulates coolant to prevent the engine from overheating. The pump comes complete with an impeller drive gear and companying gaskets/O-rings. ",
    specs: "Water pump w/ impeller drive gear | Includes gaskets/O-rings | For CAT 352-0211, 10R0484, 161-5719",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667801/water_pumpc15_jnrcqh.jpg",
    ]
  },
  {
    id: "23",
    title: "Caterpiller diesel engine pistons",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "The pistons are standard size and made of high-quality, high-strength alloy to withstand extreme temperatures and pressures. They feature a standard design with grooves for piston rings and a central bore for a piston pin. The surface has a polished finish. These parts are designed for use in various applications, including excavators, generators, and tractors. ",
    specs: "Standard size | High-strength alloy | Includes ring grooves & pin bore | Polished finish | For industrial/agri use",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667801/3406_crtqdg.jpg",
    ]
  },
  {
    id: "24",
    title: "Caterpillar engine parts kit",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Brand: Caterpillar (CAT) Usage: Used in diesel engines for applications such as generators, industrial machinery, and construction equipment Components: The image displays various parts, including cylinder liners, pistons, piston rings, and pins Packaging: Components are packaged in distinctive yellow and black Caterpillar-branded boxes and plastic sleeves ",
    specs: "Kit incl. liners, pistons, rings, pins | Genuine CAT packaging | For diesel engine overhaul | Industrial/constr. use",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/CAT-Engine-Spare-Parts_bbdpuk.jpg",
    ]
  },
  {
    id: "25",
    title: "3306 and 3304 SERIES WATER PUMP",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "It is compatible with various heavy-duty machinery, including loaders and excavators. It circulates coolant to maintain optimal engine operating temperature. It is designed as a direct replacement for OEM part numbers like 2P0661, 172-7767, and 2W8001. The pump features a helical cut gear with 33 cogs. ",
    specs: "Direct-fit pump | Fits loaders/excavators | 33-cog helical gear | For CAT 2P0661, 172-7767, 2W8001",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/waterpump3406_tgb4jh.avif",
    ]
  },
  {
    id: "26",
    title: "diesel engine fuel injectors",
    category: "rubberCoupling",
    subcategory: "perkins",
    desc: "Function: They are responsible for delivering a precise amount of atomized fuel into the engine's combustion hamber at the appropriate time. Types: The image shows examples including Unit Injectors (UI) and Common Rail Injectors. Benefits: High-pressure injection systems improve fuel efficiency, reduce emissions, and enhance engine performance. Compatibility: Specific part numbers such as 127-8209, 7E6408, and 111-3718 are compatible with different CAT engine models like the 3116, 3508, 3512, and 3516. System: Some operate using mechanical actuation, while others, like Hydraulic Electronic Unit Injectors (HUEI), use high-pressure engine oil to fire the injector. ",
    specs: "High-pressure injectors (UI, CR) | Fits CAT 3116, 3508, 3512, 3516 | Atomized fuel delivery | OEM PNs: 127-8209+",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/inject_o0vh5a.avif",
    ]
  },
  {
    id: "27",
    title: "Cummins Piston Kit",
    category: "engine",
    subcategory: "cummins",
    desc: "It is a set of engine parts typically used for replacement or repair of an internal combustion engine. The kit includes a piston, piston pin, snap rings, and piston rings. These components are essential for sealing the combustion chamber, transferring heat, and regulating oil consumption within the engine cylinder. Specific part numbers and engine models (e.g., ISX15, QSX15, 4B, 6B) are associated with these kits.",
        specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667855/piston_ring_txbzoe.avif",
    ]
  },
  {
    id: "28",
    title: "Cummins Water Pump Assembly",
    category: "engine",
    subcategory: "cummins",
    desc: "It is compatible with Cummins engine models including 6B, 6BT, B5.9, 6B5.9, and 6BT5.9. The part numbers include 3960342, 4935793, and 3960309. Features include precision-ground and permanently lubricated unitized bearing assemblies. It has unitized seals for superior protection against leakage and contamination. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667855/water_pump_g66hht.jpg",
    ]
  },
  {
    id: "29",
    title: "Cummins Piston Kit",
    category: "engine",
    subcategory: "cummins",
    desc: "Part number 4025158 is primarily used on Non Certified 11 liter M11 engines. Part number 3803977 is for Cummins QSM engines, featuring a two-piece piston design. Each kit services one piston, and six are typically needed to service an entire engine. The kit includes a piston, piston pin, and piston rings, which are critical for maintaining compression and controlling oil distribution. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667854/piston_ring._c6k00d.avif",
    ]
  },
  {
    id: "30",
    title: "Cummins piston ring set",
    category: "engine",
    subcategory: "cummins",
    desc: "Brand: Cummins Part Type: Piston Ring Set Part Number: 4089500 Application: Used in various Cummins engines for heavy construction, logistics, and power generation. Quality: These are genuine, original equipment manufacturer (OEM) parts known for durability and reliability.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667854/ring._gpw9xi.webp",
    ]
  },
  {
    id: "31",
    title: "Cummins Water Pump",
    category: "engine",
    subcategory: "cummins",
    desc: "It is compatible with Cummins 6C, 6CT, and 6CTA engines. The part numbers associated with this pump include 3800976, 3804927, 4286293, and 4089647. It is made of high-quality materials to ensure reliable performance and long service life. The component moves coolant through the engine block, hoses, and radiator. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667853/s-l400_water_pump_khiuok.jpg",
    ]
  },
  {
    id: "32",
    title: " Cummins water pump assembly",
    category: "engine",
    subcategory: "cummins",
    desc: "Part Numbers: Common OEM part numbers include 3801708, 3022474, and 3051370. Material: Typically made from cast iron. Function: Circulates coolant to maintain optimal engine temperature. Drive Type: Belt-driven with a multi-groove pulley. Application: Used in heavy-duty applications like trucks, generators, and industrial machinery.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667852/water_pump._mqezdw.webp",
    ]
  },
  {
    id: "33",
    title: "Cummins head gasket set",
    category: "engine",
    subcategory: "cummins",
    desc: "It is compatible with Cummins 6B, 6BT, and 6BTA engines. The set includes the necessary gaskets for a head gasket replacement, matching original equipment form, fit, and function. The components are made from durable materials designed to withstand engine heat and pressure, ensuring a tight seal. It is suitable for various applications, including Case IH and Case heavy machinery. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667852/gasket_top_vcdgs3.webp",
    ]
  },
  {
    id: "34",
    title: "Cummins upper gasket set",
    category: "engine",
    subcategory: "cummins",
    desc: "This set is compatible with various models within the Cummins 855 series engines. It replaces several Cummins OEM part numbers, including 3801330. The kit contains all the necessary gaskets for replacing a cylinder head. Gaskets provide a seal between two engine surfaces, designed to handle changes in temperature and pressure. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667850/gasket_nt_b1eouu.webp",
    ]
  },
  {
    id: "35",
    title: "Cummins lower gasket set",
    category: "engine",
    subcategory: "cummins",
    desc: "Genuine Cummins parts for specific engine models. Designed for the 5.9L Cummins 24-valve (ISB) engine used in 1998.5–2002 Dodge Ram 2500/3500 trucks. Includes components such as oil pan gaskets, front cover gaskets, and front/rear crankshaft seals. Made from materials like rubber, copper, stainless steel, and graphite.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667850/gasket_lower_smaqxn.webp",
    ]
  },
  {
    id: "36",
    title: "Cummins engine connecting rod",
    category: "engine",
    subcategory: "cummins",
    desc: "It serves as the mechanical link between the piston and the crankshaft. The rod converts the linear (up and down) motion of the piston into the circular motion of the crankshaft. It operates under considerable strain, experiencing tension, compression, bending, and buckling thousands of times a minute. The specific part number '3942579' indicates it is likely a heavy-duty connecting rod for a Cummins 6BT or similar diesel engine. Connecting rods are typically made from high-strength materials like aluminum alloy to be both strong and lightweight. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667849/con_rod_asy_i4xipu.avif",
    ]
  },
  {
    id: "37",
    title: "Cummins diesel generator set. ",
    category: "engine",
    subcategory: "cummins",
    desc: "It is an open generator model, suitable for standby or prime power applications. The system integrates key components including the engine, alternator, and control systems, all designed and built by Cummins. It features advanced combustion technology designed for reliability and a lower environmental footprint. The unit operates with a microprocessor-based monitoring, metering, and control system for efficient operation. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667848/cummins_genrater_fynxkp.jpg",
    ]
  },
  {
    id: "37",
    title: "Cummins Connecting Rod Bearing",
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
    title: "Cummns engine crankshaft",
    category: "engine",
    subcategory: "cummins",
    desc: "Designed for use in specific Tier 2 4.5 liter B engines. Used in various applications including DAF, Hyster, Komatsu, and Case machinery. Available as a forged component. OEM part numbers include 3939367, 3908031, and 3925582, among others.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667847/cummins-4bt-crankshaft-_x1b2md.jpg",
    ]
  },  {
    id: "39",
    title: "serpentine belt tensioner assembly",
    category: "engine",
    subcategory: "cummins",
    desc: "It is designed to maintain constant and correct pressure on the engine's accessory belt system. This prevents slippage, noise, and potential failure of accessories like the alternator or power steering pump. The component shown is an aftermarket replacement part compatible with various Cummins engines. The design ensures reliable performance and reduces unnecessary wear and tear on machinery. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667847/belt_puly_k6nlff.jpg",
    ]
  },
  {
    id: "40",
    title: "Deutz piston and cylinder liner",
    category: "engine",
    subcategory: "deutz",
    desc: "The kit includes a cylinder liner, two pistons, piston pins, and circlips. These are spare parts for diesel engines, specifically designed for models like the Deutz F4L912 engine. The components are made from durable materials to withstand high temperatures and wear. This specific kit is for an engine that uses 3 piston rings per piston.",
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
    title: "Deutz fuel injection unit pumps",
    category: "engine",
    subcategory: "deutz",
    desc: "Function: They combine both the pump and the injection nozzle into a single unit installed directly into the cylinder head. Performance: These pumps are designed for high and optimized engine performance and low fuel consumption. Compatibility: Specific part numbers, such as 0414401105, are suitable for engines like Volvo TAD520GE and Deutz BF6M1013. Operation: The pump creates the high pressure needed to deliver the correct amount of fuel at the right moment for optimal combustion. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667818/injector_avyxpp.avif",
    ]
  },
  {
    id: "43",
    title: "Deutz oil cooler assembly",
    category: "engine",
    subcategory: "deutz",
    desc: "It helps dissipate heat from the engine oil, preventing overheating and extending engine life. The assembly includes an oil filter housing and the finned cooler core. The part numbers associated with similar assemblies include 04252961 and 21099784. It is an essential component for the proper function of compatible diesel engines. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667817/oil_cooler_housing_vjk43s.avif",
    ]
  },  {
    id: "44",
    title: "Deutz water pump",
    category: "engine",
    subcategory: "deutz",
    desc: "Ensures correct coolant flow and pressure for optimum engine performance. Features high quality ceramic seals and sealed bearings for durability. Used in demanding industrial and agricultural applications. Replacement part numbers include 04299148, 04259548, and 02937441.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667816/water_pump_pzthak.avif",
    ]
  },  {
    id: "45",
    title: "Deutz cylinder head gasket",
    category: "engine",
    subcategory: "deutz",
    desc: "It is designed for the Deutz TCD2012, BF4M2012, and BF4M2012C engines. The gasket is a multi-layer steel (MLS) or metal-elastomer design. It provides high thermal and mechanical resistance for sealing the cylinder head to the engine block. The manufacturer is often listed as Victor Reinz. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667816/head_gasket_qtfuoz.webp",
    ]
  },
  {
    id: "46",
    title: "Deutz alternator",
    category: "engine",
    subcategory: "deutz",
    desc: "It is an original equipment manufacturer (OEM) or aftermarket part used in various applications, including agricultural machinery and commercial vehicles. The component converts mechanical energy into electrical energy efficiently to power the vehicle's electrical components and charge the battery. Deutz offers both new and remanufactured Xchange alternators to ensure optimal performance and durability. Various models with different specifications, such as 12V or 24V and varying amperage outputs, are available.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667815/alternator_1_vtsj8l.jpg",
    ]
  },
  {
    id: "47",
    title: "Deutz alternatioor",
    category: "engine",
    subcategory: "deutz",
    desc: "Function: Generates alternating current (AC) and converts it to direct current (DC) for use by the vehicle. Voltage: Common models operate on either 12-volt or 24-volt systems. Amperage: Output can vary significantly, ranging from approximately 27 amps up to 140 amps or more, depending on the application. Design: Features an external fan and often an internal regulator to control voltage output. Compatibility: Specific models are designed to fit various vehicles and heavy equipment, including Thermo King units, Volvo trucks, and Deutz diesel engines. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667815/alternator_tfha2z.jpg",
    ]
  },  {
    id: "48",
    title: "Deutz cylinder head assembly",
    category: "engine",
    subcategory: "deutz",
    desc: "Compatible with various Deutz engine models, including FL912, FL913, and BFL913. Common part numbers associated with this type include 04231661, 04158537, and 04236181. Typically made from durable materials like cast iron or alloy steel to withstand engine heat and pressure. Includes the necessary gasket set components (bolts and a cap are visible). ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667813/Cylinder-Head_nxvknw.avif",
    ]
  },
  {
    id: "49",
    title: "Deutz starter motor",
    category: "engine",
    subcategory: "deutz",
    desc: "It is an electric motor that initiates the engine's operation by rotating the flywheel. The models shown are adaptable for various applications, including Mercedes trucks and New Holland equipment. The starter motors are available as new aftermarket parts meeting OEM specifications. The components are designed for high reliability and durability. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667813/starter1_xklzyx.webp",
    ]
  },
  {
    id: "50",
    title: " oil bath air cleaner assembly",
    category: "engine",
    subcategory: "deutz",
    desc: "Designed for use in applications such as Zetor or Tata tractors and other agricultural or industrial machinery. The assembly is made of mild steel with a black painted finish. It functions by drawing air through an oil bath to remove contaminants before the air reaches the engine. Key part numbers associated with similar items include 02102239 and 02102238. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667813/air-cleaner_zp7oyq.webp",
    ]
  },
  {
    id: "51",
    title: "Deutz belt tensioner pulley",
    category: "engine",
    subcategory: "deutz",
    desc: "It is a direct replacement for OEM part numbers 04152510, 02238067, and 04150693. The component is made of metal material, which is described as wearable, durable, and scratch-resistant. It is designed for use in various Deutz applications, including F4L912, F3L912, 912, 913, and 914 engines. The function of the component is to guide the serpentine or timing belt on a car engine and limit belt slip. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667811/belt_pulley_j6ndzn.jpg",
    ]
  },
  {
    id: "52",
    title: "Deutz crankshaft and bearing kit",
    category: "engine",
    subcategory: "deutz",
    desc: "Function: Translates piston movement into circular motion for engine operation. Quality: Genuine Deutz parts are specifically designed and tested to ensure maximum performance and engine longevity. Availability: These parts are available through authorized service partners and offer optimum availability and rapid delivery. Kits: Tailored repair kits contain all necessary spare and wear parts for engine overhauls. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667811/_crankshaft__q4ewfj.jpg",
    ]
  },
  {
    id: "53",
    title: "Deutz oil pump",
    category: "engine",
    subcategory: "deutz",
    desc: "Function: It creates pressure to lubricate the engine's moving parts. Mechanism: It is a complex unit with internal gears that rotate to build pressure in the oil system. Compatibility: This style of pump is compatible with several Deutz engine series, including the F3L912, F4L912, F6L912, 913, and BF6L913 models. OEM Part Numbers: Cross-referenced part numbers include 04154885, 04230651, and 04231142. Application: These engines and their parts are commonly used in agricultural machinery like combines and tractors. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667810/Oil-Pump_lyfh0h.avif",
    ]
  },
  {
    id: "54",
    title: "Deutz air-cooled diesel engine",
    category: "engine",
    subcategory: "deutz",
    desc: "It is a 4-cylinder, 4-stroke engine. It is often used in construction and agricultural machinery. The engine is known for its robust design and reliability. Power output ranges from approximately 34 kW to 49 kW (47 to 60 P). ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667809/Deutz-4-F4l912_s1h28x.avif",
    ]
  },
  {
    id: "55",
    title: "Deutz TCD 2012 L04 2V diesel engine",
    category: "engine",
    subcategory: "deutz",
    desc: "It is a water-cooled, 4-cylinder in-line engine with turbocharging. The engine delivers powerful performance with 100 kW (136 HP) at 2300 rpm. It is designed for construction and automotive use, such as for road rollers. It features fuel-efficient combustion technology and stable operation. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667809/2012_b1g61m.webp",
    ]
  },
  {
    id: "56",
    title: "Deutz diesel fuel pump",
    category: "engine",
    subcategory: "deutz",
    desc: "It is also interchangeable with Deutz part numbers 4103338, 4103662, and 04287258. The pump fits Deutz 2011 series engines, including BFL2011, TD2011, and D2011 models. It is commonly used in JLG boom and scissor lifts. The item pictured appears to be made of alloy steel and includes a separate O-ring seal. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667808/lift_pump_qo9ykv.jpg",
    ]
  },
  {
    id: "57",
    title: "Deutz fuel injection pump",
    category: "engine",
    subcategory: "deutz",
    desc: "This component is critical for a diesel engine's fuel supply system, pressurizing and controlling the timing and amount of fuel delivered to the cylinders. It operates using a plunger that reciprocates inside a barrel, building pressure as it moves up past a feed port to inject fuel. These pumps are commonly used in various engines, including those from Deutz and Volvo, as well as equipment like Bobcat skid steer loaders. The pump features a control rack mechanism and an exposed return spring assembly at the bottom.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667808/injection_pump_i9ibxx.jpg",
    ]
  },
  {
    id: "58",
    title: "Deutz fuel supply pump",
    category: "engine",
    subcategory: "deutz",
    desc: "It is compatible with various Deutz engines, including the 1012, 1013, 2012, and 2013 series. Key part numbers for this pump include 04503573, 02112673, and 02113800. The pump ensures stable fuel pressure in the injection system, which is crucial for engine performance. It is a genuine Deutz part and is typically offered with a 12-month warranty. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667806/pump_fuel_ryvpkg.jpg",
    ]
  },
  {
    id: "59",
    title: "Deutz Piston Ring Se",
    category: "engine",
    subcategory: "deutz",
    desc: "Piston rings are metallic split rings that fit into grooves on a piston in an internal combustion engine. They create a seal between the piston and the cylinder wall, which prevents gas from escaping during combustion and oil from entering the combustion chamber. The rings also help to transfer heat from the piston to the cylinder wall and regulate oil consumption. The product is from the brand SM Precision Parts. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667806/ring_deutz_baaocj.webp",
    ]
  },
  {
    id: "60",
    title: "piston rings",
    category: "engine",
    subcategory: "deutz",
    desc: "This is a set of Powerseal brand piston rings, used in internal combustion engines. The product range covers applications for American, European, Japanese, and Korean vehicles. The manufacturer is a leading supplier for both original equipment and aftermarket sales. The rings are produced in a diameter range of 40-220 mm. Specific applications include various Volvo and Mercedes models. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667805/ring_seal_hrw8pk.jpg",
    ]
  },
  {
    id: "61",
    title: "bulk cement tanker trailer",
    category: "compressor",
    // subcategory: "deutz",
    desc: "a bulk cement tanker trailer, also known as a cement bulker or silo trailer. It is used for the transportation and pneumatic unloading of dry powdered materials like cement, lime powder, and fly ash. The design is typically reinforced for vacuum to allow efficient loading and unloading. It features a specialized chassis, pneumatic piping system, and discharging units. The trailer has three axles for carrying capacity. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667831/bulker_ddeb3w.webp",
    ]
  },
  {
    id: "62",
    title: "G220-2 series compressor",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a Globaltech Makina G220-2 series compressor. It is a dry crankcase, 100% oil-free, air-cooled compressor. It is used for the discharge of materials transported in powder or granular form within silo trailers. The compressor has 3 pistons with a diameter of 220 mm. It can be powered by electric or diesel engines. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667847/2head_compressor_ox8qmy.jpg",
    ]
  },
  {
    id: "63",
    title: "G220-2 electric silo discharge compressor",
    category: "compressor",
    // subcategory: "deutz",
    desc: "The object in the image is a GlobalTech Makina G220-2 electric silo discharge compressor. It is a reciprocating piston type air compressor designed for use on cement bulkers and silo trailers. The compressor typically operates at 2-3.5 bar air pressure and has an airflow of 10200 liters per minute at 1500 RPM. It is designed to increase air pressure to facilitate the discharge of powdered or granular materials from silo trailers. The unit is available in various power options, including electric and diesel motor configurations. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667846/2-compressor-with-electric-motor_s7glkx.jpg",
    ]
  },
  {
    id: "64",
    title: " G220-2 series diesel engine air compressor",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a GlobalTech Makina G220-2 series diesel engine air compressor. It is a high-efficiency, direct-coupled system designed for pneumatic transportation. The unit is an independent working unit, allowing for flexible movement. It has 2 pistons with a diameter of 220 mm and a capacity of approximately 10200 lt/min airflow. The compressor provides quick discharging, saving time for transport companies. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667844/-air-compressor-withdiesel-engine-_n3ivdf.jpg",
    ]
  },
  {
    id: "65",
    title: "Rotary 6 aircraft engines",
    category: "compressor",
    // subcategory: "deutz",
    desc: "These are Daniel Rotary 6 aircraft engines. Air-cooled, two-stroke cycle rotary aircraft engine design. Designed and built by Paul Daniel of the Daniel Engine Company in 1918.The engines are mounted on mobile stands in what appears to be a workshop or museum setting.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667843/vWAPp9ornrKkP3k69WEb_giqfer.png",
    ]
  },
  {
    id: "66",
    title: "compressor piston",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a Confidence brand compressor piston. It is a spare part for a cement trailer compressor.The material used is likely cast iron, as the manufacturer casts its own parts in its foundry.The piston has three ring grooves.The product is made in Turkey.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667843/Aa7251b7456294ca0ac0fafd4592509619.jpg_350x350_gbgzxh.jpg",
    ]
  },
  {
    id: "67",
    title: "compressor cylinder head",
    category: "compressor",
    // subcategory: "deutz",
    desc: "The image is of a compressor cylinder head or machine head, which is a key component in various types of compressors and engines. It is typically made of cast iron or aluminum. The part is used in both two-wheeler and three-wheeler vehicles, as well as industrial compressors. It is a crucial component for sealing the top of the cylinder and housing valves. The part shown is a replacement or aftermarket spare part for maintenance and repair. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667842/A536460b44ed54e39a3dd82c3b36d0fc9D.jpg_350x350_ticw2f.jpg",
    ]
  },
  {
    id: "68",
    title: "metal hydraulic flange",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This appears to be a metal hydraulic flange, coupling hub, or similar machine component. It is likely made of steel or iron. The component features a central bore with a keyway for shaft mounting. It has three bolt holes for attachment to another surface or component. It is used in various industrial and engineering applications, such as hydraulic systems or power transmission. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667842/Aa72d3bed88314e98881e7d891d808186k.jpg_350x350_tiloqy.jpg",
    ]
  },
  {
    id: "69",
    title: "air compressor valves",
    category: "compressor",
    // subcategory: "deutz",
    desc: "The items in the image are air compressor valves. These essential components control the flow of air into and out of a compressor's cylinders, ensuring efficient operation. Key features: They manage air intake and exhaust, enhancing performance and reliability. The valves are made from high-quality, robust materials to withstand high pressure and temperature. They are integral to the operation of pneumatic tools and industrial machinery. The specific design appears to be a plate or discharge valve assembly. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667841/A9783da7eaff04527a1ac49530721218cx.jpg_350x350_bhh4of.jpg",
    ]
  },
  {
    id: "70",
    title: "compressor crankshaft",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a compressor crankshaft, a component used in reciprocating compressors to convert circular motion into reciprocating motion. Typically constructed from forged steel or carbon steel for durability. Features precision-machined surfaces and corrosion resistance.Used across various sectors, including industrial, automotive, and refrigeration applications.Essential for the high accuracy and efficiency of air compressors.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667840/A191835522d994905b1269f7951c5070d0.jpg_350x350_tujfz1.jpg",
    ]
  },
  {
    id: "71",
    title: "connecting rod",
    category: "compressor",
    // subcategory: "deutz",
    desc: "The image displays a connecting rod, a crucial component in internal combustion engines and compressors. It acts as a mechanical link between the piston and the crankshaft. Its primary function is to convert the linear (reciprocating) motion of the piston into the rotational motion of the crankshaft. Connecting rods are subject to significant tension, compression, bending, and buckling forces during operation. They are typically made from materials like steel or cast iron to withstand high stress and ensure durability. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667840/A05602323c3a64ac09d4b3b442e864df8c.jpg_350x350_y7lg4j.jpg",
    ]
  },
  {
    id: "72",
    title: "Air Compressor Tank",
    category: "compressor",
    // subcategory: "deutz",
    desc: "Air receivers, commonly referred to as vessels or tanks are used to store compressed air before it enters into the piping system and or equipment. In simpler terms, air receivers act as a buffer mechanism between the compressor and the fluctuating pressure caused by the changing demand.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667838/A2684b3c836aa4151b65d552f7658364c5.jpg_350x350_kt4vsz.jpg",
    ]
  },
  {
    id: "73",
    title: "metal bellows mechanical seal",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a metal bellows mechanical seal. Designed to handle moderate temperature applications, corrosive, abrasive, and viscous media. Used as valve stem sealing components in bellow seal valves to prevent fluid leakage. Features good floating and random compensation, which helps compensate for leakage caused by wear, axial movement, and vibration. Widely used in various industries, including refineries, petrochemicals, and chemical plants. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667838/A0ba7790e90f14b159a7de9ee58dcbbadj.jpg_350x350_hzjlkg.jpg",
    ]
  },
  {
    id: "74",
    title: "Hand Pumo Axle",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is likely a stainless steel hand pump axle or column pipe adapter, a type of automotive or industrial component. Material: Stainless steel. Usage: Used in applications such as hand pumps, submersible column pipes, or general automotive/industrial functions. Features: Rust-proof. Shape: Round, with a threaded top section.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667837/A4fa483301adf412782b6e9a4c924ff45c.jpg_350x350_ibv5wx.jpg",
    ]
  },
  {
    id: "75",
    title: "compressor cylinder head",
    category: "compressor",
    // subcategory: "deutz",
    desc: "It is a crucial replacement part designed for optimal airflow and efficiency in reciprocating compressors. The component is typically made of durable metal, such as cast iron or aluminum, to withstand high temperature and pressure. It features precision-engineered valves and seals to minimize leaks and ensure reliable performance. The specific design with the four large circular cutouts suggests a focus on weight reduction and heat dissipation. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667837/Ae53626015aba4eaf86d48b45f52c5c43T.jpg_350x350_meyoas.jpg",
    ]
  },
  {
    id: "76",
    title: "compressor piston",
    category: "compressor",
    // subcategory: "deutz",
    desc: "The image shows a cross-section of an engine or compressor piston. Key features include: Material: Typically made from aluminum alloy or forged steel for strength and light weight. Function: Forms a seal with the cylinder wall using piston rings to maintain compression and minimize oil consumption. Application: Used in internal combustion engines, air compressors, and hydraulic systems. Design: Features internal structural supports and a hollow design to reduce weight while managing high thermal and mechanical loads. Components: Includes grooves for piston rings and a bore for the wrist pin (gudgeon pin) that connects it to the connecting rod. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667836/A2f1d1969c0a144eca31fbffad70f544ek.jpeg_350x350_hbraeu.jpg",
    ]
  },
  {
    id: "77",
    title: "compressor housing",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is an industrial cast iron part, likely a housing or cover for heavy machinery like a compressor or an excavator. It is a cast iron spare part. It could be an engine housing, turbo bearing housing, or swing motor housing.It is designed for diesel or heavy fuel oil engines in various applications. The component has multiple bolt holes for secure mounting and attachment to other machine parts. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667836/A316721c567fd40fe8df0bc8257d23e24c.jpg_350x350_xxue8w.jpg",
    ]
  },
  {
    id: "78",
    title: "pressure safety or relief valve",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a pressure safety or relief valve. It is a critical safety device used to protect systems like pressure vessels, boilers, and pipelines from excessive pressure by automatically releasing fluid when a preset limit is reached. Key features: Function: Prevents equipment damage or failure due to overpressure. Material: Often made of durable materials like brass or stainless steel. Mechanism: Operates using a spring-loaded mechanism based on the counter-pressure principle. Application: Used across various industries including petrochemicals, HVAC, and general industrial systems. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667833/A35ca4c699dad4618bb419871a424fce2F.jpg_350x350_bhcehi.jpg",
    ]
  },
  {
    id: "79",
    title: "reciprocating air compressor cylinder block",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is likely a reciprocating air compressor cylinder block. It is a cast iron component featuring cooling fins to dissipate heat generated during the compression process. Function: It is a core component of a piston air compressor where air is compressed by a moving piston. Material: Typically made from a durable metal like cast iron. Features: Designed with a flanged top and bottom for secure mounting within a compressor assembly. Application: Used in various industrial air compressor systems. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667833/160mm_ohbuyz.avif",
    ]
  },
  {
    id: "80",
    title: "Compressor Turbo Fan",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a Hella Marine Turbo Fan. It is highly adjustable and can be pivoted in all directions. It has an impact-resistant housing and a soft plastic impeller. It is available in 12V or 24V options. It provides high air movement capacity with low power consumption. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667832/radiater_f6hjad.avif",
    ]
  },
  {
    id: "81",
    title: "Compressor reservoir breather cap",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a compressor or hydraulic reservoir breather cap, designed to allow air to enter and exit a system while filtering out contaminants. Function: Equalizes pressure buildup in reservoirs or engines, preventing damage to seals and gaskets. Contamination Control: Often includes a filter (though possibly without an air filter in this specific model) to prevent dirt and moisture from entering the system. Material: The component appears to be made of technopolymer or a similar durable plastic. Origin: Made in Türkiye.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667832/oil_cap_s2ewdf.avif",
    ]
  },
  {
    id: "82",
    title: "MG 063 pressure gauge",
    category: "compressor",
    // subcategory: "deutz",
    desc: "This is a Pakkens MG 063 pressure gauge (manometer). It is a mechanical instrument used to measure fluid intensity in pressurized systems like HVAC, plumbing, or compressors. Brand: Pakkens Type: Analog pressure gauge easurement Range: 0 to 6 bar (0 to 80 psi) Accuracy Class: CL 2.5 Connection: 1/4", 
        specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667843/Aaa69d4b989ad4ea59670dd113b77ac9cN.jpg_350x350_fu9ua2.jpg",
    ]
  },
  {
    id: "83",
    title: "R450 Automatic Voltage Regulator (AVR).",
    category: "electric",
    // subcategory: "deutz",
    desc: "The item is a Leroy Somer R450 Automatic Voltage Regulator (AVR). It is used to maintain the output voltage of an alternator. Designed for alternators with SHUNT, AREP, or PMG excitation systems. Provides voltage regulation of approximately +/- 0.5% at a steady state. Features include 'LAM' (Load Adjustment Module) and 'auto-adaptive LAM' systems to handle load impacts on the engine. Control is managed by transistors, ensuring regulation quality is independent of the applied load. Suitable for high levels of vibration and harsh environments. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667784/avr-r450_qj0huc.jpg",
    ]
  },
  {
    id: "84",
    title: "Electronics generator control module",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Deep Sea Electronics generator control module, specifically the DSE8620 MKII. It is designed for complex load sharing and synchronizing a single generator set with a mains supply. The module features multiple inputs and outputs for AC and DC voltages and currents, communication ports (RS232, RS485, CAN, ECU), and magnetic pickups. It can also be configured to function as a DSE8610 MKII Auto Start Load Sharing & Synchronizing Control Module. The device is made in the UK. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667781/DSE86205_mvd2mj.webp",
    ]
  },
  {
    id: "85",
    title: "R448 Automatic Voltage Regulator (AVR)",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Leroy Somer R448 Automatic Voltage Regulator (AVR) for a generator. It is an electronic component that provides closed-loop control of the generator output voltage. The design is based on half-wave phase-controlled rectifier principles. It is typically used for industrial applications and three-phase generators. Features include overload protection and automatic shut-off. Maximum output is DC125V 10A. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667783/R448-_tjzlny.jpg",
    ]
  },
  {
    id: "86",
    title: "7320 auto start generator controller",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Deep Sea Electronics (DSE) Model 7320 auto start generator controller. It is an Auto Mains Failure (AMF) control module suitable for various single, diesel or gas gen-set applications. The module monitors an extensive number of engine parameters and displays warnings, shutdown, and status information on its backlit LCD screen and illuminated LEDs. It provides real-time monitoring of generator performance, ensuring optimal operation and immediate alerts for maintenance needs. The controller can automatically start and stop the generator, and can also monitor and control it through remote communication. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667782/deepsee_7320_fxs3eu.jpg",
    ]
  },
  {
    id: "87",
    title: "Automatic Voltage Regulator (AVR) SX440",
    category: "electric",
    // subcategory: "deutz",
    desc: "It is a half-wave phase-controlled thyristor type AVR. It forms part of the excitation system for a brushless generator. The AVR circuitry includes under-speed and sensing loss protection features. It ensures a reliable supply of electricity by maintaining a steady output voltage regardless of the load. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667784/sx440_tzoozx.webp",
    ]
  },
  {
    id: "88",
    title: "24v fuel shutdown solenoid valve",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a 24V diesel engine fuel shutdown solenoid valve with part number RE516083. Function: It is used to cut off the fuel supply to stop a diesel engine. Voltage: The operating voltage is 24 VDC. Compatibility: It is compatible with Cummins engines and John Deere equipment. Part Number: The specific part number is RE516083. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667781/stop-solenoid_b5c33t.png",
    ]
  },
  {
    id: "89",
    title: "12V fuel shutoff solenoid",
    category: "electric",
    // subcategory: "deutz",
    desc: "The item pictured is a 12V fuel shutoff solenoid used in diesel engines for construction and agricultural equipment. Function: It controls the flow of fuel, effectively telling the engine when to start and stop. Voltage: It operates on a 12-volt DC electrical system. Part Numbers: Compatible part numbers include 1G577-60010, 1G577-60011, 6689034, and 2536022. Compatibility: This component is commonly used in Kubota V3300 and V3800 engines, as well as various Bobcat skid steer loaders such as the S220, S250, S300, and S330 models. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667779/_69983_pks0dx.jpg",
    ]
  },
  {
    id: "90",
    title: "12V fuel shut-off solenoid valve",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a 12V diesel engine fuel shut-off solenoid valve. Model: 1503ES-12S5SUC5S Function: Controls the flow of fuel to stop the engine. Voltage: 12V DC Material: Made of high-quality metal with copper wiring for durability and good conduction. Compatibility: Compatible with various engines, including certain Hyundai R-series excavator models and Yanmar engines.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667779/soloniod_lvbzcr.jpg",
    ]
  },
  {
    id: "91",
    title: "engine water temperature sensor",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a brass engine water temperature sensor. It has a 3/8'' NPT thread size. The alarm temperature threshold is 98°C. It operates within a wide voltage range of 6V to 24V. The measuring range is typically from 38°C to 120°C. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667777/w.t_suzpex.jpg",
    ]
  },
  {
    id: "92",
    title: "VDO-style oil pressure sensor ",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a universal VDO-style oil pressure sensor or sender. It is used to monitor oil pressure in an engine, often for generators. Function: Monitors and transmits oil pressure data to the engine controller or display for protection and diagnostics. Material: Typically made from aluminum alloy. Pressure Range: Commonly operates in a range of 0 to 10 bars. Connection: Features a 1/8 NPT male thread for connection to pipe fittings. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667777/622-333_bxklju.jpg",
    ]
  },
  {
    id: "93",
    title: "engine oil pressure sensor",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is an engine oil pressure sensor or switch sender. It is used with a pressure gauge and alarm lamp to sense changes in engine oil pressure. The product has a simple structure, is easy to install, and offers stable and reliable performance. It is commonly used in generators and various engines. The thread fitting is often NPT1/8 or M10x1. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667777/sensor_hw1us7.jpg",
    ]
  },
  {
    id: "94",
    title: "KUS water temperature sensors",
    category: "electric",
    // subcategory: "deutz",
    desc: "The image displays KUS water temperature sensors. Made from brass and compatible with most temperature gauges. Used for measuring engine coolant or oil temperature in various vehicles and generators. Available with different thread types, such as 3/8'' NPT. Designed to operate up to a maximum of 120° Celsius. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667776/-water-temperature-sensors_bhjg28.jpg",
    ]
  },
  {
    id: "95",
    title: "6120 MKIII Auto Mains Failure (AMF) Control Module",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Deep Sea Electronics (DSE) 6120 MKIII Auto Mains Failure (AMF) Control Module. It is designed to automatically manage and monitor single diesel and gas generator sets. The module displays warnings, shutdown, and engine status information on a large, back-lit LCD screen and illuminated LEDs. It is compatible with both electronic (CAN) and non-electronic engines. The unit provides comprehensive monitoring and protection functions for generator sets. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667775/DSE6120-MKII_u73tu4.jpg",
    ]
  },
  {
    id: "96",
    title: " VDO 310-012 Cockpit Style Electrical Oil Temperature Gauge and sender kit",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a VDO 310-012 Cockpit Style Electrical Oil Temperature Gauge and sender kit. Brand: VDO Type: Electrical oil temperature gauge and sender unit Measurement Range: 120°F to 300°F Size: 2 1/16 (52mm) diameter Sender Thread: 1/8-27 NPT",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667775/VDO-_kwnjoc.webp",
    ]
  },
  {
    id: "97",
    title: "DSE4520 MKII Auto Mains Failure (AMF) generator control module",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a DSE4520 MKII Auto Mains Failure (AMF) generator control module. Automatically detects utility power failure and starts the generator. Monitors various parameters including engine speed, oil pressure, and voltage. Features an easy-to-read LCD display for clear alerts and information. Provides complete monitoring and protection for generators. Suitable for both EFI and non-EFI systems using diesel, gas, or gasoline. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667775/s-l400_l9v8z5.jpg",
    ]
  },
  {
    id: "98",
    title: "Deutz starter motor",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Deutz starter motor. It is an electric motor used to initiate the operation of an engine by rotating the flywheel. The component in the image is a high-power version, possibly a 4.0kW Deutz 913 model. It is designed for high reliability and durability in demanding environments. The starter motor has 9 teeth and operates on 12 volts. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667767/st_likcqx.avif",
    ]
  },
  {
    id: "99",
    title: "55A OEM Letrika alternator",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a new 55A OEM Letrika alternator compatible with Deutz-Fahr tractors and engines. Rated Voltage: 28 volts.Current Output: 55 amps at full speed (2000 rpm).Ensures optimal performance and durability for the engine's electrical system.Compatible with various Deutz engine models including BF6M1013C, BF4M1013, BF6M1015, TCD2013, BF4L913, BF4L914, FL912W, and F8L413FW.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667767/alntr_k2cr7j.webp",
    ]
  },
  {
    id: "100",
    title: "Engines starter motor",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Foley Engines starter motor. It is a 9-tooth starter designed for specific Deutz 1011F and 2011 series engines. It comes in both 12-volt (4.0kW) and 24-volt options. The starter replaces several Deutz part numbers, including 01181570, 01182179, 01182388, and 04300287. High quality and durability are essential for reliable engine operation. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667766/IMG_6563-scaled_jdwpdc.jpg",
    ]
  },
  {
    id: "101",
    title: "Common Rail Fuel Pressure Sensor",
    category: "electric",
    // subcategory: "deutz",
    desc: "The item shown is a Bosch Common Rail Fuel Pressure Sensor, part number 0281002937. Function: It measures the fuel pressure within the fuel rail and sends this data to the engine control module (ECM). Purpose: This information helps the ECM regulate fuel pump speed and optimize fuel injection for smooth engine performance. Compatibility: This specific sensor is compatible with various vehicles, including certain Kobelco excavators and models for JACK vehicles.Type: It is a resistance strain gauge pressure sensor. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667766/common-rail-sensor-_mdcxnf.png",
    ]
  },
  {
    id: "102",
    title: "24V 50 Amp Alternator",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a Rareelectrical 24V 50 Amp Alternator. Voltage and Amperage: The unit is a 24-volt, 50-amp alternator. Compatibility: It is compatible with various Caterpillar heavy machinery, including certain track tractors and wheel loaders. Design: The alternator features a bi-directional rotation and an internal regulator. Part Numbers: It replaces several OEM part numbers from AC Delco and Caterpillar. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/-amp-alternator_p2tvwp.jpg",
    ]
  },
  {
    id: "103",
    title: "Automatic Voltage Regulator (AVR) module for a generator",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is a GAVR-8A Automatic Voltage Regulator (AVR) module for a generator. It is used to maintain a stable voltage output. Input Voltage: Programmable for 110, 220, or 400 VAC.Current: Provides 3A continuous current, with 5A for 10 seconds (non-condensing). Features: Includes under-frequency protection, soft-start voltage ramping, and EMI suppression. Design: Features a rugged, compact design with a built-in 8 Amp fuse for protection against power surges.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/8amp_ut7jrm.avif",
    ]
  },
  {
    id: "104",
    title: "R250 Automatic Voltage Regulator (AVR)",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is an R250 Automatic Voltage Regulator (AVR) for a generator.     It is designed for brushless generators with shunt excitation systems.  The module automatically maintains a steady output voltage, which improves generator reliability and performance.  It offers excellent voltage regulation with an accuracy of around \(\pm 0.5\%\) at a steady state.  The device is suitable for high levels of vibration and harsh environments. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/r250_ind4j7.jpg",
    ]
  },
  {
    id: "105",
    title: "engine oil pressure sensor",
    category: "electric",
    // subcategory: "deutz",
    desc: "This is an engine oil pressure sensor, part number 4921497, used in various vehicles, including certain Dodge Ram trucks and Cummins engines. It is a 3-pin brass sensor designed to detect oil pressure and ensure the normal function of the lubrication system. It is a direct replacement part manufactured to enhance durability and provide stable performance. The sensor helps protect the engine by monitoring oil levels and pressure values. It is compatible with specific Cummins engine models like N14, ISM, and 5.9L ISF/QSF, among others. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667765/sensor._nh237x.jpg",
    ]
  },
  {
    id: "106",
    title: "engine filters and maintenance products",
    category: "filter",
    // subcategory: "deutz",
    desc: "The image displays a range of Fleetguard engine filters and maintenance products. These are used for air, fuel, hydraulic, and lubrication filtration in diesel engines, transmissions, and industrial applications. Fleetguard is a global leader in designing and manufacturing OEM and aftermarket filtration solutions. The products are designed to provide maximum engine protection and longer filter life, minimizing operating costs. Specific filters visible include the LF3000 lube filter, the FS100 fuel/water separator, and the WF2071 coolant filter. The company provides filtration for heavy-, medium-, and light-duty trucks, as well as equipment for construction, mining, agriculture, and marine applications. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667791/fleetguard-parts_r9suii.jpg",
    ]
  },
  {
    id: "107",
    title: "MANN-FILTER automotive filters",
    category: "filter",
    // subcategory: "deutz",
    desc: "The image displays a selection of MANN-FILTER brand automotive filters. Premium Quality: MANN-FILTER specializes in original equipment (OE) quality filters for a wide range of applications. Variety of Types: The image includes various types of filters, such as oil, air, and fuel filters. Engine Protection: These filters are designed to protect engines and other machinery from contaminants like dust, dirt, and debris. Extensive Range: The brand offers a vast catalog of filter products for numerous vehicle types and industrial applications. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667790/mann_mbuqip.webp",
    ]
  },
  {
    id: "108",
    title: "variety of heavy-duty Baldwin Filters",
    category: "filter",
    // subcategory: "deutz",
    desc: "The image displays a variety of heavy-duty Baldwin Filters. Baldwin Filters is a brand of Parker Engine Mobile Aftermarket Division, specializing in filtration products for light, medium, and heavy-duty mobile applications. The product range includes air, lube, fuel, coolant, hydraulic, and transmission filters designed to protect equipment from wear particles and contamination. The filters are engineered using advanced technologies and premium-grade materials to ensure superior filtration efficiency and maximum protection. The brand provides a wide range of filters for various industries, including automotive, construction, industrial, and agriculture. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667789/baldwin-filters_rvjayz.jpg",
    ]
  },
  {
    id: "108",
    title: "Perkins engine filters, including air, oil, and fuel filters",
    category: "filter",
    // subcategory: "deutz",
    desc: "The image displays a variety of Perkins engine filters, including air, oil, and fuel filters. Perkins filters are engineered to provide optimal filtration, effectively removing contaminants that can cause engine wear and tear. These components are used in Perkins diesel engines found in various machinery, such as generators, agricultural equipment, and construction equipment. The assortment includes different types and sizes, some in branded blue boxes. Genuine and aftermarket parts are available for different engine models. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667789/perkins_filters_nyisob.jpg",
    ]
  },
  {
    id: "109",
    title: "air filter assembly and replacement elements",
    category: "filter",
    // subcategory: "deutz",
    desc: "This is a Deutz air filter assembly and replacement elements. Provides reliable filtration of combustion air for internal combustion engines.Prevents unfiltered air from passing through the system.Ensures a perfect fit and maximum filter lifetime due to careful material selection.Essential for optimum engine performance and longevity.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667788/deutz_air_cleaner_ysrsei.jpg",
    ]
  },
  {
    id: "110",
    title: " Deutz engine filters",
    category: "filter",
    // subcategory: "deutz",
    desc: "These are genuine Deutz engine filters. The filters are used for diesel engines and mechanical systems.Part numbers visible include 01174416 and 01183574. They are available in materials such as aluminum. Proper filtration is crucial for engine performance and lifespan.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667787/deutz-genuine-filters-_hmcfos.webp",
    ]
  },
  {
    id: "111",
    title: "Atlas Copco 2911 0068 00 Air/Oil Separator",
    category: "filter",
    // subcategory: "deutz",
    desc: "This is an Atlas Copco 2911 0068 00 Air/Oil Separator element. It is compatible with various Atlas Copco XAS model air compressors, such as the XAS 97, XAS130, and XAS150. The separator is designed to efficiently remove residual oil from the compressed air stream before it enters the distribution system. It is a heavy-duty replacement part manufactured to meet or exceed OEM specifications. The component is vital for enhancing the efficiency and longevity of air compressor systems. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667786/seprater_hmxte4.jpg",
    ]
  },
  {
    id: "112",
    title: "air oil separator kit for oil-injected screw compressor",
    category: "filter",
    // subcategory: "deutz",
    desc: "This is an air oil separator kit for oil-injected screw compressors. Designed to separate oil vapor from the compressed air stream, ensuring clean air output. Allows the separated oil to return to the compressor system for reuse. Typically includes the separator element and accompanying O-rings/gaskets, as shown in the image. Essential component for compressor operation, contributing to efficiency and longevity. Commonly used in industrial applications and available as replacement parts for various compressor brands like Atlas Copco and Ingersoll Rand. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667786/sep_atlas_tuhzvd.webp",
    ]
  },
  {
    id: "113",
    title: "Caterpillar (Cat) brand engine filters,",
    category: "filter",
    // subcategory: "deutz",
    desc: "The image displays a variety of Caterpillar (Cat) brand engine filters, including fuel and oil filters. These industrial-strength filters are designed to protect engine components. Key specifications and features include: Brand: Caterpillar (Cat) Function: Filters remove contaminants, particles, and water from fuel, oil, and air systems to ensure optimal engine performance. Material: Typical materials include steel housing and cellulose filter media. Design: Engineered to provide maximum filtration efficiency and consistent quality for specific Cat equipment. Models: Specific models visible include the 1R-1808 oil filter and 1R-0739 fuel filter. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667785/filter_cat_lnbiev.png",
    ]
  },
  {
    id: "114",
    title: "Kubota maintenance filters",
    category: "filter",
    // subcategory: "deutz",
    desc: "The image displays a set of genuine Kubota maintenance filters, likely part of a service kit for utility vehicles like the RTV-X1110 or F3060/F3680 mowers. The kit includes filters for oil (W21ES01600), fuel, air (TC020-16324), and hydraulics (W21TSH6600). Genuine Kubota parts are engineered to exact specifications to maintain top performance and ensure the engine remains emission certified. The filters are designed for robust construction and a larger filtration area to provide a high level of protection for the engine's systems. Specific kit numbers for compatible models include W21TK00550 for the RTV-X1110 and W21TK00485 for the F3060/F3680 series. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667785/kubota_filters_ezumjh.jpg",
    ]
  },
  {
    id: "115",
    title: "engine cooling fan blade",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a Perkins engine cooling fan blade, likely part number 2485C555 or 2485C557, used in diesel engines such as the Perkins 1106 model. It is a 7-blade plastic radiator fan. It is designed to hold its shape under pressure for improved performance. The fan is compatible with various Perkins engine models, including 1106C-E60TA and 1106D-E66TA. It is an engine part for earthmoving and other heavy machinery. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673828/2485C557_jgwwbs.jpg",
    ]
  },
  {
    id: "116",
    title: "gear coupling sleeves",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "These are E-FLEX gear coupling sleeves. They are a type of flexible coupling used to transmit torque while absorbing shock loads and dampening vibrations between two shafts. The sleeves are constructed from nitrile rubber, which offers resistance to oils and acids. They are commonly used as replacement parts for various air compressors, including Atlas Copco models. The text on the parts includes'GEAR BAPPLEEVE-FLEX' and '0718-8J 20220'.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673882/zvrxqqsz7t6m2yomcxmc_sjwotr.jpg",
    ]
  },
  {
    id: "117",
    title: "05614069 drive coupling",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a Bomag 05614069 drive coupling used in various smooth drum rollers. It is a genuine or aftermarket replacement part for Bomag models, including the BW211D-40, BW177 D-3, and CC122. It is a crucial component for power transmission in heavy machinery. The part features a splined inner bore and external gear teeth. It has three bolt holes on the face for mounting. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673880/ytwctgpj7d18kgped30v_tbshwp.jpg",
    ]
  },
  {
    id: "118",
    title: "rubber anti-vibration mounts",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "These are rubber anti-vibration mounts. They are designed to absorb shock and isolate vibrations in machinery, protecting equipment from damage. hey are typically used in automotive, marine, and industrial applications, such as engine and transmission mountings. The mounts use rubber in shear and compression to provide protection in multiple axes. The metal parts are typically steel, with the rubber material often being natural rubber. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673878/yi9koaxg3hyfki4wnaff_usbigv.jpg",
    ]
  },
  {
    id: "119",
    title: "rubber anti-vibration mount or damper",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an industrial rubber anti-vibration mount or damper. It is used to absorb shock and vibration in heavy machinery. Acts as a vibration isolator and shock absorber for industrial machines.Protects more expensive components from wear and tear caused by vibration.Used in various applications, including road rollers and compactors. Features a bolted design for secure mounting.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673877/wjglhfwzubmlgjyzdihz_jeaoap.jpg",
    ]
  },
  {
    id: "120",
    title: "anti-vibration rubber mounts and pads",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "The image displays various types of industrial anti-vibration rubber mounts and pads. These components are designed to dampen vibrations and absorb shocks generated by moving parts in machinery. They are commonly used in road construction machinery such as soil compactors, tandem rollers, and vibratory plates. The mounts help protect more expensive components from wear and tear caused by excessive vibration. They are available in various shapes and sizes, including square-plated, round, and cylindrical designs, to suit different applications. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673875/v9pcxkohnrgz0uuiwtev_tdf9nm.jpg",
    ]
  },
  {
    id: "121",
    title: "nylon hydraulic pump flange",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a nylon hydraulic pump flange, commonly an aftermarket part compatible with Caterpillar (CAT) heavy machinery. Made from durable nylon material for resistance to wear and tear. Functions as a drive coupling or connection plate in a hydraulic system. Specific part numbers often associated include 102-1733 and 141-7562. Features an internal spline (teeth) and external bolt holes for mounting. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673874/pcuhgqprhhfw0jonvwzp_gewaop.jpg",
    ]
  },
  {
    id: "122",
    title: "flexible rubber coupling",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a flexible rubber coupling, compatible with part numbers 48HE D48407, D-48407, 1604076100, and 1604-0761-00. It is designed as a replacement for Centa Bowex, Atlas Copco, and KTR RHEINE air compressors. The coupling is made from high-quality materials to ensure reliable performance. It is typically used in various Atlas Copco models, such as the XAS series of portable compressors. The product has stable characteristics and high reliability for industrial applications. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673872/oxbmyliaygrfjf43bsol_gz5mgg.jpg",
    ]
  },
  {
    id: "123",
    title: "air compressor flexible coupling element",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an air compressor flexible coupling element, a component used to connect motor and compressor shafts. Function: It transmits torque while accommodating minor misalignments, absorbing shocks and vibrations to protect connected machinery. Material: Typically made from a durable elastic material, such as rubber. Part Numbers: Similar items are associated with part numbers like 1604-0761-00, 46492955, and 22509699. Compatibility: They are compatible with various brands of air compressors, including Atlas Copco, Ingersoll Rand, and Kaeser. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673872/ltiq1emwbz7uesyxufmm_xyzxf2.jpg",
    ]
  },
  {
    id: "124",
    title: "fan blade for an air compressor",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a fan blade for an air compressor, likely an Atlas Copco model. Usage: Used in industrial screw air compressors for cooling. Blades: Features 9 blades. Material/Color: The blades are typically made of plastic and are white or off-white in color. Compatibility: Specific part numbers fit various models, such as 1613745400 or 1613674900 for Atlas Copco air compressors. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673870/fan_afhypq.jpg",
    ]
  },
  {
    id: "125",
    title: "excavator coupling plate rubber",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an excavator coupling plate rubber, also known as a rubber coupling or flexible clutch. Function: It is used in excavators to connect the engine to the hydraulic pump, allowing for flexibility and absorbing shock. Material: Made from premium, impact-resistant rubber. Compatibility: This specific style (likely 45H or 7Y-0460) fits various Hitachi and Caterpillar excavator models. Durability: Designed for high performance and a long working life. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673868/excavtor_ejwfzu.jpg",
    ]
  },
  {
    id: "126",
    title: " flexible rubber hydraulic pump coupling",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a flexible rubber hydraulic pump coupling, commonly used in excavators and heavy machinery. It is designed to transmit torque and protect hydraulic pump components by absorbing shocks and dampening vibration. The component is made from durable, flexible rubber resistant to impact and wear. It is compatible with various excavator brands, including Komatsu, Hitachi, and Kobelco. Specific part numbers and compatibility models vary (e.g., PC60, 4AS, 30AS, 20T-01-31110). ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673867/Engine-Shaft-Couplings_avif_z1xpgw.jpg",
    ]
  },
  {
    id: "127",
    title: "rubber shock absorber or vibration mount",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a rubber shock absorber or vibration mount used in heavy machinery like road rollers. Designed to damp shocks and vibrations in both vertical and lateral directions.Used in industrial applications for crushers and road compactors.Provides protection against metal-to-metal bottoming.Compatible with various brands, including Dynapac, CAT, and Sakai.",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673839/dynapac_x21vpt.jpg",
    ]
  },
  {
    id: "128",
    title: "road roller coupling",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a road roller coupling. It is used in road roller machines. It is typically made from durable materials like ABS plastic. The coupling wheel helps absorb shocks and isolate vibrations, protecting engine and transmission systems. This specific model appears to be a BoWex FLE-PA style coupling. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673837/d440_zns9sd.jpg",
    ]
  },
  {
    id: "129",
    title: "engine cooling fan blade",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an engine cooling fan blade. Made from durable plastic materials designed to handle vibration and heat cycles. Moves air efficiently to maintain optimal engine operating temperature and prevent overheating. Specific part numbers (e.g., VOE3827491, 2485C521) vary depending on the engine or machinery it is compatible with, such as certain Volvo or Perkins models. Features multiple blades for effective air circulation. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673835/cat_fan_kbo0ff.jpg",
    ]
  },
  {
    id: "130",
    title: "replacement coupling element",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "The image displays a replacement coupling element, part number LCD-0075-47-C. It is compatible with Sullair 185 and Ingersoll Rand P185 air compressors. The inner diameter is typically 35mm. The coupling connects the motor or engine shaft to the compressor's shaft to transfer rotational motion and torque. It is designed for smooth torque transfer, precise alignment, and vibration reduction. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673836/Coupling-O_agvufv.jpg",
    ]
  },
  {
    id: "131",
    title: "anti-vibration rubber mounts",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "The image displays a variety of anti-vibration rubber mounts, also known as vibration isolators or shock mounts, used to reduce or isolate vibrations in machinery, equipment, and structures. They are key components in reducing noise and vibration in heavy machinery and equipment. The mounts permit relative movement of suspended mass to the ground and isolate the effects of noise, vibration, and shock. Different types, such as bobbin mounts and pedestal mounts, are designed for various industrial applications and load types. The effectiveness of isolation depends on the specific design and the type of rubber used. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673832/Anti-Vibration_upfbvg.jpg",
    ]
  },
  {
    id: "132",
    title: "plastic flywheel coupling",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a plastic flywheel coupling used in heavy machinery. It has 42 teeth on the inner diameter. It is designed to connect a hydraulic pump to an engine. It is used in concrete transit mixers and excavators. It is available as an aftermarket or replacement part from various suppliers. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673833/cat_coup_httypb.jpg",
    ]
  },
  {
    id: "133",
    title: "metal-cased anti-vibration rubber mounts",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "These are metal-cased anti-vibration rubber mounts used as shock absorbers for machinery. They are designed to absorb vibrations and reduce noise generated by machines. The mounts feature a fail-safe design and are constructed with specially engineered, oil-resistant rubber and metal components. They are commonly used in applications such as generators, engines, pumps, and compressors. The numbers stamped on the mounts (e.g., 200, 400, 600, 1000) likely indicate their load capacity in kilograms. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673831/anti-vib_tx7nij.jpg",
    ]
  },
  {
    id: "134",
    title: "anti-vibration engine mounts",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "These are anti-vibration engine mounts used for isolating vibrations in machinery and engines. They are designed to reduce noise and vibration for smoother operation of equipment like marine engines, generators, pumps, and compressors. The mounts typically feature a rubber element bonded to metal components to provide dampening. The design with an overload stop makes them failsafe and suitable for marine propulsion engines, as they can accommodate thrust. They help protect the engine from externally generated shock loads during operation. ",
    specs: "Hardened Steel Shaft | Multi-Lip Seal | Dynamic Balanced Impeller",
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673830/antivib_zxlnsz.jpg",
    ]
  },
  {
    id: "135",
    title: "rubber vibration dampening mount",
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a rubber vibration dampening mount, also known as a rubber buffer or shock absorber. It is used as a dynamic buffer between moving components and structural frameworks to absorb and dissipate harmful vibrations generated by heavy-duty machinery. Function: Reduces stress transmission, absorbs impact, and minimizes noise in machinery. Material: Made from natural rubber and typically includes iron plates or threaded inserts for mounting. Application: Commonly used in construction and road-making machinery like road rollers, compactors, and excavators. Specific Models: Similar mounts are available for brands such as Dynapac and Caterpillar (part number 227-0172). ",
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