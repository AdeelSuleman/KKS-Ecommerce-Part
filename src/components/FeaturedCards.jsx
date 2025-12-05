import React, { useState } from "react";
import ShopNowBtn from "./ShopNowBtn";

const FeaturedCards = ({ product, products: productsProp, maxVisible = 10 }) => {
  // support either `product` (single or array) or `products` prop from parent
  const source = productsProp ?? product;
  const products = Array.isArray(source) ? source.slice(0, maxVisible) : source ? [source] : [];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center xs:w-[300px] sm:w-full xs:bg-gray-100 sm:bg-transparent p-3 rounded-lg"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="xs:w-[300px] w-full flex justify-center mb-6">
            <div className="relative w-full overflow-hidden max-w-[220px]">
              {/* Base image */}
              <img
                src={item.image3}
                alt={item.name}
                className={`w-full max-w-[220px] h-60 object-contain mx-auto transition-opacity duration-500 ease-in-out ${
                  hoveredId === item.id ? "opacity-0" : "opacity-100"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              />

              {/* Hover image stacked */}
              <img
                src={item.image2}
                alt={item.name}
                className={`absolute left-1/2 -translate-x-1/2 top-0 max-w-[220px] w-full h-60 object-contain mx-auto transition-opacity duration-500 ease-in-out ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              />
            </div>
          </div>

          <div className=" w-full p-4 flex flex-col items-center-safe">
            <h3 className="text-textPrimary font-Lato font-bold text-center mb-6 xs:text-Paragraph4 md:text-Paragraph6 lg:text-Paragraph4 text-Paragraph3">
              {item.name}
            </h3>
            <ShopNowBtn />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedCards;
