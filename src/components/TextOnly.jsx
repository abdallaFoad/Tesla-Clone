import React from "react";
import "../style/TextOnly.scss";
import Fade from "react-reveal/Fade";

const TextOnly = ({ title, desc, mLeft = true }) => {
  return (
    <div
      className="text-only"
      style={{ marginLeft: mLeft === true ? "5rem" : "0" }}
    >
      <Fade bottom>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
      </Fade>
    </div>
  );
};

export default TextOnly;
