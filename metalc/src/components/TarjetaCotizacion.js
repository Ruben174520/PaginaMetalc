import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const TarjetaCotizacion = ({ material, setearDatos }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // define la fracción del elemento que debe estar visible antes de detectar la intersección
    triggerOnce: true, // hace que la animación se ejecute solo una vez cuando el elemento se encuentra en la vista
  });
  return (
    <motion.div
      className="w-[100%] shadow-lg p-3 border-2 rounded-lg m-1 align-middle flex justify-start cursor-pointer 
      md:w-1/4 md:flex-wrap md:justify-center md:p-5"
      onClick={() => setearDatos(material)}
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center justify-center w-[100%]">
        <Image
          src={material.icono}
          width={50}
          height={50}
          className="hidden md:block"
          alt=""
        />
        <Image
          src={material.icono}
          width={25}
          height={25}
          className="block md:hidden"
          alt=""
        />
      </div>
      <div className="flex items-center text-sm justify-center font-bold m-auto text-center w-[100%]
      md:text-md">
        <h3>{material.nombre}</h3>
      </div>
    </motion.div>
  );
};

export default TarjetaCotizacion;
