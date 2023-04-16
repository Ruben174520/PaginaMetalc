import React from 'react'
import { Carousel } from 'react-bootstrap';
import Image from 'next/image'
import styles from "./Bootstrap.module.css"
import { useState } from 'react';
const ComponenteGaleria =({materialSeleccionado}) =>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
  return (
    <div className="align-middle justify-center rounded-md">
        <Carousel activeIndex={index} onSelect={handleSelect} className='rounded-md'>
        {materialSeleccionado.imagenes.map((item) => (
            <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
            <Image src={item} alt="slides" />
            <Carousel.Caption className={styles.caption}>
                <h3>{materialSeleccionado.nombre}</h3>
                <p>{materialSeleccionado.descripcion}</p>
                <button className="btn btn-danger mt-3">COTIZA</button>
            </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
  )
}

export default ComponenteGaleria