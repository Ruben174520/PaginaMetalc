import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const items = [
  {
    src: 'https://metalcast.com.mx/wp-content/uploads/2020/12/Aceros-inoxidables_Mesa-de-trabajo-1-1024x768.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://www.worldenergytrade.com/images/stories/news/metales/aluminio/13069/la-crisis-de-energia-mundial-presiona-el-suministro-de-aluminio-13069.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://dekmake.b-cdn.net/wp-content/uploads/Bronze-Vs-Copper-Copper-4.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const carouselServices = () => <UncontrolledCarousel items={items} />;

export default carouselServices;