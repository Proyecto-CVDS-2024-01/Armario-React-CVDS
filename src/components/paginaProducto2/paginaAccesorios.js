import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styleSheets/menuProductos.css";
import Top from '../paginaPrincipal/Top';

const Accesorios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://basecvds.azurewebsites.net/user/prendas')
      .then(response => {
        const filteredProducts = response.data.filter(product => product.tipo === 'ACCESORIOS');
        console.log('Products:', filteredProducts);
        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleButtonClick = (product) => {
    axios.get(`https://basecvds.azurewebsites.net/user/client/token`, {
      headers: {
        authToken: sessionStorage.getItem('authToken')
      }
    })
      .then(response => {
        // Perform POST request with the image data and the retrieved data
        const imageData = response.data;
        console.log('Image data:', imageData);
        console.log('Product:', product);
        axios.post('https://basecvds.azurewebsites.net/user/client/UsuarioPrenda', { prenda: product, user: imageData }, {
          headers: {
            authToken: sessionStorage.getItem('authToken')
          }
        })
          .then(response => {
            console.log('POST request successful:', response);
          })
          .catch(error => {
            console.error('Error performing POST request:', error);
          });
      })
      .catch(error => {
        console.error('Error performing GET request:', error);
      });
  };

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={product.id} className="product-card">

            <img className="product-image" src={`data:image/png;base64, ${product.imageUrlBase64}`} alt={product.name} />
            <div className="product-number">{product.tipo} {index + 1}</div>
            <div className="product-name">{product.categoria}</div>
            <button className="product-button" onClick={() => handleButtonClick(product)}>AÑADIR</button>
        </div>
      ))}
    </div>
  );
}

function PaginaAccesorios() {
  return (
    <div className="PaginaAccesorios" data-testid="PaginaAccesorios-1">
      <Top />
      <Accesorios />
    </div>
  );
}

export default PaginaAccesorios;
