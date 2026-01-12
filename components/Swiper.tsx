import React, { useEffect, useRef } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
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

  useEffect(() => {
    // Update Swiper when language changes
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
      // navigation={true}
      modules={[Autoplay, Pagination]}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="w-full h-[92vh] mt-20 max-[599px]:mt-14"
    >
      <SwiperSlide>
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://www.china-cimc.com/uploads/201918541/bulk-cement-tank-trailer05430074742.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-800/40 to-transparent"></div>
          <div className="relative w-[53%] max-[599px]:w-full z-10 h-full flex flex-col justify-center max-[599px]:justify-end max-[599px]:pb-20 items-start px-6 md:px-24 text-left text-white select-none">
            <div className="mb-4 max-[599px]:mb-2 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium tracking-widest uppercase">
                Featured Project 01
              </span>
            </div>

            <h1 className="text-8xl max-[599px]:text-4xl font-black mb-6 max-[599px]:mb-3 leading-none">
              Air Compressor
            </h1>

            <p className="w-full max-[599px]:leading-tight text-lg md:text-xl mb-10 max-[599px]:mb-6 text-white/80">
              A generative 3D landscape exploration built with{" "}
              <span className="text-white  font-medium underline underline-offset-4 decoration-blue-500/50">
                Custom Shaders (GLSL){" "}
              </span>
              and Three.js performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 ">
              <button className="group max-[599px]:w-full relative bg-blue-500 text-white px-20 py-4 rounded font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span className="relative z-10">View Product</span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>

              <button className="px-20 max-[599px]:w-full py-4 rounded font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://www.china-cimc.com/uploads/201918541/bulk-cement-tank-trailer05430074742.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-800/40 to-transparent"></div>
          <div className="relative w-[53%] max-[599px]:w-full z-10 h-full flex flex-col justify-center max-[599px]:justify-end max-[599px]:pb-20 items-start px-6 md:px-24 text-left text-white select-none">
            <div className="mb-4 max-[599px]:mb-2 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium tracking-widest uppercase">
                Featured Project 01
              </span>
            </div>

            <h1 className="text-8xl max-[599px]:text-4xl font-black mb-6 max-[599px]:mb-3 leading-none">
              Air Compressor
            </h1>

            <p className="w-full max-[599px]:leading-tight text-lg md:text-xl mb-10 max-[599px]:mb-6 text-white/80">
              A generative 3D landscape exploration built with{" "}
              <span className="text-white  font-medium underline underline-offset-4 decoration-blue-500/50">
                Custom Shaders (GLSL){" "}
              </span>
              and Three.js performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 ">
              <button className="group max-[599px]:w-full relative bg-blue-500 text-white px-20 py-4 rounded font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span className="relative z-10">View Product</span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>

              <button className="px-20 max-[599px]:w-full py-4 rounded font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://www.china-cimc.com/uploads/201918541/bulk-cement-tank-trailer05430074742.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-800/40 to-transparent"></div>
          <div className="relative w-[53%] max-[599px]:w-full z-10 h-full flex flex-col justify-center max-[599px]:justify-end max-[599px]:pb-20 items-start px-6 md:px-24 text-left text-white select-none">
            <div className="mb-4 max-[599px]:mb-2 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium tracking-widest uppercase">
                Featured Project 01
              </span>
            </div>

            <h1 className="text-8xl max-[599px]:text-4xl font-black mb-6 max-[599px]:mb-3 leading-none">
              Air Compressor
            </h1>

            <p className="w-full max-[599px]:leading-tight text-lg md:text-xl mb-10 max-[599px]:mb-6 text-white/80">
              A generative 3D landscape exploration built with{" "}
              <span className="text-white  font-medium underline underline-offset-4 decoration-blue-500/50">
                Custom Shaders (GLSL){" "}
              </span>
              and Three.js performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 ">
              <button className="group max-[599px]:w-full relative bg-blue-500 text-white px-20 py-4 rounded font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span className="relative z-10">View Product</span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>

              <button className="px-20 max-[599px]:w-full py-4 rounded font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
