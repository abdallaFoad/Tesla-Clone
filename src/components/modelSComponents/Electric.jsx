import "../../style/modelS/Electric.scss";

const Electric = ({ title, para }) => {
  return (
    <div className="electric">
      <div className="container">
        <div className="title">{title}</div>
        <div className="para">{para}</div>
      </div>
    </div>
  );
};

export default Electric;
