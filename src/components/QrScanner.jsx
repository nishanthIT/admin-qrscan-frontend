import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const QrScanner = ({ onScan, onClose }) => {
  const [scannerVisible, setScannerVisible] = useState(true); // Show scanner by default
  const [cameraAccess, setCameraAccess] = useState(false); // To check if camera is accessible

  const handleCloseScanner = () => {
    setScannerVisible(false);
    onClose(); // Notify parent to reset scanner state
  };

  const handleRequestCameraAccess = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Camera access granted
        console.log("Camera access granted");
        setCameraAccess(true); // Set camera access as true
      })
      .catch((err) => {
        // Permission denied or an error occurred
        console.error("Camera access denied:", err);
        alert("Camera access denied. Please check your browser settings and permissions.");
        setCameraAccess(false); // Set camera access as false
      });
  };

  useEffect(() => {
    handleRequestCameraAccess(); // Request camera access when component mounts
  }, []);

  return (
    <>
      {scannerVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            <button
              onClick={handleCloseScanner}
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors"
            >
              ✖ Close
            </button>

            {cameraAccess ? (
              // QR Code scanner component
              <BarcodeScannerComponent
                width={400}
                height={400}
                onUpdate={(err, result) => {
                  if (result) {
                    onScan(result.text); // Pass scanned result to parent
                    setScannerVisible(false); // Close the scanner on successful scan
                  }
                }}
              />
            ) : (
              <div>
                <p className="text-red-500">Camera access is required to use the scanner.</p>
                <button
                  onClick={handleRequestCameraAccess}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Allow Camera Access
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// PropTypes validation
QrScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QrScanner;
