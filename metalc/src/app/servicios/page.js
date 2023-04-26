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

  
    return (
        <div>
            
            <div className={servicios.fondoImage}>
                <div className="font-bmw text-white text-7xl z-2">SERVICIOS</div>
            </div>
            
            <div className={servicios.contenido}>
                <div className={servicios.titulo}>
                    SERVICIOS QUE OFRECEMOS
                </div>
                <div className={servicios.scrap}>
                    <div className={servicios.textoScrap}>
                        <div className=" w-[50%] ">
                            <h1 className="font-bmw text-2xl ">RECOLECCIÓN DE SCRAPT</h1><br />
                            <p className="justify-text-left">En METALC nos comprometemos a satisfacer plenamente las necesidades y expectativas de nuestros clientes y proveedores, en la compra y venta de metales<br/>
                                Uno de los principales servicios que Metalc puede brindarte, es la compra de scrap.
                                Puedes acudir directamente a la empresa a realizar una cotizacion del material que tienes disponible. <br /><br/><br/><br/><br/>
                                Consulta mas información sobre los materiales que recolectamos aqui: 
                            </p><br/>
                            <div className="d-grid gap-2 h-[35px] m-[2%] align-center ">
                                <Button variant="primary" size='sm' className='text-white font-bmw bg-[#1a7ab6] hover:bg-[#8bba1f] align-center'>Materiales que recolectamos</Button>
                            </div>
                            
                        </div>
                        <div className="align-middle justify-center rounded-md" style={{width: '500px', height: '400px'}}>
                            <Slider />
                        </div>
                    </div>
                    <div className={servicios.textoScrap}>
                        <div className="w-[50%] ">
                            <Form  className='border-none'/>
                        </div>
                        <div className="w-[500px] ">
                            <h1 className="font-bmw text-2xl ">ADEMÁS ...</h1><br />
                            <p className="justify-text-left">
                                Puedes realizar tu cotización correspondiente en el siguiente formulario.<br/> 
                                Recuerda colocar correctamente tus datos para que uno de nuestros colaboradores se contacte contigo.
                                <br/><br/><br/>
                            </p>
                            <h1 className="font-bmw text-2xl">UBICACIÓN</h1><br/><br/>
                            <div className="w-[100%] h-[150px]">
                                <Mapa tam='300px'/>
                            </div>
                        </div>
                        
                    </div>
                    <div className={servicios.textoScrap}>
                      <h1 className="font-bmw text-2xl">¿QUÉ MÁS HACEMOS?</h1>
                    </div>
                    <div className={servicios.textoScrap}>
                      <div className={servicios.navSecundario}>
                          <NavSecond />
                          <div className="w-[100%], h-[400px] " id="qmh">

                          </div>
                      </div>
                    </div>
                    
                </div>
            </div>
          </div>
  );
}

export default page;
