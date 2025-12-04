import React from "react";
import HeroBanner from "../../assets/Home/HomeBanner.png";
import InlineVideoPlayer from "../../components/InlineVideoPlayer";
import ShopNowBtn from "../../components/ShopNowBtn";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBanner})` }}
      className="bg-cover bg-center bg-no-repeat overflow-hidden xs:pt-5 xs:pb-8 md:py-16 xl:py-22 bg-Primarybg"
    >
      <div
        className="mx-auto px-4
          xs:w-[95vw] xs:gap-4
          flex flex-wrap
          md:flex-nowrap justify-between items-center
          xl:w-[1280px] xl:gap-10 "
      >
        {/* Right Box */}
        <div
          className="h-full
              xs:w-full xs:order-2
              md:w-1/2 md:order-1 md:pr-6
              lg:w-2/4 "
        >
          <h1
            className="font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
          >
            Main Heading
          </h1>

          <p
            className="font-Lato text-justify
              xs:text-Paragraph6
              2xl:text-Paragraph4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet nibh ligula. Aenean sed laoreet elit. Donec ac nulla vel
            diam porta mollis eu at mauris. Suspendisse ante sapien, vestibulum
            nec.
          </p>

          <div className="mt-5 flex flex-col items-center-safe md:items-start">
            <ShopNowBtn />
          </div>
        </div>

        {/* Left Box */}
        <div
          className="
              h-full
              xs:w-full xs:order-1
              md:w-1/2 md:order-2
              lg:w-2/4"
        >
          <InlineVideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
