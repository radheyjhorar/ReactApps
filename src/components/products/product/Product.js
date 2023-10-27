import React from 'react';

const Product = () => (
  <div>
    <h3>{Product.name}</h3>
    <p>{Product.description}</p>
    <p>${Product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default Product;
