import React from "react";
import Banner from "../../assets/Home/map1.png"

const Locations = () => {
  return (
    <section
      className="overflow-hidden xs:py-14 md:py-16 xl:py-20 flex flex-col items-center-safe"
    >
        <h1
            className="text-left text-textPrimary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
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
