import React, { useState, useEffect } from 'react';
import '../../../styleSheets/Perfil.css';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    key: 1,
    name: 'CHAQUETA ROJA',
    src: 'https://static.zara.net/assets/public/0104/e156/740f49cf80e7/706cc377c701/08574456614-e1/08574456614-e1.jpg?ts=1710779479317&w=275',
    type: ['semiformal', 'pantalon']
  },
  {
    key: 2,
    name: 'BUSO NEGRO',
    src: 'https://static.zara.net/assets/public/48d0/421f/5f2242cab576/1fdbc4d48a5e/06518505401-e1/06518505401-e1.jpg?ts=1712218824552&w=275',
    type: ['formal', 'chaqueta']
  },
  { 
    key: 3, 
    name: 'Chaqueta 1', 
    src: 'https://static.zara.net/assets/public/d91d/4a54/23a64fcca76d/3695d1ee0795/08574500732-a1/08574500732-a1.jpg?ts=1713195155611&w=352',
    type: ['formal','semiformal', 'chaqueta'] 
  },
  { 
    key: 4, 
    name: 'Chaqueta 2',  
    src: 'https://static.zara.net/assets/public/4c52/4fd3/788746f4b137/f4934aea8e79/08574500806-a1/08574500806-a1.jpg?ts=1713195216779&w=352',
    type: ['formal','semiformal', 'chaqueta'] 
  },
  { 
    key: 5, 
    name: 'Chaqueta 3',
    src: 'https://static.zara.net/assets/public/4982/164d/203c420a944f/c2c4045c756d/03286412825-a1/03286412825-a1.jpg?ts=1713519710102&w=362',
    type: ['casual','semiformal',  'chaqueta'] 
  },
];

export function AccessoriesSlider({ selectedStyle }) {
  const [accessoriesItems, setAccessoriesItems] = useState(items);

  useEffect(() => {
    if (selectedStyle) {
      setAccessoriesItems(items.filter(item => item.type.includes(selectedStyle)));
    } else {
      setAccessoriesItems(items);
    }
  }, [selectedStyle]);

  return (
    <div className='product' data-testid="jackets-1">
      <div className="img">
        <UncontrolledCarousel key={selectedStyle} items={accessoriesItems.map(item => ({
          src: item.src,
          altText: item.name,
          key: item.key
        }))} />
      </div>
      <h2>Jackets</h2>
    </div>
  );
}

export default AccessoriesSlider;