import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import ProductDetails from "./components/ProductDetails";
import AddShop from "./components/AddShop";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/add-shop" element={<AddShop />} />
        
      </Routes>
    </Router>
  );
}

export default App;
