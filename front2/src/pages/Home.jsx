// Home.jsx
import React, { useState } from 'react';
import VehicleList from '../components/VehicleList';
import '../assets/css/home.css';

export default function Home() {
  // Estado para manejar cuántos vehículos se muestran en "Recommendation Cars"
  const [recommendationLimit, setRecommendationLimit] = useState(10);

  // Función para manejar el evento "See More"
  const handleSeeMore = () => {
    setRecommendationLimit(prevLimit => prevLimit + 10); // Incrementa el límite en 10 cada vez que se pulsa "See More"
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h2>Having Any Issue With Your Car?</h2>
        </div>
        <button className="invoice-button">My Invoices</button>
        <button className="mechanic-button">Contact Mechanic</button>
        <img className="hero-image" src="/assets/images/koenigsegg.png" alt="Car Hero" />
      </header>

      <section className="vehicle-section popular-vehicles">
        <div className="section-header">
          <h3>Popular Cars</h3>
          <button className="view-all-button">View All</button>
        </div>
        {/* Limitamos el número de vehículos mostrados a 5 */}
        <VehicleList start={0} limit={5} />
      </section>

      <section className="vehicle-section recommended-vehicles">
        <div className="section-header">
          <h3>Recommendation Car</h3>
        </div>
        {/* Mostramos los vehículos desde el índice 5 en adelante, con un límite que se puede incrementar */}
        <VehicleList start={5} limit={recommendationLimit} />
      </section>

      <footer className="load-more-section">
        {/* Botón para cargar más vehículos */}
        <button className="load-more-button" onClick={handleSeeMore}>Show more cars</button>
      </footer>
    </div>
  );
}
