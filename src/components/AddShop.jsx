


// import { useState } from "react";
// import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs


// function ShopDetails({ onFinish }) {
//   const [shops, setShops] = useState([
//     { id: uuidv4(), name: "", address: "", phone: "" },
//   ]);
//   const [addedShops, setAddedShops] = useState([]);

//   const handleShopChange = (index, event) => {
//     const updatedShops = [...shops];
//     updatedShops[index][event.target.name] = event.target.value;
//     setShops(updatedShops);
//   };

//   const addShop = () => {
//     const newShop = shops[shops.length - 1];
//     if (newShop.name && newShop.address && newShop.phone) {
//       setAddedShops([...addedShops, newShop]);
//       setShops([{ id: uuidv4(), name: "", address: "", phone: "" }]);
//     } else {
//       alert("Please fill all fields before adding a shop.");
//     }
//   };

//   // Function to post added shops to the server
//   const postShopsToServer = async (shops) => {
//     try {
//       const response = await fetch("https://localhost:3000/api/add-shops", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(shops),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Response from server:", data);

//       alert("Shops successfully sent to server!");
//     } catch (error) {
//       console.error("Error posting shops:", error);
//       alert("Failed to post shops to server.");
//     }
//   };

//   const finishAddingShops = () => {
//     console.log("Shops added:", addedShops);
//     if (onFinish) onFinish(addedShops);
//     postShopsToServer(addedShops); // Post shops to the server
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-4">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-3">Shop Details</h2>
//       <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
//         {shops.map((shop, index) => (
//           <div key={shop.id} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={shop.name}
//               onChange={(e) => handleShopChange(index, e)}
//               placeholder="Shop Name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <input
//               type="text"
//               name="address"
//               value={shop.address}
//               onChange={(e) => handleShopChange(index, e)}
//               placeholder="Shop Address"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <input
//               type="text"
//               name="phone"
//               value={shop.phone}
//               onChange={(e) => handleShopChange(index, e)}
//               placeholder="Phone Number"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//         ))}

//         <div className="flex justify-between mt-4">
//           <button
//             onClick={addShop}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Add Shop
//           </button>
//           <button
//             onClick={finishAddingShops}
//             className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//           >
//             Finish
//           </button>
//         </div>
//       </div>

//       {addedShops.length > 0 && (
//         <div className="w-full max-w-4xl p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Added Shops</h2>
//           {addedShops.map((shop, index) => (
//             <div key={shop.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-4">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                 Shop {index + 1}: <span className="ml-2 text-gray-600">{shop.name}</span>
//               </h3>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-700 font-semibold">Shop Address:</span>
//                 <span className="text-gray-600">{shop.address}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-700 font-semibold">Phone Number:</span>
//                 <span className="text-gray-600">{shop.phone}</span>
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


import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ShopDetails({ onFinish }) {
  const [shops, setShops] = useState([
    { id: uuidv4(), name: "", address: "", phone: "" },
  ]);
  const [addedShops, setAddedShops] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const handleShopChange = (index, event) => {
    const updatedShops = [...shops];
    updatedShops[index][event.target.name] = event.target.value;
    setShops(updatedShops);
  };

  const addShop = () => {
    const newShop = shops[shops.length - 1];
    if (newShop.name && newShop.address && newShop.phone) {
      setAddedShops([...addedShops, newShop]);
      setShops([{ id: uuidv4(), name: "", address: "", phone: "" }]);
    } else {
      alert("Please fill all fields before adding a shop.");
    }
  };

  // Function to post added shops to the server
  const postShopsToServer = async (shops) => {
    try {
      const response = await fetch("https://backend.h7tex.com/api/add-shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shops),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Response from server:", data);

      alert("Shops successfully sent to server!");

      // Reset the form states before navigating
      setShops([{ id: uuidv4(), name: "", address: "", phone: "" }]);
      setAddedShops([]);

      // Navigate to home page after successful post
      navigate("/");
    } catch (error) {
      console.error("Error posting shops:", error);
      alert("Failed to post shops to server.");
    }
  };

  const finishAddingShops = () => {
    console.log("Shops added:", addedShops);
    if (onFinish) onFinish(addedShops);
    postShopsToServer(addedShops); // Post shops to the server
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">Shop Details</h2>
      <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
        {shops.map((shop, index) => (
          <div key={shop.id} className="space-y-4">
            <input
              type="text"
              name="name"
              value={shop.name}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Shop Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="address"
              value={shop.address}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Shop Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="phone"
              value={shop.phone}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        ))}

        <div className="flex justify-between mt-4">
          <button
            onClick={addShop}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Shop
          </button>
          <button
            onClick={finishAddingShops}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Finish
          </button>
        </div>
      </div>

      {addedShops.length > 0 && (
        <div className="w-full max-w-4xl p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Added Shops</h2>
          {addedShops.map((shop, index) => (
            <div key={shop.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Shop {index + 1}: <span className="ml-2 text-gray-600">{shop.name}</span>
              </h3>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Shop Address:</span>
                <span className="text-gray-600">{shop.address}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Phone Number:</span>
                <span className="text-gray-600">{shop.phone}</span>
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

