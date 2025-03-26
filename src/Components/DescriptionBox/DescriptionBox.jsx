import React from "react";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox m-[120px_170px]">
      {/* Navigation Tabs */}
      <div className="descriptionbox-navigator flex border-[1px] border-[#d0d0d0]">
        <div className="descriptionbox-nav-box flex items-center justify-center text-base font-semibold w-[171px] h-[70px] bg-white cursor-pointer hover:bg-gray-100">
          Description
        </div>
        <div className="descriptionbox-nav-box bg-[#fbfbfb] flex items-center justify-center text-base font-semibold w-[171px] h-[70px] cursor-pointer hover:bg-gray-100">
          <span className="text-[#555]">Reviews (122)</span>
        </div>
      </div>

      {/* Description Content */}
      <div className="descriptionbox-description flex flex-col gap-6 border-[1px] border-[#d0d0d0] p-12 pb-[70px] bg-[#fff]">
        <p className="leading-relaxed text-[#333]">
          An e-commerce website lets users browse products, view details, add
          items to their cart, and complete purchases. Key features include
          product filters, search, user authentication, a wishlist, and a
          dynamic cart system that calculates totals and supports discounts.
          Advanced features like reviews, order tracking, and payment.
        
        </p>
        <p className="leading-relaxed text-[#333]">
          An e-commerce website allows users to explore products, add items to
          their cart, and securely complete purchases. Features like search,
          filters, and reviews improve the shopping experience. 
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
