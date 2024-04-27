import React from 'react';
import Accessories from './imagenesCuerpo/Accessories';
import Jackets from './imagenesCuerpo/Jackets';
import Pants from './imagenesCuerpo/Pants';
import Shoes from './imagenesCuerpo/Shoes';
import TShirts from './imagenesCuerpo/TShirts';
import Socks from './imagenesCuerpo/Socks';
import '../../styleSheets/ProductPage.css'

export function Product() {
  return (
    <div data-testid="product-1">
      <h1>¿Con qué estilo quieres destacar hoy?</h1>
      <div className="clothing-container"> 
        <Accessories />
        <Jackets />
        <TShirts />
        <Pants />
        <Socks />
        <Shoes />
      </div>      
    </div>
  );
};  
export default Product;
