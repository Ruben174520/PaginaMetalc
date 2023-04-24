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

function page() {
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

  const images = [
    {
      id: 1,
      url: "https://aluminioindustrial.mx/blog/wp-content/uploads/2019/09/perfiles-aluminio-varios.jpg",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4rF_6ZqA0PtDxX9G8iENwAlR9zGaQUO6VA&usqp=CAU",
    },
    { id: 3, url: "https://i.blogs.es/14d603/cobre1/1366_2000.jpeg" },
    {
      id: 4,
      url: "https://media.istockphoto.com/id/868926884/es/foto/viejas-partes-de-coches-oxidados-oxidados-en-desguace-de-coches-coche-reciclado-piezas-de.jpg?s=612x612&w=0&k=20&c=hyTIObkdAxG-bMxWATlMNcY6F5_cIGdwtpFB-wU5pTU=",
    },
    {
      id: 5,
      url: "https://www.elchatarrero.com/wp-content/uploads/2017/06/tulio.jpg",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3awL11Mn9j-DPSo500_AEBKS1IlGyojC2Q&usqp=CAU",
    },
  ];

  const names = [
    {
      id: "1",
      metal: "Aluminio",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
    {
      id: "2",
      metal: "Bronce",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
    {
      id: "3",
      metal: "Cobre",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
    {
      id: "4",
      metal: "Chatarra",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
    {
      id: "5",
      metal: "Rebabas",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
    {
      id: "6",
      metal: "Metales Raros",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
    {
      id: "7",
      metal: "Aceros inoxidables",
      estilo: "font-bmw",
      posicion: "display: 'flex' align-text: 'end'",
    },
  ];

  return (
    <div>
      <div className={servicios.tamanio}></div>
      <div className="font-bmw text-white text-7xl z-2 absolute w-10/12 h-[200px] border-2 border-blue-500">
        SERVICIOS
      </div>
      <div className={servicios.fondoImage}></div>

      <div className={servicios.contenido}>
        <div className={servicios.titulo}>SERVICIOS QUE OFRECEMOS</div>
        <div className={servicios.scrap}>
          <div className={servicios.textoScrap}>
            <div className=" w-[50%] ">
              <h1 className="font-bmw text-2xl ">RECOLECCIÓN DE SCRAPT</h1>
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
                Consulta mas información sobre los materiales que recolectamos
                aqui:
              </p>
              <br />
              <br />
              <br />
              <br />
              <div className="d-grid gap-2 h-[35px] m-[2%] align-center ">
                <Button
                  variant="primary"
                  size="sm"
                  className="text-black font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f] align-center"
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
        </div>
      </div>
    </div>
  );
}

export default page;
