import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Login/Auth"
import Navbar from "./Components/Navbar/indexNav";
import DetailsPage from "./Components/DetailsPage/DetailsPage"
import Pay from "./Components/paymentPage/paymentUi"
import ContactUs from "./contact/ContactUs"
import axios from 'axios';
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
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/elem" element={<DetailsPage />} />
        <Route path="/support" element ={<ContactUs/>}/>

      </Routes>

    </>
  )
}

export default App


