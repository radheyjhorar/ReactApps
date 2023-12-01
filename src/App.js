import React, { BrowserRouter, Routes, Route } from "react";
import "./App.css";
import Header from "./containers/HeaderContainer";
import Home from "./containers/HomeContainer";
import Cart from "./components/cart/Cart";
import ProductCategories from "./components/productCategories/ProductCategories";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/productSlice";
import { Button } from "@mui/material";

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('State: ', state.product.data);

  return (
    <div className="App">
      <Button variant="contained" onClick={() => {dispatch(fetchProducts())}}>Product</Button>
      {/* <BrowserRouter> */}
      {/* <Header /> */}
      {/* <Routes> */}
      {/* <Route/> */}
      {/* <Home /> */}
      <ProductCategories />
      {/* <Cart /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
      {/* <ToDo /> */}
    </div>
  );
}

export default App;