import React from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop';
import Navbar from './Navbar';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Product_Details from '../pages/ProductDetails/Product_Details';
import CartPage from '../pages/Cart/CartPage';
import Footer from './Footer';

const AppLayout = () => {

    const location = useLocation();

  return (
    <main>
        <ScrollToTop />
        <Navbar />
        {location.pathname === '/' && <Home/>}
        {location.pathname === '/shop' && <Shop/>}
        {location.pathname.startsWith('/product') && <Product_Details/>}
        {location.pathname === '/cart' && <CartPage/>}
        <Footer/>
    </main>
  )
}

export default AppLayout