import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assests/cart_cross_icon.png";

const CartPreview = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const [suggestedPromo, setSuggestedPromo] = useState("");

  const promoCodes = {
    SUMMER20: 0.2,
    FLASH50: 0.5,
    FREESHIP: "free_shipping",
    NEWBIE10: 0.1,
    BIGDEAL25: 0.25,
  };

  // Random promo suggestion
  useEffect(() => {
    const promoKeys = Object.keys(promoCodes);
    const randomPromo = promoKeys[Math.floor(Math.random() * promoKeys.length)];
    setSuggestedPromo(randomPromo);
  }, []);

  const handleApplyPromo = () => {
    const code = promoCodes[promoCode.toUpperCase()];
    if (code) {
      if (code === "free_shipping") {
        setDiscount("free_shipping");
        setMessage("✅ Free shipping applied!");
      } else {
        setDiscount(code);
        setMessage(`✅ Promo code applied! You got ${(code * 100).toFixed(0)}% off.`);
      }
    } else {
      setDiscount(0);
      setMessage("❗ Invalid promo code.");
    }
  };

  const getTotalPrice = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.new_price * item.quantity,
      0
    );
  };

  const subtotal = getTotalPrice();
  const discountValue = discount !== "free_shipping" ? subtotal * discount : 0;
  const shippingFee = discount === "free_shipping" || subtotal > 100 ? 0 : 10;
  const finalTotal = subtotal - discountValue + shippingFee;

  const handleCheckout = () => {
    if (discount) {
      setMessage("🎉 Your order has been successfully completed!");
    } else {
      setMessage("⚠️ Order not completed — apply a promo code for the best deal!");
    }
  };

  return (
    <div className="cart-preview-container flex flex-col lg:flex-row gap-8 p-8 bg-gradient-to-r from-blue-50 to-purple-100 shadow-xl rounded-lg">
      {/* 🛒 Cart Items Section */}
      <motion.div
        className="cart-preview p-4 border bg-white shadow-md rounded-md w-full lg:w-2/3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold pb-7 text-gray-800">🛒 Your Cart</h2>
        {Object.values(cartItems).length > 0 ? (
          Object.values(cartItems).map((item) => (
            <motion.div
              key={item.id}
              className="cart-item flex justify-between items-center p-3 border-b"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-32 object-cover rounded-md shadow-md hover:scale-110 transition-transform"
              />
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600">x{item.quantity}</p>
              <p
                className={`text-lg ${
                  discount && discount !== "free_shipping" ? "text-green-500" : "text-gray-800"
                }`}
              >
                ${((item.new_price * item.quantity) * (1 - (discount !== "free_shipping" ? discount : 0))).toFixed(2)}
              </p>
              <img
                src={remove_icon}
                alt="Remove"
                className="cursor-pointer w-6 h-6 hover:scale-125 transition-transform hover:rotate-45"
                onClick={() => removeFromCart(item.id)}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </motion.div>

      {/* 📦 Order Summary Section */}
      <motion.div
        className="order-summary p-5 border bg-white shadow-lg rounded-md w-full lg:w-1/3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold pb-5 text-gray-800">📦 Order Summary</h2>
        <p className="text-lg text-gray-600">Subtotal: ${subtotal.toFixed(2)}</p>
        <p className={`text-lg ${discount ? "text-green-500" : "text-gray-600"}`}>
          Discount: -${discountValue.toFixed(2)}
        </p>
        <p className="text-lg text-gray-600">Shipping: ${shippingFee.toFixed(2)}</p>
        <hr className="my-2" />
        <p className="text-2xl font-bold text-gray-800">
          Total: ${finalTotal.toFixed(2)}
        </p>

        {/* 🎁 Suggested Promo Code */}
        <p className="text-gray-500 mt-2">
          🎁 Try this promo: <span className="text-red-500 font-semibold">{suggestedPromo}</span>
        </p>

        {/* 🔥 Promo Code Input */}
        <div className="promo-code mt-4">
          <input
            type="text"
            placeholder="Enter Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            className="mt-2 p-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md"
            whileHover={{ scale: 1.05 }}
            onClick={handleApplyPromo}
          >
            Apply Promo Code
          </motion.button>
        </div>

        {/* ✅ Checkout Button */}
        <motion.button
          className="mt-4 p-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md"
          whileHover={{ scale: 1.05 }}
          onClick={handleCheckout}
        >
          ✅ Proceed to Checkout
        </motion.button>

        {/* 🛎️ Inline Message Section */}
{message && (
  <motion.p
    className={`mt-4 text-center font-semibold ${
      message.includes("successfully") ? "text-green-500" : "text-red-500"
    }`}
    initial={{ opacity: 0, y: -20 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: [1, 1.1, 0.9, 1.05, 1],
      color: message.includes("successfully")
        ? ["#16a34a", "#4ade80", "#16a34a"]
        : ["#b91c1c", "#f87171", "#b91c1c"],
    }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],
    }}
  >
    {message}
  </motion.p>
)}

      </motion.div>
    </div>
  );
};

export default CartPreview;
