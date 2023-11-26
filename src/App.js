import React, { BrowserRouter, Routes, Route } from "react";
import "./App.css";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import BannerSlider from "./components/banner-slider/BannerSlider";
import Cart from "./components/cart/Cart";
import ProductCategories from "./components/productCategories/ProductCategories";
import Checkout from "./components/check-out/CheckOut";

function App() {
  return (
    <React.Fragment className="myApp">
    {/* <BrowserRouter> */}
            <Header />
            {/* <Routes> */}
                {/* <Route/> */}
                <BannerSlider />
                <ProductCategories />
                <Cart />
                <Checkout/>
            {/* </Routes> */}
            <Footer />
    {/* </BrowserRouter> */}
    </React.Fragment>
  );
}

export default App;