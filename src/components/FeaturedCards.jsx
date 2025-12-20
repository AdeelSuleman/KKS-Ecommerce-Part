import React, { useState, useMemo } from "react";
import ShopNowBtn from "./ShopNowBtn";

const FeaturedCards = ({ product, products: productsProp, maxVisible = 10 }) => {
  const source = productsProp ?? product;
  const items = useMemo(
    () => (Array.isArray(source) ? source.slice(0, maxVisible) : source ? [source] : []),
    [source, maxVisible]
  );

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center xs:w-[300px] sm:w-full xs:bg-gray-100 sm:bg-transparent p-3 rounded-lg will-change-transform"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="xs:w-[300px] w-full flex justify-center mb-6">
            {/* Fixed height container to prevent layout shift */}
            <div className="relative w-full overflow-hidden max-w-[220px] h-60">
              {/* Base image */}
              <img
                src={item.p_image}
                alt={item.p_name}
                width="220"
                height="240"
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-contain mx-auto transition-opacity duration-500 ease-in-out ${
                  hoveredId === item.id ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Hover image */}
              <img
                src={item.p_images[0]}
                alt={item.p_name}
                width="220"
                height="240"
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-contain mx-auto transition-all duration-500 ease-in-out ${
                  hoveredId === item.id ? "opacity-100 scale-110" : "opacity-0"
                }`}
              />
            </div>
          </div>

          <div className="w-full p-4 flex flex-col items-center-safe -mt-8">
            <h3 className="text-textPrimary font-Lato font-bold text-center mb-6 xs:text-Paragraph4 md:text-Paragraph6 lg:text-Paragraph4 text-Paragraph3 min-h-12">
              {item.p_name}
            </h3>
            <ShopNowBtn />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedCards;