import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../../style/modelY/CarouselTwoContent.scss';

const CarouselTwoContent = ({ img1, img2, desc1, desc2 }) => {
  return (
    <div className="carousel-two-content">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="imgOne" />
            <Carousel.Caption>
              <p>{desc1}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="imgTwo" />
            <Carousel.Caption>
              <p>{desc2}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselTwoContent;
