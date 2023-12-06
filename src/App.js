import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Cart from "./components/cart/Cart";
import ProductCategories from "./components/productCategories/ProductCategories";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Layout from "./Layout";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "products",
          element: <ProductCategories />,
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  );
}

export default App;