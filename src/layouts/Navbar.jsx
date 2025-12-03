import React, { useState } from "react";
import Logo from "../assets/Logo/Logo2.png";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import CountryDropdown from "../components/CountryDropdown";
import Sidebar from "./Sidebar";
import { Menus } from "./MenuData";
import ProductsDropdown from "../components/ProductsDropdown";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsHover, setProductsHover] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <nav className="bg-Primarybg w-full z-50 py-4">
      <div className="mx-auto xs:w-[95vw] xl:w-[1270px] flex items-center justify-between px-4">
        {/* LEFT - Logo */}
        <div className="w-[160px]">
          <Link to="/"><img src={Logo} alt="Logo" className="w-full" /></Link>
        </div>

        {/* CENTER - Menu & Search */}
        <div className="flex-1 flex-col mx-6 hidden lg:flex items-center gap-4">
          {/* Menu */}
          <ul className="flex items-center gap-8">
            {Menus.map((menu, i) => (
              <li key={i} className="relative group">
                <NavLink
                  to={menu.nav_Url}
                  className={({ isActive }) =>
                    `font-semibold text-Paragraph8 xl:text-Paragraph7 font-Lato ${isActive ? "text-textPrimary" : "text-textPrimary"} flex items-center gap-2`
                  }
                  onMouseEnter={() => { if (menu.sub_Menu) setProductsHover(true); }}
                  onMouseLeave={() => { if (menu.sub_Menu) setProductsHover(false); }}
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

          {/* Search bar */}
          <div className="w-full xl:w-[600px]">
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
        </div>

        {/* RIGHT - Country + Phone + Cart / Mobile Menu */}
        
          <div className="hidden lg:flex items-start lg:gap-6 2xl:gap-8">
            <CountryDropdown />
            <div className="flex-col flex gap-4">
            <div className="flex items-center gap-2 text-textPrimary font-Lato cursor-pointer">
              <FaPhoneAlt />
              <p className="text-Paragraph7 font-semibold">+92 336 2111222</p>
            </div>
            <button className="flex justify-end items-center gap-2 text-textPrimary font-Lato cursor-pointer">
              <IoMdCart />
              <p className="text-sm font-semibold">Cart</p>
            </button>
            </div>
          </div>

          {/* Mobile menu icon */}
          <RiMenu3Line onClick={() => setIsOpen(true)} className="text-2xl lg:hidden cursor-pointer" />
        </div>

      {/* only mobile */}
      <div className="px-4 lg:hidden">
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

      {/* Sidebar component */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
        Menus={Menus}
        Logo={Logo}
      />
    </nav>
  );
};

export default Navbar;