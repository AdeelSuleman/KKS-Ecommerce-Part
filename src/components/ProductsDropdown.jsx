import React, { memo } from "react";
import { categories } from "../data/products";
import { NavLink } from "react-router-dom";

const ProductsDropdown = ({ open }) => {
  if (!open) return null;

  return (
    <div className="absolute top-full left-0 w-40 bg-DropDownBg border border-DropDownBorder rounded-md shadow-md shadow-DropDownBorder z-20 overflow-hidden">
      <ul>
        {categories.map((c) => (
          <li
            key={c.id}
            className="py-2 px-3 w-full text-Paragraph8 font-Montserrat font-semibold cursor-pointer hover:bg-DropDownBgHover"
          >
            <NavLink
              to={`/shop?category=${encodeURIComponent(c.name)}`}
              className="block w-full"
            >
              {c.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ProductsDropdown);
