"use client";
import Mapa from "@/components/Mapa";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "next/image";
import icono from "|/boxicons/svg/regular/bx-leaf.svg";
import mapa from "|/boxicons/svg/solid/bxs-map.svg";
import tel from "|/boxicons/svg/solid/bxs-phone.svg";
import whats from "|/boxicons/svg/logos/bxl-whatsapp.svg";
import casa from "|/boxicons/svg/solid/bxs-building-house.svg";
import correo from "|/boxicons/svg/solid/bxs-envelope.svg";
import mark from "|/boxicons/svg/solid/bxs-bookmark.svg";
import background from "|/background/image.png";
import style from "../../components/Bootstrap.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../page.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Page() {
  const [paddingTop, setPaddingTop] = useState(0);
  const [ancho, setAncho] = useState(0);
  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-2xl pb-5 text-white md:text-5xl md:pb-8">
        {" "}
        <h1 className="border-b-4 border-white  mb-5">CONTACTO</h1>
      </div>
      <div className="w-5/6 mx-auto mb-5 ">
        <h1 className="border-b-8 border-[#083552] text-3xl mt-4 md:pb-3 md:text-6xl">
          Contactanos
        </h1>
        <div
          className="w-[100%] h-2/4 flex flex-wrap mt-3 justify-between"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className=" w-[100%] flex justify-center align-middle h-full mt-6 pt-2 shadow-2xl
          md:w-2/5">
            <Mapa tam="400px" />
          </motion.div>
          <motion.div
            className="w-[100%] p-3 md:w-3/6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[100%]">
              <Card className="mt-3 bg-[#1a7ab6] text-white border-4 border-cyan-900">
                <Card.Body>
                  <Card.Title className="flex flex-wrap justify-start text-center align-middle border-b-2">
                    <Image src={mapa} height={30} width={30} className="m-1" alt="image"/>
                    <p className="m-1 align-middle flex">Ubicación</p>
                  </Card.Title>
                  <Card.Text>
                    Av. Seminario 256 Fracc, Las Mercedes, 78394 San Luis,
                    S.L.P.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
              <Card className="mt-3 bg-[#1a7ab6] text-white border-4 border-cyan-900">
                <Card.Body>
                  <Card.Title className="flex flex-wrap justify-start text-center align-middle border-b-2">
                    <Image src={tel} height={30} width={30} className="m-1" alt="image"/>
                    <p className="m-1 align-middle flex">Teléfonos</p>
                  </Card.Title>
                  <div>
                    <div className="flex fle-wrap align-middle ">
                      <Image src={whats} height={25} width={25} alt="image"/>
                      <p className="ml-2"> Whatsapp: 444 655 5651 </p>
                    </div>
                    <div className="flex fle-wrap align-middle ">
                      <Image src={casa} height={25} width={25} alt="image"/>
                      <p className="ml-2"> Oficina: 444 111 1111 </p>
                    </div>
                  </div>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
              <Card className="mt-3 bg-[#1a7ab6] text-white border-4 border-cyan-900">
                <Card.Body>
                  <Card.Title className="flex flex-wrap justify-start text-center align-middle border-b-2">
                    <Image
                      src={correo}
                      height={30}
                      width={30}
                      className="m-1"
                      alt="image"
                    />
                    <p className="m-1 align-middle flex">Correo</p>
                  </Card.Title>
                  <div>
                    <div className="flex fle-wrap align-middle ">
                      <Image src={mark} height={25} width={25} className="" alt="image"/>
                      <p className="ml-2">vero.metalc@gmail.com </p>
                    </div>
                  </div>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;
