import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState } from 'react';
export const TarjetaMaterial = ({material, handleMostrar}) =>{
    
    return (
        <div className=' w-1/3 h-2/3 mx-0 m-auto p-5'>
            <div className='flex items-center justify-center'>
                <Image src={material.icono} width={50} height={50} className=''/>
            </div>
            <div className='flex items-center justify-center m-2 font-bold'>
                <h1>{material.nombre}</h1>
            </div>
            <div className=' p-3 m-2 flex items-center justify-center border-2 border-zinc-500 rounded self-center'>
                <button className='block font-bmw text-gray-600 font-semibold'
                onClick={handleMostrar}
                >
                    DETALLES
                </button>
            </div>
        </div>
    )
}