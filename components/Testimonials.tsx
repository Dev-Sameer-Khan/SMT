
import React from 'react';
import { useLanguage } from '../App';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 max-[599px]:py-16 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Subtle industrial background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            {t.testimonialTitle}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Verified Industrial Reliability.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="glass p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-blue-500/20 group-hover:text-blue-500 transition-colors duration-500 mb-8" />
                <p className="text-white/80 text-lg leading-relaxed mb-12 italic">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                  {item.author}
                </h4>
                <p className="text-blue-500 text-[10px] font-mono uppercase tracking-widest mb-3">
                  {item.position}
                </p>
                <div className="flex justify-between items-center text-white/30 text-[9px] font-mono uppercase tracking-[0.2em]">
                  <span>{item.company}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
