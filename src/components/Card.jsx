import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";

const Card = ({ filteredProduct }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {filteredProduct.map((product) => (
        <div
          key={product.id}
          className="border border-textWhite rounded-2xl shadow-md overflow-hidden relative transition-all duration-300 h-fit
               hover:shadow-lg hover:shadow-gray-800"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{ perspective: "1000px" }}
          >
            <div
              className="w-full transition-transform duration-1000 ease-in-out"
              style={{
                transform:
                  hoveredId === product.id
                    ? "rotateY(360deg)"
                    : "rotateY(0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={hoveredId === product.id ? product.image2 : product.image1}
                alt={product.name}
                className={`w-full object-contain z-0 ${
                  hoveredId === product.id ? "h-[220px]" : "h-full"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          </div>
          {product.hotItem && (
            <img
              src={product.hotItem}
              alt={product.name}
              className="w-10 h-10 absolute z-20 top-4 left-4"
            />
          )}
          <div className="p-5">
            <h3 className="text-textWhite font-Lato font-bold xs:text-Paragraph3 lg:text-Paragraph4 text-Paragraph1">
              {product.name}
            </h3>
            <p className="text-textGray font-Lato font-normal xs:text-Paragraph6 text-Paragraph5 mt-2">
              {product.category}
            </p>
            <div className="flex items-center gap-8 my-3">
              <p className="text-textWhite font-Lato font-bold xs:text-Paragraph7 text-Paragraph5">
                {product.gram1}
              </p>
              <p className="text-textGray font-Lato font-bold xs:text-Paragraph7 text-Paragraph5">
                {product.gram1}
              </p>
            </div>
            <AddToCartBtn price={product.price} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
