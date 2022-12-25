import "../../style/modelS/Features.scss";
import Fade from "react-reveal/Fade";

const Features = ({ title, para }) => {
  return (
    <div className="features">
      <div className="feat-container">
        <Fade top>
          <div className="feat-title">{title}</div>
        </Fade>
        <Fade bottom>
          <div className="feat-para">{para}</div>
        </Fade>
      </div>
    </div>
  );
};

export default Features;
