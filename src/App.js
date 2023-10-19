import "./App.css";
import Login from "./components/sections/Login"
import React from 'react'
import Home  from "./components/Home";
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>       
  </BrowserRouter>
    
  );
}

export default App;
