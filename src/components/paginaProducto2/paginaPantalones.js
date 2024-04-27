import React from 'react';
import "../../styleSheets/menuProductosPantalones.css";

const products = [
  { id: 1, name: 'Pantalon 1', image: 'https://static.zara.net/assets/public/8459/35c0/d7c24a50927c/64ae095dac5a/05575400436-ult/05575400436-ult.jpg?ts=1710506819345&w=253' },
  { id: 2, name: 'Pantalon 2', image: 'https://static.zara.net/assets/public/49bc/7272/0e2e4647ac93/a1a1dd6e0e9a/05585402400-ult1/05585402400-ult1.jpg?ts=1708510167228&w=253' },
  { id: 3, name: 'Pantalon 3',  image: 'https://static.zara.net/assets/public/2066/7504/53b24a8bafc2/042f589a3455/04060411800-ult1/04060411800-ult1.jpg?ts=1705668046313&w=253' },
  { id: 4, name: 'Pantalon 4',  image: 'https://static.zara.net/assets/public/745f/0d3b/dc234c21adb8/50bb3c1ed19e/01538377800-ult1/01538377800-ult1.jpg?ts=1698398661073&w=253' },
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
