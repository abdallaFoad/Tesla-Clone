import React from "react";
import ButtonFirstCon from "../ButtonFirstCon";
import CustomOrderBottom from "../CustomOrderBottom";
import "../../style/modelS/Plaid.scss";
import Fade from "react-reveal/Fade";

const Plaid = ({ name, title, para, color = true,  existBtn = true }) => {
  return (
    <div className="plaid">
      <div className="plaid-container">
        <div className="btns">
          <Fade bottom>
            <span>{name}</span>
            <div className="title">{title}</div>
            <div className="my-btn">
              <ButtonFirstCon content="Buy Now" color={color} />
              {existBtn === true && (
                <CustomOrderBottom content="Custom Order" color={color} />
              )}
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="paragraph">{para}</div>
        </Fade>
      </div>
    </div>
  );
};

export default Plaid;
