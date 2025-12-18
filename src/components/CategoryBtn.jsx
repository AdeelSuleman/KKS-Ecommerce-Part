import React from "react";

const CategoryBtn = ({ name, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
      className={`flex justify-center items-center gap-2 font-Lato xs:text-Paragraph8 xs:px-2.5 xs:py-1 md:text-Paragraph7 md:px-4 md:py-2
        box-border border border-textWhite shadow-md rounded-md leading-5 transition-all duration-300
        ${
          isActive
            ? "bg-btnYellow border-transparent text-textPrimary"
            : "bg-transparent border-textWhite text-textWhite"
        }
        hover:bg-btnYellowhover hover:cursor-pointer hover:border-btnYellowhover hover:text-textPrimary
        focus:ring-1 focus:ring-btnYellowhover focus:outline-none`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
