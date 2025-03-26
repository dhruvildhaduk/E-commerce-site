import React from 'react'
import data_product from '../Assests/data';
import Item from '../items/Item';

const Populer = () => {
  return (
    <div className='popular flex flex-col items-center gap-10 pt-[50px]'>
        <h1 className='text-[#171717] text-[50px] fw-[600]'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        <div className='popular-item mt-[50px] flex gap-8 w-[80%]'>
            {data_product.map((item,i) => {
                return <Item key = {i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />

            })}
        </div>
    </div>
  )
}

export default Populer
