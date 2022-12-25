import React from "react";
import ButtonFirstCon from "../ButtonFirstCon";
import PlusBottom from "../PlusBottom";
import '../../style/model3/RangeVertical.scss';
import Fade from 'react-reveal/Fade'


const RangeVertical = ({name, title, para, color = true}) => {
  return (
    <div className="range-vertical">
      <div className="vertical-container">
        <Fade bottom>
          <div className="range-top">
            <span>{name}</span>
            <div className="title">{title}</div>
            <div className="range-btns">
            <ButtonFirstCon content="Buy Now" color={color} />
            <PlusBottom content="Learn More" />
          </div>
          </div>
          <div className="con-para">
            <div className="paragraph">{para}</div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default RangeVertical;
