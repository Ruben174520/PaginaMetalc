import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import styles from "./Bootstrap.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const ComponenteGaleria = ({ materialSeleccionado }) => {
  const [index, setIndex] = useState(0);
  const router = useRouter()
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleCotizar = () => {
    router.push("/cotizador");
  };
  return (
    <motion.div
      className="align-middle justify-center rounded-md "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="rounded-md w-[100%]"
      >
        {materialSeleccionado.imagenes.map((item) => (
          <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
            <Image src={item} alt="slides" />
            <Carousel.Caption className={styles.caption}>
              <h3 className="text-sm md:text-base">{materialSeleccionado.nombre}</h3>
              <p className=" text-sm md:text-base">{materialSeleccionado.descripcion}</p>
              <button className="btn btn-danger mt-3"
              onClick={handleCotizar}>COTIZA</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default ComponenteGaleria;
