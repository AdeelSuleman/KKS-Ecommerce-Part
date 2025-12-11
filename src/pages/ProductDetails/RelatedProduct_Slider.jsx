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
import { products } from '../../data/products';

const RelatedProduct_Slider = ({ category, currentId }) => {

  // Filter products of same category except the current one
  const filtered = products.filter(
    (p) => p.p_category === category && p.id !== currentId
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {filtered.map((p) => (
        <SwiperSlide key={p.id} >
          <div className="w-full">
          <Card filteredProduct={[p]} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default RelatedProduct_Slider