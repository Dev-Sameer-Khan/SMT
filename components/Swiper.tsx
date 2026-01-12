import React, { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../App";
import type { Swiper as SwiperType } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipers = () => {
  const { lang } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);

  // Data for the 4 specific categories
  const slidesData = [
    {
      id: "01",
      title: "Air Compressor",
      description: "High-efficiency industrial air compressors designed for reliable power and continuous operation in demanding environments.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920",
    },
    {
      id: "02",
      title: "Rubber and Couplings",
      description: "Durable industrial rubber components and precision-engineered couplings for seamless mechanical power transmission.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1920",
    },
    {
      id: "03",
      title: "Filters",
      description: "Advanced filtration systems to ensure purity and protect your equipment from contaminants and wear.",
      image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=1920",
    },
    {
      id: "04",
      title: "Electric Items",
      description: "Comprehensive range of industrial electrical components, switchgear, and control systems for modern infrastructure.",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1920",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [lang]);

  return (
    <Swiper
      key={`swiper-${lang}`}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      modules={[Autoplay, Pagination]}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="w-full h-[92vh] mt-20 max-[599px]:mt-14"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt={slide.title}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/30 to-transparent"></div>
            
            <div className="relative w-[53%] max-[599px]:w-full z-10 h-full flex flex-col justify-center max-[599px]:justify-end max-[599px]:pb-20 items-start px-6 md:px-24 text-left text-white select-none">
              <div className="mb-4 max-[599px]:mb-2 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-medium tracking-widest uppercase">
                  Category {slide.id}
                </span>
              </div>

              <h1 className="text-7xl max-[599px]:text-4xl font-black mb-6 max-[599px]:mb-3 leading-tight">
                {slide.title}
              </h1>

              <p className="w-full max-[599px]:leading-tight text-lg md:text-xl mb-10 max-[599px]:mb-6 text-white/80">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4 ">
                <button className="cursor-pointer group max-[599px]:w-full relative bg-blue-500 text-white px-12 md:px-20 py-4 rounded font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                  <span className="relative z-10">View Product</span>
                </button>

                <button className="cursor-pointer px-12 md:px-20 max-[599px]:w-full py-4 rounded font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipers;