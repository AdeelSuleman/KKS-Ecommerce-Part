import React, { memo, useCallback } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Banner from "../assets/Home/ProductBanner.png";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ViewCart_Btn from "../components/ViewCart_Btn";

const Sidebar = ({ isOpen, setIsOpen, openSubMenu, setOpenSubMenu, Menus, Logo }) => {
  
  const closeAll = useCallback(() => {
    setIsOpen(false);
    setOpenSubMenu(null);
  }, [setIsOpen, setOpenSubMenu]);

  const handleOverlayClick = useCallback(() => {
    closeAll();
  }, [closeAll]);

  const handleMenuClick = useCallback(
    (menu, index) => {
      if (menu.sub_Menu) {
        setOpenSubMenu(openSubMenu === index ? null : index);
      } else {
        closeAll();
      }
    },
    [openSubMenu, setOpenSubMenu, closeAll]
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleOverlayClick}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <div
        onClick={() => setOpenSubMenu(null)}
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[55%] text-white z-50 p-6 
        flex flex-col gap-8 bg-cover bg-center bg-no-repeat transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-[140px] -ml-4" />

          <IoClose
            onClick={closeAll}
            className="text-3xl cursor-pointer hover:text-red-500 transition-all"
          />
        </div>

        {/* Menus */}
        <ul className="flex flex-col gap-6 mt-2 text-lg font-semibold">
          {Menus.map((menu, i) => (
            <div key={menu?.id || i}>
              <div
                className="cursor-pointer hover:text-red-400 transition-all flex justify-between items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMenuClick(menu, i);
                }}
              >
                <NavLink to={menu.nav_Url} className="flex items-center gap-2">
                  {menu.nav_Title}
                  {menu.sub_Menu && (
                    <span className="ml-2">
                      {openSubMenu === i ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                    </span>
                  )}
                </NavLink>
              </div>

              {/* Sub Menu */}
              {menu.sub_Menu && openSubMenu === i && (
                <ul className="ml-4 mt-2 flex flex-col gap-3 text-base text-gray-300">
                  {menu.sub_Menu.map((sub, j) => (
                    <NavLink
                      key={sub?.id || j}
                      to={`/shop?category=${encodeURIComponent(sub.nav_SubTitle)}`}
                      onClick={closeAll}
                    >
                      <li className="hover:text-red-400 transition-all">
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
        <ViewCart_Btn onClose={closeAll} />
      </div>
    </>
  );
};

export default memo(Sidebar);
