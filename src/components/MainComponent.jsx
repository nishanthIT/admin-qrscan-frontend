import { useState } from "react";
import Image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import QrScanner from "./QrScanner";
import products from "../data/products.json"; // Importing products data

const MainComponent = () => {
  const [data, setData] = useState("Not Found");
  const [showScanner, setShowScanner] = useState(false); // Control scanner visibility
  const navigate = useNavigate(); // To navigate to the new page

  const handleScan = (scannedData) => {
    setData(scannedData); // Update data when QR is scanned
    setShowScanner(false); // Hide scanner after scan
    console.log(typeof data);

    // Compare the scanned barcode ID with the products.json file
    const product = products.find((item) => item.id == data);

    if (product) {
      // Navigate to the new page and pass the product details
      navigate("/product-details", { state: { product } });
    } else {
      alert("Product not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        QR Code Scanner
      </h1>

      <div className="scanner-placeholder" style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          No QR code scanned yet
        </p>
        <img
          src={Image}
          alt="Scanned QR Code"
          className="image-placeholder"
          style={{ maxWidth: "300px", height: "auto" }}
        />
      </div>

      <button
        onClick={() => setShowScanner(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600 transition-colors"
      >
        📷 Scan QR Code
      </button>

      {showScanner && <QrScanner onScan={handleScan} />}

      <p className="text-lg text-gray-700 mt-4">{data}</p>
    </div>
  );
};

export default MainComponent;
