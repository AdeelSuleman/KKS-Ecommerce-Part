import React from "react";
import Banner from "../../assets/Home/ProductBanner.png";

export const ProductsSec = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-cover bg-center bg-no-repeat xs:py-10 md::py-16 xl:py-22 border-0"
    >
      <div className="mx-auto xs:w-[95vw] xl:w-[1280px] xl:px-4">
        <h1
          className="text-center text-textSecondary font-Poppins font-bold 
                xs:text-Heading5
                lg:text-Heading2
                xl:text-Heading1"
        >
          PRODUCT RANGES
        </h1>

        <h2
          className="text-center text-textWhite font-Lato font-bold
            xs:text-Paragraph2
            xl:text-Paragraph1"
        >
            THE KIND YOU WONT BE ABLE TO RESIST
        </h2>
      </div>
    </section>
  );
};
