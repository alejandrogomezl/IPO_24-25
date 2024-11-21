import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success({ name }) {
  const navigate = useNavigate(); // Hook para redirección

  const handleGoHome = () => {
    navigate('/'); // Redirige al inicio
  };

  return (
    <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 text-center space-y-6 animate-fadeIn">
      {/* Icono de éxito con animación */}
      <div className="flex justify-center items-center bg-green-100 rounded-full w-24 h-24 mx-auto animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-12 h-12 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Mensaje de éxito */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 animate-slideIn">
          Congrats {name} for your purchase!
        </h1>
        <p className="text-gray-500">Thank you for trusting us.</p>
      </div>

      {/* Botón para volver al inicio */}
      <button
        onClick={handleGoHome}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Go Home
      </button>
    </div>
  );
}

export default Success;
