import React, { BrowserRouter, Routes, Route } from "react";
import "./App.css";
import Header from "./containers/HeaderContainer";
import Home from "./containers/HomeContainer";
import Counter from "./redux/Count";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <Header /> */}
      {/* <Routes> */}
      {/* <Route/> */}
      {/* <Home /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
      {/* </BrowserRouter> */}

      <Box py={6}>
        <div>
          <button onClick={e => dispatch({type : "INCREMENT"})}>INCREMENT</button>
        </div>
        <Counter />
        <div>
          <button onClick={e => dispatch({type : "DECREMENT"})}>DECREMENT</button>
        </div>
      </Box>

    </div>
  );
}

export default App;