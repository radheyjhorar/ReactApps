import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;
