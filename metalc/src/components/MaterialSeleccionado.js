import React from "react";
import { useMaterials } from "@/context/MaterialContext";
import Slider from "react-slick";
import { ListaMateriales } from "@/components/ListaMateriales";
import ComponenteGaleria from "./ComponenteGaleria";
import { useState } from "react";
const MaterialSeleccionado = ({ materials, materialSelecto }) => {
  const [mostrarGaleria, setMostrarGaleria] = useState(true);
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const mostrarGaleriaHandler = (material) => {
    setMostrarGaleria(false);
    setMaterialSeleccionado(material);
  };

  return (
    <div className="w-screen h-2/4 flex mt-3 p-4">
      <div className="w-2/5 flex flex-wrap border-2 rounded-lg pl-6 pb-6 pt-6">
        {materials.map((material) => (
          <ListaMateriales material={material} key={material.id} mostrarGaleriaHandler={mostrarGaleriaHandler}/>
        ))}
      </div>
      <div className="w-6/12 ml-5 rounded-md">
        { mostrarGaleria ?
          <ComponenteGaleria materialSeleccionado={materialSelecto}/> : <ComponenteGaleria materialSeleccionado={materialSeleccionado}/> 
        }
      </div>
    </div>
  );
};

export default MaterialSeleccionado;
