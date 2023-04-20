"use client";
import servicios from "./page.module.css";
import Image from "next/image";
import scra from "../../img/scrap.jpg";
import cobre from "../../img/cobre.jpg";
import Form from "../../components/Formulario";
function page(){
   return(
    <div>
        <div className={servicios.tamanio}>
            <div className={servicios.fondoImage}>
                <div className="font-bmw text-white text-7xl z-2 absolute">SERVICIOS</div>     
            </div>
        </div>
        <div className={servicios.contenido}>
            <div className={servicios.scrap}>
                
                <div className={servicios.textoScrap}>
                    <h1 className="font-bmw text-center text-2xl ">RECOLECCIÓN DE SCRAPT</h1><br/>
                    <p>Uno de los principales servicios que Metalc puede brindarte, es la compra de scrap. <br/> 
                        Puedes acudir directamente a la empresa a realizar una cotizacion del material que tienes disponible. <br/>
                        Tambien tienes la posibilidad de contactarte con nosotros para brindarte una cotización por medio del siguiente formulario.<br/><br/> </p>
                    <div>
                        <div className={servicios.slider}>
                            <Image src={scra} className={servicios.imagenSlider}/>
                        </div>
                    </div>        
                </div>
                

            </div>
        </div>
    </div>
   ) 
}

export default page;