import React from 'react';

const PARTNERS = [
  { name: 'CATERPILLAR', region: 'Global', logo: '/cat.png' },
  { name: 'CUMMINS', region: 'Americas', logo: '/cum.png' },
  { name: 'KOMATSU', region: 'Asia-Pacific', logo: '/komatsu.png' },
  { name: 'VOLVO PENTA', region: 'Europe', logo: '/vv.png' },
  { name: 'HYUNDAI HEAVY', region: 'Middle East', logo: '/hh.png' },
  { name: 'PERKINS', region: 'Global', logo: '/perk.png' },
];


const Customers: React.FC = () => {
  const scrollItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-24 max-[599px]:py-16 bg-[#0A0A0A] relative border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center md:text-left">
          <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">TRUSTED BY LEADERS</span>
          <h2 className="text-xs font-mono text-gray-400 uppercase tracking-widest">Global Partnership Network</h2>
        </div>
      </div>

      <div className="relative flex items-center overflow-hidden">
        {/* Subtle & Long Vignettes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap">
          {scrollItems.map((partner, i) => (
            <div 
              key={i} 
              className="inline-flex flex-col items-center justify-center px-12  transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/5 min-w-[220px]"
            >
              {/* Identical Aspect Ratio Container */}
              <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  /* Specifically shrinking Cummins to roughly 70% of the others */
                  className={`max-w-full max-h-full object-contain aspect-square ${
                    partner.name === 'CUMMINS' ? 'scale-75' : 'scale-100'
                  }`}
                />
              </div>
              
              {/* <span className="text-lg md:text-xl font-bold text-white tracking-tighter mb-1">
                {partner.name}
              </span> */}
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                {partner.region}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 45s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Customers;