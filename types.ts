
export type Language = 'en' | 'ar';

export interface TranslationSet {
  // Navigation
  navHome: string;
  navAbout: string;
  navProducts: string;
  navContact: string;
  ctaInquiry: string;
  
  // Hero Section
  heroTitle: string;
  heroTagline: string;
  heroDesc: string;
  heroBtnProducts: string;
  heroBtnInquiry: string;
  
  // Stats
  statsProducts: string;
  statsExperience: string;
  statsProjects: string;
  statsClients: string;
  
  // Launch Section
  launchTitle: string;
  launchBadge: string;
  
  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText: string;
  
  // Products
  productCategories: string;
  catalogTitle: string;
  coreInventory: string;
  catalogDesc: string;
  categoriesTitle: string;
  allComponents: string;
  engineParts: string;
  compressors: string;
  filters: string;
  electricItem: string;
  rubberCoupling: string;
  viewProduct: string;
  inquireNow: string;
  cantFindPart: string;
  cantFindPartDesc: string;
  requestCustomPart: string;
  
  // Product Details
  backToProducts: string;
  productDescription: string;
  productFeatures: string;
  contactViaWhatsApp: string;
  requestTechnicalQuote: string;
  viewAllProducts: string;
  whyChooseUs: string;
  engineeringExcellence: string;
  moreFromCategory: string;
  explore: string;
  ourRecommendations: string;
  youMightAlsoLike: string;
  clientReviews: string;
  whatClientsSay: string;
  frequentlyAskedQuestions: string;
  productInfoSupport: string;
  needMoreInfo: string;
  contactForm: string;
  whatsappDirect: string;
  category: string;
  specifications: string;
  
  // FAQ
  faqTitle: string;
  
  // Contact
  contactTitle: string;
  establishConnection: string;
  contactDesc: string;
  operationalHours: string;
  encryption: string;
  location: string;
  phoneNumber: string;
  email: string;
  technicalInquiry: string;
  authorizedPersonnel: string;
  corporateEmail: string;
  directContact: string;
  organizationName: string;
  technicalDetails: string;
  executeTransmission: string;
  dataTransmitted: string;
  dataTransmittedDesc: string;
  resetForm: string;
  
  // Footer
  footerTagline: string;
  navigation: string;
  divisions: string;
  engineComponents: string;
  industrialFiltration: string;
  screwCompressors: string;
  heavySpares: string;
  globalHub: string;
  termsOfService: string;
  privacyPolicy: string;
  
  // Home Page
  portfolio: string;
  exploreFullInventory: string;
  aboutUs: string;
  clinicalPrecision: string;
  engineeringExpertise: string;
  reliabilityEngineered: string;
  ourMission: string;
  ourVision: string;
  getInTouch: string;
  connectWithEngineering: string;
  contactDesc2: string;
  gotoTechnicalDesk: string;
  technicalSupport: string;
  directHotline: string;
  globalHQ: string;
  europeHub: string;
  knowledgeBase: string;
  
  // Testimonials
  testimonialTitle: string;
  verifiedReliability: string;
  
  // Customers
  ourCompanies: string;
  trustedBy: string;
  globalBrands: string;
  
  // Error Page
  systemAnomaly: string;
  routeNotFound: string;
  errorDesc: string;
  rebootToHome: string;
  
  // WhatsApp
  whatsappTooltip: string;
  
  // Subcategories (for dynamic access)
  subcategoryLabels?: {
    pistons: string;
    cylinders: string;
    perkins: string;
    bearings: string;
    gaskets: string;
    // screw: string;
    // piston: string;
    // vanes: string;
    // rotary: string;
  };
  
  // Product categories (for dynamic access)
  productCategoryLabels?: {
    all: string;
    engine: string;
    compressor: string;
    filter: string;
    rubberCoupling:  string;
    electric :string;
  };
  
  // Product subcategories (for dynamic access)
  productSubcategories?: {
    engine: Array<{ id: string; label: string }>;
    // compressor: Array<{ id: string; label: string }>;
  };
}

export interface Product {
  id: string;
  title: string;
  category: 'engine' | 'electric' | 'rubberCoupling' | 'filter' | 'compressor';
  /**
   * Optional subcategory used for finer filtering (e.g. pistons, screw, rotary, etc.).
   * Matches the ids defined in the engine / compressor subcategory lists.
   */
  subcategory?:
    | 'pistons'
    | 'cylinders'
    | 'perkins'
    | 'bearings'
    | 'gaskets'
  desc: string;
  specs: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  location: string;
}
