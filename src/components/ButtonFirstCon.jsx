import React from "react";
import "../style/ButtonFirstCon.scss";
import '../style/Config.scss';

const ButtonFirstCon = ({ content, color = true }) => {
  return (
    <div className="btm">
      <button
        className={color === true ? 'blackColor' : 'whiteColor'}
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonFirstCon;
