import React, { useState } from "react";
import ProductsImages from "../../components/ProductsImages";
import { useCart } from "../../context/CartContext";
import Delivery1 from "../../assets/D1.png";
import Delivery2 from "../../assets/D2.png";
import Delivery3 from "../../assets/D3.png";
import { IoMdCart } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { GrFormSubtract } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";

const HeroProduct = ({ product }) => {
  const [value, setValue] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const { cart, addToCart, removeOneFromCart, removeFromCart } = useCart();

  //   Weight & Packaging State
  const [selectedWeight, setSelectedWeight] = useState(product.p_gram[0]);
  const [packaging, setPackaging] = useState("Box");

// When user selects weight → reset image to that index
  const handleWeightChange = (w, index) => {
    setSelectedWeight(w);
    setValue(index); // <-- RESET IMAGE ACCORDING TO WEIGHT
  };


  // --- BUILD UNIQUE CART ITEMS TO GET CURRENT PRODUCT QTY ---
  const uniqueItems = React.useMemo(() => {
    const map = {};
    cart.forEach((item) => {
      if (!map[item.id]) map[item.id] = { ...item, qty: 1 };
      else map[item.id].qty += 1;
    });
    return Object.values(map);
  }, [cart]);

  // Find this product in cart (if exists)
  const cartItem = uniqueItems.find((i) => i.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  // Increase / Decrease Handlers
  const buildCartItem = () => {
    return {
      ...product,
      selectedWeight,
      packaging,
      // _cartItemId: `${product.id}-${selectedWeight}-${packaging}-${Math.random()}`,
       _cartItemId: `${product.id}-${selectedWeight}-${packaging}`,
    };
  };
  const increase = () => addToCart(buildCartItem());
  
  const decrease = () => {
  removeOneFromCart(`${product.id}-${selectedWeight}-${packaging}`);
};

  return (
    <section className="grid xs:grid-cols-1 lg:grid-cols-2 items-start gap-10 xl:gap-14">
      {/* LEFT IMAGES */}
      <div>
        <ProductsImages
          images={product.p_images}
          value={value}
          setValue={setValue}
        />

        {/* Divider */}
        <div className="bg-textGray w-full h-px xs:mt-2 lg:mt-12"></div>

      </div>

      {/* RIGHT TEXT DETAILS */}
      <div className="">
        <h1
          className="font-Poppins font-bold text-textSecondary tracking-tight leading-tight
                xs:text-Heading4 xs:text-left
                md:text-Heading3 
                lg:text-Heading3
                xl:text-Heading1"
        >
          {product.p_name} Masala
        </h1>
        <p className="xs:text-Heading5 lg:text-Heading4 xl:text-Heading3 mt-3 font-semibold font-Lato text-textWhite tracking-tight leading-tight">
          Rs {product.p_price}
        </p>

        {/* Weight Selection */}
        <div className="mt-6">
          <div className="flex gap-3 items-center">
            <p className="font-semibold font-Lato text-textWhite xs:text-Paragraph7 lg:text-Paragraph6 tracking-tight leading-tight pr-5">
              Weight:
            </p>

            {product.p_gram.map((w, i) => (
              <button
                key={i}
                // onClick={() => setSelectedWeight(w)}
                onClick={() => handleWeightChange(w, i)}
                className={`px-4 py-1 rounded-md xs:text-Paragraph7 lg:text-Paragraph6 tracking-tight leading-tight font-Lato transition cursor-pointer
          ${selectedWeight === w
                    ? "bg-[#E64520] text-white"
                    : "text-white hover:text-[#E64520]"
                  }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Packaging */}
        <div className="mt-5">
          <div className="flex items-center gap-6 mt-2">
            <p className="font-semibold font-Lato text-textWhite xs:text-Paragraph7 lg:text-Paragraph6 tracking-tight leading-tight">
              Packaging Type:
            </p>

            {/* Box */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setPackaging("Box")}
            >
              <span
                className={`w-5 h-5 rounded border relative flex items-center justify-center
          ${packaging === "Box" ? "bg-white text-black" : "bg-transparent border-white"}
        `}
              >
                {packaging === "Box" && (
                  <FaCheck className="text-Paragraph9" />
                )}
              </span>

              <span
                className={`xs:text-Paragraph7 xl:text-Paragraph6 font-Lato 
          ${packaging === "Box" ? "text-white" : "text-gray-300"}
        `}
              >
                Box
              </span>
            </div>

            {/* Pouch */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setPackaging("Pouch")}
            >
              <span
                className={`w-5 h-5 rounded border relative flex items-center justify-center
          ${packaging === "Pouch" ? "bg-white text-black" : "bg-transparent border-white"}
        `}
              >
                {packaging === "Pouch" && (
                  <FaCheck className="text-Paragraph9" />
                )}
              </span>

              <span
                className={`xs:text-Paragraph7 xl:text-Paragraph6 font-Lato 
          ${packaging === "Pouch" ? "text-white" : "text-gray-300"}
        `}
              >
                Pouch
              </span>
            </div>
          </div>
        </div>

        {/* Quantity + Add To Cart */}
        <div className="flex items-center gap-4 mt-6">
          {/* QUANTITY CONTROL — Always Visible */}
          <div className="flex items-center gap-3">
            <button
              onClick={decrease}
              className="w-8 h-8 border text-textPrimary bg-Primarybg rounded flex items-center justify-center cursor-pointer"
            >
              <GrFormSubtract size={20} />
            </button>

            <div className="text-white font-bold px-2">
              {/* {qty} */}
              {qty === 0 ? 1 : qty}
              </div>

            <button
              onClick={increase}
              className="w-8 h-8 border text-textPrimary bg-Primarybg rounded flex items-center justify-center cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>

          {/* ADD TO CART BUTTON — Always Visible */}
          <button
            onClick={() => addToCart(buildCartItem())}
            className="bg-btnPrimary flex justify-between items-center w-fit gap-6 sm:gap-2 md:gap-8 lg:gap-4 px-5 py-1.5 rounded-lg
        text-textWhite font-Lato font-bold transition-all duration-300 cursor-pointer
        hover:bg-btnPrimaryHover xs:text-Paragraph7 lg:text-Paragraph8 xl:text-Paragraph6
        focus:ring-2 focus:ring-btnPrimaryHover focus:outline-none"
          >
            <div className="flex items-center gap-3 sm:gap-2">
              <IoMdCart className="" />
              <span className="">Add to cart</span>
            </div>
          </button>
        </div>

        {/* Delivery Icons  */}
        <div className="grid grid-cols-3 items-center justify-between xs:gap-0 gap-6 xs:mt-6 lg:mt-8 xl:mt-2 xs:w-[200px] lg:w-[250px]">
          <div className="flex flex-col items-center-safe">
            <img src={Delivery1} alt="" className="xs:w-10 xs:h-12 xl:w-20 object-contain mx-auto" />
          </div>
          <div className="flex flex-col items-center-safe">
            <img src={Delivery2} alt="" className="xs:w-9 xs:h-8 xl:w-20 xl:h-12 object-contain mx-auto" />
          </div>
          <div className="flex flex-col items-center-safe">
            <img src={Delivery3} alt="" className="xs:w-16 xs:h-10 xl:w-28 xl:h-22 object-contain mx-auto" />
          </div>

        </div>

        {/* Divider */}
        <div className="bg-textGray w-full h-px xs:mt-5 lg:mt-7 xl:mt-2"></div>

        {/* Description */}
        <div className="mt-5">
          <h2 className="xs:text-Paragraph2 lg:text-Paragraph1 font-bold font-Poppins text-textSecondary">
            Description
          </h2>
          <h3 className="xs:text-Paragraph5 lg:text-Paragraph4 font-bold font-Poppins text-textSecondary">
            Ingredients
          </h3>
          <p className="text-textWhite leading-relaxed max-w-[90%] mt-2 font-Lato text-Paragraph6">
            {product.p_description}
          </p>
        </div>

        {/* Divider */}
        <div className="bg-textGray w-full h-px xs:mt-5 lg:mt-7 xl:mt-6"></div>

        {/* Packaging & Delivery */}
        <div className="mt-5">
          <h2 className="xs:text-Paragraph2 lg:text-Paragraph1 font-bold font-Poppins text-textSecondary">
            Packaging & Delivery
          </h2>
          <ul className="text-textWhite space-y-1 mt-2">
            {product.p_packaging.map((line, i) => (
              <li key={i}> {line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
