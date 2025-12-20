import React, { useState, memo } from "react";
import { FiHome } from "react-icons/fi";
import { FaArrowRight, FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ShopFilters from "./ShopFilters";

// memo use karne se product count change hone par poora header unnecessary re-render nahi hoga
const ShopHeader = memo(({
  productCount,
  sortBy,
  setSortBy,
  selectedCategories,
  setSelectedCategories,
  selectedWeights,
  setSelectedWeights,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="mx-auto xs:w-[95vw] xl:w-7xl px-6 xl:px-4">
      {/* Headings - SEO Optimized */}
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
          xl:text-Paragraph1 uppercase tracking-wide"
      >
        The kind you won't be able to resist
      </h2>

      <div className="mt-5">
        <div className="xl:ml-8 2xl:-ml-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex justify-between items-center w-fit gap-3 xs:text-Paragraph7 xl:text-Paragraph6">
            <FiHome className="text-textSecondary" aria-hidden="true" />
            <p className="font-Lato font-semibold text-textWhite">Shop</p>
          </nav>

          {/* Info & Mobile Filter Toggle */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex justify-between items-center w-fit gap-3 xs:text-Paragraph7 xl:text-Paragraph6">
              <FaArrowRight className="text-textSecondary" aria-hidden="true" />
              <p className="font-Lato text-textWhite">
                We found <span className="font-bold text-textSecondary">{productCount}</span> items for you!
              </p>
            </div>

            {/* Optimized Filter Button */}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              aria-expanded={filterOpen}
              aria-controls="mobile-filter-panel"
              className="lg:hidden flex justify-center items-center gap-2 bg-textSecondary
                  font-Lato font-semibold text-textPrimary rounded-lg
                  xs:text-Paragraph7 xs:px-4 xs:py-2 transition-transform active:scale-95 shadow-md"
            >
              <span>{filterOpen ? "Close" : "Filter"}</span>
              {filterOpen ? <IoClose size={18} /> : <FaFilter size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel - Performance Optimized Animation */}
      <div 
        id="mobile-filter-panel"
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          filterOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-xs backdrop-blur-sm rounded-xl p-2 border border-white/10">
          <ShopFilters
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedWeights={selectedWeights}
            setSelectedWeights={setSelectedWeights}
          />
        </div>
      </div>
    </div>
  );
});

export default ShopHeader;