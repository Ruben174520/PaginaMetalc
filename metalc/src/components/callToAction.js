"use client";
import "../app/globals.css"
import styles from "./callToAction.module.css"
import Image from "next/image";
import cot from "../icon/boxicons/svg/regular/bx-money-withdraw.svg"
import mat from "../icon/boxicons/svg/regular/bx-diamond.svg"
import serv from "../icon/boxicons/svg/regular/bx-cog.svg"

function callToAction(){
    return(
        <div className={styles.call}>
            <div className={styles.titulo}>
                HERRAMIENTAS DE SERVICIO
            </div>
            <div className={styles.titulo2}>
                CONTÁCTATE CON NOSOTROS
            </div>
            <div className="flex w-[100%] flex-wrap justify-between px-[10%] mb-12 md:flex-none">
                <div className="w-[100%] flex flex-col justify-center p-6 md:w-[30%]">
                    <div className="flex justify-center mb-8">
                        <Image src={cot} width={70} height={70} alt='imagen'/>
                    </div>
                    <button className={"bg-blue-500 hover:bg-lime-500 py-2 px-4 text-white font-bold rounded-lg"}>Cotizar</button>
                </div>
                <div className="w-[100%] flex flex-col justify-center p-6 md:w-[30%]">
                    <div className="flex justify-center mb-8">
                        <Image src={mat} width={70} height={70} alt='imagen' />
                    </div>
                    <button className={"bg-blue-500 hover:bg-lime-500 py-2 px-4 text-white font-bold rounded-lg"}>Materiales</button>
                </div>
                <div className="w-[100%] flex flex-col justify-center p-6 md:w-[30%]">
                    <div className="flex justify-center mb-8">
                        <Image src={serv} width={70} height={70} alt='imagen'/>
                    </div>
                    <button className={"bg-blue-500 hover:bg-lime-500 py-2 px-4 text-white font-bold rounded-lg"}>Servicios</button>
                </div>
            </div>


        </div>


    )
}

export default callToAction

