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
    { id: 3, url: 'https://i.blogs.es/14d603/cobre1/1366_2000.jpeg' }
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
                        <div>
                            <h1 className="font-bmw text-2xl ">RECOLECCIÓN DE SCRAPT</h1><br />
                            <p className="justify-text-left">Uno de los principales servicios que Metalc puede brindarte, es la compra de scrap.
                                Puedes acudir directamente a la empresa a realizar una cotizacion del material que tienes disponible. <br />
                                Consulta los principales materiales que recolectamos en el siguiente slide: </p>
                        </div>

                        <div>
                            
                        </div>
                        <div className="w-[50%] h-[400px]">
                            <ImageCarousel images={images} />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default page;