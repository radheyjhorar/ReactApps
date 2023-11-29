import React, { BrowserRouter, Routes, Route } from "react";
import "./App.css";
import Header from "./containers/HeaderContainer";
import Home from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
    {/* <BrowserRouter> */}
            <Header />
            {/* <Routes> */}
                {/* <Route/> */}
                <Home />
            {/* </Routes> */}
            {/* <Footer /> */}
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;