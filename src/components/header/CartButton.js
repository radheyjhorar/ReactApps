import { Badge } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import cartIcon from '../../assets/images/cart.svg';

const CartButton = () => {

  const cart = useSelector((state) => state.cart.cart);
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <>
      <Badge
        badgeContent={getTotalQuantity() || 0}
        color="secondary"
        sx={{ cursor: 'pointer' }}
      >
        <img src={cartIcon} alt="cart.svg" />
      </Badge>
    </>
  )
}

export default CartButton;