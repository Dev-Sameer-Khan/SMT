import React, { useState, useEffect, createContext, useContext, Suspense, lazy } from "react";
import { HashRouter, Routes, Route, Link, useLocation, Router, BrowserRouter } from "react-router-dom";
import { Language, TranslationSet } from "./types";
import { TRANSLATIONS } from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TernsOfService"));
const ErrorPage = lazy(() => import("./pages/ErorrPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-black/60 text-sm">Loading...</p>
    </div>
  </div>
);

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSet;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const { lang, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/966532962420"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 ${
        lang === "ar" ? "left-8" : "right-8"
      } will-change-[transform,opacity] z-30 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}`}
      title={t.whatsappTooltip}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span
        className={`max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ${
          lang === "ar" ? "mr-0 group-hover:mr-2" : "ml-0 group-hover:ml-2"
        } font-semibold text-sm`}
      >
        {t.whatsappTooltip}
      </span>
    </a>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");

  const value = {
    lang,
    setLang,
    t: TRANSLATIONS[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {/* <HashRouter> */}
      <BrowserRouter>
        <ScrollToTop />
        <div
          className={`min-h-screen ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <PerformanceOptimizer />
          <Header />
          <main className="overflow-hidden">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <SEO
                        title="SMT Engines | Global Industrial Parts & Engineering Solutions"
                        description="Trusted since 2014, SMT Engines provides genuine OEM and aftermarket engine parts for logistics and construction industries across India and Saudi Arabia. Engineering reliability for the world's most demanding job sites."
                        keywords="OEM engine parts, aftermarket industrial parts, heavy machinery spares Saudi Arabia, construction equipment parts India, industrial maintenance services, SMT Engines"
                      />
                      <StructuredData type="website" />
                      <StructuredData type="organization" />
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <SEO
                        title="Our Heritage & Expertise | SMT Engines Industrial Precision"
                        description="Delivering quality and trust since 2014. Learn how SMT Engines supports global supply chains with ISO-certified industrial parts and high-performance engineering solutions."
                        keywords="SMT Engines history, industrial precision solutions, engine spare parts supplier, ISO 9001:2015 engineering"
                      />
                      <StructuredData type="breadcrumb" />
                      <About />
                    </>
                  }
                />
                <Route
                  path="/products"
                  element={
                    <>
                      <SEO
                        title="Industrial Parts Catalog | Genuine OEM & Aftermarket Spares"
                        description="Explore 100,000+ high-performance parts. From engine components to compressors and filters, we supply precision-engineered parts for logistics and construction machinery."
                        keywords="engine components, industrial filters, compressor spare parts, heavy duty engine spares, high-performance aftermarket parts"
                      />
                      <StructuredData type="breadcrumb" />
                      <ProductsPage />
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <SEO
                        title="Contact SMT Engines | Technical Support & Parts Inquiry"
                        description="Get expert engineering support or a quote for industrial spare parts. Our team in India and Saudi Arabia is available 24/7 for your logistics and construction needs."
                        keywords="contact industrial parts supplier, technical engine support, request a quote, SMT Engines Saudi Arabia office"
                      />
                      <StructuredData type="breadcrumb" />
                      <Contact />
                    </>
                  }
                />
                <Route
                  path="/privacy-policy"
                  element={
                    <>
                      <SEO
                        title="Privacy Policy"
                        description="Privacy policy for Sumou Al Ebdaa Est (SMT) - Learn how we protect your data and ensure secure transactions."
                        noindex={true}
                      />
                      <PrivacyPolicy />
                    </>
                  }
                />
                <Route
                  path="/terms-of-service"
                  element={
                    <>
                      <SEO
                        title="Terms of Service"
                        description="Terms of service for Sumou Al Ebdaa Est (SMT) - B2B engagement terms and conditions."
                        noindex={true}
                      />
                      <TermsOfService />
                    </>
                  }
                />
                <Route
                  path="/product-details/:id"
                  element={
                    <>
                      <StructuredData type="breadcrumb" />
                      <ProductDetails />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <SEO title="Page Not Found" noindex={true} />
                      <ErrorPage />
                    </>
                  }
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
      {/* </HashRouter> */}
    </LanguageContext.Provider>
  );
};

export default App;
