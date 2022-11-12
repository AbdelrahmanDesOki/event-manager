import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Login/Auth"
import Navbar from "./Components/Navbar/indexNav";
import Carousel from "./Components/Carousel/Carousel"
import HomePage from "./Components/HomePage/HomePage";
import axios from 'axios';
import News from "./Components/HomePage/News";
import MainPage from "./Components/MainPage";

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
          <Route path="/" element={<MainPage/>} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App


