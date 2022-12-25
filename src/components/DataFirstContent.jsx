import '../style/DataFirstContent.scss';

const DataFirstContent = ({ num, info }) => {
  return (
    <div className="data">
      <div className="num">{num} </div>
      <div className="info">{info}</div>
    </div>
  );
};

export default DataFirstContent;
