import React from 'react'
import '../../../styleSheets/ProductPage.css'
import socks from '../../../images/productPage/socks.webp'
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src: socks,
    altText: 'sock 1',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'sock 2',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'sock 3',
    caption: '',
    key: 3,
  },
];

export function AccessoriesSlider() {
  return (
    <div className='clothing-box-1' data-testid="pants-1">
      <h1>Socks</h1>
      <div className="img">
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;