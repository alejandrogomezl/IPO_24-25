// Inquiry.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/inquiry.css';

export default function Inquiry() {
  const [issues, setIssues] = useState([]);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setIssues((prevIssues) => {
      if (checked) {
        return [...prevIssues, name];
      } else {
        return prevIssues.filter((issue) => issue !== name);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navegar a Home.jsx con un estado indicando que se envió la solicitud
    navigate('/', { state: { inquirySent: true } });
  };

  return (
    <div className="inquiry-container">
      <h2>New Inquiry</h2>
      <p>Mark what is happening to your car.</p>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <div className="inquiry-options">
          <label>
            <input type="checkbox" name="Oil Change" onChange={handleCheckboxChange} /> Oil Change
          </label>
          <label>
            <input type="checkbox" name="Tire Change" onChange={handleCheckboxChange} /> Tire Change
          </label>
          <label>
            <input type="checkbox" name="Indicator Lamp" onChange={handleCheckboxChange} /> Indicator Lamp
          </label>
          <label>
            <input type="checkbox" name="Filter Change" onChange={handleCheckboxChange} /> Filter Change
          </label>
          <label>
            <input type="checkbox" name="General Check-up" onChange={handleCheckboxChange} /> General Check-up
          </label>
          <label>
            <input type="checkbox" name="Other" onChange={handleCheckboxChange} /> Other
          </label>
        </div>
        <textarea
          className="inquiry-textarea"
          placeholder="Describe what is happening"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="inquiry-submit-button">Submit</button>
      </form>
    </div>
  );
}
