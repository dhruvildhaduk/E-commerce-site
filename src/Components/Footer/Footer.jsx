import React from "react";
import footer_logo from "../Assests/logo_big.png";
import instagram_icon from "../Assests/instagram_icon.png";
import pintester_icon from "../Assests/pintester_icon.png";
import whatsapp_icon from "../Assests/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center gap-12 pt-16">
      {/* Footer Logo */}
      <div className="footer-logo flex items-center gap-5">
        <img src={footer_logo} alt="footer logo" />
        <p className="text-[#383838] text-[46px] font-bold">SHOPPER</p>
      </div>

      {/* Footer Links */}
      <ul className="footer-link flex list-none gap-14 text-[#252525] text-[20px] font-bold">
        {["Company", "Products", "Offices", "About", "Contact"].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-red-500 transition-all duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icon flex gap-5">
        <div className="footer-icons-container p-[10px] pb-[8px] bg-[#Fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-xl transition-all duration-150 hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#833AB4] hover:scale-125 hover:shadow-lg">
          <img src={instagram_icon} alt="instagram" className="w-6 h-6" />
        </div>

        <div className="footer-icons-container p-[10px] pb-[8px] bg-[#Fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-xl transition-all duration-150 hover:bg-gradient-to-r from-[#E60023] via-[#FF4242] to-[#FF8C42] hover:scale-125 hover:shadow-lg">
          <img src={pintester_icon} alt="pinterest" className="w-6 h-6" />
        </div>

        <div className="footer-icons-container p-[10px] pb-[8px] bg-[#Fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-xl transition-all duration-150 hover:bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] hover:scale-125 hover:shadow-lg">
          <img src={whatsapp_icon} alt="whatsapp" className="w-6 h-6" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#646464]" />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
