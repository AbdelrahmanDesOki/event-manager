import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from './Components/Login/Auth'
import Mock from "./Components/Mock"
import Navbar from './Components/Navbar/indexNav'
import MainPage from './Components/MainPage'
import UserForm from './Components/UserProfile/User'
import AddEvent from './Components/AddEvent/AddEvent'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/add" element={<AddEvent />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App