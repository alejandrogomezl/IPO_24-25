import React from "react";
import NFCReader from "../components/NFCReader";
import PlateInput from "../components/PlateInput";
import { useNavigate } from "react-router-dom";

const CarIdentify = () => {
  const navigate = useNavigate();

  const handleUIDRead = (uid) => {
    console.log("NFC UID (from page):", uid);
    navigate(`/inquiry/${uid}`);
  };

  const handlePlateSubmit = (plate) => {
    console.log("Plate submitted:", plate);
    navigate(`/inquiry/${plate}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Car Identification
        </h1>
        <NFCReader onUIDRead={handleUIDRead} />
        <div className="mt-6">
          <PlateInput onPlateSubmit={handlePlateSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CarIdentify;
