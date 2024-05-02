import React from 'react';
import Accessories from './imagenesCuerpo/Accessories';
import Jackets from './imagenesCuerpo/Jackets';
import Pants from './imagenesCuerpo/Pants';
import Shoes from './imagenesCuerpo/Shoes';
import TShirts from './imagenesCuerpo/TShirts';
import Socks from './imagenesCuerpo/Socks';
import Conjuntos1 from './imagenesCuerpo/Conjuntos/Conjuntos1';
import Conjuntos2 from './imagenesCuerpo/Conjuntos/Conjuntos2';
import Clean from './imagenesCuerpo/Clean';
import '../../styleSheets/ProductPage.css'

export function Product() {
  return (
    <div data-testid="product-1">
      <h1 className="page-title">¿Con qué estilo quieres destacar hoy?</h1>
      <div className="clothing-container"> 
        <Clean />
        <Accessories />
        <Jackets />
        <Clean />
        <Conjuntos1/>
        <TShirts />
        <Pants />
        <Conjuntos2/>
        <Clean />
        <Socks />
        <Shoes />
        <Clean />
      </div>   
    </div>
  );
};  
export default Product;
