import React from "react";
import Performance from "../modelSComponents/Performance";
import "../../style/modelX/PlaidAndRangeRightOrLift.scss";
// import PlaidHorizontal from "../modelSComponents/PlaidHorizontal";
import PlaidHorizontal from "../modelSComponents/PlaidHorizontal";

const PlaidAndRangeRightOrLeft = ({
  imgPosition = true,
  img,
  title1,
  title2,
  title3,
  desc1,
  desc2,
  desc3,
  rangeName,
  rangeTitle,
  rangePara,
}) => {
  return (
    <div className="PlaidAndRangeRightOrLeft">
      {imgPosition === true ? (
        <div className={imgPosition === true ? "imgRight" : "imgLeft"}>
          <PlaidHorizontal
            name={rangeName}
            title={rangeTitle}
            para={rangePara}
          />
          <Performance
            img={img}
            title1={title1}
            title2={title2}
            title3={title3}
            desc1={desc1}
            desc2={desc2}
            desc3={desc3}
          />
        </div>
      ) : (
        <div className={imgPosition === true ? "imgRight" : "imgLeft"}>
          <Performance
            img={img}
            title1={title1}
            title2={title2}
            title3={title3}
            desc1={desc1}
            desc2={desc2}
            desc3={desc3}
          />
          <PlaidHorizontal
            name={rangeName}
            title={rangeTitle}
            para={rangePara}
          />
        </div>
      )}
    </div>
  );
};

export default PlaidAndRangeRightOrLeft;
