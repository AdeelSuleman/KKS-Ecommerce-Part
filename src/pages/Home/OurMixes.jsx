import React from "react";
import Banner from "../../assets/Home/MixesBanner.png";
import Product from "../../assets/Home/MixesProduct.png";
import ShopNowBtn from "../../components/ShopNowBtn";

const OurMixes = () => {
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
        className="p-1 mx-auto mt-20
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
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
          >
            Bombay Biryani
          </h1>

          <p
            className="font-Lato text-textWhite
              xs:text-Paragraph6
              2xl:text-Paragraph4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet nibh ligula. Aenean sed laoreet elit. Donec ac nulla vel
            diam porta mollis eu at mauris. Suspendisse ante sapien, vestibulum
            nec ornare non, molestie quis dui. Cras tincidunt consectetur
            eleifend. Vestibulum tempor lorem vitae metus efficitur, vitae
            molestie massa porta. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>

          <div className="mt-5">
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
