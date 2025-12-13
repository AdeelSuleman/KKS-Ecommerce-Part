import React, { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { GrFormSubtract } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import HeroBanner from "../../assets/Home/ProductBanner.png";
import Banner from "../../assets/Home/FeaturedBanner.png";
import CheckoutForm from "../../components/CheckoutForm";
import ThankYouPopup from "../../components/ThankYouPopup";

const CartPage = () => {
  const { cart, addToCart, removeOneFromCart, removeFromCart } = useCart();


  // Form pop up + Thank you pop up states
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Group items by ID + Weight + Packaging
  const uniqueItems = useMemo(() => {
    const map = {};
    cart.forEach((item) => {
      const groupKey = `${item.id}-${item.selectedWeight}-${item.packaging}`;
      if (!map[groupKey]) map[groupKey] = { ...item, qty: 1, _groupKey: groupKey };
      else map[groupKey].qty++;
    });
    return Object.values(map);
  }, [cart]);

  const increase = (item) => {
    addToCart({
      ...item,
      _cartItemId: `${item.id}-${item.selectedWeight}-${item.packaging}-${Math.random()}`
    });
  };

  const decrease = (item) => {
    const target = cart.find(
      (i) =>
        `${i.id}-${i.selectedWeight}-${i.packaging}` === item._groupKey
    );
    if (target) removeOneFromCart(target._cartItemId);
  };

  const removeGroup = (item) => {
    cart.forEach((i) => {
      if (`${i.id}-${i.selectedWeight}-${i.packaging}` === item._groupKey) {
        removeFromCart(i._cartItemId);
      }
    });
  };

  const subtotal = uniqueItems.reduce(
    (sum, item) => sum + item.p_price * item.qty,
    0
  );

  const gst = Math.round(subtotal * 0.17);
  const total = subtotal + gst;

  return (
    <main
      style={{ backgroundImage: `url(${HeroBanner})` }}
      className="bg-cover bg-center bg-no-repeat py-10 lg:py-20 flex justify-center relative"
    >
      <div className="xs:w-[95vw] xl:w-7xl px-4 lg:px-6 z-20 relative">
        
        <div className="grid lg:grid-cols-2 justify-center xs:gap-8 lg:gap-6 xl:gap-20 ">

          {/* LEFT — SHOPPING CART */}
          <div className=" bg-black/20 backdrop-blur-xs rounded-xl border border-textGray p-6">
            <h2 className="font-Poppins font-bold text-textSecondary
                xs:text-Heading5 xs:text-left
                md:text-Heading4 
                lg:text-Heading4
                xl:text-Heading3">
              Your Shopping Cart
            </h2>

            {/* Header */}
            <div className="flex justify-between text-textSecondary text-Paragraph4 font-Lato font-bold border-b border-t border-textGray py-4 my-4">
              <span>PRODUCT</span>
              <span>TOTAL</span>
            </div>

            {/* Items */}
            {uniqueItems.length === 0 && (
              <p className="text-white">Your cart is empty.</p>
            )}

            {uniqueItems.map((item, index) => (
              <div
                key={item._groupKey}
                className="lg:flex justify-between border-b border-gray-600 py-4 my-3"
              >
                {/* LEFT */}
                <div className="flex gap-3">
                  <img
                    src={item.p_image}
                    className="xs:w-20 sm:w-36 sm:h-32 object-contain scale-125 "
                  />

                  <div>
                    <p className="text-textSecondary text-Paragraph2 font-Lato font-bold">{item.p_name}</p>
                    <p className="text-textWhite text-Paragraph4 font-Lato font-bold">Rs {item.p_price}</p>

                    <p className="text-textWhite text-Paragraph6 font-Lato font-bold">
                      Weight: <span className="font-normal">{item.selectedWeight}</span>
                    </p>
                    <p className="text-textWhite text-Paragraph6 font-Lato font-bold">
                      Packaging:{" "}
                      <span className="font-normal">{item.packaging}</span>
                    </p>

                    
                  </div>
                </div>

                {/* RIGHT — PRICE */}
                <div className="h-full  xs:mt-2 sm:mt-0 xs:space-y-2 lg:ml-10 xl:ml-0">
                <p className="text-white font-semibold  text-right">
                  Rs {item.p_price * item.qty}
                </p>

                {/* Qty Control */}
                    <div className="flex items-center justify-end gap-2 lg:mt-24 lg:mr-0  xl:mt-16 mr-12">
                      <button
                        onClick={() => decrease(item)}
                        className="w-6 h-6 rounded bg-white text-black flex items-center justify-center cursor-pointer focus:ring-0 focus:outline-none"
                      >
                        <GrFormSubtract size={14} />
                      </button>

                      <span className="text-white">{item.qty}</span>

                      <button
                        onClick={() => increase(item)}
                        className="w-6 h-6 rounded bg-white text-black flex items-center justify-center cursor-pointer focus:ring-0 focus:outline-none"
                      >
                        <FaPlus size={12} />
                      </button>

                      <button
                        onClick={() => removeGroup(item)}
                        className="ml-3 text-gray-400 hover:text-red-500 cursor-pointer focus:ring-0 focus:outline-none"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="bg-black/10 backdrop-blur-sm rounded-xl border border-textGray p-6 h-fit">
            <h2 className="font-Poppins font-bold text-textSecondary
                xs:text-Heading5 xs:text-left
                md:text-Heading4 
                lg:text-Heading4
                xl:text-Heading3">
              Order Summary
            </h2>

            <div className="space-y-3 text-textWhite text-Paragraph4 font-Lato font-bold xs:mt-6 lg:mt-10">
              <div className="flex justify-between">
                <span>Subtotal ({uniqueItems.length} items)</span>
                <span>Rs {subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>GST</span>
                <span>17%</span>
              </div>

              <div className="font-normal text-sm">
                Shipping will be calculated at checkout.
              </div>

              <div className="flex justify-between text-textWhite text-Paragraph4 font-Lato font-bold border-t border-gray-600 pt-3 mt-5">
                <span>Cart Total</span>
                <span>Rs {total}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="lg:flex lg:gap-3 space-y-5 lg:space-y-0 mt-6">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-btnYellow text-black font-semibold xs:px-4 xs:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 lg:text-Paragraph7 xl:text-Paragraph5 cursor-pointer rounded-lg w-full focus:ring-0 focus:outline-none hover:bg-btnYellowhover">
                Proceed to Checkout
              </button>
              <button className="bg-btnPrimary text-white font-semibold xs:px-4 xs:py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3 lg:text-Paragraph7 xl:text-Paragraph5 cursor-pointer rounded-lg w-full focus:ring-0 focus:outline-none hover:bg-btnPrimaryHover">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute w-full top-0 z-0">
        <img src={Banner} className="object-cover w-full h-full" />
      </div>
      <div className="bg-black/30 w-full h-full absolute top-0 blur-2xl z-10"></div>



      {/* Form Pop up + Thank You Pop up  */}
      { showForm && (
        <CheckoutForm 
          subtotal={subtotal}
          gst={gst}
          total={total}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            setShowThankYou(true);
          }}
          />
      )}

      { showThankYou && (
        <ThankYouPopup onClose={() => setShowThankYou(false)} />
      )}
      
    </main>
  );
};

export default CartPage;
