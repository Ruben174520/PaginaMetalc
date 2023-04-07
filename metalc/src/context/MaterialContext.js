import { useContext, createContext, useState } from "react";

import acerosI from "|/materiales/aceroinoxidable.png";
import aluminios from "|/materiales/aluminio.png";
import bronces from "|/materiales/bronce.png";
import cobres from "|/materiales/cobre.png";
import chatarra from "|/materiales/chatarra.png";
import rebabas from "|/materiales/rebabas.png";
import metalesR from "|/materiales/metalesraros.png";

export const MaterialsContext = createContext();

export const useMaterials = () => {
  const context = useContext(MaterialsContext);
  if (!context) throw Error("useMaterials must used within a provider");
  return context;
};

export const MaterialProvider = ({ children }) => {
  const [materials, setMaterials] = useState([
    {
      nombre: "Aceros Inoxidables",
      icono: acerosI,
    },
    {
      nombre: "Alumninos",
      icono: aluminios,
    },
    {
      nombre: "Bronces",
      icono: bronces,
    },
    {
      nombre: "Cobres",
      icono: cobres,
    },
    {
      nombre: "Chatarra",
      icono: chatarra,
    },
    {
      nombre: "Rebabas",
      icono: rebabas,
    },
    {
      nombre: "Metales Raros",
      icono: metalesR,
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
