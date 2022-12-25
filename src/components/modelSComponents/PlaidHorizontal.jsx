import React from "react";
import "../../style/modelS/PlaidHorizontal.scss";
import Fade from "react-reveal/Fade";
import ButtonFirstCon from "../ButtonFirstCon";
import CustomOrderBottom from "../CustomOrderBottom";

const PlaidHorizontal = ({ name, title, color = true, para }) => {
  return (
    <div className="plaid-horizon">
      <div className="horizon-container">
        <div className="top">
          <Fade bottom>
            <span>{name}</span>
            <div className="title">{title}</div>
            <div className="paragraph">{para}</div>
          </Fade>
        </div>
        <div className="my-btns">
          <Fade bottom>
            <ButtonFirstCon content="Buy Now" color={color} />
            <CustomOrderBottom content="Custom Order" color={color} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PlaidHorizontal;
