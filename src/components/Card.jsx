import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { useNavigate } from "react-router-dom";

const Card = ({ filteredProduct }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const navigate = useNavigate();

  const openProductDetails = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <>
      {filteredProduct.map((product) => (
        <div
          key={product.id}
          className="border border-textWhite rounded-2xl shadow-md overflow-hidden relative transition-all duration-300 h-fit cursor-pointer
               hover:shadow-lg hover:shadow-gray-800"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={ () => openProductDetails(product.id) }
        >
          <div className="relative w-full overflow-hidden bg-white flex flex-col items-center h-[220px]">
            {/* Soft colored blurred shadow behind the product (centered) */}
            <div
              className="absolute left-36 -translate-x-1/2 bottom-6 w-36 h-20 rounded-tr-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(140,140,140,0.95) 0%, rgba(110,110,110,0.85) 35%, rgba(80,80,80,0.6) 60%, transparent 100%)",
                filter: "blur(10px)",
                zIndex: 5,
                pointerEvents: "none",
                mixBlendMode: "normal",
                opacity: 0.95,
              }}
            />

            {/* Base image (fades out on hover) */}
            <img
              src={product.p_image}
              alt={product.p_name}
              className={`w-[170px] object-contain transition-opacity duration-500 ease-in-out ${
                hoveredId === product.id
                  ? "opacity-0 h-[220px] z-10"
                  : "opacity-100 h-full z-10"
              }`}
              style={{ backfaceVisibility: "hidden" }}
            />

            {/* Hover image (stacked) */}
            <img
              src={product.p_images[0]}
              alt={product.p_name}
              className={`absolute top-0 w-[170px] object-contain transition-opacity duration-500 ease-in-out ${
                hoveredId === product.id
                  ? "opacity-100 h-[220px] z-10"
                  : "opacity-0 h-full z-10"
              }`}
              style={{ backfaceVisibility: "hidden" }}
            />
          </div>
          {product.hotItem && (
            <img
              src={product.p_hotItem}
              alt={product.p_name}
              className="w-10 h-10 absolute z-10 top-4 left-4"
            />
          )}
          <div className="px-4 pt-1 pb-4">
            <h3 className="text-textWhite font-Lato font-bold xs:text-Paragraph3 lg:text-Paragraph4 xl:text-Paragraph2">
              {product.p_name}
            </h3>
            <p className="text-textGray font-Lato font-normal xs:text-Paragraph6 text-Paragraph5 -mt-1">
              {product.p_category}
            </p>
            <div className="flex items-center gap-8 my-3">
              {/* <p className="text-textWhite font-Lato font-bold xs:text-Paragraph7 text-Paragraph5">
                {product.gram1}
              </p> */}
              <p className="text-textGray font-Lato font-bold xs:text-Paragraph7 text-Paragraph5">
                {product.p_gram}
              </p>
            </div>
            <AddToCartBtn product={product} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
