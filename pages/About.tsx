
import React from 'react';
import { useLanguage } from '../App';
import { Shield, Target, Users, Globe } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 bg-[#0A0A0A] min-h-screen">
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">ABOUT US</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
              {t.aboutTitle}
            </h1>
            <p className="text-2xl text-gray-400 mb-12 font-light leading-relaxed">
              Established in 2014, the company has grown from a focused distribution operation into an integrated engineering and industrial solutions platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://picsum.photos/seed/factory/1200/800" alt="Factory" className="w-full grayscale border border-gray-200" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500/5 -z-10"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold  tracking-tight">{t.aboutSubtitle}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.aboutText}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-500 rounded-sm flex-shrink-0">
                     <Shield className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Reliability</h4>
                     <p className="text-xs text-gray-400">ISO 9001:2015 Certified Supply Chain</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-blue-500 rounded-sm flex-shrink-0">
                     <Globe className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Global</h4>
                     <p className="text-xs text-gray-400">Active Presence in 40+ Countries</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Precision Pricing', text: 'Fair market value for high-tolerance components, ensuring your projects remain within budgetary constraints.' },
              { icon: Users, title: 'Dedicated Support', text: 'Senior engineers available 24/7 for technical troubleshooting and part identification support.' },
              { icon: Shield, title: 'Warranty Guard', text: 'Comprehensive warranty on all industrial compressors and critical engine components.' }
            ].map((value, i) => (
              <div key={i} className="p-10 glass-dark rounded shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <value.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials/>
    </div>
  );
};

export default About;
