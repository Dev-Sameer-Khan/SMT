
import React from 'react';
import { useLanguage } from '../App';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-black pt-20 max-[599px]:pt-10 pb-12 max-[599px]:pb-6 border-t border-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-[599px]:gap-6 mb-20 max-[599px]:mb-10">
          {/* Brand */}
          <div className="space-y-6 max-[599px]:space-y-4">
            <div className="flex items-center gap-2 -mt-6 -mb-2 -ml-6">
              <LazyImage className="h-32  " src="/logo2.png" alt="SMT Engines Logo" />
            </div>
            <p className="text-black text-sm leading-relaxed max-w-xs">
              {t.footerTagline}
            </p>
            <div className="flex gap-4 pt-4 max-[599px]:pt-0">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6 max-[599px]:space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">{t.navigation}</h4>
            <ul className="space-y-4 max-[599px]:space-y-2">
              <li><Link to="/" className="text-black hover:text-black/60 transition-colors">{t.navHome}</Link></li>
              <li><Link to="/about" className="text-black hover:text-black/60 transition-colors">{t.navAbout}</Link></li>
              <li><Link to="/products" className="text-black hover:text-black/60 transition-colors">{t.navProducts}</Link></li>
              <li><Link to="/contact" className="text-black hover:text-black/60 transition-colors">{t.navContact}</Link></li>
            </ul>
          </div>

          {/* Industrial Divisions */}
          <div className="space-y-6 max-[599px]:space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">{t.divisions}</h4>
            <ul className="space-y-4 max-[599px]:space-y-2 text-black">
              {[
                {
                  id: 'all',
                  label: t.allComponents,
                  path: '/products',
                },
                {
                  id: 'engine',
                  label: t.engineParts,
                  path: '/products?category=engine',
                  subcategories: (t.productSubcategories?.engine || []).map(sub => ({
                    id: sub.id,
                    label: sub.label,
                    path: `/products?category=engine&subcategory=${sub.id}`,
                  })),
                },
                {
                  id: 'compressor',
                  label: t.compressors,
                  path: '/products?category=compressor',
                  // subcategories: (t.productSubcategories?.compressor || []).map(sub => ({
                  //   id: sub.id,
                  //   label: sub.label,
                  //   path: `/products?category=compressor&subcategory=${sub.id}`,
                  // })),
                },
                {
                  id: 'filter',
                  label: t.filters,
                  path: '/products?category=filter',
                },
                {
                  id: 'electric',
                  label: t.electricItem,
                  path: '/products?category=electric',
                },
                {
                  id: 'rubberCoupling',
                  label: t.rubberCoupling,
                  path: '/products?category=rubberCoupling',
                },
              ].map(cat => (
                <li key={cat.id}>
                  <Link to={cat.path} className="text-black  hover:text-black/60 transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6 max-[599px]:space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">{t.globalHub}</h4>
            <ul className="space-y-4 max-[599px]:space-y-2">
              <li className="flex gap-3 text-black">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/nTAq2daNfWs85L6cA" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-black/60 transition-colors">Fatehpur, U.P, India</a>
              </li>
              <li className="flex gap-3 text-black">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+971 0532962420" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-black/60 transition-colors">+971 0532962420</a>
                <a href="tel:+971 0568331257" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-black/60 transition-colors">+971 0568331257</a>
              </li>
              <li className="flex gap-3 text-black">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:khanshahbaz993@yahoo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-black/60 transition-colors">mail2smtengines@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 max-[599px]:pt-0 max-[599px]:text-center border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-black text-xs font-mono tracking-widest uppercase">
          <p>© 2026 SMT Engines. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/terms-of-service" className="hover:text-black/60 transition-colors">{t.termsOfService}</Link>
            <Link to="/privacy-policy" className="hover:text-black/60 transition-colors">{t.privacyPolicy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
