import React from 'react'
import '../../../styleSheets/ProductPage.css'
import jacket from  '../../../images/productPage/jacket.png'
const Jackets = () => {
  return (
    <div className='clothing-box-2' data-testid="jackets-1">
      <h1>Jackets</h1>
      <img className="img" src ={jacket} alt="imagen de una chaqueta"/>    
    </div>
  )
}

export default Jackets