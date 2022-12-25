import React from "react";
import ImgOnly from "../ImgOnly";
import PlaidHorizontal from "./PlaidHorizontal";
import '../../style/modelS/SafetyCar.scss';

const SafetyCar = ({name, title, para, img, existBtn}) => {
  return (
    <div className="safety-car">
      <div className="safety-container">
        <PlaidHorizontal
          name={name}
          title={title}
          para={para}
          existBtn={existBtn}
        />
        <ImgOnly img={img}/>
      </div>
    </div>
  );
};

export default SafetyCar;
