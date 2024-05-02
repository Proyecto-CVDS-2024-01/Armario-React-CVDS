import React from 'react'
import '../../../styleSheets/ProductPage.css'
import jacket from  '../../../images/productPage/jacket.png'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: jacket,
    altText: 'jacket 1',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'jacket 2',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'jacket 3',
    caption: '',
    key: 3,
  },
];

export function AccessoriesSlider() {
  return (
    <div className='clothing-box-2' data-testid="jackets-1">
      <h1>Jackets</h1>
      <div className="img">
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;

