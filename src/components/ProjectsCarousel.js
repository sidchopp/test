import React, { useState } from 'react';
import { Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../background.jpg'

function ProjectsCarousel() {



  return (
    <Carousel >
      <Carousel.Item>
        <Image style={{ display: "block", height: "500px" }}
          className="d-block w-100"
          src={backgroundImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Project 1</h3>
          <p>Fusion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ display: "block", height: "500px" }}
          className="d-block w-100"
          src={backgroundImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Project 2</h3>
          <p>React App</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ display: "block", height: "500px" }}
          className="d-block w-100"
          src={backgroundImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Project 3</h3>
          <p>
            Coming Soon...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectsCarousel;