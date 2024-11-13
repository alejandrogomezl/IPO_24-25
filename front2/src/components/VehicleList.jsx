// VehicleList.jsx
import React, { useEffect, useState } from 'react';
import CarCard from './carCard';

function VehicleList({ start = 0, limit }) {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/vehicles'); // Asegúrate de que el backend está corriendo en esta URL
        const data = await response.json();
        setVehicles(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };

    fetchVehicles();
  }, []);

  // Filtrar los vehículos según los parámetros start y limit
  const displayedVehicles = vehicles.slice(start, limit ? start + limit : vehicles.length);

  return (
    <div className="vehicle-list">
      {displayedVehicles.map(vehicle => (
        <CarCard key={vehicle._id} vehicle={vehicle} />
      ))}
    </div>
  );
}

export default VehicleList;
