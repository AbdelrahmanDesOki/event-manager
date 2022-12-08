import React from 'react'
import './carouselStyle.css'
import '../Timer/timerStyles.css'
import { Link } from 'react-router-dom'
import CountdownTimer from '../Timer/CountdownTimer'

const Carousel = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div id="myCarousel" class="carousel slide" data-bs-pause="false" data-bs-ride="carousel"> {/* data-bs-pause="hover" for stopping on mouseOn*/}
      <div class="carousel-indicators" style={{backgroundColor:"unset"}}>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
      </button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2">
      </button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3">
      </button>
    </div>
      <div class="carousel-inner">
        <div class="carousel-item active"
        style={{backgroundImage:"url(./city_photos/budapest_photo2.jpg"}}>
          <div class="event-container">
              <div class="eventImageContainer">
                <img src="./budapest-2018-hero.jpg" alt="event_photo" class="eventImageStyle"></img>
              </div>
              <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                  <Link to="/support" class="bold"> 
                    <h3>ATP Challenger</h3>
                  </Link>
                  <div>
                    <h6 style={{ textAlign: "center"}}>Event starts in</h6>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                  </div>
              </div>
          </div>
        </div>
        <div class="carousel-item"
        style={{backgroundImage:"url(./city_photos/munich_photo.jpg)"}}>
          <div class="event-container">
              <div class="eventImageContainer">
                <img src="./budapest-2018-hero.jpg" alt="event_photo" class="eventImageStyle"></img>
              </div>
              <div style={{display: "flex", flexDirection: "row"}}>
                  <Link to="#" class="bold"> 
                    <h3>ATP Challenger Tour - Hungarian Challenger Open 2022</h3>
                  </Link>
                  <div>
                    <h6 style={{ textAlign: "center"}}>Event starts in</h6>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                  </div>
              </div>
          </div>
        </div>
        <div class="carousel-item"
        style={{backgroundImage:"url(./city_photos/paris_photo.jpg)"}}>
          <div class="event-container">
              <div class="eventImageContainer">
                <img src="./budapest-2018-hero.jpg" alt="event_photo" class="eventImageStyle"></img>
              </div>
              <div style={{display: "flex", flexDirection: "row"}}>
                  <Link to="#" class="bold"> 
                    <h3>ATP Challenger Tour - Hungarian Challenger Open 2022</h3>
                  </Link>
                  <div>
                    <h6 style={{ textAlign: "center"}}>Event starts in</h6>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                  </div>
              </div>
          </div>
        </div>
      </div>
      
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;