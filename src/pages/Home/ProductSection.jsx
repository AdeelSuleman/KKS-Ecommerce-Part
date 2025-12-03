import React, { useState, useEffect } from "react";
import Banner from "../../assets/Home/ProductBanner.png";
import { categories, products } from "../../data/products";
import CategoryBtn from "../../components/CategoryBtn";
import Card from "../../components/Card";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCardsCount, setVisibleCardsCount] = useState(8); // 2 rows for xl: 4 cols * 2 rows = 8

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Reset visible cards when category changes
  useEffect(() => {
    setVisibleCardsCount(8);
  }, [selectedCategory]);

  const totalCards = filteredProducts.length;
  const cardsPerRow = 8; // For xl: 4 columns, 2 rows = 8 cards
  const initialCards = cardsPerRow;
  const hasMoreCards = totalCards > initialCards;
  const remainingCards = totalCards - visibleCardsCount;
  const showViewAll = visibleCardsCount < totalCards;
  const showHide = visibleCardsCount > initialCards;

  const handleViewAll = () => {
    const nextBatch = visibleCardsCount + cardsPerRow;
    setVisibleCardsCount(nextBatch > totalCards ? totalCards : nextBatch);
  };

  const handleHide = () => {
    setVisibleCardsCount(initialCards);
  };

  const visibleProducts = filteredProducts.slice(0, visibleCardsCount);
  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat xs:py-10 md::py-16 xl:py-22 border-0"
    >
      <h1
        className="text-center text-textSecondary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
      >
        PRODUCT RANGES
      </h1>

      <h2
        className="text-center text-textWhite font-Lato font-bold
            xs:text-Paragraph2
            xl:text-Paragraph1"
      >
        THE KIND YOU WONT BE ABLE TO RESIST
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 xs:w-[80vw] lg:w-full mx-auto mt-14">
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
            xs:grid-cols-1 xs:w-[95vw]
            sm:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-4 xl:w-[1280px]"
      >
        <Card filteredProduct={visibleProducts} />
      </section>

      {/* View All / Hide Button */}
      {hasMoreCards && (
        <div className="flex justify-center mt-12">
          <button
            onClick={showHide ? handleHide : handleViewAll}
            className="px-8 py-1.5 bg-transparent text-textWhite font-Lato font-semibold rounded-lg border border-textWhite cursor-pointer
                           hover:bg-opacity-90 hover:bg-btnYellow hover:border-btnYellowhover hover:text-textPrimary transition-all duration-300 
                           xs:text-Paragraph4 lg:text-Paragraph4"
          >
            {showHide ? "Hide" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
