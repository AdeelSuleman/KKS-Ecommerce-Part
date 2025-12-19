import React, { useCallback } from "react";
import { IoMdCart } from "react-icons/io";
import { useCart } from "../context/CartContext";

const AddToCartBtn = React.memo(({ product, selectedWeight }) => {
  const { addToCart } = useCart();

  const buildCartItem = useCallback(() => ({
    ...product,
    selectedWeight: selectedWeight || product.p_gram?.[0] || "N/A",
    packaging: product.p_packaging[selectedWeight]?.[0] || "Box",
    price: product.p_weightPrice?.[selectedWeight] || product.p_price, // ✅ weight based price
    _cartItemId: `${product.id}-${Math.random()}`,
  }), [product, selectedWeight]);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    addToCart(buildCartItem());
  }, [addToCart, buildCartItem]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-btnPrimary flex justify-between items-center w-full gap-6 xs:px-6 sm:gap-2 md:gap-3 md:px-5 lg:gap-3 lg:px-6 xl:px-8 py-1.5 rounded-full
        text-textWhite text-Paragraph7 font-Lato font-bold transition-all duration-300 cursor-pointer
        hover:bg-btnPrimaryHover"
    >
      <div className="flex items-center gap-3 sm:gap-2">
        <IoMdCart />
        <span>Add to cart</span>
      </div>
      <p>Rs {product.p_weightPrice?.[selectedWeight] || product.p_price}.00</p>
    </button>
  );
});

export default AddToCartBtn;
