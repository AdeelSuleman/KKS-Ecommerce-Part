import React from "react";
import Banner from "../../assets/Home/map1.png"

const Locations = () => {
  return (
    <section
      className="overflow-hidden md:py-0 md:pb-0 lg:py-0 flex flex-col items-center-safe"
    >
      <h1
        className="font-Poppins font-bold text-textPrimary
            xs:text-Heading4 xs:text-center 
            md:text-Heading3 
            lg:text-Heading3
            xl:text-Heading2"
      >
        LOCATIONS
      </h1>

      <div className="px-3 xs:mt-6 md:mt-10 relative w-full max-w-7xl mx-auto">
        {/* 1. Fixed aspect ratio to prevent Layout Shift (CLS)
           2. added width/height for browser pre-calculation
           3. Lazy loading & Async decoding for better Speed Index
        */}
        <img 
          src={Banner} 
          alt="Our Locations Map" 
          className="w-full h-auto object-contain"
          width="1280" 
          height="720"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Locations;