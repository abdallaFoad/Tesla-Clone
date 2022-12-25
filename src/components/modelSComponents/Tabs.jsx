import React, { useState } from "react";
import "../../style/modelS/Tabs.scss";
import BadgeData from "../BadgeData";

const Tabs = ({
  count = "two",
  img1,
  img2,
  video1,
  video2,
  video3,
  video4,

  tabTitle1,
  tabTitle2,
  tabTitle3,
  tabTitle4,
  tabTitle5,
  tabTitle6,

  tabPara1,
  tabPara2,
  tabPara3,
  tabPara4,
  tabPara5,
  tabPara6,

  titleBadge1,
  titleBadge2,
  titleBadge3,
  titleBadge4,
  titleBadge5,
  titleBadge6,

  descBadge1,
  descBadge2,
  descBadge3,
  descBadge4,
  descBadge5,
  descBadge6,
}) => {
  const [tabImg, setTabImg] = useState("tab1");
  const [tabVideo, setTabVideo] = useState("tab1");

  return (
    <div className="tabs">
      <div className="img">
        {tabImg === "tab1" && <img src={img1} />}
        {tabImg === "tab2" && <img src={img2}  />}
        {tabVideo === "tab1" && (
          <video src={video1} autoPlay loop width="100%" height="100%"></video>
        )}
        {tabVideo === "tab2" && (
          <video src={video2} autoPlay loop width="100%" height="100%"></video>
        )}
        {tabVideo === "tab3" && (
          <video src={video3} autoPlay loop width="100%" height="100%"></video>
        )}
        {tabVideo === "tab4" && (
          <video src={video4} autoPlay loop width="100%" height="100%"></video>
        )}
      </div>
      <div className="container">
        <div className="all-tabs">
          {count === "two" ? (
            <>
              <div
                className="tab-box"
                onClick={() => setTabImg("tab1")}
                style={{ opacity: tabImg !== "tab1" ? ".5" : "1" }}
              >
                <div className="tab-title">{tabTitle1}</div>
                <div className="tab-para">{tabPara1}</div>
                <div className="boxs">
                  <BadgeData title={titleBadge1} desc={descBadge1} />
                  <BadgeData title={titleBadge2} desc={descBadge2} />
                  <BadgeData title={titleBadge3} desc={descBadge3} />
                </div>
              </div>
              <div
                className="tab-box"
                onClick={() => setTabImg("tab2")}
                style={{ opacity: tabImg !== "tab2" ? ".5" : "1" }}
              >
                <div className="tab-title">{tabTitle2}</div>
                <div className="tab-para">{tabPara2}</div>
                <div className="boxs">
                  <BadgeData title={titleBadge4} desc={descBadge4} />
                  <BadgeData title={titleBadge5} desc={descBadge5} />
                  <BadgeData title={titleBadge6} desc={descBadge6} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="tab-box"
                onClick={() => setTabVideo("tab1")}
                style={{ opacity: tabVideo !== "tab1" ? ".5" : "1" }}
              >
                <div className="tab-title">{tabTitle3}</div>
                <div className="tab-para">{tabPara3}</div>
              </div>

              <div
                className="tab-box"
                onClick={() => setTabVideo("tab2")}
                style={{ opacity: tabVideo !== "tab2" ? ".5" : "1" }}
              >
                <div className="tab-title">{tabTitle4}</div>
                <div className="tab-para">{tabPara4}</div>
              </div>

              <div
                className="tab-box"
                onClick={() => setTabVideo("tab3")}
                style={{ opacity: tabVideo !== "tab3" ? ".5" : "1" }}
              >
                <div className="tab-title">{tabTitle5}</div>
                <div className="tab-para">{tabPara5}</div>
              </div>

              <div
                className="tab-box"
                onClick={() => setTabVideo("tab4")}
                style={{ opacity: tabVideo !== "tab4" ? ".5" : "1" }}
              >
                <div className="tab-title">{tabTitle6}</div>
                <div className="tab-para">{tabPara6}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
