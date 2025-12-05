import React from "react";
import Banner from "../../assets/Home/map1.png"

const Locations = () => {
  return (
    <section
      className="overflow-hidden xs:py-5 xs:pb-6 md:py-0 md:pb-0 lg:py-0 flex flex-col items-center-safe"
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

      <div className="px-3 xs:mt-6 md:mt-14 relative">
        {/* Map Banner Image */}
        <img src={Banner} alt="Map" className="w-full h-auto" />

        {/* Iran  */}
        {/* <img 
            src={Vector1} 
            className="z-10 absolute
                xs:-top-[30vh] xs:left-36 xs:w-[50px]" /> */}
      </div>
    </section>
  );
};

export default Locations;
