"use client";
import React from "react";
import { Acordion } from "@/components/Acordion";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useMaterials } from "@/context/MaterialContext";
import Image from "next/image";
import icono from "|/boxicons/svg/regular/bx-leaf.svg";
import { motion } from "framer-motion";
import "../page.css";

function Page() {
  const { materials } = useMaterials();
  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-2xl pb-5 text-white md:text-5xl md:pb-8">
        {" "}
        <h1 className="border-b-4 border-white mb-5">PREGUNTAS FRECUENTES</h1>
      </div>
      <div className="pt-42 w-5/6 mx-auto mb-5 ">
        <div className="my-9 border-b-8 border-[#083552]" >
          <p className="text-center p-3 md:text-3xl">
            ¿Tienes alguna duda acerca de nuestros servicios? Echale un vistazo
            a esta página
          </p>
        </div>
        <motion.div
          className="flex border-t-2 m-1 pt-8 shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Accordion alwaysOpen defaultActiveKey={["0"]} className="w-[100%]">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Que servicios ofrecemos?</Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-wrap align-middle justify-between">
                  <Image src={icono} height={50} width={50} alt="image" className="hidden md:block"/>
                  <p className="w-11/12 text-xs md:text-base">
                    En METALC nos comprometemos a satisfacer plenamente las
                    necesidades y expectativas de nuestros clientes y
                    proveedores, en la compra y venta de metales Uno de los
                    principales servicios que Metalc puede brindarte, es la
                    compra de scrap. Puedes acudir directamente a la empresa a
                    realizar una cotizacion del material que tienes disponible
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Que materiales compramos?</Accordion.Header>
              <Accordion.Body>
                <Accordion defaultActiveKey="0" flush alwaysOpen>
                  {materials.map((material) => (
                    <Accordion.Item eventKey={material.id} key={material.id}>
                      <Accordion.Header>{material.nombre}</Accordion.Header>
                      <Accordion.Body>
                        <div className="flex wrap justify-between">
                          <Image src={material.icono} height={50} width={50} alt="image" className="hidden md:block"/>
                          <p className="w-10/12 text-xs md:text-base">{material.descripcion}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                ¿Cual es su politica de calidad?
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-wrap align-middle justify-between">
                  <Image src={icono} height={50} width={50} alt="image" className="hidden md:block"/>
                  <p className="w-11/12 text-xs md:text-base">
                    En METALC nos comprometemos a satisfacer plenamente las
                    necesidades y expectativas de nuestros clientes y
                    proveedores, en la compra y venta de metales; aplicando la
                    capacidad y creatividad de nuestro equipo de trabajo, con
                    una filosofía de mejora continua como estilo de vida
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Por qué METALC Salvador Nava es la mejor opción?</Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-wrap align-middle justify-between">
                  <Image src={icono} height={50} width={50} alt="image" className="hidden md:block"/>
                  <ul className="w-11/12 list-disc text-xs md:text-base">
                    <li>Ubicacion privilegiada</li>
                    <li>Fácil acceso</li>
                    <li>Bodega con buena capacidad</li>
                    <li>Los mejores y mas competitivos precios</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>¿Cómo determinan el tipo de material?</Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-wrap align-middle justify-between">
                  <Image src={icono} height={50} width={50} alt="image" className="hidden md:block"/>
                  <ul className="w-11/12 list-disc text-xs md:text-base">
                    <li>Contamos con el mejor personal calificado equipado con la mejor herramienta para poder determinar correctamente el material brindado</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>¿Qué horarios tienen?</Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-wrap align-middle justify-between">
                  <Image src={icono} height={50} width={50} alt="image" className="hidden md:block"/>
                  <ul className="w-11/12 list-disc text-xs md:text-base">
                    <li>Lunes a Viernes: 8:00 am a 6:00 pm</li>
                    <li>Sabado: 8:00 am a 1:00 pm</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Además de comprar, pueden vender material?</Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-wrap align-middle justify-between">
                  <Image src={icono} height={50} width={50} alt="image" className="hidden md:block"/>
                  <p className="w-11/12 text-xs md:text-base">
                    Si, en una gran parte podemos vender material que tenemos en stock.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
