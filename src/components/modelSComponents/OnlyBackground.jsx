import styled from "styled-components";
import img from "../../images/new-interior.jpg";

const OnlyBackground = () => {
  return (
    <Only
      className="only-background"
      style={{ backgroundImage: `url(${img})` }}
    ></Only>
  );
};

const Only = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default OnlyBackground;
