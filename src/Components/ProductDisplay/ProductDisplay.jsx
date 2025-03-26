import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../../context/ShopContext";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay flex flex-col md:flex-row my-10 mx-40 gap-8 p-6 bg-white shadow-lg rounded-xl max-w-6xl">
      <motion.div
        className="productdisplay-left flex gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="productdisplay-thumbnails flex flex-col gap-2">
          {[...Array(4)].map((_, index) => (
            <motion.img
              key={index}
              src={product.image}
              alt={`Thumbnail ${index + 1}`}
              className="h-32 w-32 object-cover cursor-pointer rounded-md border hover:border-gray-500 hover:scale-110 transition-transform"
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img w-[800px] h-[600px] object-cover rounded-lg shadow-2xl border"
            src={product.image}
            alt={product.name}
          />
        </div>
      </motion.div>

      <motion.div
        className="productdisplay-right flex flex-col gap-4 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-gray-800 text-4xl font-bold">{product.name}</h1>
        <div className="productdisplay-right-stars flex items-center mt-2 gap-1 text-gray-700 text-base">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="Star" className="w-5 h-5" />
          ))}
          <img src={star_dull_icon} alt="Dull Star" className="w-5 h-5" />
          <p className="ml-2 text-gray-500">(122)</p>
        </div>
        <div className="productdisplay-right-prices flex mt-4 gap-4 text-2xl font-semibold">
          <div className="text-gray-500 line-through">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          An e-commerce clothing site should feature a sleek UI with product
          filters, size guides, and high-quality images. Include a cart,
          wishlist, and smooth checkout with discounts.
        </p>
        <div className="productdisplay-right-size">
          <h2 className="text-lg font-semibold mt-4">Select Size</h2>
          <div className="flex gap-2 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="border px-4 py-2 cursor-pointer hover:bg-gray-200 transition rounded-md"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <motion.button
          className="p-4 w-full md:w-48 text-base font-semibold text-white bg-red-500 mt-4 hover:bg-red-600 transition duration-300 rounded-lg cursor-pointer shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </motion.button>
        <p className="mt-2 text-gray-500">
          <span className="font-semibold">Category:</span> Women, T-shirt, CropTop
        </p>
        <p className="text-gray-500">
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </motion.div>
    </div>
  );
};

export default ProductDisplay;
