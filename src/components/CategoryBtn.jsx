import React from 'react'

const CategoryBtn = ({ name, isActive, onClick}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
      className={`flex justify-center items-center gap-2 text-Paragraph7 font-Lato 
        box-border border border-textWhite shadow-md rounded-md leading-5 px-4 py-2 transition-all duration-300
        ${isActive ? "bg-btnYellow border-transparent text-textPrimary" : "bg-transparent border-textWhite text-textWhite"}
        hover:bg-btnYellowhover hover:cursor-pointer hover:border-btnYellowhover hover:text-textPrimary
        focus:ring-4 focus:ring-warning-medium focus:outline-none`}
    >
        {name}
    </button>
  )
}

export default CategoryBtn