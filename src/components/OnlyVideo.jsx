import React from "react";
import '../style/OnlyVideo.scss';

const OnlyVideo = ({video}) => {
  return (
    <div className='video-content'>
      <video className="vid"  src={video} loop autoPlay muted ></video>
    </div>
  );
};

export default OnlyVideo;
