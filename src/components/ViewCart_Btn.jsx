import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ViewCart_Btn = ({ onClose }) => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartCount = cart.length;

  const handleClick = (e) => {
    e.stopPropagation();       // sidebar click se bachaata hai
    if (onClose) onClose();    // ✅ sidebar band
    navigate("/cart");         // ✅ cart page
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative w-full flex justify-center items-center gap-4
        text-Paragraph6 font-Lato text-textWhite bg-btnPrimary
        rounded-xl px-4 py-3 transition-all duration-300
        hover:bg-btnPrimaryHover cursor-pointer"
    >
      {/* Cart Icon + Badge */}
      <div className="relative">
        <IoMdCart className="text-xl" />

        {cartCount > 0 && (
          <span
            className="absolute -top-4 -right-3
              bg-red-700 text-textWhite text-Paragraph9
              w-5 h-5 rounded-full flex items-center justify-center
              font-bold"
          >
            {cartCount}
          </span>
        )}
      </div>

      <span>View Cart</span>
    </button>
  );
};

export default ViewCart_Btn;
