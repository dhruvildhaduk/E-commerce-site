import React from 'react'
import Hero from '../Components/Hero/Hero'
import Populer from '../Components/Popular/Populer'
import Offer from '../Components/Offers/Offer'
import Newcollection from '../Components/NewCollection/Newcollection'
import NewsLetter from '../Components/NewsLettter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Populer/>
      <Offer/>
      <Newcollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
