import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Shop from '../pages/Shop/Shop'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element=<Home/> />
            <Route path="/shop" element=<Shop/> />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes