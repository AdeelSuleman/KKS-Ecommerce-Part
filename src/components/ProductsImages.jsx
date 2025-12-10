import React, { useRef, useState } from "react";

const ProductsImages = ({ images, value, setValue }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <article>
      {/* MAIN IMAGE BOX */}
      <div
        className="relative w-full xs:h-[400px] xl:h-[600px] flex items-center justify-center p-3 overflow-hidden bg-linear-to-tr from-gray-200 to-white cursor-zoom-in"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
      >
        {/* MAIN IMAGE (HIDE ON ZOOM) */}
        <img
          ref={imgRef}
          src={images[value]}
          alt="product"
          className={`object-contain w-full h-full transition-opacity duration-200 ${
            zoom ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* LENS ZOOM AREA */}
        {zoom && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: `url(${images[value]})`,
              backgroundSize: "200%",
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          ></div>
        )}
      </div>

      {/* THUMBNAILS */}
      <ul className=" gap-4 py-4 xs:mt-2 mt-4 grid grid-cols-4 mx-auto">
        {images.map((img, index) => (
          <li
            key={index}
            onClick={() => setValue(index)}
            className={`cursor-pointer  border p-1 bg-linear-to-tr from-gray-200 to-white transition-all
                ${index === value ? "border-yellow-500 opacity-70" : "border-gray-300"}`}
          >
            <img src={img} alt="thumb" className="w-full sm:h-20 xl:h-[125px] object-contain" />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductsImages;
