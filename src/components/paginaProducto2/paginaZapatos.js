import React from 'react';
import "../../styleSheets/menuZapatos.css";
import Top from '../paginaPrincipal/Top';
const products = [
  { id: 1, name: 'Zapato 1',  image: 'https://static.zara.net/assets/public/c180/7c5b/f2d04d66a3b4/ecc4d80c45b7/12721320107-ult3/12721320107-ult3.jpg?ts=1709806147816&w=282' },
  { id: 2, name: 'zapato 2',  image: 'https://static.zara.net/assets/public/20a8/a8e6/0f5d4797ba80/1680f102bf79/12721321202-ult3/12721321202-ult3.jpg?ts=1712303117421&w=282' },
  { id: 3, name: 'Zapato 3',  image: 'https://static.zara.net/assets/public/71bd/52be/c13a40e38a69/42e5ca7a5c27/12721320707-ult3/12721320707-ult3.jpg?ts=1709045018183&w=282' },
  { id: 4, name: 'Zapato 4',  image: 'https://static.zara.net/assets/public/f5b3/7f6e/7d354d249307/42c93cc9c409/12721321400-ult3/12721321400-ult3.jpg?ts=1713451304227&w=282' },
];

function Zapatos() {
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

function PaginaZapatos() {
  return (
    <div className="PaginaZapatos">
      <Top />
      <Zapatos />
    </div>
  );
}
export default PaginaZapatos;
