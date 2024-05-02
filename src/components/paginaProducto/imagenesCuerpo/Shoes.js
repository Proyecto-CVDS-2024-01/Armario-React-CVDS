import React from 'react'
import shoes from '../../../images/productPage/shoes.png'
import '../../../styleSheets/ProductPage.css'
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src: shoes,
    altText: 'shoes 1',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'shoes 2',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'shoes 3',
    caption: '',
    key: 3,
  },
];

export function AccessoriesSlider() {
  return (
    <div className='clothing-box-2' data-testid="shoes-1">
      <h1>Shoes</h1>
      <div className="img">
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;