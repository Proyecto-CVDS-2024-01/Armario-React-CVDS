import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../../../styleSheets/ProductPage.css';
import watch from '../../../images/productPage/watch.png';
import Tendencias from '../Tendencias';

const items = [
  {
    src: watch,
    altText: 'Watch 1',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'Watch 2',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'Watch 3',
    caption: '',
    key: 3,
  },
];

export function AccessoriesSlider({ selectedStyle }) {
  const formalBowling = selectedStyle === 'formal' ? Tendencias.sections[1].products[3].imageUrl : null;

  const formalItems = formalBowling
    ? [
        {
          src: formalBowling,
          altText: 'Formal Bowling',
          caption: '',
          key: 4,
        },
      ]
    : [];

  const accessoriesItems = [...items, ...formalItems];

  return (
    <div className='clothing-box-1' data-testid="accessories-1">
      <h1>Accessories</h1>
      <div className="img">
        <UncontrolledCarousel items={accessoriesItems} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;
