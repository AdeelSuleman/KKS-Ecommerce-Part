import React from "react";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../context/CartContext";

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useCart();

  const buildCartItem = () => ({
    ...product,
    selectedWeight: product.p_gram?.[0] || "N/A",
    packaging: "Box",
    _cartItemId: `${product.id}-${Math.random()}`,
  });

  const handleClick = (e) => {
    e.stopPropagation();
    addToCart(buildCartItem());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-btnPrimary flex justify-between items-center w-full gap-6 xs:px-6 sm:gap-2 md:gap-3 md:px-5 lg:gap-3 lg:px-6 xl:px-8 py-1.5 rounded-full
        text-textWhite font-Lato font-bold transition-all duration-300 cursor-pointer
        hover:bg-btnPrimaryHover"
    >
      <div className="flex items-center gap-3 sm:gap-2">
        <IoMdCart />
        <span>Add to cart</span>
      </div>
      <p>Rs {product.p_price}.00</p>
    </button>
  );
};

export default AddToCartBtn;
  