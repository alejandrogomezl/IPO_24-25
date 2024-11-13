import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';


import photo from '../assets/img/koennisegg.png';

function CarView() {
  return (
    <section className="flex flex-col items-center px-4 py-8 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="flex flex-col sm:flex-row max-w-6xl w-full bg-white rounded-xl shadow-md overflow-hidden p-8">
        {/* Información del coche */}
        <div className="flex flex-col w-full sm:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Koenigsegg Agera</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Agera has become the embodiment of Koenigsegg's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </p>
          <div className="grid grid-cols-2 gap-4 text-lg text-gray-500 mt-4">
            <div className="flex flex-col">
              <span className="text-gray-400">Capacity</span>
              <span className="font-semibold text-gray-900">2 Person</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Type Car</span>
              <span className="font-semibold text-gray-900">Sport</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Steering</span>
              <span className="font-semibold text-gray-900">Manual</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Engine</span>
              <span className="font-semibold text-gray-900">V8</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Gasoline</span>
              <span className="font-semibold text-gray-900">70L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Info1</span>
              <span className="font-semibold text-gray-900">----</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Info2</span>
              <span className="font-semibold text-gray-900">----</span>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <span className="text-3xl font-bold text-gray-900">80.000 €</span>
            <span className="text-lg text-gray-400 line-through">100.000 €</span>
          </div>
        </div>

        {/* Imagen del coche y modelo 3D */}
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 mt-8 sm:mt-0">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl font-bold text-gray-900">3D Model</h3>
            <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-gray-600 bg-white bg-opacity-70 rounded-full p-2">
                <FontAwesomeIcon icon={faSyncAlt} className="h-5 w-5" /> {/* Icono de rotación */}
            </button>
            <button className="text-gray-400 hover:text-gray-600 bg-white bg-opacity-70 rounded-full p-2">
                <FontAwesomeIcon icon={faExpandAlt} className="h-5 w-5" /> {/* Icono de pantalla completa */}
            </button>
            </div>
          </div>
          <img
            loading="lazy"
            src={photo}
            alt="Koenigsegg Agera"
            className="w-full max-w-md mt-4 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default CarView;
