"use client";
import React from "react";
import { Acordion } from "@/components/Acordion";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useMaterials } from "@/context/MaterialContext";
import Image from "next/image";
import icono from "|/boxicons/svg/regular/bx-leaf.svg";

import "../page.css";

function page() {
  const { materials } = useMaterials();
  useEffect(() => {
    // Obtener la altura de otro-div
    const navbar = document.getElementById("div_navbar");
    const a = document.getElementsByClassName("h1_navbar");
    for (var i = 0; i < a.length; i++) a[i].classList.add("text-stone-950");
    const pos = document.getElementById("div_navbar");
    const letra = document.getElementById("text");
    const logo = document.getElementById("logoNav");
    const icon = document.getElementById("iconos");
    // Actualizar el estado con el valor de padding-top
    pos.classList.remove("absolute");
    pos.classList.add("relative");
    navbar.classList.add("bg-[#1a7ab6]");
    letra.classList.add("text-white");
  }, []);
  return (
    <div className="pt-42 w-5/6 mx-auto mb-5">
      <div className="div-con-fondo-preguntas h-40 flex justify-center align-middle items-center text-white text-5xl">
        {" "}
        PREGUNTAS FRECUENTES
      </div>
      <div className="my-9">
        <p className="text-center">
          Tienes alguna duda acerca de nuestros servicios? Echale un vistazo a
          esta página
        </p>
      </div>
      <div className="flex border-t-2 m-1 pt-8">
        <Accordion alwaysOpen defaultActiveKey={["0"]}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Que servicios ofrecemos?</Accordion.Header>
            <Accordion.Body>
              <div className="flex flex-wrap align-middle justify-between">
                <Image src={icono} height={50} width={50} />
                <p className="w-11/12">
                  En METALC nos comprometemos a satisfacer plenamente las
                  necesidades y expectativas de nuestros clientes y proveedores,
                  en la compra y venta de metales Uno de los principales
                  servicios que Metalc puede brindarte, es la compra de scrap.
                  Puedes acudir directamente a la empresa a realizar una
                  cotizacion del material que tienes disponible
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Que materiales compramos?</Accordion.Header>
            <Accordion.Body>
              <Accordion defaultActiveKey="0" flush alwaysOpen>
                {materials.map((material) => (
                  <Accordion.Item eventKey={material.id}>
                    <Accordion.Header>{material.nombre}</Accordion.Header>
                    <Accordion.Body>
                      <div className="flex wrap justify-between">
                        <Image src={material.icono} height={50} width={50} />
                        <p className="w-10/12">{material.descripcion}</p>
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
                <Image src={icono} height={50} width={50} />
                <p className="w-11/12">
                  En METALC nos comprometemos a satisfacer plenamente las
                  necesidades y expectativas de nuestros clientes y proveedores,
                  en la compra y venta de metales; aplicando la capacidad y
                  creatividad de nuestro equipo de trabajo, con una filosofía de
                  mejora continua como estilo de vida
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default page;
