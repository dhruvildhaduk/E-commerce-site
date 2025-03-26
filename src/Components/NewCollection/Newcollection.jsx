import React from 'react'
import new_collection from '../Assests/new_collections'
import Item from '../items/Item'
import './newcollection.css'

const Newcollection = () => {
  return (
    <div className=' flex flex-col items-center gap-10 pt-[50px]'>
        <h1 className='text-[#171717] text-[50px] fw-[600]'>New Collection</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        <div className=' mt-[50px] flex flex-wrap justify-center gap-8 w-[90%]'>
            {new_collection.map((item,i) => {
                return <Item key = {i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />

            })}
        </div>
    </div>
  )
}

export default Newcollection
