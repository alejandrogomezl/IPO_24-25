// Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VehicleList from '../components/VehicleList';
import '../assets/css/home.css';
import Koenissegg from '../assets/img/koenissegg.png';
import NewVehicle from '../components/NewVehicle'

export default function MechMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [recommendationLimit, setRecommendationLimit] = useState(10);

  const handleSeeMore = () => {
    setRecommendationLimit(prevLimit => prevLimit + 10); // Incrementa el límite en 10 cada vez que se pulsa "See More"
  };

  useEffect(() => {
    // Si se recibe el estado "inquirySent" desde la navegación, mostrar la notificación
    if (location.state?.inquirySent) {
      setShowNotification(true);
      // Ocultar la notificación después de 3 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }, [location.state]);

  // Función para manejar el clic en "Contact Mechanic"
  const handleContactMechanic = () => {
    navigate('/inquiry');
  };

  return (
    <div className="home-container">
      {showNotification && (
        <div className="notification">
          Inquiry has been sent successfully!
        </div>
      )}
      <header className="hero-section">
        <div className="hero-content">
          <h2>Having Any Issue With Your Car?</h2>
        </div>
        <button className="invoice-button">My Invoices</button>
        <button className="mechanic-button" onClick={handleContactMechanic}>Contact Mechanic</button>
        <img className="hero-image" src={Koenissegg} alt="Car Hero" />
      </header>

      <section className="vehicle-section popular-vehicles">
        <div className="section-header">
          <h3>Popular Cars</h3>
          <button className="view-all-button">View All</button>
        </div>
        <NewVehicle/>
        <VehicleList start={0} limit={5} />
      </section>

      <section className="vehicle-section recommended-vehicles">
        <div className="section-header">
          <h3>Recommendation Car</h3>
        </div>
        <VehicleList start={5} limit={recommendationLimit} />
      </section>

      <footer className="load-more-section">
        <button className="load-more-button" onClick={handleSeeMore}>Show more cars</button>
      </footer>
    </div>
  );
}