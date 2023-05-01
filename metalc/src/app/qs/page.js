"use client";
import React from "react";
import style from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";
import "../page.css";
import logo from "../../icon/logo.png";

export function page() {
    return (
        <div className="w-[100%] h-[100%]">
            <div className="div-con-fondo-preguntas h-40 flex justify-center align-middle items-center text-white text-5xl w-[100%]">
                {" "}
                ¿QUIENES SOMOS?
            </div>
            <div className="w-[100%] h-[150px]  inline-flex justify-center">
                <div className="w-2/3 h-[100%]  flex justify-center">
                    <Image src={logo} width={150} height={130} />

                </div>
            </div>
            <div className={style.imgen1}>
                <div className="m-[10%]  inline-block space-y-[70px] ">
                    <div className="w-[50%]">
                        <h1 className="text-white text-4xl">MISIÓN</h1><br/>
                        <p className="text-white font-bmw text-xl">Somos una empresa de reciclaje dedicada a la recolección de metales ferrosos y no-ferrosos, con responsabilidad social, brindando el mejor servicio a nuestros clientes y proveedores.
                            Cumpliendo en tiempo y forma con los requerimientos de calidad de nuestros consumidores finales.</p>
                    </div>

                </div>
            </div>
            <div className={style.imgen}>
            <div className="m-[10%]  inline-block space-y-[70px] ">
                <div className="w-[50%]"></div>
                    <div className="w-[50%]">
                        <h1 className="text-white text-4xl">MISIÓN</h1><br/>
                        <p className="text-white font-bmw text-xl">Somos una empresa de reciclaje dedicada a la recolección de metales ferrosos y no-ferrosos, con responsabilidad social, brindando el mejor servicio a nuestros clientes y proveedores.
                            Cumpliendo en tiempo y forma con los requerimientos de calidad de nuestros consumidores finales.</p>
                    </div>

                </div>
            </div>
            <div className={style.imgen2}>
                <div className="m-[10%]  inline-block space-y-[70px] ">
                    <div className="w-[50%]">
                        <h1 className="text-white text-4xl">FILOSOFÍA</h1><br/>
                        <p className="text-white font-bmw text-xl">Nuestros colaboradores y su trabajo en equipo, son la clave en el éxito de nuestra empresa, a través de tecnología de punta y herramientas de trabajo;
                         Haciendo énfasis en el servicio al cliente, honestidad y respeto mutuo logrando así los objetivos de la organización.</p>
                    </div>

                </div>
            </div>





        </div>


    );
}

export default page;