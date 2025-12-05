import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/Home/ProductBanner.png";
import { categories, products } from "../../data/products";
import CategoryBtn from "../../components/CategoryBtn";
import Card from "../../components/Card";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Always show 2 rows: 8 products for xl (4 columns x 2 rows)
  const visibleProducts = filteredProducts.slice(0, 8);
  const hasMoreCards = filteredProducts.length > 8;

  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat xs:py-10 md::py-16 xl:py-20 border-0"
    >
    <div className="px-6 xl:px-4">
      <h1
        className="font-Poppins font-bold text-textSecondary
                xs:text-Heading4 xs:text-center 
                md:text-Heading3 
                lg:text-Heading3
                xl:text-Heading2"
      >
        PRODUCT RANGES
      </h1>

      <h2
        className="text-center text-textWhite font-Lato font-bold
            xs:text-Paragraph4
            md:text-Paragraph3
            xl:text-Paragraph1"
      >
        THE KIND YOU WONT BE ABLE TO RESIST
      </h2>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 xs:w-[92vw] sm:w-[70vw] lg:w-full mx-auto mt-12">
        <CategoryBtn
          name="All"
          isActive={selectedCategory === "All"}
          onClick={setSelectedCategory}
        />

        {categories.map((cat) => (
          <CategoryBtn
            key={cat.id}
            name={cat.name}
            isActive={selectedCategory === cat.name}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      {/* Product Card Section */}
      <section
        className="grid gap-x-5 gap-y-8 mx-auto mt-16 px-5
            xs:grid-cols-1 xs:w-[300px] xs:px-0
            sm:grid-cols-2 sm:w-[95vw]
            md:w-[75vw]
            lg:grid-cols-3 lg:w-[85vw]
            xl:grid-cols-4 xl:w-7xl"
      >
        <Card filteredProduct={visibleProducts} />
      </section>

      {/* View All Button */}
      {hasMoreCards && (
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
      )}
    </section>
  );
};

export default ProductSection;