import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import img1 from '../img/garraSlider.jpg';
import img2 from '../img/plastico.jpg';
import img3 from '../img/trabajdorCarrusel.jpg';

function ImageCarousel() {
  return (
    <Carousel className='h-[300px] md:h-[100vh]' controls={false} indicators={false}>
      <Carousel.Item className='h-[300px] md:h-[100vh]'>
        <Image
          className=" d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption >
          {/*<h1 className='text-white'>PRUEBA DE TEXTO 1</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-[300px] md:h-[100vh]'>
        <Image
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/*<h1 className='text-white'>PRUEBA DE TEXTO 1</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-[300px] md:h-[100vh]'>
        <Image
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/*<h1 className='text-white'>PRUEBA DE TEXTO 1</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;