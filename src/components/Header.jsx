import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { RiMenuFoldLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

import logo from "../images/logo.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  const handelSidebar = () => {
    setShow(!show);
  };
  return (
    <Navbar>
      <Container>
        <Content>
          <LogoImg as={NavLink} to="/">
            <img src={logo} alt="logo" />{" "}
          </LogoImg>
          <Menu>
            <p>
              <NavLink to="modelS">Model S</NavLink>
            </p>
            <p>
              <NavLink to="model3">Model 3</NavLink>
            </p>
            <p>
              <NavLink to="ModelX">Model X</NavLink>
            </p>
            <p>
              <NavLink to="ModelY">Model Y</NavLink>
            </p>
            <p>
              <NavLink to="solarRoof">Solar Roof</NavLink>
            </p>
            <p>
              <NavLink to="solarPanels">Solar Panels</NavLink>
            </p>
          </Menu>
          <RightMenu>
            <p>
              <NavLink to="shop">Shop</NavLink>
            </p>
            <p>
              <NavLink to="teslaAccount">Tesla Account</NavLink>
            </p>
            <p>{<RiMenuFoldLine onClick={handelSidebar} />}</p>
          </RightMenu>
          <OffCanvas
            style={{
              right: show === false ? "-1000px" : "0px",
              transition: "all .6s ease-in-out",
            }}
          >
            <div>{<GrClose onClick={handelSidebar} />}</div>
            <ul>
            <li>
              <NavLink to="modelS">Model S</NavLink>
            </li>
            <li>
              <NavLink to="model3">Model 3</NavLink>
            </li>
            <li>
              <NavLink to="ModelX">Model X</NavLink>
            </li>
            <li>
              <NavLink to="ModelY">Model Y</NavLink>
            </li>
            <li>
              <NavLink to="solarRoof">Solar Roof</NavLink>
            </li>
            <li>
              <NavLink to="solarPanels">Solar Panels</NavLink>
            </li>
              <li>
                <a href="/">Existing Inventory</a>
              </li>
              <li>
                <a href="/">Used Inventory</a>
              </li>
              <li>
                <a href="/">Trade-In</a>
              </li>
              <li>
                <a href="/">Test Drive</a>
              </li>
              <li>
                <a href="/">Insurance</a>
              </li>
              <li>
                <a href="/">PowerWall</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </OffCanvas>
        </Content>
      </Container>
    </Navbar>
  );
};

const Navbar = styled.div`
  width: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  position: fixed;
  border-bottom: 1px solid #fcffe7;
  @media (min-width: 320px) and (max-width: 768px) {
    background-color: white;
  }
`;
const Container = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const LogoImg = styled.a``;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 320px) and (max-width: 768px) {
    gap: 0.6rem;
  }
  p {
    margin-bottom: 0;
    a {
      font-size: 1rem;
      color: #fcffe7;
      font-weight: 500;
      text-decoration: none;
      @media (min-width: 320px) and (max-width: 768px) {
        font-size: 0.8rem;
        color: #393c41;
      }
    }
    svg {
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: #fcffe7;
      @media (min-width: 320px) and (max-width: 768px) {
        font-size: 1rem;
        color: #393c41;
      }
      &:hover {
        color: white;
      }
    }
  }
`;

const Menu = styled(RightMenu)`
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
  p {
    a {
      font-size: 1.2rem;
      color: #fcffe7;
      font-weight: 500;
    }
  }
`;

const OffCanvas = styled.div`
  transition: all 9s ease-in-out;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: white;
  height: 100%;
  overflow: auto;
  width: 30%;
  padding: 2rem;
  z-index: 100;
  @media(max-width:768px){
    width:50%
  }
  @media(max-width:538px){
    width:100%
  }

  div {
    width: 100%;
    text-align: right;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      width: 100%;
      padding: 10px 0;
      a {
        color: #393c41;
        font-weight: 500;
      }
    }
  }
`;

export default Header;
