"use client"
import React from 'react'
import { useEffect } from 'react';
const page = ()=> {
    useEffect(() => {
        // Obtener la altura de otro-div
        const navbar = document.getElementById('div_navbar')
        const a = document.getElementsByClassName("h1_navbar");
        for (var i = 0; i < a.length; i++) a[i].classList.add('text-stone-950');
        // Actualizar el estado con el valor de padding-top
        navbar.classList.add('bg-sky-500')
      }, []);
    return (
        <div className='pt-52'>Que deseas vender?</div>
    );
};

export default page