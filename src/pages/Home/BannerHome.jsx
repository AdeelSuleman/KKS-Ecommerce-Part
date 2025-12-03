import React from "react";
import Banner from "../../assets/Home/Banner.png";
import Rectangle from "../../assets/Home/Rectangle.png";

const BannerHome = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat overflow-hidden xs:py-14 md:py-16 xl:py-20 border-0"
    >
      <div className="mx-auto xs:w-[95vw] xl:w-[1280px] px-5">
        <div
          style={{ backgroundImage: `url(${Rectangle})` }}
          className="bg-cover bg-center bg-no-repeat 
            sm:w-5/6 xs:p-5
            lg:w-2/3 p-20"
        >
          <h1
            className="text-left text-textSecondary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
          >
            Unlock Authentic Flavor. Our Masalas, Your Masterpiece.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
