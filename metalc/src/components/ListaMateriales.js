import React from "react";

export const ListaMateriales = ({ material }) => {
  return (
    <div className="w-auto p-3 m-3
     cursor-pointer border-white
     font-bold text-gray-600
      hover:border-b-emerald-600 border-4">
      <h2>{material.nombre}</h2>
    </div>
  );
};
