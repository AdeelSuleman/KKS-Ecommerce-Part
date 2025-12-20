import React, { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppLoader from "../Loader/AppLoader";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      {/* Main content area */}
      <main className="grow">
        <Suspense fallback={<AppLoader />}>
          {/* Outlet ka matlab hai: Jo bhi current route hai, wo yahan render ho jaye */}
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default memo(AppLayout);