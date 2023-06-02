"use client";
import Mapa from "@/components/Mapa";
import React from "react";
import logo from "../../icon/logo.png"
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "next/image";
import icono from "|/boxicons/svg/regular/bx-leaf.svg";
import mapa from "|/boxicons/svg/solid/bxs-map.svg";
import tel from "|/boxicons/svg/solid/bxs-phone.svg";
import whats from "|/boxicons/svg/logos/bxl-whatsapp.svg";
import casa from "|/boxicons/svg/solid/bxs-building-house.svg";
import correo from "|/boxicons/svg/regular/bx-envelopeWhite.svg";
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
    <div className="w-[100%] mb-[50px]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-white text-5xl pb-5">
        {" "}
        <h1 className="border-b-4 border-white">CONTACTO</h1>
      </div>
      <div className="w-5/6 mx-auto mb-5 mt-10 ">
        <h1 className="text-6xl border-b-8 border-[#083552] mt-10 pb-3">
          Contáctanos
        </h1>
      </div>
      <div className="w-5/6 mx-auto flex">
        <div id="info" className="w-[50%] bg-[#083552]">
          <div className="m-[40px] ml-[50px]">
            <div className="border-b-4 border-[#8bba1f] w-min text-white text-3xl mb-[20px]">
              Ubicación
            </div>
            <Mapa tam="250px" />
          </div>
          <div className="m-[40px] ml-[50px]">
            <div className="border-b-4 border-[#8bba1f] w-fit text-white text-3xl mb-[20px]">
              Redes Sociales
            </div>
            <div className="flex ">
              <Image src={whats} />
              <li className="ml-[5px] text-white list-none"><p className="hover:text-[#8bba1f]">Contactanos por Whatsapp</p></li>
            </div><br/>
            <div className="flex ">
              <Image src={correo} />
              <li className="ml-[5px] text-white list-none"><p className="hover:text-[#8bba1f]">Envianos un correo</p></li>
            </div>
          </div>
        </div>
        <form className="w-[50%] border-2 border-[#EEEE] shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] p-[30px]">
          <div id="formulario" className="">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Permitenos establecer comunicacion contigo</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Rellena la informacion con tus datos y en breve nos comunicaremos</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-5">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre Completo:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>



                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Correo electrónico:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Numero de teléfono:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 ">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    Empresa (solo si aplica):
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="empresa"
                      id="empresa"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="w-[200px] mt-6 flex items-center justify-start">
                  <button
                    type="submit"
                    className="rounded-md bg-[#083552] hover:bg-[#8bba1f] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar informacion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Page;
