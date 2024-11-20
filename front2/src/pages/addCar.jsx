import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/addCar.css';

export default function AddCar() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    price: '',
    fuelType: '',
    transmission: '',
    capacity: '',
    motorType: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Estado para mostrar el aviso de éxito
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3000/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add car. Please try again.');
      }

      // Mostrar el mensaje de éxito
      setSuccess(true);

      // Redirigir después de 3 segundos
      setTimeout(() => {
        navigate('/mech-main');
      }, 3000);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-car-container">
      <h2>Add New Car</h2>
      {error && <p className="error">{error}</p>}
      {success && <div className="success-container">Car added successfully! Redirecting...</div>}
      <form onSubmit={handleSubmit} className="add-car-form">
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (€)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            required
          >
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="transmission">Transmission</label>
          <select
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
            required
          >
            <option value="">Select Transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>
        <div className="form-group-row">
          <div className="separator">
            <label htmlFor="capacity">Capacity (People)</label>
            <div className="form-group-half">
              <input
                type="number"
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="separator">
            <label htmlFor="motorType">Motor Type</label>
            <div className="form-group-half">
              <input
                type="text"
                id="motorType"
                name="motorType"
                value={formData.motorType}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Adding...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
}
