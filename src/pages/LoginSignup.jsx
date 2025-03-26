import React from 'react';

const LoginSignup = () => {
  return (
    <div className='loginsignup w-full min-h-[70vh] bg-gradient-to-r from-[#fce3fe] to-[#ffb6c1] py-10 flex items-center justify-center relative overflow-hidden bg-[200%] animate-[bg-pan_10s_linear_infinite]'>
      <div className="loginsignup-container w-[580px] min-h-[600px] bg-white p-10 shadow-lg rounded-2xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className='text-3xl font-bold mb-5 text-center'>Sign Up</h1>

        <div className="loginsignup-fields flex flex-col gap-5 mt-5 mb-4">
          <input 
            type="text" 
            placeholder='Your Name' 
            className='w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-600 text-lg'
          />
          <input 
            type="email" 
            placeholder='Email Address' 
            className='w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-600 text-lg'
          />
          <input 
            type="password" 
            placeholder='Password' 
            className='w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-gray-600 text-lg'
          />
        </div>

        <button className='w-full mt-5 mb-3 bg-[#ff5a5f] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#e14b50] transition'>
          Continue
        </button>

        <p className="loginsignup-login mt-4 mb-2 text-center text-gray-600">
          Already have an account? <span className='text-[#ff5a5f] cursor-pointer hover:underline'>Login here</span>
        </p>

        <div className="loginsignup-agree flex items-center gap-2 mt-4 text-gray-600 text-sm">
          <input type="checkbox" id='agree' />
          <label htmlFor='agree'>By continuing, I agree to the <span className='text-[#ff5a5f] cursor-pointer hover:underline'>terms of use</span> & <span className='text-[#ff5a5f] cursor-pointer hover:underline'>privacy policy</span>.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
