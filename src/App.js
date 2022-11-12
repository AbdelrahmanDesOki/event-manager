import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Login/Auth"
import Mainpage from "./Components/Carousel/Carousel"
import Navbar from "./Components/Navbar/indexNav";

import axios from 'axios';

function App() {
  const fetchapi = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api');
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(
    () => {
      fetchapi();
    }, []
  );
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


