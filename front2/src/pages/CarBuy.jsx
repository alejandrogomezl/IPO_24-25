import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CarDetails from '../components/CarDetails';
import CarPhotos from '../components/CarPhotos';
import CarView from '../components/CarView';

function CarBuy() {
  const { id } = useParams();
  console.log('id:', id);
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/vehicles/${id}`);
        const data = await response.json();
        setVehicle(data);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return (
      <main className="flex justify-center items-center h-screen bg-neutral-100">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="flex justify-center overflow-hidden flex-col items-center px-6 pt-8 pb-36 bg-neutral-100 max-md:px-4 max-md:pb-24">
      <div className="w-full max-w-[1236px] max-md:max-w-full">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex gap-5 w-full max-md:flex-col">
            <CarPhotos image={vehicle.image} />
            <CarDetails vehicle={vehicle} />
          </div>
          <CarView vehicle={vehicle} />
        </div>
      </div>
    </main>
  );
}

export default CarBuy;
