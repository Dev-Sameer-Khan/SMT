import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../App';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [lang]);

  const navItems = [
    { name: t.navHome, path: '/' },
    { name: t.navAbout, path: '/about' },
    { name: t.navProducts, path: '/products' },
    { name: t.navContact, path: '/contact' },
  ];

  const isRTL = lang === 'ar';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 will-change-[background,padding] ${
          scrolled ? 'py-0 glass-dark' : 'py-2 bg-transparent'
        }`}
      >
        <div className="container mx-auto lg:pr-6 lg:pl-0 pl-3 pr-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <img className="h-16 md:h-20 lg:h-28 max-h-[72px] md:max-h-[80px] lg:max-h-[112px] w-auto" src="/logo2.png" alt="" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-mono uppercase tracking-widest"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            
            <Link
              to="/contact"
              className="hidden sm:block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-xl hover:shadow-blue-500/40"
            >
              {t.ctaInquiry}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4 z-50">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-mono uppercase tracking-widest"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-full bg-black/70 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen 
            ? 'translate-x-0' 
            : isRTL ? '-translate-x-full' : 'translate-x-full'
        }`}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6">
          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-2 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-lg text-base font-medium uppercase tracking-wide transition-all ${
                  location.pathname === item.path
                    ? 'bg-blue-500 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
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