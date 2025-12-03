import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const CountryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Pakistan");

  const countries = ["Pakistan", "India", "Bangladesh", "China", "UAE"];

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-[130px] px-3 py-2 border rounded-lg bg-Primarybg text-textPrimary cursor-pointer"
      >
          
        <span>{selected}</span> <IoChevronDown className="text-lg" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute mt-2 w-[150px] bg-white border border-gray-200 shadow-md rounded-xl z-50">
          {countries.map((country, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-Lato text-Paragraph6"
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
