import React, { memo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import HeroBanner from "../../assets/Home/ProductBanner.png";
import Banner from "../../assets/Home/FeaturedBanner.png";
import HeroProduct from "./HeroProduct";
import RelatedProduct_Slider from "./RelatedProduct_Slider";

const Product_Details = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Performance: Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return null;

  return (
    <main className="relative min-h-screen py-10 lg:py-20 flex justify-center overflow-hidden bg-Primarybg">
      {/* Background Image Optimization: Inline style ki jagah img tag with fetchPriority */}
      <img 
        src={HeroBanner} 
        alt="" 
        fetchPriority="high" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />

      <div className="xs:w-[95vw] xl:w-7xl px-4 lg:px-6 relative z-10">
        <HeroProduct product={product} />

        {/* SEO Fix: h1 page mein ek hi hona chahiye, related products h2 hoga */}
        <h2 className="xs:text-Paragraph2 lg:text-Paragraph1 font-bold font-Poppins text-textSecondary xs:mt-8">
          Related Products
        </h2>

        <div className="mx-auto xs:mt-5 xs:w-[300px] sm:w-full md:w-[85%] sm:mt-10 lg:w-full xl:mt-5">
          <RelatedProduct_Slider 
            category={product.p_category} 
            currentId={product.id} 
          />
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/shop">
            <button
              type="button"
              className="px-8 py-1.5 bg-transparent text-textWhite font-Lato font-semibold rounded-lg border border-textWhite cursor-pointer
                         hover:bg-btnYellow hover:border-btnYellowhover hover:text-textPrimary transition-all duration-300 
                         xs:text-Paragraph4 lg:text-Paragraph4"
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Banner: loading lazy taake main content par load na pare */}
      <div className="absolute w-full top-0 pointer-events-none z-0">
        <img src={Banner} alt="" loading="lazy" className="object-cover w-full h-auto" />
      </div>
    </main>
  );
};

// Memoize taake faltu re-render na ho
export default memo(Product_Details);