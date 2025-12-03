import React, { useState } from "react";
import ShopNowBtn from "./ShopNowBtn";

const FeaturedCards = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex justify-center mb-6">
        <div
          className="relative w-full overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div
            className="w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: isHovered ? "rotateY(360deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={isHovered ? product.image2 : product.image3}
              alt={product.name}
              className="w-full max-w-[220px] h-[240px] object-contain mx-auto"
              style={{
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-Primarybg w-full p-4 flex flex-col items-center-safe">
        <h3 className="text-textPrimary font-Lato font-bold text-center mb-6 text-Paragraph3">
          {product.name}
        </h3>
        <ShopNowBtn />
      </div>
    </div>
  );
};

export default FeaturedCards;
