import React from "react";
import { Container } from "react-bootstrap";
import "../style/FirstContent.scss";
import ButtonFirstCon from "./ButtonFirstCon";
import DataFirstContent from "./DataFirstContent";
import Fade from "react-reveal/Fade";

const FirstContent = ({
  background,
  title,
  desc,
  num1,
  num2,
  num3,
  num4,
  info1,
  info2,
  info3,
  info4,
  color = true,
  dataFour = true
}) => {
  return (
    <div className={`content ${background}`}>
      <Container className="con">
        <Fade bottom>
          <div className="title" style={{color: color === false && '#eee'}}>
            <div className="tit">{title}</div>
            <div className="desc">{desc}</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="under-content">
            <DataFirstContent num={num1} info={info1} />
            <DataFirstContent num={num2} info={info2} />
            <DataFirstContent num={num3} info={info3} />
            {
              dataFour === true && <DataFirstContent num={num4} info={info4} />
            }
            <ButtonFirstCon content="Buy Now" color={false}/>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default FirstContent;
