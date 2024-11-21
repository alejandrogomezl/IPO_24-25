import React, { useState } from 'react';

function Confirmation({ prevStep, setConfirmation, handleSubmit }) {
  const [formData, setFormData] = useState({
    agreeMarketing: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setConfirmation(formData); // Guarda los datos en el estado principal
    handleSubmit(); // Realiza el console.log
  };

  return (
    <form onSubmit={handleFinalSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold">Confirmation</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeMarketing"
            checked={formData.agreeMarketing}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">I agree with marketing emails.</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label className="text-gray-700">I agree with terms and conditions.</label>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Buy Now
        </button>
      </div>
    </form>
  );
}

export default Confirmation;
