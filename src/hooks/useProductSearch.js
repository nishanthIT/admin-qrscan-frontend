// import { useState } from "react";
// import axios from "axios";

// // Axios instance
// const item = axios.create({
//   baseURL: 'https://scanbot.io/wp-json/upc/v1/lookup',
// });
// // const item = axios.create({
// //   baseURL: '/api/wp-json/upc/v1/lookup',  // Proxy will handle the API calls
// // });

// // Custom hook to handle product search
// const useProductSearch = () => {
//   const [result, setResult] = useState(null); // Store the fetched product
//   const [error, setError] = useState(""); // Store error message if any
//   const [loading, setLoading] = useState(false);  // Track loading state
//   // Function to search the product using the barcode ID (input)
//   const searchApi = async (input) => {
//     try {
//           setLoading(true);  // Start loading
//       const response = await item.get(`/${input}`);
//       setResult(response.data.product); // Update the result with the product data
//       console.log(response.data.product)
//     } catch (err) {
//       setError("An error occurred while fetching the product.");
//     }finally {
//             setLoading(false);  // End loading
//     }
    
//   };

//   return [result, error, loading, searchApi]; // Return result, error, and search function
// };

// export default useProductSearch;


// import { useState } from "react";
// import axios from "axios";

// // Axios instance
// const item = axios.create({
//   baseURL: '/api/wp-json/upc/v1/lookup',  // Proxy will handle the API calls
// });

// // Custom hook to handle product search
// const useProductSearch = () => {
//   const [result, setResult] = useState(null);  // Store the fetched product
//   const [error, setError] = useState("");      // Store error message if any
//   const [loading, setLoading] = useState(false);  // Track loading state

//   // Function to search the product using the barcode ID (input)
//   const searchApi = async (input) => {
//     setLoading(true);  // Start loading
//     try {
//       const response = await item.get(`/${input}`);
//       setResult(response.data);  // Update the result with the product data
//       console.log("data direct", response.data.product);  // Log the actual response
//     } catch (err) {
//       setError("An error occurred while fetching the product.");
//     } finally {
//       setLoading(false);  // End loading
//     }
//   };

//   return [result, error, loading, searchApi];  // Return result, error, loading, and search function
// };

// export default useProductSearch



// import { useState } from "react";
// import axios from "axios";

// // Axios instance using the environment variable
// const item = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // Use the API URL from environment variable
// });

// // Custom hook to handle product search
// const useProductSearch = () => {
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to search the product using the barcode ID (input)
//   const searchApi = async (input) => {
//     try {
//       setLoading(true);
//       const response = await item.get(`/${input}`);
//       setResult(response.data.product);
//       console.log(response.data.product);
//     } catch (err) {
//       setError("An error occurred while fetching the product.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return [result, error, loading, searchApi];
// };

// export default useProductSearch;




import { useState } from "react";
import axios from "axios";

// Axios instance
const item = axios.create({
  baseURL: 'https://backend.h7tex.com/api/scanbot',  // Proxy will handle the API calls
});

// Custom hook to handle product search
const useProductSearch = () => {
  const [result, setResult] = useState(null);  // Store the fetched product
  const [error, setError] = useState("");      // Store error message if any
  const [loading, setLoading] = useState(false);  // Track loading state

  // Function to search the product using the barcode ID (input)
  const searchApi = async (input) => {
    setLoading(true);  // Start loading
    try {
      const response = await item.get(`/${input}`);
      setResult(response.data);  // Update the result with the product data
      console.log("data direct", response.data.product);  // Log the actual response
    } catch (err) {
      setError("An error occurred while fetching the product.");
    } finally {
      setLoading(false);  // End loading
    }
  };

  return [result, error, loading, searchApi];  // Return result, error, loading, and search function
};

export default useProductSearch;