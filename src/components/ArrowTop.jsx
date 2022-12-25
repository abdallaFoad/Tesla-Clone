import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../style/ArrowTop.scss";

const ArrowTop = () => {
  const [active, setActive] = useState(false);
  const goTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    document.documentElement.scrollTop > 300 ? setActive(true) : setActive(false);
  });

  return (
    <>
      {active === true && (
        <div onClick={goTop} className="arrow-top">
          {<IoIosArrowUp />}
        </div>
      )}
    </>
  );
};

export default ArrowTop;
