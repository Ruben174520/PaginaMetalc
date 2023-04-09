"use client";

import { TarjetaMaterial } from "@/components/TarjetaMaterial";
import MaterialSeleccionado from "@/components/MaterialSeleccionado";
import Video from "@/components/Video";

import { useMaterials } from "@/context/MaterialContext";
import { useState } from "react";
import styles from "../components/Video.module.css";
function page() {
  const { materials } = useMaterials();
  console.log(materials);
  const [materialselect, setMaterialSelecto] = useState(false);
  const [objeto, setObjeto] = useState(null);

  const materialSelecto = (objeto) => {
    console.log("si");
    setMaterialSelecto(true);
    setObjeto(objeto);
  };
  return (
    <div className="flex flex-wrap">
      <div className={styles.videoWrapper}>
        <div className={styles.negro}></div>
        <Video />
      </div>
      <div className="w-screen h-16 text-5xl text-center mt-8">
        <h1>ESPECIALIZADOS EN EL RECICLAJE</h1>
      </div>
      <div className="w-screen h-2/4 mx-9 flex items-stretch flex-wrap justify-evenly">
        {!materialselect
          ? materials.map((material) => (
              <TarjetaMaterial
                material={material}
                handleMostrar={materialSelecto}
              />
            ))
          : <MaterialSeleccionado materials={materials} materialSelecto={materialSelecto}/>
          }
      </div>
    </div>
  );
}

export default page;
