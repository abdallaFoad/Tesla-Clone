import React from "react";

import Performance from "../modelSComponents/Performance";
import RangeHorizontal from "./RangeHorizontal";
import "../../style/model3/PlaidAndRange.scss";

const PlaidAndRange = ({
  redCar,
  title1,
  title2,
  title3,
  desc1,
  desc2,
  desc3,
  nameRange,
  titleRange,
  paraRange,
  content,
  padding = true
}) => {
  return (
    <div className="plaid-and-range" style={{padding: padding === true ? '3rem 0 0' : '0'}}>
      <Performance
        img={redCar}
        title1={title1}
        title2={title2}
        title3={title3}
        desc1={desc1}
        desc2={desc2}
        desc3={desc3}
        content={content}
      />
      <RangeHorizontal
        name={nameRange}
        title={titleRange}
        para={paraRange}
      />
    </div>
  );
};

export default PlaidAndRange;
