import React, { useState, useMemo, useEffect, useRef } from "react";
import Banner from "../../assets/Home/ProductBanner.png";
import { products } from "../../data/products";
import Card from "../../components/Card";
import ShopFilters from "../../components/ShopFilters";
import ShopHeader from "../../components/ShopHeader";
import { useSearchParams } from "react-router-dom";

export const ProductsSec = () => {
  const [sortBy, setSortBy] = useState("Low to High");
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 15;
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const productsSectionRef = useRef(null);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        productsSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      setSelectedCategories(["All"]);
    }
  }, [categoryFromUrl]);

  const categoryMapping = useMemo(() => ({
    "Plain Spice": "Plain Spices",
    "Recipe Mix": "Recipe Mixes",
    "Pickle": "Pickles",
  }), []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // 1. Category Filter Logic
      const isAllSelected = selectedCategories.includes("All");
      const catMatch = isAllSelected || selectedCategories.some(cat => {
        const mapped = categoryMapping[cat] || cat;
        return product.p_category === mapped;
      });

      // 2. Weight Filter Logic
      const weightMatch = selectedWeights.length === 0 || 
        product.p_gram.some(w => selectedWeights.includes(w));

      return catMatch && weightMatch;
    });

    // 3. Optimized Sorting
    return filtered.sort((a, b) => {
      if (sortBy === "High to Low") return b.p_price - a.p_price;
      if (sortBy === "Low to High") return a.p_price - b.p_price;
      if (sortBy === "Newest") return b.id - a.id;
      if (sortBy === "Oldest") return a.id - b.id;
      return 0;
    });
  }, [sortBy, selectedCategories, selectedWeights, categoryMapping]);

  return (
    <section ref={productsSectionRef} className="relative overflow-hidden xs:py-10 md:py-16 xl:py-22 border-0">
      {/* Background Optimization */}
      <img src={Banner} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" loading="lazy" />
      
      <ShopHeader
        productCount={filteredAndSortedProducts.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedWeights={selectedWeights}
        setSelectedWeights={setSelectedWeights}
      />

      <section className="mt-8 flex flex-col lg:flex-row gap-6 mx-auto xs:w-[95vw] xs:px-4 lg:px-8 xl:w-7xl 2xl:px-0 2xl:gap-0">
        <aside className="lg:w-1/4 xs:hidden lg:block">
          <div className="w-full h-full lg:-ml-6 xl:ml-0 2xl:-ml-16">
            <ShopFilters
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedWeights={selectedWeights}
              setSelectedWeights={setSelectedWeights}
            />
          </div>
        </aside>

        <main className="lg:w-3/4 xs:px-0 xs:w-full sm:w-full mx-auto lg:px-8 xl:px-0">
          <div className="grid gap-5 gap-y-8 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-8 2xl:gap-10">
            {filteredAndSortedProducts.length === 0 ? (
              <p className="text-textWhite font-Lato text-center col-span-full mt-10">Products not found in this category.</p>
            ) : (
              <Card
                filteredProduct={showAll ? filteredAndSortedProducts : filteredAndSortedProducts.slice(0, VISIBLE_COUNT)}
              />
            )}
          </div>

          {filteredAndSortedProducts.length > VISIBLE_COUNT && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="bg-textSecondary text-textPrimary px-8 py-3 rounded-full font-Lato font-bold hover:scale-105 transition-transform cursor-pointer shadow-lg"
              >
                {showAll ? "Show Less" : `View All Products (${filteredAndSortedProducts.length})`}
              </button>
            </div>
          )}
        </main>
      </section>
    </section>
  );
};    