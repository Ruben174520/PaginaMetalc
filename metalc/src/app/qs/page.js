"use client";
import React from "react";
import style from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";
import "../page.css";
import logo from "../../icon/logo.png";
import trabajador1 from "../../img/filosofia.png";
import trabajador2 from "../../img/mision.png";
import trabajador3 from "../../img/vision.png";
import trabajador4 from "../../img/politica.png";

export function page() {
  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-2xl pb-10 text-white md:text-5xl md:pb-10">
        {" "}
        <h1 className="border-b-4 border-white mb-8">¿QUIÉNES SOMOS?</h1>
      </div>
      <div className="w-[88%] mx-auto mb-5 flex flex-wrap md:block">
        <div className={style.imgen1}>
          <div className="m-[7%] flex flex-wrap md:flex-auto">
            <div className="w-[100%] items-center grid md:w-[50%]">
              <div className="w-[100%] h-[100%] items-center align-center ">
                <h1 className="text-black text-4xl mb-[40px] w-[50%] border-b-4 pb-[10px] border-[#083552]">
                  MISIÓN
                </h1>
                <br />
                <p className="text-black font-bmw text-base md:text-xl">
                  Somos una empresa de reciclaje dedicada a la recolección de
                  metales ferrosos y no-ferrosos, con responsabilidad social,
                  brindando el mejor servicio a nuestros clientes y proveedores.
                  Cumpliendo en tiempo y forma con los requerimientos de calidad
                  de nuestros consumidores finales.
                </p>
              </div>
            </div>
            <div className="w-[100%] flex  items-center justify-center  border-b-2 border-[#8bba1f] md:w-[50%]">
              <div
                className="flex w-[80%] h-[90%] items-center justify-center hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ transition: "transform .3s ease-out" }}
              >
                <Image className={style.tr1} src={trabajador2} alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.imgen}>
          <div className="m-[7%] flex flex-wrap md:flex-auto">
            <div
              className="w-[100%] hidden  items-center justify-center  border-b-2 border-[#8bba1f]
                    md:w-[50%] md:flex"
            >
              <div
                className="flex w-[80%] h-[90%] items-center justify-center hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ transition: "transform .3s ease-out" }}
              >
                <Image className={style.tr1} src={trabajador3} alt="image" />
              </div>
            </div>
            <div className="w-[100%] items-center grid  md:w-[50%] ">
              <div className="w-[100%] h-[100%] items-center align-center  ">
                <h1 className="text-black text-4xl mb-[40px] w-[50%] border-b-4 pb-[10px] border-[#083552]">
                  VISIÓN
                </h1>
                <br />
                <p className="text-black font-bmw text-base md:text-xl">
                  Ser una empresa líder en el ramo de reciclaje de metales
                  no-ferrosos a nivel nacional compitiendo con empresas a nivel
                  internacional con las más altas normas de calidad.
                </p>
              </div>
            </div>
            <div
              className="w-[100%] flex  items-center justify-center  border-b-2 border-[#8bba1f]
                    md:w-[50%] md:hidden"
            >
              <div
                className="flex w-[80%] h-[90%] items-center justify-center hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ transition: "transform .3s ease-out" }}
              >
                <Image className={style.tr1} src={trabajador3} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className={style.estiloGente}>
        <div className="w-[80%] b h-[100%]  flex  md:w-2/3">
          <div className="w-[30%] flex items-center md:h-[90%] md:w-[20%] ">
            <Image src={logo} height={30} width={150} alt="image" className="hidden md:block"/>
            <Image src={logo} height={70} width={70} alt="image" className="block md:hidden"/>
          </div>
          <div className="w-[100%] flex justify-center items-center mx-5 md:mx-0">
            <h1 className=" text-lg font-bmw text-white md:text-2xl">
              GENTE COMO TÚ, POR UN FUTURO SUSTENTABLE
            </h1>
          </div>
        </div>
      </div>
      
      <div className="w-[88%] mx-auto mb-5 flex flex-wrap md:block">
        <div className={style.imgen2}>
          <div className="m-[7%] flex flex-wrap md:flex-auto">
            <div className="w-[100%] items-center grid md:w-[50%]">
              <div className="w-[100%] h-[100%] items-center align-center ">
                <h1 className="text-black text-4xl mb-[40px] w-[50%] border-b-4 pb-[10px] border-[#083552]">
                  FILOSOFÍA
                </h1>
                <br />
                <p className="text-black font-bmw text-base md:text-xl">
                  Nuestros colaboradores y su trabajo en equipo, son la clave en
                  el éxito de nuestra empresa, a través de tecnología de punta y
                  herramientas de trabajo; Haciendo énfasis en el servicio al
                  cliente, honestidad y respeto mutuo logrando así los objetivos
                  de la organización.
                </p>
              </div>
            </div>
            <div className="w-[100%] flex  items-center justify-center  border-b-2 border-[#8bba1f] md:w-[50%]">
              <div
                className="flex w-[80%] h-[90%] items-center justify-center hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ transition: "transform .3s ease-out" }}
              >
                <Image className={style.tr1} src={trabajador1} alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className={style.imgen}>
          <div className="m-[7%] flex flex-wrap md:flex-auto">
            <div className="w-[100%] hidden  items-center justify-center  border-b-2 border-[#8bba1f]
             md:w-[50%] md:flex">
              <div
                className="flex w-[80%] h-[90%] items-center justify-center hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ transition: "transform .3s ease-out" }}
              >
                <Image className={style.tr1} src={trabajador4} alt="image" />
              </div>
            </div>
            <div className="w-[100%] items-center grid md:w-[50%]">
              <div className="w-[100%] h-[100%] items-center align-center  ">
                <h1 className="w-[100%] text-black text-4xl mb-[40px] border-b-4 pb-[10px] border-[#083552]  md:w-[50%]">
                  POLÍTICA DE CALIDAD
                </h1>
                <br />
                <p className="text-black font-bmw text-base md:text-xl">
                  En METALC nos comprometemos a satisfacer plenamente las
                  necesidades y expectativas de nuestros clientes y proveedores,
                  en la compra y venta de metales; aplicando la capacidad y
                  creatividad de nuestro equipo de trabajo, con una filosofía de
                  mejora continua como estilo de vida.
                </p>
              </div>
            </div>
            <div className="w-[100%] flex  items-center justify-center  border-b-2 border-[#8bba1f]
             md:w-[50%] md:hidden">
              <div
                className="flex w-[80%] h-[90%] items-center justify-center hover:-translate-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                style={{ transition: "transform .3s ease-out" }}
              >
                <Image className={style.tr1} src={trabajador4} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
