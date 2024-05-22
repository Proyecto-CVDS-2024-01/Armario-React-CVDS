import React, { useState, useEffect } from 'react';
import '../../../styleSheets/ProductPage.css';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    key: 1,
    name: 'CAMISA RAYAS BOLSILLOS',
    src: 'https://static.zara.net/assets/public/af0d/bc12/68cc4ac381d3/8585ed90e346/04424175400-e1/04424175400-e1.jpg?ts=1710954805512&w=275',
    type: ['semiformal', 'formal', 'camisa']
  },
  {
    key: 2,
    name: 'Camisa 1',
    src: 'https://static.zara.net/assets/public/0b02/6670/78ea44a48f82/13d7e58e2ada/07545425250-a1/07545425250-a1.jpg?ts=1713972230787&w=352',
    type: ['casual', 'camisa']
  },
  {
    key: 3,
    name: 'Camisa 2',
    src: 'https://static.zara.net/assets/public/25fa/6f51/0f8e4c99b09a/d03e3579a738/07545373403-a2/07545373403-a2.jpg?ts=1713361382981&w=352',
    type: ['casual', 'camisa']
  },
  {
    key: 4,
    name: 'Camisa 3',
    src: 'https://static.zara.net/assets/public/482f/955e/9be141839cc4/5f3aae22458e/07545424250-a1/07545424250-a1.jpg?ts=1713972232790&w=352',
    type: ['formal', 'camisa']
  },
  {
    key: 5,
    name: 'Camisa 4',
    src: 'https://static.zara.net/assets/public/08b4/bd2c/76c74b9fb8d3/5724cdca65c5/03991403712-a1/03991403712-a1.jpg?ts=1711024246741&w=587',
    type: ['semiformal', 'camisa']
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
    <div className='product' data-testid="tshirts-1">
      <div className="img">
        <UncontrolledCarousel key={selectedStyle} items={accessoriesItems.map(item => ({
          src: item.src,
          altText: item.name,
          key: item.key
        }))} />
      </div>
      <h2>T-shirts</h2>
    </div>
  );
}

export default AccessoriesSlider;
