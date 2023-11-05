import { useContext, createContext, useState } from "react";

import acerosI from "|/materiales/aceroinoxidable.png";
import aluminios from "|/materiales/aluminio.png";
import bronces from "|/materiales/bronce.png";
import cobres from "|/materiales/cobre.png";
import chatarra from "|/materiales/chatarra.png";
import rebabas from "|/materiales/rebabas.png";
import metalesR from "|/materiales/metalesraros.png";

import chattara1 from "|/imagesSlide/chatarra1.png";
import chattara2 from "|/imagesSlide/chatarra2.jpg";
import chattara3 from "|/imagesSlide/chatarra3.png";
import chattara4 from "|/imagesSlide/chatarra4.png";
import inoxidables1 from "|/imagesSlide/inoxidables1.png";
import inoxidables2 from "|/imagesSlide/inoxidables2.png";
import inoxidables3 from "|/imagesSlide/inoxidables3.png";
import inoxidables4 from "|/imagesSlide/inoxidables4.png";
import aluminio1 from "|/imagesSlide/aluminio1.png";
import aluminio2 from "|/imagesSlide/aluminio2.jpg";
import aluminio3 from "|/imagesSlide/aluminio3.png";
import aluminio4 from "|/imagesSlide/aluminio4.jpg";
import aluminio5 from "|/imagesSlide/aluminio5.jpg";
import aluminio6 from "|/imagesSlide/aluminio6.jpg";
import rebabas1 from "|/imagesSlide/rebabas1.jpg";
import rebabas2 from "|/imagesSlide/rebabas2.jpg";
import rebabas3 from "|/imagesSlide/rebabas3.jpg";
import rebabas4 from "|/imagesSlide/rebabas4.jpg";
import bronce1 from "|/imagesSlide/bronce1.png";
import bronce2 from "|/imagesSlide/bronce2.jpg";
import bronce3 from "|/imagesSlide/bronce3.jpg";
import bronce4 from "|/imagesSlide/bronce4.jpg";
import cobre1 from "|/imagesSlide/cobre1.jpg";
import cobre2 from "|/imagesSlide/cobre2.jpg";
import cobre3 from "|/imagesSlide/cobre3.jpg";
import cobre4 from "|/imagesSlide/cobre4.jpg";
import cobre5 from "|/imagesSlide/cobre5.jpg";
import cobre6 from "|/imagesSlide/cobre6.jpg";
import raros1 from "|/imagesSlide/raros1.jpg";
import raros2 from "|/imagesSlide/raros2.jpg";
import raros3 from "|/imagesSlide/raros3.jpg";
import raros4 from "|/imagesSlide/raros4.jpg";
const imagenesRaros = [
  raros1,
  raros2,
  raros3,
  raros4
]
const imagenesCobre = [
  cobre1,
  cobre2,
  cobre3,
  cobre4
]
const imagenesBronce = [
  bronce1,
  bronce2,
  bronce3, 
  bronce4
]
const imagenesRebabas = [
  rebabas1,
  rebabas2,
  rebabas3,
  rebabas4
]
const imagenesChatarra = [
  chattara1,
  chattara2,
  chattara3,
  chattara4
]
const imagenesInoxidables = [
  inoxidables1,
  inoxidables2,
  inoxidables3,
  inoxidables4
]
const imagenesAluminio = [
  aluminio1,
  aluminio2,
  aluminio3,
  aluminio4
]
// const imageObjs = imagenesChatarra.map((image) => {
//   const img = new Image();
//   img.src = `../imagesSlide/${image}`;
//   return img;
// });

export const MaterialsContext = createContext();

export const useMaterials = () => {
  const context = useContext(MaterialsContext);
  if (!context) throw Error("useMaterials must used within a provider");
  return context;
};

export const MaterialProvider = ({ children }) => {
  const [materials, setMaterials] = useState([

    {
      nombre: "ALUMINIOS",
      icono: aluminios,
      descripcion: "Compra de Aluminio Tipos: Serie 5000, 380, 6063, macizo, delgado, 1100, perfil, bote, cable y litografía.",
      imagenes:imagenesAluminio
    },
    {
      nombre: "BRONCES",
      icono: bronces,
      descripcion: "Compra de Bronce Tipos: Amarillo, rojo, contaminado y al manganeso.",
      imagenes:imagenesBronce
    },
    {
      nombre: "COBRES",
      icono: cobres,
      descripcion: "Compra de Cobre Tipos: Cobre de primera, segunda, molidos y candy",
      imagenes:imagenesCobre
    },
    {
      nombre: "CHATARRA",
      icono: chatarra,
      descripcion: "Compra de Fierro Tipos: Pesado, placa y estructura, mixto y fierro vaciado",
      imagenes:imagenesChatarra
    },
    {
      nombre: "REBABAS",
      icono: rebabas,
      descripcion: "Compra de Rebaba Tipos: Rebaba de cobre, bronce, acero inoxidable y fierro.",
      imagenes:imagenesRebabas
    },
    {
      nombre: "METALES RAROS",
      icono: metalesR,
      descripcion: "Compra de Metales Raros Tipos: Carburo de tungsteno, estaño, niquel, zinc, titanio, etc.",
      imagenes:imagenesRaros
    },
    {
      nombre: "ACEROS INOXIDABLES",
      icono: acerosI,
      descripcion: "Compra de Acero Inoxidable Tipos: Serie 201, 301, 316, 316 L,hastelloy, inconel y monel.",
      imagenes:imagenesInoxidables
    }
    /*{
      nombre: "CARBURO",
      icono: acerosI,
      descripcion: "Compra de Carburo: Serie 201, 301, 316, 316 L,hastelloy, inconel y monel.",
      imagenes:imagenesInoxidables
    },
    {
      nombre: "ESTAÑO",
      icono: acerosI,
      descripcion: "Compra de Estaño: Serie 201, 301, 316, 316 L,hastelloy, inconel y monel.",
      imagenes:imagenesInoxidables
    }*/

  ]);
  return (
    <MaterialsContext.Provider
      value={{
        materials,
      }}
    >
      {children}
    </MaterialsContext.Provider>
  );
};
