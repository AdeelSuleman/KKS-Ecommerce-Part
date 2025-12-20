import React, { useState, useEffect, useMemo } from "react";
import Banner from "../../assets/Home/MixesBanner.png";
import BombayBiryani from "../../assets/Home/MixesProduct.png";
import ShopNowBtn from "../../components/ShopNowBtn";

const OurMixes = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nibh ligula. Aenean sed laoreet elit. Donec ac nulla vel diam porta mollis eu at mauris. Suspendisse ante sapien, vestibulum nec ornare non, molestie quis dui. Cras tincidunt consectetur eleifend. Vestibulum tempor lorem vitae metus efficitur, vitae molestie massa porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;

  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mixes = useMemo(() => [
    { id: 1, name: "Bombay Biryani", description, image: BombayBiryani },
    { id: 2, name: "Achar Gosht", description, image: BombayBiryani },
    { id: 3, name: "Achar Masala", description, image: BombayBiryani },
  ], [description]);

  useEffect(() => {
    // Optimized Timer: 2s is fast for TBT, but keeping it as per your UI need
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % mixes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [mixes.length]);

  return (
    <section className="relative overflow-hidden xs:py-10 md:py-16 lg:pb-28 xl:py-22 xl:pb-32 border-0">
      {/* 1. Optimized Background Image (LCP Fix) */}
      <img 
        src={Banner} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover -z-10" 
        loading="lazy"
        decoding="async"
      />

      <h1 className="font-Poppins font-bold text-textSecondary xs:text-Heading4 xs:text-center md:text-Heading3 lg:text-Heading3 xl:text-Heading2 relative z-10">
        OUR MIXES
      </h1>

      <div className="p-1 mx-auto xs:mt-10 lg:mt-10 px-4 xs:w-[95vw] xs:gap-4 flex flex-wrap md:flex-nowrap justify-between items-start xl:w-7xl xl:gap-10 relative z-10">
        
        {/* Right Box - Titles & Description */}
        <div className="relative h-full xs:w-full md:w-1/2 lg:w-2/4">
          {mixes.map((m, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={m.id}
                className={`transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 relative" : "absolute inset-0 opacity-0 pointer-events-none"}`}
                style={{ willChange: "opacity" }}
              >
                <h1 className="font-Poppins font-bold text-textSecondary xs:text-Heading4 xs:text-center md:text-Heading3 md:text-left lg:text-Heading3 xl:text-Heading2">
                  {m.name}
                </h1>

                <div className="xs:px-8 sm:px-20 md:px-0 lg:px-0 md:mb-14">
                  <p
                    className="font-Lato text-textWhite xs:text-Paragraph6 text-justify md:pr-14 lg:text-Paragraph5 xl:text-Paragraph4 transition-all duration-500 overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: showAll ? "none" : 3,
                      WebkitBoxOrient: "vertical",
                      maxHeight: showAll ? "1000px" : "4.5em",
                    }}
                  >
                    {m.description}
                  </p>
                  <button
                    type="button"
                    className="text-textSecondary md:pl-0 underline transition-colors duration-200 hover:text-yellow-400 cursor-pointer"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "Less" : "Read more"}
                  </button>
                </div>

                <div className="mt-10 flex flex-col xs:items-center-safe md:items-start xs:hidden md:inline">
                  <ShopNowBtn />
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Box - Images */}
        <div className="xs:w-[300px] xs:mx-auto md:w-1/2 lg:w-2/5 relative min-h-[300px] md:min-h-[400px]">
          {/* Large & Small Image Container */}
          {mixes.map((m, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={m.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                style={{ willChange: "opacity" }}
              >
                {/* Large Image */}
                <div className="relative w-full h-full flex items-center justify-center md:-left-16 lg:-left-12 xl:-left-20">
                   <img src={m.image} alt={m.name} className="object-contain w-full h-full ml-auto xs:scale-110 md:scale-125" loading="lazy" decoding="async" />
                </div>
                
                {/* Small Image (Layered) */}
                <div className="absolute transform xs:hidden md:inline md:w-[200px] md:top-1/2 md:left-1/4 lg:left-1/3 xl:w-[300px] xl:top-1/2 xl:left-1/3">
                  <img src={m.image} alt="" className="object-contain w-full h-full ml-auto xs:scale-110 md:scale-125" loading="lazy" decoding="async" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View Button */}
        <div className="relative h-full md:order-1 xs:order-2 xs:w-full md:w-1/2 lg:w-2/4 md:hidden">
          <div className="mt-3 flex flex-col xs:items-center-safe md:items-start">
            <ShopNowBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMixes;