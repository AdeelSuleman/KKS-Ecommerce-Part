import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import ViewCart_Btn from "./ViewCart_Btn";

const Cart_SideBar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, removeOneFromCart, addToCart } = useCart();

  // build unique items with quantities from cart array
  const uniqueItems = React.useMemo(() => {
    const map = {};
    cart.forEach((item) => {
      if (!map[item.id]) map[item.id] = { ...item, qty: 1 };
      else map[item.id].qty += 1;
    });
    return Object.values(map);
  }, [cart]);

  useEffect(() => {
    // Lock body scroll by fixing body position (avoids scrollbar layout shift)
    let scrollY = 0;
    if (isOpen) {
      scrollY = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // restore
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (top) {
        const prevScroll = -parseInt(top || "0", 10);
        window.scrollTo(0, prevScroll);
      }
    }
    return () => {
      // cleanup in case of unmount
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (top) {
        const prevScroll = -parseInt(top || "0", 10);
        window.scrollTo(0, prevScroll);
      }
    };
  }, [isOpen]);

  const increase = (item) => {
    // add another instance
    addToCart(item);
  };
  const decrease = (id) => {
    // remove one instance
    removeOneFromCart(id);
  };

  const subtotal = uniqueItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-350 ease-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
        style={{ willChange: "opacity" }}
      />

      {/* sidebar panel */}
      <aside
        className={`fixed top-0 right-0 h-full bg-white w-full sm:w-[420px] max-w-full transform transition-transform duration-350 ease-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <button onClick={onClose} aria-label="Close cart" className="p-2">
              <IoClose className="text-2xl" />
            </button>
          </div>

          <h2 className="text-2xl text-center font-bold text-orange-600">
            Your Order
          </h2>

          <div className="mt-6 flex-1 overflow-auto">
            {cart.length === 0 && (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}

            {uniqueItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 py-4 border-b"
              >
                <div className="w-16 h-16 shrink-0">
                  <img
                    src={item.image1 || item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.category || item.description}
                      </p>
                    </div>
                    <div className="text-sm font-semibold">Rs {item.price}</div>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => decrease(item.id)}
                      className="w-7 h-7 border rounded"
                    >
                      -
                    </button>
                    <div className="px-2">{item.qty}</div>
                    <button
                      onClick={() => increase(item)}
                      className="w-7 h-7 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-gray-500 hover:text-red-600"
                      aria-label="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between font-bold mb-4">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>
            
            {/* View Cart Button */}
            <ViewCart_Btn/>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart_SideBar;
