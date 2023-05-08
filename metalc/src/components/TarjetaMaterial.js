import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const TarjetaMaterial = ({ material, mostrarGaleriaHandler }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // define la fracción del elemento que debe estar visible antes de detectar la intersección
    triggerOnce: true, // hace que la animación se ejecute solo una vez cuando el elemento se encuentra en la vista
  });
  return (
    <motion.div
      className=" w-1/4 h-2/3 p-5 border-2 rounded-lg m-3 shadow-lg"
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="flex items-center justify-center">
        <Image
          src={material.icono}
          width={50}
          height={50}
          className=""
          alt=""
        />
      </div>
      <div className="flex items-center  justify-center m-2 font-bold">
        <h1>{material.nombre}</h1>
      </div>
      <div className="h-9 p-3 m-2 flex items-center justify-center border-2  rounded self-center border-blue-500 bg-blue-500 hover:bg-lime-500 hover:border-lime-500">
        <button
          className="rounded-lg text-stone-950 block font-bmw font-semibold animate-pulse"
          onClick={() => mostrarGaleriaHandler(material)}
        >
          DETALLES
        </button>
      </div>
    </motion.div>
  );
};
