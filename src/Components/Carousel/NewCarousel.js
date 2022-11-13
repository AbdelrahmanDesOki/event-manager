import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carouselStyle.css'

function NewCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height: "39rem"}}>
        <img
          className="d-block w-100"
          src="./city_photos/budapest_photo2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div class="event-container" >
              <h1>Photo+NameOfEvent(Link)</h1>
              <p>Date,Location of the event</p>
              <p>Countdown till the beginning of the event</p>
          </div>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./city_photos/munich_photo.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./city_photos/paris_photo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NewCarousel;