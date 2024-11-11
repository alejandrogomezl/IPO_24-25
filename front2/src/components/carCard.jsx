// CarCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styleguide.css';
import '../assets/css/style.css';

function CarCard({ vehicle }) {
  return (
    <div className="catalog">
      <div className="car-name">
        <div className="text-wrapper">{vehicle.make} {vehicle.model}</div>
        <div className="div">Sport</div>
      </div>
      <img className="like" src="/assets/images/like.svg" alt="Like" />
      <div className="price">
        <div className="text-wrapper-2">{vehicle.price} €</div>
      </div>
      <Link to={`/vehicles/${vehicle._id}`} className="button-rental">
        <div className="text-wrapper-3">Rent</div>
      </Link>
      <div className="spesification">
        <div className="div-2">
          <img className="img" src="/assets/images/gas-station.svg" alt="Fuel Type" />
          <div className="text-wrapper-4">{vehicle.fuelCapacity}L</div>
        </div>
        <div className="car">
          <div className="img">
            <div className="overlap-group">
              <div className="circle"></div>
              <img className="circle-2" src="/assets/images/circle-2.svg" alt="Circle" />
              <div className="circle-3"></div>
              <div className="rectangle"></div>
              <div className="rectangle-2"></div>
              <div className="rectangle-3"></div>
            </div>
          </div>
          <div className="text-wrapper-5">{vehicle.transmission}</div>
        </div>
        <div className="div-2">
          <img className="img" src="/assets/images/profile-2user.svg" alt="Capacity" />
          <div className="text-wrapper-6">{vehicle.capacity} People</div>
        </div>
      </div>
      <div className="overlap">
        <div className="shadow"></div>
        <img className="car-2" src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
      </div>
    </div>
  );
}

export default CarCard;
