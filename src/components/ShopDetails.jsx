import { useState } from "react";
import PropTypes from "prop-types";

function ShopDetails({ onFinish }) {
  const [shops, setShops] = useState([
    { name: "", address: "", phone: "", price: "" },
  ]);
  const [addedShops, setAddedShops] = useState([]);

  // Handle changes in the input fields for shop details
  const handleShopChange = (index, event) => {
    const updatedShops = [...shops];
    updatedShops[index][event.target.name] = event.target.value;
    setShops(updatedShops);
  };

  // Add a new shop if all fields are filled
  const addShop = () => {
    const newShop = shops[shops.length - 1];
    if (newShop.name && newShop.address && newShop.phone) {
      setAddedShops([...addedShops, newShop]);
      setShops([{ name: "", address: "", phone: "", price: "" }]); // Reset the input fields
    } else {
      alert("Please fill all fields before adding a shop.");
    }
  };

  // Finish adding the shops and trigger the onFinish function
  const finishAddingShops = () => {
    if (onFinish) onFinish(); // Callback to parent component when finished
    alert("All shops added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-3">
        Shop Details
      </h2>

      {/* Left Section: Input Fields for Adding Shop Details */}
      <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
        {shops.map((shop, index) => (
          <div key={index} className="space-y-4">
            {/* Shop Name */}
            <input
              type="text"
              name="name"
              value={shop.name}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Shop Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Shop Price */}
            <input
              type="text"
              name="price" // Ensure this matches the state field name
              value={shop.price}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Shop Price"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Shop Address */}
            <input
              type="text"
              name="address"
              value={shop.address}
              onChange={(e) => handleShopChange(index, e)}
              placeholder="Shop Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Shop Phone Number */}
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

        {/* Buttons for adding and finishing */}
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

      {/* Right Section: Display Added Shop Details */}
      {addedShops.length > 0 && (
        <div className="w-full max-w-4xl p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Added Shops
          </h2>

          {addedShops.map((shop, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-4"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Shop {index + 1}:{" "}
                <span className="ml-2 text-gray-600">{shop.name}</span>
              </h3>

              {/* Shop Address and Phone */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">Shop Price:</span>
                <span className="text-gray-600">{shop.price}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">
                  Shop Address:
                </span>
                <span className="text-gray-600">{shop.address}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-semibold">
                  Phone Number:
                </span>
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
