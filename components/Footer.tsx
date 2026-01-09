
import React from 'react';
import { useLanguage } from '../App';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-black pt-24 max-[599px]:pt-12 pb-12 border-t border-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img className="h-32 -my-6 -ml-6 " src="/logo2.png" alt="" />
            </div>
            <p className="text-black text-sm leading-relaxed max-w-xs">
              {t.footerTagline}
            </p>
            <div className="flex gap-4 pt-4">
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
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-black hover:text-black/60 transition-colors">{t.navHome}</Link></li>
              <li><Link to="/about" className="text-black hover:text-black/60 transition-colors">{t.navAbout}</Link></li>
              <li><Link to="/products" className="text-black hover:text-black/60 transition-colors">{t.navProducts}</Link></li>
              <li><Link to="/contact" className="text-black hover:text-black/60 transition-colors">{t.navContact}</Link></li>
            </ul>
          </div>

          {/* Industrial Divisions */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">Divisions</h4>
            <ul className="space-y-4 text-black">
              <li><Link to="/products" className="text-black hover:text-black/60 transition-colors">Engine Components</Link></li>
              <li><Link to="/products" className="text-black hover:text-black/60 transition-colors">Industrial Filtration</Link></li>
              <li><Link to="/products" className="text-black hover:text-black/60 transition-colors">Screw Compressors</Link></li>
              <li><Link to="/products" className="text-black hover:text-black/60 transition-colors">Heavy Spares</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500">Global Hub</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-black">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/nTAq2daNfWs85L6cA" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-black/60 transition-colors">Al Eid Complex Car Exhi Al Jawhara(Jeddah) - Saudi Arabia</a>
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

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-black text-xs font-mono tracking-widest uppercase">
          <p>© 2024 Sumou Al Ebdaa Est. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/terms-of-service" className="hover:text-black/60 transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-black/60 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
