import React from 'react'
import '../../../styleSheets/ProductPage.css'
import pants from  '../../../images/productPage/joggerPants.png'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: pants,
    altText: 'pants 1',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'pants 2',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'pants 3',
    caption: '',
    key: 3,
  },
];

export function AccessoriesSlider() {
  return (
    <div className='clothing-box-1' data-testid="pants-1">
      <h1>Pants</h1>
      <div className="img">
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;