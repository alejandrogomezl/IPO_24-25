import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(""); // Estado global para el filtro

  // Inyección del SVG al cargar
  useEffect(() => {
    const injectSVG = async () => {
      const response = await fetch('/filters/rgblind.svg');
      const svgText = await response.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = svgText;
      document.body.insertBefore(tempDiv.firstChild, document.body.firstChild);
    };
    injectSVG();
  }, []);

  // Aplicar el filtro a nivel de `body`
  useEffect(() => {
    document.body.className = filter;
  }, [filter]);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
