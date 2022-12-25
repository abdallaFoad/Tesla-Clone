import React from "react";
import BadgeData from "../BadgeData";
import "../../style/modelS/Performance.scss";

const Performance = ({
  img,
  content = true,
  title1,
  title2,
  title3,
  desc1,
  desc2,
  desc3,
}) => {
  return (
    <div className="performance" style={{ backgroundImage: `url(${img})` }}>
      {content === true && (
        <div className="allInfo">
          <BadgeData title={title1} desc={desc1} />
          <BadgeData title={title2} desc={desc2} />
          <BadgeData title={title3} desc={desc3} />
        </div>
      )}
    </div>
  );
};

export default Performance;
