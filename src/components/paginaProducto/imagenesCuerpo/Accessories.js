import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../../../styleSheets/ProductPage.css';
import watch from '../../../images/productPage/watch.png';

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
    type: ['semiformal','casual', 'accessory']
  }
  
];

export function AccessoriesSlider({ selectedStyle }) {

  let accessoriesItems = items;

  if (selectedStyle) {
    accessoriesItems = items.filter(item => item.type.includes(selectedStyle));
  }

  return (
    <div className='clothing-box-1' data-testid="accessories-1">
      <h1>Accessories</h1>
      <div className="img">
        <UncontrolledCarousel items={accessoriesItems.map(item => ({ src: item.src, altText: item.name, key: item.id }))} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;
