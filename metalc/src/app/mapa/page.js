"use client";
import Mapa from "@/components/Mapa";
import React from "react";
import { useState, useEffect } from "react";

function page() {
  const [paddingTop, setPaddingTop] = useState(0);
  const [ancho, setAncho] = useState(0);
  useEffect(() => {
    // Obtener la altura de otro-div
    const alturaNavbar = document.querySelector(".div_navbar").offsetHeight;
    const anchoNavbar = document.querySelector(".div_navbar").offsetWidth;
    const a = document.getElementsByClassName("h1_navbar");
    console.log(a);
    for (var i = 0; i < a.length; i++) a[i].classList.add('text-stone-950');
    // Actualizar el estado con el valor de padding-top
    setPaddingTop(alturaNavbar + 10);
    setAncho(anchoNavbar);
  }, []);
  return (
    <div
      className="h-2/4 flex flex-wrap pt-52 my-0 mx-auto"
      style={{ paddingTop: paddingTop, width: ancho }}
    >
      <div className="w-screen h-2/4 flex flex-wrap">
        <Mapa />
      </div>
    </div>
  );
}

export default page;
