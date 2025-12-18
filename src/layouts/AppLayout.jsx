import React, { lazy, memo, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop';
import Navbar from './Navbar';
import Footer from './Footer';

// ✅ Lazy load pages
const Home = lazy(() => import("../pages/Home/Home"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Product_Details = lazy(() => import("../pages/ProductDetails/Product_Details"));
const CartPage = lazy (() => import("../pages/Cart/CartPage"));

const AppLayout = () => {

    const location = useLocation();

  return (
    <main>
        <Suspense fallback={null}>
        <ScrollToTop />
        <Navbar />
        {location.pathname === '/' && <Home/>}
        {location.pathname === '/shop' && <Shop/>}
        {location.pathname.startsWith('/product') && <Product_Details/>}
        {location.pathname === '/cart' && <CartPage/>}
        <Footer/>
        </Suspense>
    </main>
  )
}

export default memo(AppLayout);