import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ShopFilters from "./ShopFilters";

const ShopHeader = ({
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

      <div className="mt-5 ">
        {/* Current Page box */}
        <div className="flex justify-between items-center w-fit gap-3 xs:text-Paragraph7 xl:text-Paragraph6">
          <FiHome className="text-textSecondary" />
          <p className="font-Lato font-semibold text-textWhite">Shop</p>
        </div>

        {/* Filter Button + Numbers Of Product Box */}
        <div className="flex justify-between items-center mt-4">
          {/* Numbers Of Product Box */}
          <div className="flex justify-between items-center w-fit gap-3 xs:text-Paragraph7 xl:text-Paragraph6">
            <FaArrowRight className="text-textSecondary" />
            <p className="font-Lato text-textWhite">
              We found {productCount} items for you!
            </p>
          </div>

          {/* Filter Button Box */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            aria-expanded={filterOpen}
            className="lg:hidden justify-center items-center gap-2 bg-textSecondary
                  font-Lato font-semibold text-textPrimary rounded-lg
                  xs:inline-flex xs:text-Paragraph7 xs:px-3 xs:py-1.5"
          >
            <span className="">Filter</span>
            <FaFilter />
          </button>
        </div>
      </div>

      {/* Inline mobile filter panel (renders under the green box, no overlay) */}
      <div className="lg:hidden">
        <div
          className={`mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
            filterOpen ? "max-h-280 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto w-full max-w-xs">
            <div className="bg-transparent">
              <div className="pt-1">
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
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
