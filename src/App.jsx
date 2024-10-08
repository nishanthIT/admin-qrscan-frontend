import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import QrScannerComponent from "./components/QrScanner";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
