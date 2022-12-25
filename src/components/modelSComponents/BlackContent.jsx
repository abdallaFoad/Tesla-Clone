import React from "react";
import Plaid from "./Plaid";
import "../../style/modelS/BlackContent.scss";
import Grid from "../Grid";


const BlackContent = ({
  titlePlaid,
  namePlaid,
  paraPlaid,
  titleGrid1,
  titleGrid2,
  titleGrid3,
  descGrid1,
  descGrid2,
  descGrid3,
  img1,
  img2,
  img3,
}) => {
  return (
    <div className="blackContent">
      <Plaid
        name={namePlaid}
        title={titlePlaid}
        para={paraPlaid}
        color={false}
      />
      <Grid
        title1={titleGrid1}
        title2={titleGrid2}
        title3={titleGrid3}
        desc1={descGrid1}
        desc2={descGrid2}
        desc3={descGrid3}
        img1={img1}
        img2={img2}
        img3={img3}
        video={false}
      />
    </div>
  );
};

export default BlackContent;
