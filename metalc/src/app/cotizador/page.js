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

  useEffect(() => {
    // Obtener la altura de otro-div
    const navbar = document.getElementById("div_navbar");
    const a = document.getElementsByClassName("h1_navbar");
    for (var i = 0; i < a.length; i++) a[i].classList.add("text-stone-950");
    const pos = document.getElementById("div_navbar");
    const letra = document.getElementById("text");
    const logo = document.getElementById("logoNav");
    const icon = document.getElementById("iconos");
    // Actualizar el estado con el valor de padding-top
    pos.classList.remove("absolute");
    pos.classList.add("relative");
    navbar.classList.add("bg-[#083552]");
    letra.classList.add("text-white");
  }, []);

  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-40 flex justify-center align-middle items-center text-white text-5xl w-[100%]">
        {" "}
        COTIZADOR
      </div>
    <div className="pt-46 w-5/6 mx-auto mb-5 ">
      
      <div className="mt-5">
        <h1 className="text-4xl">¿QUE DESEAS VENDER?</h1>
        <p>
          RELLENA EL FORMULARIO PARA RECIBIR UNA COTIZACION POR CORREO O
          TELÉFONO
        </p>
        <p className="mt-5">
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
