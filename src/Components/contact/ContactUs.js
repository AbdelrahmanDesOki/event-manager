import React from 'react';
// import Footer from '../Components/Footer/Footer';
import ContactForm from './ContactForm';
import './contactStyle.css'

const ContactUs = () => {
    return (
      <div className='myApp' style={{backgroundColor: "#040d14"}}>
      <div className='container'>
        <h1 className='text-center' style={{color:"#15cdfc"}}>CONTACT OUR TEAM</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
