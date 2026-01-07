
export type Language = 'en' | 'ar';

export interface TranslationSet {
  navHome: string;
  navAbout: string;
  navProducts: string;
  navContact: string;
  ctaInquiry: string;
  heroTitle: string;
  heroTagline: string;
  heroDesc: string;
  heroBtnProducts: string;
  heroBtnInquiry: string;
  statsProducts: string;
  statsExperience: string;
  statsProjects: string;
  statsClients: string;
  launchTitle: string;
  launchBadge: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText: string;
  productCategories: string;
  faqTitle: string;
  contactTitle: string;
  footerTagline: string;
  whatsappTooltip: string;
  testimonialTitle: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'engine' | 'spare' | 'filter' | 'compressor';
  desc: string;
  specs: string;
  image: string;
}
