import React from 'react'

const ViewCart_Btn = () => {
  return (
    <button
          type="button"
          className="w-full flex justify-center items-center gap-2 text-Paragraph6 font-Lato text-textWhite bg-btnPrimary 
                box-border border border-transparent shadow-xs font-medium leading-5 rounded-xl px-4 py-3 transition-all duration-300
                hover:bg-btnPrimaryHover hover:cursor-pointer
                focus:ring-2 focus:ring-btnPrimaryHover focus:outline-none"
        >
          <span>View Cart</span>
        </button>
  )
}

export default ViewCart_Btn