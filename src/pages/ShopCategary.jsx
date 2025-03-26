import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import Item from "../Components/items/Item";
import { motion } from "framer-motion";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      {/* Banner Section */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="shopcategory-banner d-block m-[30px_auto] w-[85%]"
          src={props.banner}
          alt="Banner"
        />
      </motion.div>

      {/* Sorting Section */}
      <div className="flex justify-center">
        <div className="shopcategory-indexsort flex m-[0px 170px] justify-between items-center w-[85%]">
          <p className="font-semibold">
            <span className="font-semibold">Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort p-[10px_20px] rounded-[40px] border border-[#888] cursor-pointer hover:shadow-lg transition-all duration-300">
            Sort by <img src={dropdown_icon} alt="dropdown" className="inline-block ml-2" />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <motion.div
        className="shopcategory-products mt-[50px] flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {all_product.map(
          (item, i) =>
            item.category === props.category && (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Item
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </motion.div>
            )
        )}
      </motion.div>

      {/* Load More Button */}
      <motion.div
        className="shopcategory-loadmore flex justify-center items-center mx-auto mt-10 w-[233px] h-[69px] rounded-[75px] bg-[#e1e1e1] text-[#6c6c6c] text-[18px] font-medium cursor-pointer hover:bg-[#ddd] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore More
      </motion.div>
    </div>
  );
};

export default ShopCategory;
