import React from 'react'

 function Footer(){
    return(
      <div> 
        <div className="custom_footer" style={{backgroundColor: "#1c1c1c", width: "100%"}}> 
          <div className="logo"> 
              <img src="./city_photos/bme_logo_kicsi_color.png" alt="BME-Logo" 
              style={{width: "200px"}}/>
           </div>
          <h5 className='textLogo'style={{paddingTop: "25px", paddingBottom: "25px", alignContent:"center" }}>Training project laboratory 2022/23</h5>
        </div>
      </div>
    );
};

export default Footer;
