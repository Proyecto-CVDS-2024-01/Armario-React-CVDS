import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styleSheets/Perfil.css'

export function Tendencias({ selectedStyle }) {
  const [prendas, setPrendas] = useState([]);
  const authToken = sessionStorage.getItem('authToken');
  useEffect(() => {
    axios.get('http://basecvds.azurewebsites.net/user/prendas')
      .then(response => {
        setPrendas(response.data);
        console.log('Datos obtenidos:', response.data);
      })
      .catch(error => {
        console.error('Hubo un error obteniendo los datos del post:', error);
      });
  }, []);

  const handleAdd = (prenda) => {
    axios.get('http://basecvds.azurewebsites.net/user/client/token', {
      headers: {
      authToken: authToken
      }
    })
      .then(response => {
        const user = response.data;
        axios.post('http://basecvds.azurewebsites.net/user/client/UsuarioPrenda', {
          prenda: prenda,
          user: user
        }, {
          headers: {
            authToken: authToken
          }
        })
        .then(response => {
          console.log('Post exitoso:', response);
        })
        .catch(error => {
          console.error('Hubo un error en el post:', error);
        });
      })
      .catch(error => {
        console.error('Hubo un error obteniendo el token:', error);
      });
  };

  const Product = ({ product }) => (
    <div className="product">
      
      <img src={`data:image/jpeg;base64,${product.imageUrlBase64}`} alt={product.tipo} />
      <h2>{product.tipo}</h2>
      <p>{product.categoria}</p>
      <button onClick={() => handleAdd(product.prendaId)}>AÑADIR</button>
    </div>
  );

  return (
    <div data-testid="Tendencias-1">
      <div className='Screen'>
        <div className='Outfits'>
          <h1>TRENDING</h1>
          {prendas.map((prenda, index) => (
            <Product key={index} product={prenda} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tendencias;
