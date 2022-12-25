import React from "react";
import BadgeData from "../BadgeData";
import "../../style/modelS/VideoAndRange.scss";
import PlaidHorizontal from "./PlaidHorizontal";

const VideoAndRange = ({ videoRange, name, title, para, existData = true }) => {
  return (
    <div className="vAndRange">
      <div className="video">
        <video
          src={videoRange}
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
        ></video>
        {existData === true && (
          <div className="data">
            <BadgeData
              title="405mi"
              desc="Go anywhere with up to 405 miles of estimated range on a single charge"
            />
            <BadgeData
              title="15min"
              desc="Recharge up to 200 miles in 15 minutes at Supercharger locations"
            />
            <BadgeData
              title="40,000+"
              desc="Superchargers placed along popular routes"
            />
          </div>
        )}
      </div>
      <div className="range">
        <PlaidHorizontal
          name={name}
          title={title}
          para={para}
        />
      </div>
    </div>
  );
};

export default VideoAndRange;
