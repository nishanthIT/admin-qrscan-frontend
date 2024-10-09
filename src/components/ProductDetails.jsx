import { useLocation } from "react-router-dom";
import { useState } from "react";
import ShopDetails from "./ShopDetails";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state; // Get the product passed from MainComponent
  const [quantity, setQuantity] = useState(""); // State for manually entered quantity
  const [quantityType, setQuantityType] = useState("No. of items"); // Default quantity type
  const [shops, setShops] = useState([]); // To store the added shops

  // Handle change in the quantity type
  const handleQuantityTypeChange = (event) => {
    setQuantityType(event.target.value);
  };

  // Handle manual quantity input change
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // Callback function to handle added shops from ShopDetails component
  const handleShopsAdded = (addedShops) => {
    setShops(addedShops);

    // Combine product and shop data in one object
    const combinedData = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      "Selected Quantity": `${quantity} ${quantityType}`,
      image: product.image,
      shops: addedShops,
    };

    // Log the combined data to the console
    console.log("Final Product and Shop Data:", combinedData);
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full h-auto bg-neutral-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Left Section: Product Image */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3">
            <img
              src={product.image} // Dynamic image path
              className="w-full h-auto object-cover border border-gray-300 rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Product Details */}
          <div className="w-full md:w-2/3 md:pl-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700">
              Brand: <span className="font-semibold">{product.brand}</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Section */}
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-xl font-semibold text-gray-900">
                  Quantity:
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  placeholder="Enter quantity"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="0"
                />
              </div>

              {/* Dropdown for selecting the quantity type */}
              <div>
                <label className="block text-xl font-semibold text-gray-900">
                  Type:
                </label>
                <select
                  value={quantityType}
                  onChange={handleQuantityTypeChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="No. of items">No. of items</option>
                  <option value="Kg by Weight">Kg by Weight</option>
                  <option value="Liters">Liters</option>
                </select>
              </div>
            </div>

            {/* Display the selected quantity and type */}
            <p className="text-lg text-gray-700">
              Selected Quantity: {quantity} {quantityType}
            </p>
          </div>
        </div>
      </div>

      {/* ShopDetails component, pass the handler to retrieve added shops */}
      <ShopDetails onFinish={handleShopsAdded} />
    </div>
  );
}

export default ProductDetails;
