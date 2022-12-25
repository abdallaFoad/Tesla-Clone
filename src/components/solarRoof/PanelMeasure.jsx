import React from "react";
import "../../style/SolarRoof/PanelMeasure.scss";

import ButtonFirstCon from "../ButtonFirstCon";
import CustomOrderBottom from "../CustomOrderBottom";
import Footer from "../Footer";

const PanelMeasure = ({
  panelImg,
  title,
  name1,
  name1B,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  info1,
  info2,
  info3,
  info3B,
  info4,
  info4B,
  info5,
  info6,
  info7
}) => {
  return (
    <div className="panel-measure">
      <div className="panel-container">
        <div className="top-content">
          <div className="img">
            <img src={panelImg} alt="PanelMeasure" />
          </div>
          <div className="info">
            <div className="title">
              Solar {title} <span>Specs</span>
            </div>
            <div className="all-data">
              <div className="data">
                <ul>
                  <li>
                    <div className="name">
                      {name1}
                      <br /> {name1B}
                    </div>
                    <div className="data-info">{ info1}</div>
                  </li>
                  <li>
                    <div className="name">{name2}</div>
                    <div className="data-info">{ info2}</div>
                  </li>
                  <li>
                    <div className="name">{name3}</div>
                    <div className="data-info">
                      {info3}
                      <br /> {info3B}
                    </div>
                  </li>
                  <li>
                    <div className="name">{name4}</div>
                    <div className="data-info">
                      {info4}
                      <br /> {info4B}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="data">
                <ul>
                  <li>
                    <div className="name">{name5}</div>
                    <div className="data-info">{ info5}</div>
                  </li>
                  <li>
                    <div className="name">{name6}</div>
                    <div className="data-info">{ info6}</div>
                  </li>
                  <li>
                    <div className="name">{name7}</div>
                    <div className="data-info">{ info7}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <h2>Transform Your Roof</h2>
          <p>
            Order now or chat with an Energy
            <br /> Advisor for more information
          </p>
          <ButtonFirstCon content="Order Now" color={false} />
          <CustomOrderBottom content="Chat with Energy Advisor" color={false} />
          <a href="/">Get Updates</a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PanelMeasure;
