import React from 'react';

function CarDetails() {
  const specs = [
    { label: 'Type Car', value: 'Sport' },
    { label: 'Steering', value: 'Manual' },
    { label: 'Capacity', value: '2 Person' },
    { label: 'Gasoline', value: '70L' },
  ];

  return (
    <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col px-6 pt-5 pb-8 mx-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start text-3xl font-bold tracking-tighter text-gray-900 max-md:max-w-full">
          <h2 className="mt-1">Koenigsegg Agera</h2>
        </div>
        <p className="mt-8 text-xl tracking-tight leading-10 text-slate-500 w-[498px] max-md:max-w-full">
          Agera has become the embodiment of Koenigsegg's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>
        <div className="flex gap-10 items-start self-start mt-16 text-xl tracking-tight max-md:mt-10 max-md:max-w-full">
          {specs.map((spec, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-4 items-start">
                <div className="text-slate-400 w-[92px]">{spec.label}</div>
                <div className="font-semibold text-right text-slate-500 w-[92px]">{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-16 w-full font-bold max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-3xl text-gray-900">80.000 €</div>
            <div className="mt-1 text-base text-slate-400">100.000 €</div>
          </div>
          <button className="px-5 py-2 text-base tracking-tight text-center text-white bg-blue-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;