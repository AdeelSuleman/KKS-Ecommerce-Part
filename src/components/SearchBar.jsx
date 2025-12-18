// components/SearchBar.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { categories, products } from "../data/products";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  /* ---------------- FILTER PRODUCTS ---------------- */
const filteredProducts = useMemo(() => {
  if (!searchQuery && selectedCategory === "All Categories") return [];

  let data =
    selectedCategory === "All Categories"
      ? products
      : products.filter(p => p.p_category === selectedCategory);

  return searchQuery
    ? data.filter(p =>
        p.p_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data;
}, [selectedCategory, searchQuery]);

  /* ---------------- OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openProductDetails = (id) => {
    navigate(`/product/${id}`);
    setIsSearchOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex-1 w-full">
      <div className="flex items-center w-full bg-white border border-DropDownBorder rounded-md shadow-sm">

        {/* ================= CATEGORY BUTTON ================= */}
        <div className="relative xs:w-[120px] sm:w-[150px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCategoryOpen((s) => !s);
              setIsSearchOpen(false);
            }}
            className="flex justify-between items-center w-full gap-1 xs:px-2 sm:px-6 py-2 text-gray-500 text-sm hover:bg-gray-50 rounded-l-md"
          >
            <span>{selectedCategory}</span>
            <IoChevronDown className="text-xs" />
          </button>

          {isCategoryOpen && (
            <ul className="absolute top-full left-0 w-full bg-white border border-DropDownBorder rounded-md shadow z-20 overflow-hidden">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setIsCategoryOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="py-2 px-3 w-full text-Paragraph8 font-Montserrat font-semibold border border-transparent cursor-pointer hover:bg-DropDownBgHover hover:border-t-DropDownBorder hover:border-b-DropDownBorder"
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300"></div>

        {/* ================= SEARCH INPUT ================= */}
        <div className="flex-1 relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => {
              e.stopPropagation();
              setIsSearchOpen(true);
              setIsCategoryOpen(false);
            }}
            placeholder="Search for items..."
            className="w-full py-2 px-4 text-sm focus:outline-none rounded-r-md"
          />

          {/* ================= PRODUCT DROPDOWN ================= */}
          {isSearchOpen && (
            <div className="absolute top-full bg-DropDownBg rounded-bl-2xl rounded-br-2xl shadow-md border border-DropDownBorder z-10 overflow-hidden w-full">
              <div className="flex w-full">

                {/* LEFT PRODUCT LIST */}
                <div className="xs:w-full xs:h-[350px] md:w-40 bg-DropDownBg border-r border-DropDownBorder overflow-y-auto">
                  <ul>
                    {filteredProducts.length ? (
                      filteredProducts.slice(0).map((p) => (
                        <li
                          key={p.id}
                          onClick={() => {
                            if (window.innerWidth < 768)
                              openProductDetails(p.id);
                          }}
                          onMouseEnter={() => setHoveredProduct(p)}
                          className="flex items-center gap-3 py-3 px-2 cursor-pointer hover:bg-DropDownBgHover"
                        >
                          <img
                            src={p.p_image}
                            alt={p.p_name}
                            loading="lazy"
                            decoding="async"
                            className="xs:w-16 xs:h-16 sm:w-14 sm:h-14 object-contain rounded"
                          />
                          <div className="flex-1">
                            <p className="font-semibold font-Montserrat text-Paragraph8 text-textPrimary">{p.p_name}</p>
                            <p className="text-Paragraph8 font-Montserrat text-textGray">
                              Rs {p.p_price}
                            </p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="p-4 text-center text-gray-400">
                        No products found
                      </li>
                    )}
                  </ul>
                </div>

                {/* RIGHT PREVIEW (DESKTOP) */}
                <div className="flex-1 xs:hidden md:flex items-center justify-center p-3">
                  {hoveredProduct ? (
                    <div className="w-full">
                      <img
                        src={hoveredProduct.p_image}
                        className="mx-auto w-full h-40 object-contain -mb-10"
                      />

                      <div className="w-full bg-DropDownBgHover2 rounded-md shadow-md px-4 pb-4 pt-16 text-center">
                      <h3 className="font-bold font-Montserrat text-Paragraph7 text-textPrimary mb-2">
                        {hoveredProduct.p_name}
                      </h3>
                      <p className="text-Paragraph8 font-Montserrat text-textGray mb-4">
                        Rs {hoveredProduct.p_price}
                      </p>
                      <button
                        onClick={() =>
                          openProductDetails(hoveredProduct.id)
                        }
                        className="px-5 py-2 bg-btnRed cursor-pointer text-textSecondary rounded-md font-Montserrat font-semibold uppercase text-Paragraph8 hover:bg-red-700 transition-colors"
                      >
                        VIEW PRODUCT
                      </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400">
                      Hover product to preview
                    </p>
                  )}
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
