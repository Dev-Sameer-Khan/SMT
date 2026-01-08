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
    <section className="relative overflow-hidden border-y border-white/5  py-24 max-[599px]:py-10">
      {/* Header */}
      <div className="container mx-auto mb-14 max-[599px]:px-4 px-6 text-center">
        <span className="mb-4 max-[599px]:mb-0 block text-lg font-bold uppercase tracking-widest text-blue-500">
          Trusted by Leaders
        </span>
        <h2 className="text-4xl max-[599px]:text-xl text-black font-mono font-bold uppercase tracking-tight">
          Global Partnership Network
        </h2>
      </div>

      {/* Scroller */}
      <div className="relative flex items-center overflow-hidden">
        {/* Gradient edges */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-white via-white/70 to-transparent z-10" /> */}

        <div className="animate-scroll flex whitespace-nowrap">
          {scrollItems.map((partner, i) => (
            <div
              key={i}
              className="inline-flex min-w-[220px] flex-col items-center justify-center px-12 max-[599px]:px-0 transition-all duration-300 hover:bg-white/5 hover:border-white/10 border border-transparent"
            >
              {/* Logo container */}
              <div className="mb-6 flex h-32 w-32 items-center justify-center overflow-hidden md:h-44 md:w-44">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`aspect-square max-h-full max-w-full object-contain 
                    invert opacity-75 hover:opacity-100 transition
                    ${partner.name === 'CUMMINS' ? 'scale-75' : 'scale-100'}
                  `}
                />
              </div>

              {/* Region */}
              <span className="text-sm font-mono font-bold uppercase tracking-widest text-black">
                {partner.region}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
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