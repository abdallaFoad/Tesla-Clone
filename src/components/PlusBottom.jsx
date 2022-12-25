import React from "react";
import { HiPlus } from "react-icons/hi";
import '../style/BlusButtom.scss'

const PlusBottom = ({ content }) => {
  return (
    <div className="plus-btn">
        <div className="icon">{<HiPlus />}</div> 
        <div className="con">{content}</div>
    </div>
  );
};

export default PlusBottom;
