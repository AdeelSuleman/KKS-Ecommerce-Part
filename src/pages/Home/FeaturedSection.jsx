import React from "react";
import Banner from "../../assets/Home/FeaturedBanner.png";
import { products } from "../../data/products";
import Slider from "../../components/Slider";

const FeaturedSection = () => {
  // Featured products - first 4 products or specific featured products
  const featuredProducts = products;

  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-contain lg:bg-center bg-no-repeat overflow-hidden xs:py-10 md:py-16 xl:py-20 border-0"
    >
      <h1
        className="text-center text-textPrimary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
      >
        FEATURED PRODUCTS
      </h1>
      <div className="mx-auto mt-20 xs:w-[95vw] xl:w-[1280px] px-5">
        <Slider products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedSection;