import React from 'react';
import '../assets/css/style.css';
import gas from '../assets/img/gas-station.svg';
import transmission from '../assets/img/Car.svg';
import cap from '../assets/img/profile-2user.svg';

function NewVehicle() {
  return (
    <div className="catalog">
      <div className="car-name">
        <div className="text-wrapper">añadir coche</div>
      </div>
      <button className="button-rental">Add Vehicle</button>
      <div className="spesification">
        <div>
          <img className="img" src={gas} />
          <span>___</span>
        </div>
        <div>
          <img className="img" src={transmission} alt=" " />
          <span>___</span>
        </div>
        <div>
          <img className="img" src={cap} alt=" " />
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
