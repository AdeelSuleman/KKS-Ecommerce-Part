import { BrowserRouter, Routes, Route } from "react-router-dom";
import { memo } from "react";
import AppLayout from "../layouts/AppLayout";
import Page404 from "../pages/Page404";
// Pages ko yahan lazy load karein taake AppLayout saaf rahe
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Product_Details = lazy(() => import("../pages/ProductDetails/Product_Details"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* AppLayout wrapper hai, iske andar Outlet mein baki pages render honge */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product_Details />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(AppRoutes);