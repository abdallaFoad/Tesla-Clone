import '../style/BadgeData.scss';
import  Fade from 'react-reveal/Fade';

const BadgeData = ({title, desc}) => {
  return (
    <div className="info">
    <Fade bottom>
      <h3 className='title'>{title}</h3>
      <p className='desc'> {desc}</p>
    </Fade>
    </div>
  );
};

export default BadgeData;
