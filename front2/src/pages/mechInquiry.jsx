// MechInquiry.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MechInquiry() {
  const location = useLocation();
  const formData = location.state || {}; // Obtenemos los datos enviados desde Inquiry.jsx

  return (
    <div className="mech-inquiry-container">
      <h2>Mechanic Inquiry Details</h2>
      <div>
        <h3>Issues Reported:</h3>
        <ul>
          {formData.issues && formData.issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>
        <h3>Description:</h3>
        <p>{formData.description}</p>
      </div>
    </div>
  );
}
