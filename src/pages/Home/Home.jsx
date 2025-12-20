import React, { Suspense, lazy } from 'react';

// 1. Hero ko direct import rakhenge kyunke ye LCP (sabse upar) hai
import Hero from './Hero';

// 2. Baaki sections ko lazy load karenge taake initial bundle size chota ho jaye
const ProductSection = lazy(() => import('./ProductSection'));
const OurMixes = lazy(() => import('./OurMixes'));
const FeaturedSection = lazy(() => import('./FeaturedSection'));
const Locations = lazy(() => import('./Locations'));
const Certification = lazy(() => import('./Certification'));
const BannerHome = lazy(() => import('./BannerHome'));

const Home = () => {
  return (
    <main>
      {/* Hero section for immediate display */}
      <Hero />

      {/* Suspense wrapper baaki components ko manage karega */}
      <Suspense fallback={<div className="h-20 bg-transparent" />}>
        <ProductSection />
        <OurMixes />
        <FeaturedSection />
        <Locations />
        <Certification />
        <BannerHome />
      </Suspense>
    </main>
  );
}

export default Home;