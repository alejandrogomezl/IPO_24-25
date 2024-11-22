import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext"; // Importar el contexto

export default function ColorBlindnessFilter() {
  const { filter, setFilter } = useContext(FilterContext); // Usar el contexto

  const applyFilter = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <h3>Color Blindness Filter</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => applyFilter('filter-protanopia')}>Protanopia</button>
        <button onClick={() => applyFilter('filter-deuteranopia')}>Deuteranopia</button>
        <button onClick={() => applyFilter('')}>Normal</button>
      </div>
    </div>
  );
}
