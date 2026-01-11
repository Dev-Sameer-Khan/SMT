import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomImageSlider = ({image = {}, className = ''}) => {
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
      className={className}
    >
      <SwiperSlide>
        <div className="w-full h-screen relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqBr3UA0XPv2BHtEDKKgTySkbZXsQkxw7Eg&s"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-screen relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mOZGokqWIkQjFX2CkcndpBIttFlDQj8ipQ&s"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default CustomImageSlider