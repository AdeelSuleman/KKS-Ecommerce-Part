import React from "react";

const ThankYouPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full">

        <h2 className="text-Heading2 font-Lato font-bold text-textPrimary">Thank You!</h2>
        <p className="text-gray-700 mt-2">Your Order # 35050 placed successfully. Please check your email for further confirmation.</p>

        <button
          onClick={onClose}
          className="mt-6 px-8 py-2 bg-btnPrimary w-full text-white rounded-md text-Paragraph2 font-bold font-Lato cursor-pointer
                hover:bg-btnPrimaryHover focus:ring-0 focus:outline-none"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default ThankYouPopup;
