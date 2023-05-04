"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Foto from '../img/cobre.jpg';
import reciclar from '../img/reciclar.jpg'
import reutilizar from '../img/reutilizar.jpg'
import reducir from '../img/reducir.jpg'
import recuperar from '../img/recuperar.jpg'
function RespSocial() {
  return (
    
    <div className="h-[90%] block px-[50px] mt-5 mb-10">
        <div className='font-bmw  text-[40px] flex justify-center h-[20%]'>RESPONSABILIDAD SOCIAL</div>
        
        <div className='flex justify-between h-[80%] '>
            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Image variant="top" src={reciclar}  className='h-[180px] object-cover'/> 
            <Card.Body>
                <Card.Title className='mb-4'>Reciclar</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                En Metalce nos comprometemos a darle el tratamiento correcto a los materiales para reducir la emisión de gases y sustancias tóxicas.
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" href='#materialReciclado' size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Materiales que reciclamos</Button>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Image variant="top" src={reutilizar}  className='h-[180px] object-cover'/> 
            <Card.Body>
                <Card.Title className='mb-4'>Reutilizar</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                En Metalc nos comprometemos a canalizar correctamente tus materiales para poder darles una segunda vida y asi favorecer al medio ambiente. 
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" href='/cotizador' size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Cotizador de material</Button>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Image variant="top" src={reducir}  className='h-[180px] object-cover'/> 
            <Card.Body>
                <Card.Title className='mb-4' >Reducir</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                Dentro de las instalaciones de Metalc, ayudamos a la reducción de los servicios básicos con los que cuenta la empresa.(Luz, Agua, Gas).
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" href='/mapa' size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Contáctanos</Button>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Image variant="top" src={recuperar}  className='h-[180px] object-cover'/> 
            <Card.Body>
                <Card.Title className='mb-4' >Recuperar</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                En nuestra empresa, estamos comprometidos con reducir nuestra huella ambiental y promover prácticas sostenibles en cada aspecto de nuestro negocio. 
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" href='/servicios' size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Servicios</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
        
    </div>
  );
}

export default RespSocial;

