import React from "react";
import ImgOnly from "./ImgOnly";
import TextOnly from "./TextOnly";
import "../style/modelS/Grid.scss";
import OnlyVideo from "./OnlyVideo";

const Grid = ({
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  desc1,
  desc2,
  desc3,
  video = true,
  exist = true
}) => {
  return (
    <div className="text-img">
      <div className="container">
        <div className="box">
          <ImgOnly img={img1} />
          <TextOnly title={title1} desc={desc1} mLeft={true} />
        </div>
        <div className="box">
          <TextOnly title={title2} desc={desc2} mLeft={false} />
          <ImgOnly img={img2} />
        </div>
        {exist === true && (
          <div className="box">
            {video === true ? (
              <OnlyVideo video={img3} />
            ) : (
              <ImgOnly img={img3} />
            )}
            <TextOnly title={title3} desc={desc3} mLeft={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Grid;
