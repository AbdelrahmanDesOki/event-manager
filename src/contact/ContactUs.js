import React from 'react';
import ContactForm from './ContactForm';
import './contactStyle.css'

const ContactUs = () => {
    return (
      <div className='myApp' style={{backgroundColor: "#040d14"}}>
      <div className='container'>
        <h1 className='text-center' style={{color:"#15cdfc", marginBottom: "30px"}}>CONTACT OUR TEAM</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
