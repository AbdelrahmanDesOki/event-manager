import React from 'react';
import './App.css';
import Navbar from './components/Navbar/indexNav';
import{BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <Router>
      <Navbar/>
      <Carousel/>
      <Footer/>
    </Router>
  );
}

export default App;
