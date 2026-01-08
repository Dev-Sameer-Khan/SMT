
import React from 'react';
import { useLanguage } from '../App';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 max-[599px]:py-10 relative overflow-hidden border-t border-white/5">
      {/* Subtle industrial background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 -skew-x-12 translate-x-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-[599px]:mb-6">
          <span className="text-blue-500 text-lg font-bold uppercase tracking-widest mb-4 max-[599px]:mb-2 block">
            {t.testimonialTitle}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter  leading-none">
            Verified Industrial Reliability.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-[599px]:gap-4">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className=" p-10 max-[599px]:p-6 bg-black/5 border hover:border-blue-500/50 hover:shadow-2xl rounded-md transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-blue-500/50 group-hover:text-blue-500 transition-colors duration-500 mb-8" />
                <p className="text-black/80 text-lg leading-relaxed mb-12 italic">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-black font-bold uppercase tracking-widest text-md mb-1">
                  {item.author}
                </h4>
                <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-3">
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
