import React from 'react'
import '../../../styleSheets/ProductPage.css'
import tshirt from '../../../images/productPage/tshirt.png'
const TShirts = () => {
  return (
    <div className='clothing-box-2' data-testid="tshirt-1">
      <h1>T-shirts</h1>
      <img className="img" src ={tshirt} alt="imagen de sneakers"/>    
    </div>
  )
}

export default TShirts