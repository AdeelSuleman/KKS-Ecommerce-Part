import React, { memo, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import ViewCart_Btn from "./ViewCart_Btn";

const Cart_SideBar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, removeOneFromCart, addToCart } = useCart();

  // Build unique grouped items (ID + Weight + Packaging)
  const uniqueItems = React.useMemo(() => {
    const map = {};

    cart.forEach((item) => {
      const groupKey = `${item.id}-${item.selectedWeight}-${item.packaging}`;

      if (!map[groupKey]) {
        map[groupKey] = { ...item, qty: 1, _groupKey: groupKey };
      } else {
        map[groupKey].qty += 1;
      }
    });

    return Object.values(map);
  }, [cart]);

  // Body Scroll Lock
  useEffect(() => {
    let scrollY = 0;
    if (isOpen) {
      scrollY = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
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

  // Increase quantity
  const increase = (item) => {
    addToCart({
      ...item,
      _cartItemId: `${item.id}-${item.selectedWeight}-${
        item.packaging
      }-${Math.random()}`,
    });
  };

  // Decrease quantity
  const decrease = (groupKey) => {
    const target = cart.find(
      (i) => `${i.id}-${i.selectedWeight}-${i.packaging}` === groupKey
    );

    if (target) {
      removeOneFromCart(target._cartItemId);
    }
  };

  // Remove entire product group
  const removeGroup = (groupKey) => {
    cart.forEach((i) => {
      const matchKey = `${i.id}-${i.selectedWeight}-${i.packaging}`;
      if (matchKey === groupKey) {
        removeFromCart(i._cartItemId);
      }
    });
  };

  const subtotal = uniqueItems.reduce(
    (sum, item) => sum + (item.p_price || 0) * (item.qty || 1),
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-350 ease-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full bg-white w-full sm:w-[420px] max-w-full transform transition-transform duration-350 ease-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col items-center-safe ">
          <div className="flex items-center justify-between w-full">
            <button onClick={onClose} className="p-2 cursor-pointer">
              <IoClose className="text-2xl" />
            </button>
          </div>

          <div className="bg-white w-[90%]">
            <h2 className="text-2xl text-center font-bold text-orange-600">
              Your Order
            </h2>

            <div className="mt-6 flex-1 overflow-auto h-[65vh] ">
              {cart.length === 0 && (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}

              {uniqueItems.map((item, index) => (
                <div
                  key={item._groupKey}
                  className="flex items-start gap-2 py-4 px-2 my-3"
                >
                  {/* PRODUCT NUMBER (1., 2., 3.) */}
                  <div className="text-lg font-bold text-gray-800 w-6 text-right ">
                    {index + 1}.
                  </div>

                  <div className="w-20 h-auto shrink-0">
                    <img
                      src={item.p_image}
                      alt={item.p_name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain scale-125"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-Paragraph4 ">
                          {item.p_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.p_category}
                        </p>
                        <p className="text-sm text-gray-500">
                          Weight:{" "}
                          <span className="font-semibold">
                            {item.selectedWeight}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Packaging:{" "}
                          <span className="font-semibold">
                            {item.packaging}
                          </span>
                        </p>
                      </div>

                      <div className="text-sm font-semibold mt-1">
                        Rs {item.p_price}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => decrease(item._groupKey)}
                        className="w-7 h-7 border rounded cursor-pointer"
                      >
                        -
                      </button>

                      <div className="px-1">{item.qty}</div>

                      <button
                        onClick={() => increase(item)}
                        className="w-7 h-7 border rounded cursor-pointer"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeGroup(item._groupKey)}
                        className="ml-4 text-gray-500 hover:text-red-600 cursor-pointer"
                      >
                        <FaTrashAlt />
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

              <ViewCart_Btn onClose={onClose} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(Cart_SideBar);
