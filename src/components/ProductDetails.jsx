import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Get product details from state

  if (!product) {
    return <p>No product details available</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        {product.name}
      </h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover mb-6"
      />
      <p className="text-lg text-gray-700 mb-2">
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className="text-lg text-gray-700">
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;
