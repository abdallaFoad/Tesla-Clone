import React from "react";

import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import "../components/Section.css";

const Section = ({
  title,
  para,
  classWrap,
  leftButton,
  rightButton,
  arrowColor = false,
}) => {
  return (
    <Wrap className={classWrap}>
      <Zoom bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{para}</p>
        </ItemText>
      </Zoom>
      <Buttons>
        <Fade bottom>
          <ButtonsGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonsGroup>
          <Arrow>
            {
              <IoIosArrowDown
                style={{ color: arrowColor === false ? "white" : "black" }}
              />
            }
          </Arrow>
        </Fade>
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 2;
`;

const Buttons = styled.div``;

const ButtonsGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 6px;
  height: 40px;
  width: 255px;
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    color: #393c41;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    color: #fff;
    background-color: #393c41;
    opacity: 0.65;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

const Arrow = styled.div`
  height: 40px;
  text-align: center;
  svg {
    /* color:white; */
    font-size: 2rem;
    cursor: pointer;
    animation: arrowDown infinite 1.5s;
  }
`;
export default Section;
