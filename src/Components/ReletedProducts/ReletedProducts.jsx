import React from 'react'
import data_product from '../Assests/data'
import Item from '../items/Item'

const ReletedProducts = () => {
  return (
    <div className='reletedproducts flex flex-col items-center gap-[10px] h-[90vh]'>
       <h1 className='text-[#171717] text-[50px] fw-[600] '>Releted Product</h1>
       <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
       <div className="reletedproducts-items mt-[50px] flex gap-[30px]">
        {data_product.map((item,i) => {
            return <Item key = {i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        })}
       </div>
    </div>
  )
}

export default ReletedProducts
