import React, { useState, useEffect, lazy, useCallback } from "react";
import Logo from "../assets/Logo/Logo2.png";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Menus } from "./MenuData";
import { useCart } from "../context/CartContext";

// 🔥 Lazy load heavy components (UI SAME)
const CountryDropdown = lazy(() => import("../components/CountryDropdown"));
const Sidebar = lazy(() => import("./Sidebar"));
const ProductsDropdown = lazy(() => import("../components/ProductsDropdown"));
const SearchBar = lazy(() => import("../components/SearchBar"));
const Cart_SideBar = lazy(() => import("../components/Cart_SideBar"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsHover, setProductsHover] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  // ✅ Throttled scroll (NO UI change)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const openMenu = useCallback(() => setIsOpen(true), []);

  return (
    <nav
      className={`bg-Primarybg w-full flex flex-col justify-center-safe items-center-safe z-30 transition-all duration-200 ${
        isSticky
          ? "fixed top-0 py-2 shadow-md "
          : "relative py-3 "
      }`}
    >
      <div className="mx-auto xs:w-[95vw] xl:w-[1270px] lg:grid lg:grid-cols-4 gap-5 px-3 items-center">
        {/* LEFT - Logo */}
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div
            className={`focus:ring-0 focus:outline-none ${
              isSticky
                ? "xs:w-[120px] lg:w-[140px] "
                : "xs:w-40 lg:w-[180px] xl:w-[180px]"
            }`}
          >
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-full" />
            </Link>
          </div>
              {/* only mobile */}
 
          {/* Mobile menu icon */}
          <div className="lg:hidden flex flex-col justify-center-safe items-end-safe gap-3 ">

           {/* Country Dropdown */}
          <div className="lg:hidden">
            <CountryDropdown />
          </div>
            <div className="flex items-center justify-between gap-8 mt-2">

            <button
              onClick={openCart}
              className="relative flex justify-end items-center gap-2 text-textPrimary font-Lato cursor-pointer text-Paragraph8 xl:text-Paragraph7"
            >
              <IoMdCart className="text-Paragraph4" />
              <p className=" font-semibold">Cart</p>
              {/* badge */}
              {cart?.length > 0 && (
                <span className="absolute -top-3 left-3 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <RiMenu3Line
              onClick={openMenu}
              className="text-2xl lg:hidden cursor-pointer"
            />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex-col justify-center-safe hidden lg:flex items-center lg:px-4">
            {/* Menu */}
            <ul className="flex items-center gap-8">
              {Menus.map((menu, i) => (
                <li key={i} className="relative group">
                  <NavLink
                    to={menu.nav_Url}
                    className={({ isActive }) =>
                      `font-semibold text-Paragraph8 xl:text-Paragraph7 font-Lato ${
                        isActive ? "text-textPrimary" : "text-textPrimary"
                      } flex items-center gap-2`
                    }
                    onMouseEnter={() => {
                      if (menu.sub_Menu) setProductsHover(true);
                    }}
                    onMouseLeave={() => {
                      if (menu.sub_Menu) setProductsHover(false);
                    }}
                  >
                    <span>{menu.nav_Title}</span>
                    {menu.sub_Menu && <IoChevronDown />}
                  </NavLink>

                  {/* Products mega dropdown appears on hover */}
                  {menu.sub_Menu && (
                    <div
                      onMouseEnter={() => setProductsHover(true)}
                      onMouseLeave={() => setProductsHover(false)}
                    >
                      <ProductsDropdown open={productsHover} />
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Search bar (hide when navbar becomes sticky) */}
            {!isSticky && (
              <div className="w-full mt-4">
                <SearchBar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  categoryDropdownOpen={categoryDropdownOpen}
                  setCategoryDropdownOpen={setCategoryDropdownOpen}
                  hoveredProduct={hoveredProduct}
                  setHoveredProduct={setHoveredProduct}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Country Dropdown */}
          <div className=" h-full hidden lg:inline ">
            <CountryDropdown />
          </div>

          {/* RIGHT Phone  Cart / Mobile Menu */}

          <div className="hidden lg:flex items-start lg:gap-6 2xl:gap-8 py-2 h-full w-fit "> 
            <div
              className={` ${
                !isSticky ? "flex-col flex gap-4" : "flex items-center gap-8"
              }`}
            >
            <NavLink to="https://wa.me/+923369917755">
              <div
                className={`flex items-center gap-1.5 text-textPrimary font-Lato cursor-pointer text-Paragraph8 xl:text-Paragraph7 ${
                  !isSticky ? "lg:text-Paragraph9" : "lg:hidden  bg-red-700"
                }`}
              >
                <FaPhoneAlt className="text-Paragraph8 xl:text-Paragraph7" />
                <p className=" font-semibold">+92 336 2111222</p>
              </div>
              </NavLink>
              <button
                onClick={openCart}
                className="relative bg-limr flex justify-end items-center gap-2 text-textPrimary font-Lato cursor-pointer text-Paragraph8 lg:text-Paragraph9 xl:text-Paragraph7"
              >
                <IoMdCart className="text-Paragraph4" />
                <p className=" font-semibold">Cart</p>
                {/* badge */}
                {cart?.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* only mobile (hide when sticky) */}
      {!isSticky && (
        <div className="xs:px-4 px-6 lg:hidden mt-2 w-full">
          <SearchBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categoryDropdownOpen={categoryDropdownOpen}
            setCategoryDropdownOpen={setCategoryDropdownOpen}
            hoveredProduct={hoveredProduct}
            setHoveredProduct={setHoveredProduct}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      )}

      {/* Sidebar component */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
        Menus={Menus}
        Logo={Logo}
      />
      {/* Cart sidebar */}
      <Cart_SideBar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
