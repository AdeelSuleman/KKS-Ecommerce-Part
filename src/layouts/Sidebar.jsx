import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ViewCart_Btn from "../components/ViewCart_Btn";

const Sidebar = ({ isOpen, setIsOpen, openSubMenu, setOpenSubMenu, Menus, Logo }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[55%] bg-[#11121E] text-white z-50 p-6 flex flex-col gap-8 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-[140px] -ml-4" />

          <IoClose
            onClick={() => setIsOpen(false)}
            className="text-3xl cursor-pointer hover:text-red-500 transition-all"
          />
        </div>

        {/* Menus */}
        <ul className="flex flex-col gap-6 mt-2 text-lg font-semibold">
          {Menus.map((menu, i) => (
            <div key={i}>
              <div
                className="cursor-pointer hover:text-red-400 transition-all flex justify-between items-center"
                onClick={() => {
                  if (menu.sub_Menu) {
                    setOpenSubMenu(openSubMenu === i ? null : i);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                <NavLink to={menu.nav_Url} className="flex items-center gap-2">
                  {menu.nav_Title}
                  {/* Arrow icons: show only if there is a sub menu */}
                  {menu.sub_Menu && (
                    <span className="ml-2">
                      {openSubMenu === i ? (
                        // Arrow Up SVG
                        <TiArrowSortedUp />
                      ) : (
                        // Arrow Down SVG
                        <TiArrowSortedDown />
                      )}
                    </span>
                  )}
                </NavLink>
              </div>

              {/* Sub Menu */}
              {menu.sub_Menu && openSubMenu === i && (
                <ul className="ml-4 mt-2 flex flex-col gap-3 text-base text-gray-300">
                  {menu.sub_Menu.map((sub, j) => (
                    <NavLink key={j} to={sub.nav_SubUrl}>
                      <li
                        onClick={() => setIsOpen(false)}
                        className="hover:text-red-400 transition-all"
                      >
                        {sub.nav_SubTitle}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>


        {/* View Cart Button */}
        <ViewCart_Btn />
      </div>
    </>
  );
};

export default Sidebar;