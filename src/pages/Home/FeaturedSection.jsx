// FeaturedSection.jsx
import React, { useMemo } from "react";
import Banner from "../../assets/Home/FeaturedBanner.png";
import { products } from "../../data/products";
import Slider from "../../components/Slider";

const FeaturedSection = () => {
  // Featured products - memoized for performance
  const featuredProducts = useMemo(() => products, []);

  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-contain bg-no-repeat overflow-hidden xs:pt-10 xs:pb-7 lg:pt-14 lg:pb-12 border-0"
    >
      <h1 className="font-Poppins font-bold text-textPrimary xs:text-Heading4 xs:text-center md:text-Heading3 lg:text-Heading3 xl:text-Heading2">
        FEATURED <br className="md:hidden" /> PRODUCTS
      </h1>
      <div className="mx-auto xs:mt-8 lg:mt-10 xs:w-[95vw] xl:w-7xl px-5">
        <Slider products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedSection;