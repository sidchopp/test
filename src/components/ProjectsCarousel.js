import React, { useState } from 'react';
import { Image, Carousel } from 'react-bootstrap';
import backgroundImage from '../background.jpg'

function ProjectsCarousel() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image style={{ display: "block", height: "500px" }}
          className="d-block w-100"
          src={backgroundImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Project 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectsCarousel;