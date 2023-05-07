import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ListaMateriales = ({ material, mostrarGaleriaHandler }) => {
  return (
    <motion.div
      className=" flex border-2 w-[100%] justify-evenly m-1 p-4 rounded-md cursor-pointer shadow-md hover:border-pink-900 hover:shadow-pink-900 hover:shadow-md"
      onClick={() => mostrarGaleriaHandler(material)}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="flex items-center justify-center mx-5">
        <Image
          src={material.icono}
          width={40}
          height={40}
          className=""
          alt=""
        />
      </div>
      <div className="flex font-bold w-full align-middle text-center items-center text-2xl">
        <h1 className="text-center flex align-middle justify-center">
          {material.nombre}
        </h1>
      </div>
    </motion.div>
  );
};
