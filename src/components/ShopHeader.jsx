import React from "react";
import { FiHome } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const ShopHeader = ({ productCount }) => {
  return (
    <div className="mx-auto xs:w-[95vw] xl:w-[1280px] px-6 xl:px-4">
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

      <div className="mt-5 xs:px-4 xl:px-0">
        {/* Current Page box */}
        <div className="flex justify-between items-center w-fit gap-3 xs:text-Paragraph7 xl:text-Paragraph6">
          <FiHome className="text-textSecondary" />
          <p className="font-Lato font-semibold text-textWhite">Shop</p>
        </div>

        {/* Numbers Of Product Box */}
        <div className="flex justify-between items-center w-fit gap-3 xs:text-Paragraph7 xl:text-Paragraph6 mt-4">
          <FaArrowRight className="text-textSecondary" />
          <p className="font-Lato text-textWhite">
            We found {productCount} items for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
