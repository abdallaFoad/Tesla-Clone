import React from "react";
import { useState } from "react";
import "../../style/modelS/Spaces.scss";
import blackCar from "../../images/Specs-black.jpg";
import CustomOrderBottom from "../CustomOrderBottom";
import ButtonFirstCon from "../ButtonFirstCon";
import { Outlet, useNavigate } from "react-router-dom";

const Spaces = ({model}) => {
  const [active, setActive] = useState("plaid");
  const navigate = useNavigate();
  return (
    <div className="spaces">
      <div className="spaces-container">
        <div className="img">
          <img src={blackCar} alt="blackCar" />
        </div>
        <div className="space-content">
          <h1>
            <span>{model}</span> Spaces
          </h1>
          <div className="spaces-btns">
            <button
              className={active === "plaid" && "active"}
              onClick={() => setActive("plaid")}
            >
              {model} Plaid
            </button>
            <button
              className={active === "normal" && "active"}
              onClick={() => setActive("normal")}
            >
              {model}
            </button>
          </div>
          {active === "plaid" ? (
            <div className="car-con">
              <ul className="range">
                <li>
                  <h3>Range (EPA est.)</h3>
                  <p>396 mi</p>
                </li>
                <li>
                  <h3>1/4 Mile</h3>
                  <p>9.23@155 mph trap speed</p>
                </li>
                <li>
                  <h3>Peak Power</h3>
                  <p>1,020 hp</p>
                </li>
                <li>
                  <h3>Wheels</h3>
                  <p>19" or 21"</p>
                </li>
                <li>
                  <h3>Cargo</h3>
                  <p>28 cu ft</p>
                </li>
                <li>
                  <h3>Weight</h3>
                  <p>4,766 lbs</p>
                </li>
              </ul>
              <ul className="acc">
                <li>
                  <h3>*Acceleration</h3>
                  <p>
                    1.99 s 0-60 mph{" "}
                    <div className="italic">with rollout subtracted</div>{" "}
                  </p>
                </li>
                <li>
                  <h3>†Top Speed</h3>
                  <p>200 mph</p>
                  <div className="italic">
                    when equipped with paid <br /> hardware upgrades
                  </div>
                </li>
                <li>
                  <h3>Drag Coefficient</h3>
                  <p>0.208 Cd</p>
                </li>
                <li>
                  <h3>Powertrain</h3>
                  <p>1Tri Motor</p>
                </li>
                <li>
                  <h3>Supercharging Max</h3>
                  <p>250 kW</p>
                </li>
              </ul>
            </div>
          ) : (
            <div className="car-con">
              <ul className="range">
                <li>
                  <h3>Range (EPA est.)</h3>
                  <p>405 mi</p>
                </li>
                <li>
                  <h3>Peak Power</h3>
                  <p>670 hp</p>
                </li>
                <li>
                  <h3>Wheels</h3>
                  <p>19" or 21"</p>
                </li>
                <li>
                  <h3>Cargo</h3>
                  <p>28 cu ft</p>
                </li>
                <li>
                  <h3>Acceleration</h3>
                  <p>3.1 s 0-60 mph</p>
                </li>
              </ul>
              <ul className="acc">
                <li>
                  <h3>Top Speed</h3>
                  <p>149 mph</p>
                </li>
                <li>
                  <h3>Weight</h3>
                  <p>4,561 lbs</p>
                </li>
                <li>
                  <h3>Powertrain</h3>
                  <p>Dual Motor</p>
                </li>
                <li>
                  <h3>Powertrain</h3>
                  <p>1Tri Motor</p>
                </li>
                <li>
                  <h3>Supercharging Max</h3>
                  <p>250 kW</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="compare">
        <div className="click">
          <ButtonFirstCon content="Compare" color={false} />
        </div>
      </div>
    </div>
  );
};

export default Spaces;
