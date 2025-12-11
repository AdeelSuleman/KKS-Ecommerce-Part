import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Shop from '../pages/Shop/Shop'
import Product_Details from '../pages/ProductDetails/Product_Details'
import CartPage from '../pages/Cart/CartPage'

const AppRoutes = () => {
  return (
    <BrowserRouter> 
        <Navbar/>
        <Routes>
            <Route path="/" element=<Home/> />
            <Route path="/shop" element=<Shop/> />
            <Route path="/product/:id" element=<Product_Details/> />
            <Route path="/cart" element=<CartPage/> />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes