import React from 'react';
import exclusive_image from '../Assests/exclusive_image.png';

const Offer = () => {
  return (
    <div className='w-[65%] h-[60%] flex m-auto p-0 mt-32 bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22] to-60% rounded-lg shadow-lg'>
      <div className="flex-1 flex flex-col justify-center p-6">
        <h1 className='text-[#171717] text-6xl font-semibold leading-tight'>Exclusive</h1>
        <h1 className='text-[#171717] text-6xl font-semibold leading-tight'>Offers For You</h1>
        <p className='text-[#171717] text-xl font-semibold mt-4'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-[282px] h-[70px] rounded-full bg-[#ff4141] text-white text-xl font-bold mt-6 transition-transform transform hover:scale-105'>
          Check Now
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center p-6 pt-14">
        <div className='w-[70%] flex justify-center items-center'>
          <img src={exclusive_image} alt="Exclusive Offer" className='w-auto h-[80%] object-contain' />
        </div>
      </div>
    </div>
  );
};

export default Offer;
