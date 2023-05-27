import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import estilo from './Bootstrap.module.css';
import Image from 'next/image';
import { lazy } from 'react';
import metal from '../img/aluminio.jpg'

function Slider() {
  return (
    <Carousel variant="dark" style={{height: '400px'}} >
      <Carousel.Item  className={estilo.itemP} style={{height: '400px'}} interval={4000}>
        <Image
          src={metal}
          alt="First slide"
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
          src="https://www.aceromafe.com/wp-content/uploads/2021/10/composicion-del-bronce.png"
          alt="Second slide"
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
          src="https://i.blogs.es/14d603/cobre1/1366_2000.jpeg"
          alt="Third slide"
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
          src="https://media.istockphoto.com/id/868926884/es/foto/viejas-partes-de-coches-oxidados-oxidados-en-desguace-de-coches-coche-reciclado-piezas-de.jpg?s=612x612&w=0&k=20&c=hyTIObkdAxG-bMxWATlMNcY6F5_cIGdwtpFB-wU5pTU="
          alt="Third slide"
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
          src="https://gtaambiental.com/wp-content/uploads/rebaba-larga-de-acero-1.jpg"
          alt="Third slide"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3awL11Mn9j-DPSo500_AEBKS1IlGyojC2Q&usqp=CAU"
          alt="Third slide"
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
          src="https://acerossuecos.com/wp-content/uploads/2017/04/INOXIDABLES-304L.jpg"
          alt="Third slide"
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