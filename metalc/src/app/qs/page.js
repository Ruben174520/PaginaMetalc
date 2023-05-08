"use client";
import React from "react";
import style from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";
import "../page.css";
import logo from "../../icon/logo.png";
import trabajador1 from "../../img/trabajador1.jpg";
import trabajador2 from "../../img/trabajador2.jpg";
import trabajador3 from "../../img/trabajador3.png";

export function page() {
    return (
        <div className="w-[100%] h-[100%]">
            <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-white text-5xl w-[100%] pb-10">
                {" "}
                <h1 className="border-b-4 border-white my-3">¿QUIÉNES SOMOS?</h1>
            </div>
            <div className="w-[100%] h-[150px]    inline-flex justify-center bg-[#083552]">
                <div className="w-2/3 b h-[100%]  flex  ">
                    <div className="w-[20%] h-[90%]   flex items-center">
                        <Image src={logo} height={30} width={150} />
                    </div>
                    <div className="w-[100%] flex justify-center items-center">
                        <h1 className="text-2xl font-bmw text-white">"GENTE COMO TÚ, POR UN FUTURO SUSTENTABLE"</h1>
                    </div>

                </div>
            </div>
            <div className={style.imgen1}>
                <div className="m-[7%]  inline-block  flex">
                    <div className="w-[50%] items-center grid ">
                        <div className="w-[100%] h-[100%] items-center align-center ">
                            <h1 className="text-black text-4xl mb-[40px]">MISIÓN</h1><br />
                            <p className="text-black font-bmw text-xl">Somos una empresa de reciclaje dedicada a la recolección de metales ferrosos y no-ferrosos, con responsabilidad social, brindando el mejor servicio a nuestros clientes y proveedores.
                                Cumpliendo en tiempo y forma con los requerimientos de calidad de nuestros consumidores finales.</p>
                        </div>
                    </div>
                    <div className="w-[50%] flex  items-center justify-center  border-b-2 border-[#8bba1f]">
                        <div className="flex w-[80%] h-[90%] items-center justify-center">
                            <Image className={style.tr1} src={trabajador2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.imgen}>
                <div className="m-[7%]  inline-block  flex">
                    <div className="w-[50%] flex  items-center justify-center  border-b-2 border-[#8bba1f]">
                        <div className="flex w-[80%] h-[90%] items-center justify-center">
                            <Image className={style.tr1} src={trabajador3} />
                        </div>
                    </div>
                    <div className="w-[50%] items-center grid  ">
                        <div className="w-[100%] h-[100%] items-center align-center  ">
                            <h1 className="text-black text-4xl mb-[40px]">VISIÓN</h1><br />
                            <p className="text-black font-bmw text-xl">Ser una empresa líder en el ramo de reciclaje de
                             metales no-ferrosos a nivel nacional compitiendo con empresas a nivel internacional con las más altas normas de calidad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.imgen2}>
                <div className="m-[7%]  inline-block  flex">
                    <div className="w-[50%] items-center grid  ">
                        <div className="w-[100%] h-[100%] items-center align-center ">
                            <h1 className="text-black text-4xl mb-[40px]">FILOSOFÍA</h1><br />
                            <p className="text-black font-bmw text-xl">Nuestros colaboradores y su trabajo en equipo, son la clave en el éxito de nuestra empresa, a través de tecnología de punta y herramientas de trabajo;
                             Haciendo énfasis en el servicio al cliente, honestidad y respeto mutuo logrando así los objetivos de la organización.</p>
                        </div>
                    </div>
                    <div className="w-[50%] flex  items-center justify-center  border-b-2 border-[#8bba1f]">
                        <div className="flex w-[80%] h-[90%] items-center justify-center">
                            <Image className={style.tr1} src={trabajador1} />
                        </div>
                    </div>
                </div>
            </div>





        </div>


    );
}

export default page;