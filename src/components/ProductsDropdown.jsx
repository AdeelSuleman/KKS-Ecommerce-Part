import React, { useState } from "react";
import { categories, products } from "../data/products";
import { NavLink } from "react-router-dom";

const ProductsDropdown = ({ open }) => {
  const [selected, setSelected] = useState(products[0] || null);

  if (!open) return null;

  return (
    <div className="absolute top-full left-0  w-[160px] bg-DropDownBg border border-DropDownBorder rounded-md shadow-md shadow-DropDownBorder z-50 py-2 flex">
      {/* Left: category list */}
      <div className="w-full">
        <ul>
          {categories.map((c) => (
            <li key={c.id} className="py-2 px-3 w-full text-Paragraph7 font-Montserrat font-bold border border-transparent cursor-pointer hover:bg-DropDownBgHover hover:border-t-DropDownBorder hover:border-b-DropDownBorder rounded" >
              <NavLink to={`/category/${c.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                {c.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default ProductsDropdown;