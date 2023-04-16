import React from "react";
import Image from "next/image";
export const ListaMateriales = ({ material, mostrarGaleriaHandler }) => {
  return (
    <div className='flex flex-wrap border-2 w-1/5 m-1 p-4 rounded-md cursor-pointer border-white shadow-emerald-600 shadow-md hover:border-pink-900 hover:shadow-pink-900 hover:shadow-md'
    onClick={() => mostrarGaleriaHandler(material)}>
      <div className='flex items-center justify-center w-full'>
          <Image src={material.icono} width={50} height={50} className='' alt=''/>
      </div>
      <div className='flex items-center  justify-center font-bold w-full'>
          <h1>{material.nombre}</h1>
      </div>
    </div>
  );
};
