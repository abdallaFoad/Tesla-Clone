import React from "react";
import Fade from 'react-reveal/Fade';
import '../../style/model3/RangeHorizontal.scss';
import PlusBottom from "../PlusBottom";
import ButtonFirstCon from "../ButtonFirstCon";

const RangeHorizontal = ({ name, title, para, color = true }) => {
  return (
    <div className="range-horizon">
      <div className="range-container">
        <Fade bottom>
          <div className="range-top">
            <span>{name}</span>
            <div className="title">{title}</div>
            <div className="paragraph">{para}</div>
          </div>
          <div className="range-btns">
            <PlusBottom content="Learn More" />
            <ButtonFirstCon content="Buy Now" color={color} />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default RangeHorizontal;
