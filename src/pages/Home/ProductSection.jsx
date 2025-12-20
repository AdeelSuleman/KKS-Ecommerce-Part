import React, { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/Home/ProductBanner.png";
import { categories, products } from "../../data/products";
import CategoryBtn from "../../components/CategoryBtn";
import Card from "../../components/Card";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((product) => product.p_category === selectedCategory);
  }, [selectedCategory]);

  const visibleProducts = useMemo(() => filteredProducts.slice(0, 8), [filteredProducts]);
  const hasMoreCards = filteredProducts.length > 8;

  return (
    <section className="relative overflow-hidden xs:py-10 md:py-16 xl:py-20 border-0">
      {/* Optimized Background */}
      <img 
        src={Banner} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        loading="lazy" 
        decoding="async"
      />

      <div className="px-6 xl:px-4 relative z-10">
        <h1 className="font-Poppins font-bold text-textSecondary xs:text-Heading4 xs:text-center md:text-Heading3 lg:text-Heading3 xl:text-Heading2">
          PRODUCT RANGES
        </h1>
        <h2 className="text-center text-textWhite font-Lato font-bold xs:text-Paragraph4 md:text-Paragraph3 xl:text-Paragraph1">
          THE KIND YOU WONT BE ABLE TO RESIST
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 xs:w-[92vw] sm:w-[70vw] lg:w-full mx-auto mt-12 relative z-10">
        <CategoryBtn name="All" isActive={selectedCategory === "All"} onClick={setSelectedCategory} />
        {categories.map((cat) => (
          <CategoryBtn key={cat.id} name={cat.name} isActive={selectedCategory === cat.name} onClick={setSelectedCategory} />
        ))}
      </div>

      <section className="grid gap-x-5 gap-y-8 mx-auto mt-16 px-5 xs:grid-cols-1 xs:w-[300px] xs:px-0 sm:grid-cols-2 sm:w-[95vw] md:w-[75vw] lg:grid-cols-3 lg:w-[85vw] xl:grid-cols-4 xl:w-7xl xl:px-5 relative z-10">
        {filteredProducts.length === 0 ? (
          <p className="text-textWhite font-Lato text-center col-span-full mt-10">Products not found.</p>
        ) : (
          <Card filteredProduct={visibleProducts} />
        )}
      </section>

      {hasMoreCards && (
        <div className="flex justify-center mt-12 relative z-10">
          <Link to="/shop">
            <button className="px-8 py-1.5 bg-transparent text-textWhite font-Lato font-semibold rounded-lg border border-textWhite cursor-pointer hover:bg-btnYellow hover:text-textPrimary transition-all duration-300 xs:text-Paragraph4">
              View All
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default memo(ProductSection);