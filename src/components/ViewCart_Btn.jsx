import React from 'react'
import { useNavigate } from "react-router-dom";

const ViewCart_Btn = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClose) onClose(); // ← sidebar close
    navigate("/cart"); // ← route change
  };

  return (
    <button
      type="button"
      onClick={handleClick}
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
