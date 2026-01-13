import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../App';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [desktopSubMenuOpen, setDesktopSubMenuOpen] = useState<string | null>(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when language changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsMenuOpen(false);
    setDesktopSubMenuOpen(null);
    setMobileSubMenuOpen(null);
  }, [lang]);

  const navItems = [
    { name: t.navHome, path: '/' },
    { name: t.navAbout, path: '/about' },
    { name: t.navProducts, path: '/products' },
    { name: t.navContact, path: '/contact' },
  ];

  const productCategories = [
    { id: 'all', label: t.allComponents, path: '/products' },
    { 
      id: 'engine', 
      label: t.engineParts, 
      path: '/products?category=engine',
      subcategories: (t.productSubcategories?.engine || []).map(sub => ({
        id: sub.id,
        label: sub.label,
        path: `/products?category=engine&subcategory=${sub.id}`
      }))
    },
    { 
      id: 'compressor', 
      label: t.compressors, 
      path: '/products?category=compressor',
      // subcategories: (t.productSubcategories?.compressor || []).map(sub => ({
      //   id: sub.id,
      //   label: sub.label,
      //   path: `/products?category=compressor&subcategory=${sub.id}`
      // }))
    },
    { id: 'filter', label: t.filters, path: '/products?category=filter' },
    { id: 'electric', label: t.electricItem, path: '/products?category=electric' },
    { id: 'rubberCoupling', label: t.rubberCoupling, path: '/products?category=rubberCoupling' },
  ];

  const isRTL = lang === 'ar';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 will-change-[background,padding] py-0 bg-white shadow-md`}
      >
        <div className="container mx-auto lg:pr-6 lg:pl-0 pl-3 pr-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <img className="h-16 md:h-20 lg:h-28 max-h-[72px] md:max-h-[80px] lg:max-h-[112px] w-auto" src="/logo2.png" alt="Sumou Al Ebdaa Est (SMT) Logo" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.path === '/products') {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setProductsMenuOpen(true)}
                    onMouseLeave={() => {
                      setProductsMenuOpen(false);
                      setDesktopSubMenuOpen(null);
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-1 ${
                        location.pathname === item.path
                          ? 'text-blue-500'
                          : 'text-black hover:text-black/60'
                      }`}
                      tabIndex={0}
                      onFocus={() => setProductsMenuOpen(true)}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${productsMenuOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 bg-white shadow-xl rounded-sm border border-gray-100 min-w-[220px] py-2 transition-all duration-300 ${
                        productsMenuOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {productCategories.map((category) =>
                        category.subcategories ? (
                          <div
                            key={category.id}
                            className="group relative"
                            onMouseEnter={() => setDesktopSubMenuOpen(category.id)}
                            onMouseLeave={() => setDesktopSubMenuOpen(null)}
                          >
                            <Link
                              to={category.path}
                              className="flex items-center justify-between block px-6 py-3 text-xs font-bold uppercase tracking-widest text-black hover:bg-blue-500 hover:text-white transition-colors"
                            >
                              {category.label}
                              <ChevronDown
                                className={`w-3 h-3 ml-2 transition-transform ${
                                  desktopSubMenuOpen === category.id ? 'rotate-180' : ''
                                }`}
                              />
                            </Link>
                            {/* Submenu */}
                            <div
                              className={`absolute top-0 left-full z-20 bg-white shadow-xl border border-gray-100 rounded-sm min-w-[200px] py-2 transition-all duration-300 ${
                                desktopSubMenuOpen === category.id
                                  ? 'opacity-100 visible translate-y-0'
                                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                              }`}
                            >
                              {category.subcategories.map((sub) => (
                                <Link
                                  key={sub.id}
                                  to={sub.path}
                                  className="block px-6 py-3 text-xs font-medium uppercase tracking-widest text-black hover:bg-blue-500 hover:text-white transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={category.id}
                            to={category.path}
                            className="block px-6 py-3 text-xs font-bold uppercase tracking-widest text-black hover:bg-blue-500 hover:text-white transition-colors"
                          >
                            {category.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-500'
                      : 'text-black hover:text-black/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Actionssssss*/}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className={`flex items-center cursor-pointer gap-2 text-black hover:text-black/60 text-sm  uppercase tracking-widest`}
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            
            <Link
              to="/contact"
              className="hidden sm:block px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all shadow-xl hover:shadow-blue-500/40"
            >
              {t.ctaInquiry}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4 z-50">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 text-black/80 hover:text-black text-xs  uppercase tracking-widest"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:bg-black/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-full text-black bg-white/70 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen 
            ? 'translate-x-0' 
            : isRTL ? '-translate-x-full' : 'translate-x-full'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6">
          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-2 mb-8">
            {navItems.map((item) => {
              if (item.path === '/products') {
                return (
                  <div key={item.path} className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setProductsMenuOpen(!productsMenuOpen);
                        if (!productsMenuOpen) {
                          setMobileSubMenuOpen(null);
                        }
                      }}
                      className={`py-3 px-4 rounded-lg text-base font-medium uppercase tracking-wide transition-all flex items-center justify-between ${
                        location.pathname === item.path
                          ? 'bg-blue-500 text-white'
                          : 'text-black/80 hover:bg-white/10 hover:text-black'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${productsMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        productsMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col gap-1 pl-2">
                        {productCategories.map((category) =>
                          category.subcategories ? (
                            <div key={category.id} className="flex flex-col">
                              <button
                                onClick={() =>
                                  setMobileSubMenuOpen(
                                    mobileSubMenuOpen === category.id ? null : category.id
                                  )
                                }
                                className="flex items-center justify-between py-2 px-4 rounded-lg text-sm font-bold uppercase tracking-wide text-black/80 hover:bg-white/10 hover:text-black transition-all bg-transparent"
                              >
                                {category.label}
                                <ChevronDown
                                  className={`w-3 h-3 ml-2 transition-transform ${
                                    mobileSubMenuOpen === category.id ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              <div
                                className={`flex flex-col transition-all overflow-hidden duration-300 pl-3 ${
                                  mobileSubMenuOpen === category.id
                                    ? 'max-h-64 opacity-100'
                                    : 'max-h-0 opacity-0'
                                }`}
                              >
                                {category.subcategories.map((sub) => (
                                  <Link
                                    key={sub.id}
                                    to={sub.path}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setProductsMenuOpen(false);
                                      setMobileSubMenuOpen(null);
                                    }}
                                    className="py-2 px-4 rounded-lg text-xs font-medium uppercase tracking-wide text-black/70 hover:bg-white/10 hover:text-black transition-all"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={category.id}
                              to={category.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setProductsMenuOpen(false);
                                setMobileSubMenuOpen(null);
                              }}
                              className="py-2 px-4 rounded-lg text-sm font-bold uppercase tracking-wide text-black/70 hover:bg-white/10 hover:text-black transition-all"
                            >
                              {category.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg text-base font-medium uppercase tracking-wide transition-all ${
                    location.pathname === item.path
                      ? 'bg-blue-500 text-white'
                      : 'text-black/80 hover:bg-white/10 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-auto w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all shadow-xl hover:shadow-blue-500/40 text-center"
          >
            {t.ctaInquiry}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;