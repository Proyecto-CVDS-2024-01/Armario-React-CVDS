import React from 'react';
import '../../styleSheets/ProductPage.css';
import Top from '../paginaPrincipal/Top';
import Product from './Product';

  const ProductPage = () => {
    
  return (
    <div className="ProductPage" data-testid="otrapagina-1">
        <div className='Header'>
          <Top />
        </div>
        <div className='BodyPage'>
          <Product />
        </div>
    </div>
  );
};

export default ProductPage;