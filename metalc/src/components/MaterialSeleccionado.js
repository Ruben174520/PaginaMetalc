import React from "react";
import { useMaterials } from "@/context/MaterialContext";

import { ListaMateriales } from "@/components/ListaMateriales";
import Slide from "@/components/Slide";
const MaterialSeleccionado = ({ materials, materialSelecto }) => {
  return (
    <div className="w-screen h-2/4 flex">
      <div>
        {materials.map((material) => (
          <ListaMateriales
            material={material}
            handleMostrar={materialSelecto}
          />
        ))}
      </div>
      <Slide />
    </div>
  );
};

export default MaterialSeleccionado;
