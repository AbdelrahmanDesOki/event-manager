import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom'
import Carousel from './Carousel/Carousel';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';

const MainPage = () => {
    return (
    <div>
      <Carousel/>
      <HomePage/>
      <Footer/>
    </div>
 
  );
}

export default MainPage;
