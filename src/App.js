import React, { BrowserRouter, Routes, Route } from "react";
import "./App.css";
import Header from "./containers/HeaderContainer";
import Home from "./containers/HomeContainer";
import Cart from "./components/cart/Cart";
import ProductCategories from "./components/productCategories/ProductCategories";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Header />
      {/* <Routes> */}
      {/* <Route/> */}
      {/* <Home /> */}
      <ProductCategories />
      <Cart />
      {/* </Routes> */}
      {/* <Footer /> */}
      {/* </BrowserRouter> */}
      {/* <ToDo /> */}
    </div>
  );
}

export default App;