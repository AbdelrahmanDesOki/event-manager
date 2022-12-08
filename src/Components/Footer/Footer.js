import React from "react";

function Footer() {
  return (
    < >
      <div
        style={{ backgroundColor: "#1c1c1c"}}
      >
        <div>
          <img
            src="./city_photos/bme_logo.jpeg"
            alt="BME-Logo"
            style={{ 
              width: "200px",
              textAlign: "center",
              display: "block",
              margin:"auto",
             
            }}
          />
        </div>
          <h5
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              textAlign: "center",
              color: "white",
              
            }}
          >
            Training project laboratory 2022/23
          </h5>
      </div>
    </>
  );
}

export default Footer;
