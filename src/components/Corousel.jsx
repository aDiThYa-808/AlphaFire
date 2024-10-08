import React, { useEffect } from 'react';
import img_one from '../assets/corousel_images/01.jpg';
import img_two from '../assets/corousel_images/004.jpg';
import img_three from '../assets/corousel_images/003.jpg';
import './Corousel.css';

function Corousel() {
  useEffect(() => {
    // Get the carousel element
    const carouselElement = document.getElementById('carouselExampleCaptions');
    const bootstrapCarousel = new window.bootstrap.Carousel(carouselElement, {
      interval: false, // Disable automatic Bootstrap interval
    });

    // Manually control the slide change every 2 seconds
    const interval = setInterval(() => {
      bootstrapCarousel.next(); // Move to the next slide with smooth animation
    }, 2500);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id='home' className="carousel-container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img_one} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption c-caption">
                <h5 className="c-text">Your safety is our concern</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img_two} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption c-caption">
                <h5 className="c-text">Delivering top-tier fire safety solutions for over a decade.</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img_three} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption c-caption">
                <h5 className="c-text">Delivering fire safety expertise across the nation.</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Corousel;
