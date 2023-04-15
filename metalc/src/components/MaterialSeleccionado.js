import React from "react";
import { useMaterials } from "@/context/MaterialContext";
import Slider from "react-slick";
import { ListaMateriales } from "@/components/ListaMateriales";
import SlideComponent from "@/components/SlideComponent";
const MaterialSeleccionado = ({ materials, materialSelecto }) => {

  console.log(materialSelecto);
  return (
    <div className="w-screen h-2/4 flex">
      <div>
        {materials.map((material) => (
          <ListaMateriales material={material} />
        ))}
      </div>
      <div>
        <SlideComponent materialSeleccionado={materialSelecto}/>
      </div>
    </div>
  );
};

export default MaterialSeleccionado;
