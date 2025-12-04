import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const ShopFilters = ({
  sortBy,
  setSortBy,
  selectedCategories,
  setSelectedCategories,
  selectedWeights,
  setSelectedWeights,
}) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Sort options
  const sortOptions = ["High to Low", "Low to High", "Newest", "Oldest"];

  // Category options
  const categoryOptions = [
    "All",
    "Plain Spice",
    "Recipe Mix",
    "Desserts",
    "Pickle",
  ];

  // Weight options
  const weightOptions = ["120g", "250g", "400g", "500g", "1kg", "5kg"];

  // Handle category checkbox
  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const newSelection = prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev.filter((c) => c !== "All"), category];
        return newSelection.length === 0 ? ["All"] : newSelection;
      });
    }
  };

  // Handle weight checkbox
  const handleWeightChange = (weight) => {
    setSelectedWeights((prev) =>
      prev.includes(weight)
        ? prev.filter((w) => w !== weight)
        : [...prev, weight]
    );
  };

  return (
    <div className="lg:w-1/4">
      <div className="bg-transparent xs:border lg:border-0 border-textWhite rounded-lg p-5 2xl:p-3">
        {/* Sort By Section */}
        <div className="mb-6 pb-6 border-b border-textWhite">
          <h3 className="text-textSecondary font-Lato font-bold text-Paragraph5 mb-3">
            Sort By:
          </h3>
          <div className="relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              onBlur={() => setTimeout(() => setSortDropdownOpen(false), 200)}
              className="w-full flex items-center justify-between px-4 py-2 bg-transparent border border-textWhite rounded text-textWhite font-Lato text-Paragraph7 
                    hover:bg-opacity-10 hover:bg-btnYellowhover hover:border-btnYellowhover hover:text-textPrimary transition-colors"
            >
              <span>{sortBy}</span>
              <IoChevronDown
                className={`transition-transform ${
                  sortDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {sortDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-Primarybg border border-textWhite rounded shadow-lg z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 font-Lato text-Paragraph7 hover:bg-DropDownBgHover transition-colors ${
                      sortBy === option
                        ? "text-btnPrimary bg-DropDownBgHover"
                        : "text-textPrimary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Section */}
        <div className="mb-6 pb-6 border-b border-textWhite">
          <h3 className="text-textSecondary font-Lato font-bold text-Paragraph5 mb-3">
            Category:
          </h3>
          <div className="space-y-2">
            {categoryOptions.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 rounded border-2 border-textWhite bg-transparent checked:bg-textSecondary checked:border-textSecondary appearance-none cursor-pointer relative transition-all"
                  style={{
                    backgroundImage: selectedCategories.includes(category)
                      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000000' d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E")`
                      : "none",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <span className="text-textWhite font-Lato text-Paragraph7">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Weight Section */}
        <div>
          <h3 className="text-textSecondary font-Lato font-bold text-Paragraph5 mb-3">
            Weight:
          </h3>
          <div className="space-y-2">
            {weightOptions.map((weight) => (
              <label
                key={weight}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedWeights.includes(weight)}
                  onChange={() => handleWeightChange(weight)}
                  className="w-4 h-4 rounded border-2 border-textWhite bg-transparent checked:bg-textSecondary checked:border-textSecondary appearance-none cursor-pointer relative transition-all"
                  style={{
                    backgroundImage: selectedWeights.includes(weight)
                      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23000000' d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E")`
                      : "none",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <span className="text-textWhite font-Lato text-Paragraph7">
                  {weight}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
