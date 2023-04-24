"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Foto from '../img/cobre.jpg';
function RespSocial() {
  return (
    <div className="h-[90%] block px-[50px] mt-5 mb-10">
        <div className='font-bmw  text-[40px] flex justify-center h-[20%]'>RESPONSABILIDAD SOCIAL</div>
        <div className='flex justify-between h-[80%] '>
            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Card.Img variant="top" src= {"https://img.freepik.com/vector-premium/simbolo-reciclaje_157999-198.jpg?w=2000"} className='h-[180px] object-cover' />
            <Card.Body>
                <Card.Title className='mb-4'>Reciclar</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                En Metalce nos comprometemos a darle el tratamiento correcto a los materiales para reducir la emisión de gases y sustancias tóxicas.
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Materiales que reciclamos</Button>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Card.Img variant="top" src= {"https://4.bp.blogspot.com/-_oKVRyJ-ojc/V10MM8_1bwI/AAAAAAAABQY/rjz-QDZoOdYtWmgD77OFSvODkF6u-j2iwCK4B/s1600/slide_492310_6795188_free.jpg"} className='h-[180px] object-cover' />
            <Card.Body>
                <Card.Title className='mb-4'>Reutilizar</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                En Metalc nos comprometemos a canalizar correctamente tus materiales para poder darles una segunda vida y asi favorecer al medio ambiente. 
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Cotizador de material</Button>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Card.Img variant="top" src= {"https://static.vecteezy.com/system/resources/previews/016/138/289/non_2x/reducing-co2-emissions-icon-stop-climate-change-sign-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg"} className='h-[180px] object-cover' />
            <Card.Body>
                <Card.Title className='mb-4' >Reducir</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                Dentro de las instalaciones de Metalc, ayudamos a la reducción de los servicios básicos con los que cuenta la empresa.(Luz, Agua, Gas).
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Contáctanos</Button>
                </div>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '100%', transition: 'transform .3s ease-out' }} className='hover:-translate-y-4'>
            <Card.Img variant="top" src= {"https://ecologiaymedioambiente11a.files.wordpress.com/2015/08/ecologia.jpg"} className='h-[180px] object-cover' />
            <Card.Body>
                <Card.Title className='mb-4' >Recuperar</Card.Title>
                <Card.Text className='font-bmw mb-4'>
                Dentro de las instalaciones de Metalc, ayudamos a la reducción de los servicios básicos con los que cuenta la empresa.(Luz, Agua, Gas).
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" size='sm' className='text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f]'>Contáctanos</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
        
    </div>
  );
}

export default RespSocial;

