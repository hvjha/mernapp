import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import SignUp from './screen/SignUp';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/createuser" element={<SignUp/>}/>
    </Routes>
     </BrowserRouter>
  )
}

export default App


