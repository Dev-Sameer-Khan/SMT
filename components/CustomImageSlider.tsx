import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const CustomImageSlider = ({ image = {}, className = "" }) => {
  return (
    <Swiper
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
      className="w-1/2 max-[599px]:w-full h-[75vh] max-[599px]:h-[50vh] rounded-md relative group"
    >
      <div className="absolute h-[30%] z-[2] w-full bottom-0 left-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-10">
        <Link
          to="/products?category=compressor"
          className="px-8 sm:px-12 py-4 sm:py-5 rounded shadow-md font-bold uppercase text-sm tracking-widest bg-blue-500 backdrop-blur-md border border-white/20"
        >
          EXPLORE FULL INVENTORY
        </Link>
      </div>

      <SwiperSlide>
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqBr3UA0XPv2BHtEDKKgTySkbZXsQkxw7Eg&s"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mOZGokqWIkQjFX2CkcndpBIttFlDQj8ipQ&s"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomImageSlider;
