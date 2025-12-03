import React from 'react'
import Hero from './Hero'
import ProductSection from './ProductSection'
import OurMixes from './OurMixes'
import FeaturedSection from './FeaturedSection'
import Certification from './Certification'
import BannerHome from './BannerHome'
import Locations from './Locations'

const Home = () => {
  return (
    <section>
      <Hero/>
      <ProductSection/>
      <OurMixes/>
      <FeaturedSection/>
      <Locations/>
      <Certification/>
      <BannerHome/>
    </section>
  )
}

export default Home