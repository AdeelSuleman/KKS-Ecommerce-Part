import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiArrowDownWideLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";

const CheckoutForm = ({ onClose, onSuccess, subtotal, gst, total }) => {

  const { clearCart } = useCart();
  
  // Fixed Shipping Charges
  const shipping = subtotal > 0 ? 200 : 0;

  const grandTotal = total + shipping;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    billing: "",
    shipping: "",
    payment: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Required";
    if (!formData.email.trim()) err.email = "Required";
    if (!formData.phone.trim()) err.phone = "Required";
    if (!formData.country) err.country = "Required";
    if (!formData.province) err.province = "Required";
    if (!formData.billing.trim()) err.billing = "Required";
    if (!formData.shipping.trim()) err.shipping = "Required";
    if (!formData.payment) err.payment = "Required";
    if (!formData.terms) err.terms = "You must accept Terms & Conditions";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    clearCart();
    
    onClose();
    setTimeout(() => onSuccess(), 200);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl py-5 px-6 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
        >
          <IoClose size={26} />
        </button>

        <h2 className="font-Poppins font-bold text-btnPrimary mb-5 text-Heading5 ">
          Checkout
        </h2>

        <div className="space-y-4 px-3 h-[60vh] overflow-y-scroll">

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border border-textGray py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none ${
                  errors.name && "border-red-500"
                }`}
              />
              {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border border-textGray py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none ${
                  errors.email && "border-red-500"
                }`}
              />
              {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border border-textGray py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none ${
                errors.phone && "border-red-500"
              }`}
            />
            {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
          </div>

          {/* Country */}
          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full border border-textGray py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none appearance-none ${
                errors.country && "border-red-500"
              }`}
            >
              <option value="">Country/Region</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Middle East-GCC">Middle East-GCC</option>
              <option value="Africa">Africa</option>
              <option value="Australia">Australia</option>
            </select>
            <RiArrowDownWideLine className="absolute top-3 right-4 z-10" />
            {errors.country && <p className="text-red-600 text-xs">{errors.country}</p>}
          </div>

          {/* Province */}
          <div className="relative">
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              className={`w-full border py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none appearance-none ${
                errors.province && "border-red-500"
              }`}
            >
              <option value="">Province/State</option>
              <option value="Sindh">Sindh</option>
              <option value="Punjab">Punjab</option>
              <option value="KPK">KPK</option>
            </select>
            <RiArrowDownWideLine className="absolute top-3 right-4 z-10" />
            {errors.province && <p className="text-red-600 text-xs">{errors.province}</p>}
          </div>

          {/* Billing */}
          <div>
            <input
              name="billing"
              placeholder="Billing Address"
              value={formData.billing}
              onChange={handleChange}
              className={`w-full border py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none ${
                errors.billing && "border-red-500"
              }`}
            />
            {errors.billing && <p className="text-red-600 text-xs">{errors.billing}</p>}
          </div>

          {/* Shipping */}
          <div>
            <input
              name="shipping"
              placeholder="Shipping Address"
              value={formData.shipping}
              onChange={handleChange}
              className={`w-full border py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none ${
                errors.shipping && "border-red-500"
              }`}
            />
            {errors.shipping && <p className="text-red-600 text-xs">{errors.shipping}</p>}
          </div>

          {/* Payment */}
          <div className="relative">
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className={`w-full border py-2.5 px-4 rounded-md text-Paragraph8 text-textGray font-lato font-semibold focus:ring-0 focus:outline-none appearance-none ${
                errors.payment && "border-red-500"
              }`}
            >
              <option value="">Payment Method</option>
              <option value="COD">Cash on Delivery</option>
            </select>
            <RiArrowDownWideLine className="absolute top-3 right-4 z-10" />
            {errors.payment && <p className="text-red-600 text-xs">{errors.payment}</p>}
          </div>

          {/* TERMS & CONDITIONS */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-Paragraph9 text-gray-700 cursor-pointer">
              I agree to the <span className="text-btnPrimary font-semibold">Terms & Conditions</span>
            </label>
          </div>
          {errors.terms && <p className="text-red-600 text-xs mt-1">{errors.terms}</p>}

          {/* ORDER SUMMARY */}
          <div className="bg-gray-100 rounded-lg p-4 mt-4 text-Paragraph8 font-Lato space-y-2 font-lato">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Subtotal:</span>
              <span>Rs {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">GST (17%):</span>
              <span>Rs {gst}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Shipping Charges:</span>
              <span>Rs {shipping}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold text-gray-900">
              <span>Grand Total:</span>
              <span>Rs {grandTotal}</span>
            </div>
          </div>


        </div>
          {/* Place Order */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded-md text-sm mt-5"
          >
            Place Order
          </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
