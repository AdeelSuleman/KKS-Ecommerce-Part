import React from "react";
import HeroBanner from "../../assets/Home/HomeBanner.png";
import InlineVideoPlayer from "../../components/InlineVideoPlayer";
import ShopNowBtn from "../../components/ShopNowBtn";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBanner})` }}
      className="bg-cover bg-center bg-no-repeat overflow-hidden xs:pt-5 xs:pb-8 lg:pb-10 xl:pt-8 xl:pb-14 bg-Primarybg"
    >
      <div
        className="mx-auto px-4 
           xs:gap-4
          flex flex-wrap
          md:flex-nowrap justify-between items-center
          xl:w-7xl xl:gap-10 "
      >
        {/* Right Box */}
        <div
          className="h-full 
              xs:w-full xs:order-2
              md:w-80 md:order-1 md:pr-6
              lg:w-2/5"
        >
          <h1
            className="font-Poppins font-bold 
                xs:text-Heading4 xs:text-left
                md:text-Heading3 
                lg:text-Heading3
                xl:text-Heading1"
          >
            Main Heading
          </h1>

          <p
            className="font-Lato text-justify
              xs:text-Paragraph6 md:pr-5 lg:pr-[68px]
              xl:text-Paragraph4 xl:pr-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet nibh ligula. Aenean sed laoreet elit. Donec ac nulla vel
            diam porta mollis eu at mauris. Suspendisse ante sapien, vestibulum
            nec.
          </p>

          <div className="mt-5 flex flex-col items-start">
            <ShopNowBtn />
          </div>
        </div>

        {/* Left Box */}
        <div
          className="
              h-full
              xs:w-full xs:order-1
              md:w-[360px] md:order-2
              lg:w-[550px]
              xl:w-[740px]"
        >
          <InlineVideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
