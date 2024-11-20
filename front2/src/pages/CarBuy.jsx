import React from 'react';
import { useParams } from 'react-router-dom';

import CarDetails from '../components/CarDetails';
import CarPhotos from '../components/CarPhotos';
import CarView from '../components/CarView';

function CarBuy() {
  const { id } = useParams();
  console.log(id);
  return (
    <main className="flex overflow-hidden flex-col px-12 pt-8 pb-36 bg-neutral-100 max-md:px-5 max-md:pb-24">
      <div className="self-end w-full max-w-[1236px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <CarPhotos />
          <CarDetails />
          
        </div>
        <CarView/>
      </div>
    </main>
  );
}

export default CarBuy;