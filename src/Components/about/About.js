import React from "react";

function About() {
  return (
    <div className='container'>
    <h1 className='text-center' style={{color:"#15cdfc", marginBottom: "30px",marginTop:"80px"}}>This site has been created by </h1>
    <p className='text-center' style={{color:"white", marginBottom:"200px",fontSize:"20px"}}>Babii Alexabdr - ZYHB18 <br></br>
        Abdelrahman Desoki - DOHDZF <br></br>
        Ali Salman - Y5J8ZK <br></br>
        Rahma Fares - D8RPQD 
    </p>
    <div
        style={{ backgroundColor: "#040d14"}}
      >
        <div>
          <img
            src="./city_photos/bme_logo_kicsi_color.png"
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
    </div>
    );
}

export default About;
