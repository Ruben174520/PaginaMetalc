"use client";
import React from "react";
import { useEffect } from "react";
import { useMaterials } from "@/context/MaterialContext";
import { useState } from "react";
import TarjetaCotizacion from "@/components/TarjetaCotizacion";
import { Form } from "react-bootstrap";
import Formulario from "@/components/Formulario";
import "../page.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export function Page() {
  const { materials } = useMaterials();
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // define la fracción del elemento que debe estar visible antes de detectar la intersección
    triggerOnce: true, // hace que la animación se ejecute solo una vez cuando el elemento se encuentra en la vista
  });

  const setearDatos = (material) => {
    setMaterialSeleccionado(material);
  };

  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-2xl pb-12 text-white md:text-5xl md:pb-10">
        {" "}
        <h1 className="border-b-4 border-white mb-5">COTIZADOR</h1>
      </div>
      <div className="w-5/6 mx-auto mb-5 ">
        <div className="mt-6">
          <h1 className="text-xl border-b-8 border-[#083552] text-center p-3 md:text-3xl">
            ¿QUE DESEAS VENDER?
          </h1>
          <p className="my-5 text-sm md:text-lg">
            RELLENA EL FORMULARIO PARA RECIBIR UNA COTIZACION POR CORREO O
            TELÉFONO
          </p>
          <p className="mt-7 text-sm md:text-lg">
            *SELECCIONA UN MATERIAL PARA AUTORELLENAR EL FORMULARIO
          </p>
        </div>
        <div className="flex border-t-2 m-1 flex-wrap md:flex-nowrap">
          <div className="w-[100%] flex flex-wrap p-6 justify-start md:w-3/5">
            {materials.map((material) => (
              <TarjetaCotizacion
                material={material}
                key={material.id}
                setearDatos={setearDatos}
              />
            ))}
          </div>
          <motion.div
            className="w-[100%] my-6  md:w-[60%]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Formulario materialSelecto={materialSeleccionado} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;
