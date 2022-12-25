import React from "react";
import RangeHorizontal from "./RangeHorizontal";
import safetyCar3 from "../../images/model-3-hero.jpg";
import '../../style/model3/SafetyCar3.scss';

const SafetyCar3 = () => {
  return (
    <div className="safety-car3">
      <div className="sef-car-container">
        <div className="img">
          <img src={safetyCar3} alt="safety-car3" />
        </div>
        <RangeHorizontal
          name="Safety"
          title="Built for Safety"
          para="Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.

5-Star Rating
Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory.

Top Safety Pick+
Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories."
        />
      </div>
    </div>
  );
};

export default SafetyCar3;
