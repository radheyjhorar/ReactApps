import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from './slices/cartSlice';
import productReducer from "./slices/productSlice";


export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  }
});