import React, { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../App";
import type { Swiper as SwiperType } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

const Swipers = () => {
  const { lang } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);

  
  // Opens WhatsApp with product info
  const handleWhatsAppQuery = (product) => {
    const phoneNumber = "966532962420";
    const message = `Hi, I'm interested in the ${product.title} (${product.specs}). Can I get more technical specs?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      alert("Please allow popups for this site to send a WhatsApp message.");
    }
  };


  // Data for the 4 specific categories
  const slidesData = [
    {
      id: "01",
      title: "Compressor",
      description: "High-efficiency industrial air compressors designed for reliable power and continuous operation in demanding environments.",
      image: "https://5.imimg.com/data5/IOS/Default/2023/8/333180526/IZ/XT/ZN/113044899/product-jpeg.png",
      link : "/products?category=compressor",
          specs: "Perkins Genuine Powerpart",
    },
    {
      id: "02",
      title: "Engine Parts",
      description: "Durable industrial rubber components and precision-engineered couplings for seamless mechanical power transmission.",
      image: "https://img.oemoffhighway.com/files/base/acbm/ooh/image/2014/01/perkins-1204fe44ta_11300838.png?auto=format,compress&q=70",
      link : "/products?category=engine",
          specs: "Perkins Genuine Powerpart",
    },
    {
      id: "03",
      title: "Filters",
      description: "Advanced filtration systems to ensure purity and protect your equipment from contaminants and wear.",
      image: "https://3.imimg.com/data3/BV/GU/MY-3117832/amw-filters.jpg",
      link : "/products?category=filter",
      specs: "Perkins Genuine Powerpart",
    },
    {
      id: "04",
      title: "Electric Items",
      description: "Comprehensive range of industrial electrical components, switchgear, and control systems for modern infrastructure.",
      image: "https://m.media-amazon.com/images/I/71B+8UAMFYL.jpg",
      link : "/products?category=electric",
      specs: "Perkins Genuine Powerpart",
    },
    {
      id: "05",
      title: "Rubber and Couplings",
      description: "Durable industrial rubber components and precision-engineered couplings for seamless mechanical power transmission.",
      image: "https://m.media-amazon.com/images/I/41iiqs4kYIL._AC_UF1000,1000_QL80_.jpg",
      link : "/products?category=rubberCoulpling",
          specs: "Perkins Genuine Powerpart",
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
        delay: 2500,
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
                
                <Link to={slide.link}>
                <button className="cursor-pointer group max-[599px]:w-full relative bg-blue-500 text-white px-12 md:px-20 py-4 rounded font-bold overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-md">
                <span className="relative z-10">View Product</span>
                </button>
                </Link>

                <button
                onClick={() => handleWhatsAppQuery(slide)}
                className="cursor-pointer px-12 md:px-20 max-[599px]:w-full py-4 rounded font-bold border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
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