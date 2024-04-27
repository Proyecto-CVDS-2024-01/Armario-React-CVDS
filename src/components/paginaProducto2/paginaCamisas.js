import React from 'react';
import "../../styleSheets/menuProductos.css";

const products = [
  { id: 1, name: 'Camisa 1', price: '$49.99', image: 'https://static.zara.net/assets/public/0b02/6670/78ea44a48f82/13d7e58e2ada/07545425250-a1/07545425250-a1.jpg?ts=1713972230787&w=352' },
  { id: 2, name: 'Camisa 2', price: '$59.99', image: 'https://static.zara.net/assets/public/25fa/6f51/0f8e4c99b09a/d03e3579a738/07545373403-a2/07545373403-a2.jpg?ts=1713361382981&w=352' },
  { id: 3, name: 'Camisa 3', price: '$39.99', image: 'https://static.zara.net/assets/public/482f/955e/9be141839cc4/5f3aae22458e/07545424250-a1/07545424250-a1.jpg?ts=1713972232790&w=352' },
  { id: 4, name: 'Camisa 4', price: '$29.99', image: 'https://static.zara.net/assets/public/08b4/bd2c/76c74b9fb8d3/5724cdca65c5/03991403712-a1/03991403712-a1.jpg?ts=1711024246741&w=587' },
];

function App() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img className="product-image" src={product.image} alt={product.name} />
          <div className="product-name">{product.name}</div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
