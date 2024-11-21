import React from 'react';

function CarDetails({ vehicle }) {
  const specs = [
    { label: 'Transmission', value: vehicle.transmission },
    { label: 'Engine', value: vehicle.engine },
    { label: 'Capacity', value: `${vehicle.capacity} Persons` },
    { label: 'Fuel Type', value: vehicle.fuelType },
  ];

  return (
    <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col px-6 pt-5 pb-8 mx-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-3xl font-bold tracking-tighter text-gray-900 max-md:max-w-full">
          <h2 className="mt-1">{vehicle.make} {vehicle.model}</h2>
        </div>
        <p className="mt-8 text-xl tracking-tight leading-10 text-slate-500 w-[498px] max-md:max-w-full">
          This {vehicle.make} {vehicle.model} is a {vehicle.transmission} vehicle with a {vehicle.engine} engine.
        </p>
        <div className="grid grid-cols-2 gap-y-4 mt-16 text-xl tracking-tight max-md:mt-10 max-md:max-w-full">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center">
              <div className="text-slate-400">{spec.label}:</div>
              <div className="ml-2 font-semibold text-gray-500">{spec.value}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-16 w-full font-bold max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <div>
              <span className="text-lg text-gray-400 line-through">{(vehicle.price * 1.2).toFixed(2)} €</span>
            </div>
            <div className="text-3xl text-gray-900">{vehicle.price} €</div>
          </div>
          <button className="px-5 py-2 text-base tracking-tight text-center text-white bg-blue-600 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
