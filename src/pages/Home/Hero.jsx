import React from "react";
import HeroBanner from "../../assets/Home/HomeBanner.png";
import InlineVideoPlayer from "../../components/InlineVideoPlayer";
import ShopNowBtn from "../../components/ShopNowBtn";

const Hero = () => {
  return (
    <section className="relative overflow-hidden xs:pt-5 xs:pb-8 lg:pb-10 xl:pt-8 xl:pb-14 bg-Primarybg">
      {/* Optimized Background Image Load */}
      <img 
        src={HeroBanner} 
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
        fetchpriority="high" 
        loading="eager"
        decoding="sync"
      />
      
      <div className="mx-auto relative z-20 px-4 xs:gap-4 xs:w-[90vw] flex flex-wrap md:flex-nowrap justify-between items-center xl:w-7xl xl:gap-10">
        {/* Right Box (Text Content) */}
        <div className="h-full xs:w-full xs:order-2 md:w-80 md:order-1 md:pr-6 lg:w-2/5">
          <h1 className="font-Poppins font-bold xs:text-Heading4 xs:text-left md:text-Heading3 lg:text-Heading3 xl:text-Heading1">
            Main Heading
          </h1>
          <p className="font-Lato text-justify xs:text-Paragraph6 md:pr-5 lg:pr-[35px] xl:text-Paragraph4 xl:pr-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet nibh ligula. Aenean sed laoreet elit. Donec ac nulla vel
            diam porta mollis eu at mauris. Suspendisse ante sapien, vestibulum
            nec.
          </p>
          <div className="mt-5 flex flex-col items-start">
            <ShopNowBtn />
          </div>
        </div>

        {/* Left Box (Video Player) */}
        <div className="h-full xs:w-full xs:order-1 md:w-[360px] md:order-2 lg:w-[550px] xl:w-[740px]">
          <InlineVideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Hero;