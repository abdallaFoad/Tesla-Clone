import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../style/modelS/ExperienceCarousel.scss";
import allData from "./DataExperienceCarousel";

const ExperienceCarousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <Carousel>
          {allData.map((data) => {
            return (
              <Carousel.Item key={data.id}>
                <video
                  controls
                  src={data.video}
                  loop
                  autoPlay
                  muted
                  style={{ width: "100%", borderRadius: "50px" }}
                ></video>
                <Carousel.Caption>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
