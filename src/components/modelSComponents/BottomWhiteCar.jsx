import React from 'react'
import ButtonFirstCon from '../ButtonFirstCon'
import CustomOrderBottom from '../CustomOrderBottom';
import '../../style/modelS/BottomWhiteCar.scss';


const BottomWhiteCar = ({title, img}) => {
  return (
    <div className='bottom-white-car'>
      <div className="w-car-container">
        <div className="w-car-content">
          <div className="title">{title}</div>
          <div className="w-car-btns">
            <ButtonFirstCon content='Buy Now'/>
            <CustomOrderBottom content='Custom Order'/>
          </div>
        </div>
        <div className="w-car-img">
          <img src={img} alt="white car" />
        </div>
      </div>
    </div>
  )
}

export default BottomWhiteCar