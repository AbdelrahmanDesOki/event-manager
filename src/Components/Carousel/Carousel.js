import React from 'react'
import './carouselStyle.css'

const Carousel = () => {
  return (
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="hover"> {/* data-bs-pause="false" for nonstop sliding */}
      <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
      <div class="carousel-inner">
        <div class="carousel-item active"
        style={{backgroundImage:"url(./city_photos/budapest_photo2.jpg"}}>
          <div class="event-container">
              <h1>Photo+NameOfEvent(Link)</h1>
              <p>Date,Location of the event</p>
              <p>Countdown till the beginning of the event</p>
          </div>
        </div>
        <div class="carousel-item"
        style={{backgroundImage:"url(./city_photos/munich_photo.jpg)"}}>
          <div class="event-container">
              <h1>Photo+NameOfEvent(Link)</h1>
              <p>Date,Location of the event</p>
              <p>Countdown till the beginning of the event</p>
          </div>
        </div>
        <div class="carousel-item"
        style={{backgroundImage:"url(./city_photos/paris_photo.jpg)"}}>
          <div class="event-container">
              <h1>Photo+NameOfEvent(Link)</h1>
              <p>Date,Location of the event</p>
              <p>Countdown till the beginning of the event</p>
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
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
    </div>
  )
}

export default Carousel;


