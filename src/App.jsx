// import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategary from './pages/ShopCategary';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'


function App() {

  return (
    <div> 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategary banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategary banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategary banner={kid_banner} category="kid"/>}/>

        <Route path="/product/:productId" element={<Product />} />

        <Route/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
