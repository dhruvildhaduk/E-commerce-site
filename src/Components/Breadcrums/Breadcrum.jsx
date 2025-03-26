import React from "react";
import arrow_icon from "../Assests/arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum flex items-center gap-2 text-[#5e5e5e] text-base font-semibold capitalize pt-14  px-[170px]">
      HOME
      <img src={arrow_icon} alt="" className="w-4 h-4" />
      SHOP
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      {product.category}
      <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
