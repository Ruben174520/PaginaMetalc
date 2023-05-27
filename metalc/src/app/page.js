"use client";
//cambio
import { TarjetaMaterial } from "@/components/TarjetaMaterial";
import MaterialSeleccionado from "@/components/MaterialSeleccionado";
import Video from "@/components/Video";
import Call from "@/components/callToAction";
import { useMaterials } from "@/context/MaterialContext";
import { useState, useEffect } from "react";
import styles from "../components/Video.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resp from "../components/RespSocial";
import Carrusel from "../components/ImageCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { color } from "framer-motion";

export function Page() {
  const { materials } = useMaterials();
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const mostrarGaleriaHandler = (material) => {
    setMostrarGaleria(true);
    setMaterialSeleccionado(material);
  };

  const tarjetaMaterial = mostrarGaleria ? null : (
    <div className="w-[100%] h-2/4  flex items-stretch flex-wrap justify-center mb-20 p-10">
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
    <div className="flex flex-wrap justify-center">
      <div className="flex w-[50%] z-0 font-bmw text-white justify-between py-4 pt-6 absolute ml-[12%]  -translate-x-1/2 div_navbar mt-[10%] text-xl  ">
        <div className="m-[20px] w-[80%] h-[250px]  p-[7%] rounded-tr-[30px]" style={{backgroundColor: 'rgba(241, 243, 244, 0.5)', textAlign: 'center'}}>
          <h1 className="text-black font-bmw font-bold text-4xl">Bienvenido a METALC</h1><br></br>
          <h2 className="text-black font-bmw">Expertos en compra y venta de metales</h2><br></br>
           <button variant="primary" type="submit" className="bg-[#083552] hover:bg-[#8bba1f] p-1 rounded-md my-2 w-[50%] text-white">CONOCE MÁS</button>
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <div className={styles.negro}></div>
        <Carrusel />
      </div>
      <div
        className=" h-16 text-5xl text-center mt-20 "
        id="materialReciclado"
      >
        <h1 className="border-b-8  p-2 border-[#083552]">ESPECIALIZADOS EN EL RECICLAJE</h1>
      </div>
      {tarjetaMaterial}
      <div
        className="w-[100%] h-2/4 flex items-stretch flex-wrap justify-evenly mb-20"
      >
        {mostrarGaleria && (
          <MaterialSeleccionado
            materialSelecto={materialSeleccionado}
            materials={materials}
          ></MaterialSeleccionado>
        )}
      </div>
      <Call />
      <div className="w-[100%] p-[10px] h-[650px]">
        <Resp />
      </div>
    </div>
  );
}

export default Page;
