import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item w-[280px] transition-transform duration-500 hover:scale-105'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} className="w-full h-[280px] object-cover rounded-xl" />
      </Link>
      <p className='mt-4 text-lg font-semibold text-[#374151]'>{props.name}</p>
      <div className='item-prices flex gap-5 mt-2'>
        <div className='item-price-new text-[#374151] text-[18px] font-semibold'>
          ${props.new_price}
        </div>
        <div className='item-price-old text-[#8c8c8c] text-[18px] font-medium line-through'>
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
