import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AsteroidPage from "./AsteroidPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:asteroidId" element={<AsteroidPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;