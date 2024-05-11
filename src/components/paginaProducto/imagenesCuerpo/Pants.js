import React from 'react'
import '../../../styleSheets/ProductPage.css'
import pants from  '../../../images/productPage/joggerPants.png'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    key: 3,
    name: 'PANTALÓN BOLSILLOS UTILITY',
    src: 'https://static.zara.net/assets/public/1a04/371c/949c44b9b9b6/9a2ba049bec3/06786400707-e1/06786400707-e1.jpg?ts=1709822870697&w=275',
    type: ['semiformal', 'pantalon']
  },
  {
    id: 2,
    name: 'PANTALON NEGRO',
    src: 'https://static.zara.net/assets/public/5b00/6436/e03c471ba043/858735d7f7b0/04432485401-e1/04432485401-e1.jpg?ts=1710954757003&w=275',
    type: ['formal', 'zapato']
  },

];

export function AccessoriesSlider({selectedStyle}) {
  let accessoriesItems = items;

  if (selectedStyle) {
    accessoriesItems = items.filter(item => item.type.includes(selectedStyle));
  }
  return (
    <div className='clothing-box-1' data-testid="pants-1">
      <h1>Pants</h1>
      <div className="img">
        <UncontrolledCarousel items={accessoriesItems} />
      </div>
    </div>
  );
}

export default AccessoriesSlider;