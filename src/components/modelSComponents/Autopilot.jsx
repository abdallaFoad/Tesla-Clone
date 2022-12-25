import React from "react";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import Electric from "./Electric";
import "../../style/modelS/AutoPilot.scss";

const Autopilot = () => {
  return (
    <div className="autoPilot">
      <div className="pilot-content">
        <div className="box">
          <div className="pilot-title">360°</div>
          <div className="pilot-para">
            Rear, side and forward-facing cameras provide maximum visibility
          </div>
        </div>
        <div className="box">
          <div className="pilot-title">250m</div>
          <div className="pilot-para">
            Powerful visual processing at up to 250 meters of range
          </div>
        </div>
        <div className="box">
          <div className="pilot-title">{<MdOutlineSupervisedUserCircle />}</div>
          <div className="pilot-para">
            Tesla Vision detects nearby cars, helps prevent potential collisions
            and assists with parking
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autopilot;
