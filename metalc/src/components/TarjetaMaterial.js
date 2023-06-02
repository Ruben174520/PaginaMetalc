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
      className="w-[300px] border-2 rounded-lg m-3 shadow-lg flex flex-wrap justify-center
      md:w-1/4 md:h-2/3 md:p-5 md:m-0 md:block"
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
      <div className="flex items-center justify-center m-2 md:m-0">
        <Image
          src={material.icono}
          width={50}
          height={50}
          className=""
          alt=""
        />
      </div>
      <div className="flex items-center  justify-center m-2 font-bold w-[100%]">
        <h1>{material.nombre}</h1>
      </div>
      <div className="w-[80%] h-9 p-3 m-2 flex items-center justify-center align-middle border-2  rounded self-center border-[#083552] bg-[#083552] hover:bg-[#8bba1f] hover:border-[#8bba1f]
      md:w-[100%]">
        <button
          className="w-[80%] rounded-lg text-white block font-bmw font-semibold animate-pulse md:w-[100%]"
          onClick={() => mostrarGaleriaHandler(material)}
        >
          DETALLES
        </button>
      </div>
    </motion.div>
  );
};
