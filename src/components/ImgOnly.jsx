import React from "react";
import "../style/ImgOnly.scss";
import Fade from "react-reveal/Fade";

const ImgOnly = ({ img }) => {
  return (
    <div className="img">
      <Fade bottom>
        <img src={img} alt="img" />
      </Fade>
    </div>
  );
};

export default ImgOnly;
