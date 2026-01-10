import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomImageSlider = ({image ={} ,className = ''}) => {
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
      className="mySwiper"
    >

      <SwiperSlide>
        <div class="w-full h-screen relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqBr3UA0XPv2BHtEDKKgTySkbZXsQkxw7Eg&s"
            class="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="w-full h-screen relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mOZGokqWIkQjFX2CkcndpBIttFlDQj8ipQ&s"
            class="absolute inset-0 w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default CustomImageSlider