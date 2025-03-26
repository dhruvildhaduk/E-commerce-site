import React from "react";
import './hero.css';
import hand_icon from '../Assests/hand_icon.png';
import arrow from '../Assests/arrow.png';
import hero_image from '../Assests/hero_image.png';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] px-28">
      {/* Left Side */}
      <div className="flex flex-col items-start lg:items-start text-center lg:text-left gap-6 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-900">NEW ARRIVALS ONLY</h2>

        <div className="flex items-center justify-center gap-4">
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
            new
          </p>
          <img src={hand_icon} alt="Hand Icon" className="w-20 md:w-24" />
        </div>

        <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
          collection <br /> for everyone
        </p>

        <button className="flex items-center gap-3 px-6 py-4 text-white bg-red-500 rounded-full text-lg font-medium hover:bg-red-600 transition-all">
          Latest Collection
          <img src={arrow} alt="Arrow" className="w-6" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
        <img
          src={hero_image}
          alt="Hero"
          className="w-[70%] max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
