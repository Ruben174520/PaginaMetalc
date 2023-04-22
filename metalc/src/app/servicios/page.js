"use client";
import servicios from "./page.module.css";
import Image from "next/image";
import scra from "../../img/scrap.jpg";
import cobre from "../../img/cobre.jpg";
import Form from "../../components/Formulario";
import Carousel from "../../components/carouselServices";
import Slider from "../../components/Slider";
import Carrusel from "@/components/ImageCarousel";
import ImageCarousel from '../../components/ImageCarousel';

function page() {
  const images = [
    { id: 1, url: 'https://aluminioindustrial.mx/blog/wp-content/uploads/2019/09/perfiles-aluminio-varios.jpg' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4rF_6ZqA0PtDxX9G8iENwAlR9zGaQUO6VA&usqp=CAU' },
    { id: 3, url: 'https://i.blogs.es/14d603/cobre1/1366_2000.jpeg' },
    { id: 4, url: 'https://media.istockphoto.com/id/868926884/es/foto/viejas-partes-de-coches-oxidados-oxidados-en-desguace-de-coches-coche-reciclado-piezas-de.jpg?s=612x612&w=0&k=20&c=hyTIObkdAxG-bMxWATlMNcY6F5_cIGdwtpFB-wU5pTU=' },
    { id: 5, url: 'https://www.elchatarrero.com/wp-content/uploads/2017/06/tulio.jpg' },
    { id: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3awL11Mn9j-DPSo500_AEBKS1IlGyojC2Q&usqp=CAU' }
  ];

  const names = [
    {id:'1', metal: "Aluminio", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"},
    {id:'2', metal: "Bronce", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"},
    {id:'3', metal: "Cobre", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"},
    {id:'4', metal: "Chatarra", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"},
    {id:'5', metal: "Rebabas", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"},
    {id:'6', metal: "Metales Raros", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"},
    {id:'7', metal: "Aceros inoxidables", estilo: "font-bmw", posicion: "display: 'flex' align-text: 'end'"}
  ];

    return (
        <div>
            <div className={servicios.tamanio}>
                <div className={servicios.fondoImage}>
                    <div className="font-bmw text-white text-7xl z-2 absolute">SERVICIOS</div>
                </div>
            </div>
            <div className={servicios.contenido}>
                <div className={servicios.titulo}>
                    SERVICIOS QUE OFRECEMOS
                </div>
                <div className={servicios.scrap}>

                    <div className={servicios.textoScrap}>
                        <div className="border-2 border-blue-500 w-[50%] pr-[20px]">
                            <h1 className="font-bmw text-2xl ">RECOLECCIÓN DE SCRAPT</h1><br />
                            <p className="justify-text-left">Uno de los principales servicios que Metalc puede brindarte, es la compra de scrap.
                                Puedes acudir directamente a la empresa a realizar una cotizacion del material que tienes disponible. <br />
                                Consulta los principales materiales que recolectamos en el siguiente slide: </p>
                        </div>

                        <div>
                            
                        </div>
                        <div className="h-[400px] w-[50%] ">
                            <ImageCarousel images={images} />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default page;