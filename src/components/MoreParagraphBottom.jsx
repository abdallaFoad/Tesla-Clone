import React from "react";
import '../style/MoreParagraphBottom.scss';

const MoreParagraphBottom = ({ content, conLink }) => {
  return (
    <div className="more-para">
      <p>{content} <a href="/">{conLink}</a></p>
    </div>
  );
};

export default MoreParagraphBottom;
