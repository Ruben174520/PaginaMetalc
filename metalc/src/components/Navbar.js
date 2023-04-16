"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../icon/logo.png";
import lupa from "../icon/boxicons/svg/regular/bx-search-alt.svg";
import mapa from "../icon/boxicons/svg/regular/bx-map.svg";
import { useEffect, useState } from "react";
var position;
export function Navbar() {
  const router = useRouter();
  const [ posicion, setPosition] = useState(0);
  useEffect(() => {
    const a = document.getElementsByClassName("h1_navbar");
    console.log(a);
    for (var i = 0; i < a.length; i++) a[i].classList.remove("text-stone-950");
    var pos = document.getElementById('div_navbar');
    const navbar = document.getElementById('div_navbar')
    var url = window.location.pathname;
    if(url == "/"){
      pos.classList.add('absolute');
    }else{
      pos.classList.add('relative');
      navbar.classList.add('bg-sky-500')
    }
    console.log(pos.getAttribute('position'));
  });

  

  
  return (
    <header 
      className="flex w-10/12 z-0 font-bmw justify-between py-4 pt-6 border-b-2 border-cyan-800 absolute text-lg mb-4 left-1/2 -translate-x-1/2 div_navbar" 
      id="div_navbar"
    >
      <div className="flex">
        <div className="px-6 cursor-pointer" onClick={() => router.push("/")}>
          <Image src={logo} width={80} height={80} alt="Metalc Logo" />
        </div>
        <div className="flex items-center px-6 mx-10  max-h-14 text-white">
          <Link
            href={"/"}
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
            href={"/"}
            className="px-6 hover:border-b-4 border-cyan-800 font-semibold"
          >
            <h1 className="my-4 h1_navbar">¿Quienes somos?</h1>
          </Link>
          <Link
            href={"/"}
            className="px-6 hover:border-b-4 border-cyan-800 font-semibold"
          >
            <h1 className="my-4 h1_navbar">Preguntas frecuentes</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center mx-10">
        <Link href="/mapa">
          <Image src={mapa} height={32} width={32} className="mx-2" />
        </Link>
        <Link href="/">
          <Image src={lupa} height={32} width={32} />
        </Link>
      </div>
    </header>
  );
}
