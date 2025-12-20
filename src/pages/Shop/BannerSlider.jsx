import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdCart } from "react-icons/io";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Banner1 from "../../assets/ShopImages/Banner2.png";

const BannerSlider = () => {
  const SliderBanners = [
    {
      banner: Banner1,
      heading: "Ready to Cook? Discover Our Full Range.",
      description: "Find Your Next Meal Today!",
      url: "/shop",
    },
    {
      banner: Banner1,
      heading: "Authentic Spices for Every Kitchen.",
      description: "Quality you can taste!",
      url: "/shop",
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-200 h-auto"> 
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="bannerSwiper w-full h-full"
      >
        {SliderBanners.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex w-full">
              <img
  src={banner.banner} 
  className="w-full h-auto object-cover"
  alt={banner.heading || "Banner Image"} // Ensure it's a string
  {...(i === 0 ? { fetchPriority: "high" } : { fetchPriority: "low" })} // Dynamic prop handling
  loading={i === 0 ? "eager" : "lazy"}
  decoding="async"
/>
              
              <div className="absolute inset-0 flex items-center px-5 xs:w-[95vw] xl:w-7xl mx-auto pointer-events-none">
                <div className="w-2/3 md:w-2/5 pointer-events-auto">
                  <h1 className="font-Poppins font-bold text-textWhite xs:text-Paragraph7 xs:leading-4 sm:text-Paragraph4 sm:leading-6 md:text-Paragraph3 md:leading-7 lg:text-Heading5 lg:leading-10 xl:text-Heading2 xl:leading-16">
                    {banner.heading}
                  </h1>

                  <p className="font-Lato text-textWhite xs:text-Paragraph9 xs:mt-1 sm:text-Paragraph7 sm:mt-2 md:text-Paragraph6 md:mt-3 lg:text-Paragraph6 lg:mt-4 xl:text-Paragraph4">
                    {banner.description}
                  </p>

                  <Link to={banner.url}>
                    <button
                      type="button"
                      className="flex justify-center items-center gap-2 font-Lato text-btnPrimary bg-btnYellow rounded-full transition-all duration-300 hover:bg-btnYellowhover hover:scale-105 active:scale-95 xs:text-Paragraph9 xs:mt-2 xs:py-1 xs:px-3 sm:mt-3 sm:py-2 sm:px-6 md:w-44 md:py-3 lg:text-Paragraph6 xl:w-52"
                    >
                      <IoMdCart />
                      <span>Shop Now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;