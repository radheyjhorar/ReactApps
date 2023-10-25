import React from 'react';

const Product = ({ product }) => (
  <div>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default Product;
