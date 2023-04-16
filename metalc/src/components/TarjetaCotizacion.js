import React from 'react'
import Image from 'next/image'
const TarjetaCotizacion = ({material})=> {
  return (
    <div className=' w-1/4 p-5 border-2 rounded-lg m-1 align-middle hover:bg-green-100 flex flex-wrap justify-center' >
        <div className='flex items-center justify-center w-full'>
            <Image src={material.icono} width={50} height={50} className='' alt=''/>
        </div>
        <div className='flex items-center  justify-center font-bold m-auto text-center text-md w-full'>
            <h3>{material.nombre}</h3>
        </div>
    </div>
  )
}

export default TarjetaCotizacion