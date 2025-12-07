import React, { useState, useMemo } from "react";
import Banner from "../../assets/Home/ProductBanner.png";
import { products } from "../../data/products";
import Card from "../../components/Card";
import ShopFilters from "../../components/ShopFilters";
import ShopHeader from "../../components/ShopHeader";

export const ProductsSec = () => {
  // start with no restrictive filters so all products show by default
  const [sortBy, setSortBy] = useState("High to Low");
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 15;

  // Map category names to match data
  const categoryMapping = {
    "Plain Spice": "Plain Spices",
    "Recipe Mix": "Recipe Mixes",
    "Pickle": "Pickles",
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes("All")) {
      const mappedCategories = selectedCategories.map(
        (cat) => categoryMapping[cat] || cat
      );
      filtered = filtered.filter((product) =>
        mappedCategories.some((cat) => product.category === cat)
      );
    }

    // Weight filter
    if (selectedWeights.length > 0) {
      filtered = filtered.filter((product) => {
        const weights = [product.gram1, product.gram2].filter(Boolean);
        return selectedWeights.some((weight) => weights.includes(weight));
      });
    }

    // Sort products
    switch (sortBy) {
      case "High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "Oldest":
        filtered.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [sortBy, selectedCategories, selectedWeights]);

  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat xs:py-10 md::py-16 xl:py-22 border-0 "
    >
      <ShopHeader
        productCount={filteredAndSortedProducts.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedWeights={selectedWeights}
        setSelectedWeights={setSelectedWeights}
      />
      {/* Filter and Product List Section */}
      <section className="mt-8 flex flex-col lg:flex-row gap-6 mx-auto 
                    xs:w-[95vw] xs:px-4
                    lg:px-8
                    xl:w-7xl 
                    2xl:px-0 ">
        {/* Left Sidebar - Filters */}
        <div className="lg:w-1/4 xs:hidden lg:inline">
        <ShopFilters
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedWeights={selectedWeights}
          setSelectedWeights={setSelectedWeights}
        />
        </div>

        {/* Right Side - Product Grid */}
        <div className="lg:w-3/4 xs:px-0 xs:w-[300px] sm:w-full mx-auto lg:px-8 xl:px-0">
          <section
            className="grid gap-5 gap-y-8
                xs:grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-2 lg:gap-5
                xl:grid-cols-3 xl:gap-x-6 xl:gap-8"
          >
            <Card
              filteredProduct={
                showAll
                  ? filteredAndSortedProducts
                  : filteredAndSortedProducts.slice(0, VISIBLE_COUNT)
              }
            />
          </section>
          {/* Load More / Show Less button for product lists longer than VISIBLE_COUNT */}
          {filteredAndSortedProducts.length > VISIBLE_COUNT && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="bg-textSecondary text-textPrimary px-5 py-2 rounded-md font-Lato font-semibold cursor-pointer"
              >
                {showAll
                  ? "Show Less"
                  : `Load More (${filteredAndSortedProducts.length - VISIBLE_COUNT})`}
              </button>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};