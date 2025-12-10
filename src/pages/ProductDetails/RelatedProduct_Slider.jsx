import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from '../../components/Card';
import "../../index.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const RelatedProduct_Slider = () => {
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
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
        <SwiperSlide>
          <div className="flex flex-col items-center-safe">
          <Card/>
          </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default RelatedProduct_Slider