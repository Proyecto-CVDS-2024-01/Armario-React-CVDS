import React, { useState, useEffect } from 'react';
import '../../../styleSheets/ProductPage.css';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    key: 3,
    name: 'ZAPATO PIEL DESTALONADO CLARK...',
    src: 'https://static.zara.net/assets/public/8e1e/846e/27d148e8a88c/3eebc91ec26b/12504320102-e1/12504320102-e1.jpg?ts=1705579404777&w=275',
    type: ['semiformal', 'formal', 'zapato']
  },
  { key: 1, name: 'Zapato 1', src: 'https://static.zara.net/assets/public/c180/7c5b/f2d04d66a3b4/ecc4d80c45b7/12721320107-ult3/12721320107-ult3.jpg?ts=1709806147816&w=282', type: ['casual', 'zapato'] },
  { key: 2, name: 'zapato 2', src: 'https://static.zara.net/assets/public/20a8/a8e6/0f5d4797ba80/1680f102bf79/12721321202-ult3/12721321202-ult3.jpg?ts=1712303117421&w=282', type: ['casual', 'zapato'] },
  { key: 5, name: 'Zapato 3', src: 'https://static.zara.net/assets/public/71bd/52be/c13a40e38a69/42e5ca7a5c27/12721320707-ult3/12721320707-ult3.jpg?ts=1709045018183&w=282', type: ['casual', 'zapato'] },
  { key: 4, name: 'Zapato 4', src: 'https://static.zara.net/assets/public/f5b3/7f6e/7d354d249307/42c93cc9c409/12721321400-ult3/12721321400-ult3.jpg?ts=1713451304227&w=282', type: ['casual', 'zapato'] },
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
    <div className='product' data-testid="pants-1">
      <div className="img">
        <UncontrolledCarousel 
          key={selectedStyle} 
          items={accessoriesItems.map(item => ({
            src: item.src,
            altText: item.name,
            key: item.key
          }))} 
        />
      </div>
      <h2>Shoes</h2>
    </div>
  );
}

export default AccessoriesSlider;
