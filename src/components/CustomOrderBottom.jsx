import React from "react";
import "../style/CustomOrderBottom.scss";

const CustomOrderBottom = ({ content, color = true }) => {
  return (
    <div className="btm">
      <button className={color === true ? "customWhite" : "customBlack"}>
        {content}
      </button>
    </div>
  );
};

export default CustomOrderBottom;
