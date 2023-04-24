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
import background from "|/background/image.png"
import style from "../../components/Bootstrap.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function page() {
  const [paddingTop, setPaddingTop] = useState(0);
  const [ancho, setAncho] = useState(0);
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
    <div className="w-5/6 mx-auto mb-5 mt-7 ">
      <div className="w-screen h-2/4 flex flex-wrap">
        {/* <div className="bg-cover bg-center h-screen">
          <Image src={background} height={100} width={100}/>
        </div> */}
        <div className="w-1/3 flex justify-center align-middle h-full">
          <Mapa />
        </div>
        <div className="w-3/6 p-6">
          <h1 className="text-4xl border-b-2 border-gray-900">Contactanos</h1>
          <div className="w-full">
            <Card className="mt-3 bg-[#1a7ab6] text-white border-4 border-cyan-900">
              <Card.Body>
                <Card.Title className="flex flex-wrap justify-start text-center align-middle border-b-2">
                  <Image src={mapa} height={30} width={30} className="m-1" />
                  <p className="m-1 align-middle flex">Ubicación</p>
                </Card.Title>
                <Card.Text>
                  Av. Seminario 256 Fracc, Las Mercedes, 78394 San Luis, S.L.P.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card className="mt-3 bg-[#1a7ab6] text-white border-4 border-cyan-900">
              <Card.Body>
                <Card.Title className="flex flex-wrap justify-start text-center align-middle border-b-2">
                  <Image src={tel} height={30} width={30} className="m-1" />
                  <p className="m-1 align-middle flex">Teléfonos</p>
                </Card.Title>
                <div>
                  <div className="flex fle-wrap align-middle ">
                    <Image src={whats} height={25} width={25} />
                    <p className="ml-2"> Whatsapp: 444 655 5651 </p>
                  </div>
                  <div className="flex fle-wrap align-middle ">
                    <Image src={casa} height={25} width={25} />
                    <p className="ml-2"> Oficina: 444 111 1111 </p>
                  </div>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card className="mt-3 bg-[#1a7ab6] text-white border-4 border-cyan-900">
              <Card.Body>
                <Card.Title className="flex flex-wrap justify-start text-center align-middle border-b-2">
                  <Image src={correo} height={30} width={30} className="m-1" />
                  <p className="m-1 align-middle flex">Correo</p>
                </Card.Title>
                <div>
                  <div className="flex fle-wrap align-middle ">
                    <Image src={mark} height={25} width={25} className="" />
                    <p className="ml-2">vero.metalc@gmail.com </p>
                  </div>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
