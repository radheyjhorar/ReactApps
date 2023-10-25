import React from 'react';
import Product from './Product';
import productsData from './products.json';

const ProductList = () => (
  <div>
    {productsData.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
