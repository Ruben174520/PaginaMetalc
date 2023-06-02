import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import estilo from './Bootstrap.module.css';
import Image from 'next/image';
import { lazy } from 'react';
import aluminio from '../icon/imagesSlide/aluminio1.png'
import bronce from '../icon/imagesSlide/bronce3.jpg'
import cobre from '../icon/imagesSlide/cobre2.jpg'
import chatarra from '../icon/imagesSlide/chatarra2.png'
import rebaba from '../icon/imagesSlide/rebabas1.jpg'
import metalesR from '../icon/imagesSlide/raros3.jpg'
import acerosIn from '../icon/imagesSlide/inoxidables4.png'
//cambios
function Slider() {
  return (
    <Carousel variant="dark" style={{height: '400px'}} >
      <Carousel.Item  className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={aluminio}
          alt="Compra Aluminio"
          style={{ height: '400px', width: '500px',borderRadius: '10px' }}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Aluminio</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image      
          src={bronce}
          alt="Compra bronce"
          style={{  height: '400px', width: '500px', borderRadius: '10px'}}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Bronce</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={cobre}
          alt="Compra cobre"
          style={{  height: '400px', width: '500px',borderRadius: '10px'}}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Cobre</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={chatarra}          
          alt="Compra chatarra"
          style={{  height: '400px', width: '500px', borderRadius: '10px'}}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Chatarra</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={rebaba}
          alt="Compra rebabas"
          style={{  height: '400px', width: '500px',borderRadius: '10px'}}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Rebabas</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={metalesR}
          alt="Compra metales raros"
          style={{  height: '400px', width: '500px', borderRadius: '10px'}}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Metales raros</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={acerosIn}
          alt="Compra aceros inoxidables"
          style={{  height: '400px', width: '500px', borderRadius: '10px'}}
          loading='lazy'
          decoding='async'
        />
        <Carousel.Caption style={{backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', marginBottom: '3%'}}>
            <h5 className='text-white font-bmw font-bold text-xl'>Aceros Inoxidables</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;