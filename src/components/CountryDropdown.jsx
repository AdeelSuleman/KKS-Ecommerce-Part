import React, { memo, useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";

const CountryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Pakistan");

  const dropdownRef = useRef(null);

  const countries = ["Pakistan", "Middle-East", "Africa", "Australia"];

  // ✅ Outside Click Listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-1 xs:w-[100px] lg:w-[110px] xl:w-[120px] px-3 py-1.5 border rounded-lg bg-Primarybg text-textPrimary cursor-pointer text-Paragraph8 xl:text-Paragraph7"
      >
        <span>{selected}</span>
        <IoChevronDown />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute xs:w-[100px] lg:w-[110px] xl:w-[120px] bg-white border border-gray-200 shadow-md rounded-xl z-10 overflow-hidden">
          {countries.map((country, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-Lato text-Paragraph8 xl:text-Paragraph7"
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

export default memo(CountryDropdown);
