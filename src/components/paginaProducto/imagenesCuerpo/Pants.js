import React from 'react'
import '../../../styleSheets/ProductPage.css'
import pants from  '../../../images/productPage/joggerPants.png'

const Pants = () => {
  return (
    <div className='clothing-box-1' data-testid="pants-1">
      <h1>Pants</h1>
      <img className="img" src ={pants} alt="imagen de joggers"/>    
    </div>  
  )
}

export default Pants