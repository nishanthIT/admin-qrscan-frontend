

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// function ShopDetails({ onFinish }) {
//   const [shops, setShops] = useState([{ price: "", Product_addr: "", type: "", id: "" }]);
//   const [addedShops, setAddedShops] = useState([]);
//   const [shopOptions, setShopOptions] = useState([]);
  

//   // Fetch shop options from the API
//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await fetch("https://localhost:3000/api/get-shops"); // Replace with your API URL
//         const fetchedShops = await response.json();
//         setShopOptions(fetchedShops.shops); // Assuming your API sends shop data in this structure
//       } catch (error) {
//         console.error("Error fetching shop options:", error);
//       }
//     };
//     fetchShops();
//   }, []);

//   // Handle changes in the input fields for shop details
//   const handleShopChange = (index, event) => {
//     const { name, value } = event.target;

//     const updatedShops = [...shops];
//     if (name === "type") {
//       // When a shop type (i.e. shop name) is selected, map the selected shop's ID
//       const selectedShop = shopOptions.find((shop) => shop.name === value);
//       updatedShops[index].type = value; // Store the shop's name
//       updatedShops[index].id = selectedShop ? selectedShop.id : ""; // Set corresponding ID
//     } else {
//       // For other fields like price and Product_addr
//       updatedShops[index][name] = value;
//     }

//     setShops(updatedShops);
//     console.log("Updated shop:", updatedShops);
//   };

//   // Add a new shop if all fields are filled
//   const addShop = () => {
//     const newShop = shops[shops.length - 1];
//     if (newShop.price && newShop.Product_addr && newShop.type && newShop.id) {
//       setAddedShops([...addedShops, newShop]);
//       setShops([{ price: "", Product_addr: "", type: "", id: "" }]);
//       console.log("Shop added:", newShop); // Log added shop
//     } else {
//       alert("Please fill all fields before adding a shop.");
//     }
//   };

//   // Finish adding the shops and trigger the onFinish function
//   const finishAddingShops = () => {
//     if (onFinish) onFinish(addedShops); // Pass added shops to the parent component
    
  
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-4">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-3">Add Shop Price</h2>

//       <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
//         {shops.map((shop, index) => (
//           <div key={index} className="space-y-4">
//             <div className="flex space-x-4 items-center">
//               {/* Shop Name (Type) */}
//               <div className="flex items-center">
//                 <label className="block text-xl font-semibold text-gray-900 mr-2">Shop:</label>
//                 <select
//                   name="type"
//                   value={shop.type}
//                   onChange={(e) => handleShopChange(index, e)}
//                   className="p-2 border border-gray-300 rounded-lg"
//                 >
//                   <option value="">Select Shop</option>
//                   {shopOptions.map((option) => (
//                     <option key={option.id} value={option.name}>
//                       {option.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Product Price */}
//             <input
//               type="text"
//               name="price"
//               value={shop.price}
//               onChange={(e) => handleShopChange(index, e)}
//               placeholder="Product Price"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />

//             {/* Product Address */}
//             <input
//               type="text"
//               name="Product_addr"
//               value={shop.Product_addr}
//               onChange={(e) => handleShopChange(index, e)}
//               placeholder="Product address"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>
//         ))}

//         {/* Buttons for adding and finishing */}
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={addShop}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
//           >
//             Add Shop
//           </button>

//           <button
//             onClick={finishAddingShops}
//             className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none"
//           >
//             Finish
//           </button>
//         </div>
//       </div>

//       {/* Display Added Shop Details */}
//       {addedShops.length > 0 && (
//         <div className="w-full max-w-4xl p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Added Shops</h2>
//           {addedShops.map((shop, index) => (
//             <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-4">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                 Shop {index + 1}: <span className="ml-2 text-gray-600">{shop.type}</span>
//               </h3>

//               {/* Shop Type */}
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-700 font-semibold">Product Address:</span>
//                 <span className="text-gray-600">{shop.Product_addr}</span>
//               </div>

//               {/* Product Price */}
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-700 font-semibold">Product Price:</span>
//                 <span className="text-gray-600">{shop.price}</span>
//               </div>

//               {/* Shop ID */}
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-700 font-semibold">Shop ID:</span>
//                 <span className="text-gray-600">{shop.id}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// ShopDetails.propTypes = {
//   onFinish: PropTypes.func.isRequired,
// };

// export default ShopDetails;


import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ShopDetails({ onFinish }) {
  const [shops, setShops] = useState([{ price: "", Product_addr: "", type: "", id: "" }]);
  const [addedShops, setAddedShops] = useState([]);
  const [shopOptions, setShopOptions] = useState([]);

  // Fetch shop options from the API
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch("https://backend.h7tex.com/api/get-shops"); // Replace with your API URL
        const fetchedShops = await response.json();
        setShopOptions(fetchedShops.shops);

        // Set the last shop as the default
        const lastShop = fetchedShops.shops[fetchedShops.shops.length - 1];
        if (lastShop) {
          setShops([{ type: lastShop.name, id: lastShop.id, price: "", Product_addr: "" }]);
        }
      } catch (error) {
        console.error("Error fetching shop options:", error);
      }
    };
    fetchShops();
  }, []);

  // Handle changes in the input fields for shop details
  const handleShopChange = (index, event) => {
    const { name, value } = event.target;

    const updatedShops = [...shops];
    if (name === "type") {
      // When a shop type (i.e. shop name) is selected, map the selected shop's ID
      const selectedShop = shopOptions.find((shop) => shop.name === value);
      updatedShops[index].type = value; // Store the shop's name
      updatedShops[index].id = selectedShop ? selectedShop.id : ""; // Set corresponding ID
    } else {
      // For other fields like price and Product_addr
      updatedShops[index][name] = value;
    }

    setShops(updatedShops);
  };

  // Add a new shop if all fields are filled
  const addShop = () => {
    const newShop = shops[shops.length - 1];
    if (newShop.price && newShop.Product_addr && newShop.type && newShop.id) {
      setAddedShops([...addedShops, newShop]);
      setShops([{ price: "", Product_addr: "", type: "", id: "" }]);
    } else {
      alert("Please fill all fields before adding a shop.");
    }
  };

  // Finish adding the shops and trigger the onFinish function
  const finishAddingShops = () => {
    if (onFinish) onFinish(addedShops); // Pass added shops to the parent component
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">Add Shop Price</h2>

      <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
        {shops.map((shop, index) => (
          <div key={index} className="space-y-4">
            <div className="flex space-x-4 items-center">
              {/* Shop Name (Type) */}
              <div className="flex items-center">
                <label className="block text-xl font-semibold text-gray-900 mr-2">Shop:</label>
                <select
                  name="type"
                  value={shop.type}
                  onChange={(e) => handleShopChange(index, e)}
                  className="p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Shop</option>
                  {shopOptions.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Price */}
            <input
              type="number"
              name="price"
              value={shop.price}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Case Price"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            {/* Product Address */}
            <input
              type="text"
              name="Product_addr"
              value={shop.Product_addr}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="AISLE Number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        ))}

        {/* Buttons for adding and finishing */}
        <div className="flex justify-between mt-4">
          <button
            onClick={addShop}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Shop
          </button>

          <button
            onClick={finishAddingShops}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none"
          >
            Finish
          </button>
        </div>
      </div>

      {/* Display Added Shop Details */}
      {addedShops.length > 0 && (
        <div className="w-full max-w-4xl p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Added Shops</h2>
          {addedShops.map((shop, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Shop {index + 1}: <span className="ml-2 text-gray-600">{shop.type}</span>
              </h3>

              {/* Shop Type */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Product Address:</span>
                <span className="text-gray-600">{shop.Product_addr}</span>
              </div>

              {/* Product Price */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Product Price:</span>
                <span className="text-gray-600">{shop.price}</span>
              </div>

              {/* Shop ID */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Shop ID:</span>
                <span className="text-gray-600">{shop.id}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ShopDetails.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default ShopDetails;
