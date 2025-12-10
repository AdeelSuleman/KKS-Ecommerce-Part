import React from "react";
import { useParams } from "react-router-dom";
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
      <div className="xs:w-[95vw] xl:w-7xl lg:px-6 relative z-10">
        <HeroProduct product={product} />

        <h1 className="text-Heading4 font-Poppins font-bold tracking-tight leading-tight text-textWhite mt-5">Related Products</h1>

        <div className="">
            {/* <RelatedProduct_Slider /> */}
        </div>
      </div>

      <div className="absolute w-full top-0">
        <img src={Banner} className="object-cover w-full h-full" />
      </div>
    </main>
  );
};

export default Product_Details;
