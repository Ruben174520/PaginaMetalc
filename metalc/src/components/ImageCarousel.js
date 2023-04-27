import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import img1 from '../img/foto1.png'

function ImageCarousel() {
  return (
    <Carousel className='h-[100vh]' controls={false} indicators={false}>
      <Carousel.Item className='h-[100vh]'>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/deposito-chatarra-metal-maquina-elevacion-hidraulica-accesorio-garra-reciclaje-chatarra_308072-1477.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption >
          {/*<h1 className='text-white'>PRUEBA DE TEXTO 1</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-[100vh]'>
        <img
          className="d-block w-100"
          src="https://metalc.com.mx/wp-content/uploads/2022/12/heavy-excavator-for-digging-on-day-light-1024x683.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/*<h1 className='text-white'>PRUEBA DE TEXTO 1</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-[100vh]'>
        <img
          className="d-block w-100"
          src="https://www.arcedianorecuperaciones.com/wp-content/uploads/2021/02/reciclaje-chatarra.jpg"
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