import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/id/22/1200/400',
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: '',
    caption: '',
    key: 3,
  },
];

export function SliderBox() {
  return (
    <div className='ImagesHeader'>
  	<UncontrolledCarousel items={items}/>
    </div>
  );
}

export default SliderBox;
