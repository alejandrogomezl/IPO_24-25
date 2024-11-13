// CarCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import gas from '../assets/img/gas-station.svg';
import transmission from '../assets/img/Car.svg';
import cap from '../assets/img/profile-2user.svg';

function CarCard({ vehicle }) {
  return (
    <div className="catalog">
      <div className="car-name">
        <div className="text-wrapper">{vehicle.make} {vehicle.model}</div>
        
      </div>
      <img className="car-2" src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
      
      <div className="spesification">
        <div>
          <img className="img" src={gas} alt="Fuel Type" />
          <span>{vehicle.fuelCapacity}L</span>
        </div>
        <div>
          <img className="img" src={transmission} alt="Transmission" />
          <span>{vehicle.transmission}</span>
        </div>
        <div>
          <img className="img" src={cap} alt="Capacity" />
          <span>{vehicle.capacity} People</span>
        </div>
      </div>
      
      <div className="price-and-button">
        <div className="price">{vehicle.price} €</div>
        <Link to={`/vehicles/${vehicle._id}`}>
          <button className="button-rental">Rent</button>
        </Link>
      </div>
    </div>
  );
}

export default CarCard;

