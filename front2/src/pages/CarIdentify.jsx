import React from "react";
import NFCReader from "../components/NFCReader";
import PlateInput from "../components/PlateInput";

const CarIdentify = () => {
  const handleUIDRead = (uid) => {
    console.log("NFC UID (from page):", uid);
  };

  const handlePlateSubmit = (plate) => {
    console.log("Plate submitted:", plate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          NFC Reader and Plate Input
        </h1>
        <NFCReader onUIDRead={handleUIDRead} />
        <PlateInput onPlateSubmit={handlePlateSubmit} />
      </div>
    </div>
  );
};

export default CarIdentify;
