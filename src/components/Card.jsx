import { memo, useState, useCallback } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { useNavigate } from "react-router-dom";

const Card = ({ filteredProduct }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedWeightMap, setSelectedWeightMap] = useState(() => {
    // By default, all products select 1000g
    const map = {};
    filteredProduct.forEach((p) => {
      map[p.id] = "1000g";
    });
    return map;
  });

  const navigate = useNavigate();

  const openProductDetails = useCallback(
    (id) => {
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  const handleWeightClick = (productId, weight) => {
    setSelectedWeightMap((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };

  return (
    <>
      {filteredProduct.map((product) => {
        const selectedWeight = selectedWeightMap[product.id] || "1000g";
        const packaging = product.p_packaging?.[selectedWeight] || [];

        return (
          <div
            key={product.id}
            className="border border-textWhite rounded-2xl shadow-md overflow-hidden relative transition-all duration-300 h-fit cursor-pointer
               hover:shadow-lg hover:shadow-gray-800"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => openProductDetails(product.id)}
          >
            <div className="relative w-full overflow-hidden bg-white flex flex-col items-center h-[220px]">
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

              <img
                src={product.p_image}
                alt={product.p_name}
                loading="lazy"
                decoding="async"
                className={`w-[170px] object-contain transition-opacity duration-300 ease-in-out ${hoveredId === product.id
                  ? "opacity-0 h-[220px] z-10"
                  : "opacity-100 h-full z-10"
                  }`}
                style={{ backfaceVisibility: "hidden" }}
              />

              <img
                src={product.p_images[0]}
                alt={product.p_name}
                loading="lazy"
                decoding="async"
                className={`absolute top-0 w-[170px] object-contain transition-opacity duration-300 ease-in-out ${hoveredId === product.id
                  ? "opacity-100 h-[220px] z-10 scale-110"
                  : "opacity-0 h-full z-10 "
                  }`}
                style={{ backfaceVisibility: "hidden" }}
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
              <h3 className="text-textWhite font-Lato font-bold xs:text-Paragraph3 lg:text-Paragraph4 xl:text-Paragraph2">
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
