import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles.css';

const About = () => {
  return (
    <div className="about d-flex flex-column vh-90">
      <div className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center">
        
        <div className="row flex-column-reverse flex-md-row align-items-center">
        
          <div className="col-md-4 col-12 ">
            <div className="about-section">
              <h1>Welcome to Leafy Match!</h1>
              <p>Discover the perfect plant companion with us. Our journey began with a passion for indoor gardening, aiming to make plant care easy and enjoyable for everyone.</p>
            </div>
          </div>
         
          <div className="col-12 col-md-8 image-column">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + '/images/Plantvariety1.jpg'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + '/images/Plantvariety2.jpg'}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
