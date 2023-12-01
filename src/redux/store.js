import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import toDoReducer from './slices/toDoSlice';
import productReducer from "./slices/productSlice";


export const store = configureStore({
  reducer: {
    product: productReducer,
    toDo: toDoReducer,
    cart: cartReducer,
  }
});