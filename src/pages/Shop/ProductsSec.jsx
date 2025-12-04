import React, { useState, useMemo } from "react";
import Banner from "../../assets/Home/ProductBanner.png";
import { products } from "../../data/products";
import Card from "../../components/Card";
import ShopFilters from "../../components/ShopFilters";
import ShopHeader from "../../components/ShopHeader";

export const ProductsSec = () => {
  const [sortBy, setSortBy] = useState("High to Low");
  const [selectedCategories, setSelectedCategories] = useState(["Recipe Mix"]);
  const [selectedWeights, setSelectedWeights] = useState(["250g"]);

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
      className="bg-cover bg-center bg-no-repeat xs:py-10 md::py-16 xl:py-22 border-0"
    >
      <ShopHeader productCount={filteredAndSortedProducts.length} />

      {/* Filter and Product List Section */}
      <section className="mt-8 flex flex-col lg:flex-row gap-6 mx-auto 
                    xs:w-[95vw] xs:px-4
                    lg:px-0
                    xl:w-[1280px] 
                    2xl:px-0 ">
        {/* Left Sidebar - Filters */}
        <ShopFilters
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedWeights={selectedWeights}
          setSelectedWeights={setSelectedWeights}
        />

        {/* Right Side - Product Grid */}
        <div className="lg:w-3/4 xs:px-0 xs:w-[300px] sm:w-full mx-auto px-8">
          <section
            className="grid gap-5 gap-y-8
                xs:grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3 lg:gap-3
                xl:grid-cols-3"
          >
            <Card filteredProduct={filteredAndSortedProducts} />
          </section>
        </div>
      </section>
    </section>
  );
};