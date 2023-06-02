"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../icon/logo.png";
import mapa from "../icon/boxicons/svg/solid/bxs-contactWhite.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
var position;
export function Navbar() {
  const router = useRouter();
  const [posicion, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="w-[100%] absolute flex flex-wrap justify-center text-white"
      id="div_navbar"
    >
      <div className="flex w-10/12 z-0 font-bmw justify-between py-4 pt-6 border-b-2 border-[#083552]  text-base text-center  div_navbar ">
        <div className="flex px-[5%]">
          <div
            className="cursor-pointer"
            id="logoNav"
            onClick={() => router.push("/")}
          >
            <Image src={logo} width={80} height={80} alt="Metalc Logo" />
          </div>
          {/*Se oculta si esta en vista de mobil*/}
          <div
            className="hidden md:flex items-center px-6 mx-10  max-h-14 text-white"
            id="text"
          >
            <Link
              href={"/servicios"}
              className="px-6 hover:border-b-4 border-cyan-800 font-semibold"
            >
              <h1 className="my-4 h1_navbar">Servicios</h1>
            </Link>
            <Link
              href={"/cotizador"}
              className="px-6 hover:border-b-4 border-cyan-800 font-semibold"
            >
              <h1 className="my-4 h1_navbar">Cotizador</h1>
            </Link>
            <Link
              href={"/qs"}
              className="px-6 hover:border-b-4 border-cyan-800 font-semibold"
            >
              <h1 className="my-4 h1_navbar">¿Quienes somos?</h1>
            </Link>
            <Link
              href={"/preguntas"}
              className="px-6 hover:border-b-4 border-cyan-800 font-semibold"
            >
              <h1 className="my-4 h1_navbar">Preguntas frecuentes</h1>
            </Link>
            {/*Se oculta si esta en vista de mobil*/}
            <Link
              href={"/mapa"}
              className="block px-6 hover:border-b-4 border-cyan-800 font-semibold
              md:hidden "
            >
              <h1 className="my-4 h1_navbar">Contacto</h1>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center mx-10" id="iconos">
          <Link href="/mapa">
            <Image
              src={mapa}
              height={32}
              width={32}
              className="mx-2"
              alt="imagen"
            />
          </Link>
        </div>
        <button
          type="button"
          className="text-white md:hidden"
          onClick={handleToggle}
        >
          <svg
            className="h-8 w-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4.75C5 4.33579 5.33579 4 5.75 4H18.25C18.6642 4 19 4.33579 19 4.75C19 5.16421 18.6642 5.5 18.25 5.5H5.75C5.33579 5.5 5 5.16421 5 4.75ZM5 9.75C5 9.33579 5.33579 9 5.75 9H18.25C18.6642 9 19 9.33579 19 9.75C19 10.1642 18.6642 10.5 18.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75ZM5.75 14C5.33579 14 5 14.3358 5 14.75C5 15.1642 5.33579 15.5 5.75 15.5H18.25C18.6642 15.5 19 15.1642 19 14.75C19 14.3358 18.6642 14 18.25 14H5.75Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4.75C3 4.33579 3.33579 4 3.75 4H20.25C20.6642 4 21 4.33579 21 4.75C21 5.16421 20.6642 5.5 20.25 5.5H3.75C3.33579 5.5 3 5.16421 3 4.75ZM3 9.75C3 9.33579 3.33579 9 3.75 9H20.25C20.6642 9 21 9.33579 21 9.75C21 10.1642 20.6642 10.5 20.25 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75ZM3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H20.25C20.6642 15.5 21 15.1642 21 14.75C21 14.3358 20.6642 14 20.25 14H3.75Z"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-wrap justify-end align-middle bg-[#083552]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.75 }}
        >
          <Link href={"/servicios"} className="w-[100%]">
            <h3
              className="block px-4 py-2 text-white hover:bg-gray-400"
              onClick={closeMenu}
            >
              Servicios
            </h3>
          </Link>
          <Link href={"/cotizador"} className="w-[100%]">
            <h3
              className="block px-4 py-2 text-white hover:bg-gray-400"
              onClick={closeMenu}
            >
              Cotizador
            </h3>
          </Link>
          <Link href={"/qs"} className="w-[100%]">
            <h3
              className="block px-4 py-2 text-white hover:bg-gray-400"
              onClick={closeMenu}
            >
              ¿Quienes somos?
            </h3>
          </Link>
          <Link href={"/preguntas"} className="w-[100%]">
            <h3
              className="block px-4 py-2 text-white hover:bg-gray-400"
              onClick={closeMenu}
            >
              Preguntas frecuentes
            </h3>
          </Link>
          <Link href={"/mapa"} className="w-[100%]">
            <h3
              className="block px-4 py-2 text-white hover:bg-gray-400"
              onClick={closeMenu}
            >
              Mapa
            </h3>
          </Link>
        </motion.div>
      )}
    </header>
  );
}
