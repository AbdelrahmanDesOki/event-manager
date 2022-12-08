import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {Routes, Route } from "react-router-dom"
import Auth from "./Components/Login/Auth"
import Navbar from "./Components/Navbar/indexNav";
import axios from 'axios';
import MainPage from "./Components/MainPage";
import ContactUs from "./Components/contact/ContactUs";
import About from "./Components/about/About";

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
      <>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/support" element={<ContactUs/> } />
          <Route path="/about" element={<About/> } />
        </Routes>
      </>
  )
}

export default App


