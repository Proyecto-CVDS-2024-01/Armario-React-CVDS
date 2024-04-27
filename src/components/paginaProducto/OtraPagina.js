import React from 'react';
import '../../styleSheets/ProductPage.css';
import Top from '../paginaProducto/Top';
import Product from './Product';

  const ProductPage = () => {


  return (
    <div className="ProductPage">
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