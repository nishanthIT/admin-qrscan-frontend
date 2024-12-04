
// import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import useProductSearch from "../hooks/useProductSearch";

// const MainComponent = () => {
//   const [data, setData] = useState("Not Found");
//   const [result, error, loading, searchApi] = useProductSearch();
//   const navigate = useNavigate();

//   // Handle the scan result and API call
//   const handleScan = async (err, scanResult) => {
//     if (scanResult) {
//       setData(scanResult.text); // Update the scanned data
//       // Trigger search API call with the scanned data
//       await searchApi(scanResult.text);
//     } else {
//       setData("Not Found"); // Update if nothing is scanned
//     }
//   };

//   // Effect to handle navigation once result is fetched
//   useEffect(() => {
//     if (!loading && result) {
//       navigate("/product-details", {
//         state: { product: result.product, data, category: result.category },
//       });
//     } else if (!loading && !result && data !== "Not Found") {
//       navigate("/product-details", { state: { product: null, data } });
//     }
//   }, [loading, result, data, navigate]);

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//         Scanner
//       </h1>

//       {/* Replace the static image with a live scanner */}
//       <div className="scanner-container relative">
//         <BarcodeScannerComponent
//           width={500}
//           height={500}
//           onUpdate={handleScan}
//           className="rounded-lg shadow-lg"
//         />
//         {loading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
//             <div className="spinner border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
//             <p className="text-lg text-gray-700 mt-4 ml-4">
//               Loading product details...
//             </p>
//           </div>
//         )}
//         {error && <p className="text-red-500">{error}</p>}
//       </div>

//       {/* Scanned result text */}
//       <p className="text-lg text-gray-700 mt-4">{data}</p>

//       {/* Button to add a new shop */}
//       <button
//         onClick={() => navigate("/add-shop")}
//         className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-green-600 transition-colors"
//       >
//         ➕ Add Shop
//       </button>
//     </div>
//   );
// };

// export default MainComponent;




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import useProductSearch from "../hooks/useProductSearch";

const MainComponent = () => {
  const [data, setData] = useState("Not Found");
  const [scanned, setScanned] = useState(false); // Add a flag to prevent rescan
  const [result, error, loading, searchApi] = useProductSearch();
  const navigate = useNavigate();

  // Handle the scan result and API call
  const handleScan = async (err, scanResult) => {
    if (scanResult && !scanned) { // Prevent further scans after success
      setScanned(true); // Mark as scanned to prevent further updates
      setData(scanResult.text); // Update the scanned data
      await searchApi(scanResult.text); // Trigger search API call with the scanned data
    }
  };

  // Effect to handle navigation once the result is fetched
  useEffect(() => {
    if (!loading && result) {
      // If the result is found, navigate to product details
      navigate("/product-details", {
        state: { product: result.product, data, category: result.category },
      });
    } else if (!loading && !result && data !== "Not Found") {
      // If result is not found, but we have scanned data, navigate with null product
      navigate("/product-details", { state: { product: null, data } });
    }
  }, [loading, result, data, navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Scanner
      </h1>

      {/* Replace the static image with a live scanner */}
      <div className="scanner-container relative">
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={handleScan} // Call the scan handler
          className="rounded-lg shadow-lg"
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
            <div className="spinner border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            <p className="text-lg text-gray-700 mt-4 ml-4">
              Loading product details...
            </p>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {/* Scanned result text */}
      <p className="text-lg text-gray-700 mt-4">{data}</p>

      {/* Button to add a new shop */}
      <button
        onClick={() => navigate("/add-shop")}
        className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-green-600 transition-colors"
      >
        ➕ Add Shop
      </button>
    </div>
  );
};

export default MainComponent;


