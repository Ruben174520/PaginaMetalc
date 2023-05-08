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
      className="shadow-lg w-1/4 p-5 border-2 rounded-lg m-1 align-middle flex flex-wrap justify-center cursor-pointer"
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
      <div className="flex items-center justify-center w-full">
        <Image
          src={material.icono}
          width={50}
          height={50}
          className=""
          alt=""
        />
      </div>
      <div className="flex items-center  justify-center font-bold m-auto text-center text-md w-full">
        <h3>{material.nombre}</h3>
      </div>
    </motion.div>
  );
};

export default TarjetaCotizacion;
