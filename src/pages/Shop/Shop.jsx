import React from 'react'
import BannerSlider from './BannerSlider'
import { ProductsSec } from './ProductsSec'

const Shop = () => {
  return (
    <main className='overflow-hidden'>
        <BannerSlider/>
        <ProductsSec />
    </main>
  )
}

export default Shop