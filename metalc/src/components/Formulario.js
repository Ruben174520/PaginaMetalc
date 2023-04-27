import React from 'react'
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react';
const Formulario = () => {
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
        to: 'destinatario@example.com', // dirección de correo electrónico del destinatario
        from: email,
        subject: 'Nuevo mensaje de formulario', // asunto del correo electrónico
        text: message // contenido del correo electrónico
        };
        axios.post('https://api.sendgrid.com/v3/mail/send', data, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
        console.log(response);
        })
        .catch(error => {
        console.log(error);
        });
    };
  return (
    <Form onSubmit={handleSubmit} className='p-6 border-2 border-black'>
        <FormGroup controlId="formBasicEmail" className='flex flex-wrap   '>
            <Form.Label className='w-full'>Nombre:</Form.Label>
            <FormControl type="text" placeholder="Ingresa Nombre" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 w-full p-2'/>
        </FormGroup>
        <FormGroup>
            <Form.Label className='w-full' >Correo:</Form.Label>
            <Form.Control type='email' placeholder='Ingresa Email' className='w-full border-2 p-2' required/>
            <Form.Text className="text-muted text-gray-300">
                Nunca compartiremos tu email con nadie más
            </Form.Text>
        </FormGroup>
        <FormGroup controlId="formBasicEmail" className='flex flex-wrap   '>
            <Form.Label className='w-full'>Teléfono:</Form.Label>
            <FormControl type="phone" placeholder="Ingresa teléfono" className='border-2 w-full p-2' required/>
        </FormGroup>
        <FormGroup controlId="formBasicEmail" className='flex flex-wrap   '>
            <Form.Label className='w-full'>Material:</Form.Label>
            <FormGroup className='w-full flex '>
                <FormControl type="text" placeholder="Tipo" className='border-2 w-full p-2'/>
                <FormControl type="text" placeholder="Cantidad" className='border-2 w-full p-2'/>
            </FormGroup>
            <Form.Text className="text-muted text-gray-300">
                *La cantidad ingresada debe ser en kilos
            </Form.Text>
        </FormGroup>
        <FormGroup>
            <Form.Label className='w-full' >Descripcion:</Form.Label>
            <Form.Control type='textarea' placeholder='Descripcion' className='w-full border-2 p-2' required/>
            <Form.Text className="text-muted text-gray-300">
                *Opcional
            </Form.Text>
        </FormGroup>
        <Button variant="primary" type="submit" className='bg-cyan-600 p-1 rounded-md my-2 w-full hover:bg-cyan-700'>
            Enviar
        </Button>
    </Form>
  )
}

export default Formulario