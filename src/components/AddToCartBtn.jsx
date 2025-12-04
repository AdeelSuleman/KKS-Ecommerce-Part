import React from "react";
import { IoMdCart } from "react-icons/io";

const AddToCartBtn = ({ price }) => {
  return (
    <button
      type="button"
      className="bg-btnPrimary flex justify-between items-center w-full gap-6 sm:gap-2 md:gap-8 lg:gap-4 px-5 py-1.5 rounded-full
        text-textWhite font-Lato font-bold transition-all duration-300 cursor-pointer
        hover:bg-btnPrimaryHover xs:text-Paragraph7 lg:text-Paragraph8 xl:text-Paragraph6"
    >
      <div className="flex items-center gap-3 sm:gap-2">
        <IoMdCart className="" />
        <span className="">Add to Cart</span>
      </div>
      <p className="">RS {price}</p>
    </button>
  );
};

export default AddToCartBtn;
