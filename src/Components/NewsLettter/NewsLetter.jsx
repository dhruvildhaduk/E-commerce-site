import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter w-[80%] m-[100px] h-[365px] flex flex-col justify-center items-center mx-auto bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22] gap-8">
      <h1 className="text-[#454545] text-[50px] font-bold m-0 text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-xl">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-full border border-[#e3e3e3]">
        <input
          className="w-[500px] ml-6 border-none outline-none text-[#616161] text-lg placeholder-gray-500"
          type="email"
          placeholder="Your Email ID"
        />
        <button className="w-[210px] h-[70px] rounded-full bg-black text-white text-lg cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
