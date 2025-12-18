// Slider.jsx
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import FeaturedCards from "./FeaturedCards";

const Slider = ({ products, maxVisible = 10 }) => {
  const visibleProducts = useMemo(
    () => (Array.isArray(products) ? products.slice(0, maxVisible) : []),
    [products, maxVisible]
  );

  return (
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
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination, Autoplay]}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
      className="mySwiper"
    >
      {visibleProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="flex flex-col items-center-safe">
            <FeaturedCards product={product} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;