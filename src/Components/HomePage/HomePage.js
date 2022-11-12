import React from 'react'
import News from './News'
import EventList from './EventList'


const HomePage = () => {
  return (
    <React.Fragment>
    <div class="container">
       <div class="row">
    <div class="col-sm-8">
      <News/>
    </div>
    <div class="col-sm-4">
     <EventList/>
    </div>
  </div>
</div>
  </React.Fragment>
  )
}

export default HomePage