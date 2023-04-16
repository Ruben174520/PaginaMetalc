"use client";

import { TarjetaMaterial } from "@/components/TarjetaMaterial";
import MaterialSeleccionado from "@/components/MaterialSeleccionado";
import Video from "@/components/Video";
import Call from "@/components/callToAction";
import { useMaterials } from "@/context/MaterialContext";
import { useState, useEffect } from "react";
import styles from "../components/Video.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="w-screen h-2/4  flex items-stretch flex-wrap justify-evenly mb-20">
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
      <div className={styles.videoWrapper}>
        <div className={styles.negro}></div>
        <Video />
      </div>
      <div className="w-screen h-16 text-5xl text-center mt-20">
        <h1>ESPECIALIZADOS EN EL RECICLAJE</h1>
      </div>
      {tarjetaMaterial}
      <div className="w-screen h-2/4 mx-9 flex items-stretch flex-wrap justify-evenly mb-20">
        {mostrarGaleria && (
          <MaterialSeleccionado materialSelecto={materialSeleccionado} materials={materials}></MaterialSeleccionado>
        )}
      </div>
      <Call />
    </div>
  );
}

export default page;
