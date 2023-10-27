import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import productData from './Products.json';
import './products.css';

const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = productData.map(item => (
    <Product product={item} />
  ))

  return (
    <div style={{margin: '2rem'}}>
      <Carousel responsive={responsive}>
          {products}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
