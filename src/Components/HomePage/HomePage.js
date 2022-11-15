import React from 'react'
import News from './News'
import EventList from './EventList'
import './homepageStyle.css'

const HomePage = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor: "#1c1c1c" }}>
        <div class="container" style={{paddingTop:"4rem", paddingBottom:"4rem", backgroundColor:"#1c1c1c"}}>
          <div class="row">
            <div class="col-sm-8">
              <News/>
            </div>
            <div class="col-sm-4">
              <EventList/>
            </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default HomePage