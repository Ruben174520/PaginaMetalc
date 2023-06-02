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
    <div className="w-[100%] h-2/4  flex items-stretch flex-wrap justify-center mb-20  mt-20 md:mt-0 md:p-10">
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
      <div
        className=" w-[100%] hidden z-0 font-bmw text-white justify-between absolute ml-[12%] 
        mt-[25%] div_navbar text-xl  
      md:w-[50%] md:-translate-x-1/2 md:py-4 md:pt-6 md:mt-[10%] md:flex"
      >
        <div
          className="m-[20px] w-[80%] rounded-tr-[30px]
        md:h-[250px] md:p-[7%]"
          style={{
            backgroundColor: "rgba(241, 243, 244, 0.5)",
            textAlign: "center",
          }}
        >
          <h1 className="text-black font-bmw font-bold text-base md:text-4xl">
            Bienvenido a METALC
          </h1>
          <br></br>
          <h2 className="text-black font-bmw text-sm md:text-xl">
            Expertos en compra y venta de metales
          </h2>
          <br></br>
          <button
            variant="primary"
            type="submit"
            className="bg-[#083552] hover:bg-[#8bba1f] p-1 rounded-md my-2 w-[50%] text-white text-sm
            md:text-lg"
            onClick={() => window.location.href = '/qs'}
          >
            Conoce más
          </button>
        </div>
      </div>

      <div
        className="-z-[1]  w-[100%] h-[300px] m-0  relative opacity-[8] box-content
      md:h-[100%]"
      >
        <div
          className="z-[1] border-[1] border-black absolute bg-black top-0 left-0  w-[100%] h-[300px] opacity-50
        md:h-[100%]"
        ></div>
        <Carrusel />
      </div>
      <div className=" h-16 text-5xl text-center mt-10 mx-3 md:mx-0" id="materialReciclado">
        <h1 className="border-b-8 border-[#083552] text-2xl mb-3 mt-4 md:pb-3 md:text-5xl md:mb-0">
          ESPECIALIZADOS EN EL RECICLAJE
        </h1>
      </div>
      {tarjetaMaterial}
      <div className="w-[100%] h-2/4 flex items-stretch flex-wrap justify-evenly mb-20">
        {mostrarGaleria && (
          <MaterialSeleccionado
            materialSelecto={materialSeleccionado}
            materials={materials}
          ></MaterialSeleccionado>
        )}
      </div>
      <Call />
      <div className="w-[100%] p-[10px] md:h-[650px]">
        <Resp />
      </div>
    </div>
  );
}

export default Page;
