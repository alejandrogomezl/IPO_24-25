import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import '@google/model-viewer';
import model3D from '../assets/models/car.glb';

function CarView({ vehicle }) {
  // Referencia al model-viewer para controlar el modo de pantalla completa
  const modelViewerRef = useRef(null);

  // Función para activar el modo de pantalla completa
  const handleFullscreen = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.requestFullscreen();
    }
  };

  return (
    <section className="flex flex-col items-center px-4 py-8 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="flex flex-col sm:flex-row max-w-6xl w-full bg-white rounded-xl shadow-md overflow-hidden p-8">
        {/* Información del coche */}
        <div className="flex flex-col w-full sm:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{vehicle.make} {vehicle.model}</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            This {vehicle.make} {vehicle.model} is a {vehicle.transmission} vehicle with a {vehicle.engine} engine and {vehicle.fuelType} fuel type.
          </p>
          <div className="grid grid-cols-2 gap-4 text-lg text-gray-500 mt-4">
            <div className="flex flex-col">
              <span className="text-gray-400">Capacity</span>
              <span className="font-semibold text-gray-900">{vehicle.capacity} Persons</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Fuel Type</span>
              <span className="font-semibold text-gray-900">{vehicle.fuelType}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Transmission</span>
              <span className="font-semibold text-gray-900">{vehicle.transmission}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">Engine</span>
              <span className="font-semibold text-gray-900">{vehicle.engine}</span>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <span className="text-lg text-gray-400 line-through">{(vehicle.price * 1.2).toFixed(2)} €</span>
            <span className="text-3xl font-bold text-gray-900">{vehicle.price} €</span>
          </div>
        </div>

        {/* Imagen del coche y modelo 3D */}
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 mt-8 sm:mt-0">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl font-bold text-gray-900">3D Model</h3>
            <div className="flex space-x-2">
              {/* Botón para activar pantalla completa */}
              <button
                onClick={handleFullscreen}
                className="text-gray-400 hover:text-gray-600 bg-white bg-opacity-70 rounded-full p-2"
              >
                <FontAwesomeIcon icon={faExpandAlt} className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Model Viewer */}
          <model-viewer
            ref={modelViewerRef}
            // src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
            src = {model3D}
            alt={`${vehicle.make} ${vehicle.model} 3D model`}
            ar
            ar-modes="scene-viewer quick-look webxr"
            ar-scale="auto"
            camera-controls
            auto-rotate
            environment-image="neutral"
            className="w-full max-w-md"
          ></model-viewer>
        </div>
      </div>
    </section>
  );
}

export default CarView;
