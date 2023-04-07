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
      nombre: "ACEROS INOXIDABLES",
      icono: acerosI,
    },
    {
      nombre: "ALUMINIOS",
      icono: aluminios,
    },
    {
      nombre: "BRONCES",
      icono: bronces,
    },
    {
      nombre: "COBRES",
      icono: cobres,
    },
    {
      nombre: "CHATARRA",
      icono: chatarra,
    },
    {
      nombre: "REBABAS",
      icono: rebabas,
    },
    {
      nombre: "METALES RAROS",
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
