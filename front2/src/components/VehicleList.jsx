// VehicleList.jsx
import React, { useEffect, useState } from 'react';
import CarCard from './carCard';
import '../assets/css/vehicleList.css';  // Asegúrate de agregar un archivo CSS específico para la lista

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/vehicles');
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="vehicle-list">
      {vehicles.map(vehicle => (
        <CarCard key={vehicle._id} vehicle={vehicle} />
      ))}
    </div>
  );
}

export default VehicleList;
