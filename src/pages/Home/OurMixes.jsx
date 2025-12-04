import React, { useState } from "react";
import Banner from "../../assets/Home/MixesBanner.png";
import Product from "../../assets/Home/MixesProduct.png";
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

  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat overflow-hidden xs:py-10 md:py-16 xl:py-22 border-0"
    >
      <h1
        className="text-center text-textSecondary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
      >
        OUR MIXES
      </h1>
      <div
        className="p-1 mx-auto xs:mt-10 lg:mt-20
            xs:w-[95vw] xs:gap-4
            flex flex-wrap
            md:flex-nowrap justify-between items-center
            xl:w-[1280px] xl:gap-10"
      >
        {/* Right Box */}
        <div
          className="h-full md:order-1 xs:order-2
              xs:w-full
              md:w-1/2
              lg:w-2/4"
        >
          <h1
            className="font-Poppins font-bold text-textSecondary
                xs:text-Heading5 xs:text-center md:text-left
                lg:text-Heading2
                xl:text-Heading1"
          >
            Bombay Biryani
          </h1>

          <div>
            <p
              className={`font-Lato text-textWhite
                xs:text-Paragraph6 xs:text-center md:text-left
                2xl:text-Paragraph4
                transition-all duration-500 overflow-hidden`}
              style={{
                display: '-webkit-box',
                WebkitLineClamp: showAll ? 'none' : 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                maxHeight: showAll ? '1000px' : '4.5em', // roughly 3 lines of text
                transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1)'
              }}
            >
              {description}
            </p>
            {!showAll ? (
              <button
                className="text-textSecondary underline mt-2 transition-colors duration-200 hover:text-yellow-400 cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                Read more
              </button>
            ) : (
              <button
                className="text-textSecondary underline mt-2 transition-colors duration-200 hover:text-yellow-400 cursor-pointer"
                onClick={() => setShowAll(false)}
              >
                Less
              </button>
            )}
          </div>

          <div className="mt-10 flex flex-col xs:items-center-safe md:items-start">
            <ShopNowBtn />
          </div>
        </div>

        {/* Left Box */}
        <div
          className="h-full xs:order-1 md:order-2
              xs:w-full 
              md:w-1/2
              lg:w-2/5"
        >
          <img src={Product} alt="" className="w-full h-full scale-125" />
        </div>
      </div>
    </section>
  );
};

export default OurMixes;
