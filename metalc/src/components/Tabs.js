import Nav from 'react-bootstrap/Nav';
import React from 'react';
import ReactDOM  from 'react-dom';
import { useEffect } from "react";
import '../app/servicios/page';
import Image from 'next/image';
import desm from "../img/desmantelar.jpg";
import recol from "../img/recoleccion.jpg";
import dest from "../img/destruccion.jpg";

function Tabs(){

    const boton1 =( 
    <div className=' h-[90%] flex m-[2%]'>
        <div className='w-[40%] '>
            <Image src={desm} className='w-[100%] h-[100%] object-cover' alt='imagen'/>
        </div>
        <div className='w-[60%] p-[2%] '>
            <h1 className='font-bmw text-2xl'>Desmantelamiento de naves industriales</h1>
            <div className='font-bmw pt-[50px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
    );

    const boton2 =( 
        <div className=' h-[90%] flex m-[2%]'>
            <div className='w-[40%] '>
                <Image src={recol} className='w-[100%] h-[100%] object-cover' alt='imagen'/>
            </div>
            <div className='w-[60%] p-[2%] '>
                <h1 className='font-bmw text-2xl'>Recoleccion de residuos industriales no peligrosos</h1>
                <div className='font-bmw pt-[50px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
     );

     const boton3 =( 
        <div className=' h-[90%] flex m-[2%]'>
            <div className='w-[40%] '>
                <Image src={dest} className='w-[100%] h-[100%] object-cover' alt='imagen' />
            </div>
            <div className='w-[60%] p-[2%] '>
                <h1 className='font-bmw text-2xl'>Destruccion fiscal</h1>
                <div className='font-bmw pt-[50px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
     );

    function btn1 () {
        const color1 = document.getElementById('btn1');
        const color2 = document.getElementById('btn2');
        const color3 = document.getElementById('btn3');
        const mostrar = document.getElementById('qmh');
        color1.style.backgroundColor='#8bba1f';
        color2.style.backgroundColor='#FFFF';
        color3.style.backgroundColor='#FFFF';
        color1.style.color='white';
        color2.style.color='#0a58ca';
        color3.style.color='#0a58ca';
        ReactDOM.render(boton1, mostrar);
    }

    function btn2 () {
        const color1 = document.getElementById('btn1');
        const color2 = document.getElementById('btn2');
        const color3 = document.getElementById('btn3');
        const mostrar = document.getElementById('qmh');
        color1.style.backgroundColor='#FFFF';
        color2.style.backgroundColor='#8bba1f';
        color3.style.backgroundColor='#FFFF';
        color1.style.color='#0a58ca';
        color2.style.color='white';
        color3.style.color='#0a58ca';
        ReactDOM.render(boton2, mostrar);
    }

    function btn3 () {
        const color1 = document.getElementById('btn1');
        const color2 = document.getElementById('btn2');
        const color3 = document.getElementById('btn3');
        const mostrar = document.getElementById('qmh');
        color1.style.backgroundColor='#FFFF';
        color2.style.backgroundColor='#FFFF';
        color3.style.backgroundColor='#8bba1f';
        color1.style.color='#0a58ca';
        color2.style.color='#0a58ca';
        color3.style.color='white';
        ReactDOM.render(boton3, mostrar);
    }



    return(
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link id='btn1' onClick={btn1} eventKey="link 1">Demantelamiento de naves industriales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='btn2' onClick={btn2} eventKey="link 1">Recoleccion de residuos industriales no peligrosos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='btn3' onClick={btn3} eventKey="link 1">Destruccion fiscal</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}

export default Tabs;