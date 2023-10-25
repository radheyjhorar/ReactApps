import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addToWishlist = () => {
    if (newItem.trim() !== '') {
      setWishlistItems([...wishlistItems, newItem]);
      setNewItem('');
    }
  };

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlistItems.filter((item, i) => i !== index);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div>
      <h2>My Wishlist</h2>
      <div>
        <input
          type="text"
          placeholder="Add an item to your wishlist"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addToWishlist}>Add</button>
      </div>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromWishlist(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
