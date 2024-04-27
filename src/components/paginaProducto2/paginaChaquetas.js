import React from 'react';
import "../../styleSheets/menuProductos.css";

const products = [
  { id: 1, name: 'Chaqueta 1', image: 'https://static.zara.net/assets/public/d91d/4a54/23a64fcca76d/3695d1ee0795/08574500732-a1/08574500732-a1.jpg?ts=1713195155611&w=352' },
  { id: 2, name: 'Chaqueta 2',  image: 'https://static.zara.net/assets/public/4c52/4fd3/788746f4b137/f4934aea8e79/08574500806-a1/08574500806-a1.jpg?ts=1713195216779&w=352' },
  { id: 3, name: 'Chaqueta 3',image: 'https://static.zara.net/assets/public/4982/164d/203c420a944f/c2c4045c756d/03286412825-a1/03286412825-a1.jpg?ts=1713519710102&w=362' },
  { id: 4, name: 'Chaqueta 4',  image: 'https://static.zara.net/assets/public/3f6d/7c48/229d4d6897ce/7f6178faa024/08574456614-a1/08574456614-a1.jpg?ts=1710849251955&w=352' },
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
