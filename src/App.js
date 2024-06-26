import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screen/MyOrder";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<SignUp />} />
          <Route path="/myOrder" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
