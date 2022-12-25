import "../../style/modelS/Future.scss";
import Fade from "react-reveal/Fade";

const Future = ({ content }) => {
  return (
    <div className="future">
      <Fade bottom>
        <div>{content}</div>
      </Fade>
    </div>
  );
};

export default Future;
