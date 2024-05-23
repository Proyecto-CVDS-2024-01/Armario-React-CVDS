import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styleSheets/Perfil.css';
import { UncontrolledCarousel } from 'reactstrap';

export function AccessoriesSlider({ selectedStyle }) {
  const [accessoriesItems, setAccessoriesItems] = useState([]);
  const authToken = sessionStorage.getItem('authToken');

  useEffect(() => {
    if (authToken) {
      // Fetch user's clothes from the backend
      axios.get('http://basecvds.azurewebsites.net/user/client/UsuarioPrendas', {
        headers: {
          authToken: authToken
        }
      })
      .then(response => {
        // Filter for items that are 'chaqueta'
        const userItems = response.data.filter(item => item.type.includes('chaqueta'));
        setAccessoriesItems(userItems);
      })
      .catch(error => {
        console.error('Error fetching user clothes:', error);
      });
    } else {
      // Use default items if no user is authenticated
      const defaultItems = [
        {
          key: 1,
          name: 'CHAQUETA ROJA',
          src: 'https://static.zara.net/assets/public/0104/e156/740f49cf80e7/706cc377c701/08574456614-e1/08574456614-e1.jpg?ts=1710779479317&w=275',
          type: ['chaqueta']
        },
        {
          key: 2,
          name: 'BUSO NEGRO',
          src: 'https://static.zara.net/assets/public/48d0/421f/5f2242cab576/1fdbc4d48a5e/06518505401-e1/06518505401-e1.jpg?ts=1712218824552&w=275',
          type: ['chaqueta']
        },
        { 
          key: 3, 
          name: 'Chaqueta 1', 
          src: 'https://static.zara.net/assets/public/d91d/4a54/23a64fcca76d/3695d1ee0795/08574500732-a1/08574500732-a1.jpg?ts=1713195155611&w=352',
          type: ['chaqueta'] 
        },
        { 
          key: 4, 
          name: 'Chaqueta 2',  
          src: 'https://static.zara.net/assets/public/4c52/4fd3/788746f4b137/f4934aea8e79/08574500806-a1/08574500806-a1.jpg?ts=1713195216779&w=352',
          type: ['chaqueta'] 
        },
        { 
          key: 5, 
          name: 'Chaqueta 3',
          src: 'https://static.zara.net/assets/public/4982/164d/203c420a944f/c2c4045c756d/03286412825-a1/03286412825-a1.jpg?ts=1713519710102&w=362',
          type: ['chaqueta'] 
        },
      ];
      setAccessoriesItems(defaultItems);
    }
  }, [authToken]);

  useEffect(() => {
    if (selectedStyle && accessoriesItems.length > 0) {
      setAccessoriesItems(prevItems => prevItems.filter(item => item.type.includes(selectedStyle)));
    }
  }, [selectedStyle, accessoriesItems]);

  return (
    <div className='product' data-testid="jackets-1">
      <div className="img">
        <UncontrolledCarousel key={selectedStyle} items={accessoriesItems.map(item => ({
          src: authToken ? `data:image/png;base64, ${item.imageUrlBase64}` : item.src,
          altText: item.name,
          key: item.id || item.key
        }))} />
      </div>
      <h2>Jackets</h2>
    </div>
  );
}

export default AccessoriesSlider;
