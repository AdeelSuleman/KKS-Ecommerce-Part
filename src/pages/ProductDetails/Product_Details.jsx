import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import HeroBanner from "../../assets/Home/ProductBanner.png";
import Banner from "../../assets/Home/FeaturedBanner.png"
import HeroProduct from "./HeroProduct";
import RelatedProduct_Slider from "./RelatedProduct_Slider";

const Product_Details = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <main
      style={{ backgroundImage: `url(${HeroBanner})` }}
      className="bg-cover bg-center bg-no-repeat py-10 lg:py-20 flex justify-center relative"
    >
      <div className="xs:w-[95vw] xl:w-7xl px-4 lg:px-6 relative z-10">
        <HeroProduct product={product} />

        <h1 className="xs:text-Paragraph2 lg:text-Paragraph1 font-bold font-Poppins text-textSecondary xs:mt-8">Related Products</h1>

        <div className="mx-auto xs:mt-5 xs:w-[300px] sm:w-full md:w-[85%] sm:mt-10 lg:w-full xl:mt-5"> 
            <RelatedProduct_Slider category={product.p_category} currentId={product.id}  />
        </div>

         <div className="flex justify-center mt-12">
                  <Link to="/shop">
                    <button
                      className="px-8 py-1.5 bg-transparent text-textWhite font-Lato font-semibold rounded-lg border border-textWhite cursor-pointer
                                 hover:bg-opacity-90 hover:bg-btnYellow hover:border-btnYellowhover hover:text-textPrimary transition-all duration-300 
                                 xs:text-Paragraph4 lg:text-Paragraph4"
                    >
                      View All
                    </button>
                  </Link>
                </div>
      </div>

      <div className="absolute w-full top-0">
        <img src={Banner} className="object-cover w-full h-full" />
      </div>
    </main>
  );
};

export default Product_Details;
