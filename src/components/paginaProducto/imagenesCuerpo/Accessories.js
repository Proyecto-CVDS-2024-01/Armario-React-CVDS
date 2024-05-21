import React, { useState, useEffect } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../../../styleSheets/ProductPage.css';

const items = [
  {
    key: 4,
    name: 'BOWLING NYLON',
    src: 'https://static.zara.net/assets/public/1018/da36/8da34bcba1e4/fa0b2965bde4/13100320400-e1/13100320400-e1.jpg?ts=1704904458287&w=275',
    type: ['formal', 'accessory']
  },
  {
    key: 1,
    name: 'BOWLING NYLON',
    src: 'https://static.zara.net/assets/public/da87/73bd/1d104624b654/04fae8b40180/03920449700-e2/03920449700-e2.jpg?ts=1714725551901&w=563',
    type: ['semiformal', 'casual', 'accessory']
  }
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
    <div className='product' data-testid="accessories-1">
      <div className="img">
        <UncontrolledCarousel key={selectedStyle} items={accessoriesItems.map(item => ({
          src: item.src,
          altText: item.name,
          key: item.key
        }))} />
      </div>
      <h2>Accessories</h2>
    </div>
  );
}

export default AccessoriesSlider;
