import React from "react";
import Banner from "../../assets/Home/Banner.png";
import Rectangle from "../../assets/Home/Rectangle.png";

const BannerHome = () => {
  return (
    <section className="relative overflow-hidden xs:py-20 md:py-16 lg:py-36 border-0">
      {/* 1. Main Background Optimization */}
      <img 
        src={Banner} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        loading="lazy"
        decoding="async"
      />

      <div className="mx-auto xs:w-[95vw] xl:w-7xl px-5 relative z-10">
        <div className="relative sm:w-2/3 xs:py-14 xs:px-6 lg:w-3/4 xl:py-20 lg:px-14 overflow-hidden">
          
          {/* 2. Inner Rectangle Background Optimization */}
          <img 
            src={Rectangle} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover -z-10" 
            loading="lazy"
            decoding="async"
          />

          <h1
            className="font-Poppins font-bold text-textSecondary
                xs:text-Heading4 xs:text-center xs:leading-8
                sm:text-left sm:leading-9
                md:text-Heading3 md:leading-11
                lg:text-Heading3
                xl:text-Heading2 xl:leading-16"
          >
            Unlock Authentic <br className="hidden sm:inline" /> 
            Flavor. Our <br className="hidden sm:inline"/>
            Masalas, Your <br className="hidden sm:inline"/> 
            Masterpiece.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;