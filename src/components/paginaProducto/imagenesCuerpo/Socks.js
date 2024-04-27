import React from 'react'
import '../../../styleSheets/ProductPage.css'
import socks from '../../../images/productPage/socks.webp'
const Socks = () => {
  return (
    <div className='clothing-box-1' data-testid="socks-1">
    <h1>Socks</h1>
    <img className="img" src ={socks} alt="imagen de medias"/>    
  </div>
  )
}

export default Socks