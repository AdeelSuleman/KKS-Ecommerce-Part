import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdCart } from "react-icons/io";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Banners
import Banner1 from "../../assets/ShopImages/Banner2.png";
import Banner2 from "../../assets/Home/Banner.png";
import Banner3 from "../../assets/Home/VideoThumbnail.png";

const BannerSlider = () => {
  const SliderBanners = [
    {
      banner: Banner1,
      heading: "Ready to Cook? Discover Our Full Range.",
      description: "Find Your Next Meal Today!",
      url: "",
    },
    {
      banner: Banner2,
      heading: "Ready to Cook? Discover Our Full Range.",
      description: "Find Your Next Meal Today!",
      url: "",
    },
    {
      banner: Banner3,
      heading: "Ready to Cook? Discover Our Full Range.",
      description: "Find Your Next Meal Today!",
      url: "",
    },
  ];
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="bannerSwiper" // <-- NEW CLASS
      >
        {SliderBanners.map((banner, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex flex-col items-center-safe justify-center-safe">
              <img
                src={banner.banner}
                className="w-full xs:h-[22vh] sm:h-[32vh] md:h-[40vh] lg:h-[53vh] xl:h-[65vh]"
                alt={`Banner ${i + 1}`}
              />
              {/* Content Area */}
              <div
                className="
                  absolute top-0 h-full w-full flex items-center
                  px-5
                  xs:w-[95vw] xl:w-[1280px] mx-auto
                "
                style={{ pointerEvents: "none" }} // Let swiping/pagination work naturally
              >
                <div
                  className="w-2/5"
                  style={{ pointerEvents: "auto" }} // Make contents interactable
                >
                  <h1
                    className="font-Poppins font-bold text-textWhite
                      xs:text-Paragraph8 xs:leading-4
                      sm:text-Paragraph4 sm:leading-6
                      md:text-Paragraph3 md:leading-7
                      lg:text-Heading5 lg:leading-10
                      xl:text-Heading2 xl:leading-16"
                  >
                    {banner.heading}
                  </h1>

                  <p
                    className="font-Lato text-textWhite
                      xs:text-Paragraph9 xs:mt-1
                      sm:text-Paragraph7 sm:mt-2
                      md:text-Paragraph6 md:mt-3
                      lg:text-Paragraph6 lg:mt-4
                      xl:text-Paragraph4"
                  >
                    {banner.description}
                  </p>
                  <Link to={banner.url}>
                    <button
                      type="button"
                      className="flex justify-center items-center gap-2 font-Lato text-btnPrimary bg-btnYellow mt-5
                        box-border border border-transparent shadow-xs font-medium leading-5 rounded-full px-4 transition-all duration-300
                        hover:bg-btnYellowhover hover:cursor-pointer
                        focus:ring-2 focus:ring-btnYellowhover focus:outline-none
                        xs:text-Paragraph9 xs:mt-1 xs:py-1 xs:px-4
                        sm:text-Paragraph7 sm:mt-3 sm:py-2 sm:px-6
                        md:text-Paragraph6 md:w-44 md:py-3
                        lg:text-Paragraph6 
                        xl:text-Paragraph4 xl:w-52"
                    >
                      <IoMdCart className="" />
                      <span>Shop Now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Swiper navigation & pagination will remain inside/swiper */}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
