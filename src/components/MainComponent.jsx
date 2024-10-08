import { useState } from "react";
import Image from "../assets/image.png";
import QrScanner from "./QrScanner";

const MainComponent = () => {
  const [data, setData] = useState("Not Found");
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (scannedData) => {
    setData(scannedData);
    setShowScanner(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">QR Code Scanner</h1>

      {/* Display scanned QR code or placeholder */}
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <img
          src={Image}
          alt="Scanned QR Code"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg mb-4"
        />
      </div>

      {/* Button to trigger the QR scanner */}
      <button
        onClick={() => setShowScanner(true)}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
      >
        📷 Scan QR Code
      </button>

      {/* Conditionally render the QR scanner */}
      {showScanner && (
        <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
          <QrScanner onScan={handleScan} />
        </div>
      )}

      {/* Display scanned data */}
      <p className="text-lg text-gray-700 mt-6">{data}</p>
    </div>
  );
};

export default MainComponent;
