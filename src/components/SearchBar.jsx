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
    <div className="relative flex-1 w-full xl:w-[550px]">
      <div className="flex items-center w-full bg-white border border-DropDownBorder rounded-md shadow-sm">
        
        {/* Category Dropdown Button */}
        <div className="relative">
          <button
            className="flex items-center gap-1 xs:px-2 sm:px-6 py-2 text-gray-500 text-sm hover:bg-gray-50 rounded-l-md transition-colors"
          >
            <span className="text-gray-500 font-Lato">{selectedCategory}</span>
            <IoChevronDown className="text-xs text-gray-500" />
          </button>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-6 bg-gray-300"></div>

        {/* Search Input */}
        <div className="flex-1 relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setCategoryDropdownOpen(true)}
            onClick={() => setCategoryDropdownOpen(true)}
            placeholder="Search for items..."
            className="w-full py-2 px-4 text-sm text-textGray font-Lato placeholder:font-Lato placeholder-textGray focus:outline-none rounded-r-md"
          />

          {/* Dropdown Box - Now attached to search input */}
          {categoryDropdownOpen && (
            <div
              className="absolute top-full bg-DropDownBg rounded-bl-2xl rounded-br-2xl shadow-md border border-DropDownBorder shadow-DropDownBorder z-50 overflow-hidden
                    xs:left-[-135px] xs:w-[calc(100%+135px)]
                    sm:left-0 sm:w-full
                    md:w-full
                    lg:w-full
                    xl:w-full
                    2xl:w-full"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <div className="flex w-full">
                {/* Left Product List */}
                <div className="xs:w-[120px] sm:w-[180px] bg-DropDownBg border-r border-DropDownBorder overflow-y-auto">
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
                              src={p.p_image}
                              alt={p.p_name}
                              className="xs:w-8 xs:h-8 sm:w-14 sm:h-14 object-contain rounded"
                            />
                            <div className="flex-1">
                              <div className="font-semibold font-Montserrat text-Paragraph8 text-textPrimary">
                                {p.p_name}
                              </div>
                              <div className="text-Paragraph8 font-Montserrat text-textGray">
                                Rs {p.p_price}.00
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
                <div className="flex-1 xs:w-[200px] xs:p-3 sm:p-5 sm:w-[90%] flex items-center justify-center ">
                  <div className="w-full">
                    {hoveredProduct ? (
                      <>
                        <img
                          src={hoveredProduct.p_image}
                          alt={hoveredProduct.p_name}
                          className="mx-auto xs:w-40 xs:h-40 w-full h-full object-contain mb-[-60px]"
                        />
                        <div className="w-full bg-DropDownBgHover2 rounded-md shadow-md px-4 pb-4 pt-16 text-center">
                        <h3 className="font-bold font-Montserrat text-Paragraph7 text-textPrimary mb-2">
                          {hoveredProduct.name}
                        </h3>
                        <p className="text-Paragraph8 font-Montserrat text-textGray mb-4">
                          Rs {hoveredProduct.p_price}.00
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
      </div>
    </div>
  );
};

export default SearchBar;
