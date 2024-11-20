import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../assets/css/style.css';
import gas from '../assets/img/gas-station.svg';
import transmission from '../assets/img/Car.svg';
import cap from '../assets/img/profile-2user.svg';

function NewVehicle() {
  const navigate = useNavigate(); // Hook para navegación

  const handleAddVehicleClick = () => {
    navigate('/add-car'); // Navegar a la página de añadir coche
  };

  return (
    <div className="catalog">
      <div className="car-name">
        <div className="text-wrapper">Añadir Coche</div>
      </div>
      <button className="button-rental" onClick={handleAddVehicleClick}>
        Add Vehicle
      </button>
      <div className="spesification">
        <div>
          <img className="img" src={gas} alt="Fuel Icon" />
          <span>___</span>
        </div>
        <div>
          <img className="img" src={transmission} alt="Transmission Icon" />
          <span>___</span>
        </div>
        <div>
          <img className="img" src={cap} alt="Capacity Icon" />
          <span>___</span>
        </div>
      </div>
      <div className="price-and-button">
        <div className="price">____€</div>
      </div>
    </div>
  );
}

export default NewVehicle;
