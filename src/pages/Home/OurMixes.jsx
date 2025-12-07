import React, { useState, useEffect } from "react";
import Banner from "../../assets/Home/MixesBanner.png";
import BombayBiryani from "../../assets/Home/MixesProduct.png";
import ShopNowBtn from "../../components/ShopNowBtn";

const OurMixes = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
sit amet nibh ligula. Aenean sed laoreet elit. Donec ac nulla vel
diam porta mollis eu at mauris. Suspendisse ante sapien, vestibulum
nec ornare non, molestie quis dui. Cras tincidunt consectetur
eleifend. Vestibulum tempor lorem vitae metus efficitur, vitae
molestie massa porta. Orci varius natoque penatibus et magnis dis
parturient montes, nascetur ridiculus mus.`;

  const [showAll, setShowAll] = useState(false);

  const mixes = [
    {
      id: 1,
      name: "Bombay Biryani",
      description: description,
      image: BombayBiryani,
    },
    {
      id: 2,
      name: "Achar Gosht",
      description: description,
      image: BombayBiryani,
    },
    {
      id: 3,
      name: "Achar Masala",
      description: description,
      image: BombayBiryani,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % mixes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [mixes.length]);

  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat overflow-hidden xs:py-10 md:py-16 lg:pb-28 xl:py-22 xl:pb-32 border-0 relative"
    >
      <h1
        className="font-Poppins font-bold text-textSecondary
                xs:text-Heading4 xs:text-center 
                md:text-Heading3 
                lg:text-Heading3
                xl:text-Heading2"
      >
        OUR MIXES
      </h1>
      <div
        className="p-1 mx-auto xs:mt-10 lg:mt-10 px-4
            xs:w-[95vw] xs:gap-4
            flex flex-wrap
            md:flex-nowrap justify-between items-start  
            xl:w-7xl xl:gap-10"
      >
        {/* Right Box(s) - stacked and crossfaded */}
        <div className="relative h-full xs:w-full md:w-1/2 lg:w-2/4 ">
          {mixes.map((m, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={m.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 relative"
                    : "opacity-0 pointer-events-none"
                }`}
                style={{ willChange: "opacity" }}
              >
                <h1
                  className="font-Poppins font-bold text-textSecondary
                    xs:text-Heading4 xs:text-center 
                    md:text-Heading3 md:text-left
                    lg:text-Heading3
                    xl:text-Heading2"
                >
                  {m.name}
                </h1>

                <div className="xs:px-8 sm:px-20 md:px-0 lg:px-0 md:mb-14">
                  <p
                    className={`font-Lato text-textWhite 
                      xs:text-Paragraph6 text-justify 
                      md:pr-14 lg:text-Paragraph5
                      xl:text-Paragraph4
                      transition-all duration-500 overflow-hidden`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: showAll ? "none" : 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      maxHeight: showAll ? "1000px" : "4.5em",
                      transition: "max-height 0.6s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    {m.description}
                  </p>
                  {!showAll ? (
                    <button
                      className="text-textSecondary md:pl-0 underline transition-colors duration-200 hover:text-yellow-400 cursor-pointer"
                      onClick={() => setShowAll(true)}
                    >
                      Read more
                    </button>
                  ) : (
                    <button
                      className="text-textSecondary xs:pl-3 md:pl-0 underline transition-colors duration-200 hover:text-yellow-400 cursor-pointer"
                      onClick={() => setShowAll(false)}
                    >
                      Less
                    </button>
                  )}
                </div>

                <div className="mt-10 flex flex-col xs:items-center-safe md:items-start xs:hidden md:inline">
                  <ShopNowBtn />
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Box - stacked images (positioned to occupy same slot as headings) */}
        <div className="xs:w-[300px] xs:mx-auto md:w-1/2 lg:w-2/5 relative">
          {/* Large Product Image */}
          <div className="relative h-full">
            {mixes.map((m, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={m.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center  ${
                    isActive
                      ? "opacity-100 relative"
                      : "opacity-0 pointer-events-none"
                  } md:-left-16 lg:-left-12 xl:-left-20 `}
                  style={{ willChange: "opacity" }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="object-contain w-full h-full ml-auto xs:scale-110 md:scale-125"
                  />
                </div>
              );
            })}
          </div>

          {/* Small Product Image */}
          <div className="absolute transform 
                      xs:hidden 
                      md:inline md:w-[200px] md:top-1/2 md:left-1/4
                      lg:left-1/3
                      xl:w-[300px] xl:top-1/2 xl:left-1/3">
            {mixes.map((m, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={m.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center  ${
                    isActive
                      ? "opacity-100 relative"
                      : "opacity-0 pointer-events-none"
                  } md:left-14 `}
                  style={{ willChange: "opacity" }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="object-contain w-full h-full ml-auto xs:scale-110 md:scale-125"
                  />
                </div>
              );
            })}
          </div>

          {/* only mobile view */}
          <div className="relative h-full md:order-1 xs:order-2 xs:w-full md:w-1/2 lg:w-2/4 md:hidden xs:inline">
            <div className="mt-3 flex flex-col xs:items-center-safe md:items-start md:hidden ">
              <ShopNowBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMixes;
