import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

const items = [
  {
    src: 'https://picsum.photos/id/22/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/342/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/349/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

export function SliderBox() {
  return (
  	<UncontrolledCarousel items={items}/>
  );
}

export default SliderBox;
