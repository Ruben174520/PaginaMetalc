"use client";

import { TarjetaMaterial } from "@/components/TarjetaMaterial";
import MaterialSeleccionado from "@/components/MaterialSeleccionado";
import Video from "@/components/Video";
import Call from "@/components/callToAction";
import { useMaterials } from "@/context/MaterialContext";
import { useState, useEffect } from "react";
import styles from "../components/Video.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resp from "../components/RespSocial";
import Carrusel from "../components/ImageCarousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export function page() {
  const { materials } = useMaterials();
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const mostrarGaleriaHandler = (material) => {
    setMostrarGaleria(true);
    setMaterialSeleccionado(material);
  };


  const tarjetaMaterial = mostrarGaleria ? null : (
    <div className="w-[100%] h-2/4  flex items-stretch flex-wrap justify-evenly mb-20">
      {materials.map((material) => (
        <TarjetaMaterial
          key={material.nombre}
          material={material}
          mostrarGaleriaHandler={mostrarGaleriaHandler}
        />
      ))}
    </div>
  );
  return (
    <div className="flex flex-wrap">
      <h1 className="flex w-10/12 z-0 font-bmw text-white justify-between py-4 pt-6 absolute  left-1/2 -translate-x-1/2 div_navbar mt-[8%] text-xl"></h1>
      <div className={styles.videoWrapper}>
        <div className={styles.negro}></div>
        <Carrusel />
        
      </div>
      <div className="w-[100%] h-16 text-5xl text-center mt-20">
        <h1>ESPECIALIZADOS EN EL RECICLAJE</h1>
      </div>
      {tarjetaMaterial}
      <div className="w-[100%] h-2/4 flex items-stretch flex-wrap justify-evenly mb-20">
        {mostrarGaleria && (
          <MaterialSeleccionado materialSelecto={materialSeleccionado} materials={materials}></MaterialSeleccionado>
        )}
      </div>
      <Call />
      <div className="w-[100%] p-[10px] h-[650px]">
          <Resp />
      </div>
    </div>
  );
}

export default page;
