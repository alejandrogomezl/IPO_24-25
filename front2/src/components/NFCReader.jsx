import React, { useState } from "react";

const NFCReader = ({ onUIDRead }) => {
  const [status, setStatus] = useState("Tap the button to start scanning NFC tags.");
  const [error, setError] = useState(null);

  const startNFCScan = async () => {
    if ("NDEFReader" in window) {
      // eslint-disable-next-line no-undef
      const ndef = new NDEFReader();
      try {
        setError(null);
        setStatus("Bring your NFC tag close to your phone...");
        await ndef.scan();

        ndef.addEventListener("reading", (event) => {
          const { serialNumber } = event;
          console.log("NFC UID (inside component):", serialNumber);
          setStatus("NFC tag successfully read!");
          onUIDRead(serialNumber); // Llama al callback con el UID
        });
      } catch (err) {
        console.error("Error during NFC scan:", err);
        setError("Failed to read NFC tag. Make sure NFC is enabled on your device.");
      }
    } else {
      setError("Your browser does not support Web NFC API.");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">NFC Reader</h1>
      <p className="text-gray-500 mb-6">{status}</p>
      <button
        onClick={startNFCScan}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Start NFC Scan
      </button>
      {error && (
        <div className="mt-6 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default NFCReader;
