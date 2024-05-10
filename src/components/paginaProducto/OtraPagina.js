import React, { useState } from 'react';
import '../../styleSheets/ProductPage.css';
import Top from '../paginaPrincipal/Top';
import Product from './Product';
import Tendencias from './Tendencias';

const ProductPage = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleSelection = (style) => {
    setSelectedStyle(style);
  };

  return (
    <div className="ProductPage" data-testid="otrapagina-1">
      <div className='Header'>
        <Top />
      </div>
      <div className='BodyPage'>
        <Product selectedStyle={selectedStyle} onStyleSelect={handleStyleSelection} />
      </div>
      <Tendencias selectedStyle={selectedStyle} />
    </div>
  );
};

export default ProductPage;
