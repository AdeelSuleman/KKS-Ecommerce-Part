// components/SearchBar.jsx
import React, { useMemo } from "react";
import { IoChevronDown } from "react-icons/io5";
import { categories, products } from "../data/products";

const SearchBar = ({
  selectedCategory,
  setSelectedCategory,
  categoryDropdownOpen,
  setCategoryDropdownOpen,
  hoveredProduct,
  setHoveredProduct,
  searchQuery,
  setSearchQuery,
}) => {
  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Categories") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative flex-1 w-full">
      <div className="flex items-center w-full bg-white border border-DropDownBorder rounded-md shadow-sm">
        
        {/* Category Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
            onBlur={() => setTimeout(() => setCategoryDropdownOpen(false), 200)}
            className="flex items-center gap-1 px-4 py-2 text-gray-500 text-sm hover:bg-gray-50 rounded-l-md transition-colors"
          >
            <span className="text-gray-500 font-Lato">{selectedCategory}</span>
            <IoChevronDown className="text-xs text-gray-500" />
          </button>

          {/* Dropdown Box */}
          {categoryDropdownOpen && (
            <div
              className="absolute top-full left-0  bg-DropDownBg rounded-bl-2xl rounded-br-2xl shadow-md border border-DropDownBorder shadow-DropDownBorder z-50 overflow-hidden"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <div className="flex w-fit ">
                {/* Left Product List */}
                <div className="w-[120px] bg-DropDownBg border-r border-DropDownBorder overflow-y-auto">
                  <ul>
                    {filteredProducts.length > 0 ? (
                      filteredProducts
                        .slice(0, 5)
                        .map((p) => (
                          <li
                            key={p.id}
                            onMouseEnter={() => setHoveredProduct(p)}
                            className={`flex items-center gap-3 py-3 px-2 border-t border-b border-0 border-transparent hover:bg-DropDownBgHover cursor-pointer 
                          hover:border-DropDownBorder hover:border-t hover:border-b hover:border-0
                          ${
                            hoveredProduct?.id === p.id ? "bg-gray-50" : ""
                          }`}
                          >
                            <img
                              src={p.image1}
                              alt={p.name}
                              className="w-8 h-8 object-contain rounded"
                            />
                            <div className="flex-1">
                              <div className="font-semibold font-Montserrat text-Paragraph8 text-textPrimary">
                                {p.name}
                              </div>
                              <div className="text-Paragraph8 font-Montserrat text-textGray">
                                Rs {p.price}.00
                              </div>
                            </div>
                          </li>
                        ))
                    ) : (
                      <li className="py-4 px-4 text-sm text-textGray text-center">
                        No products found
                      </li>
                    )}
                  </ul>
                </div>

                {/* Right Preview Box */}
                <div className="flex-1 w-[200px] p-3 flex items-center justify-center">
                  <div>
                    {hoveredProduct ? (
                      <>
                        <img
                          src={hoveredProduct.image1}
                          alt={hoveredProduct.name}
                          className="mx-auto w-40 h-40 object-contain mb-[-60px]"
                        />
                        <div className="w-fit bg-DropDownBgHover2 rounded-md shadow-md px-4 pb-4 pt-16 text-center">
                        <h3 className="font-bold font-Montserrat text-Paragraph7 text-textPrimary mb-2">
                          {hoveredProduct.name}
                        </h3>
                        <p className="text-Paragraph8 font-Montserrat text-textGray mb-4">
                          Rs {hoveredProduct.price}.00
                        </p>
                        <button className="px-5 py-2 bg-btnRed text-textSecondary rounded-md font-Montserrat font-semibold uppercase text-Paragraph8 hover:bg-red-700 transition-colors">
                          VIEW PRODUCT
                        </button>
                        </div>
                      </>
                    ) : (
                      <div className="text-textGray py-8">
                        Select a product to preview
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-6 bg-gray-300"></div>

        {/* Search Input */}
        <div className="flex-1">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for items..."
            className="w-full py-2 px-4 text-sm text-textGray font-Lato placeholder:font-Lato placeholder-textGray focus:outline-none rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
