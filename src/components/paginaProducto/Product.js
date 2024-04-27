import React from 'react';
import Accessories from './imagenesCuerpo/Accessories';
import Jackets from './imagenesCuerpo/Jackets';
import Pants from './imagenesCuerpo/Pants';
import Shoes from './imagenesCuerpo/Shoes';
import TShirts from './imagenesCuerpo/TShirts';
import Socks from './imagenesCuerpo/Socks';

export function Product() {
  return (
    <div>
      <div className="clothing-container">
        <Accessories />
        <Jackets />
        <Pants />
        <Shoes />
        <Socks />
        <TShirts />    
      </div>      
    </div>
  );
};  
export default Product;
