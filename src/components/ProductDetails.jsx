

// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import ShopDetails from "./ShopDetails"; // Ensure this path is correct
// import axios from "axios"; // Import axios if you want to use it later

// function ProductDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product, data, category } = location.state || {}; // Product and category from the route

//   const [quantity, setQuantity] = useState("");
//   const [quantityType, setQuantityType] = useState("ml");
//   const [taxType, setTaxType] = useState("20%");
//   const [shops, setShops] = useState([]);
//   const [imageFile, setImageFile] = useState(null);
//   const [newProductDetails, setNewProductDetails] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     category: "",
//   });
//   const [loading, setLoading] = useState(false); // State for loading spinner

//   const handleQuantityTypeChange = (event) => setQuantityType(event.target.value);
//   const handleTaxTypeChange = (event) => setTaxType(event.target.value);
//   const handleQuantityChange = (event) => setQuantity(event.target.value);
//   const handleImageUpload = (event) => setImageFile(event.target.files[0]);
//   const handleProductDetailChange = (event) => {
//     const { name, value } = event.target;
//     setNewProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleShopsAdded = async (addedShops) => {
//     setLoading(true); // Set loading to true
//     setShops(addedShops);

//     // Read image as base64
//     const convertToBase64 = (file) => {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//       });
//     };

//     let imageBase64 = null;
//     if (imageFile) {
//       imageBase64 = await convertToBase64(imageFile);
//     }

//     const combinedData = {
//       id: data,
//       name: product?.name || newProductDetails.name,
//       brand: product?.brand || newProductDetails.brand,
//       description: product?.description || newProductDetails.description,
//       quantity: `${quantity} ${quantityType}`,
//       image: product?.imageUrl || imageBase64,
//       category: product?.category || newProductDetails.category,
//       shops: addedShops,
//       tax: taxType,
//     };

//     console.log("Final Product and Shop Data:", combinedData);
//     try {
//       const response = await fetch("https://backend.h7tex.com/api/add-product", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(combinedData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Product added successfully:", data);
//       // Clear state after successful addition
//       setQuantity("");
//       setQuantityType("ml");
//       setTaxType("20%");
//       setShops([]);
//       setImageFile(null);
//       setNewProductDetails({
//         name: "",
//         brand: "",
//         description: "",
//         category: "",
//       });
//       navigate("/"); // Navigate to the home page after successful submission
//     } catch (error) {
//       console.error("Error adding product:", error);
//     } finally {
//       setLoading(false); // Set loading to false
//     }
//   };

//   return (
//     <div className="w-full h-auto bg-neutral-100 p-6">
//       <div className="max-w-7xl mx-auto">
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
//           <div className="spinner border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
//           <p className="text-lg text-gray-700 mt-4 ml-4">Uploading product details...</p>
//         </div>
//       )}
//         {!loading && (
//           <>
//             {product ? (
//               <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
//                 <div className="w-full md:w-1/3 flex justify-center">
//                   {product.imageUrl ? (
//                     <img
//                       src={product.imageUrl}
//                       alt="Product"
//                       className="w-fit h-48 md:h-64 object-contain border border-gray-300 rounded-lg shadow-lg"
//                     />
//                   ) : (
//                     <div className="w-full h-auto flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-4">
//                       <p className="text-gray-700 mb-2">No Image Available</p>
//                     </div>
//                   )}
//                 </div>
//                 <div className="w-full md:w-2/3 md:pl-8 space-y-6">
//                   <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
//                   <h2 className="text-xl text-gray-700">Brand: <span className="font-semibold">{product.brand}</span></h2>
//                   <p className="text-lg text-gray-600">{product.description}</p>
//                   <p className="text-lg text-gray-600">Category: <span className="font-semibold">{product.category}</span></p>

//                   <div className="flex items-center space-x-4">
//                     <div>
//                       <label className="block text-xl font-semibold text-gray-900">Size:</label>
//                       <input
//                         type="number"
//                         value={quantity}
//                         onChange={handleQuantityChange}
//                         placeholder="Enter quantity"
//                         className="p-2 border border-gray-300 rounded-lg"
//                         min="0"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xl font-semibold text-gray-900">Type:</label>
//                       <select
//                         value={quantityType}
//                         onChange={handleQuantityTypeChange}
//                         className="p-2 border border-gray-300 rounded-lg"
//                       >
//                         <option value="ml">ml</option>
//                         <option value="kg">Kg</option>
//                         <option value="L">L</option>
//                         <option value="g">g</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <label className="text-xl font-semibold text-gray-900">Tax:</label>
//                     <select
//                       value={taxType}
//                       onChange={handleTaxTypeChange}
//                       className="p-2 border border-gray-300 rounded-lg"
//                     >
//                       <option value="0%">0%</option>
//                       <option value="5%">5%</option>
//                       <option value="20%">20%</option>
//                     </select>
//                   </div>

//                   <p className="text-lg text-gray-700">Selected Size: {quantity} {quantityType}</p>
//                   <p className="text-lg text-gray-700">Selected Tax: {taxType}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <h1 className="text-3xl font-semibold text-gray-900">Create New Product</h1>
//                 <div className="space-y-4">
//                   <label className="block text-xl font-semibold text-gray-900">Product Name:</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={newProductDetails.name}
//                     onChange={handleProductDetailChange}
//                     placeholder="Enter product name"
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                   />
//                   <label className="block text-xl font-semibold text-gray-900">Brand:</label>
//                   <input
//                     type="text"
//                     name="brand"
//                     value={newProductDetails.brand}
//                     onChange={handleProductDetailChange}
//                     placeholder="Enter brand"
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                   />
//                   <label className="block text-xl font-semibold text-gray-900">Category:</label>
//                   <input
//                     type="text"
//                     name="category"
//                     value={newProductDetails.category}
//                     onChange={handleProductDetailChange}
//                     placeholder="Enter category"
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                   />

//                   <div className="flex items-center space-x-4">
//                     <div>
//                       <label className="block text-xl font-semibold text-gray-900">Size:</label>
//                       <input
//                         type="number"
//                         value={quantity}
//                         onChange={handleQuantityChange}
//                         placeholder="Enter quantity"
//                         className="p-2 border border-gray-300 rounded-lg"
//                         min="0"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xl font-semibold text-gray-900">Type:</label>
//                       <select
//                         value={quantityType}
//                         onChange={handleQuantityTypeChange}
//                         className="p-2 border border-gray-300 rounded-lg"
//                       >
//                         <option value="ml">ml</option>
//                         <option value="kg">Kg</option>
//                         <option value="L">L</option>
//                         <option value="g">g</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     <label className="text-xl font-semibold text-gray-900">Tax:</label>
//                     <select
//                       value={taxType}
//                       onChange={handleTaxTypeChange}
//                       className="p-2 border border-gray-300 rounded-lg"
//                     >
//                       <option value="0%">0%</option>
//                       <option value="5%">5%</option>
//                       <option value="20%">20%</option>
//                     </select>
//                   </div>

//                   <label className="block text-xl font-semibold text-gray-900">Upload Image:</label>
//                   <input
//                     type="file"
//                     onChange={handleImageUpload}
//                     className="p-2 border border-gray-300 rounded-lg"
//                   />
//                   {imageFile && <p className="text-sm text-green-500 mt-2">Image selected: {imageFile.name}</p>}
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//         <ShopDetails onFinish={handleShopsAdded} />
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;



import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ShopDetails from "./ShopDetails"; // Ensure this path is correct
import axios from "axios"; // Import axios if you want to use it later
import QrScanner from "./Qr_for_whole_s"; // Import your barcode scanner component

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, data, category } = location.state || {}; // Product and category from the route

  const [quantity, setQuantity] = useState("");
  const [quantityType, setQuantityType] = useState("ml");
  const [taxType, setTaxType] = useState("20%");
  const [shops, setShops] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [newProductDetails, setNewProductDetails] = useState({
    name: "",
    brand: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [scannerVisible, setScannerVisible] = useState(false); // Scanner visibility state
  const [casebarcode, setcasebarcode] = useState(""); // State for the scanned barcode value

  const handleQuantityTypeChange = (event) => setQuantityType(event.target.value);
  const handleTaxTypeChange = (event) => setTaxType(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);
  const handleImageUpload = (event) => setImageFile(event.target.files[0]);
  const handleProductDetailChange = (event) => {
    const { name, value } = event.target;
    setNewProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleShopsAdded = async (addedShops) => {
    setLoading(true); // Set loading to true
    setShops(addedShops);

    // Read image as base64
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };

    let imageBase64 = null;
    if (imageFile) {
      imageBase64 = await convertToBase64(imageFile);
    }

    const combinedData = {
      id: data,
      name: product?.name || newProductDetails.name,
      brand: product?.brand || newProductDetails.brand,
      description: product?.description || newProductDetails.description,
      quantity: `${quantity} ${quantityType}`,
      casebarcode: casebarcode, // Include the scanned una number
      image: product?.imageUrl || imageBase64,
      category: product?.category || newProductDetails.category,
      shops: addedShops,
      tax: taxType,
    };

    console.log("Final Product and Shop Data:", combinedData);
    try {
      const response = await fetch("https://backend.h7tex.com/api/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product added successfully:", data);
      // Clear state after successful addition
      setQuantity("");
      setQuantityType("ml");
      setTaxType("20%");
      setShops([]);
      setImageFile(null);
      setNewProductDetails({
        name: "",
        brand: "",
        description: "",
        category: "",
      });
      navigate("/"); // Navigate to the home page after successful submission
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const handleOpenScanner = () => setScannerVisible(true);

  const handleBarcodeScanned = (scannedCode) => {
    setcasebarcode(scannedCode); // Update the state with the scanned barcode value
    setScannerVisible(false); // Hide scanner after scanning
  };

  return (
    <div className="w-full h-auto bg-neutral-100 p-6">
      <div className="max-w-7xl mx-auto">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
          <div className="spinner border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="text-lg text-gray-700 mt-4 ml-4">Uploading product details...</p>
        </div>
      )}
        {!loading && (
          <>
            {product ? (
              <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                <div className="w-full md:w-1/3 flex justify-center">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt="Product"
                      className="w-fit h-48 md:h-64 object-contain border border-gray-300 rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-auto flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-4">
                      <p className="text-gray-700 mb-2">No Image Available</p>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-2/3 md:pl-8 space-y-6">
                  <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
                  <h2 className="text-xl text-gray-700">Brand: <span className="font-semibold">{product.brand}</span></h2>
                  <p className="text-lg text-gray-600">{product.description}</p>
                  <p className="text-lg text-gray-600">Category: <span className="font-semibold">{product.category}</span></p>

                  <div className="flex items-center space-x-4">
                    <div>
                      <label className="block text-xl font-semibold text-gray-900">Size:</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="Enter quantity"
                        className="p-2 border border-gray-300 rounded-lg"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-xl font-semibold text-gray-900">Type:</label>
                      <select
                        value={quantityType}
                        onChange={handleQuantityTypeChange}
                        className="p-2 border border-gray-300 rounded-lg"
                      >
                        <option value="ml">ml</option>
                        <option value="kg">Kg</option>
                        <option value="L">L</option>
                        <option value="g">g</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-xl font-semibold text-gray-900">Tax:</label>
                    <select
                      value={taxType}
                      onChange={handleTaxTypeChange}
                      className="p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="0%">0%</option>
                      <option value="5%">5%</option>
                      <option value="20%">20%</option>
                    </select>
                  </div>

                  {/* <p className="text-lg text-gray-700">Selected Quantity: {quantity} {quantityType}</p>
                  <p className="text-lg text-gray-700">Selected Tax: {taxType}</p> */}

                  <button 
                  onClick={handleOpenScanner} 
                  className="flex bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Scan casebarcode
                </button>
                <p>Scanned UNA Number: {casebarcode}</p>
                </div>
                
              </div>
            ) : (
              <div className="space-y-6">
                <h1 className="text-3xl font-semibold text-gray-900">Create New Product</h1>
                <div className="space-y-4">
                  <label className="block text-xl font-semibold text-gray-900">Product Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={newProductDetails.name}
                    onChange={handleProductDetailChange}
                    placeholder="Enter product name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <label className="block text-xl font-semibold text-gray-900">Brand:</label>
                  <input
                    type="text"
                    name="brand"
                    value={newProductDetails.brand}
                    onChange={handleProductDetailChange}
                    placeholder="Enter brand"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <label className="block text-xl font-semibold text-gray-900">Category:</label>
                  <input
                    type="text"
                    name="category"
                    value={newProductDetails.category}
                    onChange={handleProductDetailChange}
                    placeholder="Enter category"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />

                  <div className="flex items-center space-x-4">
                    <div>
                      <label className="block text-xl font-semibold text-gray-900">Size:</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="Enter quantity"
                        className="p-2 border border-gray-300 rounded-lg"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-xl font-semibold text-gray-900">Type:</label>
                      <select
                        value={quantityType}
                        onChange={handleQuantityTypeChange}
                        className="p-2 border border-gray-300 rounded-lg"
                      >
                        <option value="ml">ml</option>
                        <option value="kg">Kg</option>
                        <option value="L">L</option>
                        <option value="g">g</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-xl font-semibold text-gray-900">Tax:</label>
                    <select
                      value={taxType}
                      onChange={handleTaxTypeChange}
                      className="p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="0%">0%</option>
                      <option value="5%">5%</option>
                      <option value="20%">20%</option>
                    </select>
                  </div>

                  <label className="block text-xl font-semibold text-gray-900">Upload Image:</label>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="p-2 border border-gray-300 rounded-lg"
                  />
                  {imageFile && <p className="text-sm text-green-500 mt-2">Image selected: {imageFile.name}</p>}
                </div>
                <button 
                onClick={handleOpenScanner} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Scan Barcode
              </button>
              <p>Scanned UNA Number: {casebarcode}</p>
              </div>
             
            )}
          </>
        )}
        {scannerVisible && <QrScanner onScan={handleBarcodeScanned} onClose={() => setScannerVisible(false)} />}
        <ShopDetails onFinish={handleShopsAdded} />
      </div>
    </div>
  );
}

export default ProductDetails;
