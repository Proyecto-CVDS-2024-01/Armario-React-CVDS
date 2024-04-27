import React from 'react'
import shoes from '../../../images/productPage/shoes.png'
import '../../../styleSheets/ProductPage.css'

const Shoes = () => {
  return (
    <div className='clothing-box-2' data-testid="shoes-1">
        <h1>Shoes</h1>
        <img className="img" src ={shoes} alt="imagen de sneakers"/>    
    </div>
  )
}

export default Shoes;