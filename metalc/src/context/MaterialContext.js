import { useContext, createContext, useState } from "react";

import acerosI from "|/materiales/aceroinoxidable.png";
import aluminios from "|/materiales/aluminio.png";
import bronces from "|/materiales/bronce.png";
import cobres from "|/materiales/cobre.png";
import chatarra from "|/materiales/chatarra.png";
import rebabas from "|/materiales/rebabas.png";
import metalesR from "|/materiales/metalesraros.png";

import chattara1 from "|/imagesSlide/chatarra1.png";
import chattara2 from "|/imagesSlide/chatarra2.png";
import chattara3 from "|/imagesSlide/chatarra3.png";
import chattara4 from "|/imagesSlide/chatarra4.png";
import inoxidables1 from "|/imagesSlide/inoxidables1.png";
import inoxidables2 from "|/imagesSlide/inoxidables2.png";
import inoxidables3 from "|/imagesSlide/inoxidables3.png";
import inoxidables4 from "|/imagesSlide/inoxidables4.png";
import aluminio1 from "|/imagesSlide/aluminio1.png";
import aluminio2 from "|/imagesSlide/aluminio2.png";
import aluminio3 from "|/imagesSlide/aluminio3.png";
import aluminio4 from "|/imagesSlide/aluminio4.jpg";

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
      nombre: "ACEROS INOXIDABLES",
      icono: acerosI,
      descripcion: "Compra de Acero Inoxidable Tipos: Serie 201, 301, 316, 316 L,hastelloy, inconel y monel.",
      imagenes:imagenesInoxidables
    },
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
      imagenes:imagenesChatarra
    },
    {
      nombre: "COBRES",
      icono: cobres,
      descripcion: "Compra de Cobre Tipos: Cobre de primera, segunda, molidos y candy",
      imagenes:imagenesChatarra
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
      imagenes:imagenesChatarra
    },
    {
      nombre: "METALES RAROS",
      icono: metalesR,
      descripcion: "Compra de Metales Raros Tipos: Carburo de tungsteno, estaño, niquel, zinc, titanio, etc.",
      imagenes:imagenesChatarra
    },
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
