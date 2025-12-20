import React, { useState, memo } from "react";
import { IoChevronDown } from "react-icons/io5";

const ShopFilters = memo(({
  sortBy,
  setSortBy,
  selectedCategories,
  setSelectedCategories,
  selectedWeights,
  setSelectedWeights,
}) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const sortOptions = ["High to Low", "Low to High", "Newest", "Oldest"];
  const categoryOptions = ["All", "Recipe Mixes", "Plain Spices", "Desserts", "Pickles", "Sauces", "Pastes", "Miscellaneous"];
  const weightOptions = ["1000g"];

  // Handle Category Change Logic
  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const withoutAll = prev.filter((c) => c !== "All");
        const newSelection = prev.includes(category)
          ? withoutAll.filter((c) => c !== category)
          : [...withoutAll, category];
        return newSelection.length === 0 ? ["All"] : newSelection;
      });
    }
  };

  // Handle Weight Change Logic
  const handleWeightChange = (weight) => {
    setSelectedWeights((prev) =>
      prev.includes(weight) ? prev.filter((w) => w !== weight) : [...prev, weight]
    );
  };

  return (
    <div className="w-full lg:pr-7 xl:pr-22">
      <div className="bg-transparent xs:border lg:border-0 border-white/80 rounded-lg p-5 2xl:p-3">
        
        {/* Sort By Section */}
        <div className="mb-8 pb-6 relative group">
          <h3 className="text-textSecondary font-Lato font-bold text-Paragraph5 mb-4">Sort By:</h3>
          <div className="relative">
            <button
              type="button"
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              onBlur={() => setTimeout(() => setSortDropdownOpen(false), 200)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-transparent border border-white/80 rounded-lg text-textWhite font-Lato text-Paragraph7 
                         hover:border-btnYellowhover transition-all duration-300"
            >
              <span>{sortBy}</span>
              <IoChevronDown className={`transition-transform duration-300 ${sortDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {sortDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl z-30 overflow-hidden animate-fadeIn">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setSortBy(option);
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 font-Lato text-Paragraph7 transition-colors
                               ${sortBy === option ? "bg-textSecondary text-black font-bold" : "text-white hover:bg-white/10"}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="absolute bottom-0 -left-14 lg:w-[270px] xl:w-[280px] 2xl:w-[320px] 2xl:-left-20 h-[1.4px] bg-white/80" />
        </div>

        {/* Category Section */}
        <div className="mb-8 pb-6 relative">
          <h3 className="text-textSecondary font-Lato font-bold text-Paragraph5 mb-4">Category:</h3>
          <div className="space-y-3">
            {categoryOptions.map((category) => (
              <label key={category} className="flex items-center gap-3 cursor-pointer group w-fit">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="peer appearance-none w-5 h-5 border-2 border-white/40 rounded checked:border-textSecondary checked:bg-textSecondary transition-all cursor-pointer"
                  />
                  <svg className="absolute w-3.5 h-3.5 left-0.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-textWhite font-Lato text-Paragraph7 group-hover:text-textSecondary transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
          <div className="absolute bottom-0 -left-14 lg:w-[270px] xl:w-[280px] 2xl:w-[320px] 2xl:-left-20 h-[1.4px] bg-white/80" />
        </div>

        {/* Weight Section */}
        <div>
          <h3 className="text-textSecondary font-Lato font-bold text-Paragraph5 mb-4">Weight:</h3>
          <div className="space-y-3">
            {weightOptions.map((weight) => (
              <label key={weight} className="flex items-center gap-3 cursor-pointer group w-fit">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedWeights.includes(weight)}
                    onChange={() => handleWeightChange(weight)}
                    className="peer appearance-none w-5 h-5 border-2 border-white/40 rounded checked:border-textSecondary checked:bg-textSecondary transition-all cursor-pointer"
                  />
                  <svg className="absolute w-3.5 h-3.5 left-0.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-textWhite font-Lato text-Paragraph7 group-hover:text-textSecondary transition-colors">
                  {weight}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ShopFilters;