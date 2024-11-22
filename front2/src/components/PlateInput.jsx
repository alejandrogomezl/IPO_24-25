import React, { useState, useRef } from "react";
import Tesseract from "tesseract.js";
import { FaCamera } from "react-icons/fa";

const PlateInput = ({ onPlateSubmit }) => {
  const [plate, setPlate] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false); // Estado para mostrar/ocultar la cámara
  const videoRef = useRef(null); // Referencia al elemento video

  // Inicia la cámara trasera al abrir la ventana
  const handleOpenCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } }, // Solicita cámara trasera
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Camera access error:", error);
      alert("Unable to access the camera. Please check permissions or device compatibility.");
      setShowCamera(false);
    }
  };

  // Captura una imagen desde el video y procesa el texto
  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const image = canvas.toDataURL("image/png");
      processImage(image);

      // Detenemos la cámara
      const stream = videoRef.current.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      setShowCamera(false);
    }
  };

  // Procesa la imagen capturada para extraer texto
  const processImage = (image) => {
    setLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (info) => console.log(info), // Log opcional
    })
      .then(({ data: { text } }) => {
        if (text.trim()) {
          setPlate(text.trim()); // Muestra directamente el texto detectado
          onPlateSubmit(text.trim());
        } else {
          alert("No text detected. Please try again.");
        }
      })
      .catch((err) => console.error("Tesseract error:", err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plate) {
      onPlateSubmit(plate);
      setPlate("");
    } else {
      alert("Introduce a plate or use the camera.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6">
      <label htmlFor="plate" className="text-lg font-semibold text-gray-700 mb-2">
        Enter Plate:
      </label>
      <div className="flex items-center space-x-2">
        <input
          id="plate"
          type="text"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          className="border rounded-md px-4 py-2 w-64 text-gray-700"
          placeholder="Detected plate will appear here"
        />
        <button
          type="button"
          onClick={handleOpenCamera}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          title="Capture Plate"
        >
          <FaCamera className="text-gray-700" size={20} />
        </button>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Submit
      </button>
      {loading && <p className="mt-4 text-gray-500">Processing image...</p>}

      {/* Ventana de cámara */}
      {showCamera && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center">
            <video ref={videoRef} className="w-80 h-60 bg-black mb-4 rounded-md" />
            <div className="flex space-x-4">
              <button
                onClick={handleCapture}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Capture
              </button>
              <button
                onClick={() => setShowCamera(false)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default PlateInput;
