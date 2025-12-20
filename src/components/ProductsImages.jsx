import React, { useRef, useState, memo, useCallback } from "react";

const ProductsImages = ({ images, value, setValue }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  // Optimization: Mouse move logic ko useCallback mein rakha taake re-render slow na ho
  const handleMouseMove = useCallback((e) => {
    if (!imgRef.current) return;
    
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    
    // Percentage calculation for background position
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  }, []);

  return (
    <article className="w-full">
      {/* MAIN IMAGE BOX */}
      <div
        className="relative w-full xs:h-[400px] xl:h-[600px] flex items-center justify-center p-3 overflow-hidden bg-white  shadow-sm cursor-zoom-in"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
      >
        {/* LCP Optimization: fetchPriority="high" for the main product image */}
        <img
          ref={imgRef}
          src={images[value]}
          alt="Product Main View"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className={`object-contain w-full h-full transition-opacity duration-300 ${
            zoom ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* ZOOM LAYER */}
        {zoom && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat pointer-events-none transition-transform duration-100"
            style={{
              backgroundImage: `url(${images[value]})`,
              backgroundSize: "250%", // Thora zyada zoom better detail ke liye
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        )}
      </div>

      {/* THUMBNAILS - Semantic list for accessibility */}
      <ul className="grid grid-cols-4 gap-4 py-4 mt-4 mx-auto sm:w-[400px] lg:w-full">
        {images.map((img, index) => (
          <li
            key={index}
            onClick={() => setValue(index)}
            className={`group cursor-pointer border-2 p-1 transition-all duration-200 
                ${index === value ? "border-textSecondary scale-105 shadow-md" : "border-gray-200 hover:border-gray-400"}`}
          >
            <img 
              src={img} 
              alt={`View ${index + 1}`} 
              loading="lazy" // Thumbnails lazy load honi chahiye
              className={`w-full h-16 sm:h-20 xl:h-[125px] object-contain transition-opacity ${index === value ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`} 
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

// Memoize to prevent unnecessary re-renders when parent state (like cart) changes
export default memo(ProductsImages);