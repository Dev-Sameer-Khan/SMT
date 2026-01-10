import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Swipers = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      navigation={true}
      modules={[Pagination, Autoplay, EffectFade]}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper mt-40"
    >
      <SwiperSlide>
        <div class="w-full h-screen relative overflow-hidden">
          <img
            src="https://www.china-cimc.com/uploads/201918541/bulk-cement-tank-trailer05430074742.jpg"
            class="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />

          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-800/40 to-transparent"></div>
          <div class="relative w-[53%] z-10 h-full flex flex-col justify-center items-start px-8 md:px-24 text-left text-white select-none">
            <div class="mb-4 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span class="text-xs font-medium tracking-widest uppercase">
                Featured Project 01
              </span>
            </div>

            <h1 class="text-6xl md:text-8xl font-black mb-6 leading-none">
              Air Compressor
            </h1>

            <p class="w-full text-lg md:text-xl mb-10 text-white/80">
              A generative 3D landscape exploration built with{" "}
              <span class="text-white  font-medium underline underline-offset-4 decoration-blue-500/50">
                Custom Shaders (GLSL){" "}
              </span>
              and Three.js performance optimization.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="group relative bg-blue-500 text-white px-10 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span class="relative z-10">View Product</span>
                {/* <div class="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>

              <button class="px-10 py-4 rounded-xl font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>
            </div>

            <div class="absolute bottom-10 left-8 md:left-24 flex items-center gap-4 opacity-40">
              <div class="h-[1px] w-12 bg-white"></div>
              <span class="text-xs uppercase tracking-[0.3em]">
                Scroll to Navigate
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="w-full h-screen relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqBr3UA0XPv2BHtEDKKgTySkbZXsQkxw7Eg&s"
            class="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />

          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-800/40 to-transparent"></div>
          <div class="relative w-[53%] z-10 h-full flex flex-col justify-center items-start px-8 md:px-24 text-left text-white select-none">
            <div class="mb-4 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span class="text-xs font-medium tracking-widest uppercase">
                Featured Project 02
              </span>
            </div>

            <h1 class="text-6xl md:text-8xl font-black mb-6 leading-none">
              Air Compressor
            </h1>

            <p class="w-full text-lg md:text-xl mb-10 text-white/80">
              A generative 3D landscape exploration built with{" "}
              <span class="text-white  font-medium underline underline-offset-4 decoration-blue-500/50">
                Custom Shaders (GLSL){" "}
              </span>
              and Three.js performance optimization.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="group relative bg-blue-500 text-white px-10 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span class="relative z-10">View Product</span>
                {/* <div class="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>

              <button class="px-10 py-4 rounded-xl font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>
            </div>

            <div class="absolute bottom-10 left-8 md:left-24 flex items-center gap-4 opacity-40">
              <div class="h-[1px] w-12 bg-white"></div>
              <span class="text-xs uppercase tracking-[0.3em]">
                Scroll to Navigate
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="w-full h-screen relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mOZGokqWIkQjFX2CkcndpBIttFlDQj8ipQ&s"
            class="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />

          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-800/40 to-transparent"></div>
          <div class="relative w-[53%] z-10 h-full flex flex-col justify-center items-start px-8 md:px-24 text-left text-white select-none">
            <div class="mb-4 flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-fade-in">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span class="text-xs font-medium tracking-widest uppercase">
                Featured Project 03
              </span>
            </div>

            <h1 class="text-6xl md:text-8xl font-black mb-6 leading-none">
              Air Compressor
            </h1>

            <p class="w-full text-lg md:text-xl mb-10 text-white/80">
              A generative 3D landscape exploration built with{" "}
              <span class="text-white  font-medium underline underline-offset-4 decoration-blue-500/50">
                Custom Shaders (GLSL){" "}
              </span>
              and Three.js performance optimization.
            </p>

            <div class="flex flex-wrap gap-4">
              <button class="group relative bg-blue-500 text-white px-10 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span class="relative z-10">View Product</span>
                {/* <div class="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </button>

              <button class="px-10 py-4 rounded-xl font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Buy Now
              </button>
            </div>

            <div class="absolute bottom-10 left-8 md:left-24 flex items-center gap-4 opacity-40">
              <div class="h-[1px] w-12 bg-white"></div>
              <span class="text-xs uppercase tracking-[0.3em]">
                Scroll to Navigate
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
