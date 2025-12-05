import React from "react";
import { IoMdCart } from "react-icons/io";

const ShopNowBtn = () => {
  return (
    <button
      type="button"
      className="w-44 flex justify-center items-center gap-2 text-Paragraph6 font-Lato text-textWhite bg-btnPrimary 
            box-border border border-transparent shadow-xs font-medium leading-5 rounded-full px-4 py-3 transition-all duration-300
            hover:bg-btnPrimaryHover hover:cursor-pointer
            focus:ring-2 focus:ring-btnPrimaryHover focus:outline-none"
    >
      <IoMdCart className="text-Paragraph6" />
      <span>Shop Now</span>
    </button>
  );
};

export default ShopNowBtn;
