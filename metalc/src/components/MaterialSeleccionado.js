import React from "react";
import { useMaterials } from "@/context/MaterialContext";
import Slider from "react-slick";
import { ListaMateriales } from "@/components/ListaMateriales";
import ComponenteGaleria from "./ComponenteGaleria";
import { useState } from "react";

import { motion } from "framer-motion";
const MaterialSeleccionado = ({ materials, materialSelecto }) => {
  const [mostrarGaleria, setMostrarGaleria] = useState(true);
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const mostrarGaleriaHandler = (material) => {
    setMostrarGaleria(false);
    setMaterialSeleccionado(material);
  };

  return (
    <div className="w-[100%] h-2/4 flex flex-wrap mt-3 p-4 md:flex-none">
      <div className="flex flex-wrap rounded-lg pl-6 pb-6 pt-6 px-5 md:w-2/5 md:border-2 ">
        {materials.map((material) => (
          <ListaMateriales material={material} key={material.id} mostrarGaleriaHandler={mostrarGaleriaHandler}/>
        ))}
      </div>
      <div className=" ml-5 rounded-md md:w-6/12">
        { mostrarGaleria ?
          <ComponenteGaleria materialSeleccionado={materialSelecto}/> : <ComponenteGaleria materialSeleccionado={materialSeleccionado}/> 
        }
      </div>
    </div>
  );
};

export default MaterialSeleccionado;
