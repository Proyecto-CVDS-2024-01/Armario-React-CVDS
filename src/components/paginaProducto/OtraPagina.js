import React from 'react';
import '../../styleSheets/ProductPage.css';
import { useState } from 'react';

  const ProductPage = () => {
  const [size, setSize] = useState('');
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleAddToCart = () => {
    // Aquí puedes manejar la lógica para añadir el producto al carrito
    console.log(`Producto añadido al carrito con talla ${size}`);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src="https://picsum.photos/id/628/600/600" alt="Producto" />
      </div>
      <div className="product-details">
        <h2 className="product-title">Nombre del Producto</h2>
        <p className="product-price">$Precio</p>
        <p className="product-description">Descripción del producto...</p>
        <div className="product-sizes">
          <p>Tallas disponibles:</p>
          {sizes.map((sizeOption, index) => (
            <button
              key={index}
              className={`size-button ${size === sizeOption ? 'selected' : ''}`}
              onClick={() => handleSizeClick(sizeOption)}
            >
              {sizeOption}
            </button>
          ))}
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
