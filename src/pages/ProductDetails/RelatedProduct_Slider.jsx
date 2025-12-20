import React, { useMemo, memo } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Card from '../../components/Card';
import { products } from '../../data/products';

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const RelatedProduct_Slider = ({ category, currentId }) => {

  // Performance Optimization: Filtering ko memoize kiya taake slider 
  // re-render hone par loop dobara na chale
  const filtered = useMemo(() => {
    return products.filter(
      (p) => p.p_category === category && p.id !== currentId
    );
  }, [category, currentId]);

  // Agar related products nahi hain toh render hi na karein
  if (filtered.length === 0) return null;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      freeMode={true}
      loop={filtered.length > 4} // Loop sirf tab chale jab products zyada hon
      autoplay={{
        delay: 2500, // Thora slow delay taake CPU par load kam paray
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true, // Performance boost for many slides
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
        <SwiperSlide key={p.id}>
          <div className="w-full py-4 px-1">
            {/* Direct product pass karein, array wrap karne ki zaroorat nahi agar Card handle kar sakta hai */}
            <Card filteredProduct={[p]} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

// Pure component for performance
export default memo(RelatedProduct_Slider);