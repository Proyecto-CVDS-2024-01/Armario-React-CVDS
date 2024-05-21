import React from 'react'
import '../../../styleSheets/ProductPage.css'
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    key: 3,
    name: 'MEDIAS FORMAL',
    src: 'https://dynamic.zacdn.com/aOAWeh5dg4HWbK1fh3XF2vBV53Q=/filters:quality(70):format(webp)/https://static-hk.zacdn.com/p/zara-1794-1194386-1.jpg',
    type: ['formal','semiformal', 'zapato']
  }
  
];

export function AccessoriesSlider({selectedStyle}) {
  let accessoriesItems = items;

  if (selectedStyle) {
    accessoriesItems = items.filter(item => item.type.includes(selectedStyle));
  }
  return (
    <div className='product' data-testid="pants-1">
      
      <div className="img">
        <UncontrolledCarousel items={accessoriesItems} />
      </div>
      <h2>Socks</h2>
    </div>
  );
}

export default AccessoriesSlider;