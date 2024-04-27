import React from 'react'
import '../../../styleSheets/ProductPage.css'
import watch from  '../../../images/productPage/watch.png'
const Accessories = () => {
  return (
    <div className='clothing-box-1'>
      <h1>Accessories</h1>
      <img className="img" src ={watch} alt="imagen de accesorio"/>    
    </div>
  )
}

export default Accessories