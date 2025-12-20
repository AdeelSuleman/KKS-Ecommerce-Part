import { memo, useState, useCallback } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { useNavigate } from "react-router-dom";

const Card = ({ filteredProduct }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  const openProductDetails = useCallback((id) => {
    navigate(`/product/${id}`);
  }, [navigate]);

  return (
    <>
      {filteredProduct.map((product) => {
        // Defaulting to 1000g logic simplified
        const selectedWeight = "1000g"; 

        return (
          <div
            key={product.id}
            className="border border-textWhite rounded-2xl shadow-md overflow-hidden relative transition-all duration-300 h-fit cursor-pointer hover:shadow-lg hover:shadow-textGray "
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => openProductDetails(product.id)}
          >
            {/* Image Container with Fixed Height to prevent Layout Shift */}
            <div className="relative w-full overflow-hidden bg-white flex flex-col items-center h-[220px]">
              <div
                className="absolute left-36 -translate-x-1/2 bottom-6 w-36 h-20 rounded-tr-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(140,140,140,0.95) 0%, rgba(110,110,110,0.85) 35%, rgba(80,80,80,0.6) 60%, transparent 100%)",
                  filter: "blur(10px)",
                  zIndex: 0,
                  pointerEvents: "none",
                  mixBlendMode: "normal",
                  opacity: 0.95,
                }}
              />
              <img
                src={product.p_image}
                alt={product.p_name}
                loading="lazy"
                decoding="async"
                width="170"
                height="220"
                className={`w-[170px] h-full object-contain transition-opacity duration-300 absolute ${
                  hoveredId === product.id ? "opacity-0" : "opacity-100"
                }`}
              />
              
              {/* Secondary Image (Hover) - Only loads when needed or lazily */}
              <img
                src={product.p_images[0]}
                alt={`${product.p_name} hover`}
                loading="lazy"
                decoding="async"
                width="170"
                height="220"
                className={`w-[170px] h-full object-contain transition-all duration-300 ${
                  hoveredId === product.id ? "opacity-100 scale-110" : "opacity-0"
                }`}
              />
            </div>

            {product.p_hotItem && (
              <img
                src={product.p_hotItem}
                alt={product.p_name}
                className="w-10 h-10 absolute z-10 top-4 left-4"
              />
            )}

            <div className="px-4 pt-1 pb-4">
              <h3 className="text-textWhite font-Lato font-bold xs:text-Paragraph3 lg:text-Paragraph4 xl:text-Paragraph2 truncate">
                {product.p_name}
              </h3>
              <p className="text-textGray font-Lato font-normal xs:text-Paragraph6 text-Paragraph5 -mt-1">
                {product.p_category}
              </p>

              {/* Weight & Packaging Selection */}
              <div className="flex gap-6 mt-1 mb-3">
                {product.p_gram.map((weight, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Weight */}
                    <p
                      onClick={(e) => {
                        e.stopPropagation(); // avoid card click
                        handleWeightClick(product.id, weight);
                      }}
                      className={`cursor-pointer font-Lato font-bold text-Paragraph8 ${selectedWeight === weight ? "text-white" : "text-textGray"
                        }`}
                    >
                      {weight}
                    </p>

                    {/* Corresponding Packaging */}
                    <ul className="text-textGray text-Paragraph8 space-y-1">
                      {(product.p_packaging?.[weight] || []).map((item, idx) => (
                        <li
                          key={idx}
                          className={`${selectedWeight === weight ? "text-white" : "text-textGray"}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <AddToCartBtn product={product} selectedWeight={selectedWeight} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default memo(Card);