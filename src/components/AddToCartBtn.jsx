import React from "react";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../context/CartContext";

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useCart();

  const handleClick = (e) => {
    e.stopPropagation();
    if (!product) return;
    addToCart(product);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-btnPrimary flex justify-between items-center w-full gap-6 sm:gap-2 md:gap-8 lg:gap-4 px-8 py-1.5 rounded-full
        text-textWhite font-Lato font-bold transition-all duration-300 cursor-pointer
        hover:bg-btnPrimaryHover xs:text-Paragraph7 lg:text-Paragraph8 xl:text-Paragraph6
        focus:ring-2 focus:ring-btnPrimaryHover focus:outline-none"
    >
      <div className="flex items-center gap-3 sm:gap-2">
        <IoMdCart className="" />
        <span className="">Add to cart</span>
      </div>
      <p className="">Rs {product?.p_price}.00</p>
    </button>
  );
};

export default AddToCartBtn;
