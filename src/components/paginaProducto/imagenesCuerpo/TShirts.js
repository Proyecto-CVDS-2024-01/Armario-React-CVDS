import React from 'react'
import '../../../styleSheets/ProductPage.css'
import tshirt from '../../../images/productPage/tshirt.png'
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src: tshirt,
    altText: 'tshirt 1',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'tshirt 2',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'tshirt 3',
    caption: '',
    key: 3,
  },
];

export function AccessoriesSlider() {
  return (
    <div className='clothing-box-2' data-testid="tshirts-1">
      <h1>Tshirts</h1>
      <div className="img">
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;