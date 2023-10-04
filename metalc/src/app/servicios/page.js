"use client";
import servicios from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";
import scra from "../../img/scrap.jpg";
import cobre from "../../img/cobre.jpg";
import Form from "../../components/Formulario";
import Carousel from "../../components/carouselServices";
import Slider from "../../components/Slider";
import Carrusel from "@/components/ImageCarousel";
import ImageCarousel from "../../components/ImageCarousel";
import { Button } from "react-bootstrap";
import Mapa from "@/components/Mapa";
import NavSecond from "@/components/Tabs";
import Head from 'next/head';

import "../page.css";
function Page() {

  return (
    <div className="w-[100%]">
      <div className="div-con-fondo-preguntas h-80 flex justify-center align-bottom items-end text-2xl pb-12 text-white md:text-5xl md:pb-10">
        {" "}
        <h1 className="border-b-4 border-white mb-5 ">SERVICIOS</h1>
      </div>
    <div className="pt-42 w-5/6 mx-auto mb-5  ">

      <div className={servicios.contenido}>
      
        <h1 className="text-2xl mb-[70px] mt-5  border-b-8 pb-5 border-[#083552] text-center
        md:text-4xl ">SERVICIOS QUE OFRECEMOS</h1>
        <div className="justify-between md:border-2 md:border-[#EEEE] md:shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] md:p-5 md:rounded-xl">
          <div className="flex flex-wrap justify-between md:flex-none">
            <div className="w-[100%] md:w-[50%] ">
              <h1 className="font-bmw text-2xl font-bold border-b-4  border-[#8bba1f] ">RECOLECCIÓN DE SCRAP</h1>
              <br />
              <p className="justify-text-left">
                En METALC nos comprometemos a satisfacer plenamente las
                necesidades y expectativas de nuestros clientes y proveedores,
                en la compra y venta de metales
                <br />
                Uno de los principales servicios que Metalc puede brindarte, es
                la compra de scrap. Puedes acudir directamente a la empresa a
                realizar una cotizacion del material que tienes disponible.{" "}
                <br />
                <br />
                <br />
                <br />
                <br />
                Consulta mas información sobre los materiales que recolectamos
                aqui:
              </p>
              <br />
              <div className="d-grid gap-2 h-[35px] m-[2%] align-center ">
                <Button
                  variant="primary"
                  size="sm"
                  className="text-white font-bmw bg-[#083552] hover:bg-[#8bba1f] align-center border-none"
                  onClick={() => window.location.href = '/#materialReciclado'}
                >
                  Materiales que recolectamos
                </Button>
              </div>
            </div>
            <div
              className="align-middle justify-center rounded-md"
              style={{ width: "500px", height: "400px" }}
            >
              <Slider />
            </div>
          </div>
          <div className="flex flex-wrap justify-between my-[70px] md:flex-none">
            <div className="w-[100%] mt-3 md:w-[50%] ">
              <h1 className="font-bmw text-2xl font-bold border-b-4  border-[#8bba1f] ">ADEMÁS ...</h1>
              <br />
              <p className="justify-text-left">
                Puedes realizar tu cotización correspondiente en el siguiente
                formulario.
                <br />
                Recuerda colocar correctamente tus datos para que uno de
                nuestros colaboradores se contacte contigo.
                <br />
                <br />
                <br />
              </p>
              <h1 className="font-bmw text-2xl font-bold border-b-4  border-[#8bba1f]">UBICACIÓN</h1>
              <br />
              <br />
              <div className="w-[100%] md:h-[150px]">
                <Mapa tam="250px" />
              </div>
            </div>
            <div className="w-[500px] mt-5 md:mt-0">
              <Form className="border-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page;
