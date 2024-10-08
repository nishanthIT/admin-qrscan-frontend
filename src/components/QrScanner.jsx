import { useState } from "react";
import PropTypes from "prop-types";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const QrScanner = ({ onScan }) => {
  const [scannerVisible, setScannerVisible] = useState(true);

  const handleCloseScanner = () => {
    setScannerVisible(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
        <button
          onClick={handleCloseScanner}
          className="absolute top-2 right-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors"
        >
          ✖ Close
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Scan QR Code
        </h2>

        {/* QR Code scanner component */}
        {scannerVisible && (
          <BarcodeScannerComponent
            width={400}
            height={400}
            onUpdate={(err, result) => {
              if (result) {
                onScan(result.text);
                setScannerVisible(false); // Close the scanner on successful scan
              }
            }}
          />
        )}

        {/* Placeholder text if no scanner detected */}
        {!scannerVisible && (
          <p className="text-gray-600 text-lg text-center">
            No QR code detected. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

// PropTypes validation for onScan
QrScanner.propTypes = {
  onScan: PropTypes.func.isRequired, // Ensure onScan is passed as a function
};

export default QrScanner;
