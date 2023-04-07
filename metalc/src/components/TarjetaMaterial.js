import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
export const TarjetaMaterial = ({material}) =>{
    return (
        <div className='border-l-green-500 border w-1/3  mx-0 m-auto p-5'>
            <div className='flex items-center justify-center'>
                <Image src={material.icono} width={50} height={50} className=''/>
            </div>
            <div className='flex items-center justify-center m-3'>
                <h1>{material.nombre}</h1>
            </div>
            <div className='bg-emerald-500 p-3 flex items-center justify-center'>
                <button className='bg-emerald-500 block'>
                    DETALLES
                </button>
            </div>
        </div>
    )
}