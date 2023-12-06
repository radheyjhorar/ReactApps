import React from 'react'
import ProductCategories from '../../components/productCategories/ProductCategories'
import BannerSlider from '../../components/banner-slider/BannerSlider';

const Home = () => {
  return (
    <>
      <BannerSlider />
      <ProductCategories/>
    </>
  )
}

export default Home;