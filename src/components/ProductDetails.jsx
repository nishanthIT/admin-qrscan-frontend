import { useLocation } from "react-router-dom";
import ShopDetails from "./ShopDetails";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state; // Get the product passed from MainComponent
  console.log(product.image);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full h-auto bg-neutral-100 p-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Left Section: Product Image */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3">
            <img
              src={product.image} // Dynamic image path
              // alt={product.name}
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

            <p className="text-2xl font-semibold text-gray-900">
              Quantity: {product.quantity}
            </p>
          </div>
        </div>
      </div>
      <ShopDetails />
    </div>
  );
}

export default ProductDetails;
