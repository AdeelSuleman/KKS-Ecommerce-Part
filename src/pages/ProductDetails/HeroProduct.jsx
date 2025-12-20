import React, { useState, useMemo, memo, useCallback } from "react";
import ProductsImages from "../../components/ProductsImages";
import { useCart } from "../../context/CartContext";
import Delivery1 from "../../assets/D1.png";
import Delivery2 from "../../assets/D2.png";
import Delivery3 from "../../assets/D3.png";
import { IoMdCart } from "react-icons/io";
import { FaPlus, FaCheck } from "react-icons/fa";
import { GrFormSubtract } from "react-icons/gr";

const HeroProduct = ({ product }) => {
  const [value, setValue] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(product.p_gram[0]);
  const [packaging, setPackaging] = useState("Box");
  
  const { cart, addToCart, removeOneFromCart } = useCart();

  // 1. Optimized Cart Qty Logic: Har render pe map banane ki bajaye memoize karein
  const currentItemQty = useMemo(() => {
    const cartItemId = `${product.id}-${selectedWeight}-${packaging}`;
    // Pura cart filter karne ke bajaye sirf current item ko count karein
    return cart.filter(item => item._cartItemId === cartItemId).length;
  }, [cart, product.id, selectedWeight, packaging]);

  // 2. Memoized Cart Item Builder
  const buildCartItem = useCallback(() => ({
    ...product,
    selectedWeight,
    packaging,
    price: product.p_weightPrice?.[selectedWeight] || product.p_price,
    _cartItemId: `${product.id}-${selectedWeight}-${packaging}`,
  }), [product, selectedWeight, packaging]);

  // 3. Optimized Handlers
  const handleWeightChange = (w, index) => {
    setSelectedWeight(w);
    setValue(index);
  };

  const increase = () => addToCart(buildCartItem());
  const decrease = () => {
    if (currentItemQty > 0) {
      removeOneFromCart(`${product.id}-${selectedWeight}-${packaging}`);
    }
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
        <div className="bg-textGray w-full h-px xs:mt-5 lg:mt-12"></div>
      </div>

      {/* RIGHT TEXT DETAILS */}
      <div className="flex flex-col">
        <h1 className="font-Poppins font-bold text-textSecondary tracking-tight leading-tight xs:text-Heading4 md:text-Heading3 xl:text-Heading1">
          {product.p_name} Masala
        </h1>
        
        <p className="xs:text-Heading5 lg:text-Heading4 xl:text-Heading3 mt-3 font-semibold font-Lato text-textWhite">
          Rs {product.p_weightPrice?.[selectedWeight] || product.p_price}
        </p>

        {/* Weight Selection */}
        <div className="mt-6">
          <div className="flex gap-3 items-center">
            <span className="font-semibold font-Lato text-textWhite text-Paragraph6 pr-5">Weight:</span>
            {product.p_gram.map((w, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleWeightChange(w, i)}
                className={`px-4 py-1 rounded-md text-Paragraph6 font-Lato transition-all duration-200 ${
                  selectedWeight === w ? "bg-[#E64520] text-white" : "bg-transparent text-white border border-gray-600 hover:border-[#E64520]"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Packaging Selection */}
        <div className="mt-5 flex items-center gap-6">
          <span className="font-semibold font-Lato text-textWhite text-Paragraph6">Packaging:</span>
          {["Box", "Pouch"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setPackaging(type)}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                packaging === type ? "bg-white text-black" : "bg-transparent border-white"
              }`}>
                {packaging === type && <FaCheck size={10} />}
              </div>
              <span className={`text-Paragraph6 font-Lato ${packaging === type ? "text-white" : "text-gray-400"}`}>
                {type}
              </span>
            </button>
          ))}
        </div>

        {/* Quantity + Add To Cart */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex items-center gap-3">
            <button onClick={decrease} className="h-8 w-8 flex flex-col justify-center-safe items-center-safe bg-Primarybg text-textPrimary cursor-pointer transition-colors">
              <GrFormSubtract size={20} />
            </button>
            <span className="px-4 text-white font-bold min-w-10 text-center">
              {currentItemQty || 1}
            </span>
            <button onClick={increase} className="h-8 w-8 flex flex-col justify-center-safe items-center-safe bg-Primarybg text-textPrimary cursor-pointer transition-colors">
              <FaPlus size={16} />
            </button>
          </div>

          <button
            onClick={increase}
            className="bg-btnPrimary cursor-pointer flex items-center gap-3 px-8 py-2 rounded-lg text-textWhite font-Lato font-bold hover:bg-btnPrimaryHover transition-all shadow-lg active:scale-95"
          >
            <IoMdCart size={20} />
            <span>Add to cart</span>
          </button>
        </div>

        {/* Delivery Icons Optimized */}
        <div className="flex items-center gap-8 mt-10">
          {[Delivery1, Delivery2, Delivery3].map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt="Delivery Info" 
              loading="lazy" 
              className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80"
            />
          ))}
        </div>

        <div className="bg-textGray w-full h-px xs:mt-5 lg:mt-7 xl:mt-6"></div>

        {/* Description & Ingredients */}
        <div className="mt-6">
          <h2 className="text-Paragraph2 font-bold font-Poppins text-textSecondary uppercase tracking-wider">Description</h2>
          <h3 className="text-Paragraph5 font-bold font-Poppins text-textSecondary mt-2">Ingredients:</h3>
          <p className="text-textWhite leading-relaxed mt-2 font-Lato text-Paragraph6 opacity-90 max-w-xl">
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
              <li className="tracking-tight leading-tight">Box and Pouch</li>
              <li className="tracking-tight leading-tight">Country of Origin: Pakistan</li>
              <li className="tracking-tight leading-tight">Delivery Area: Nationwide</li>
              <li className="tracking-tight leading-tight">Ships in 3 to 4 working days</li>
              <li className="tracking-tight leading-tight">Shipped By: Kausar</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default memo(HeroProduct);