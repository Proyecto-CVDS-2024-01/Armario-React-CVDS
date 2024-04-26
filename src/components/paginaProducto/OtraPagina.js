import React from 'react';
import '../../styleSheets/ProductPage.css';
import Top from '../paginaProducto/Top';
import About from './Product';

  const ProductPage = () => {


  return (
    <div className="ProductPage">
        <div className='Header'>
            <Top />
         </div>
        <div className='BodyPage'>
            <About />
        </div>
    </div>
  );
};

export default ProductPage;