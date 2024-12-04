// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

// const CaseQrScanner = ({ onScan, onClose }) => {
//   const [cameraAccess, setCameraAccess] = useState(false); // To check if camera is accessible

//   const handleRequestCameraAccess = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         // Camera access granted
//         setCameraAccess(true); // Set camera access as true
//       })
//       .catch((err) => {
//         // Permission denied or an error occurred
//         alert("Camera access denied. Please check your browser settings and permissions.");
//         setCameraAccess(false); // Set camera access as false
//       });
//   };

//   useEffect(() => {
//     handleRequestCameraAccess(); // Request camera access when component mounts
//   }, []);

//   return (
//     <>
//       <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
//           <button
//             onClick={onClose}
//             className="absolute top-2 right-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors"
//           >
//             ✖ Close
//           </button>
//           {cameraAccess ? (
//             <BarcodeScannerComponent
//               width={400}
//               height={400}
//               onUpdate={(err, result) => {
//                 if (result) onScan(result.text); // Send scanned value to parent
//               }}
//             />
//           ) : (
//             <p className="text-gray-700">No camera access</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// // CaseQrScanner.propTypes = {
// //   onScan: PropTypes.func.isRequired,
// //   onClose: PropTypes.func.isRequired,
// // };

// export default CaseQrScanner;

import PropTypes from "prop-types";
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const CaseQrScanner = ({ onScan, onClose }) => {
  const [scanned, setScanned] = useState(false); // To prevent rescan

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors"
          >
            ✖ Close
          </button>

          <BarcodeScannerComponent
            width={400}
            height={400}
            onUpdate={(err, result) => {
              if (result && !scanned) {
                setScanned(true); // Prevent further scans
                onScan(result.text); // Send scanned value to parent
              }
            }}
          />

        </div>
      </div>
    </>
  );
};

CaseQrScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CaseQrScanner;
