
import React, { useEffect } from 'react';
import 'src/App.css';
import Navbar from './components/Navbar/indexNav';
import{BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
function App() {

  const  fetchapi = async() => {
    try{
 const res = await axios.get('http://localhost:3000/');
 console.log(res.data);
    }catch(error){
     console.log(error.message);
    }
  };
  useEffect(
    () => {
      fetchapi();
    }, [] 
  );


  return (
    <Router >
      <Navbar/>
    </Router>
  );
}



export default App;
