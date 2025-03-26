import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext); // Get cart count from context

  return (
    <div className="flex items-center justify-between px-28 py-5 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-2xl font-bold text-gray-900">SHOPPER</p>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
        {["shop", "mens", "womens", "kids"].map((item) => (
          <li key={item} onClick={() => setMenu(item)} className="relative cursor-pointer">
            <Link to={`/${item === "shop" ? "" : item}`} className="hover:text-red-500 transition-all">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && <hr className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500" />}
          </li>
        ))}
      </ul>

      {/* Login & Cart Section */}
      <div className="flex items-center gap-6">
        <Link to="/login">
          <button className="px-7 py-2 text-white bg-red-500 rounded-[18px] hover:bg-red-600 transition-all">
            Login
          </button>
        </Link>

        {/* Cart Icon with Dynamic Counter */}
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="cart" className="w-8 h-8" />
          {getTotalCartItems() > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalCartItems()}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
