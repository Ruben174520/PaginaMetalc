"use client";
import React from "react";
import { useEffect } from "react";
import { useMaterials } from "@/context/MaterialContext";
import { useState } from "react";
import TarjetaCotizacion from "@/components/TarjetaCotizacion";
import { Form } from "react-bootstrap";
import Formulario from "@/components/Formulario";
import '../page.css'

export function page() {
  const { materials } = useMaterials();
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const setearDatos = (material) => {
    setMaterialSeleccionado(material);
  };


  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-white text-5xl pb-10">
        {" "}
        <h1 className="border-b-4 border-white mb-5">COTIZADOR</h1>
      </div>
    <div className="w-5/6 mx-auto mb-5 ">
      <div className="mt-6">
        <h1 className="text-4xl text-center border-b-8 pt-5 pb-5 border-[#083552]">¿QUE DESEAS VENDER?</h1>
        <p className="my-5">
          RELLENA EL FORMULARIO PARA RECIBIR UNA COTIZACION POR CORREO O
          TELÉFONO
        </p>
        <p className="mt-7">
          *SELECCIONA UN MATERIAL PARA AUTORELLENAR EL FORMULARIO
        </p>
      </div>
      <div className="flex border-t-2 m-1">
        <div className="w-3/5 flex flex-wrap p-6 justify-start">
          {materials.map((material) => (
            <TarjetaCotizacion material={material} key={material.id} setearDatos={setearDatos}/>
          ))}
        </div>
        <div className=" w-2/3 my-6">
          <Formulario materialSelecto={materialSeleccionado}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
